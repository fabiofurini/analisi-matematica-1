---
title: "Integrali impropri"
---

# Integrali impropri

<div class="info-capitolo" markdown>

**Esercizi · Parte 7 · Integrali** · con le soluzioni svolte · [:material-pencil-box-multiple: Esercizi, volume 7 (PDF)](../pdf/esercizi-7-integrali.pdf) · [:material-book-open-variant: Capitolo 4: Integrali impropri](../integrali/04-integrali-impropri.md)

</div>

!!! esercizio "Esercizio 1"

    Calcolare, mediante la definizione, gli integrali impropri

    $$
    {\rm (a)}~~ \int_1^{\ip} \frac{dx}{x(x+1)}, ~~~~~~ {\rm (b)}~~ \int_0^{\ip} x\,e^{-x}\,dx, ~~~~~~ {\rm (c)}~~ \int_0^{1} \frac{dx}{\sqrt{1-x^2}}
    $$

??? soluzione "Soluzione"

    - (a) $\frac{1}{x(x+1)} = \frac1x - \frac{1}{x+1}$, quindi

        $$
        \int_1^{\omega} \frac{dx}{x(x+1)} = \left[\log\frac{x}{x+1}\right]_1^{\omega} = \log\frac{\omega}{\omega+1} + \log 2 \rr \log 2 {\rm ~~~per~~~} \omega \rr \ip
        $$

    - (b) Per parti, $\int x\,e^{-x}\,dx = -(x+1)\,e^{-x} + c$; quindi $\int_0^{\omega} x\,e^{-x}\,dx = 1 - (\omega + 1)\,e^{-\omega} \rr 1$, per la gerarchia degli infiniti.

    - (c) L'integranda è illimitata vicino a $1$:

        $$
        \int_0^{1} \frac{dx}{\sqrt{1-x^2}} = \lim_{\varepsilon \rr 0^+} \big[\arcsin x\big]_0^{1-\varepsilon} = \arcsin 1 = \frac{\pi}{2}
        $$

!!! esercizio "Esercizio 2"

    - Calcolare per parti l'integrale indefinito $\displaystyle \int \frac{\log(x+2)}{(x+1)^2}\,dx$.

    - Calcolare quindi $\displaystyle \int_0^{\ip} \frac{\log(x+2)}{(x+1)^2}\,dx$.

??? soluzione "Soluzione"

    Con $f = \log(x+2)$ e $g' = \frac{1}{(x+1)^2}$, $g = -\frac{1}{x+1}$:

    $$
    \int \frac{\log(x+2)}{(x+1)^2}\,dx = -\frac{\log(x+2)}{x+1} + \int \frac{dx}{(x+1)(x+2)}
    $$

    e, con i fratti semplici $\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2}$,

    $$
    \int \frac{\log(x+2)}{(x+1)^2}\,dx = -\frac{\log(x+2)}{x+1} + \log\frac{x+1}{x+2} + c
    $$

    Per $\omega \rr \ip$ si ha $\frac{\log(\omega+2)}{\omega+1} \rr 0$ e $\log\frac{\omega+1}{\omega+2} \rr 0$; in $x = 0$ la primitiva vale $-\log 2 + \log\frac12 = -2\log 2$. Quindi

    $$
    \int_0^{\ip} \frac{\log(x+2)}{(x+1)^2}\,dx = 0 - (-2\log 2) = 2\log 2
    $$

!!! esercizio "Esercizio 3"

    Stabilire il carattere degli integrali impropri

    $$
    {\rm (a)}~~ \int_1^{\ip} \frac{\sqrt{x} + 1}{x^2 + 1}\,dx, ~~~~~ {\rm (b)}~~ \int_0^{1} \frac{dx}{x + \sqrt{x}}, ~~~~~ {\rm (c)}~~ \int_0^{\pi/2} \frac{dx}{\sin x}, ~~~~~ {\rm (d)}~~ \int_1^{\ip} \frac{\log x}{x^2}\,dx
    $$

??? soluzione "Soluzione"

    Le integrande sono continue e positive negli intervalli considerati (in (d) positiva per $x > 1$).

    - (a) Per $x \rr \ip$: $\frac{\sqrt x + 1}{x^2 + 1} \sim \frac{1}{x^{3/2}}$; poiché $\frac32 > 1$, converge.

    - (b) Per $x \rr 0^+$: $x + \sqrt x \sim \sqrt x$, quindi l'integranda è asintotica a $\frac{1}{x^{1/2}}$; poiché $\frac12 < 1$, converge.

    - (c) Per $x \rr 0^+$: $\sin x \sim x$, quindi $\frac{1}{\sin x} \sim \frac1x$: diverge.

    - (d) Definitivamente $\log x \le \sqrt x$ (gerarchia degli infiniti), quindi $0 \le \frac{\log x}{x^2} \le \frac{1}{x^{3/2}}$: per confronto converge. (Per parti si trova anche il valore: $1$.)

!!! esercizio "Esercizio 4"

    Stabilire per quali valori del parametro $\alpha \in \R$ convergono

    $$
    {\rm (a)}~~ \int_0^{\ip} \frac{dx}{x^{\alpha}\,(1+x)}, ~~~~~~ {\rm (b)}~~ \int_0^{1} \frac{1 - \cos x}{x^{\alpha}}\,dx
    $$

??? soluzione "Soluzione"

    - (a) Spezziamo in $x = 1$. Per $x \rr 0^+$ l'integranda è asintotica a $\frac{1}{x^{\alpha}}$: converge se e solo se $\alpha < 1$. Per $x \rr \ip$ è asintotica a $\frac{1}{x^{\alpha+1}}$: converge se e solo se $\alpha + 1 > 1$, cioè $\alpha > 0$. L'integrale converge se e solo se $0 < \alpha < 1$.

    - (b) L'integranda è continua e non negativa in $(0,1]$. Per $x \rr 0^+$, $1 - \cos x \sim \frac{x^2}{2}$, quindi $\frac{1 - \cos x}{x^{\alpha}} \sim \frac12\cdot\frac{1}{x^{\alpha - 2}}$: converge se e solo se $\alpha - 2 < 1$, cioè $\alpha < 3$. (Per $\alpha \le 2$ l'integranda è limitata e l'integrale è un integrale di Riemann.)

!!! esercizio "Esercizio 5"

    Calcolare

    $$
    {\rm (a)}~~ \int_e^{\ip} \frac{dx}{x\log^3 x}, ~~~~~~ {\rm (b)}~~ \int_0^{\ip} e^{-\sqrt{x}}\,dx
    $$

??? soluzione "Soluzione"

    - (a) Con $t = \log x$, $dt = \frac{dx}{x}$, una primitiva è $-\frac{1}{2\log^2 x}$:

        $$
        \int_e^{\omega} \frac{dx}{x\log^3 x} = \frac12 - \frac{1}{2\log^2\omega} \rr \frac12
        $$

    - (b) Con $x = t^2$, $t \ge 0$, $dx = 2t\,dt$: $\displaystyle \int_0^{\omega} e^{-\sqrt x}\,dx = \int_0^{\sqrt\omega} 2t\,e^{-t}\,dt = 2\big[-(t+1)\,e^{-t}\big]_0^{\sqrt\omega} \rr 2$.

!!! esercizio "Esercizio 6"

    Dimostrare che $\displaystyle \int_1^{\ip} \frac{\cos x}{x^{3/2}}\,dx$ converge. I criteri del confronto si possono applicare direttamente all'integranda?

??? soluzione "Soluzione"

    L'integranda cambia segno infinite volte, quindi i criteri del confronto (che richiedono funzioni non negative) non si applicano direttamente. Però

    $$
    \left|\frac{\cos x}{x^{3/2}}\right| \le \frac{1}{x^{3/2}}
    $$

    e $\int_1^{\ip} \frac{dx}{x^{3/2}}$ converge ($\frac32 > 1$). Per confronto converge $\int_1^{\ip} \left|\frac{\cos x}{x^{3/2}}\right| dx$ e, per il Teorema della convergenza assoluta, converge l'integrale dato.

!!! esercizio "Esercizio 7"

    Usando il criterio integrale, stabilire per quali $p > 0$ converge la serie

    $$
    \sum_{k=2}^{\infty} \frac{1}{k\,(\log k)^p}
    $$

??? soluzione "Soluzione"

    La funzione $f(x) = \frac{1}{x(\log x)^p}$ è continua, positiva e decrescente in $[2, \ip)$ (denominatore crescente e positivo). Per il Teorema del criterio integrale (a partire da $k_0 = 2$) la serie ha lo stesso carattere di $\int_2^{\ip} f(x)\,dx$. Con $t = \log x$:

    $$
    \int_2^{\omega} \frac{dx}{x(\log x)^p} = \int_{\log 2}^{\log\omega} \frac{dt}{t^p}
    $$

    Poiché $\log 2 > 0$, l'integrale su $[\log 2, 1]$ è finito; su $[1, \ip)$, per il Teorema dell'integrale improprio notevole all'infinito, converge se e solo se $p > 1$. La serie converge se e solo se $p > 1$.
