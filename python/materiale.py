"""Pagina «Materiale scaricabile»: i volumi della dispensa (formato della collana).

Uso: python3 python/materiale.py    (LINGUA=en per l'inglese)
"""
from capitoli import DOCS, LINGUA
import dispense_config as C

EN = LINGUA == "en"
if __name__ == "__main__":
    righe = ["---", f"title: {'Downloads' if EN else 'Materiale scaricabile'}", "---", "",
             f"# {'Downloads' if EN else 'Materiale scaricabile'}", "",
             ("The lecture notes in PDF, one volume per part of the course, updated at every publication of the site. "
              "Text and figures are released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en)." if EN else
              "Le dispense in PDF, un volume per ogni parte del corso, aggiornate a ogni pubblicazione del sito. "
              "Testi e figure sono sotto licenza [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it)."), "",
             '<div class="grid cards" markdown>', ""]
    for k, v in enumerate(C.VOLUMI, 1):
        pdf = v["pdf_en"] if EN else v["pdf_it"]
        assert (DOCS / "pdf" / pdf).exists(), pdf
        righe += [f"-   :material-book-open-variant: **{'Volume' if EN else 'Volume'} {k} · {v['titolo'][1 if EN else 0]}**", "", "    ---", "",
                  f"    {v['descrizione'][1 if EN else 0]}", "", f"    [:octicons-download-24: {pdf}](pdf/{pdf})", ""]
    righe += ["</div>", ""]
    (DOCS / ("downloads.md" if EN else "materiale.md")).write_text("\n".join(righe), encoding="utf-8")
    print(f"[{LINGUA}] pagina del materiale: {len(C.VOLUMI)} volumi")
