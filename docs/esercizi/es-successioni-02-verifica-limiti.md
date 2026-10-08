---
title: "Verifica di limiti di successioni"
---

# Verifica di limiti di successioni

<div class="info-capitolo" markdown>

**Esercizi · Limiti di successioni** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf)

</div>

!!! esercizio "Esercizio 1"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}\frac{n}{2n+5}=\frac{1}{2}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=\frac{n}{2n+5}
    $$

    Dobbiamo verificare che per ogni $\varepsilon>0$ esiste $n(\varepsilon) \in \N$ tale che

    $$
    n>n(\varepsilon) \Rightarrow \frac{1}{2}-\varepsilon<a_{n}<\frac{1}{2}+\varepsilon
    $$

    Abbiamo

    $$
    a_{n}-\frac{1}{2}=-\frac{5}{4n+10},
    $$

    quindi si deve verificare che

    $$
    n>n(\varepsilon)\Rightarrow -\varepsilon<-\frac{5}{4n+10}<\varepsilon
    $$

    La seconda diseguaglianza è sempre vera mentre la prima equivale a

    $$
    4n+10>\frac{5}{\varepsilon}
    {\rm ~~~quindi~è~soddisfatta~per~~} n>\frac{5}{4\varepsilon}-\frac{5}{2}
    $$

    Fissato $\varepsilon > 0$, basterà scegliere il primo intero

    $$
    n(\varepsilon) > \frac{5}{4\varepsilon}-\frac{5}{2}
    $$

    per soddisfare la condizione richiesta dalla definizione di limite.

!!! esercizio "Esercizio 2"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}\frac{1}{\sqrt{n+1}}=0
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=\frac{1}{\sqrt{n+1}}
    $$

    Dobbiamo verificare che per ogni $\varepsilon>0$ esiste $n(\varepsilon) \in \N$ tale che

    $$
    n>n(\varepsilon) \Rightarrow -\varepsilon<a_{n}< \varepsilon
    $$

    La prima diseguaglianza è sempre vera mentre la seconda equivale a

    $$
    \sqrt{n+1}>\frac{1}{\varepsilon}
    {\rm ~~~quindi~è~soddisfatta~per~~} n>\frac{1}{\varepsilon^{2}}-1
    $$

    Fissato $\varepsilon > 0$, basterà scegliere il primo intero

    $$
    n(\varepsilon) > \frac{1}{\varepsilon^{2}}-1
    $$

    per soddisfare la condizione richiesta dalla definizione di limite.

!!! esercizio "Esercizio 3"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}\log{\left(1+\frac{1}{n}\right)}=0
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=\log{\left(1+\frac{1}{n}\right)}
    $$

    Dobbiamo verificare che per ogni $\varepsilon>0$ esiste $n(\varepsilon) \in \N$ tale che

    $$
    n>n(\varepsilon) \Rightarrow -\varepsilon<a_{n}< \varepsilon
    $$

    La prima diseguaglianza è sempre vera mentre la seconda equivale a

    $$
    1+\frac{1}{n}<e^{\varepsilon}
    {\rm ~~~quindi~è~soddisfatta~per~~} n>\frac{1}{e^{\varepsilon}-1}
    $$

    Fissato $\varepsilon > 0$, basterà scegliere il primo intero

    $$
    n(\varepsilon) > \frac{1}{e^{\varepsilon}-1}
    $$

    per soddisfare la condizione richiesta dalla definizione di limite.

!!! esercizio "Esercizio 4"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}\sqrt{4+\frac{1}{n}}=2
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=\sqrt{4+\frac{1}{n}}
    $$

    Dobbiamo verificare che per ogni $\varepsilon>0$ esiste $n(\varepsilon) \in \N$ tale che

    $$
    n>n(\varepsilon) \Rightarrow 2-\varepsilon<a_{n}<2+\varepsilon
    $$

    La prima diseguaglianza è sempre vera dato che $a_n > 2$ per ogni $n$, mentre la seconda equivale a

    $$
    4+\frac{1}{n}<4+\varepsilon^{2}+4\varepsilon
    {\rm ~~~quindi~è~soddisfatta~per~~} n>\frac{1}{\varepsilon^{2}+4\varepsilon}
    $$

    Fissato $\varepsilon > 0$, basterà scegliere il primo intero

    $$
    n(\varepsilon) > \frac{1}{\varepsilon^{2}+4\varepsilon}
    $$

    per soddisfare la condizione richiesta dalla definizione di limite.

!!! esercizio "Esercizio 5"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}(n^{2}-1)=+\infty
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=n^{2}-1
    $$

    Dobbiamo verificare che per ogni $M>0$ esiste $n(M) \in \N$ tale che

    $$
    n> n(M)  \Rightarrow a_{n}>M
    $$

    La disuguaglianza

    $$
    n^{2}-1>M
    {\rm ~~~è~soddisfatta~per~~} 
    n>\sqrt{M+1}
    $$

    Fissato $M > 0$, quindi basterà scegliere il primo intero

    $$
    n(M) > \sqrt{M+1}
    $$

    per soddisfare la condizione richiesta di divergenza.

!!! esercizio "Esercizio 6"

    Utilizzando la definizione di limite, verificare che:

    $$
    \displaystyle \lim_{n\to+\infty}\log{(\sqrt{n}+1)}=+\infty
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    a_{n}=\log{(\sqrt{n}+1)}
    $$

    Dobbiamo verificare che per ogni $M>0$ esiste $n(M) \in \N$ tale che

    $$
    n>n(M)\Rightarrow a_{n}>M
    $$

    La disuguaglianza

    $$
    \log{(\sqrt{n}+1)}>M
    {\rm ~~~è~soddisfatta~per~~} 
    n>(e^{M}-1)^2
    $$

    Fissato $M > 0$, quindi basterà scegliere il primo intero

    $$
    n(M) > (e^{M}-1)^2
    $$

    per soddisfare la condizione richiesta di divergenza.
