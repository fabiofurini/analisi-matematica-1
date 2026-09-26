"""Registro dei capitoli: da dove viene ogni pagina del sito.

Ogni capitolo è una dispensa di `materiale_sorgente/DISPENSE/` (copia delle
note originali, che restano intatte in `1000_ANALISI_MATEMATICA/`).
"""
from pathlib import Path

MODULO = Path(__file__).resolve().parents[2]
SORGENTE = MODULO / "materiale_sorgente" / "DISPENSE"
IT = MODULO / "it"
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


def ident(parte, num, slug):
    """Identificativo stabile del capitolo (nomi delle figure, dei PDF)."""
    return f"{parte}-{num:02d}-{slug}"


def pagina(parte, num, slug):
    """Percorso della pagina Markdown relativo a docs/."""
    return f"{parte}/{num:02d}-{slug}.md"
