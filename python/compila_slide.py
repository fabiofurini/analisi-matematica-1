"""Compila le slide dei capitoli (beamer) e le copia fra i PDF del sito.

Le slide sono nelle cartelle SLIDES/ delle dispense (materiale_sorgente/DISPENSE
e DISPENSE_EN). Si compila su una copia dell'albero in build/ (le dispense non
ricevono file ausiliari); sul sito va solo il PDF: docs/pdf/slide-<capitolo>.pdf
(slides-<chapter>.pdf in inglese). I capitoli senza slide sono saltati.

Uso: python3 python/compila_slide.py      (LINGUA=en per l'inglese)
"""
import shutil
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from capitoli import CAPITOLI, DOCS, IT, LINGUA, SORGENTE, ident

ALBERO = IT / "build" / "slides_tree"
PREFISSO = "slides" if LINGUA == "en" else "slide"


def nome_pdf(cap):
    return f"{PREFISSO}-{ident(*cap[:3])}.pdf"


def deck(cap):
    """Il file delle slide del capitolo nell'albero copiato, o None."""
    cartella = ALBERO / Path(cap[3]).parent / "SLIDES"
    trovati = sorted(cartella.glob("*_Slides.tex")) if cartella.exists() else []
    return trovati[0] if trovati else None


def compila(cap):
    tex = deck(cap)
    if tex is None:
        return None
    for _ in range(2):
        subprocess.run(["pdflatex", "-interaction=nonstopmode", tex.name], cwd=tex.parent,
                       capture_output=True, timeout=900)
    log = tex.with_suffix(".log").read_text(errors="replace")
    errori = log.count("\n! ")
    pdf = tex.with_suffix(".pdf")
    nome = nome_pdf(cap)
    if not pdf.exists():
        return f"ERRORE {nome}: nessun PDF"
    shutil.copy(pdf, DOCS / "pdf" / nome)
    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    pagine = next((l.split()[-1] for l in info.splitlines() if l.startswith("Pages")), "?")
    return f"{'ok' if not errori else 'ERRORI ' + str(errori)}  {nome}  ({pagine} slide)"


if __name__ == "__main__":
    if ALBERO.exists():
        shutil.rmtree(ALBERO)
    shutil.copytree(SORGENTE, ALBERO, ignore=shutil.ignore_patterns(
        "*.aux", "*.log", "*.nav", "*.snm", "*.toc", "*.out", "*.vrb", "*.synctex.gz"))
    (DOCS / "pdf").mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(8) as ex:
        esiti = [e for e in ex.map(compila, CAPITOLI) if e]
    for e in esiti:
        print(e)
    print(f"[{LINGUA}] slide compilate: {len(esiti)} su {len(CAPITOLI)} capitoli")
    sys.exit(1 if any(not e.startswith("ok") for e in esiti) else 0)
