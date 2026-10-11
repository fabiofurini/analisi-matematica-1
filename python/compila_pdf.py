"""PDF del sito: i volumi della dispensa nel formato della collana.

Non si pubblicano più i PDF dei singoli capitoli nel formato delle note: i PDF
sono i cinque volumi delle dispense e i cinque eserciziari prodotti da
genera_dispensa.py (sorgenti privati in it/volumes/lecture_notes/dispensa_N_*,
it/volumes/exercises/esercizi_N_* e, in inglese, en/volumes/lecture_notes/lecture_notes_N_*,
en/volumes/exercises/exercises_N_*). Questo script li genera, compila (fuori da
Dropbox) e copia in docs/pdf/.
Uso: python3 python/compila_pdf.py [dispensa-N|esercizi-N ...]   (LINGUA=en)
"""
import os
import subprocess
import sys
from pathlib import Path

if __name__ == "__main__":
    r = subprocess.run([sys.executable, str(Path(__file__).with_name("genera_dispensa.py")), "--compila", *sys.argv[1:]],
                       env=dict(os.environ))
    sys.exit(r.returncode)
