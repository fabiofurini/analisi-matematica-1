"""Genera la struttura del sito dal registro dei capitoli.

Scrive:
  - mkdocs.yml (con la nav completa)
  - docs/<parte>/index.md: la pagina della parte, una card per capitolo
  - docs/indice.md: l'indice completo
I titoli dei capitoli vengono dalle pagine già convertite (front matter).
"""
from __future__ import annotations

import re

from pathlib import Path

from capitoli import CAPITOLI, DOCS, IT, LINGUA, PAGINE_SPOSTATE, PARTI, ident, num_volume, pagina, voce_menu

EN = LINGUA == "en"

import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[2].parent / "QUIZ_ENGINE"))
import integra_quiz as QZ  # noqa: E402

REPO = "https://github.com/fabiofurini/analisi-matematica-1"
SITO = "https://fabiofurini.github.io/analisi-matematica-1/"


def titolo(parte, num, slug):
    p = DOCS / pagina(parte, num, slug)
    if not p.exists():
        return None
    m = re.search(r'^title: "(.*)"$', p.read_text(), re.M)
    return m.group(1) if m else slug


def sommario(parte, num, slug, max_voci=4):
    """Le prime sezioni del capitolo, per la card."""
    p = DOCS / pagina(parte, num, slug)
    sez = re.findall(r"^## \d+\. (.+)$", p.read_text(), re.M)
    sez = [re.sub(r"\$[^$]*\$", "…", s) for s in sez]
    testo = " · ".join(sez[:max_voci])
    return testo + (" · …" if len(sez) > max_voci else "")


def barra_parte(key, np, caps, descr):
    """In testa alla pagina della parte: la stessa pillola dei capitoli (Parte N · titolo breve),
    la descrizione in una riga e l'elenco breve del materiale da scaricare."""
    from converti_tex import link_app, link_slide, link_volumi
    n = len(caps)
    pill = (f"**{'Part' if EN else 'Parte'} {np} · {voce_menu(key)}** · {n} "
            + (("chapter" if n == 1 else "chapters") if EN else ("capitolo" if n == 1 else "capitoli")))
    righe = ['<div class="info-capitolo" markdown>', "", pill, "", "</div>", "", descr, "",
             "**Downloads**" if EN else "**Da scaricare**", ""]
    righe += [f"- {v}" for v in link_volumi(key)]
    slide = []
    for parte, num, slug, _ in caps:
        s = link_slide(ident(parte, num, slug))
        if s:
            url = s[s.index("](") + 2:-1]
            slide.append(f"[{num_volume(parte, num)}]({url})")
    if slide:
        righe.append(f"- :material-presentation: {'Slides by chapter' if EN else 'Slide dei capitoli'}: " + " · ".join(slide))
    app = []
    for parte, num, slug, _ in caps:
        app += [a for a in link_app(pagina(parte, num, slug)) if a not in app]
    righe += [f"- {a}" for a in app]
    return righe + [""]


def esercizi():
    """Pagina indice degli esercizi e voce di menu."""
    from capitoli import CARTELLA_ES, ESERCIZI, PARTI_ES, ident_es
    righe = ["# " + ("Exercises" if EN else "Esercizi"), "",
             ("Exercise sheets with **worked solutions**, organized as the parts of the notes. "
              "Try each exercise on your own first: the solution opens with a click." if EN else
              "Fogli di esercizi con le **soluzioni svolte**, divisi come le parti delle dispense. "
              "Prova prima da solo: la soluzione si apre con un clic."), "",
             '<div class="grid cards" markdown>', ""]
    voci = ["  - " + ("Exercises" if EN else "Esercizi") + ":", f"      - {CARTELLA_ES}/index.md"]
    for key, (nit, nen, cen) in PARTI_ES.items():
        fogli = [e for e in ESERCIZI if e[0] in (key, cen)]
        fogli = [e for e in fogli if (DOCS / CARTELLA_ES / f"{ident_es(*e[:3])}.md").exists()]
        if not fogli:
            continue
        nome = nen if EN else nit
        # nel menu il nome breve della parte (come le voci in alto)
        from capitoli import MENU, titolo_breve_es
        breve = {"integrali": ("Integrali", "Integrals")}.get(key) or MENU.get(key) or MENU.get(cen)
        voci.append(f"      - {breve[1 if EN else 0] if breve else nome}:")
        righe += [f"-   **{nome}**", "", "    ---", ""]
        for e in fogli:
            cid = ident_es(*e[:3])
            testo = (DOCS / CARTELLA_ES / f"{cid}.md").read_text()
            t = re.search(r'^title: "(.*)"$', testo, re.M).group(1)
            n = len(re.findall(r'^!!! esercizio ', testo, re.M))
            voci.append(f'          - "{titolo_breve_es(cid, t)}": {CARTELLA_ES}/{cid}.md')
            righe.append(f"    - [{t}]({cid}.md) · {n} " + ("exercises" if EN else "esercizi"))
        righe.append("")
    righe += ["</div>", ""]
    if len(voci) == 2:
        return None  # nessun foglio di esercizi (ancora) in questa lingua
    (DOCS / CARTELLA_ES / "index.md").write_text("\n".join(righe))
    return "\n".join(voci)


# parti dell'autovalutazione: i sei volumi delle dispense, più gli integrali (solo esercizi)
VOLUMI_QUIZ = {"1": ("Logica e metodi di dimostrazione", "Logic and proof methods"), "2": ("Numeri e insiemi", "Numbers and sets"),
               "3": ("Funzioni", "Functions"), "4": ("Limiti", "Limits"), "5": ("Derivate", "Derivatives"),
               "6": ("Serie", "Series"), "integrali": ("Primitive e integrali", "Antiderivatives and integrals")}


def capitoli_quiz() -> tuple[dict, dict]:
    """slug dei capitoli nella banca dell'autovalutazione (gli identificativi inglesi) -> «n. titolo» e -> parte"""
    import json
    import os
    import subprocess
    from capitoli import CARTELLA_ES, ESERCIZI, ident_es
    codice = ("import capitoli as C, json; print(json.dumps([C.ident(*c[:3]) for c in C.CAPITOLI]"
              " + [C.ident_es(*e[:3]) for e in C.ESERCIZI if e[0] == 'integrals']))")
    chiavi = json.loads(subprocess.run([sys.executable, "-c", codice], cwd=Path(__file__).parent, check=True,
                                       capture_output=True, text=True,
                                       env={**os.environ, "LINGUA": "en", "PYTHONDONTWRITEBYTECODE": "1"}).stdout)
    nomi = [f"{num_volume(c[0], c[1])}. {titolo(*c[:3])}" for c in CAPITOLI]
    vol = {p[0]: p[4] for p in PARTI}
    parti = [VOLUMI_QUIZ[vol[c[0]]][1 if EN else 0] for c in CAPITOLI]
    for e in ESERCIZI:                    # gli integrali: solo esercizi
        if e[0] in ("integrali", "integrals"):
            f = DOCS / CARTELLA_ES / f"{ident_es(*e[:3])}.md"
            m = re.search(r'^title: "(.*)"$', f.read_text(), re.M) if f.exists() else None
            nomi.append(m.group(1) if m else e[2])
            parti.append(VOLUMI_QUIZ["integrali"][1 if EN else 0])
    assert len(chiavi) == len(nomi) == len(parti)
    return dict(zip(chiavi, nomi)), dict(zip(chiavi, parti))


def main():
    nav_parti = []
    indice = ["# Full index" if EN else "# Indice completo", ""]
    for key, nome, icona, descr, np in PARTI:
        caps = [c for c in CAPITOLI if c[0] == key and titolo(*c[:3])]
        if not caps:
            continue
        voci = [f"      - {key}/index.md"]
        card = [f"# {nome}", ""] + barra_parte(key, np, caps, descr) + ['<div class="grid cards" markdown>', ""]
        indice.append(f"## [{nome}]({key}/index.md)")
        indice.append("")
        for parte, num, slug, _ in caps:
            t = titolo(parte, num, slug)
            rel = pagina(parte, num, slug)
            nv = num_volume(parte, num)   # numero nel volume (come nel PDF)
            voci.append(f'      - "{nv}. {t}": {rel}')
            card += [f"-   **{nv}. {t}**", "", "    ---", "",
                     f"    {sommario(parte, num, slug)}", "",
                     f"    [:octicons-arrow-right-24: {'Read the chapter' if EN else 'Leggi il capitolo'}]({num:02d}-{slug}.md)", ""]
            indice.append(f"{nv}. [{t}]({rel})")
        card += ["</div>", ""]
        indice.append("")
        (DOCS / key / "index.md").write_text("\n".join(card))
        # nel menu in alto la voce breve (una o due parole); il titolo completo resta nella pagina
        nav_parti.append(f"  - {voce_menu(key)}:\n" + "\n".join(voci))
    (DOCS / "indice.md").write_text("\n".join(indice))
    voce_es = esercizi()
    if voce_es:
        nav_parti.append(voce_es)
    # autovalutazione: motore e banca (<modulo>/quiz/) in docs/, pagina e voce «Quiz» dopo gli esercizi
    capitoli_q, parti_q = capitoli_quiz()
    voce_quiz = QZ.integra(DOCS, IT.parent / "quiz", LINGUA, capitoli=capitoli_q, parti=parti_q)
    if voce_quiz:
        nav_parti.append(voce_quiz)

    yml = (Path(__file__).parent / ("mkdocs_modello_en.yml" if EN else "mkdocs_modello.yml")).read_text()
    yml = yml.replace("  # NAV_PARTI", "\n".join(nav_parti))
    # i vecchi indirizzi delle pagine spostate rimandano ai nuovi (mkdocs-redirects)
    for vecchia, nuova in PAGINE_SPOSTATE.items():
        assert not (DOCS / vecchia).exists(), f"pagina vecchia ancora presente: {vecchia}"
        assert (DOCS / nuova).exists(), f"pagina nuova mancante: {nuova}"
    mappa = "\n".join(f"        {v}: {n}" for v, n in PAGINE_SPOSTATE.items())
    yml = yml.replace("  # REDIRECTS", "  - redirects:\n      redirect_maps:\n" + mappa)
    if (DOCS / QZ.pagina(LINGUA)).exists():          # autovalutazione: quiz.css e quiz.js (QUIZ_ENGINE)
        yml = QZ.voci_mkdocs(yml, DOCS)
    (IT / "mkdocs.yml").write_text(yml)
    (DOCS / "img").mkdir(exist_ok=True)
    print(f"[{LINGUA}] mkdocs.yml, indice e pagine delle parti aggiornati")


if __name__ == "__main__":
    main()
