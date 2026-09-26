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

from capitoli import CAPITOLI, DOCS, IT, LINGUA, PARTI, pagina

EN = LINGUA == "en"

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


def esercizi():
    """Pagina indice degli esercizi e voce di menu."""
    from capitoli import ESERCIZI, PARTI_ES, ident_es
    righe = ["# " + ("Exercises" if EN else "Esercizi"), "",
             ("Exercise sheets with **worked solutions**, organized as the parts of the notes. "
              "Try each exercise on your own first: the solution opens with a click." if EN else
              "Fogli di esercizi con le **soluzioni svolte**, divisi come le parti delle dispense. "
              "Prova prima da solo: la soluzione si apre con un clic."), "",
             '<div class="grid cards" markdown>', ""]
    voci = ["  - " + ("Exercises" if EN else "Esercizi") + ":", "      - esercizi/index.md"]
    for key, (nit, nen, cen) in PARTI_ES.items():
        fogli = [e for e in ESERCIZI if e[0] in (key, cen)]
        fogli = [e for e in fogli if (DOCS / "esercizi" / f"{ident_es(*e[:3])}.md").exists()]
        if not fogli:
            continue
        nome = nen if EN else nit
        voci.append(f"      - {nome}:")
        righe += [f"-   **{nome}**", "", "    ---", ""]
        for e in fogli:
            cid = ident_es(*e[:3])
            testo = (DOCS / "esercizi" / f"{cid}.md").read_text()
            t = re.search(r'^title: "(.*)"$', testo, re.M).group(1)
            n = len(re.findall(r'^!!! esercizio ', testo, re.M))
            voci.append(f'          - "{t}": esercizi/{cid}.md')
            righe.append(f"    - [{t}]({cid}.md) · {n} " + ("exercises" if EN else "esercizi"))
        righe.append("")
    righe += ["</div>", ""]
    (DOCS / "esercizi" / "index.md").write_text("\n".join(righe))
    return "\n".join(voci)


def main():
    nav_parti = []
    indice = ["# Full index" if EN else "# Indice completo", ""]
    for key, nome, icona, descr, np in PARTI:
        caps = [c for c in CAPITOLI if c[0] == key and titolo(*c[:3])]
        if not caps:
            continue
        voci = [f"      - {key}/index.md"]
        card = [f"# {nome}", "", (f"*Part {np} of the lecture notes.* " if EN else f"*Parte {np} delle dispense.* ") + descr, "",
                '<div class="grid cards" markdown>', ""]
        indice.append(f"## [{nome}]({key}/index.md)")
        indice.append("")
        for parte, num, slug, _ in caps:
            t = titolo(parte, num, slug)
            rel = pagina(parte, num, slug)
            voci.append(f'      - "{num}. {t}": {rel}')
            card += [f"-   **{num}. {t}**", "", "    ---", "",
                     f"    {sommario(parte, num, slug)}", "",
                     f"    [:octicons-arrow-right-24: {'Read the chapter' if EN else 'Leggi il capitolo'}]({num:02d}-{slug}.md)", ""]
            indice.append(f"{num}. [{t}]({rel})")
        card += ["</div>", ""]
        indice.append("")
        (DOCS / key / "index.md").write_text("\n".join(card))
        nav_parti.append(f"  - {nome}:\n" + "\n".join(voci))
    (DOCS / "indice.md").write_text("\n".join(indice))
    nav_parti.append(esercizi())

    yml = (Path(__file__).parent / ("mkdocs_modello_en.yml" if EN else "mkdocs_modello.yml")).read_text()
    yml = yml.replace("  # NAV_PARTI", "\n".join(nav_parti))
    (IT / "mkdocs.yml").write_text(yml)
    (DOCS / "img").mkdir(exist_ok=True)
    print(f"[{LINGUA}] mkdocs.yml, indice e pagine delle parti aggiornati")


if __name__ == "__main__":
    main()
