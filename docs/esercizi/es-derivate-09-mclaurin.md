---
title: "Sviluppi di Mc Laurin"
---

# Sviluppi di Mc Laurin

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-derivate-09-mclaurin.pdf)

</div>

!!! esercizio "Esercizio 1"

    Attraverso lo sviluppo di Mc Laurin delle seguenti funzioni $f(x)$, determinare l'equazione della retta tangente al grafico nel punto $(0,f(0))$ e la posizione locale del grafico rispetto a tale tangente

    $$
    f(x)= 1+\sin(\sqrt{1+x^3}-1)
    $$

    $$
    f(x)=2\sqrt{1+\sinh x}-x
    $$

    $$
    f(x)=8\sqrt{1+\sin x}+x^2
    $$

    $$
    f(x)=8\sqrt{1+\log(1+ x)}+3x^2
    $$

    $$
    f(x)=8\sqrt{1-2x-x^2}-8+8x
    $$

??? soluzione "Soluzione"

    Da

    $$
    \sqrt{1+x^3}-1=\frac{1}{2}x^{3}+o(x^{3})
    $$

    e

    $$
    \sin y=y-\frac{1}{6}y^{3}+o(y^{3})
    $$

    si ha

    $$
    f(x)= 1+\sin(\sqrt{1+x^3}-1)=1+\frac{1}{2}x^{3}+o(x^{3}).
    $$

    L'equazione della retta tangente è

    $$
    y=1.
    $$

    Il termine $\ds\frac{1}{2}x^{3}+o(x^{3})$ dice che esiste un intorno $(-\delta,\delta)$, $\delta>0$, di $x=0$ dove il grafico attraversa la retta tangente da sotto per $-\delta<x<0$ a sopra per $0<x<\delta$. Il punto $x=0$ è di flesso con tangente orizzontale.

??? soluzione "Soluzione"

    Da

    $$
    \sinh x=x+o(x^{2})
    $$

    e

    $$
    2\sqrt{1+y}=2+y-\frac{1}{4}y^{2}+o(y^{2})
    $$

    si ha

    $$
    f(x)=2\sqrt{1+\sinh x}-x=2+x-\frac{1}{4}x^{2}+o(x^{2})-x=2-\frac{1}{4}x^{2}+o(x^{2}).
    $$

    L'equazione della retta tangente è

    $$
    y=2.
    $$

    Il termine $\ds-\frac{1}{4}x^{2}+o(x^{2})$ dice che esiste un intorno $(-\delta,\delta)$, $\delta>0$, di $x=0$ dove il grafico è al di sotto della retta tangente per $-\delta<x<\delta$, $x\neq0$. In particolare, visto che la retta tangente è orizzontale, il punto $x=0$ è di massimo locale.

??? soluzione "Soluzione"

    Da

    $$
    \sin x=x-\frac{1}{6}x^{3}+o(x^{3})
    $$

    e

    $$
    8\sqrt{1+y}=8+4y-y^{2}+\frac{1}{2}y^{3}+o(y^{3})
    $$

    si ha

    $$
    \begin{array}{l}
    \ds f(x)=8\sqrt{1+\sin x}+x^2=\\
    \\
    \ds8+4x-\frac{2}{3}x^{3}-\left(x-\frac{1}{6}x^{3}\right)^{2}
    +\frac{1}{2}\left(x-\frac{1}{6}x^{3}\right)^{3}+o(x^{3})+x^{2}=\\
    \\
    \ds8+4x-\frac{2}{3}x^{3}-x^{2}+\frac{1}{2}x^{3}+x^{2}+o(x^{3})=8+4x-\frac{1}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    L'equazione della retta tangente è

    $$
    y=8+4x.
    $$

    Il termine $\ds-\frac{1}{6}x^{3}+o(x^{3})$ dice che esiste un intorno $(-\delta,\delta)$, $\delta>0$, di $x=0$  dove il grafico attraversa la retta tangente da sopra per $-\delta<x<0$ a sotto per $0<x<\delta$ . Il punto $x=0$ è di flesso.

??? soluzione "Soluzione"

    Da

    $$
    \log(1+x)=x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+o(x^{3})
    $$

    e

    $$
    8\sqrt{1+y}=8+4y-y^{2}+\frac{1}{2}y^{3}+o(y^{3})
    $$

    si ha

    $$
    \begin{array}{l}
    \ds f(x)=8\sqrt{1+\log(1+ x)}+3x^2=\\
    \\
    \ds8+4\left(x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}\right)-\left(x-\frac{1}{2}x^{2}+
    \frac{1}{3}x^{3}\right)^{2}+\\
    \\
    \ds\frac{1}{2}\left(x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}\right)^{3}+o(x^{3})+3x^{2}=\\
    \\
    \ds8+4x-2x^{2}+\frac{4}{3}x^{3}-x^{2}+x^{3}+\frac{1}{2}x^{3}+3x^{2}+o(x^{3})=\\
    \\
    \ds8+4x+\frac{17}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    L'equazione della retta tangente è

    $$
    y=8+4x.
    $$

    Il termine $\ds\frac{17}{6}x^{3}+o(x^{3})$ dice che esiste un intorno $(-\delta,\delta)$, $\delta>0$, di $x=0$  dove il grafico attraversa la retta tangente da sotto per $-\delta<x<0$ a sopra per $0<x<\delta$. Il punto $x=0$ è di flesso.

!!! esercizio "Esercizio 2"

    Scrivere lo sviluppo di Maclaurin al 3° ordine della funzione

    $$
    f(x)=e^x-e^{-x^2}-\sin x
    $$

    e stabilirne l'ordine di infinitesimo. In base al solo sviluppo determinato, dire se la funzione presenta in $x=0$ un punto di minimo relativo, di massimo relativo, di flesso, o nessuna di queste cose. Giustificare la risposta.

??? soluzione "Soluzione"

    Dovendo sviluppare $f(x)$ al terzo ordine, potremo arrestarci al secondo ordine di sviluppo per $e^{-x^2}$. Cioè:

    $$
    e^x=1+x+\frac{1}{2}x^2+\frac{1}{6}x^3+o(x^3)
    $$

    $$
    e^{-x^2}=1-x^2+o(x^3)
    $$

    $$
    \sin x=x-\frac{1}{6}x^3+o(x^3)
    $$

    Si ha poi

    \begin{align*}
    f(x)&=1+x+\frac{1}{2}x^2+\frac{1}{6}x^3+o(x^3)-(1-x^2+o(x^3))-\left(x-\frac{1}{6}x^3+o(x^3)\right)\\
    &=\frac{3}{2}x^2+\frac{1}{3}x^3+o(x^3)
    \end{align*}

    In particolare, si ha

    $$
    f(x) \sim \frac{3}{2}x^2 \quad \text{per } x\to 0
    $$

    da cui possiamo subito dichiarare che l'ordine di infinitesimo di $f(x)$ è $\alpha=2$, la parte principale è $\frac{3}{2}x^2$. Il punto $x=0$ è un punto di minimo locale; infatti, il termine $\frac{3}{2}x^2+o(x^{2})$ dice che esiste un intorno $(-\delta,\delta)$, $\delta>0$, di $x=0$  dove il grafico è tutto sopra la retta tangente, orizzontale, $y=0$.

!!! esercizio "Esercizio 3"

    Determinare il polinomio di Taylor di ordine 3, centrato nel punto $x_0=\frac{\pi}{3}$, della funzione $f(x)=\cos x$.

??? soluzione "Soluzione"

    In generale, il polinomio di Taylor di ordine $n$, centrato in $x_0$, di una funzione $f(x)$ è

    $$
    T_{n,f,x_0}(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
    $$

    con $f^{(0)}(x_0)=f(x_0)$. In questo caso, avremo bisogno della derivata prima, seconda e terza, valutate in $x_0=\frac{\pi}{3}$. Si ha

    $$
    f'\left(\frac{\pi}{3}\right)=-\sin\left(\frac{\pi}{3}\right)=-\frac{\sqrt 3}{2}
    $$

    $$
    f''\left(\frac{\pi}{3}\right)=-\cos\left(\frac{\pi}{3}\right)=-\frac{1}{2}
    $$

    $$
    f'''\left(\frac{\pi}{3}\right)=\sin\left(\frac{\pi}{3}\right)=\frac{\sqrt 3}{2}
    $$

    e il polinomio di Taylor di ordine 3, centrato nel punto $x_0=\frac{\pi}{3}$, della funzione $f(x)=\cos x$ è

    $$
    T_{3,f,\frac{\pi}{3}}(x)=\frac{1}{2}-\frac{\sqrt 3}{2}\left(x-\frac{\pi}{3}\right)-\frac{1}{4}\left(x-\frac{\pi}{3}\right)^2+\frac{\sqrt 3}{12}\left(x-\frac{\pi}{3}\right)^3
    $$
