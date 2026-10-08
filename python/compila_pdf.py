"""PDF del sito: i volumi della dispensa nel formato della collana.

Non si pubblicano più i PDF dei singoli capitoli nel formato delle note: i PDF
sono i cinque volumi prodotti da genera_dispensa.py (sorgenti privati in
it/dispensa_N_* e en/notes_N_*). Questo script li genera, compila e copia in
docs/pdf/.  Uso: python3 python/compila_pdf.py [dispensa-N]   (LINGUA=en)
"""
import os
import subprocess
import sys
from pathlib import Path

if __name__ == "__main__":
    r = subprocess.run([sys.executable, str(Path(__file__).with_name("genera_dispensa.py")), "--compila", *sys.argv[1:]],
                       env=dict(os.environ))
    sys.exit(r.returncode)
