"""Registro dei capitoli: da dove viene ogni pagina del sito.

Ogni capitolo è una nota di `it/note/NOTES_IT/PARTE_<n>_<NOME>/` (in inglese
`en/note/NOTES_EN/PARTE_<n>_<NOME>/`, stessi nomi; note rivedute, copia delle
note originali, che restano intatte in `1000_ANALISI_MATEMATICA/`); le schede di
esercizi della parte stanno in `PARTE_<n>_<NOME>/EXERCISES/` (struttura comune dei moduli).
"""
import os
import tempfile
from pathlib import Path

# lingua: LINGUA=en python3 python/... produce il sito inglese in ../en/
LINGUA = os.environ.get("LINGUA", "it")
MODULO = Path(__file__).resolve().parents[2]
NOTE = MODULO / LINGUA / "note" / ("NOTES_EN" if LINGUA == "en" else "NOTES_IT")
SORGENTE = NOTE   # PARTE_<n>_<NOME>/<k>_<Nome>/<Nome>.tex
IT = MODULO / LINGUA          # radice del repository della lingua (it/ o en/)
DOCS = IT / "docs"
# file intermedi (figure TikZ estratte, report, compilazioni delle figure): FUORI da
# Dropbox, in BUILD (variabile d'ambiente AM1_BUILD, altrimenti una cartella in /tmp)
BUILD = Path(os.environ.get("AM1_BUILD", Path(tempfile.gettempdir()) / "analisi-matematica-1-build")) / LINGUA

# (cartella del sito, titolo della parte, icona, descrizione breve, parte delle note)
# Le parti delle note e i volumi (2026-10-12, decisione di Fabio): 1 Logica e metodi di
# dimostrazione, 2 Numeri e insiemi, 3 Funzioni (relazioni binarie + funzioni), 4 Limiti
# (successioni + funzioni), 5 Derivate, 6 Serie. Sul sito le relazioni binarie sono una
# parte a sé, subito prima delle funzioni; nel volume 3 sono il primo capitolo.
PARTI = [
    ("logica", "Logica e metodi di dimostrazione", "material/lightbulb-on-outline",
     "Proposizioni e quantificatori, implicazioni, tecniche di dimostrazione, principio di induzione.", "1"),
    ("numeri", "Numeri e insiemi", "material/numeric",
     "Insiemi, numeri reali ed estremi, radicali e logaritmi, sommatorie, binomiali, insiemi infiniti, numeri complessi.", "2"),
    ("relazioni", "Relazioni binarie", "material/relation-many-to-many",
     "Relazioni e loro proprietà, grafi direzionati, relazioni di equivalenza e d'ordine; le funzioni come relazioni particolari.", "3"),
    ("funzioni", "Funzioni", "material/function-variant",
     "Le funzioni elementari e i loro grafici: potenze, esponenziali, trigonometriche, inverse.", "3"),
    ("successioni", "Limiti di successioni", "material/dots-horizontal",
     "Successioni, limiti, il numero di Nepero, stime asintotiche, ricorrenze.", "4"),
    ("limiti", "Limiti di funzioni e continuità", "material/chart-bell-curve",
     "Limiti, asintoti, limiti notevoli, continuità, teorema degli zeri, Weierstrass.", "4"),
    ("derivate", "Derivate", "material/chart-line",
     "Derivata, regole di calcolo, teoremi del calcolo differenziale, Taylor, studio di funzione, Newton.", "5"),
    ("serie", "Serie", "material/sigma",
     "Serie numeriche, criteri di convergenza, serie a segno variabile, serie di funzioni.", "6"),
]
# voce breve del menu in alto (una o due parole, decisione di Fabio del 2026-10-12);
# i titoli completi restano nelle pagine delle parti e nei volumi
MENU = {
    "logica": ("Logica", "Logic"), "numeri": ("Numeri", "Numbers"), "relazioni": ("Relazioni", "Relations"),
    "funzioni": ("Funzioni", "Functions"), "successioni": ("Successioni", "Sequences"), "limiti": ("Limiti", "Limits"),
    "derivate": ("Derivate", "Derivatives"), "serie": ("Serie", "Series"),
}

# (parte, numero, slug, file sorgente relativo a SORGENTE)
CAPITOLI = [
    ("logica", 1, "logica", "PARTE_1_LOGICA/1_Logica/logica.tex"),
    ("logica", 2, "induzione", "PARTE_1_LOGICA/2_Principio_di_Induzione/Principio_di_Induzione.tex"),
    ("numeri", 1, "insiemi", "PARTE_2_NUMERI_E_INSIEMI/1_Insiemi/Insiemi.tex"),
    ("numeri", 2, "insiemi-numerici", "PARTE_2_NUMERI_E_INSIEMI/2_InsiemiNumerici/InsiemiNumerici.tex"),
    ("numeri", 3, "campi-ordinati", "PARTE_2_NUMERI_E_INSIEMI/3_CampiOrdinati_Estremi_AssiomaDiContinuità/CampiOrdinati_Estremi_AssiomaDiContinuità.tex"),
    ("numeri", 4, "radicali-potenze-logaritmi", "PARTE_2_NUMERI_E_INSIEMI/4_RadicaliPotenzeLogaritmi/RadicaliPotenzeLogaritmi.tex"),
    ("numeri", 5, "sommatorie", "PARTE_2_NUMERI_E_INSIEMI/5_SommatorieProgressioniGeometriche/SommatorieProgressioniGeometriche.tex"),
    ("numeri", 6, "fattoriali-binomiali", "PARTE_2_NUMERI_E_INSIEMI/6_FattorialiCoeffBinomDisTriang/FattorialiCoeffBinomDisTriang.tex"),
    ("numeri", 7, "fibonacci", "PARTE_2_NUMERI_E_INSIEMI/7_SuccessioneDiFibonacci/SuccessioneDiFibonacci.tex"),
    ("numeri", 8, "insiemi-infiniti", "PARTE_2_NUMERI_E_INSIEMI/8_Insiemi_infiniti/Insiemi_infiniti.tex"),
    ("numeri", 9, "numeri-complessi", "PARTE_2_NUMERI_E_INSIEMI/9_Numeri_complessi/Numeri_complessi.tex"),
    ("relazioni", 1, "relazioni-binarie", "PARTE_3_FUNZIONI/1_RelazioniBinarie/RelazioniBinarie.tex"),
    ("funzioni", 1, "funzioni", "PARTE_3_FUNZIONI/2_Funzioni/Funzioni.tex"),
    ("funzioni", 2, "funzioni-reali", "PARTE_3_FUNZIONI/3_FunzioniRealiDiVariabileReale/FunzioniRealiDiVariabileReale.tex"),
    ("funzioni", 3, "potenza", "PARTE_3_FUNZIONI/4_FunzioniPotenza/FunzioniPotenza.tex"),
    ("funzioni", 4, "esponenziali-logaritmi", "PARTE_3_FUNZIONI/5_FunzioniEsponenzialiELogaritmiche/FunzioniEsponenzialiELogaritmiche.tex"),
    ("funzioni", 5, "trigonometriche", "PARTE_3_FUNZIONI/6_FunzioniTrigonometriche/FunzioniTrigonometriche.tex"),
    ("funzioni", 6, "parte-intera", "PARTE_3_FUNZIONI/7_FunzioniParteInteraEaTratti/FunzioniParteInteraEaTratti.tex"),
    ("funzioni", 7, "iperboliche", "PARTE_3_FUNZIONI/8_FunzioniIperboliche/FunzioniIperboliche.tex"),
    ("funzioni", 8, "operazioni-grafici", "PARTE_3_FUNZIONI/9_OperazioniSuiGrafici/OperazioniSuiGrafici.tex"),
    ("funzioni", 9, "composte", "PARTE_3_FUNZIONI/10_FunzioniComposte/FunzioniComposte.tex"),
    ("funzioni", 10, "inverse", "PARTE_3_FUNZIONI/11_FunzioniInverse/FunzioniInverse.tex"),
    ("successioni", 1, "limiti-successioni", "PARTE_4_LIMITI/1_SUCCESSIONI/1_SuccessioniProprietàLimiti/SuccessioniProprietàLimiti.tex"),
    ("successioni", 2, "calcolo-limiti", "PARTE_4_LIMITI/1_SUCCESSIONI/2_CalcoloLimitiSuccessioni/CalcoloLimitiSuccessioni.tex"),
    ("successioni", 3, "nepero", "PARTE_4_LIMITI/1_SUCCESSIONI/3_IlNumeroDiNepero/IlNumeroDiNepero.tex"),
    ("successioni", 4, "stime-asintotiche", "PARTE_4_LIMITI/1_SUCCESSIONI/4_ConfrontiStimeAsintotiche/ConfrontiStimeAsintotiche.tex"),
    ("successioni", 5, "gerarchie-infiniti", "PARTE_4_LIMITI/1_SUCCESSIONI/5_GerarchieDegliInfinitiCriterioDelRapporto/GerarchieDegliInfinitiCriterioDelRapporto.tex"),
    ("successioni", 6, "ricorrenza", "PARTE_4_LIMITI/1_SUCCESSIONI/6_SuccessioniDefinitePerRicorrenza/SuccessioniDefinitePerRicorrenza.tex"),
    ("limiti", 1, "limiti-asintoti", "PARTE_4_LIMITI/2_FUNZIONI/1_LimitiDiFunzioniAsintoti/LimitiDiFunzioniAsintoti.tex"),
    ("limiti", 2, "calcolo-limiti", "PARTE_4_LIMITI/2_FUNZIONI/2_CalcoloLimitiDiFunzioni/CalcoloLimitiDiFunzioni.tex"),
    ("limiti", 3, "polinomi-razionali", "PARTE_4_LIMITI/2_FUNZIONI/3_LimitiDiPolinomiFunzioniRazionali/LimitiDiPolinomiFunzioniRazionali.tex"),
    ("limiti", 4, "funzioni-continue", "PARTE_4_LIMITI/2_FUNZIONI/4_FunzioniContinue/FunzioniContinue.tex"),
    ("limiti", 5, "confronto-infiniti", "PARTE_4_LIMITI/2_FUNZIONI/5_GerarchiaInfiniti/GerarchiaInfiniti.tex"),
    ("limiti", 6, "limiti-notevoli", "PARTE_4_LIMITI/2_FUNZIONI/6_LimitiNotevoliStimeAsintotiche/LimitiNotevoliStimeAsintotiche.tex"),
    ("limiti", 7, "sviluppi-asintotici", "PARTE_4_LIMITI/2_FUNZIONI/7_SviluppiAsintotici/SviluppiAsintotici.tex"),
    ("limiti", 8, "zeri-bisezione", "PARTE_4_LIMITI/2_FUNZIONI/8_TeoremaDegliZeriMetodoDellaBisezione/TeoremaDegliZeriMetodoDellaBisezione.tex"),
    ("limiti", 9, "weierstrass", "PARTE_4_LIMITI/2_FUNZIONI/9_TeoremaWeierstrassTeoremaValoriIntermedi/TeoremaWeierstrassTeoremaValoriIntermedi.tex"),
    ("limiti", 10, "monotone-invertibili", "PARTE_4_LIMITI/2_FUNZIONI/10_FunzioniMonotoneInvertibilità/FunzioniMonotoneInvertibilità.tex"),
    ("derivate", 1, "funzione-derivata", "PARTE_5_DERIVATE/1_FunzioneDerivata/FunzioneDerivata.tex"),
    ("derivate", 2, "derivate-elementari", "PARTE_5_DERIVATE/2_DerivateFunzioniElementari/DerivateFunzioniElementari.tex"),
    ("derivate", 3, "punti-angolosi-cuspidi", "PARTE_5_DERIVATE/3_PuntiAngolosiCuspidi/PuntiAngolosiCuspidiFlessi.tex"),
    ("derivate", 4, "regole-calcolo", "PARTE_5_DERIVATE/4_RegoleCalcoloDerivate/RegoleCalcoloDerivate.tex"),
    ("derivate", 5, "valor-medio", "PARTE_5_DERIVATE/5_TeoremaValoreMedioMassimiMinimi/TeoremaValoreMedioMassimiMinimi.tex"),
    ("derivate", 6, "de-l-hospital", "PARTE_5_DERIVATE/6_TeoremaDiDeLHospitalDerivabilità/TeoremaDiDeLHospital.tex"),
    ("derivate", 7, "derivata-seconda", "PARTE_5_DERIVATE/7_DerivataSeconda/DerivataSeconda.tex"),
    ("derivate", 8, "approssimazioni", "PARTE_5_DERIVATE/8_Approssimazioni/Approssimazioni.tex"),
    ("derivate", 9, "studio-funzioni", "PARTE_5_DERIVATE/9_StudioGrafici/StudioGrafici.tex"),
    ("derivate", 10, "newton", "PARTE_5_DERIVATE/10_MetodoDiNewton/MetodoDiNewton.tex"),
    ("serie", 1, "serie-numeriche", "PARTE_6_SERIE/1_SerieNumeriche/SerieNumeriche.tex"),
    ("serie", 2, "termini-non-negativi", "PARTE_6_SERIE/2_SerieNumericheTerminiNonNegativi/SerieNumericheTerminiNonNegativi.tex"),
    ("serie", 3, "segno-variabile", "PARTE_6_SERIE/3_SerieNumericheTerminiAlterni/SerieNumericheTerminiAlterni.tex"),
    ("serie", 4, "serie-funzioni", "PARTE_6_SERIE/4_SerieDiFunzioni/SerieDiFunzioni.tex"),
]


PARTI_EN = {
    "logica": ("logic", "Logic and proof methods", "Propositions and quantifiers, implications, proof techniques, mathematical induction."),
    "numeri": ("numbers", "Numbers and sets", "Sets, real numbers and suprema, roots and logarithms, summations, binomials, infinite sets, complex numbers."),
    "relazioni": ("relations", "Binary relations", "Relations and their properties, directed graphs, equivalence and order relations; functions as special relations."),
    "funzioni": ("functions", "Functions", "Elementary functions and their graphs: powers, exponentials, trigonometric functions, inverses."),
    "successioni": ("sequences", "Limits of sequences", "Sequences, limits, Euler's number, asymptotic estimates, recursive sequences."),
    "limiti": ("limits", "Limits of functions and continuity", "Limits, asymptotes, standard limits, continuity, zeros theorem, Weierstrass."),
    "derivate": ("derivatives", "Derivatives", "Derivative, rules of differentiation, theorems of differential calculus, Taylor, curve sketching, Newton."),
    "serie": ("series", "Series", "Numerical series, convergence tests, series with terms of varying sign, series of functions."),
}
SLUG_EN = {
    "insiemi": "sets", "logica": "logic", "insiemi-numerici": "number-sets", "relazioni-binarie": "binary-relations",
    "campi-ordinati": "ordered-fields", "radicali-potenze-logaritmi": "roots-powers-logarithms", "sommatorie": "summations",
    "induzione": "induction", "fattoriali-binomiali": "factorials-binomials", "fibonacci": "fibonacci",
    "insiemi-infiniti": "infinite-sets", "numeri-complessi": "complex-numbers", "funzioni": "functions",
    "funzioni-reali": "real-functions", "potenza": "power-functions", "esponenziali-logaritmi": "exponentials-logarithms",
    "trigonometriche": "trigonometric-functions", "parte-intera": "integer-part",
    "iperboliche": "hyperbolic-functions", "operazioni-grafici": "graph-transformations", "composte": "composite-functions",
    "inverse": "inverse-functions", "limiti-successioni": "limits-of-sequences", "calcolo-limiti": "computing-limits",
    "nepero": "euler-number", "stime-asintotiche": "asymptotic-estimates", "gerarchie-infiniti": "hierarchy-of-infinities",
    "ricorrenza": "recursive-sequences", "limiti-asintoti": "limits-asymptotes", "polinomi-razionali": "polynomials-rational-functions",
    "funzioni-continue": "continuous-functions", "confronto-infiniti": "comparing-infinities", "limiti-notevoli": "standard-limits",
    "sviluppi-asintotici": "asymptotic-expansions", "zeri-bisezione": "zeros-bisection", "weierstrass": "weierstrass",
    "monotone-invertibili": "monotone-invertible", "funzione-derivata": "the-derivative", "derivate-elementari": "elementary-derivatives",
    "punti-angolosi-cuspidi": "corners-cusps", "regole-calcolo": "differentiation-rules", "valor-medio": "mean-value",
    "de-l-hospital": "lhopital", "derivata-seconda": "second-derivative", "approssimazioni": "approximations",
    "studio-funzioni": "curve-sketching", "newton": "newton", "serie-numeriche": "numerical-series",
    "termini-non-negativi": "nonnegative-terms", "segno-variabile": "alternating-series", "serie-funzioni": "series-of-functions",
}
CAPITOLI_IT = list(CAPITOLI)
if LINGUA == "en":
    PARTI = [(PARTI_EN[k][0], PARTI_EN[k][1], icona, PARTI_EN[k][2], np) for k, _, icona, _, np in PARTI]
    _cartella = {k: v[0] for k, v in PARTI_EN.items()}
    MENU = {PARTI_EN[k][0]: v for k, v in MENU.items()}
    CAPITOLI = [(_cartella[p], n, SLUG_EN[s], rel) for p, n, s, rel in CAPITOLI]


# parti del sito che nel volume proseguono la numerazione di un'altra parte: nel volume 3
# «Relazioni binarie» è il capitolo 1 e «Le funzioni» il 2. Gli indirizzi delle pagine
# restano numerati dentro la parte del sito (funzioni/01-funzioni.md), ma il numero
# mostrato (menu, schede, testata del capitolo) è quello del volume, come nel PDF.
PROSEGUE = {"funzioni": "relazioni"}
if LINGUA == "en":
    PROSEGUE = {PARTI_EN[k][0]: PARTI_EN[v][0] for k, v in PROSEGUE.items()}


def num_volume(parte, num):
    """Numero del capitolo nel suo volume (quello mostrato sul sito)."""
    prima = PROSEGUE.get(parte)
    return num + (sum(1 for c in CAPITOLI if c[0] == prima) if prima else 0)


def voce_menu(parte):
    """Voce breve della parte nel menu in alto (cartella del sito della lingua)."""
    return MENU[parte][1 if LINGUA == "en" else 0]


def ident(parte, num, slug):
    """Identificativo stabile del capitolo (nomi delle figure, dei PDF)."""
    return f"{parte}-{num:02d}-{slug}"


def ident_it(cid):
    """Identificativo italiano corrispondente (per le tabelle condivise fra le lingue)."""
    for c, ci in zip(CAPITOLI, CAPITOLI_IT):
        if ident(*c[:3]) == cid:
            return ident(*ci[:3])
    return cid


def pagina(parte, num, slug):
    """Percorso della pagina Markdown relativo a docs/."""
    return f"{parte}/{num:02d}-{slug}.md"


# ---------------------------------------------------------------- esercizi
SORGENTE_ES = NOTE   # PARTE_<n>_<NOME>/EXERCISES/<k>_<Nome>/<Nome>.tex
CARTELLA_ES = "esercizi" if LINGUA == "it" else "exercises"   # cartella del sito

# (parte del sito, numero, slug, file relativo a SORGENTE_ES)
ESERCIZI = [
    ("logica", 1, "induzione", "PARTE_1_LOGICA/EXERCISES/1_PrincipioDiInduzione/PrincipioDiInduzione.tex"),
    ("numeri", 1, "massimi-minimi", "PARTE_2_NUMERI_E_INSIEMI/EXERCISES/1_MassimiMinimi_Estremi/MassimiMinimiEstremi.tex"),
    ("numeri", 2, "equazioni-disequazioni", "PARTE_2_NUMERI_E_INSIEMI/EXERCISES/2_Equazioni_Disequazioni/EquazioniDisequazioni.tex"),
    ("numeri", 3, "sommatorie", "PARTE_2_NUMERI_E_INSIEMI/EXERCISES/3_Sommatorie/Sommatorie.tex"),
    ("numeri", 4, "numeri-complessi", "PARTE_2_NUMERI_E_INSIEMI/EXERCISES/4_Numeri_Complessi/Numeri_complessi.tex"),
    ("funzioni", 1, "insiemi-definizione", "PARTE_3_FUNZIONI/EXERCISES/1_InsiemiDiDefinizione/InsiemiDiDefinizione.tex"),
    ("funzioni", 2, "funzioni-inverse", "PARTE_3_FUNZIONI/EXERCISES/2_FunzioniInverse/FunzioniInverse.tex"),
    ("successioni", 1, "proprieta", "PARTE_4_LIMITI/EXERCISES/A_Successioni/1_ProprietaSuccessioni/ProprietaSuccessioni.tex"),
    ("successioni", 2, "verifica-limiti", "PARTE_4_LIMITI/EXERCISES/A_Successioni/2_DefinizioneLimiteSuccessioni/DefinizioneLimiteSuccessioni.tex"),
    ("successioni", 3, "calcolo-limiti", "PARTE_4_LIMITI/EXERCISES/A_Successioni/3_CalcoloLimitiSuccessioni/CalcoloLimitiSuccessioni.tex"),
    ("successioni", 4, "aggiuntivi", "PARTE_4_LIMITI/EXERCISES/A_Successioni/4_EserciziAggiuntivi/EserciziAggiuntivi.tex"),
    ("limiti", 1, "limiti-funzioni", "PARTE_4_LIMITI/EXERCISES/B_Funzioni/1_LimitiDiFunzione/LimitiDiFunzione.tex"),
    ("derivate", 1, "cuspidi-flessi-tangenti", "PARTE_5_DERIVATE/EXERCISES/1_CuspidiFlessiTangenti/CuspidiFlessiTangenti.tex"),
    ("derivate", 2, "calcolo-derivate", "PARTE_5_DERIVATE/EXERCISES/2_CalcoloDerivate/CalcoloDerivate.tex"),
    ("derivate", 3, "rette-tangenti", "PARTE_5_DERIVATE/EXERCISES/3_RetteTangenti/RetteTangenti.tex"),
    ("derivate", 4, "asintoti", "PARTE_5_DERIVATE/EXERCISES/4_Asintoti/Asintoti.tex"),
    ("derivate", 5, "prolungamenti", "PARTE_5_DERIVATE/EXERCISES/5_ProlungamentiContinui/ProlungamentiContinui.tex"),
    ("derivate", 6, "derivabilita", "PARTE_5_DERIVATE/EXERCISES/6_Derivabilità/Derivabilità.tex"),
    ("derivate", 7, "equazioni-parametriche", "PARTE_5_DERIVATE/EXERCISES/7_EquazioniParametriche/EquazioniParametriche.tex"),
    ("derivate", 8, "studi-funzione", "PARTE_5_DERIVATE/EXERCISES/8_StudiDiFunzione/StudiDiFunzione.tex"),
    ("derivate", 9, "mclaurin", "PARTE_5_DERIVATE/EXERCISES/9_SviluppiDiMcLaurin/SviluppiDiMcLaurin.tex"),
    ("derivate", 10, "limiti-sviluppi", "PARTE_5_DERIVATE/EXERCISES/10_Limiti/Limiti.tex"),
    ("derivate", 11, "newton", "PARTE_5_DERIVATE/EXERCISES/11_MetodoDiNewton/MetodoDiNewton.tex"),
    ("derivate", 12, "bisezione", "PARTE_5_DERIVATE/EXERCISES/12_MetodoDiBisezione/MetodoDiBisezione.tex"),
    ("derivate", 13, "estremi", "PARTE_5_DERIVATE/EXERCISES/13_RicercaMassimiMinimi/RicercaMassimiMinimi.tex"),
    ("serie", 1, "serie-numeriche", "PARTE_6_SERIE/EXERCISES/1_SerieNumeriche/Serie.tex"),
    ("integrali", 1, "primitive", "PARTE_7_INTEGRALI/EXERCISES/1_primitive/primitive.tex"),
    ("integrali", 2, "integrali", "PARTE_7_INTEGRALI/EXERCISES/2_integrali/integrali.tex"),
]
PARTI_ES = {  # parte -> (titolo IT, titolo EN, cartella EN)
    "logica": ("Logica e metodi di dimostrazione", "Logic and proof methods", "logic"),
    "numeri": ("Numeri e insiemi", "Numbers and sets", "numbers"),
    "relazioni": ("Relazioni binarie", "Binary relations", "relations"),
    "funzioni": ("Funzioni", "Functions", "functions"),
    "successioni": ("Limiti di successioni", "Limits of sequences", "sequences"),
    "limiti": ("Limiti di funzioni", "Limits of functions", "limits"),
    "derivate": ("Derivate", "Derivatives", "derivatives"),
    "serie": ("Serie", "Series", "series"),
    "integrali": ("Integrali", "Integrals", "integrals"),
}
SLUG_ES_EN = {
    "massimi-minimi": "max-min-suprema", "equazioni-disequazioni": "equations-inequalities", "sommatorie": "summations",
    "induzione": "induction", "numeri-complessi": "complex-numbers", "insiemi-definizione": "domains",
    "funzioni-inverse": "inverse-functions", "proprieta": "properties", "verifica-limiti": "verifying-limits",
    "calcolo-limiti": "computing-limits", "aggiuntivi": "additional", "limiti-funzioni": "limits-of-functions",
    "cuspidi-flessi-tangenti": "cusps-inflections-tangents", "calcolo-derivate": "computing-derivatives",
    "rette-tangenti": "tangent-lines", "asintoti": "asymptotes", "prolungamenti": "continuous-extensions",
    "derivabilita": "differentiability", "equazioni-parametriche": "parametric-equations", "studi-funzione": "curve-sketching",
    "mclaurin": "maclaurin", "limiti-sviluppi": "limits-with-expansions", "newton": "newton", "bisezione": "bisection",
    "estremi": "extrema", "serie-numeriche": "numerical-series", "primitive": "antiderivatives", "integrali": "integrals",
}
ESERCIZI_IT = list(ESERCIZI)
if LINGUA == "en":
    ESERCIZI = [(PARTI_ES[p][2], n, SLUG_ES_EN[s], rel) for p, n, s, rel in ESERCIZI]


def ident_es(parte, num, slug):
    return f"es-{parte}-{num:02d}-{slug}"


def ident_es_it(cid):
    for c, ci in zip(ESERCIZI, ESERCIZI_IT):
        if ident_es(*c[:3]) == cid:
            return ident_es(*ci[:3])
    return cid


# ---------------------------------------------------------------- pagine spostate
# Ristrutturazione del 2026-10-12 (logica e numeri divisi, relazioni binarie prima delle
# funzioni, «Fenomeni vibratori» dentro «Funzioni trigonometriche»): i vecchi indirizzi
# delle pagine rimandano ai nuovi con il plugin mkdocs-redirects (genera_sito.py li
# scrive in mkdocs.yml). Vecchia pagina -> nuova pagina, relative a docs/.
PAGINE_SPOSTATE_IT = {
    "numeri/02-logica.md": "logica/01-logica.md",
    "numeri/08-induzione.md": "logica/02-induzione.md",
    "numeri/03-insiemi-numerici.md": "numeri/02-insiemi-numerici.md",
    "numeri/05-campi-ordinati.md": "numeri/03-campi-ordinati.md",
    "numeri/06-radicali-potenze-logaritmi.md": "numeri/04-radicali-potenze-logaritmi.md",
    "numeri/07-sommatorie.md": "numeri/05-sommatorie.md",
    "numeri/09-fattoriali-binomiali.md": "numeri/06-fattoriali-binomiali.md",
    "numeri/10-fibonacci.md": "numeri/07-fibonacci.md",
    "numeri/11-insiemi-infiniti.md": "numeri/08-insiemi-infiniti.md",
    "numeri/12-numeri-complessi.md": "numeri/09-numeri-complessi.md",
    "numeri/04-relazioni-binarie.md": "relazioni/01-relazioni-binarie.md",
    "funzioni/06-fenomeni-vibratori.md": "funzioni/05-trigonometriche.md",
    "funzioni/07-parte-intera.md": "funzioni/06-parte-intera.md",
    "funzioni/08-iperboliche.md": "funzioni/07-iperboliche.md",
    "funzioni/09-operazioni-grafici.md": "funzioni/08-operazioni-grafici.md",
    "funzioni/10-composte.md": "funzioni/09-composte.md",
    "funzioni/11-inverse.md": "funzioni/10-inverse.md",
    "esercizi/es-numeri-04-induzione.md": "esercizi/es-logica-01-induzione.md",
    "esercizi/es-numeri-05-numeri-complessi.md": "esercizi/es-numeri-04-numeri-complessi.md",
}
PAGINE_SPOSTATE_EN = {
    "numbers/02-logic.md": "logic/01-logic.md",
    "numbers/08-induction.md": "logic/02-induction.md",
    "numbers/03-number-sets.md": "numbers/02-number-sets.md",
    "numbers/05-ordered-fields.md": "numbers/03-ordered-fields.md",
    "numbers/06-roots-powers-logarithms.md": "numbers/04-roots-powers-logarithms.md",
    "numbers/07-summations.md": "numbers/05-summations.md",
    "numbers/09-factorials-binomials.md": "numbers/06-factorials-binomials.md",
    "numbers/10-fibonacci.md": "numbers/07-fibonacci.md",
    "numbers/11-infinite-sets.md": "numbers/08-infinite-sets.md",
    "numbers/12-complex-numbers.md": "numbers/09-complex-numbers.md",
    "numbers/04-binary-relations.md": "relations/01-binary-relations.md",
    "functions/06-oscillations.md": "functions/05-trigonometric-functions.md",
    "functions/07-integer-part.md": "functions/06-integer-part.md",
    "functions/08-hyperbolic-functions.md": "functions/07-hyperbolic-functions.md",
    "functions/09-graph-transformations.md": "functions/08-graph-transformations.md",
    "functions/10-composite-functions.md": "functions/09-composite-functions.md",
    "functions/11-inverse-functions.md": "functions/10-inverse-functions.md",
    "exercises/es-numbers-04-induction.md": "exercises/es-logic-01-induction.md",
    "exercises/es-numbers-05-complex-numbers.md": "exercises/es-numbers-04-complex-numbers.md",
}
PAGINE_SPOSTATE = PAGINE_SPOSTATE_EN if LINGUA == "en" else PAGINE_SPOSTATE_IT


# ---------------------------------------------------------------- capitoli <-> schede di esercizi
# Per argomento (2026-10-12, richiesta di Fabio): ogni scheda rimanda ai capitoli su cui si
# esercita; la barra di ogni capitolo e la riga in fondo alla pagina rimandano alle sue schede.
# ID italiani; le schede degli integrali non hanno capitoli (le note non esistono).
SCHEDA_CAPITOLI = {
    "es-logica-01-induzione": ["logica-02-induzione"],
    "es-numeri-01-massimi-minimi": ["numeri-03-campi-ordinati"],
    "es-numeri-02-equazioni-disequazioni": ["numeri-04-radicali-potenze-logaritmi", "numeri-06-fattoriali-binomiali"],
    "es-numeri-03-sommatorie": ["numeri-05-sommatorie"],
    "es-numeri-04-numeri-complessi": ["numeri-09-numeri-complessi"],
    "es-funzioni-01-insiemi-definizione": ["funzioni-02-funzioni-reali"],
    "es-funzioni-02-funzioni-inverse": ["funzioni-10-inverse"],
    "es-successioni-01-proprieta": ["successioni-01-limiti-successioni"],
    "es-successioni-02-verifica-limiti": ["successioni-01-limiti-successioni"],
    "es-successioni-03-calcolo-limiti": ["successioni-02-calcolo-limiti", "successioni-03-nepero",
                                         "successioni-04-stime-asintotiche", "successioni-05-gerarchie-infiniti"],
    "es-successioni-04-aggiuntivi": ["successioni-02-calcolo-limiti"],
    "es-limiti-01-limiti-funzioni": ["limiti-02-calcolo-limiti", "limiti-06-limiti-notevoli", "limiti-07-sviluppi-asintotici"],
    "es-derivate-01-cuspidi-flessi-tangenti": ["derivate-03-punti-angolosi-cuspidi", "derivate-07-derivata-seconda"],
    "es-derivate-02-calcolo-derivate": ["derivate-02-derivate-elementari", "derivate-04-regole-calcolo"],
    "es-derivate-03-rette-tangenti": ["derivate-01-funzione-derivata"],
    "es-derivate-04-asintoti": ["limiti-01-limiti-asintoti", "derivate-09-studio-funzioni"],
    "es-derivate-05-prolungamenti": ["limiti-04-funzioni-continue"],
    "es-derivate-06-derivabilita": ["derivate-06-de-l-hospital"],
    "es-derivate-07-equazioni-parametriche": ["derivate-09-studio-funzioni"],
    "es-derivate-08-studi-funzione": ["derivate-09-studio-funzioni"],
    "es-derivate-09-mclaurin": ["derivate-08-approssimazioni"],
    "es-derivate-10-limiti-sviluppi": ["derivate-08-approssimazioni", "limiti-07-sviluppi-asintotici"],
    "es-derivate-11-newton": ["derivate-10-newton"],
    "es-derivate-12-bisezione": ["limiti-08-zeri-bisezione"],
    "es-derivate-13-estremi": ["derivate-05-valor-medio"],
    "es-serie-01-serie-numeriche": ["serie-01-serie-numeriche", "serie-02-termini-non-negativi", "serie-03-segno-variabile"],
}
# titoli brevi delle schede nel menu «Esercizi» (gli altri restano quelli della pagina)
TITOLO_BREVE_ES = {
    "es-numeri-01-massimi-minimi": ("Massimi, minimi, estremi", "Max, min, suprema"),
    "es-numeri-02-equazioni-disequazioni": ("Equazioni e disequazioni", "Equations and inequalities"),
    "es-successioni-02-verifica-limiti": ("Verifica di limiti", "Verifying limits"),
    "es-successioni-03-calcolo-limiti": ("Calcolo di limiti", "Computing limits"),
    "es-limiti-01-limiti-funzioni": ("Limiti di funzioni", "Limits of functions"),
    "es-derivate-02-calcolo-derivate": ("Calcolo delle derivate", "Computing derivatives"),
    "es-derivate-13-estremi": ("Estremi locali e globali", "Local and global extrema"),
}


def _id_cap(cid_it):
    for c, ci in zip(CAPITOLI, CAPITOLI_IT):
        if ident(*ci[:3]) == cid_it:
            return c
    raise KeyError(cid_it)


def _id_es(eid_it):
    for e, ei in zip(ESERCIZI, ESERCIZI_IT):
        if ident_es(*ei[:3]) == eid_it:
            return e
    raise KeyError(eid_it)


def schede_del_capitolo(cid):
    """Le schede (righe di ESERCIZI della lingua) collegate al capitolo cid (ID della lingua)."""
    cit = ident_it(cid)
    return [_id_es(e) for e, caps in SCHEDA_CAPITOLI.items() if cit in caps]


def capitoli_della_scheda(eid):
    """I capitoli (righe di CAPITOLI della lingua) su cui si esercita la scheda eid."""
    return [_id_cap(c) for c in SCHEDA_CAPITOLI.get(ident_es_it(eid), [])]


def titolo_breve_es(eid, titolo):
    t = TITOLO_BREVE_ES.get(ident_es_it(eid))
    return t[1 if LINGUA == "en" else 0] if t else titolo
