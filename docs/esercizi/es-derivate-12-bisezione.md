---
title: "Metodo di bisezione"
---

# Metodo di bisezione

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-derivate-12-bisezione.pdf)

</div>

!!! esercizio "Esercizio 1"

    Utilizzando il metodo della bisezione, individuare le soluzioni dell'equazione

    $$
    x^3+2x-1= 0
    $$

    con due decimali esatti.

    <em>(Anzitutto occorre stabilire quante sono le soluzioni.)</em>

??? soluzione "Soluzione"

    Scritta nella forma

    $$
    x^3=1-2x,
    $$

    l'equazione suggerisce di confrontare innanzitutto i grafici delle funzioni $y=x^3$ e $y=1-2x$, al fine di stabilire preliminarmente il numero delle soluzioni dell'equazione. Dal confronto fra i due grafici, si evince che esiste un'unica soluzione $\alpha \in (0, 1)$, cioè un unico zero della funzione $f(x)=x^3+2x-1$ in quell'intervallo. Più formalmente:

    $$
    \exists ! \; \alpha \in (0,1): \; f(\alpha)=0
    $$

    Procediamo, dunque, con l'applicazione del metodo di bisezione all'intervallo $[a,b]=[0,1]$, con $f(0)=-1<0$ e $f(1)=2>0$.

    <em>Iterazione 1 $(n=0)$</em>

    \begin{align*}
    [a_0,b_0]=[0,1] \\
    c_0=\frac{a_0+b_0}{2}=\frac{1}{2}
    \end{align*}

    con $f(c_0)=\frac{1}{8}>0$. Allora, nella prossima iterazione, $b_1=c_0$.

??? soluzione "Soluzione"

    <em>Iterazione 2 $(n=1)$</em>

    $$
    [a_1,b_1]=\left[0,\frac{1}{2}\right], \; f(0)<0, \; f\left(\frac{1}{2}\right)>0
    $$

    $$
    c_1=\frac{a_1+b_1}{2}=\frac{1}{4}
    $$

    con $f(c_1)<0$. Allora, nella prossima iterazione, $a_2=c_1$.

    <em>Iterazione 3 $(n=2)$</em>

    $$
    [a_2,b_2]=\left[\frac{1}{4},\frac{1}{2}\right], \; f\left(\frac{1}{4}\right)<0, \; f\left(\frac{1}{2}\right)>0
    $$

    $$
    c_2=\frac{a_2+b_2}{2}=\frac{3}{8}
    $$

    con $f(c_2)<0$. Allora, nella prossima iterazione, $a_3=c_2$. Per raggiungere il livello di approssimazione desiderato, dovremo attendere fino all'iterazione 9 $(n=8)$, in cui si otterrà

    $$
    a_8=\frac{29}{64}\simeq0,\mathbf{45}3 \hspace{1cm} b_8=\frac{117}{256}\simeq 0,\mathbf{45}7
    $$

    Possiamo dichiarare che, in definitiva, $\alpha \in \left(\frac{29}{64},\frac{117}{256}\right)$ con due decimali esatti.

!!! esercizio "Esercizio 2"

    Utilizzando il metodo della bisezione, individuare le soluzioni dell'equazione

    $$
    x+\log x = 0
    $$

    con due decimali esatti.

    <em>(Anzitutto occorre stabilire quante sono le soluzioni.)</em>

??? soluzione "Soluzione"

    Scritta nella forma

    $$
    \log x=-x,
    $$

    l'equazione suggerisce di confrontare innanzitutto i grafici delle funzioni $y=\log x$ e $y=-x$, al fine di stabilire preliminarmente il numero delle soluzioni dell'equazione. Dal confronto fra i due grafici, si evince che esiste un'unica soluzione $\alpha \in (0, 1)$, cioè un unico zero della funzione $f(x)=x+\log x$ in quell'intervallo. Più formalmente:

    $$
    \exists ! \; \alpha \in (0,1): \; f(\alpha)=0
    $$

    Procediamo, dunque, con l'applicazione del metodo di bisezione all'intervallo $[a,b]=[0+\varepsilon,1], \; \varepsilon>0$, con $f(1)=1>0$ e $f<0$ in un intorno destro del punto $x_0=0$ di raggio $\varepsilon$ arbitrariamente piccolo (si noti che $y=\log x$ non è definita per $x=0$).

    <em>Iterazione 1 $(n=0)$</em>

    \begin{align*}
    [a_0,b_0]=[0+\varepsilon,1] \\
    c_0=\frac{a_0+b_0}{2}=\frac{1+\varepsilon}{2}\simeq \frac{1}{2}
    \end{align*}

    con $f(c_0)=\frac{1}{2}-\log 2<0$. Allora, nella prossima iterazione, $a_1=c_0$.

    <em>Iterazione 2 $(n=1)$</em>

    $$
    [a_1,b_1]=\left[\frac{1}{2},1\right], \; f\left(\frac{1}{2}\right)<0, \; f(1)>0
    $$

    $$
    c_1=\frac{a_1+b_1}{2}=\frac{3}{4}
    $$

    con $f(c_1)>0$. Allora, nella prossima iterazione, $b_2=c_1$.

    <em>Iterazione 3 $(n=2)$</em>

    $$
    [a_2,b_2]=\left[\frac{1}{2},\frac{3}{4}\right], \; f\left(\frac{1}{2}\right)<0, \; f\left(\frac{3}{4}\right)>0
    $$

    $$
    c_2=\frac{a_2+b_2}{2}=\frac{5}{8}
    $$

    con $f(c_2)>0$. Allora, nella prossima iterazione, $b_3=c_2$.

??? soluzione "Soluzione"

    <em>Iterazione 4 $(n=3)$</em>

    $$
    [a_3,b_3]=\left[\frac{1}{2},\frac{5}{8}\right], \; f\left(\frac{1}{2}\right)<0, \; f\left(\frac{5}{8}\right)>0
    $$

    $$
    c_3=\frac{a_3+b_3}{2}=\frac{9}{16}
    $$

    con $f(c_3)<0$. Allora, nella prossima iterazione, $a_4=c_3$. Si osservi che

    $$
    a_3=0,5, \; b_3=0,625
    $$

    e siamo, dunque, ancora lontani dall'avere due cifre decimali esatte. Per raggiungere il livello di approssimazione desiderato, dovremo attendere fino all'iterazione 10 $(n=9)$, in cui si otterrà

    $$
    a_9=\frac{145}{256}\simeq0,\mathbf{56}6 \hspace{1cm} b_9=\frac{291}{512}\simeq 0,\mathbf{56}8
    $$

    Possiamo dichiarare che, in definitiva, $\alpha \in \left(\frac{145}{256},\frac{291}{512}\right)$ con due decimali esatti.

!!! esercizio "Esercizio 3"

    Utilizzando il metodo della bisezione, individuare le soluzioni dell'equazione

    $$
    2\sin x= x
    $$

    con un decimale esatto.

    <em>(Anzitutto occorre stabilire quante sono le soluzioni.)</em>

!!! esercizio "Esercizio 4"

    Utilizzando il metodo della bisezione, individuare le soluzioni dell'equazione

    $$
    x^2-2-\log x=0
    $$

    con un decimale esatto.

    <em>(Anzitutto occorre stabilire quante sono le soluzioni.)</em>
