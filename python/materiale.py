"""Pagina «Materiale scaricabile»: i volumi delle dispense e gli eserciziari
(formato della collana, come in Programmazione lineare e Ottimizzazione convessa),
poi le slide dei capitoli.

Uso: python3 python/materiale.py    (LINGUA=en per l'inglese)
"""
import re

from capitoli import CAPITOLI, DOCS, LINGUA, PARTI, ident, pagina
import dispense_config as C

EN = LINGUA == "en"


def md(t: str) -> str:
    """Le descrizioni servono anche al frontespizio LaTeX: qui diventano Markdown."""
    t = re.sub(r"\\emph\{([^}]*)\}", r"*\1*", t)
    return t.replace("~", " ")


def scheda(v: dict, icona: str, etichetta: str) -> list:
    pdf = v["pdf_en"] if EN else v["pdf_it"]
    assert (DOCS / "pdf" / pdf).exists(), pdf
    return [f"-   :{icona}: **{etichetta} · {v['titolo'][1 if EN else 0]}**", "", "    ---", "",
            f"    {md(v['descrizione'][1 if EN else 0])}", "", f"    [:octicons-download-24: {pdf}](pdf/{pdf})", ""]


if __name__ == "__main__":
    righe = ["---", f"title: {'Downloads' if EN else 'Materiale scaricabile'}", "---", "",
             f"# {'Downloads' if EN else 'Materiale scaricabile'}", "",
             ("The lecture notes and the exercise books in PDF, one volume per part of the course, updated at every "
              "publication of the site. Text and figures are released under "
              "[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en)." if EN else
              "Le dispense e gli eserciziari in PDF, un volume per ogni parte del corso, aggiornati a ogni "
              "pubblicazione del sito. Testi e figure sono sotto licenza "
              "[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it)."), ""]
    dispense = [v for v in C.VOLUMI if not C.eserciziario(v)]
    eserciziari = [v for v in C.VOLUMI if C.eserciziario(v)]
    righe += ["## Lecture notes" if EN else "## Dispense", "", '<div class="grid cards" markdown>', ""]
    for k, v in enumerate(dispense, 1):
        righe += scheda(v, "material-book-open-variant", f"Volume {k}")
    righe += ["</div>", "", "## Exercises" if EN else "## Esercizi", "", '<div class="grid cards" markdown>', ""]
    for k, v in enumerate(eserciziari, 1):
        righe += scheda(v, "material-pencil-box-multiple", f"Exercises, volume {k}" if EN else f"Esercizi, volume {k}")
    righe += ["</div>", ""]
    # le slide dei capitoli (solo quelle già compilate)
    # i titoli dei capitoli vengono dalle pagine già convertite in docs/ (front matter),
    # così la pagina si rigenera anche senza gli intermedi di converti_tex.py
    titoli = {}
    for parte, num, slug, _rel in CAPITOLI:
        p = DOCS / pagina(parte, num, slug)
        m = re.search(r'^title: "(.*)"$', p.read_text(encoding="utf-8"), re.M) if p.exists() else None
        if m:
            titoli[ident(parte, num, slug)] = m.group(1)
    pref = "slides" if EN else "slide"
    blocchi = []
    for cartella, nome_parte, *_ in PARTI:
        voci = []
        for parte, num, slug, _rel in CAPITOLI:
            cid = ident(parte, num, slug)
            if parte == cartella and (DOCS / "pdf" / f"{pref}-{cid}.pdf").exists():
                voci.append(f"- {'Chapter' if EN else 'Capitolo'} {num} · [{titoli.get(cid, slug)}](pdf/{pref}-{cid}.pdf)")
        if voci:
            blocchi += [f"### {nome_parte}", ""] + voci + [""]
    if blocchi:
        righe += ["## Slides" if EN else "## Slide", "",
                  ("The slides of the lectures, chapter by chapter (PDF)." if EN else
                   "Le slide delle lezioni, capitolo per capitolo (PDF)."), ""] + blocchi
    (DOCS / ("downloads.md" if EN else "materiale.md")).write_text("\n".join(righe), encoding="utf-8")
    print(f"[{LINGUA}] pagina del materiale: {len(dispense)} dispense, {len(eserciziari)} eserciziari")
