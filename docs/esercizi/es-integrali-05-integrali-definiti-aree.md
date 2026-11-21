---
title: "Integrali definiti, aree e valor medio"
---

# Integrali definiti, aree e valor medio

<div class="info-capitolo" markdown>

**Esercizi · Parte 7 · Integrali** · con le soluzioni svolte · [:material-pencil-box-multiple: Esercizi, volume 7 (PDF)](../pdf/esercizi-7-integrali.pdf) · [:material-book-open-variant: Capitolo 3: Tecniche di integrazione e applicazioni](../integrali/03-tecniche-integrazione.md)

</div>

!!! esercizio "Esercizio 1"

    Calcolare per parti

    $$
    {\rm (a)}~~ \int_0^{1} x\,e^{2x}\,dx, ~~~~~~ {\rm (b)}~~ \int_1^{e} x^2\log x\,dx
    $$

??? soluzione "Soluzione"

    - (a) Con $f = x$, $g' = e^{2x}$, $g = \frac{e^{2x}}{2}$:

        $$
        \int_0^1 x\,e^{2x}\,dx = \left[\frac{x\,e^{2x}}{2}\right]_0^1 - \frac12\int_0^1 e^{2x}\,dx = \frac{e^2}{2} - \left[\frac{e^{2x}}{4}\right]_0^1 = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}
        $$

    - (b) Con $f = \log x$, $g' = x^2$, $g = \frac{x^3}{3}$:

        $$
        \int_1^{e} x^2\log x\,dx = \left[\frac{x^3}{3}\log x\right]_1^{e} - \int_1^{e} \frac{x^2}{3}\,dx = \frac{e^3}{3} - \frac{e^3 - 1}{9} = \frac{2e^3 + 1}{9}
        $$

!!! esercizio "Esercizio 2"

    Calcolare per sostituzione

    $$
    {\rm (a)}~~ \int_0^{3} x\sqrt{x+1}\,dx, ~~~~~~ {\rm (b)}~~ \int_0^{\log 3} \frac{e^{x}}{(e^{x}+1)^2}\,dx, ~~~~~~ {\rm (c)}~~ \int_0^{\pi/2} \sin^3 x\,dx
    $$

??? soluzione "Soluzione"

    - (a) Con $t = x + 1$, $x = t - 1$, $dx = dt$, estremi $1$ e $4$:

        $$
        \int_1^4 (t - 1)\sqrt{t}\,dt = \left[\frac25\,t^{5/2} - \frac23\,t^{3/2}\right]_1^4 = \left(\frac{64}{5} - \frac{16}{3}\right) - \left(\frac25 - \frac23\right) = \frac{116}{15}
        $$

    - (b) Con $t = e^{x}$, $dt = e^{x}\,dx$, estremi $1$ e $3$:

        $$
        \int_1^3 \frac{dt}{(t+1)^2} = \left[-\frac{1}{t+1}\right]_1^3 = -\frac14 + \frac12 = \frac14
        $$

    - (c) $\sin^3 x = (1 - \cos^2 x)\sin x$; con $t = \cos x$, $dt = -\sin x\,dx$, estremi $1$ e $0$:

        $$
        \int_0^{\pi/2} \sin^3 x\,dx = \int_0^1 (1 - t^2)\,dt = 1 - \frac13 = \frac23
        $$

!!! esercizio "Esercizio 3"

    Calcolare

    $$
    \int_0^{1} \frac{x}{x^2 + 3x + 2}\,dx
    $$

??? soluzione "Soluzione"

    Il denominatore ha radici $-1$ e $-2$: $x^2 + 3x + 2 = (x+1)(x+2)$. Da $\frac{x}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$ segue $x = A(x+2) + B(x+1)$; con $x = -1$: $A = -1$; con $x = -2$: $B = 2$. Quindi

    $$
    \int_0^1 \left( -\frac{1}{x+1} + \frac{2}{x+2} \right) dx = \big[-\log(x+1) + 2\log(x+2)\big]_0^1 = -\log 2 + 2\log 3 - 2\log 2 = \log\frac98
    $$

!!! esercizio "Esercizio 4"

    Calcolare l'area della regione limitata compresa fra i grafici di $y = x^3$ e $y = x$.

??? soluzione "Soluzione"

    Le intersezioni risolvono $x^3 = x$: $x \in \{-1, 0, 1\}$. In $[-1, 0]$ si ha $x^3 \ge x$, in $[0, 1]$ si ha $x \ge x^3$. Quindi

    $$
    {\rm Area} = \int_{-1}^{0} (x^3 - x)\,dx + \int_0^1 (x - x^3)\,dx = \frac14 + \frac14 = \frac12
    $$

    (le due parti sono uguali perché entrambe le funzioni sono dispari).

!!! esercizio "Esercizio 5"

    Determinare la misura dell'insieme

    $$
    A = \left\{ (x,y) \in \R^2 : 0 \le x \le 2, ~ 0 \le y \le x\,e^{-x} \right\}
    $$

??? soluzione "Soluzione"

    $x\,e^{-x} \ge 0$ in $[0,2]$, quindi la misura è $\int_0^2 x\,e^{-x}\,dx$. Per parti, con $f = x$, $g' = e^{-x}$:

    $$
    \int x\,e^{-x}\,dx = -x\,e^{-x} + \int e^{-x}\,dx = -(x+1)\,e^{-x} + c
    $$

    $$
    \int_0^2 x\,e^{-x}\,dx = \big[-(x+1)\,e^{-x}\big]_0^2 = 1 - \frac{3}{e^2}
    $$

!!! esercizio "Esercizio 6"

    Calcolare l'area della regione compresa fra il grafico di $y = \log x$, l'asse $x$ e le rette $x = \frac1e$ e $x = e$.

??? soluzione "Soluzione"

    Il logaritmo è negativo in $\left[\frac1e, 1\right)$ e positivo in $(1, e]$: l'area è $\int_{1/e}^{e} |\log x|\,dx$. Con la primitiva $x\log x - x$:

    $$
    \int_{1/e}^{1} (-\log x)\,dx = \big[x - x\log x\big]_{1/e}^{1} = 1 - \frac{2}{e}, ~~~~~~ \int_1^{e} \log x\,dx = \big[x\log x - x\big]_1^{e} = 1
    $$

    L'area è $2 - \frac{2}{e}$.

!!! esercizio "Esercizio 7"

    Calcolare il valor medio di $f(x) = \frac{1}{1+x^2}$ in $[-1, 1]$ e i punti $c \in [-1,1]$ in cui $f(c)$ è uguale al valor medio.

??? soluzione "Soluzione"

    $$
    \frac{1}{2}\int_{-1}^{1} \frac{dx}{1+x^2} = \frac12\big[\arctan x\big]_{-1}^{1} = \frac12\cdot\frac{\pi}{2} = \frac{\pi}{4}
    $$

    Da $\frac{1}{1+c^2} = \frac{\pi}{4}$ segue $c^2 = \frac{4}{\pi} - 1$, cioè $c = \pm\sqrt{\frac4\pi - 1} \approx \pm 0{,}52$, entrambi in $[-1,1]$.
