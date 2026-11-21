---
title: "Funzioni integrali e teorema fondamentale"
---

# Funzioni integrali e teorema fondamentale

<div class="info-capitolo" markdown>

**Esercizi · Parte 7 · Integrali** · con le soluzioni svolte · [:material-pencil-box-multiple: Esercizi, volume 7 (PDF)](../pdf/esercizi-7-integrali.pdf) · [:material-book-open-variant: Capitolo 2: Teorema fondamentale del calcolo integrale](../integrali/02-teorema-fondamentale.md)

</div>

!!! esercizio "Esercizio 1"

    Calcolare la derivata delle funzioni

    $$
    {\rm (a)}~~ F(x) = \int_0^{x^3} \cos(t^2)\,dt, ~~~~~~ {\rm (b)}~~ G(x) = \int_{\sin x}^{1} e^{t^2}\,dt, ~~~~~~ {\rm (c)}~~ H(x) = \int_x^{2x} \log(1+t^2)\,dt
    $$

??? soluzione "Soluzione"

    Le integrande sono continue in $\R$; si applica il Teorema di derivazione delle funzioni integrali, $\frac{d}{dx}\int_{\alpha(x)}^{\beta(x)} f(t)\,dt = f(\beta(x))\,\beta'(x) - f(\alpha(x))\,\alpha'(x)$.

    - (a) $\beta(x) = x^3$, $\alpha$ costante: $F'(x) = \cos(x^6)\cdot 3x^2$.

    - (b) $\beta$ costante, $\alpha(x) = \sin x$: $G'(x) = -e^{\sin^2 x}\cos x$.

    - (c) $\beta(x) = 2x$, $\alpha(x) = x$: $H'(x) = 2\log(1+4x^2) - \log(1+x^2)$.

!!! esercizio "Esercizio 2"

    Calcolare i limiti

    $$
    {\rm (a)}~~ \lim_{x \rr 0} \frac{1}{x^2}\int_0^{x} (e^{t} - 1)\,dt, ~~~~~~ {\rm (b)}~~ \lim_{x \rr 0^+} \frac{1}{x^3}\int_0^{x^2} \sin\sqrt{t}\,dt, ~~~~~~ {\rm (c)}~~ \lim_{x \rr \ip} \frac{1}{x}\int_0^{x} \arctan t\,dt
    $$

??? soluzione "Soluzione"

    In tutti i casi si ha una forma indeterminata e si usa il Teorema di De l'Hospital, derivando il numeratore con il teorema fondamentale del calcolo integrale.

    - (a) Forma $\frac00$: $\displaystyle \lim_{x \rr 0} \frac{e^{x} - 1}{2x} = \frac12$.

    - (b) Forma $\frac00$; la derivata del numeratore è $\sin\sqrt{x^2}\cdot 2x = 2x\sin x$ (per $x > 0$): $\displaystyle \lim_{x \rr 0^+} \frac{2x\sin x}{3x^2} = \frac23$.

    - (c) Il numeratore tende a $\ip$, perché $\arctan t \ge \frac{\pi}{4}$ per $t \ge 1$. Forma $\frac{\infty}{\infty}$: $\displaystyle \lim_{x \rr \ip} \frac{\arctan x}{1} = \frac{\pi}{2}$.

!!! esercizio "Esercizio 3"

    Calcolare, con la formula fondamentale del calcolo integrale,

    $$
    {\rm (a)}~~ \int_0^{\pi/4} \tan^2 x\,dx, ~~~~~~ {\rm (b)}~~ \int_1^{4} \frac{x - 1}{\sqrt{x}}\,dx, ~~~~~~ {\rm (c)}~~ \int_{-1}^{2} |x|\,dx
    $$

??? soluzione "Soluzione"

    - (a) $\tan^2 x = (1 + \tan^2 x) - 1$ ha primitiva $\tan x - x$: $\displaystyle \big[\tan x - x\big]_0^{\pi/4} = 1 - \frac{\pi}{4}$.

    - (b) $\frac{x-1}{\sqrt x} = x^{1/2} - x^{-1/2}$: $\displaystyle \left[\frac23\,x^{3/2} - 2x^{1/2}\right]_1^4 = \left(\frac{16}{3} - 4\right) - \left(\frac23 - 2\right) = \frac83$.

    - (c) Per l'additività: $\displaystyle \int_{-1}^{0} (-x)\,dx + \int_0^2 x\,dx = \left[-\frac{x^2}{2}\right]_{-1}^{0} + \left[\frac{x^2}{2}\right]_0^2 = \frac12 + 2 = \frac52$.

!!! esercizio "Esercizio 4"

    Data la funzione

    $$
    F(x) = \int_0^{x} (t^2 - 1)\,e^{-t^2}\,dt, ~~~ x \in \R
    $$

    - stabilire gli intervalli di monotonia e i punti di estremo locale di $F$;

    - stabilire il segno di $F(1)$ e di $F(-1)$;

    - dimostrare che $F$ è dispari.

??? soluzione "Soluzione"

    - L'integranda è continua, quindi $F'(x) = (x^2 - 1)\,e^{-x^2}$, che ha il segno di $x^2 - 1$: $F$ è crescente in $(\im, -1]$ e in $[1, \ip)$, decrescente in $[-1, 1]$. Il punto $x = -1$ è di massimo locale, $x = 1$ di minimo locale.

    - $F(0) = 0$ e $F$ è decrescente in $[-1,1]$: quindi $F(1) < 0 < F(-1)$.

    - La funzione $H(x) = F(x) + F(-x)$ ha derivata $H'(x) = F'(x) - F'(-x) = 0$, perché $F'$ è pari. Quindi $H$ è costante e $H(x) = H(0) = 0$: $F(-x) = -F(x)$.

!!! esercizio "Esercizio 5"

    Sia $G(x) = \displaystyle\int_2^{x} \frac{dt}{\log t}$ per $x > 1$. Stabilire il segno di $G$, la monotonia e la concavità di $G$, e scrivere l'equazione della retta tangente al grafico nel punto di ascissa $x = e$, sapendo che $G(e) = \gamma$ (non si chiede di calcolare $\gamma$).

??? soluzione "Soluzione"

    L'integranda $\frac{1}{\log t}$ è continua in $(1, \ip)$, che è un intervallo contenente $2$. Per il teorema fondamentale del calcolo integrale

    $$
    G'(x) = \frac{1}{\log x} > 0, ~~~~~~ G''(x) = -\frac{1}{x\log^2 x} < 0, ~~~ \forall x > 1
    $$

    Quindi $G$ è crescente e concava in $(1, \ip)$. Poiché $G(2) = 0$ e $G$ è crescente, $G(x) < 0$ per $1 < x < 2$ e $G(x) > 0$ per $x > 2$ (in particolare $\gamma > 0$). La tangente in $x = e$ ha pendenza $G'(e) = 1$:

    $$
    y = \gamma + (x - e)
    $$

!!! esercizio "Esercizio 6"

    - Trovare una funzione continua $f$ tale che $\int_0^{x} f(t)\,dt = x^2 + \sin x$ per ogni $x \in \R$.

    - Esiste una funzione continua $f$ tale che $\int_0^{x} f(t)\,dt = x^2 + 1$ per ogni $x \in \R$?

??? soluzione "Soluzione"

    - Se $f$ è continua, per la prima parte del teorema fondamentale il primo membro è derivabile con derivata $f(x)$. Derivando: $f(x) = 2x + \cos x$. Verifica con la seconda parte: $\int_0^x (2t + \cos t)\,dt = \big[t^2 + \sin t\big]_0^x = x^2 + \sin x$.

    - No: per $x = 0$ il primo membro vale $\int_0^0 f = 0$, il secondo $1$. Derivare non basta: $2x$ ha come funzione integrale $x^2$, non $x^2 + 1$.

!!! esercizio "Esercizio 7"

    Sia $F(x) = \displaystyle\int_0^{x} e^{\sin t}\,dt$. Scrivere l'equazione della retta tangente al grafico di $F$ nel punto di ascissa $0$ e stabilire se $F$ è invertibile in $\R$.

??? soluzione "Soluzione"

    $F(0) = 0$ e $F'(x) = e^{\sin x}$, quindi $F'(0) = 1$: la tangente è $y = x$.

    Poiché $F'(x) = e^{\sin x} > 0$ per ogni $x$, $F$ è crescente in $\R$, quindi iniettiva e invertibile sulla sua immagine. Inoltre $F'(x) \ge e^{-1}$: per $x > 0$ si ha $F(x) \ge \frac{x}{e} \rr \ip$, e per simmetria del ragionamento $F(x) \le \frac{x}{e} \rr \im$ per $x \rr \im$. Essendo continua, $F$ è una biiezione di $\R$ su $\R$.
