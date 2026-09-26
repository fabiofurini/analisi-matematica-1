"""Dove vanno i grafici interattivi nei capitoli.

Per ogni capitolo: (inizio del titolo della sezione, nome del grafico, funzione
iniziale o None). Il grafico si inserisce alla FINE della sezione indicata
(prima del titolo successivo dello stesso livello o superiore): prima la
teoria, poi le mani sul grafico.
"""
GRAFICI_NEI_CAPITOLI = {
    "numeri-12-numeri-complessi": [("### 3.2 Radici", "radici", None)],
    "funzioni-03-potenza": [("### 1.2 Esponente reale", "potenze", None)],
    "funzioni-04-esponenziali-logaritmi": [("## 2. Funzioni logaritmiche", "esponenziali", None)],
    "funzioni-06-fenomeni-vibratori": [("## 1. Fenomeni vibratori", "oscillazioni", None)],
    "funzioni-09-operazioni-grafici": [("## 1. Operazioni sui grafici", "operazioni", None)],
    "successioni-01-limiti-successioni": [("### 1.1 Successioni convergenti", "successione", None)],
    "successioni-03-nepero": [("## 1. Il numero", "successione", "s4")],
    "successioni-06-ricorrenza": [("## 2. L'algoritmo di Erone", "erone", None)],
    "limiti-08-zeri-bisezione": [("## 2. Metodo della bisezione", "bisezione", None)],
    "derivate-01-funzione-derivata": [("## 2. Retta tangente", "tangente", None)],
    "derivate-05-valor-medio": [("## 3. Teorema del valor medio", "lagrange", None)],
    "derivate-07-derivata-seconda": [("## 5. Punti di flesso", "concavita", None)],
    "derivate-08-approssimazioni": [("## 3. Formula/sviluppo di Taylor con resto secondo Peano", "taylor", None)],
    "derivate-10-newton": [("## 1. Metodo di Newton", "newton", None)],
    "serie-01-serie-numeriche": [("### 1.4 Serie geometrica", "geometrica", None)],
    "serie-02-termini-non-negativi": [("### 1.4 Serie armonica generalizzata", "seriep", None)],
    "serie-03-segno-variabile": [("### 1.1 Serie a termini di segno alternato", "seriep", "alt")],
}


def inserisci(cid: str, md: str) -> str:
    righe = md.split("\n")
    for titolo, nome, funzione in GRAFICI_NEI_CAPITOLI.get(cid, []):
        idx = next((i for i, r in enumerate(righe) if r.startswith(titolo)), None)
        if idx is None:
            raise ValueError(f"{cid}: sezione non trovata «{titolo}»")
        livello = len(titolo) - len(titolo.lstrip("#"))
        fine = len(righe)
        for j in range(idx + 1, len(righe)):
            r = righe[j]
            if r.startswith("#") and len(r) - len(r.lstrip("#")) <= livello and r[len(r) - len(r.lstrip("#"))] == " ":
                fine = j
                break
        attr = f' data-funzione="{funzione}"' if funzione else ""
        blocco = ["", '<p class="gi-invito"><strong>Prova tu</strong> — il grafico interattivo qui sotto ti fa vedere quello che hai appena letto: muovi i cursori.</p>',
                  "", f'<div class="gi" data-grafico="{nome}"{attr}></div>', ""]
        righe[fine:fine] = blocco
    return "\n".join(righe)
