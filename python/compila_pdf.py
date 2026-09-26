"""Ricompila i PDF dei capitoli dalla copia corretta delle note.

La copia `materiale_sorgente/DISPENSE/` viene duplicata in build/tex/ e lì si
compila (due passate di pdflatex); i PDF finiscono in docs/pdf/<id>.pdf.
Né le note originali né la copia ricevono file ausiliari.

Uso: python3 python/compila_pdf.py [prefisso]
"""
import shutil
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor

from capitoli import CAPITOLI, DOCS, ESERCIZI, IT, SORGENTE, SORGENTE_ES, ident, ident_es

BUILD = IT / "build" / "tex"
BUILD_ES = IT / "build" / "tex_es"


def compila(cap, esercizi=False):
    cid = ident_es(*cap[:3]) if esercizi else ident(*cap[:3])
    tex = (BUILD_ES if esercizi else BUILD) / cap[3]
    for _ in range(2):
        subprocess.run(["pdflatex", "-interaction=nonstopmode", tex.name], cwd=tex.parent,
                       capture_output=True, timeout=600)
    pdf = tex.with_suffix(".pdf")
    if not pdf.exists():
        return f"ERRORE {cid}"
    shutil.copy(pdf, DOCS / "pdf" / f"{cid}.pdf")
    return f"ok {cid}"


if __name__ == "__main__":
    filtro = sys.argv[1] if len(sys.argv) > 1 else ""
    if BUILD.exists():
        shutil.rmtree(BUILD)
    shutil.copytree(SORGENTE, BUILD, ignore=shutil.ignore_patterns("*.pdf", "*.aux", "*.log"))
    if BUILD_ES.exists():
        shutil.rmtree(BUILD_ES)
    shutil.copytree(SORGENTE_ES, BUILD_ES, ignore=shutil.ignore_patterns("*.pdf", "*.aux", "*.log"))
    caps = [c for c in CAPITOLI if ident(*c[:3]).startswith(filtro)]
    es = [c for c in ESERCIZI if ident_es(*c[:3]).startswith(filtro)]
    with ThreadPoolExecutor(6) as ex:
        ris = list(ex.map(compila, caps)) + list(ex.map(lambda c: compila(c, True), es))
    for r in ris:
        if not r.startswith("ok"):
            print(r)
    print(f"{len(caps)} capitoli e {len(es)} fogli di esercizi compilati")
