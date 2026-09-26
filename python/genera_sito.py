"""Genera la struttura del sito dal registro dei capitoli.

Scrive:
  - mkdocs.yml (con la nav completa)
  - docs/<parte>/index.md: la pagina della parte, una card per capitolo
  - docs/indice.md: l'indice completo
I titoli dei capitoli vengono dalle pagine già convertite (front matter).
"""
from __future__ import annotations

import re

from capitoli import CAPITOLI, DOCS, IT, PARTI, pagina

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


def main():
    nav_parti = []
    indice = ["# Indice completo", ""]
    for key, nome, icona, descr, np in PARTI:
        caps = [c for c in CAPITOLI if c[0] == key and titolo(*c[:3])]
        if not caps:
            continue
        voci = [f"      - {key}/index.md"]
        card = [f"# {nome}", "", f"*Parte {np} delle dispense.* {descr}", "",
                '<div class="grid cards" markdown>', ""]
        indice.append(f"## [{nome}]({key}/index.md)")
        indice.append("")
        for parte, num, slug, _ in caps:
            t = titolo(parte, num, slug)
            rel = pagina(parte, num, slug)
            voci.append(f'      - "{num}. {t}": {rel}')
            card += [f"-   **{num}. {t}**", "", "    ---", "",
                     f"    {sommario(parte, num, slug)}", "",
                     f"    [:octicons-arrow-right-24: Leggi il capitolo]({num:02d}-{slug}.md)", ""]
            indice.append(f"{num}. [{t}]({rel})")
        card += ["</div>", ""]
        indice.append("")
        (DOCS / key / "index.md").write_text("\n".join(card))
        nav_parti.append(f"  - {nome}:\n" + "\n".join(voci))
    (DOCS / "indice.md").write_text("\n".join(indice))

    yml = (IT / "python" / "mkdocs_modello.yml").read_text()
    yml = yml.replace("  # NAV_PARTI", "\n".join(nav_parti))
    (IT / "mkdocs.yml").write_text(yml)
    print("mkdocs.yml, indice e pagine delle parti aggiornati")


if __name__ == "__main__":
    main()
