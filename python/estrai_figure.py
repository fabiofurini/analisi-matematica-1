"""Compila le figure delle note (TikZ/pgfplots) in SVG per il sito.

Legge build/figure/<id>/ prodotto da converti_tex.py: ogni figNN.tikz diventa
un documento standalone con il preambolo del capitolo (stessi font e macro
delle note), si compila con pdflatex in una copia temporanea della cartella
del capitolo (gli originali non si toccano) e si converte in SVG con
pdftocairo. Le immagini già pronte (figNN.file) si copiano o si convertono.

Uso:
    python3 python/estrai_figure.py                # tutte
    python3 python/estrai_figure.py derivate-05    # solo alcuni capitoli
"""
from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from capitoli import DOCS, IT, SORGENTE

BUILD = IT / "build"


def preambolo_standalone(pre: str) -> str:
    pre = re.sub(r"\\documentclass(\[[^\]]*\])?\{[^}]*\}", r"\\documentclass[12pt,border=4pt]{standalone}", pre, count=1)
    # \input{./../../decla} -> percorso assoluto della copia delle note
    decla = (SORGENTE / "decla.tex").as_posix()
    pre = re.sub(r"\\input\{[./]*decla(\.tex)?\}", lambda m: "\\input{" + decla + "}", pre)
    return pre


def compila(cid: str, fig: Path, pre: str, cartella: Path) -> str:
    n = fig.stem
    out = DOCS / "img" / cid
    out.mkdir(parents=True, exist_ok=True)
    codice = fig.read_text()
    doc = pre + "\n\\begin{document}\n" + codice + "\n\\end{document}\n"
    with tempfile.TemporaryDirectory(dir=BUILD / "tmp") as tmp:
        tmp = Path(tmp)
        # i file di supporto della cartella del capitolo (immagini, dati, .sty)
        for f in cartella.iterdir():
            if f.is_file() and f.suffix in (".sty", ".png", ".jpg", ".pdf", ".dat", ".csv", ".txt", ".tex"):
                shutil.copy(f, tmp / f.name)
            elif f.is_dir() and f.name in ("FIGURE", "GRAFICI", "TABELLE", "DATI"):
                shutil.copytree(f, tmp / f.name)
        (tmp / "f.tex").write_text(doc)
        r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "f.tex"],
                           cwd=tmp, capture_output=True, text=True, errors="replace", timeout=300)
        if not (tmp / "f.pdf").exists():
            err = "\n".join(l for l in r.stdout.splitlines() if l.startswith("!"))[:300]
            return f"ERRORE {cid}/{n}: {err}"
        subprocess.run(["pdftocairo", "-svg", "f.pdf", str(out / f"{n}.svg")], cwd=tmp, check=True)
    return f"ok {cid}/{n}"


def copia_file(cid: str, fig: Path) -> str:
    src = Path(fig.read_text().strip())
    out = DOCS / "img" / cid
    out.mkdir(parents=True, exist_ok=True)
    n = fig.stem
    if not src.exists():
        return f"ERRORE {cid}/{n}: manca {src}"
    ext = src.suffix.lower()
    if ext in (".png", ".jpg", ".jpeg", ".svg", ".gif"):
        shutil.copy(src, out / f"{n}{ext}")
    elif ext == ".pdf":
        subprocess.run(["pdftocairo", "-svg", str(src), str(out / f"{n}.svg")], check=True)
    elif ext == ".eps":
        with tempfile.TemporaryDirectory(dir=BUILD / "tmp") as tmp:
            pdf = Path(tmp) / "f.pdf"
            subprocess.run(["epstopdf", str(src), f"--outfile={pdf}"], check=True)
            subprocess.run(["pdftocairo", "-svg", str(pdf), str(out / f"{n}.svg")], check=True)
    return f"ok {cid}/{n}"


def main(filtri: list[str]):
    (BUILD / "tmp").mkdir(parents=True, exist_ok=True)
    lavori = []
    for d in sorted((BUILD / "figure").iterdir()):
        if not any(d.name.startswith(f) for f in filtri):
            continue
        pre = preambolo_standalone((d / "preambolo.tex").read_text())
        cartella = Path((d / "cartella.txt").read_text().strip())
        vecchie = DOCS / "img" / d.name
        if vecchie.exists():
            shutil.rmtree(vecchie)
        for fig in sorted(d.glob("fig*.tikz")):
            lavori.append(("tikz", d.name, fig, pre, cartella))
        for fig in sorted(d.glob("fig*.file")):
            lavori.append(("file", d.name, fig, None, None))

    def esegui(l):
        tipo, cid, fig, pre, cartella = l
        try:
            return compila(cid, fig, pre, cartella) if tipo == "tikz" else copia_file(cid, fig)
        except Exception as e:  # noqa: BLE001
            return f"ERRORE {cid}/{fig.stem}: {e}"

    with ThreadPoolExecutor(max_workers=8) as ex:
        risultati = list(ex.map(esegui, lavori))
    errori = [r for r in risultati if r.startswith("ERRORE")]
    print(f"{len(risultati) - len(errori)} figure ok, {len(errori)} errori")
    for e in errori:
        print(e)
    (BUILD / "figure_errori.txt").write_text("\n".join(errori))


if __name__ == "__main__":
    main(sys.argv[1:] or [""])
