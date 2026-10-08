---
title: "Limiti con sviluppi asintotici"
---

# Limiti con sviluppi asintotici

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-4-derivate.pdf)

</div>

!!! esercizio "Esercizio 1"

    Calcolare i seguenti limiti:

    $$
    \lim_{x\to0}\frac{6(x-\sin x)-x^{3}}{\sin x^{5}}
    $$

    $$
    \lim_{x\to0}\frac{\sinh^{2}x+2(1-\cosh x)}{(1-\cos x)^{2}}
    $$

    $$
    \lim_{x\to0}\frac{4(1-\cos x)^{2}-x^{2}\sin^{2}x}{\sin^{2}x\log(1+x^{4})}
    $$

    $$
    \lim_{x\to0}\frac{1+x\sin x -e^{x^2}}{x\sin(x^3)}
    $$

    $$
    \lim_{x\to0}\frac{x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}}{x^{2}-\arctan x^{2}}
    $$

    $$
    \lim_{x\to0}\frac{x\sinh x-2\cosh x +2}{(e^{\sin x}-1)^{2}}
    $$

    $$
    \lim_{x\to0}\frac{8\sqrt{1+\sin x}-8-4x+x^{2}}{(2e^{x}-2-2x-x^{2})\cosh^{2}x}
    $$

    $$
    \lim_{x\to0}\frac{2\log(1+\sin x)-2x+x^{2}}{(2e^{x}-2-2x-x^{2})\cos^{2}x}
    $$

    $$
    \lim_{x\to+\infty}x\left(\sqrt{4+\frac{5}{x}}-2\cos \frac{1}{x}\right)
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    6(x-\sin x)-x^{3}=6\left(\frac{x^{3}}{6}-\frac{x^{5}}{120}+o(x^{5})\right)-x^{3}=-\frac{x^{5}}{20}+o(x^{5}).
    $$

    Il denominatore equivale ad $x^{5}$:

    $$
    \sin x^{5}\sim x^{5}.
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to0}\frac{6(x-\sin x)-x^{3}}{\sin x^{5}}=\lim_{x\to0}\frac{-\frac{x^{5}}{20}}{ x^{5}}=-\frac{1}{20}
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    \sinh^{2}x+2(1-\cosh x)=\left(x+\frac{x^{3}}{6}+o(x^{3})\right)^{2}-x^{2}-\frac{x^{4}}{12}+o(x^{4})=\frac{x^{4}}{4}+o(x^{4}).
    $$

    Il denominatore equivale ad $x^{4}/4$:

    $$
    (1-\cos x)^{2}\sim\frac{x^{4}}{4}.
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to0}\frac{\sinh^{2}x+2(1-\cosh x)}{(1-\cos x)^{2}}=\lim_{x\to0}\frac{\frac{x^{4}}{4}}{\frac{x^{4}}{4}}=1.
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    \begin{array}{l}
    \ds4(1-\cos x)^{2}-x^{2}\sin^{2}x=4\left(\frac{x^{2}}{2}-\frac{x^{4}}{24}+o(x^{4})\right)^{2}-x^{2}\left(x-\frac{x^{3}}{6}+o(x^{3})\right)^{2}\\
    \\
    \ds=\frac{x^{6}}{6}+o(x^{6}).
    \end{array}
    $$

    Il denominatore equivale ad $x^{6}$:

    $$
    \sin^{2}x\log(1+x^{4})\sim x^{2}\cdot x^{4}=x^{6}.
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to0}\frac{4(1-\cos x)^{2}-x^{2}\sin^{2}x}{\sin^{2}x\log(1+x^{4})}=\lim_{x\to0}\frac{\frac{x^{6}}{6}}{x^{6}}=\frac{1}{6}.
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    \begin{array}{l}
    \ds1+x\sin x -e^{x^2}=1+x\left(x-\frac{x^{3}}{6}+o(x^{3})\right)-\left(1+x^2+\frac{x^4}{2}+o(x^4)\right)\\
    \\
    \ds=-\frac{2}{3}x^4+o(x^{4}).
    \end{array}
    $$

    Il denominatore equivale ad $x^{4}$:

    $$
    x\sin(x^3)\sim x\cdot x^{3}=x^{4}.
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to0}\frac{1+x\sin x -e^{x^2}}{x\sin(x^3)}=\lim_{x\to0}\frac{-\frac{2}{3}x^4}{x^{4}}=-\frac{2}{3}.
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    \begin{array}{l}
    \ds x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}\\
    \\
    \ds=x^{2}\left(1-\frac{x^{2}}{2}+\frac{x^{4}}{24}+o(x^{4})\right)-
    \left(x^{2}+\frac{x^{6}}{6}+o(x^{6})\right)+\frac{1}{2}x^{4}=-\frac{x^{6}}{8}+o(x^{6}).
    \end{array}
    $$

    Per il denominatore, dallo sviluppo $\arctan x=x-\frac{x^{3}}{3}+o(x^{3})$, segue

    $$
    x^{2}-\arctan x^{2}=\frac{x^{6}}{3}+o(x^{6}).
    $$

    Il limite dato vale quindi:

    $$
    \lim_{x\to0}\frac{x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}}{x^{2}-\arctan x^{2}}=
    \lim_{x\to0}\frac{-\frac{x^{6}}{8}}{\frac{x^{6}}{3}}=-\frac{3}{8}.
    $$

??? soluzione "Soluzione"

    Determiniamo la parte principale nello sviluppo di Mc Laurin del numeratore:

    $$
    \begin{array}{l}
    \ds x\sinh x-2\cosh x +2\\
    \\
    \ds=x\left(x+\frac{x^{3}}{6}+o(x^{3})\right)-2\left(1+\frac{x^{2}}{2}+
    \frac{x^{4}}{24}+o(x^{4})\right)+2=\frac{x^{4}}{12}+o(x^{4}).
    \end{array}
    $$

    Il denominatore equivale ad $x^{2}$:

    $$
    (e^{\sin x}-1)^{2}\sim (\sin x)^{2}\sim x^{2}.
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to0}\frac{x\sinh x-2\cosh x +2}{(e^{\sin x}-1)^{2}}=\lim_{x\to0}\frac{\frac{x^{4}}{12}}{x^{2}}
    =\lim_{x\to0}\frac{x^{2}}{12}=0.
    $$

??? soluzione "Soluzione"

    Sviluppiamo all'ordine $3$ la funzione composta $8\sqrt{1+\sin x}$ con punto iniziale $x=0$. Da $\sin x\sim x-x^{3}/6$ e $8\sqrt{1+y}\sim 8+4y-y^{2}+y^{3}/2$, componendo, abbiamo

    $$
    \begin{array}{l}
    \ds8\sqrt{1+\sin x}=8+4\left(x-\frac{x^{3}}{6}\right)-\left(x-\frac{x^{3}}{6}\right)^{2}
    +\frac{1}{2}\left(x-\frac{x^{3}}{6}\right)^{3}+o(x^{3})\\
    \\
    \ds=8+4x-x^{2}-\frac{1}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    Ne segue che il numeratore, nel limite dato, è equivalente a $-x^{3}/6$.

    A denominatore abbiamo il fattore $\cosh^{2}x$ che converge a $1$ mentre

    $$
    2e^{x}-2-2x-x^{2}\sim x^{3}/3.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0}\frac{8\sqrt{1+\sin x}-8-4x+x^{2}}{(2e^{x}-2-2x-x^{2})\cosh^{2}x}=\lim_{x\to0}\frac{-\frac{x^{3}}{6}}{\frac{x^{3}}{3}}=
    -\frac{1}{2}.
    $$

??? soluzione "Soluzione"

    Sviluppiamo all'ordine $3$ la funzione composta $2\log(1+\sin x)$ con punto iniziale $x=0$. Da $\sin x\sim x-x^{3}/6$ e $2\log(1+y)\sim 2y-y^{2}+2y^{3}/3$, componendo, abbiamo

    $$
    \begin{array}{l}
    \ds2\log(1+\sin x)=2\left(x-\frac{x^{3}}{6}\right)-\left(x-\frac{x^{3}}{6}\right)^{2}
    +\frac{2}{3}\left(x-\frac{x^{3}}{6}\right)^{3}+o(x^{3})\\
    \\
    \ds=2x-x^{2}+\frac{1}{3}x^{3}+o(x^{3}).
    \end{array}
    $$

    Ne segue che il numeratore, nel limite dato, è equivalente a $x^{3}/3$.

    A denominatore abbiamo il fattore $\cos^{2}x$ che converge a $1$ mentre

    $$
    2e^{x}-2-2x-x^{2}\sim x^{3}/3.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0}\frac{2\log(1+\sin x)-2x+x^{2}}{(2e^{x}-2-2x-x^{2})\cos^{2}x}=\lim_{x\to0}\frac{\frac{1}{3}x^{3}}{\frac{1}{3}x^{3}}=1.
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to+\infty}x\left(\sqrt{4+\frac{5}{x}}-2\cos \frac{1}{x}\right)=\lim_{x\to+\infty}2x\left(\sqrt{1+\frac{5}{4x}}-\cos \frac{1}{x}\right)
    $$

    Da $\cos y=1+o(y)$ e $\sqrt{1+y}= 1+\frac{1}{2}y+o(y)$, componendo, abbiamo

    \begin{align*}
    \lim_{x\to+\infty}2x\left(\sqrt{1+\frac{5}{4x}}-\cos \frac{1}{x}\right)&=\lim_{x\to+\infty}2x\left(1+\frac{1}{2}\cdot\frac{5}{4x}+o\left(\frac{1}{x}\right)-1+o\left(\frac{1}{x}\right)\right) \\
    &=\lim_{x\to+\infty}2x\left(\frac{5}{8x}+o\left(\frac{1}{x}\right)\right) \\
    &=\frac{5}{4}+o(1) \\
    &=\frac{5}{4}
    \end{align*}
