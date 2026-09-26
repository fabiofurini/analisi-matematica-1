---
title: "Studi di funzione"
---

# Studi di funzione

<div class="info-capitolo" markdown>

**Esercizi · Derivate** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-derivate-08-studi-funzione.pdf)

</div>

!!! esercizio "Esercizio 1"

    Delle seguenti funzioni di variabile reale $x$, determinare:

    1. dominio e relativi limiti agli estremi evidenziando eventuali prolungamenti continui;

    2. eventuali estremanti locali ed andamento di monotonia;

    3. eventuali flessi ed andamento di convessità;

    4. eventuali asintoti;

    5. grafico qualitativo che tenga conto di tutti gli elementi precedenti.

!!! esercizio "Esercizio 2"

    $$
    f(x)=x-\frac{1}{x}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=x-\frac{1}{x}$ è definita per $x\neq0$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    Si ha

    $$
    \lim_{x\to-\infty}f(x)=-\infty,\ \lim_{x\to0^{-}}f(x)=+\infty,\ \lim_{x\to0^{+}}f(x)=-\infty,\ \lim_{x\to+\infty}f(x)=+\infty,
    $$

    in particolare la retta $x=0$ (asse $y$) è asintoto verticale. Da

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\frac{1}{x}=0
    $$

    si ha poi che la retta $y=x$ è asintoto obliquo per $x\to\pm\infty$. La presenza di questi asintoti, del resto, si ottiene anche dalla geometria analitica: la curva di equazione $y=x-\frac{1}{x}$, in forma implicita $x^{2}-xy-1=0$, è un'iperbole di asintoti proprio le rette $x=0$ ed $y=x$ (gli asintoti di una iperbole si ottengono uguagliando a $0$ la parte omogenea di grado $2$ della equazione).

    La funzione $f(x)$ è derivabile infinite volte nel proprio dominio $D$. La derivata prima vale

    $$
    f'(x)=1+\frac{1}{x^{2}}
    $$

    e risulta $f'(x)>0$ per ogni $x\in D$. La funzione $f(x)$ è quindi strettamente crescente sull'intervallo $(-\infty,0)$ e strettamente crescente anche sull'intervallo $(0,+\infty)$.

    La derivata seconda vale

    $$
    f''(x)=-\frac{2}{x^{3}}
    $$

    e ha il segno contrario di $x$. La funzione $f(x)$ è quindi strettamente convessa sull'intervallo $(-\infty,0)$ e strettamente concava sull'intervallo $(0,+\infty)$.

    La posizione del grafico rispetto all'asintoto obliquo è facilmente deducibile da $f(x)-x=-1/x$: si ha $f(x)>x$ per $x<0$ mentre $f(x)<x$ per $x>0$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 3"

    $$
    f(x)=\frac{\sqrt{x}}{\sqrt{x}-1}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\frac{\sqrt{x}}{\sqrt{x}-1}$ è definita per $x\geq0$, $x\neq1$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=[0,1)\cup(1,+\infty).
    $$

    Si ha

    $$
    \lim_{x\to0}f(x)=f(0)=0,\ \lim_{x\to1^{-}}f(x)=-\infty,\ \lim_{x\to1^{+}}f(x)=+\infty,\ \lim_{x\to+\infty}f(x)=+1,
    $$

    in particolare la retta $x=1$ è asintoto verticale, la retta $y=1$ è asintoto orizzontale per $x\to+\infty$.

    La funzione $f(x)$ è continua in $D$, derivabile infinite volte in $D\setminus\{0\}$. Nel punto $x=0$ il rapporto incrementale ha limite

    $$
    \lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{\sqrt{x}}{x(\sqrt{x}-1)}=
    -\lim_{x\to0}\frac{\sqrt{x}}{x}=-\lim_{x\to0}\frac{1}{\sqrt{x}}=-\infty
    $$

    quindi la funzione $f(x)$ non è derivabile per $x=0$ e nel punto $(0,0)$ il grafico ha per tangente verticale l'asse $y$.

    Per $x\in D\setminus\{0\}$ la derivata prima vale

    $$
    f'(x)=\frac{-1}{2\sqrt{x}(\sqrt{x}-1)^{2}}
    $$

    e risulta $f'(x)<0$ per ogni $x$. La funzione $f(x)$ è quindi strettamente decrescente sull'intervallo $[0,1)$ e strettamente decrescente anche sull'intervallo $(1,+\infty)$.

    La derivata seconda vale

    $$
    f''(x)=\frac{1}{4}\frac{3\sqrt{x}-1}{x\sqrt{x}(\sqrt{x}-1)^{3}}
    $$

    che si annulla per $x=1/9$, è positiva per $0<x<1/9$, negativa per $1/9<x<1$, di nuovo positiva per $x>1$. La funzione $f(x)$ è quindi strettamente convessa sull'intervallo $(0,1/9)$, strettamente concava sull'intervallo $(1/9,1)$, di nuovo strettamente convessa sull'intervallo $(1,+\infty)$. Per $x=1/9$ si ha un flesso: nel punto $(1/9,-1/2)$ il grafico passa da sopra a sotto la retta tangente.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 4"

    $$
    f(x)=\sqrt{x^{2}-1}-\sqrt{x^{2}+1}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\sqrt{x^{2}-1}-\sqrt{x^{2}+1}$ è definita per $x\leq-1$, $x\geq1$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(-\infty,-1]\cup[1,+\infty).
    $$

    La funzione in esame è pari: lo studio seguente si potrebbe limitare all'intervallo $[1,+\infty)$. Si ha

    $$
    \lim_{x\to\pm\infty}f(x)=\lim_{x\to\pm\infty}\frac{-2}{\sqrt{x^{2}-1}+\sqrt{x^{2}+1}}=0
    $$

    in particolare la retta $y=0$ (asse $x$) è asintoto orizzontale per $x\to\pm\infty$. Si ha poi

    $$
    \lim_{x\to-1}f(x)=f(-1)=-\sqrt{2},\ \lim_{x\to1}f(x)=f(1)=-\sqrt{2}.
    $$

    La funzione $f(x)$ è continua in $D$, derivabile infinite volte in $D\setminus\{-1,1\}$.

    Per $x\in D\setminus\{-1,1\}$ la derivata prima vale

    $$
    f'(x)=\frac{x}{\sqrt{x^{2}-1}}-\frac{x}{\sqrt{x^{2}+1}}=\frac{x(\sqrt{x^{2}+1}-\sqrt{x^{2}-1})}{\sqrt{x^{4}-1}}
    $$

    ed ha lo stesso segno di $x$. La funzione $f(x)$ è quindi strettamente decrescente sull'intervallo $(-\infty,-1)$, strettamente crescente sull'intervallo $(1,+\infty)$.

    Nei punti $x=\pm1$ si ha

    $$
    \lim_{x\to\pm1}f'(x)=\pm\infty
    $$

    quindi la funzione $f(x)$ non è derivabile per $x=\pm1$ e nei punti $(\pm1,-\sqrt{2})$ il grafico ha tangente verticale.

    La derivata seconda vale

    $$
    f''(x)=-\frac{1}{(x^{2}-1)\sqrt{x^{2}-1}}-\frac{1}{(x^{2}+1)\sqrt{x^{2}+1}}
    $$

    ed è negativa per ogni $x$. La funzione $f(x)$ è quindi strettamente concava sull'intervallo $(-\infty,-1)$ e sull'intervallo $(1,+\infty)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo, rispettando in particolare la simmetria del grafico rispetto all'asse $y$ (simmetria pari).

!!! esercizio "Esercizio 5"

    $$
    f(x)=\frac{\sqrt{2x-1}}{\log(2x-1)}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\frac{\sqrt{2x-1}}{\log(2x-1)}$ è definita per $2x-1>0$, $2x-1\neq1$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(1/2,1)\cup(1,+\infty).
    $$

    Si ha

    $$
    \lim_{x\to1/2}f(x)=0,\ \lim_{x\to1^{\pm}}f(x)=\pm\infty,\ \lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}\frac{y^{1/2}}{\log y}=+\infty
    $$

    in particolare la retta $x=1$ è asintoto verticale. L'ordine di infinito di $f(x)$ per $x\to+\infty$ è inferiore a quello di $\sqrt{x}$ il chè esclude l'asintoto obliquo (l'ordine di infinito di funzioni con asintoto obliquo è quello di $x$).

    La funzione $f(x)$ è continua in $D$; il limite $\lim_{x\to1/2}f(x)=0$ consente di prolungare con continuità la funzione anche in $x=1/2$ ponendo $f(1/2)=0$.

    La funzione è derivabile infinite volte in $D$. La derivata prima vale

    $$
    f'(x)=\frac{\log(2x-1)-2}{\sqrt{2x-1}\log^{2}(2x-1)}.
    $$

    Nel punto $x=1/2$, il rapporto incrementale del prolungamento continuo ha limite

    $$
    \begin{array}{l}\ds\lim_{x\to1/2}\frac{f(x)-f(1/2)}{x-1/2}=\lim_{x\to1/2}\frac{\sqrt{2x-1}}{(x-1/2)\log(2x-1)}=\\
    \\
    \ds\sqrt{2}\lim_{x\to1/2}\frac{1}{\sqrt{x-1/2}\log(2x-1)}=\sqrt{2}\lim_{y\to0}\frac{1}{y^{1/2}\log y}=-\infty.\end{array}
    $$

    Il prolungamento continuo di $f$ non è derivabile per $x=1/2$. Nel punto $(1/2,0)$ il suo grafico ha tangente verticale.

    Tornando ad $f'(x)$ nei punti di $D$, si ha $f'(x)>0$ per $x>(e^{2}+1)/2$, $f'(x)<0$ per $x<(e^{2}+1)/2$, $f'(x)=0$ per $x=(e^{2}+1)/2$. La funzione $f(x)$ è quindi strettamente decrescente sull'intervallo $(1/2,1)$ e sull'intervallo $(1,(e^{2}+1)/2)$, strettamente crescente sull'intervallo $((e^{2}+1)/2,+\infty)$. Il punto $x=(e^{2}+1)/2$ è di minimo locale con valore $f((e^{2}+1)/2)=e/2$.

    La derivata seconda vale

    $$
    f''(x)=-\frac{\log^{2}(2x-1)-8}{(2x-1)\sqrt{2x-1}\log^{3}(2x-1)}
    $$

    ed è positiva per $x\in(1/2,(e^{-\sqrt{8}}+1)/2)$, negativa per $x\in((e^{-\sqrt{8}}+1)/2,1)$, positiva per $x\in(1,(e^{\sqrt{8}}+1)/2)$, negativa per $x\in((e^{\sqrt{8}}+1)/2,+\infty)$. Ne segue che $f$ è strettamente convessa per $x\in(1/2,(e^{-\sqrt{8}}+1)/2)$, strettamente concava per $x\in((e^{-\sqrt{8}}+1)/2,1)$, strettamente convessa per $x\in(1,(e^{\sqrt{8}}+1)/2)$, strettamente concava per $x\in((e^{\sqrt{8}}+1)/2,+\infty)$. I punti $x=(e^{\pm\sqrt{8}}+1)/2$ sono di flesso con rispettivi valori $f((e^{\pm\sqrt{8}}+1)/2)=\pm e^{\pm\sqrt{2}}/\sqrt{8}$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 6"

    $$
    f(x)=xe^{\frac{1}{x}}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=xe^{\frac{1}{x}}$ è definita per $x\neq0$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    Si ha

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)=-\infty,\ \lim_{x\to0^{-}}f(x)=0,\\
    \\
    \ds\lim_{x\to0^{+}}f(x)=\lim_{y\to+\infty}\frac{e^{y}}{y}=+\infty,\ \lim_{x\to+\infty}f(x)=+\infty\end{array}
    $$

    in particolare la retta $x=0$ (asse $y$) è asintoto verticale. Per $x\to\pm\infty$, da $e^{y}=1+y+o(y)$ per $y\to0$, si ottiene

    $$
    f(x)=xe^{\frac{1}{x}}=x\left(1+\frac{1}{x}+o\left(\frac{1}{x}\right)\right)=x+1+o(1)
    $$

    quindi la retta $y=x+1$ è asintoto obliquo per $x\to\pm\infty$.

    La funzione $f(x)$ è continua in $D$; il limite $\lim_{x\to0^{-}}f(x)=0$ consente di prolungare con continuità a sinistra la funzione in $x=0$ ponendo $f(0)=0$.

    La funzione è derivabile infinite volte in $D$. La derivata prima vale

    $$
    f'(x)=\left(1-\frac{1}{x}\right)e^{\frac{1}{x}}=\frac{x-1}{x}e^{\frac{1}{x}}.
    $$

    Nel punto $x=0$, il rapporto incrementale sinistro del prolungamento ha limite

    $$
    \lim_{x\to0^{-}}\frac{f(x)-f(0)}{x}=\lim_{x\to0^{-}}e^{\frac{1}{x}}=0
    $$

    Il prolungamento continuo a sinistra di $f$ è derivabile a sinistra per $x=0$ con $f'_{-}(0)=0$. Il semiasse negativo delle $x$ è semiretta tangente al grafico nel punto $(0,0)$.

    Tornando ad $f'(x)$ nei punti di $D$, si ha $f'(x)>0$ per $x<0$, $f'(x)<0$ per $0<x<1$, di nuovo $f'(x)>0$ per $x>1$, $f'(x)=0$ per $x=1$. La funzione $f(x)$ è quindi strettamente crescente sull'intervallo $(-\infty,0)$, strettamente decrescente sull'intervallo $(0,1)$, di nuovo strettamente crescente sull'intervallo $(1,+\infty)$. Il punto $x=1$ è di minimo locale con valore $f(1)=e$.

    La derivata seconda vale

    $$
    f''(x)=\frac{1}{x^{3}}e^{\frac{1}{x}}
    $$

    ed ha lo stesso segno di $x$. Ne segue che $f$ è strettamente convessa per $x\in(0,+\infty)$, strettamente concava per $x\in(-\infty,0)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 7"

    $$
    f(x)=e^{\frac{1-|x|}{1+x}}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=e^{\frac{1-|x|}{1+x}}$ è definita per $x\neq-1$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(-\infty,-1)\cup(-1,+\infty).
    $$

    Nell'insieme $(-\infty,-1)\cup(-1,0]$ la funzione è costante: $f(x)=e^{\frac{1+x}{1+x}}=e$ per ogni $x\leq0$, $x\neq-1$. Ovviamente si può prolungare con continuità la funzione per $x=-1$ definendo $f(-1)=e$. Si ha poi

    $$
    \lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}e^{\frac{1-x}{1+x}}=e^{-1}=\frac{1}{e}
    $$

    in particolare la retta $y=1/e$ è asintoto orizzontale per $x\to+\infty$.

    La funzione $f(x)$ è continua in $D$.

    La funzione è derivabile infinite volte in $D\setminus\{0\}$. La derivata prima vale ovviamente $0$ per $x<0$ mentre vale

    $$
    f'(x)=-\frac{2}{(x+1)^{2}}e^{\frac{1-x}{1+x}}\ \ {\rm per}\ x>0.
    $$

    Nel punto $x=0$, la derivata sinistra vale $0$ mentre

    $$
    \lim_{x\to0^{+}}f'(x)=-2e.
    $$

    La funzione non è derivabile per $x=0$ in quanto $f'_{-}(0)\neq f'_{+}(0)$. Il grafico presenta un punto angoloso nel punto $(0,e)$: a sinistra è formato dalla semiretta $y=e$, $x\leq0$, mentre il ramo di destra ha semiretta tangente $y=-2ex+e$, $x\geq0$.

    Si ha poi $f'(x)<0$ per ogni $x>0$ quindi $f$ è strettamente decrescente sull'intervallo $(0,+\infty)$.

    Visto che la funzione è costante per $x\leq0$, interessa calcolare la derivata seconda solo per $x>0$ dove vale

    $$
    f''(x)=\frac{4x+8}{(x+1)^{4}}e^{\frac{1-x}{1+x}}
    $$

    ed è positiva. Ne segue che $f$ è strettamente convessa per $x\in(0,+\infty)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 8"

    $$
    f(x)=\left|\frac{\log x}{x}\right|
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\left|\frac{\log x}{x}\right|$  è definita per $x>0$, quindi il suo dominio naturale $D$ è dato da

    $$
    D=(0,+\infty)
    $$

    dove la sua espressione può essere semplificata in

    $$
    f(x)=\frac{|\log x|}{x},\ \ x\in D.
    $$

    Si tenga conto ora e nel seguito del segno di $\log x$ che porta a $|\log x|=-\log x$ per $0<x<1$, $|\log x|=\log x$ per $x>1$. Si ha

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}\frac{-\log x}{x}=+\infty,\ \lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\frac{\log x}{x}=0
    $$

    in particolare la retta $x=0$ (asse $y$) è asintoto verticale mentre la retta $y=0$ (asse $x$) è asintoto orizzontale per $x\to+\infty$.

    La funzione $f(x)$ è continua in $D$, assume in maniera evidente solo valori non negativi ed il punto $x=1$ dove $f(1)=0$ è di minimo assoluto.

    La funzione è derivabile infinite volte in $D\setminus\{1\}$. La derivata prima vale

    $$
    f'(x)=-\frac{1-\log x}{x^{2}}\ \ {\rm per}\ 0<x<1;\ \ \ \ f'(x)=\frac{1-\log x}{x^{2}}\ \ {\rm per}\ x>1.
    $$

    Nel punto $x=1$, la derivata sinistra vale

    $$
    \lim_{x\to1^{-}}f'(x)=\lim_{x\to1^{-}}-\frac{1-\log x}{x^{2}}=-1,
    $$

    mentre la derivata destra vale

    $$
    \lim_{x\to1^{+}}f'(x)=\lim_{x\to1^{+}}\frac{1-\log x}{x^{2}}=1
    $$

    La funzione non è derivabile per $x=1$ in quanto $f'_{-}(1)\neq f'_{+}(1)$. Il grafico presenta un punto angoloso in $(1,0)$: a sinistra la semiretta tangente ha equazione $y=-x+1$, a destra $y=x-1$.

??? soluzione "Soluzione"

    Si ha poi $f'(x)<0$ per ogni $x\in(0,1)$ quindi $f$ è strettamente decrescente sull'intervallo $(0,1)$. Vale $f'(x)>0$ per ogni $x\in(1,e)$ e $f'(x)<0$ per ogni $x\in(e, +\infty)$, $f'(e)=0$, quindi $f$ è strettamente crescente sull'intervallo $(1,e)$, strettamente decrescente sull'intervallo $(e,+\infty)$, il punto $x=e$ è di massimo relativo con valore $f(e)=1/e$.

    In $D\setminus\{1\}$ la derivata seconda vale

    $$
    f''(x)=\frac{3-2\log x}{x^{3}}\ \ {\rm per}\ 0<x<1;\ \ \ \ f''(x)=\frac{2\log x-3}{x^{3}}\ \ {\rm per}\ x>1.
    $$

    Ne segue che $f$ è strettamente convessa per $x\in(0,1)$ ed in $(e^{3/2},+\infty)$; strettamente concava in $(1,e^{3/2})$. Il punto $x=e^{3/2}$ è di flesso con valore $f(e^{3/2})=3/2e^{3/2}$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

!!! esercizio "Esercizio 9"

    $$
    f(x)=\sqrt{1-|e^{2x}-1|}
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=\sqrt{1-|e^{2x}-1|}$  è definita per $|e^{2x}-1|\leq1$, quindi per $-1\leq e^{2x}-1\leq1$ da cui $0\leq e^{2x}\leq2$ ed infine $x\leq(\log2)/2$ dal momento che $e^{2x}>0$ per ogni $x$. Il dominio naturale $D$ è dato da

    $$
    D=(-\infty,(\log2)/2].
    $$

    Si tenga conto ora e nel seguito del segno di $e^{2x}-1$ che porta a $|e^{2x}-1|=1-e^{2x}$ per $x<0$, $|e^{2x}-1|=e^{2x}-1$ per $x>0$. In particolare

    $$
    f(x)=\sqrt{e^{2x}}=e^{x}\ \ {\rm per}\ x<0;\ \ \ f(x)=\sqrt{2-e^{2x}}\ \ {\rm per}\ 0\leq x\leq(\log2)/2.
    $$

    L'andamento di $e^{x}$ per $x<0$ è ben noto, ne segue in particolare

    $$
    \lim_{x\to-\infty}f(x)=0
    $$

    (asse $x$ asintoto orizzontale per $x\to-\infty$) e che $f$ è strettamente crescente in $(-\infty,0)$. Si ha poi

    $$
    \lim_{x\to(\log2)/2}f(x)=f((\log2)/2)=0.
    $$

    La funzione $f(x)$ è continua in $D$, assume in maniera evidente solo valori non negativi ed il punto $x=(\log2)/2$ dove $f((\log2)/2)=0$ è di minimo assoluto.

    La funzione è derivabile infinite volte in $D\setminus\{0,(\log2)/2\}$. La derivata prima vale

    $$
    f'(x)=e^{x}\ \ {\rm per}\ x<0;\ \ \ \ f'(x)=-\frac{e^{2x}}{\sqrt{2-e^{2x}}}\ \ {\rm per}\ 0<x<(\log2)/2.
    $$

    Nel punto $x=0$, la derivata sinistra vale

    $$
    \lim_{x\to0^{-}}f'(x)=\lim_{x\to0^{-}}e^{x}=1,
    $$

    mentre la derivata destra vale

    $$
    \lim_{x\to0^{+}}f'(x)=\lim_{x\to0^{+}}-\frac{e^{2x}}{\sqrt{2-e^{2x}}}=-1
    $$

    La funzione non è derivabile per $x=0$ in quanto $f'_{-}(0)\neq f'_{+}(0)$. Il grafico presenta un punto angoloso in $(0,1)$: a sinistra la semiretta tangente ha equazione $y=x+1$, a destra $y=-x+1$.

??? soluzione "Soluzione"

    Nel punto $x=(\log2)/2$ si ha

    $$
    \lim_{x\to(\log2)/2}f'(x)=\lim_{x\to(\log2)/2}-\frac{e^{2x}}{\sqrt{2-e^{2x}}}=-\infty.
    $$

    La funzione non è derivabile per $x=(\log2)/2$. Nel punto $((\log2)/2,0)$ il grafico ha tangente verticale.

    Si ha poi $f'(x)<0$ per ogni $x\in(0,(\log2)/2)$ quindi $f$ è strettamente decrescente sull'intervallo $(0,(\log2)/2)$. Il punto $x=0$ è di massimo (assoluto) con valore $f(0)=1$.

    In $(-\infty,0)$ la funzione coincide con $e^{x}$ ed è ben noto che la funzione esponenziale è strettamente convessa. Si ha poi

    $$
    f''(x)=-\frac{e^{2x}(4-e^{2x})}{(2-e^{2x})^{3/2}}\ \ {\rm per}\ 0<x<(\log2)/2
    $$

    con segno negativo su tale intervallo. Ne segue che $f$ è strettamente concava per $x\in(0,(\log2)/2)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo.

    (i) La funzione $f(x)=x-\arctan x$ ha dominio naturale $D=\R$ con

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty.
    $$

    Si tratta di una funzione dispari, il chè consentirebbe di studiarla solo per $x\geq0$.

    Da

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\arctan x=\mp\frac{\pi}{2}
    $$

    segue poi che la funzione ha asintoti obliqui

    $$
    y=x+\pi/2,\ x\to-\infty;\ \ y=x-\pi/2,\ x\to+\infty.
    $$

    La funzione è derivabile infinite volte su tutto $\R$. La derivata prima vale

    $$
    f'(x)=1-\frac{1}{x^{2}+1}=\frac{x^{2}}{x^{2}+1}
    $$

    con $f'(0)=0$ ed $f'(x)>0$ per ogni $x\neq0$. Ne segue che $f$ è strettamente crescente su tutto $\R$ e che il punto $x=0$ è di flesso con tangente orizzontale con relativo valore $f(0)=0$.

    La derivata seconda vale

    $$
    f''(x)=\frac{2x}{(x^{2}+1)^{2}}
    $$

    ed ha lo stesso segno di $x$. In particolare $f$ è strettamente concava in $(-\infty,0)$, strettamente convessa su $(0,+\infty)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo, rispettando la simmetria centrale del grafico rispetto all'origine (simmetria dispari).

!!! esercizio "Esercizio 10"

    $$
    f(x)=x-\arctan x
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=x-\arctan x$ ha dominio naturale $D=\R$ con

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty.
    $$

    Si tratta di una funzione dispari, il chè consentirebbe di studiarla solo per $x\geq0$.

    Da

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\arctan x=\mp\frac{\pi}{2}
    $$

    segue poi che la funzione ha asintoti obliqui

    $$
    y=x+\pi/2,\ x\to-\infty;\ \ y=x-\pi/2,\ x\to+\infty.
    $$

    La funzione è derivabile infinite volte su tutto $\R$. La derivata prima vale

    $$
    f'(x)=1-\frac{1}{x^{2}+1}=\frac{x^{2}}{x^{2}+1}
    $$

    con $f'(0)=0$ ed $f'(x)>0$ per ogni $x\neq0$. Ne segue che $f$ è strettamente crescente su tutto $\R$ e che il punto $x=0$ è di flesso con tangente orizzontale con relativo valore $f(0)=0$.

    La derivata seconda vale

    $$
    f''(x)=\frac{2x}{(x^{2}+1)^{2}}
    $$

    ed ha lo stesso segno di $x$. In particolare $f$ è strettamente concava in $(-\infty,0)$, strettamente convessa su $(0,+\infty)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo, rispettando la simmetria centrale del grafico rispetto all'origine (simmetria dispari).

!!! esercizio "Esercizio 11"

    $$
    f(x)=1-x^{2}+\log|x|
    $$

??? soluzione "Soluzione"

    La funzione $f(x)=1-x^{2}+\log|x|$ è definita per $x\neq0$ quindi il suo dominio naturale $D$ è dato da

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    Si tratta di una funzione pari il chè consentirebbe di studiarla solo per $x>0$.

    Da $f(x)\sim-x^{2}$ per $x\to\pm\infty$ si ha

    $$
    \lim_{x\to\pm\infty}f(x)=-\infty
    $$

    e si evince che la funzione non ha asintoti obliqui. Si ha poi

    $$
    \lim_{x\to0^{\pm}}f(x)=-\infty,
    $$

    in particolare la retta $x=0$ (asse $y$) è asintoto verticale.

    La funzione è derivabile infinite volte su tutto $D$. La derivata prima vale

    $$
    f'(x)=-2x+\frac{1}{x}=\frac{1-2x^{2}}{x}.
    $$

    Analizzandone il segno per $x>0$, si ha $f'(\sqrt{1/2})=0$, $f'(x)>0$ per $0<x<\sqrt{1/2}$, $f'(x)<0$ per $x>\sqrt{1/2}$. Ne segue che $f$ è strettamente crescente su $(0,\sqrt{1/2})$, strettamente decrescente su $(\sqrt{1/2},+\infty)$ e che il punto $x=\sqrt{1/2}$ è di massimo (assoluto) con relativo valore $f(\sqrt{1/2})=1/2-(\log2)/2$. In particolare il grafico incontra l'asse $x$ in due punti di ascissa positiva. Uno di questi punti si ha per $x=1$, l'altro ha ascissa nell'intervallo $(0,\sqrt{1/2})$ e può essere approssimato all'occorrenza con uno degli algoritmi studiati per la ricerca degli zeri di funzioni regolari.

    Lo studio della monotonia e degli estremanti di $f$ per $x<0$ si ottiene per simmetria pari: il punto $x=-\sqrt{1/2}$ è di massimo (assoluto) con relativo valore $f(-\sqrt{1/2})=1/2-(\log2)/2$ etc., etc.

    La derivata seconda vale

    $$
    f''(x)=-2-\frac{1}{x^{2}}
    $$

    ed è negativa per ogni $x\in D$. In particolare $f$ è strettamente concava sia in $(-\infty,0)$ che su $(0,+\infty)$.

    Si raccolgano ora tutti gli elementi precedenti in un grafico qualitativo, rispettando la simmetria assiale del grafico rispetto all'asse $y$ (simmetria pari).
