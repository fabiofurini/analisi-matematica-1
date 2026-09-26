<h3 align="center">Materiale didattico di
<a href="https://sites.google.com/view/fabiofurini/home-page">Fabio Furini</a></h3>
<p align="center">
  Professore associato di Ricerca Operativa ·
  <a href="https://www.diag.uniroma1.it/">DIAG</a>, Sapienza Università di Roma ·
  <a href="https://sites.google.com/view/fabiofurini/home-page">sito personale</a>
</p>

# Analisi Matematica 1

Le dispense del corso di Analisi Matematica 1 in versione online: definizioni,
teoremi con le loro dimostrazioni, esempi svolti, esercizi e grafici
interattivi, con gli stessi numeri e gli stessi colori del PDF.

**📖 Sito: [fabiofurini.github.io/analisi-matematica-1](https://fabiofurini.github.io/analisi-matematica-1/)**

**🎛️ Grafici interattivi: [il laboratorio](https://fabiofurini.github.io/analisi-matematica-1/interattivi/)** — si usano nel browser, anche dal telefono.

## Contenuto

| Parte | Argomenti |
|---|---|
| 1 · Numeri e logica | insiemi, logica, numeri reali ed estremi, sommatorie, induzione, binomiali, numeri complessi |
| 2 · Funzioni | funzioni elementari e loro grafici, composte, inverse |
| 3 · Limiti | successioni e limiti, Nepero, stime asintotiche; limiti di funzioni, continuità, zeri, Weierstrass |
| 4 · Derivate | regole di calcolo, Fermat, Lagrange, De l'Hospital, Taylor, studio di funzione, Newton |
| 5 · Serie | serie numeriche, criteri di convergenza, serie a segno variabile, serie di funzioni |
| Esercizi | circa 300 esercizi con soluzioni svolte, compresi primitive e integrali |

## Come è costruito

Le pagine, le figure e i PDF si generano dai sorgenti LaTeX delle dispense e degli
esercizi (gli stessi script producono anche la versione inglese, con `LINGUA=en`):

```bash
python3 python/converti_tex.py     # LaTeX -> pagine Markdown (capitoli ed esercizi)
python3 python/estrai_figure.py    # figure TikZ -> SVG (serve una distribuzione TeX)
python3 python/compila_pdf.py      # PDF dei capitoli, degli esercizi e PDF unico
python3 python/genera_sito.py      # navigazione, pagine delle parti, indice
python3 -m pip install mkdocs-material
python3 -m mkdocs serve            # anteprima locale
```

I grafici interattivi sono in `docs/javascripts/interattivi.js` (JSXGraph).

## Autori

Dispense di **Fabio Furini**; esercizi di **Fabio Furini** e **Gianluca Priori**.

## Licenza

- **Testi e figure** (`docs/`): [CC BY 4.0](LICENSE).
- **Codice** (`python/`, `docs/javascripts/`): [MIT](LICENSE-CODE).

Per citare il materiale c'è [`CITATION.cff`](CITATION.cff).

## English version

The whole course is also available in English:
**[fabiofurini.github.io/mathematical-analysis-1](https://fabiofurini.github.io/mathematical-analysis-1/)**
([repository](https://github.com/fabiofurini/mathematical-analysis-1)).

## Della stessa collana

- [Laboratorio di Ricerca Operativa](https://fabiofurini.github.io/laboratorio-ricerca-operativa/)
- [Modellazione MIP](https://fabiofurini.github.io/modellazione-mip/)

---

Materiale didattico di **[Fabio Furini](https://sites.google.com/view/fabiofurini/home-page)** — [DIAG](https://www.diag.uniroma1.it/), Sapienza Università di Roma.
