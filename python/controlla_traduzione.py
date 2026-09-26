"""Controllo della traduzione inglese: parole italiane rimaste nei sorgenti EN.

Conta, per ogni file di DISPENSE_EN (ed ESERCIZI_EN se esiste), le parole
italiane frequenti fuori dai commenti LaTeX. Uso:
    LINGUA=en python3 python/controlla_traduzione.py
"""
import os
import re

os.environ["LINGUA"] = "en"
from capitoli import CAPITOLI, ESERCIZI, SORGENTE, SORGENTE_ES, ident, ident_es  # noqa: E402

PAROLE = r"\b(della|delle|dello|degli|abbiamo|quindi|funzione|funzioni|allora|sono|dove|anche|questo|questa|perché|poiché|ovvero|cioè|essere|numero|successione|limite|dimostrazione|esempio|segue|valore|punto|infatti|inoltre|ogni|tutti)\b"


def conta(path):
    s = path.read_text(errors="replace")
    s = s.split("\\end{document}")[0]
    righe = [r for r in s.split("\n") if not r.lstrip().startswith("%")]
    testo = "\n".join(re.sub(r"(?<!\\)%.*", "", r) for r in righe)
    return len(re.findall(PAROLE, testo)), len(testo.split())


if __name__ == "__main__":
    problemi = 0
    voci = [(ident(*c[:3]), SORGENTE / c[3]) for c in CAPITOLI]
    if SORGENTE_ES.exists():
        voci += [(ident_es(*c[:3]), SORGENTE_ES / c[3]) for c in ESERCIZI]
    for cid, p in voci:
        n, tot = conta(p)
        if n > 3:
            problemi += 1
            print(f"{cid:45s} {n:4d} parole italiane su {tot} ({1000 * n / max(tot, 1):.1f}‰)")
    print("file da ricontrollare:", problemi)
