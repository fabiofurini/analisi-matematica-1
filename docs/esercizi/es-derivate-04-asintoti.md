---
title: "Asintoti"
---

# Asintoti

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-4-derivate.pdf)

</div>

!!! esercizio "Esercizio 1"

    Determinare gli eventuali asintoti della seguente funzione nel suo dominio naturale

    $$
    f(x)=\sqrt{\frac{x^{3}-x}{x+2}}
    $$

??? soluzione "Soluzione"

    La funzione $f$ è definita su

    $$
    (-\infty,-2)\cup[-1,0]\cup[1,+\infty).
    $$

    Poichè

    $$
    \lim_{x\to-2^{-}}f(x)=+\infty
    $$

    la retta $x=-2$ è asintoto verticale.

    Per $x\to+\infty$ abbiamo

    $$
    \lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}=1
    $$

    e

    $$
    \begin{array}{l}\ds\lim_{x\to+\infty}f(x)-x=\lim_{x\to+\infty}\left(\sqrt{\frac{x^{3}-x}{x+2}}-x\right)
    \frac{\sqrt{\frac{x^{3}-x}{x+2}}+x}{\sqrt{\frac{x^{3}-x}{x+2}}+x}=\\
    \\
    \ds\lim_{x\to+\infty}\left(\frac{x^{3}-x}{x+2}-x^{2}\right)\frac{1}{x\left(\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1\right)}=\\
    \\
    \ds\lim_{x\to+\infty}\frac{-2x-1}{x+2}\frac{1}{\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1}=-1
    \end{array}
    $$

    quindi abbiamo l'asintoto

    $$
    y=x-1,\ \ x\to+\infty.
    $$

??? soluzione "Soluzione"

    Per $x\to-\infty$ abbiamo

    $$
    \lim_{x\to-\infty}\frac{f(x)}{x}=\lim_{x\to-\infty}-\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}=-1
    $$

    e

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)+x=\lim_{x\to-\infty}\left(\sqrt{\frac{x^{3}-x}{x+2}}+x\right)
    \frac{\sqrt{\frac{x^{3}-x}{x+2}}-x}{\sqrt{\frac{x^{3}-x}{x+2}}-x}=\\
    \\
    \ds\lim_{x\to-\infty}\left(\frac{x^{3}-x}{x+2}-x^{2}\right)\frac{1}{-x\left(\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1\right)}=\\
    \\
    \ds\lim_{x\to-\infty}\frac{2x+1}{x+2}\frac{1}{\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1}=1
    \end{array}
    $$

    quindi abbiamo l'asintoto

    $$
    y=-x+1,\ \ x\to-\infty.
    $$

??? soluzione "Soluzione"

    Utilizzando lo sviluppo asintotico

    $$
    \sqrt{1+y}=1+\frac{1}{2}y+o(y),\ \ y\to0
    $$

    e tenendo conto dell'equivalenza

    $$
    \frac{2x+1}{x^{2}+2x}\sim\frac{2}{x},\ \ \ x\to\pm\infty,
    $$

    quindi

    $$
    \frac{2x+1}{x^{2}+2x}\sim\frac{2}{x}+o\left(\frac{1}{x}\right),\ \ \ x\to\pm\infty,
    $$

    possiamo operare anche nel seguente modo:

    $$
    \begin{array}{l}
    \ds f(x)=|x|\sqrt{1-\frac{2x+1}{x^{2}+2x}}=\\
    \\
    |x|\sqrt{1-(2/x)+o(1/x)}=|x|(1-(1/x)+o(1/x))=\\
    \\
    |x|-{\rm sgn}(x)+o(1),\ \ \ x\to\pm\infty
    \end{array}
    $$

    quindi ritroviamo gli asintoti obliqui $y=-x+1$ per $x\to-\infty$ e $y=x-1$ per $x\to+\infty$.

!!! esercizio "Esercizio 2"

    Determinare gli eventuali asintoti della seguente funzione nel suo dominio naturale

    $$
    f(x)=\sqrt{9x^{2}+2x+1}
    $$

??? soluzione "Soluzione"

    La funzione $f$ è definita su tutto $\R$.

    Per $x\to+\infty$ abbiamo

    $$
    \lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\sqrt{9+2/x+1/x^{2}}=3
    $$

    e

    $$
    \begin{array}{l}\ds\lim_{x\to+\infty}f(x)-3x=\lim_{x\to+\infty}\left(\sqrt{9x^{2}+2x+1}-3x\right)
    \frac{\sqrt{9x^{2}+2x+1}+3x}{\sqrt{9x^{2}+2x+1}+3x}=\\
    \\
    \ds\lim_{x\to+\infty}\frac{2x+1}{3x\left(\sqrt{1+2/(9x)+1/(9x^{2})}+1\right)}=\frac{1}{3}\end{array}
    $$

    quindi abbiamo l'asintoto

    $$
    y=3x+\frac{1}{3},\ \ \ x\to+\infty.
    $$

    Per $x\to-\infty$ abbiamo

    $$
    \lim_{x\to-\infty}\frac{f(x)}{x}=\lim_{x\to-\infty}-\sqrt{9+2/x+1/x^{2}}=-3
    $$

    e

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)+3x=\lim_{x\to-\infty}\left(\sqrt{9x^{2}+2x+1}+3x\right)
    \frac{\sqrt{9x^{2}+2x+1}-3x}{\sqrt{9x^{2}+2x+1}-3x}=\\
    \\
    \ds\lim_{x\to-\infty}\frac{2x+1}{-3x\left(\sqrt{1+2/(9x)+1/(9x^{2})}+1\right)}=-\frac{1}{3}\end{array}
    $$

    quindi abbiamo l'asintoto

    $$
    y=-3x-\frac{1}{3},\ \ \ x\to-\infty.
    $$

??? soluzione "Soluzione"

    In maniera alternativa, possiamo operare come segue:

    $$
    \begin{array}{l}
    f(x)=3|x|\sqrt{1+\frac{2}{9x}+\frac{1}{9x^{2}}}=\\
    \\
    3|x|\sqrt{1+(2/9x)+o(1/x)}=3|x|(1+(1/9x)+o(1/x))=\\
    \\
    3|x|+(1/3){\rm sgn}(x)+o(1),\ \ \ x\to\pm\infty
    \end{array}
    $$

    quindi ritroviamo gli asintoti obliqui $y=-3x-(1/3)$ per $x\to-\infty$ e $y=3x+(1/3)$ per $x\to+\infty$.

!!! esercizio "Esercizio 3"

    Determinare gli eventuali asintoti della seguente funzione nel suo dominio naturale

    $$
    f(x)=x\left(e^{-\frac{1}{x}}+\sin\frac{1}{x}\right)
    $$

??? soluzione "Soluzione"

    La funzione $f$ è definita per $x\neq0$. Si ha

    $$
    \lim_{x\to0^{-}}f(x)=\lim_{x\to0^{-}}xe^{-\frac{1}{x}}+\lim_{x\to0^{-}}x\sin\frac{1}{x}=-\infty+0=-\infty
    $$

    dove

    $$
    \lim_{x\to0^{-}}xe^{-\frac{1}{x}}=-\infty
    $$

    viene dal fatto che $e^{-1/x}$ è infinito di ordine superiore rispetto a $1/x$ per $x\to0^{-}$ e che $xe^{-1/x}<0$ per $x<0$. Per il limite

    $$
    \lim_{x\to0^{-}}x\sin\frac{1}{x}=0
    $$

    si è usato il fatto che il prodotto di un infinitesimo ($x$) per una funzione limitata ($\sin(1/x)$) è un infinitesimo. La retta $x=0$ è dunque asintoto verticale.

??? soluzione "Soluzione"

    Per $x\to\pm\infty$ si ha

    $$
    \lim_{x\to\pm\infty}\frac{f(x)}{x}=\lim_{x\to\pm\infty}e^{-\frac{1}{x}}+\sin\frac{1}{x}=1
    $$

    e

    $$
    \begin{array}{l}\ds\lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}\frac{e^{-\frac{1}{x}}-1}{\frac{1}{x}}+
    \frac{\sin\frac{1}{x}}{\frac{1}{x}}=\\
    \\
    \ds\lim_{y\to0^{\pm}}\frac{e^{-y}-1}{y}+\lim_{y\to0^{\pm}}\frac{\sin y}{y}=-1+1=0\end{array}
    $$

    quindi c'è l'asintoto obliquo

    $$
    y=x
    $$

    sia per $x\to-\infty$ che per $x\to+\infty$.

??? soluzione "Soluzione"

    La stessa cosa si può ottenere con gli sviluppi $e^{y}=1+y+o(y)$, $\sin y=y+o(y)$ per $y\to0$:

    $$
    f(x)=x(1-1/x+o(1/x))+x(1/x+o(1/x))=x-1+1+o(1)=x+o(1)
    $$

    per $x\to\pm\infty$ che significa proprio che abbiamo l'asintoto obliquo

    $$
    y=x
    $$

    sia per $x\to-\infty$ che per $x\to+\infty$.
