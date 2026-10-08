---
title: "Equazioni e disequazioni di variabile reale"
---

# Equazioni e disequazioni di variabile reale

<div class="info-capitolo" markdown>

**Esercizi · Numeri e logica** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf)

</div>

!!! esercizio "Esercizio 1"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    \frac{x^{2}-2x}{x^{2}-4x+3}>0
    $$

??? soluzione "Soluzione"

    Il numeratore $x^{2}-2x$ è positivo per $x<0$ oppure per $x>2$, nullo per $x=0$, $x=2$, negativo per $0<x<2$. Il denominatore $x^{2}-4x+3$ è positivo per $x<1$ oppure per $x>3$, negativo per $1<x<3$. Il quoziente è definito ed ha il segno positivo richiesto per

    $$
    x\in(-\infty,0)\cup(1,2)\cup(3,+\infty).
    $$

!!! esercizio "Esercizio 2"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    \log(x-1)^{2}-\log(x-2)>0
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\log(x-1)^{2}-\log(x-2)$ è definita per $x>2$ in quanto per tali $x$, e solo per tali, risulta $x-2>0$, $(x-1)^{2}>0$. Nel suo dominio, si ha, come richiesto, $f(x)>0$ se e solo se

    $$
    \log(x-1)^{2}>\log(x-2), \ \ \ x>2
    $$

    quindi se e solo se

    $$
    \left\{\begin{array}{l}(x-1)^{2}>x-2\\
    \\
    x>2\end{array} \right.
    $$

    Otteniamo

    $$
    \left\{\begin{array}{l}x^{2}-3x+3>0\\
    \\
    x>2\end{array}\right.
    $$

    che equivale a

    $$
    x>2
    $$

    in quanto $x^{2}-3x+3>0$ è soddisfatta per ogni $x$. In tutto il proprio dominio $(2,+\infty)$ la funzione $f(x)$ assume valori positivi.

!!! esercizio "Esercizio 3"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    e^{x}+e^{-x}<\frac{10}{3}
    $$

??? soluzione "Soluzione"

    Per ogni $x\in\R$

    $$
    e^{x}+e^{-x}<\frac{10}{3}
    $$

    equivale a

    $$
    3e^{2x}-10e^{x}+3<0
    $$

    quindi a

    $$
    \frac{1}{3}<e^{x}<3.
    $$

    Ne segue che la disequazione è risolta da

    $$
    -\log3<x<\log3.
    $$

!!! esercizio "Esercizio 4"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    8^{x+1}\geq2^{x^{2}}
    $$

??? soluzione "Soluzione"

    Per ogni $x\in\R$

    $$
    8^{x+1}\geq2^{x^{2}}
    $$

    equivale a

    $$
    2^{3x+3}\geq2^{x^{2}}
    $$

    quindi a

    $$
    3x+3\geq x^{2}
    $$

    dal momento che $2^{x}$ è una funzione strettamente crescente in $\R$. Ne segue che la disequazione è risolta da

    $$
    \frac{3-\sqrt{21}}{2}\leq x\leq \frac{3+\sqrt{21}}{2}.
    $$

!!! esercizio "Esercizio 5"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    \log(1-\sin x)\geq0
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\log(1-\sin x)$ è definita per $\sin x<1$ quindi per

    $$
    x\neq\frac{\pi}{2}+2k\pi,\ \ \ k\in{\bf Z}.
    $$

    Per tali $x$ si ha $f(x)\geq0$ se e solo se

    $$
    1-\sin x\geq1
    $$

    quindi per

    $$
    \sin x\leq 0.
    $$

    La disequazione data è risolta per

    $$
    \pi+2k\pi\leq x\leq 2\pi+2k\pi,\ \ \ k\in{\bf Z}
    $$

    cioè per

    $$
    x\in\bigcup_{k\in{\bf Z}}[\pi+2k\pi, 2\pi+2k\pi].
    $$

!!! esercizio "Esercizio 6"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    |x|\sqrt{1-2x^{2}}>2x^{2}-1
    $$

??? soluzione "Soluzione"

    $\sqrt{1-2x^{2}}$ è definita per $1-2x^{2}\geq0$. Quando $1-2x^{2}=0$ la disequazione non è soddisfatta in quanto si riduce a $0>0$. Quando $1-2x^{2}>0$ la disequazione è soddisfatta in quanto il primo membro $|x|\sqrt{1-2x^{2}}$ è il prodotto di due numeri positivi mentre il secondo membro $2x^{2}-1=-(1-2x^{2})$ è negativo. Dunque la disequazione è risolta per

    $$
    -\sqrt{\frac{1}{2}}<x<\sqrt{\frac{1}{2}}.
    $$

!!! esercizio "Esercizio 7"

    Risolvere la seguente equazione di variabile reale $x$:

    $$
    \sin^{2}x=2\cos^{2}x-\frac{1}{2}
    $$

??? soluzione "Soluzione"

    L'equazione

    $$
    \sin^{2}x=2\cos^{2}x-\frac{1}{2}
    $$

    equivale a

    $$
    \begin{array}{l}2\sin^{2}x=4(1-\sin^{2}x)-1\\
    \\
    6\sin^{2}x=3\\
    \\
    \sin x=\pm\sqrt{\frac{1}{2}}.\end{array}
    $$

    Le soluzioni sono date da

    $$
    x=\frac{\pi}{4}+\frac{k\pi}{2},\ \ \ k\in{\bf Z}.
    $$

!!! esercizio "Esercizio 8"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    e^{\sin^{2}x-\sin x}\leq1
    $$

??? soluzione "Soluzione"

    Per ogni $x\in\R$, $e^{\sin^{2}x-\sin x}\leq1$ equivale a

    $$
    \sin^{2}x-\sin x\leq0
    $$

    quindi a

    $$
    0\leq\sin x\leq1.
    $$

    Le soluzioni sono date da

    $$
    2k\pi\leq x\leq \pi+2k\pi,\ \ \ k\in{\bf Z}
    $$

    cioè da

    $$
    x\in\bigcup_{k\in{\bf Z}}[2k\pi, \pi+2k\pi].
    $$

!!! esercizio "Esercizio 9"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    2\left|x^{2}-x\right|>|x|
    $$

??? soluzione "Soluzione"

    La disequazione $2\left|x^{2}-x\right|>|x|$ non è soddisfatta per $x=0$. Per $x\neq0$, dividendo per il termine positivo $|x|$, equivale a

    $$
    2\left|x-1\right|>1
    $$

    quindi a

    $$
    |x-1|>1/2.
    $$

    Le soluzioni sono date da

    $$
    (x-1<-1/2, \ x\neq0)\vee (x-1>1/2),
    $$

    $$
    (x<1/2, \ x\neq0)\vee x>3/2
    $$

    quindi da

    $$
    x\in(-\infty,0)\cup(0,1/2)\cup(3/2,+\infty).
    $$

!!! esercizio "Esercizio 10"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    (x+1)^{x^{2}-1}>1
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=(x+1)^{x^{2}-1}$ è definita per $x>-1$. Per tali $x$, $f(x)>1$ equivale a

    $$
    e^{(x^{2}-1)\log(x+1)}>1
    $$

    quindi a

    $$
    (x^{2}-1)\log(x+1)>0,\ \ \ x>-1.
    $$

    Dividendo per il termine positivo $x+1$ si ottiene

    $$
    (x-1)\log(x+1)>0,\ \ \ x>-1.
    $$

    Il fattore $x-1$ è positivo per $x>1$, nullo per $x=1$, negativo per $-1<x<1$. Il fattore $\log(x+1)$ è positivo per $x>0$, nullo per $x=0$, negativo per $-1<x<0$. Per la regola dei segni, le soluzioni sono date da

    $$
    x\in(-1,0)\cup(1,+\infty).
    $$

!!! esercizio "Esercizio 11"

    Risolvere la seguente equazione di variabile reale $x$:

    $$
    3^{|x^{2}-4|}=0
    $$

??? soluzione "Soluzione"

    $3^{|x^{2}-4|}=0$ non ha soluzioni in quanto $3^{y}>0$ per ogni $y\in\R$.

!!! esercizio "Esercizio 12"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    \frac{\log_{a}(4x-3)}{\log_{a}(2x-1)} > 1 \quad 0<a<1
    $$

??? soluzione "Soluzione"

    Per le condizioni di esistenza del logaritmo e del denominatore, bisogna imporre il sistema

    $$
    \begin{cases*}
    4x-3 > 0 \\
    2x-1 > 0 \\
    \log_{a}(2x-1) \neq 0
    \end{cases*}
    $$

    che fornisce $\frac{3}{4}<x<1, x>1$. Portando ora tutto a primo membro, determinando il minimo comune denominatore ed utilizzando le proprietà dei logaritmi, si ricava

    $$
    \frac{\log_{a}(\frac{4x-3}{2x-1})}{\log_{a}(2x-1)}>0
    $$

    Studiando il segno di numeratore e denominatore e tenendo presente che $a<1$, per il numeratore si ottiene

    $$
    \log_{a}\left(\frac{4x-3}{2x-1}\right) > 0 \Longleftrightarrow \frac{4x-3}{2x-1}<1 \Longleftrightarrow \frac{1}{2}<x<1
    $$

    mentre per il denominatore si ottiene

    $$
    \log_{a}(2x-1)>0 \Longleftrightarrow x<1
    $$

    Componendo i segni, la disequazione è verificata per $\frac{1}{2}<x<1, x>1$. Unendo a sistema tale intervallo di soluzioni con le condizioni di esistenza precedentemente studiate, si ottiene che la disequazione è soddisfatta per ogni $x$ appartenente all'insieme $(\frac{3}{4};1) \cup (1,+\infty)$.

!!! esercizio "Esercizio 13"

    Risolvere la seguente disequazione di variabile reale $x$:

    $$
    \sqrt{x^2-3x+5} \leq x+3
    $$

??? soluzione "Soluzione"

    La disequazione irrazionale si presenta nella forma $\sqrt{A(x)} \leq B(x)$, con $A(x)$ e $B(x)$ polinomi in $x$. Bisogna innanzitutto imporre la condizione di esistenza del radicale, cioè $x^2-3x+5 \geq 0$. Inoltre, essendo un radicale sempre positivo o nullo in $\mathbb{R}$, imponiamo $x+3 \geq 0$. Risolviamo dunque il sistema:

    $$
    \begin{cases*}
    x^2-3x+5 \geq 0 \\
    x+3 \geq 0 \\
    x^2-3x+5 \leq (x+3)^2
    \end{cases*}
    $$

    dove, nell'ultima disequazione, abbiamo potuto elevare entrambi i membri, in quanto positivi, al quadrato.  Il sistema si riduce a:

    $$
    \begin{cases*}
    \forall x \in \mathbb{R} \\
    x \geq -3 \\
    x \geq -\frac{4}{9}
    \end{cases*}
    $$

    il cui intervallo di soluzioni è $[-\frac{4}{9}, +\infty)$.

!!! esercizio "Esercizio 14"

    Risolvere la seguente disequazione frazionaria di variabile reale $x$:

    $$
    \frac{x^3-3x^2+2x-6}{x^2-2x-3} > \frac{2}{x+1}
    $$

??? soluzione "Soluzione"

    Bisogna innanzitutto porre nella forma canonica (0 al secondo membro) la disequazione. Le condizioni di esistenza (denominatori diversi da zero) saranno automaticamente incluse nello studio del segno. Otteniamo

    $$
    \frac{x^3-3x^2+2x-6}{x^2-2x-3} - \frac{2}{x+1} > 0
    $$

    Scomponiamo in fattori il numeratore e il denominatore della prima frazione, ottenendo:

    $$
    \frac{(x^2+2)(x-3)}{(x-3)(x+1)} - \frac{2}{x+1} > 0
    $$

    Potendo semplificare $x-3$ ottenendo una frazione equivalente, a patto che $x \neq 3$ per condizione di esistenza, si ha

    $$
    \frac{x^2+2}{x+1} - \frac{2}{x+1} > 0
    $$

    ovvero

    $$
    \frac{x^2}{x+1} > 0
    $$

    Il numeratore è positivo $\forall x \in \mathbb{R}, x \neq 0$, il denominatore è positivo per $x>-1$. Componendo i segni, e tenendo conto della condizione $x \neq 3$, si ottiene l'insieme delle soluzioni $(-1,0) \cup (0,3) \cup (3,+\infty)$.
