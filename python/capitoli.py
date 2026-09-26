"""Registro dei capitoli: da dove viene ogni pagina del sito.

Ogni capitolo è una dispensa di `materiale_sorgente/DISPENSE/` (copia delle
note originali, che restano intatte in `1000_ANALISI_MATEMATICA/`).
"""
import os
from pathlib import Path

# lingua: LINGUA=en python3 python/... produce il sito inglese in ../en/
LINGUA = os.environ.get("LINGUA", "it")
MODULO = Path(__file__).resolve().parents[2]
SORGENTE = MODULO / "materiale_sorgente" / ("DISPENSE" if LINGUA == "it" else "DISPENSE_EN")
IT = MODULO / LINGUA          # radice del repository della lingua (it/ o en/)
DOCS = IT / "docs"

# (cartella del sito, titolo della parte, icona, descrizione breve, parte delle note)
PARTI = [
    ("numeri", "Numeri e logica", "material/numeric",
     "Insiemi, logica, numeri reali ed estremi, sommatorie, induzione, numeri complessi.", "1"),
    ("funzioni", "Funzioni", "material/function-variant",
     "Le funzioni elementari e i loro grafici: potenze, esponenziali, trigonometriche, inverse.", "2"),
    ("successioni", "Limiti di successioni", "material/dots-horizontal",
     "Successioni, limiti, il numero di Nepero, stime asintotiche, ricorrenze.", "3"),
    ("limiti", "Limiti di funzioni e continuità", "material/chart-bell-curve",
     "Limiti, asintoti, limiti notevoli, continuità, teorema degli zeri, Weierstrass.", "3"),
    ("derivate", "Derivate", "material/chart-line",
     "Derivata, regole di calcolo, teoremi del calcolo differenziale, Taylor, studio di funzione, Newton.", "4"),
    ("serie", "Serie", "material/sigma",
     "Serie numeriche, criteri di convergenza, serie a segno variabile, serie di funzioni.", "5"),
]

# (parte, numero, slug, file sorgente relativo a SORGENTE)
CAPITOLI = [
    ("numeri", 1, "insiemi", "PARTE_1_NUMERIeLOGICA/1_Insiemi/Insiemi.tex"),
    ("numeri", 2, "logica", "PARTE_1_NUMERIeLOGICA/2_Logica/logica.tex"),
    ("numeri", 3, "insiemi-numerici", "PARTE_1_NUMERIeLOGICA/3_InsiemiNumerici/InsiemiNumerici.tex"),
    ("numeri", 4, "relazioni-binarie", "PARTE_1_NUMERIeLOGICA/4_RelazioniBinarie/RelazioniBinarie.tex"),
    ("numeri", 5, "campi-ordinati", "PARTE_1_NUMERIeLOGICA/5_CampiOrdinati_Estremi_AssiomaDiContinuità/CampiOrdinati_Estremi_AssiomaDiContinuità.tex"),
    ("numeri", 6, "radicali-potenze-logaritmi", "PARTE_1_NUMERIeLOGICA/6_RadicaliPotenzeLogaritmi/RadicaliPotenzeLogaritmi.tex"),
    ("numeri", 7, "sommatorie", "PARTE_1_NUMERIeLOGICA/7_SommatorieProgressioniGeometriche/SommatorieProgressioniGeometriche.tex"),
    ("numeri", 8, "induzione", "PARTE_1_NUMERIeLOGICA/8_Principio_di_Induzione/Principio_di_Induzione.tex"),
    ("numeri", 9, "fattoriali-binomiali", "PARTE_1_NUMERIeLOGICA/9_FattorialiCoeffBinomDisTriang/FattorialiCoeffBinomDisTriang.tex"),
    ("numeri", 10, "fibonacci", "PARTE_1_NUMERIeLOGICA/10_SuccessioneDiFibonacci/SuccessioneDiFibonacci.tex"),
    ("numeri", 11, "insiemi-infiniti", "PARTE_1_NUMERIeLOGICA/11_Insiemi_infiniti/Insiemi_infiniti.tex"),
    ("numeri", 12, "numeri-complessi", "PARTE_1_NUMERIeLOGICA/12_Numeri_complessi/Numeri_complessi.tex"),
    ("funzioni", 1, "funzioni", "PARTE_2_FUNZIONI/1_Funzioni/Funzioni.tex"),
    ("funzioni", 2, "funzioni-reali", "PARTE_2_FUNZIONI/2_FunzioniRealiDiVariabileReale/FunzioniRealiDiVariabileReale.tex"),
    ("funzioni", 3, "potenza", "PARTE_2_FUNZIONI/3_FunzioniPotenza/FunzioniPotenza.tex"),
    ("funzioni", 4, "esponenziali-logaritmi", "PARTE_2_FUNZIONI/4_FunzioniEsponenzialiELogaritmiche/FunzioniEsponenzialiELogaritmiche.tex"),
    ("funzioni", 5, "trigonometriche", "PARTE_2_FUNZIONI/5_FunzioniTrigonometriche/FunzioniTrigonometriche.tex"),
    ("funzioni", 6, "fenomeni-vibratori", "PARTE_2_FUNZIONI/6_FenomeniVibratori/FenomeniVibratori.tex"),
    ("funzioni", 7, "parte-intera", "PARTE_2_FUNZIONI/7_FunzioniParteInteraEaTratti/FunzioniParteInteraEaTratti.tex"),
    ("funzioni", 8, "iperboliche", "PARTE_2_FUNZIONI/8_FunzioniIperboliche/FunzioniIperboliche.tex"),
    ("funzioni", 9, "operazioni-grafici", "PARTE_2_FUNZIONI/9_OperazioniSuiGrafici/OperazioniSuiGrafici.tex"),
    ("funzioni", 10, "composte", "PARTE_2_FUNZIONI/10_FunzioniComposte/FunzioniComposte.tex"),
    ("funzioni", 11, "inverse", "PARTE_2_FUNZIONI/11_FunzioniInverse/FunzioniInverse.tex"),
    ("successioni", 1, "limiti-successioni", "PARTE_3_LIMITI/1_SUCCESSIONI/1_SuccessioniProprietàLimiti/SuccessioniProprietàLimiti.tex"),
    ("successioni", 2, "calcolo-limiti", "PARTE_3_LIMITI/1_SUCCESSIONI/2_CalcoloLimitiSuccessioni/CalcoloLimitiSuccessioni.tex"),
    ("successioni", 3, "nepero", "PARTE_3_LIMITI/1_SUCCESSIONI/3_IlNumeroDiNepero/IlNumeroDiNepero.tex"),
    ("successioni", 4, "stime-asintotiche", "PARTE_3_LIMITI/1_SUCCESSIONI/4_ConfrontiStimeAsintotiche/ConfrontiStimeAsintotiche.tex"),
    ("successioni", 5, "gerarchie-infiniti", "PARTE_3_LIMITI/1_SUCCESSIONI/5_GerarchieDegliInfinitiCriterioDelRapporto/GerarchieDegliInfinitiCriterioDelRapporto.tex"),
    ("successioni", 6, "ricorrenza", "PARTE_3_LIMITI/1_SUCCESSIONI/6_SuccessioniDefinitePerRicorrenza/SuccessioniDefinitePerRicorrenza.tex"),
    ("limiti", 1, "limiti-asintoti", "PARTE_3_LIMITI/2_FUNZIONI/1_LimitiDiFunzioniAsintoti/LimitiDiFunzioniAsintoti.tex"),
    ("limiti", 2, "calcolo-limiti", "PARTE_3_LIMITI/2_FUNZIONI/2_CalcoloLimitiDiFunzioni/CalcoloLimitiDiFunzioni.tex"),
    ("limiti", 3, "polinomi-razionali", "PARTE_3_LIMITI/2_FUNZIONI/3_LimitiDiPolinomiFunzioniRazionali/LimitiDiPolinomiFunzioniRazionali.tex"),
    ("limiti", 4, "funzioni-continue", "PARTE_3_LIMITI/2_FUNZIONI/4_FunzioniContinue/FunzioniContinue.tex"),
    ("limiti", 5, "confronto-infiniti", "PARTE_3_LIMITI/2_FUNZIONI/5_GerarchiaInfiniti/GerarchiaInfiniti.tex"),
    ("limiti", 6, "limiti-notevoli", "PARTE_3_LIMITI/2_FUNZIONI/6_LimitiNotevoliStimeAsintotiche/LimitiNotevoliStimeAsintotiche.tex"),
    ("limiti", 7, "sviluppi-asintotici", "PARTE_3_LIMITI/2_FUNZIONI/7_SviluppiAsintotici/SviluppiAsintotici.tex"),
    ("limiti", 8, "zeri-bisezione", "PARTE_3_LIMITI/2_FUNZIONI/8_TeoremaDegliZeriMetodoDellaBisezione/TeoremaDegliZeriMetodoDellaBisezione.tex"),
    ("limiti", 9, "weierstrass", "PARTE_3_LIMITI/2_FUNZIONI/9_TeoremaWeierstrassTeoremaValoriIntermedi/TeoremaWeierstrassTeoremaValoriIntermedi.tex"),
    ("limiti", 10, "monotone-invertibili", "PARTE_3_LIMITI/2_FUNZIONI/10_FunzioniMonotoneInvertibilità/FunzioniMonotoneInvertibilità.tex"),
    ("derivate", 1, "funzione-derivata", "PARTE_4_DERIVATE/1_FunzioneDerivata/FunzioneDerivata.tex"),
    ("derivate", 2, "derivate-elementari", "PARTE_4_DERIVATE/2_DerivateFunzioniElementari/DerivateFunzioniElementari.tex"),
    ("derivate", 3, "punti-angolosi-cuspidi", "PARTE_4_DERIVATE/3_PuntiAngolosiCuspidi/PuntiAngolosiCuspidiFlessi.tex"),
    ("derivate", 4, "regole-calcolo", "PARTE_4_DERIVATE/4_RegoleCalcoloDerivate/RegoleCalcoloDerivate.tex"),
    ("derivate", 5, "valor-medio", "PARTE_4_DERIVATE/5_TeoremaValoreMedioMassimiMinimi/TeoremaValoreMedioMassimiMinimi.tex"),
    ("derivate", 6, "de-l-hospital", "PARTE_4_DERIVATE/6_TeoremaDiDeLHospitalDerivabilità/TeoremaDiDeLHospital.tex"),
    ("derivate", 7, "derivata-seconda", "PARTE_4_DERIVATE/7_DerivataSeconda/DerivataSeconda.tex"),
    ("derivate", 8, "approssimazioni", "PARTE_4_DERIVATE/8_Approssimazioni/Approssimazioni.tex"),
    ("derivate", 9, "studio-funzioni", "PARTE_4_DERIVATE/9_StudioGrafici/StudioGrafici.tex"),
    ("derivate", 10, "newton", "PARTE_4_DERIVATE/10_MetodoDiNewton/MetodoDiNewton.tex"),
    ("serie", 1, "serie-numeriche", "PARTE_5_SERIE/1_SerieNumeriche/SerieNumeriche.tex"),
    ("serie", 2, "termini-non-negativi", "PARTE_5_SERIE/2_SerieNumericheTerminiNonNegativi/SerieNumericheTerminiNonNegativi.tex"),
    ("serie", 3, "segno-variabile", "PARTE_5_SERIE/3_SerieNumericheTerminiAlterni/SerieNumericheTerminiAlterni.tex"),
    ("serie", 4, "serie-funzioni", "PARTE_5_SERIE/4_SerieDiFunzioni/SerieDiFunzioni.tex"),
]


PARTI_EN = {
    "numeri": ("numbers", "Numbers and logic", "Sets, logic, real numbers and suprema, summations, induction, complex numbers."),
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
    "trigonometriche": "trigonometric-functions", "fenomeni-vibratori": "oscillations", "parte-intera": "integer-part",
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
    CAPITOLI = [(_cartella[p], n, SLUG_EN[s], rel) for p, n, s, rel in CAPITOLI]


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
SORGENTE_ES = MODULO / "materiale_sorgente" / ("ESERCIZI" if LINGUA == "it" else "ESERCIZI_EN")

# (parte del sito, numero, slug, file relativo a SORGENTE_ES)
ESERCIZI = [
    ("numeri", 1, "massimi-minimi", "ESERCIZI_PARTE_1/1_MassimiMinimi_Estremi/MassimiMinimiEstremi.tex"),
    ("numeri", 2, "equazioni-disequazioni", "ESERCIZI_PARTE_1/2_Equazioni_Disequazioni/EquazioniDisequazioni.tex"),
    ("numeri", 3, "sommatorie", "ESERCIZI_PARTE_1/3_Sommatorie/Sommatorie.tex"),
    ("numeri", 4, "induzione", "ESERCIZI_PARTE_1/4_PrincipioDiInduzione/PrincipioDiInduzione.tex"),
    ("numeri", 5, "numeri-complessi", "ESERCIZI_PARTE_1/5_Numeri_Complessi/Numeri_complessi.tex"),
    ("funzioni", 1, "insiemi-definizione", "ESERCIZI_PARTE_2/1_InsiemiDiDefinizione/InsiemiDiDefinizione.tex"),
    ("funzioni", 2, "funzioni-inverse", "ESERCIZI_PARTE_2/2_FunzioniInverse/FunzioniInverse.tex"),
    ("successioni", 1, "proprieta", "ESERCIZI_PARTE_3/A_Successioni/1_ProprietaSuccessioni/ProprietaSuccessioni.tex"),
    ("successioni", 2, "verifica-limiti", "ESERCIZI_PARTE_3/A_Successioni/2_DefinizioneLimiteSuccessioni/DefinizioneLimiteSuccessioni.tex"),
    ("successioni", 3, "calcolo-limiti", "ESERCIZI_PARTE_3/A_Successioni/3_CalcoloLimitiSuccessioni/CalcoloLimitiSuccessioni.tex"),
    ("successioni", 4, "aggiuntivi", "ESERCIZI_PARTE_3/A_Successioni/4_EserciziAggiuntivi/EserciziAggiuntivi.tex"),
    ("limiti", 1, "limiti-funzioni", "ESERCIZI_PARTE_3/B_Funzioni/1_LimitiDiFunzione/LimitiDiFunzione.tex"),
    ("derivate", 1, "cuspidi-flessi-tangenti", "ESERCIZI_PARTE_4/1_CuspidiFlessiTangenti/CuspidiFlessiTangenti.tex"),
    ("derivate", 2, "calcolo-derivate", "ESERCIZI_PARTE_4/2_CalcoloDerivate/CalcoloDerivate.tex"),
    ("derivate", 3, "rette-tangenti", "ESERCIZI_PARTE_4/3_RetteTangenti/RetteTangenti.tex"),
    ("derivate", 4, "asintoti", "ESERCIZI_PARTE_4/4_Asintoti/Asintoti.tex"),
    ("derivate", 5, "prolungamenti", "ESERCIZI_PARTE_4/5_ProlungamentiContinui/ProlungamentiContinui.tex"),
    ("derivate", 6, "derivabilita", "ESERCIZI_PARTE_4/6_Derivabilità/Derivabilità.tex"),
    ("derivate", 7, "equazioni-parametriche", "ESERCIZI_PARTE_4/7_EquazioniParametriche/EquazioniParametriche.tex"),
    ("derivate", 8, "studi-funzione", "ESERCIZI_PARTE_4/8_StudiDiFunzione/StudiDiFunzione.tex"),
    ("derivate", 9, "mclaurin", "ESERCIZI_PARTE_4/9_SviluppiDiMcLaurin/SviluppiDiMcLaurin.tex"),
    ("derivate", 10, "limiti-sviluppi", "ESERCIZI_PARTE_4/10_Limiti/Limiti.tex"),
    ("derivate", 11, "newton", "ESERCIZI_PARTE_4/11_MetodoDiNewton/MetodoDiNewton.tex"),
    ("derivate", 12, "bisezione", "ESERCIZI_PARTE_4/12_MetodoDiBisezione/MetodoDiBisezione.tex"),
    ("derivate", 13, "estremi", "ESERCIZI_PARTE_4/13_RicercaMassimiMinimi/RicercaMassimiMinimi.tex"),
    ("serie", 1, "serie-numeriche", "ESERCIZI_PARTE_5/1_SerieNumeriche/Serie.tex"),
    ("integrali", 1, "primitive", "ESERCIZI_PARTE_6/1_primitive/primitive.tex"),
    ("integrali", 2, "integrali", "ESERCIZI_PARTE_6/2_integrali/integrali.tex"),
]
PARTI_ES = {  # parte -> (titolo IT, titolo EN, cartella EN)
    "numeri": ("Numeri e logica", "Numbers and logic", "numbers"),
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
