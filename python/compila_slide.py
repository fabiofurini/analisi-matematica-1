"""Compila le slide dei capitoli (beamer) e le copia fra i PDF del sito.

Le slide stanno in slides/ del repository della lingua (it/slides, en/slides),
come in MIP e nel Laboratorio: una cartella per capitolo, slides/<nome>/ con
<nome>.tex e il suo PDF (nome = slide-<capitolo>, slides-<chapter> in inglese);
in slides/ ci sono anche decla_slide.tex e FIGURES/. La cartella non va su
GitHub; sul sito va solo il PDF, in docs/pdf/.

Uso: python3 python/compila_slide.py      (LINGUA=en per l'inglese)
"""
import shutil
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor

from capitoli import CAPITOLI, DOCS, IT, LINGUA, ident

SLIDES = IT / "slides"
PREFISSO = "slides" if LINGUA == "en" else "slide"


def compila(cap):
    nome = f"{PREFISSO}-{ident(*cap[:3])}"
    tex = SLIDES / nome / f"{nome}.tex"
    if not tex.exists():
        return None
    for _ in range(2):
        subprocess.run(["pdflatex", "-interaction=nonstopmode", tex.name], cwd=tex.parent,
                       capture_output=True, timeout=900)
    log = tex.with_suffix(".log").read_text(errors="replace")
    errori = log.count("\n! ")
    pdf = tex.with_suffix(".pdf")
    if not pdf.exists():
        return f"ERRORE {nome}: nessun PDF"
    shutil.copy(pdf, DOCS / "pdf" / pdf.name)
    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    pagine = next((l.split()[-1] for l in info.splitlines() if l.startswith("Pages")), "?")
    return f"{'ok' if not errori else 'ERRORI ' + str(errori)}  {pdf.name}  ({pagine} slide)"


if __name__ == "__main__":
    (DOCS / "pdf").mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(8) as ex:
        esiti = [e for e in ex.map(compila, CAPITOLI) if e]
    for e in esiti:
        print(e)
    print(f"[{LINGUA}] slide compilate: {len(esiti)} su {len(CAPITOLI)} capitoli")
    sys.exit(1 if any(not e.startswith("ok") for e in esiti) else 0)
