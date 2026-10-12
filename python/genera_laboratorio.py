"""Genera le pagine del laboratorio interattivo: l'indice a schede e una pagina per app.

Uso: LINGUA=it python3 python/genera_laboratorio.py   (e LINGUA=en)
Scrive docs/interattivi/ (it) o docs/interactive/ (en): index.md + <slug>.md per ogni app.
Le app sono quelle di GRAFICI in docs/javascripts/interattivi.js; i titoli delle pagine sono
gli stessi della ricetta. Le pagine delle app stanno fuori dalla nav (not_in_nav nel modello).
"""
from __future__ import annotations

import os
from pathlib import Path

LINGUA = os.environ.get("LINGUA", "it")
EN = LINGUA == "en"
DOCS = Path(__file__).resolve().parent.parent.parent / LINGUA / "docs"
CARTELLA = "interactive" if EN else "interattivi"

# gruppo -> (nome IT, nome EN, icona)
GRUPPI = [
    ("numeri", "Numeri", "Numbers", "numeric"),
    ("funzioni", "Funzioni", "Functions", "function-variant"),
    ("limiti", "Limiti", "Limits", "chart-bell-curve"),
    ("derivate", "Derivate", "Derivatives", "chart-line"),
    ("serie", "Serie", "Series", "sigma"),
    ("integrali", "Integrali", "Integrals", "chart-areaspline"),
]

# (gruppo, ricetta JS, slug IT, slug EN, icona, titolo IT, titolo EN,
#  descrizione IT, descrizione EN, collegamento IT, collegamento EN)
# collegamento: (testo, percorso relativo a docs/ nella lingua) oppure lista di coppie
APP = [
    ("numeri", "radici", "radici-complesse", "complex-roots", "hexagon-multiple-outline",
     "Radici n-esime complesse", "Complex n-th roots",
     "Le \\(n\\) soluzioni di \\(z^n = w\\) sul piano di Gauss: scegli l'indice \\(n\\), il modulo e l'argomento di \\(w\\) e guarda i vertici del poligono regolare.",
     "The \\(n\\) solutions of \\(z^n = w\\) in the complex plane: choose the index \\(n\\) and the modulus and argument of \\(w\\), and watch the vertices of the regular polygon.",
     [("Numeri complessi", "numeri/09-numeri-complessi.md")],
     [("Complex numbers", "numbers/09-complex-numbers.md")]),
    ("funzioni", "operazioni", "operazioni-sui-grafici", "graph-operations", "chart-line-variant",
     "Operazioni sui grafici", "Operations on graphs",
     "Traslazioni, dilatazioni e simmetrie di un grafico: i quattro coefficienti di \\(a f(bx + c) + d\\) si muovono con i cursori.",
     "Translations, stretches and reflections of a graph: the four coefficients of \\(a f(bx + c) + d\\) move with the sliders.",
     [("Operazioni sui grafici", "funzioni/08-operazioni-grafici.md")],
     [("Graph transformations", "functions/08-graph-transformations.md")]),
    ("funzioni", "oscillazioni", "oscillazioni", "oscillations", "sine-wave",
     "Oscillazioni armoniche", "Harmonic oscillations",
     "Ampiezza, pulsazione e fase di \\(A\\sin(\\omega x + \\varphi)\\): vedi come cambiano il periodo e la posizione dell'onda.",
     "Amplitude, angular frequency and phase of \\(A\\sin(\\omega x + \\varphi)\\): see how the period and the position of the wave change.",
     [("Funzioni trigonometriche: un'applicazione, i fenomeni vibratori", "funzioni/05-trigonometriche.md")],
     [("Trigonometric functions: an application, oscillations", "functions/05-trigonometric-functions.md")]),
    ("funzioni", "potenze", "funzioni-potenza", "power-functions", "exponent",
     "Funzioni potenza", "Power functions",
     "Il grafico di \\(y = x^{\\alpha}\\) al variare dell'esponente, con la scelta dell'esponente tra molti casi tipici.",
     "The graph of \\(y = x^{\\alpha}\\) as the exponent varies, with a choice among many typical cases.",
     [("Funzioni potenza", "funzioni/03-potenza.md")],
     [("Power functions", "functions/03-power-functions.md")]),
    ("funzioni", "esponenziali", "esponenziali-logaritmi", "exponentials-logarithms", "exponent-box",
     "Esponenziali e logaritmi", "Exponentials and logarithms",
     "L'esponenziale e il logaritmo di base \\(a\\), simmetrici rispetto alla bisettrice: muovi la base e guarda crescita e decrescita.",
     "The exponential and the logarithm with base \\(a\\), symmetric about the line \\(y = x\\): move the base and see growth turn into decay.",
     [("Funzioni esponenziali e logaritmiche", "funzioni/04-esponenziali-logaritmi.md")],
     [("Exponential and logarithmic functions", "functions/04-exponentials-logarithms.md")]),
    ("limiti", "successione", "limite-successione", "sequence-limit", "dots-horizontal",
     "Limite di una successione", "Limit of a sequence",
     "La fascia \\((\\ell-\\varepsilon, \\ell+\\varepsilon)\\) intorno al limite e la soglia \\(N\\): rimpicciolisci \\(\\varepsilon\\) e guarda da dove in poi i termini restano dentro.",
     "The band \\((\\ell-\\varepsilon, \\ell+\\varepsilon)\\) around the limit and the threshold \\(N\\): shrink \\(\\varepsilon\\) and see from where on the terms stay inside.",
     [("Successioni e limiti di successioni", "successioni/01-limiti-successioni.md")],
     [("Sequences and limits of sequences", "sequences/01-limits-of-sequences.md")]),
    ("limiti", "erone", "successione-di-erone", "heron-sequence", "square-root",
     "Successione di Erone", "Heron's sequence",
     "L'iterazione \\(x_{n+1} = \\tfrac12(x_n + a/x_n)\\) che converge a \\(\\sqrt a\\), disegnata come ragnatela: scegli \\(a\\), il punto di partenza e il numero di passi.",
     "The iteration \\(x_{n+1} = \\tfrac12(x_n + a/x_n)\\) converging to \\(\\sqrt a\\), drawn as a cobweb: choose \\(a\\), the starting point and the number of steps.",
     [("Successioni definite per ricorrenza", "successioni/06-ricorrenza.md")],
     [("Recursively defined sequences", "sequences/06-recursive-sequences.md")]),
    ("limiti", "bisezione", "bisezione", "bisection", "content-cut",
     "Metodo di bisezione", "Bisection method",
     "A ogni passo l'intervallo si dimezza e contiene ancora lo zero: avanza passo passo e confronta l'errore con la stima teorica.",
     "At every step the interval is halved and still contains the zero: advance step by step and compare the error with the theoretical bound.",
     [("Teorema degli zeri e metodo della bisezione", "limiti/08-zeri-bisezione.md")],
     [("Zeros theorem and bisection method", "limits/08-zeros-bisection.md")]),
    ("derivate", "tangente", "secante-tangente", "secant-tangent", "vector-line",
     "Dalla secante alla tangente", "From the secant to the tangent line",
     "Il rapporto incrementale quando \\(h \\to 0\\): trascina \\(h\\) verso zero, da destra e da sinistra, e guarda la secante diventare tangente.",
     "The difference quotient as \\(h \\to 0\\): drag \\(h\\) towards zero, from the right and from the left, and watch the secant turn into the tangent.",
     [("Funzione derivata", "derivate/01-funzione-derivata.md")],
     [("The derivative", "derivatives/01-the-derivative.md")]),
    ("derivate", "lagrange", "teorema-di-lagrange", "lagrange-theorem", "slope-uphill",
     "Teorema di Lagrange", "Lagrange's mean value theorem",
     "Esiste un punto in cui la tangente è parallela alla secante: sposta gli estremi dell'intervallo e trova i punti \\(c\\).",
     "There is a point where the tangent is parallel to the secant: move the endpoints of the interval and find the points \\(c\\).",
     [("Teorema del valore medio, massimi e minimi", "derivate/05-valor-medio.md")],
     [("Mean value theorem, maxima and minima", "derivatives/05-mean-value.md")]),
    ("derivate", "concavita", "concavita", "concavity", "chart-bell-curve-cumulative",
     "Derivata prima e seconda", "First and second derivative",
     "Monotonia, concavità e flessi: muovi un punto sul grafico e leggi il segno di \\(f'\\) e di \\(f''\\).",
     "Monotonicity, concavity and inflection points: move a point on the graph and read the sign of \\(f'\\) and \\(f''\\).",
     [("Derivata seconda", "derivate/07-derivata-seconda.md")],
     [("Second derivative", "derivatives/07-second-derivative.md")]),
    ("derivate", "taylor", "polinomi-di-maclaurin", "maclaurin-polynomials", "chart-areaspline-variant",
     "Polinomi di Mac Laurin", "Maclaurin polynomials",
     "L'approssimazione di una funzione con il polinomio di grado \\(n\\): alza il grado e guarda dove il polinomio segue il grafico.",
     "Approximating a function by its degree-\\(n\\) polynomial: raise the degree and see where the polynomial follows the graph.",
     [("Calcolo differenziale e approssimazioni", "derivate/08-approssimazioni.md")],
     [("Differential calculus and approximations", "derivatives/08-approximations.md")]),
    ("derivate", "newton", "metodo-di-newton", "newton-method", "chart-timeline-variant",
     "Metodo di Newton", "Newton's method",
     "Si scende lungo le tangenti verso lo zero: scegli il punto di partenza e le iterazioni, e osserva come raddoppiano le cifre esatte.",
     "Sliding down the tangent lines towards the zero: choose the starting point and the iterations, and watch the correct digits double.",
     [("Metodo di Newton", "derivate/10-newton.md")],
     [("Newton's method", "derivatives/10-newton.md")]),
    ("serie", "geometrica", "serie-geometrica", "geometric-series", "sigma",
     "Serie geometrica", "Geometric series",
     "Le somme parziali di \\(\\sum q^k\\): cambia la ragione \\(q\\) e guarda quando convergono, quando oscillano e quando divergono.",
     "The partial sums of \\(\\sum q^k\\): change the ratio \\(q\\) and see when they converge, oscillate or diverge.",
     [("Serie numeriche", "serie/01-serie-numeriche.md")],
     [("Numerical series", "series/01-numerical-series.md")]),
    ("serie", "seriep", "serie-armonica", "harmonic-series", "sigma-lower",
     "Serie armonica generalizzata", "Generalized harmonic series",
     "La serie \\(\\sum 1/n^p\\), a termini positivi e a segni alterni: varia \\(p\\) e confronta le somme parziali.",
     "The series \\(\\sum 1/n^p\\), with positive and with alternating terms: vary \\(p\\) and compare the partial sums.",
     [("Serie numeriche a termini non negativi", "serie/02-termini-non-negativi.md")],
     [("Series with non-negative terms", "series/02-nonnegative-terms.md")]),
    ("integrali", "riemann", "somme-di-riemann", "riemann-sums", "chart-histogram",
     "Somme di Riemann", "Riemann sums",
     "L'area sotto il grafico come limite di rettangoli: aumenta il numero di rettangoli e scegli dove misurare l'altezza.",
     "The area under a graph as a limit of rectangles: increase the number of rectangles and choose where to measure the height.",
     [("Primitive", "esercizi/es-integrali-01-primitive.md"), ("Integrali", "esercizi/es-integrali-02-integrali.md")],
     [("Antiderivatives", "exercises/es-integrals-01-antiderivatives.md"), ("Integrals", "exercises/es-integrals-02-integrals.md")]),
]

T = {
    "it": dict(
        titolo="Laboratorio interattivo",
        intro=("Qui la matematica si tocca con mano. Ogni app si apre in una pagina a tutta larghezza: "
               "**trascina i punti, muovi i cursori** (il pulsante ▶ li anima) e guarda subito come cambia il grafico."),
        apri="Apri l'app →", lab="← Laboratorio", cap="Capitolo", cap_pl="Esercizi",
        uso=("Trascina i cursori, oppure premi ▶ per l'animazione. Sul grafico ti sposti trascinando con due dita "
             "(o con il mouse) e ingrandisci con Maiusc + rotellina."),
    ),
    "en": dict(
        titolo="Interactive lab",
        intro=("Here you can get your hands on mathematics. Each app opens in its own full-width page: "
               "**drag the points, move the sliders** (the ▶ button animates them) and see the graph change at once."),
        apri="Open the app →", lab="← Lab", cap="Chapter", cap_pl="Exercises",
        uso=("Drag the sliders, or press ▶ to animate. On the graph, pan by dragging with two fingers (or the mouse) "
             "and zoom with Shift + mouse wheel."),
    ),
}[LINGUA]



def collegamenti(lista):
    voci = " · ".join(f"[{t}](../{p})" for t, p in lista)
    return voci


def main():
    out = DOCS / CARTELLA
    out.mkdir(exist_ok=True)
    ix = 0 if not EN else 1
    scritti = set()
    righe = ["---", "hide:", "  - navigation", "---", "", f"# {T['titolo']}", "", T["intro"], ""]
    for g, nit, nen, _icona in GRUPPI:
        righe += [f"## {nen if EN else nit}", "", '<div class="grid cards" markdown>', ""]
        for a in APP:
            if a[0] != g:
                continue
            _, ric, sit, sen, icona, tit_it, tit_en, d_it, d_en, l_it, l_en = a
            slug = sen if EN else sit
            tit = tit_en if EN else tit_it
            desc = d_en if EN else d_it
            righe += [f"-   :material-{icona}:{{ .lg .middle }} **{tit}**", "", "    ---", "",
                      f"    {desc}", "", f"    [{T['apri']}]({slug}.md)", ""]
            lk = l_en if EN else l_it
            etichetta = T["cap_pl"] if g == "integrali" else T["cap"]
            pag = ["---", "hide:", "  - navigation", "  - toc", f'title: "{tit}"', "---", "",
                   f"[{T['lab']}](index.md) · {etichetta}: {collegamenti(lk)}", "",
                   f"# {tit}", "", f"{desc} {T['uso']}", "",
                   f'<div class="gi gi-app-intera" data-grafico="{ric}"></div>', ""]
            (out / f"{slug}.md").write_text("\n".join(pag))
            scritti.add(f"{slug}.md")
        righe += ["</div>", ""]
    (out / "index.md").write_text("\n".join(righe))
    scritti.add("index.md")
    for f in out.glob("*.md"):
        if f.name not in scritti:
            f.unlink()
    print(f"[{LINGUA}] laboratorio: indice e {len(scritti) - 1} pagine di app")


if __name__ == "__main__":
    main()
