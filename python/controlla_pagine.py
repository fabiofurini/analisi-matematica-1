"""Controllo delle pagine costruite: apre ogni capitolo in Chrome headless e
conta le formule che MathJax non riesce a rendere (mjx-merror) e i residui
di LaTeX rimasti come testo.

Uso: python3 python/controlla_pagine.py [prefisso]   (dopo mkdocs build)
"""
import functools
import http.server
import re
import subprocess
import sys
import threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from capitoli import IT as _RADICE
SITE = _RADICE / "site"
PORTA = 8766


def server():
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(SITE))
    h.func.log_message = lambda *a: None
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    s = http.server.ThreadingHTTPServer(("127.0.0.1", PORTA), h)
    threading.Thread(target=s.serve_forever, daemon=True).start()


def controlla(rel):
    url = f"http://127.0.0.1:{PORTA}/{rel}"
    r = subprocess.run(["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
                        "--virtual-time-budget=30000", "--dump-dom", url],
                       capture_output=True, text=True, timeout=180)
    dom = r.stdout
    errori = re.findall(r'data-mjx-error="([^"]*)"', dom)
    corpo = re.sub(r"<mjx-container.*?</mjx-container>", " ", dom, flags=re.S)
    corpo = re.sub(r"<(script|style|code|pre)[^>]*>.*?</\1>", " ", corpo, flags=re.S)
    corpo = re.sub(r"<[^>]+>", " ", corpo)
    residui = re.findall(r"\\(?:frac|begin|end|lim|sum|infty|rr|in|le|ge|cdot|sqrt|tilde|bar)\b|\$", corpo)
    # titoli di box spezzati: restano nel testo come virgolette orfane
    residui += ['titolo di box spezzato: ' + t for t in re.findall(r'^\s*(\S[^\n"]{0,60})"\s*$', corpo, flags=re.M)]
    # tilde di LaTeX rimaste visibili (dentro \text{...} MathJax le stampa)
    residui += ['tilde visibile'] * len(re.findall(r"\S~\S", corpo))
    return rel, errori, residui, len(dom)


if __name__ == "__main__":
    filtro = sys.argv[1] if len(sys.argv) > 1 else ""
    server()
    pagine = sorted(str(p.parent.relative_to(SITE)) + "/" for p in SITE.glob("*/*/index.html")
                    if (re.match(r"\d\d-", p.parent.name) or p.parent.name.startswith("es-")) and str(p.parent.relative_to(SITE)).startswith(filtro))
    with ThreadPoolExecutor(6) as ex:
        ris = list(ex.map(controlla, pagine))
    tot = 0
    for rel, err, resid, n in ris:
        tot += len(err) + len(resid)
        stato = "ok" if not err and not resid else f"{len(err)} errori MathJax, {len(resid)} residui {sorted(set(resid))[:5]}"
        print(f"{rel:45s} {stato}")
        for e in sorted(set(err))[:6]:
            print("     ·", e)
    print("TOTALE problemi:", tot)
