---
title: "Equazioni parametriche"
---

# Equazioni parametriche

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-derivate-07-equazioni-parametriche.pdf)

</div>

!!! esercizio "Esercizio 1"

    Determinare il numero delle soluzioni della equazione $f(x)=k$ al variare del parametro reale $k$ nei casi seguenti:

    $$
    f(x)=\frac{2x^{2}-1}{x}
    $$

    $$
    f(x)=x^{2}e^{-x^{2}}
    $$

    $$
    f(x)=\frac{e^{x}-1}{\log(e^{x}-1)}
    $$

    $$
    f(x)=\log^{2}x+2\log x
    $$

    $$
    f(x)=e-x\log^{2}x
    $$

    $$
    f(x)=\frac{x}{x+1}-\arctan x
    $$

??? soluzione "Soluzione"

    Tutte le funzioni sono derivabili (infinite volte) nei loro dominii. Per rispondere, è sufficiente determinare i limiti agli estremi del dominio, l'andamento di monotonia e gli eventuali estremanti.

??? soluzione "Soluzione"

    La funzione $f(x)=\frac{2x^{2}-1}{x}=2x-\frac{1}{x}$ è definita per $x\neq0$, è dispari, con

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty,\ \ \lim_{x\to0^{\pm}}f(x)=\mp\infty
    $$

    (il grafico è una iperbole di asintoti $x=0$, $y=2x$).

    Si ha poi

    $$
    f'(x)=2+\frac{1}{x^{2}},
    $$

    positiva per ogni $x\neq0$. La funzione è strettamente crescente sia su $(-\infty,0)$ che su $(0,+\infty)$ ed in entrambi gli intervalli assume tutti i valori reali tra i limiti $-\infty$ e $+\infty$.

    Concludendo, per ogni valore di $k\in\R$ l'equazione $f(x)=k$ ha due soluzioni: una positiva, l'altra negativa. In particolare l'equazione $f(x)=0$ ha le due soluzioni $x=\pm\sqrt{1/2}$.

??? soluzione "Soluzione"

    La funzione $f(x)=x^{2}e^{-x^{2}}$  è definita per $x\in\R$, è pari, con

    $$
    \lim_{x\to\pm\infty}f(x)=0.
    $$

    La funzione assume solo valori non negativi, il punto $x=0$, dove $f(0)=0$, è (l'unico) punto di minimo assoluto.

    Si ha poi

    $$
    f'(x)=2x(1-x^{2})e^{-x^{2}},
    $$

    da cui, per $x>0$, si ha $f$ strettamente crescente in $(0,1)$, strettamente decrescente in $(1,+\infty)$. Il punto $x=1$ è di massimo assoluto con valore $f(1)=1/e$. Per simmetria pari si ottiene il comportamento per $x<0$.

    Concludendo, per ogni valore $k<0$ oppure $k>1/e$, l'equazione $f(x)=k$ non ha soluzioni: l'insieme dei valori di $f$ è l'intervallo $[0,1/e]$.

    Per $k=0$, l'equazione $f(x)=0$ ha per unica soluzione $x=0$.

    Per $0<k<1/e$, l'equazione $f(x)=k$ ha quattro soluzioni, una nell'intervallo $(0,1)$, una nell'intervallo $(1,+\infty)$, le altre due opposte a queste per simmetria pari.

    Per $k=1/e$, l'equazione $f(x)=1/e$ ha le due soluzioni $x=\pm1$.

??? soluzione "Soluzione"

    La funzione $f(x)=\frac{e^{x}-1}{\log(e^{x}-1)}$ è definita per $e^{x}-1>0$, $e^{x}-1\neq1$, quindi per

    $$
    x\in(0,\log2)\cup(\log2,+\infty).
    $$

    Abbiamo

    $$
    \begin{array}{l}\ds\lim_{x\to0}f(x)=\lim_{y\to0}\frac{y}{\log y}=0,\ \lim_{x\to\log2^{\pm}}f(x)=\lim_{y\to1^{\pm}}\frac{y}{\log y}=\pm\infty,\\
     \\
     \ds\lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}\frac{y}{\log y}=+\infty.\end{array}
    $$

    Si ha poi

    $$
    f'(x)=\frac{e^{x}\left[\log(e^{x}-1)-1\right]}{\log^{2}(e^{x}-1)},
    $$

    da cui si ha $f$ strettamente decrescente in $(0,\log2)$, dove assume tutti valori tra i limiti $-\infty$ e $0$; strettamente decrescente in $(\log2,\log(e+1))$, dove assume tutti i valori $k>e$; il punto $x=\log(e+1)$ è di minimo relativo con valore $f(\log(1+e))=e$; $f$ è di nuovo strettamente crescente nell'intervallo $(\log(1+e),+\infty)$ dove assume ancora tutti i valori $k>e$.

    Concludendo, per ogni valore $k<0$ l'equazione $f(x)=k$ ha una soluzione che si trova nell'intervallo $(0,\log2)$.

    Per $0\leq k<e$, l'equazione $f(x)=k$ non ha soluzioni.

    Per $k=e$, l'equazione $f(x)=e$ ha l'unica soluzione $x=\log(e+1)$.

    Per $k>e$, l'equazione $f(x)=k$ ha due soluzioni, una in $(\log2,\log(1+e))$, l'altra in $(\log(e+1),+\infty)$.

??? soluzione "Soluzione"

    La funzione $f(x)=\log^{2}x+2\log x$ è definita per $x>0$. Abbiamo

    $$
    \lim_{x\to0}f(x)=\lim_{y\to-\infty}y^{2}+2y=+\infty,\ \lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}y^{2}+2y=+\infty.
    $$

    Si ha poi

    $$
    f'(x)=\frac{2(\log x+1)}{x},
    $$

    da cui si ha $f$ strettamente decrescente in $(0,1/e)$, dove assume tutti $k>-1$; il punto $x=1/e$ è di minimo assoluto con valore $f(1/e)=-1$; $f$ è strettamente crescente nell'intervallo $(1/e,+\infty)$ dove assume ancora tutti i valori $k>-1$.

    Concludendo, per ogni valore $k<-1$ l'equazione $f(x)=k$ non ha soluzioni.

    Per $k=-1$, l'equazione $f(x)=-1$ ha l'unica soluzione $x=1/e$.

    Per $k>-1$, l'equazione $f(x)=k$ ha due soluzioni, una in $(0,1/e)$, l'altra in $(1/e,+\infty)$. In particolare, l'equazione $f(x)=0$ ha le due soluzioni $x=1/e^{2}$, $x=1$.

??? soluzione "Soluzione"

    La funzione $f(x)=e-x\log^{2}x$ è definita per $x>0$. Abbiamo

    $$
    \lim_{x\to0}f(x)=e,\ \lim_{x\to+\infty}f(x)=-\infty.
    $$

    Si ha poi

    $$
    f'(x)=-\log x(\log x+2),
    $$

    da cui si ha $f$ strettamente decrescente in $(0,1/e^{2})$, dove assume tutti i valori $k\in \left(e-\frac{4}{e^{2}}, e\right)$; il punto $x=1/e^{2}$ è di minimo relativo con valore $f(1/e^{2})=e-\frac{4}{e^{2}}$; $f$ è strettamente crescente nell'intervallo $(1/e^{2},1)$ dove assume ancora tutti i valori $k\in \left(e-\frac{4}{e^{2}}, e\right)$; il punto $x=1$ è di massimo assoluto con valore $f(1)=e$; $f$ è di nuovo strettamente decrescente in $(1,+\infty)$, dove assume tutti i valori $k\in(-\infty,e)$.

    Concludendo, per ogni valore $k<e-\frac{4}{e^{2}}$ l'equazione $f(x)=k$ ha una sola soluzione che si trova nell'intervallo $(1,+\infty)$. In particolare l'equazione $f(x)=0$ ha l'unica soluzione $x=e$.

    Per $k=e-\frac{4}{e^{2}}$, l'equazione $f(x)=e-\frac{4}{e^{2}}$ ha due soluzioni, una è $x=1/e^{2}$, l'altra si trova nell'intervallo $(1,e)$.

    Per $e-\frac{4}{e^{2}}<k<e$, l'equazione $f(x)=k$ ha tre soluzioni, una in $(0,1/e^{2})$, una in $(1/e^{2},1)$, una in $(1,e)$.

    Per $k=e$, l'equazione $f(x)=e$ ha l'unica soluzione $x=1$.

    Per $k>e$, l'equazione $f(x)=k$ non ha soluzioni.

??? soluzione "Soluzione"

    La funzione $f(x)=\frac{x}{x+1}-\arctan x$ è definita per $x\neq-1$. Abbiamo

    $$
    \lim_{x\to-\infty}f(x)=1+\frac{\pi}{2},\ \lim_{x\to-1^{\pm}}f(x)=\mp\infty,\ \lim_{x\to+\infty}f(x)=1-\frac{\pi}{2}.
    $$

    Si ha poi

    $$
    f'(x)=-\frac{2x}{(x+1)^{2}(x^{2}+1)}
    $$

    da cui si ha $f$ strettamente crescente in $(-\infty,-1)$, dove assume tutti i valori $k\in \left(1+\frac{\pi}{2}, +\infty\right)$; $f$ è strettamente crescente anche nell'intervallo $(-1,0)$ dove assume tutti i valori $k\in(-\infty, 0)$; il punto $x=0$ è di massimo relativo con valore $f(0)=0$; $f$ è strettamente decrescente in $(0,+\infty)$, dove assume tutti i valori $k\in\left(1-\frac{\pi}{2},0\right)$.

    Concludendo, per ogni valore $k\leq1-\frac{\pi}{2}$ l'equazione $f(x)=k$ ha una sola soluzione che si trova nell'intervallo $(-1,0)$.

    Per $1-\frac{\pi}{2}<k<0$, l'equazione $f(x)=k$ ha due soluzioni, una è in $(-1,0)$, l'altra si trova nell'intervallo $(0,+\infty)$.

    Per $k=0$, l'equazione $f(x)=0$ ha l'unica soluzione $x=0$.

    Per $0<k\leq1+\frac{\pi}{2}$, l'equazione $f(x)=k$ non ha soluzioni.

    Per $k>1+\frac{\pi}{2}$, l'equazione $f(x)=k$ ha una unica soluzione che si trova nell'intervallo $(-\infty,-1)$.
