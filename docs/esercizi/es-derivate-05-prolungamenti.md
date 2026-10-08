---
title: "Prolungamenti continui"
---

# Prolungamenti continui

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-4-derivate.pdf)

</div>

!!! esercizio "Esercizio 1"

    Per la seguente funzione stabilire se esistono prolungamenti continui agli estremi del dominio. Studiare poi la derivabilità di tali prolungamenti.

    $$
    f:[0,\pi/2)\rightarrow\R,\ f(x)=(\cos x)^{(\pi/2)-x}
    $$

??? soluzione "Soluzione"

    Ponendo $y=\pi/2-x$ abbiamo

    $$
    \begin{array}{l}\ds\lim_{x\to\pi/2^{-}}f(x)=\lim_{x\to\pi/2^{-}}e^{\left(\frac{\pi}{2}-x\right)\log\cos x}=
    \lim_{y\to0^{+}}e^{y\log\sin y}=\lim_{y\to0^{+}}e^{y\log(y+o(y))}=\\
    \\
    =\lim_{y\to0^{+}}e^{y\log(y(1+o(1))}=\lim_{y\to0^{+}}e^{y\log y+y\log(1+o(1))}=e^{0}=1.\end{array}
    $$

    Si ha un prolungamento continuo ponendo

    $$
    f(\pi/2)=1.
    $$

    Esaminiamo il limite del rapporto incrementale:

    $$
    \begin{array}{l}
    \ds\lim_{x\to\pi/2^{-}}\frac{f(x)-f(\pi/2)}{x-\pi/2}=
    \lim_{x\to\pi/2^{-}}\frac{e^{\left(\frac{\pi}{2}-x\right)\log\cos x}-1}{x-\pi/2}=\\
    \\
    = \lim_{x\to\pi/2^{-}}\frac{\left(\frac{\pi}{2}-x\right)\log\cos x}{x-\pi/2}=\lim_{x\to\pi/2^{-}}-\log\cos x=+\infty\end{array}
    $$

    usando l'equivalenza

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    con

    $$
    t=\left(\frac{\pi}{2}-x\right)\log\cos x,\ \ \ x\to\pi/2^{-}.
    $$

    Ne segue che $f$ si può prolungare con continuità in $x=\pi/2$ ma tale prolungamento non è derivabile in $x=\pi/2$ (tangente verticale).

!!! esercizio "Esercizio 2"

    Per la seguente funzione stabilire se esistono prolungamenti continui agli estremi del dominio. Studiare poi la derivabilità di tali prolungamenti.

    $$
    f:(0,1)\rightarrow\R,\ f(x)=(\cos (\pi x/2))^{\log x}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}e^{\log x\log\cos (\pi x/2)}=e^{0}=1
    $$

    in quanto

    $$
    \begin{array}{l}\ds\lim_{x\to0}\log x\log\cos (\pi x/2)=\lim_{x\to0}\log x\log\left(1-\frac{\pi^{2}}{8}x^{2}+o\left(x^{2}\right)\right)=\\
    \\
    = \lim_{x\to0}\left(-\frac{\pi^{2}}{8}x^{2}+o\left(x^{2}\right)\right)\log x=\lim_{x\to0}-\frac{\pi^{2}}{8}x^{2}\log x=0.\end{array}
    $$

    Si ha un prolungamento continuo ponendo

    $$
    f(0)=1.
    $$

??? soluzione "Soluzione"

    Esaminiamo il limite del rapporto incrementale:

    $$
    \begin{array}{l}
    \ds\lim_{x\to0}\frac{f(x)-f(0)}{x}=
    \lim_{x\to0}\frac{e^{\log x\log\cos (\pi x/2)}-1}{x}=\\
    \\
    =\lim_{x\to0}\frac{\log x\log\cos (\pi x/2)}{x}=\lim_{x\to0}-\frac{\pi^{2}}{8}x\log x=0\end{array}
    $$

    usando le equivalenze

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    con

    $$
    t=\log x\log\cos (\pi x/2),\ \ \ x\to0
    $$

    e

    $$
    \log\cos (\pi x/2)\sim -\frac{\pi^{2}}{8}x^{2},\ \ \ x\to0.
    $$

    Ne segue che $f$ si può prolungare con continuità in $x=0$ e tale prolungamento è derivabile in $x=0$ con

    $$
    f'(0)=0.
    $$

??? soluzione "Soluzione"

    Esaminiamo ora il comportamento per $x\to1$ ponendo $y=x-1$:

    $$
    \lim_{x\to1}f(x)=\lim_{x\to1}e^{\log x\log\cos (\pi x/2)}=\lim_{y\to0}e^{\log(1+y)\log(-\sin(\pi y/2))}=e^{0}=1
    $$

    in quanto

    $$
    \begin{array}{l}\ds\lim_{y\to0}\log (1+y)\log(-\sin (\pi y/2))=\lim_{y\to0}y\log\left(-\pi y/2+o(y)\right)=\\
    \\
    =\lim_{y\to0}y\log\left(-\pi y/2(1+o(1))\right)=\\
    \\
    =\lim_{y\to0}y\log\left(-\pi y/2)+\lim_{y\to0}y\log(1+o(1))\right)=0+0=0.\end{array}
    $$

    Si ha un prolungamento continuo ponendo

    $$
    f(1)=1.
    $$

    Esaminiamo il limite del rapporto incrementale:

    $$
    \begin{array}{l}
    \ds\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=
    \lim_{x\to1}\frac{e^{\log x\log\cos (\pi x/2)}-1}{x-1}=\lim_{y\to0}\frac{e^{\log(1+y)\log(-\sin(\pi y/2))}-1}{y}=\\
    \\
    =\lim_{y\to0}\frac{\log(1+y)\log(-\sin(\pi y/2))}{y}=\lim_{y\to0}\log(-\sin(\pi y/2))=-\infty\end{array}
    $$

    usando le equivalenze

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    con

    $$
    t=\log(1+y)\log(-\sin(\pi y/2)),\ \ \ y\to0
    $$

    e

    $$
    \log(1+y)\sim y,\ \ \ y\to0.
    $$

    Ne segue che $f$ si può prolungare con continuità in $x=1$ ma tale prolungamento non è derivabile in $x=1$ (tangente verticale).

!!! esercizio "Esercizio 3"

    Per la seguente funzione stabilire se esistono prolungamenti continui agli estremi del dominio. Studiare poi la derivabilità di tali prolungamenti.

    $$
    f:(0,1]\rightarrow\R,\ f(x)=\frac{\sqrt{\cos x}-1}{x^{2}}
    $$

??? soluzione "Soluzione"

    Sviluppiamo la funzione $\sqrt{\cos x}$ all'ordine $3$ con punto iniziale $x=0$ utilizzando

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{3})
    $$

    e

    $$
    \sqrt{1+y}=1+\frac{1}{2}y-\frac{1}{8}y^{2}+\frac{1}{16}y^{3}+o(y^{3})
    $$

    con $y=-(1/2)x^{2}+o(x^{2})$:

    $$
    \sqrt{\cos x}=1-\frac{1}{4}x^{2}+o(x^{3}).
    $$

    Ne segue

    $$
    f(x)=\frac{\sqrt{\cos x}-1}{x^{2}}=-\frac{1}{4}+o(x)
    $$

    da cui $f$ si può prolungare con continuità in $x=0$ ponendo

    $$
    f(0)=-\frac{1}{4}
    $$

    e tale prolungamento risulta derivabile con

    $$
    f'(0)=0.
    $$

    Infatti

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}-\frac{1}{4}+o(x)=-\frac{1}{4}
    $$

    e

    $$
    \lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{-\frac{1}{4}+o(x)+\frac{1}{4}}{x}=\lim_{x\to0}\frac{o(x)}{x}=0.
    $$

!!! esercizio "Esercizio 4"

    Per la seguente funzione stabilire se esistono prolungamenti continui agli estremi del dominio. Studiare poi la derivabilità di tali prolungamenti.

    $$
    f:(0,\pi/2]\rightarrow\R,\ f(x)=(1-\cos x)^{\log(1+x)}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}e^{\log(1+x)\log(1-\cos x)}=e^{0}=1
    $$

    in quanto

    $$
    \begin{array}{l}\ds\lim_{x\to0}\log(1+x)\log(1-\cos x)=\lim_{x\to0} x\log\left(\frac{1}{2}x^{2}+o\left(x^{2}\right)\right)=\\
    \\
    = \lim_{x\to0}x\log\left(\frac{1}{2}x^{2}(1+o(1)\right)=\\
    \\
    = \lim_{x\to0}x\log\left(\frac{1}{2}x^{2}\right)+\lim_{x\to0}x\log(1+o(1))=0+0=0.\end{array}
    $$

    Si ha un prolungamento continuo ponendo

    $$
    f(0)=1.
    $$

    Esaminiamo il limite del rapporto incrementale:

    $$
    \begin{array}{l}
    \ds\lim_{x\to0}\frac{f(x)-f(0)}{x}=
    \lim_{x\to0}\frac{e^{\log(1+x)\log(1-\cos x)}-1}{x}=\\
    \\
    = \lim_{x\to0}\frac{\log(1+x)\log(1-\cos x)}{x}=\lim_{x\to0}\log(1-\cos x)=-\infty\end{array}
    $$

    usando l'equivalenza

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    con

    $$
    t=\log(1+x)\log(1-\cos x),\ \ \ x\to0.
    $$

    Ne segue che $f$ si può prolungare con continuità in $x=0$ ma tale prolungamento non è derivabile in $x=0$ (tangente verticale).
