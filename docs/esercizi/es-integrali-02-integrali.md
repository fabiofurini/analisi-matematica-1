---
title: "Integrali"
---

# Integrali

<div class="info-capitolo" markdown>

**Esercizi · Integrali** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-5-serie.pdf)

</div>

!!! esercizio "Esercizio 1"

    Determinare la misura dell'insieme $A\subset{\R}^{2}$ così definito:

    $$
    A=\left\{(x,y)\in{\R}^{2};-1<x<1,x^{2}-1\leq y\leq\frac{x+1}{x+2}\right\}
    $$

??? soluzione "Soluzione"

    Si tratta di calcolare

    $$
    \int_{-1}^{1}\left(\frac{x+1}{x+2}-(x^{2}-1)\right)dx.
    $$

    Si ha

    $$
    \begin{array}{l}\ds\int_{-1}^{1}\left(\frac{x+1}{x+2}+1-x^{2}\right)dx=\int_{-1}^{1}\left(2-\frac{1}{x+2}-x^{2}\right)dx\\
    \\
    \ds=\left[2x-\log(x+2)-\frac{x^{3}}{3}\right]_{-1}^{1}=\frac{10}{3}-\log3.\end{array}
    $$

!!! esercizio "Esercizio 2"

    Calcolare

    $$
    \int_{0}^{1}\frac{e^{x}+e^{x/2}}{1+e^{x}}dx
    $$

??? soluzione "Soluzione"

    Con la sostituzione $y=e^{x/2}$, $x=2\log y$, $dx=\frac{2}{y}dy$, si ottiene

    $$
    \begin{array}{l}\ds\int_{0}^{1}\frac{e^{x}+e^{x/2}}{1+e^{x}}dx=2\int_{1}^{\sqrt{e}}\frac{y^{2}+y}{(1+y^{2})y}dy\\
    \\
    \ds=2\int_{1}^{\sqrt{e}}\frac{y+1}{1+y^{2}}dy=[\log(y^{2}+1)+2\arctan y]_{1}^{\sqrt{e}}\\
    \\
    \ds=\log\frac{e+1}{2}+2\arctan\sqrt{e}-\frac{\pi}{2}.
    \end{array}
    $$

!!! esercizio "Esercizio 3"

    Calcolare

    $$
    \int_{-\pi}^{\pi}e^{-|x|}\cos x \; dx
    $$

??? soluzione "Soluzione"

    Osserviamo che la funzione è pari, in quanto $f(-x)=f(x)$ per ogni $x\in[-\pi,\pi]$. Quindi, per proprietà di simmetria

    $$
    \int_{-\pi}^{\pi}e^{-|x|}\cos x \; dx=2\int_{0}^{\pi}e^{-|x|}\cos x \; dx=2\int_{0}^{\pi}e^{-x}\cos x \; dx
    $$

    dove nell'ultima uguaglianza si è sfruttato il fatto che $|x|=x$ per ogni $x\geq 0$. Si ha, integrando due volte per parti

    $$
    \begin{array}{l}\ds I=\int e^{-x}\cos x \; dx=e^{-x}\sin x + \int e^{-x}\sin x \; dx\\
    \\
    \ds=e^{-x}\sin x - e^{-x}\cos x - \int e^{-x}\cos x \; dx= e^{-x}\sin x - e^{-x}\cos x - I \\
    \end{array}
    $$

    da cui

    $$
    2I=e^{-x}\sin x - e^{-x}\cos x
    $$

    ed infine

    $$
    I=\int e^{-x}\cos x \; dx=\frac{e^{-x}\sin x - e^{-x}\cos x}{2}+c
    $$

    Per il calcolo dell'integrale definito, valutiamo la primitiva fra $0$ e $\pi$, non dimenticando il fattore $2$ che era presente davanti all'integrale:

    $$
    2[I]_0^\pi=e^{-\pi}+1
    $$

!!! esercizio "Esercizio 4"

    Calcolare

    $$
    \int_{0}^{2}\frac{e^{x}\log(1+e^x)}{1+e^{x}}dx
    $$

??? soluzione "Soluzione"

    Con la sostituzione $1+e^x=t$, $e^x\;dx=dt$, si ottiene

    $$
    \begin{array}{l}\ds\int_{0}^{2}\frac{e^{x}\log(1+e^x)}{1+e^{x}}dx=\int_{2}^{e^2+1}\frac{\log t}{t}dt\\
    \\
    \ds=\left[\frac{\log^2 t}{2}\right]_{2}^{e^2+1}=\frac{1}{2}(\log^2(e^2+1)-\log^2 2)
    \end{array}
    $$

!!! esercizio "Esercizio 5"

    Stabilire se il seguente integrale

    $$
    \int_{0}^{1}\frac{\sin^3\sqrt{x}}{e^{x}(1-\cos x)}dx
    $$

    esiste finito.

??? soluzione "Soluzione"

    Poiché la funzione integranda è continua in $(0,1]$, per stabilire se l'integrale proposto converge è sufficiente studiare il comportamento di $f$ in un intorno destro di $x=0$. Per $x\to0^+$ si ha

    $$
    f(x)\sim\frac{(\sqrt{x})^3}{\frac{1}{2}x^2}=\frac{x^{3/2}}{\frac{1}{2}x^2}=2\frac{1}{x^{1/2}}
    $$

    Poiché $1/2<1$, dal criterio del confronto asintotico l'integrale proposto esiste finito; più formalmente, la funzione $f(x)$ è impropriamente integrabile in un intorno destro dell'origine.

!!! esercizio "Esercizio 6"

    Stabilire se il seguente integrale

    $$
    \int_{0}^{+\infty}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx
    $$

    esiste finito.

??? soluzione "Soluzione"

    La funzione integranda è continua in $(0,+\infty)$. Per stabilire se l'integrale proposto converge è necessario studiare il comportamento della funzione integranda in un intorno destro di $x=0$, dove il denominatore non è definito, ed in un intorno di $+\infty$. È bene riscrivere tale integrale di terza specie come

    $$
    \int_{0}^{1}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx+\int_{1}^{+\infty}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx
    $$

    al fine di evidenziare il duplice studio da svolgere. Per $x\to0^+$ si ha

    $$
    f(x)\sim\frac{x^2}{3x^{3/2}}=\frac{1}{3x^{-1/2}}
    $$

    Poiché $-1/2<1$, dal criterio del confronto asintotico la funzione $f(x)$ è impropriamente integrabile in un intorno destro dell'origine. Verifichiamo, ora, che lo sia anche in un intorno di $+\infty$. Per $x\to+\infty$ si ha

    $$
    f(x)\sim\frac{x^2}{5x^5\frac{\pi}{2}}=\frac{2}{5\pi}\frac{1}{x^3}
    $$

    Poiché $3>1$, dal criterio del confronto asintotico la funzione $f(x)$ è impropriamente integrabile anche in un intorno di $+\infty$. Complessivamente, dunque, l'integrale improprio esiste finito. Osserviamo che, in realtà, poiché $f(x)\sim\frac{\sqrt{x}}{3}$, per $x\to0^+$, la funzione è prolungabile per continuità in $x=0$ e si può porre, per definizione, $f(0)=0$.

!!! esercizio "Esercizio 7"

    Stabilire per quali valori del parametro $\alpha \in \mathbb{R}$ il seguente integrale improprio

    $$
    \int_{0}^{1}\frac{\log(1+x^2)}{x^\alpha(1+x^3)}dx
    $$

    esiste finito.

??? soluzione "Soluzione"

    La funzione integranda è continua in $(0,1)$. Per stabilire per quali valori di $\alpha \in \mathbb{R}$ l'integrale proposto converge basta studiare il comportamento dell'integranda in un intorno destro di $x=0$, dove il denominatore non è definito. Per $x\to0^+$ si ha

    $$
    f(x)\sim\frac{x^2}{x^\alpha}=\frac{1}{x^{\alpha-2}}
    $$

    che è impropriamente integrabile per $\alpha-2<1$, cioè per $\alpha<3$.

!!! esercizio "Esercizio 8"

    Dato il seguente integrale improprio

    $$
    \int_{1}^{+\infty}\frac{x\arctan\left(x^2\right)\log^\alpha\left(1+\frac{1}{x}\right)}{x^4+1}dx
    $$

    studiarne la convergenza al variare di $\alpha\in\mathbb{R}$. Successivamente, per $\alpha=0$, calcolarlo mediante la definizione.

??? soluzione "Soluzione"

    La funzione integranda è continua in $[1,+\infty)$. Per stabilire per quali valori di $\alpha \in \mathbb{R}$ l'integrale proposto converge basta studiare il comportamento dell'integranda in un intorno di $+\infty$. Per $x\to+\infty$ si ha

    $$
    f(x)\sim\frac{x}{x^4}\frac{\pi}{2}\left(\frac{1}{x}\right)^\alpha=\frac{\pi}{2}\frac{1}{x^{\alpha+3}}
    $$

    dove si è reso necessario l'utilizzo delle stime asintotiche $x^4+1\sim x^4$, $\log^\alpha\left(1+\frac{1}{x}\right)\sim\left(\frac{1}{x}\right)^\alpha$, $x\to+\infty$. Dal criterio del confronto asintotico, l'integrale improprio esiste finito se $\alpha+3>1$, ovvero $\alpha>-2$.

    Per $\alpha=0$, l'integrale diventa

    $$
    \int_{1}^{+\infty}\frac{x\arctan(x^2)}{x^4+1}dx
    $$

    È possibile procedere per sostituzione, ponendo $\arctan(x^2)=t$, $\frac{x}{1+x^4}\; dx=\frac{1}{2}\; dt$, ottenendo

    $$
    \int_{1}^{+\infty}\frac{x\arctan\left(x^2\right)}{x^4+1}\;dx=\int_{\pi/4}^{\pi/2}\frac{t}{2}\;dt=\frac{3}{64}\pi^2
    $$

!!! esercizio "Esercizio 9"

    Dopo aver stabilito se la funzione è sommabile o meno, calcolare i seguenti integrali

    $$
    \ds{\rm (a)}\ \int_{-1}^{0}\frac{1}{(1-x)\sqrt{1+x}}dx,~~~
    {\rm (b)}\ \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx,~~~
    {\rm (c)}\ \int_{0}^{+\infty}xe^{-x^{2}}dx
    $$

    $$
    {\rm (d)}\ \int_{0}^{+\infty}x^{3}e^{-x^{2}}dx,~~~
    {\rm (e)}\ \int_{4}^{+\infty}\frac{1}{x(x-3)}dx
    $$

    Si tratta di tutte funzioni continue e positive nei rispettivi intervalli di integrazione, quindi di tutte funzioni integrabili. Ciascun integrale rappresenta la misura del sottografico. In tutti i casi, il sottografico è un insieme non limitato del piano, l'integrale vale quindi o un numero positivo o $+\infty$. Ricordiamo che la funzione si dice sommabile quando è integrabile con integrale finito.

??? soluzione "Soluzione"

    (a) La funzione

    $$
    f(x)=\frac{1}{(1-x)\sqrt{1+x}}
    $$

    è continua nell'intervallo $(-1,0]$. Bisogna, quindi, studiarne il comportamento in un intorno destro di $x=-1$. Per $x\to-1^+$ si ha

    $$
    f(x)\sim \frac{1}{\sqrt{1+x}}=\frac{1}{(1+x)^\frac{1}{2}},\ \ x\to-1^{+}
    $$

    quindi la funzione è sommabile in $(-1,0]$ per il criterio del confronto, in quanto $\frac{1}{2}<1$. Questo significa

    $$
    \int_{-1}^{0}f(x)dx=\lim_{\varepsilon\to0^{+}}\int_{-1+\varepsilon}^{0}f(x)dx
    $$

    e che tale limite esiste, finito e positivo.

    Ponendo $y=\sqrt{1+x}$, $x=y^{2}-1$, $dx=2y\ dy$, otteniamo

    $$
    \int_{-1+\varepsilon}^{0}f(x)dx=\int_{\sqrt{\varepsilon}}^{1}\frac{2}{2-y^{2}}dy,
    $$

    quindi, tenendo conto che $\sqrt{\varepsilon}\to0$ per $\varepsilon\to0$, abbiamo

    $$
    \int_{-1}^{0}f(x)dx=\lim_{\delta\to0^{+}}\int_{\delta}^{1}\frac{2}{2-y^{2}}dy=\int_{0}^{1}\frac{2}{2-y^{2}}dy.
    $$

    Si noti che, in questo caso, dopo il cambiamento di variabile, abbiamo ottenuto l'integrale di una funzione limitata partendo dall'integrale di una non limitata.

    Coi fratti semplici, tenendo conto anche di $|y-\sqrt{2}|=\sqrt{2}-y$ nell'intervallo d'integrazione, si ha

    $$
    \frac{2}{2-y^{2}}=-\frac{2}{(y-\sqrt{2})(y+\sqrt{2})}=\frac{1}{\sqrt{2}}\left(\frac{1}{y+\sqrt{2}}-\frac{1}{y-\sqrt{2}}\right),
    $$

    quindi

    $$
    \begin{array}{l}\ds\int_{-1}^{0}f(x)dx=\frac{1}{\sqrt{2}}\int_{0}^{1}\left(\frac{1}{y+\sqrt{2}}-\frac{1}{y-\sqrt{2}}\right)dy\\
    \\
    \ds=\frac{1}{\sqrt{2}}\left[\log\frac{y+\sqrt{2}}{\sqrt{2}-y}\right]_{0}^{1}=\frac{1}{\sqrt{2}}\log\frac{1+\sqrt{2}}{\sqrt{2}-1}.
    \end{array}
    $$

??? soluzione "Soluzione"

    (b) Si ha

    $$
    \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx=\int_{-1}^{0}\frac{1}{(1-x)\sqrt{1+x}}dx+\int_{0}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx
    $$

    dove il primo integrale è finito ed è stato calcolato al punto precedente. L'integrale ora assegnato è quindi finito se e solo se tale è

    $$
    \int_{0}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx.
    $$

    La funzione

    $$
    f(x)=\frac{1}{(1-x)\sqrt{1+x}}
    $$

    è continua e limitata in ogni intervallo $[0,1-\varepsilon]$, $\varepsilon>0$. Si ha poi

    $$
    f(x)\sim \frac{1}{\sqrt{2}}\frac{1}{1-x},\ \ x\to1^{-}
    $$

    quindi la funzione non è sommabile in $[0,1)$ per il criterio del confronto. Questo significa

    $$
    \int_{0}^{1}f(x)dx=\lim_{\varepsilon\to0^{+}}\int_{0}^{1-\varepsilon}f(x)dx=+\infty,
    $$

    quindi anche l'integrale dato vale

    $$
    \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx=+\infty.
    $$

??? soluzione "Soluzione"

    (c) La funzione $f(x)=xe^{-x^{2}}$ è continua e limitata su ogni intervallo $[0,a]$ con $a>0$. Si ha poi

    $$
    f(x)=O\left(\frac{1}{x^{\alpha}}\right),\ \ x\to+\infty,
    $$

    qualunque sia $\alpha>0$, in particolare, scegliendo $\alpha>1$, la funzione è sommabile su $[0,+\infty)$. Questo significa

    $$
    \int_{0}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{0}^{a}f(x)dx
    $$

    e che tale limite esiste, finito e positivo. Infatti

    $$
    \lim_{a\to+\infty}\int_{0}^{a}xe^{-x^{2}}dx=-\frac{1}{2}\lim_{a\to+\infty}[e^{-x^{2}}]_{0}^{a}=
    -\frac{1}{2}\lim_{a\to+\infty}(e^{-a^{2}}-1)=\frac{1}{2}.
    $$

    L'integrale dato vale $1/2$.

??? soluzione "Soluzione"

    (d) La funzione $f(x)=x^{3}e^{-x^{2}}$ è continua e limitata su ogni intervallo $[0,a]$ con $a>0$. Si ha poi

    $$
    f(x)=O\left(\frac{1}{x^{\alpha}}\right),\ \ x\to+\infty,
    $$

    qualunque sia $\alpha>0$, in particolare, scegliendo $\alpha>1$, la funzione è sommabile su $[0,+\infty)$. Questo significa

    $$
    \int_{0}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{0}^{a}f(x)dx
    $$

    e che tale limite esiste, finito e positivo. Infatti, integrando per parti, e tenuto conto dell'integrale calcolato al punto precedente,

    $$
    \begin{array}{l}\ds\lim_{a\to+\infty}\int_{0}^{a}x^{3}e^{-x^{2}}dx=\lim_{a\to+\infty}\left\{-\frac{1}{2}[x^{2}e^{-x^{2}}]_{0}^{a}
    +\int_{0}^{a}xe^{-x^{2}}dx\right\}\\
    \\
    \ds=\lim_{a\to+\infty}\left(-\frac{1}{2}a^{2}e^{-a^{2}}+\int_{0}^{a}xe^{-x^{2}}dx\right)=\frac{1}{2}.
    \end{array}
    $$

    L'integrale dato vale $1/2$.

??? soluzione "Soluzione"

    (e) La funzione $f(x)=\frac{1}{x(x-3)}$ è continua e limitata su ogni intervallo $[4,a]$ con $a>4$. Si ha poi

    $$
    f(x)\sim\frac{1}{x^{2}},\ \ x\to+\infty,
    $$

    quindi la funzione è sommabile su $[4,+\infty)$ per confronto. Questo significa

    $$
    \int_{4}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{4}^{a}f(x)dx
    $$

    e che tale limite esiste, finito e positivo. Infatti, coi fratti semplici,

    $$
    \begin{array}{l}\ds\lim_{a\to+\infty}\int_{4}^{a}\frac{1}{x(x-3)}dx=
    \frac{1}{3}\lim_{a\to+\infty}\int_{4}^{a}\left(\frac{1}{x-3}-\frac{1}{x}\right)dx=
    \frac{1}{3}\lim_{a\to+\infty}\left[\log\frac{x-3}{x}\right]_{4}^{a}\\
    \\
    \ds=\frac{1}{3}\lim_{a\to+\infty}\left(\log\frac{a-3}{a}-\log\frac{1}{4}\right)=-\frac{1}{3}\log\frac{1}{4}=\frac{1}{3}\log4.
    \end{array}
    $$

    L'integrale dato vale $\frac{1}{3}\log4$.

!!! esercizio "Esercizio 10"

    Determinare tutti gli $\alpha\geq0$ per cui la funzione

    $$
    f(x)=\left(\sqrt{1+x}-\sqrt{x}\right)^{\alpha}
    $$

    è sommabile su $[0,+\infty)$

??? soluzione "Soluzione"

    La funzione $f(x)$ è continua e positiva su $[0,+\infty)$, quindi basta analizzare il suo comportamento in un intorno di $+\infty$, ovvero per $x\to+\infty$. Moltiplicando e dividendo per $\left(\sqrt{1+x}+\sqrt{x}\right)^{\alpha}$, si ha

    $$
    f(x)=\frac{1}{\left(\sqrt{1+x}+\sqrt{x}\right)^{\alpha}}\sim\frac{1}{(2\sqrt x)^\alpha}=\frac{1}{2^{\alpha}}\frac{1}{x^{\alpha/2}}, \ x\to+\infty.
    $$

    Per confronto, segue che $f$ è sommabile su $[0,+\infty)$ se e solo se $\alpha/2>1$, quindi se e solo se

    $$
    \alpha>2.
    $$

!!! esercizio "Esercizio 11"

    Dato

    $$
    \int_0^{+\infty}{\frac{\log\left(1+e^{x^2}\right)}{2+3x^{5/2}+x^{3\alpha}+12x} \; dx}
    $$

    stabilire per quali valori di $\alpha>0$ converge, ovvero esiste finito.

??? soluzione "Soluzione"

    La funzione $f(x)$ è continua e positiva su $[0,+\infty)$, quindi basta analizzare il suo comportamento in un intorno di $+\infty$, ovvero per $x\to+\infty$. Si ha

    $$
    f(x)=\frac{\log\left(1+e^{x^2}\right)}{2+3x^{5/2}+x^{3\alpha}+12x}\sim\frac{\log\left(e^{x^2}\right)}{3x^{5/2}+x^{3\alpha}}=\frac{x^2}{3x^{5/2}+x^{3\alpha}} \sim
    $$

    $$
    \sim \left\{ \begin{array}{ll}
             \frac{x^2}{3x^{5/2}}=\frac{1}{3}\frac{1}{x^{1/2}} & \mbox{se $3\alpha<5/2$, ovvero se e solo se $\alpha<5/6$}\vspace{0.5cm}\\
            \frac{x^2}{4x^{5/2}}=\frac{1}{4}\frac{1}{x^{1/2}} & \mbox{se $3\alpha=5/2$, ovvero se e solo se $\alpha=5/6$}\vspace{0.5cm}\\
            \frac{x^2}{x^{3\alpha}}=\frac{1}{x^{3\alpha-2}} & \mbox{se $3\alpha>5/2$, ovvero se e solo se $\alpha>5/6$}
            \end{array} \right.
    $$

    Nei primi due casi, l'integrale improprio diverge per confronto asintotico, in quanto $1/2<1$. Nel terzo caso, invece, esiste finito se e solo se $3\alpha-2>1$, ovvero se e solo se $\alpha>1$. In definitiva, l'integrale improprio esiste finito (converge) per $\alpha>1$, diverge per $\alpha\leq1$.

!!! esercizio "Esercizio 12"

    Dato

    $$
    \int_0^{+\infty}\frac{3+2x^{3/2}+5x^{4\alpha}+x^{1/2}}{\log\left(1+e^{x^5}\right)} \; dx
    $$

    stabilire per quali valori di $\alpha>0$ converge, ovvero esiste finito.

??? soluzione "Soluzione"

    La funzione $f(x)$ è continua e positiva su $[0,+\infty)$, quindi basta analizzare il suo comportamento in un intorno di $+\infty$, ovvero per $x\to+\infty$. Si ha

    $$
    f(x)=\frac{3+2x^{3/2}+5x^{4\alpha}+x^{1/2}}{\log\left(1+e^{x^5}\right)}\sim\frac{2x^{3/2}+5x^{4\alpha}}{\log\left(e^{x^5}\right)}=\frac{2x^{3/2}+5x^{4\alpha}}{x^5} \sim
    $$

    $$
    \sim \left\{ \begin{array}{ll}
             \frac{2x^{3/2}}{x^5}=2\frac{1}{x^{7/2}} & \mbox{se $4\alpha<3/2$, ovvero se e solo se $\alpha<3/8$}\vspace{0.5cm}\\
            \frac{7x^{3/2}}{x^5}=7\frac{1}{x^{7/2}} & \mbox{se $4\alpha=3/2$, ovvero se e solo se $\alpha=3/8$}\vspace{0.5cm}\\
            \frac{5x^{4\alpha}}{x^{5}}=5\frac{1}{x^{5-4\alpha}} & \mbox{se $4\alpha>3/2$, ovvero se e solo se $\alpha>3/8$}
            \end{array} \right.
    $$

    Nei primi due casi, l'integrale improprio converge per confronto asintotico, in quanto $7/2>1$. Nel terzo caso, invece, esiste finito se e solo se $5-4\alpha>1$, ovvero se e solo se $\alpha<1$. In definitiva, l'integrale improprio esiste finito (converge) per $\alpha<1$, diverge per $\alpha\geq1$.

!!! esercizio "Esercizio 13"

    Dato

    $$
    \int_1^{+\infty}\frac{\arctan x}{\sqrt{x}(1+x^\alpha)} \; dx
    $$

    stabilire per quali valori di $\alpha\in\mathbb{R}$ converge, ovvero esiste finito.

??? soluzione "Soluzione"

    La funzione $f(x)$ è continua e positiva su $[1,+\infty)$, quindi basta analizzare il suo comportamento in un intorno di $+\infty$, ovvero per $x\to+\infty$. Si ha

    $$
    f(x)\sim\left\{ \begin{array}{ll}
             \frac{\pi/2}{x^{1/2}+x^{1/2+\alpha}}\sim\frac{\pi}{2x^{1/2}} & \mbox{se $\alpha<0$}\vspace{0.5cm}\\
            \frac{\pi/2}{2x^{1/2}}=\frac{\pi}{4x^{1/2}} & \mbox{se $\alpha=0$}\vspace{0.5cm}\\
            \frac{\pi/2}{x^{1/2}+x^{1/2+\alpha}}\sim\frac{\pi}{2x^{1/2+\alpha}} & \mbox{se $\alpha>0$}
            \end{array} \right.
    $$

    Nei primi due casi, l'integrale improprio diverge per confronto asintotico, in quanto $1/2<1$. Nel terzo caso, invece, esiste finito se e solo se $\frac{1}{2}+\alpha>1$, ovvero se e solo se $\alpha>\frac{1}{2}$. In definitiva, l'integrale improprio esiste finito (converge) in un intorno $U(+\infty)$ per $\alpha>\frac{1}{2}$, diverge per $\alpha\leq\frac{1}{2}$.

!!! esercizio "Esercizio 14"

    Operare il cambiamento di variabile $y=\sqrt{x}$ in

    $$
    \int_4^{+\infty}\frac{1}{\sqrt{x}(\sqrt{x}+2)(\sqrt{x}+6)}dx
    $$

    e scrivere il corrispondente integrale in $dy$. Determinare poi il valore dell'integrale.

??? soluzione "Soluzione"

    Da $y=\sqrt{x}$, $x=y^{2}$, $dx=2y\ dy$, si ottiene

    $$
    \int_4^{+\infty}\frac{1}{\sqrt{x}(\sqrt{x}+2)(\sqrt{x}+6)}dx=\int_{2}^{+\infty}\frac{2}{(y+2)(y+6)}dy.
    $$

    Coi fratti semplici,

    $$
    \begin{array}{l}\ds\int_{2}^{+\infty}\frac{2}{(y+2)(y+6)}dy=\lim_{a\to+\infty}\int_{2}^{a}\frac{2}{(y+2)(y+6)}dy\\
    \\
    \ds=\frac{1}{2}\lim_{a\to+\infty}\int_{2}^{a}\left(\frac{1}{y+2}-\frac{1}{y+6}\right)dy=
    \frac{1}{2}\lim_{a\to+\infty}\left[\log\frac{y+2}{y+6}\right]_{2}^{a}\\
    \\
    \ds=\frac{1}{2}\lim_{a\to+\infty}\left(\log\frac{a+2}{a+6}-\log\frac{1}{2}\right)=-\frac{1}{2}\log\frac{1}{2}=\frac{1}{2}\log2.
    \end{array}
    $$

!!! esercizio "Esercizio 15"

    Data la funzione

    $$
    f:[1,+\infty)\rightarrow{\R},\ \ f(x)=\int_1^x\frac{(t^3-27)(t-1)^3}{t^7+1}dt
    $$

    $\bullet$ Scrivere $f'(x)$.

    $\bullet$ Trovare gli eventuali punti di massimo o minimo relativo interni al dominio specificando il segno dei valori assunti in tali punti.

    $\bullet$ Dire se $\displaystyle\lim_{x\to+\infty}f(x)$ esiste e se è finito o meno motivando la risposta.

    $\bullet$ Stabilire per quale valore di $\alpha$ risulta finito e diverso da $0$

    $$
    \lim_{x\to1}(x-1)^\alpha f(x)
    $$

    motivando la risposta.

??? soluzione "Soluzione"

    Per il Teorema fondamentale del calcolo integrale

    $$
    f'(x)=\frac{(x^3-27)(x-1)^3}{x^7+1}.
    $$

??? soluzione "Soluzione"

    La derivata prima si annulla nell'estremo $x=1$ del dominio e nel punto interno $x=3$. Risulta negativa per $1<x<3$, positiva per $x>3$. Il punto $x=3$ è di minimo (assoluto) interno. Il valore corrispondente

    $$
    f(3)=\int_1^3\frac{(t^3-27)(t-1)^3}{t^7+1}dt
    $$

    è negativo come si deduce dal fatto che $f(1)=0$ e che $f$ è strettamente decrescente in $[1,3]$. Alla stessa conclusione si giunge direttamente osservando che la funzione sotto il segno di integrale è negativa nell'intervallo $[1,3)$.

??? soluzione "Soluzione"

    La funzione $f$ è strettamente crescente in $(3,+\infty)$, quindi il limite esiste, finito oppure $+\infty$.

    Per definizione,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{(t^3-27)(t-1)^3}{t^7+1}dt,
    $$

    quindi la domanda equivale a chiedere se la funzione

    $$
    g(t)=\frac{(t^3-27)(t-1)^3}{t^7+1}
    $$

    è sommabile su $[1,+\infty)$ o meno.

    La funzione $g(t)$ è continua in $[1,+\infty)$ quindi basta esaminare il suo comportamento per $t\to+\infty$. Si ha

    $$
    g(t)\sim\frac{1}{t},\ \ t\to+\infty,
    $$

    da cui la funzione non è sommabile su $[1,+\infty)$.

    Concludendo, $\displaystyle\lim_{x\to+\infty}f(x)=+\infty$.

??? soluzione "Soluzione"

    Si ha $\ds\lim_{x\to1}f(x)=f(1)=0$, quindi per $\alpha\geq0$ il limite proposto è zero. Per $\alpha<0$, diciamo $\alpha=-\beta$ con $\beta>0$, il limite proposto

    $$
    \lim_{x\to1^{+}}\frac{f(x)}{(x-1)^{\beta}}
    $$

    ha la forma indeterminata $\frac{0}{0}$. Applicando le regole di De L'Hospital, abbiamo

    $$
    \begin{array}{l}\ds\lim_{x\to1^{+}}\frac{f(x)}{(x-1)^{\beta}}=\lim_{x\to1^{+}}\frac{f'(x)}{\beta(x-1)^{\beta-1}}\\
    \\
    \ds=\lim_{x\to1^{+}}\frac{(x^3-27)(x-1)^3}{\beta(x-1)^{\beta-1}(x^7+1)}=-\frac{13}{\beta}\lim_{x\to1^{+}}\frac{(x-1)^{3}}{(x-1)^{\beta-1}}.
    \end{array}
    $$

    Tale limite esiste per ogni $\beta>0$ ma risulta finito e diverso da zero, come richiesto, se e solo se $\beta=4$ (ed in tale caso vale $-13/4$).

    Concludendo, il limite proposto esiste finito e diverso da zero se e solo se $\alpha=-4$.

!!! esercizio "Esercizio 16"

    Calcolare

    $$
    \displaystyle\int_{0}^{+\infty} \frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}dx
    $$

    Dire poi come si possa anticipare, senza l' ausilio di primitive, la sommabilità della funzione nell'intervallo indicato.

??? soluzione "Soluzione"

    La funzione

    $$
    f(x)=\frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}
    $$

    è continua e positiva in $(0,+\infty)$, non limitata per $x\to0$ e l'intervallo di integrazione non è limitato. Scritto

    $$
    \int_{0}^{+\infty}f(x)dx=\int_{0}^{1}f(x)dx+\int_{1}^{+\infty}f(x)dx,
    $$

    occorre e basta esaminare i comportamenti asintotici di $f(x)$ per $x\to0$ e per $x\to+\infty$. Si ha

    $$
    f(x)\sim\frac{1}{4}\frac{1}{\sqrt{x}},\ \ x\to0;\ \ \ \ f(x)\sim\frac{1}{x^{3/2}},\ \ x\to+\infty.
    $$

    Dunque, $f(x)$ è sommabile su $(0,+\infty)$ perché lo è sia su $(0,1]$ che su $[1,+\infty)$ per confronto.

    Possiamo calcolare il valore con la sostituzione $y=\sqrt{x}$, $x=y^{2}$, $dx=2y\ dy$:

    $$
    \begin{array}{l}
    \ds\int_{0}^{+\infty} \frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}dx=\int_{0}^{+\infty} \frac{2}{(y+1)(y+4)}dy\\
    \\
    \ds=\frac{2}{3}\int_{0}^{+\infty}\left(\frac{1}{y+1}-\frac{1}{y+4}\right)dy=
    \frac{2}{3}\lim_{a\to+\infty}\left[\log\frac{y+1}{y+4}\right]_{0}^{a}\\
    \\
    \ds=\frac{2}{3}\lim_{a\to+\infty}\left(\log\frac{a+1}{a+4}-\log\frac{1}{4}\right)=-\frac{2}{3}\log\frac{1}{4}=\frac{2}{3}\log4.
    \end{array}
    $$

!!! esercizio "Esercizio 17"

    Sia

    $$
    \displaystyle f:[1/2,+\infty[\longrightarrow {\R}, \ f(x)= \int_{1}^{x}\frac{\log t}{t^2}dt
    $$

    $\bullet$ Determinare gli eventuali estremanti locali e l'andamento di monotonia di $f$.

    $\bullet$ Motivare l' esistenza di un asintoto orizzontale per $f$.

    $\bullet$ Calcolare $\displaystyle\lim_{x\to 1}\frac{f(x)}{(x-1)^2}$.

??? soluzione "Soluzione"

    Per il Teorema fondamentale del calcolo integrale,

    $$
    f'(x)=\frac{\log x}{x^2}
    $$

    per ogni $x$ nel dominio assegnato $[1/2,+\infty)$. La derivata si annulla per $x=1$, risulta negativa per $1/2\leq x<1$, positiva per $x>1$. La funzione $f$ è quindi strettamente decrescente in $[1/2,1)$, strettamente crescente in $(1,+\infty)$. Il punto $x=1$ è di minimo assoluto con valore $f(1)=0$, in particolare la funzione assume solo valori non negativi (positivi per ogni $x\neq1$ nel dominio assegnato).

??? soluzione "Soluzione"

    Si deve motivare che $\ds\lim_{x\to+\infty}f(x)$ esiste finito. Per definizione,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{\log t}{t^2}dt,
    $$

    quindi si deve motivare il fatto che la funzione

    $$
    g(t)=\frac{\log t}{t^2}
    $$

    è sommabile su $[1,+\infty)$.

    La funzione $g(t)$ è continua in $[1,+\infty)$ quindi basta esaminare il suo comportamento per $t\to+\infty$. Dal momento che $\log t$ è infinito di ordine inferiore a qualunque potenza, si ha

    $$
    g(t)=O\left(\frac{1}{t^{2-\varepsilon}}\right),\ \ t\to+\infty,
    $$

    per ogni $\varepsilon>0,$da cui, scegliendo $\varepsilon$ tale che $2-\varepsilon>1$, la funzione $g$ è sommabile su $[1,+\infty)$.

??? soluzione "Soluzione"

    Si ha $\ds\lim_{x\to1}f(x)=f(1)=0$, quindi il limite proposto ha la forma indeterminata $\frac{0}{0}$. Applicando le regole di De L'Hospital, abbiamo

    $$
    \begin{array}{l}\ds\lim_{x\to1}\frac{f(x)}{(x-1)^{2}}=\lim_{x\to1}\frac{f'(x)}{2(x-1)}\\
    \\
    \ds=\lim_{x\to1}\frac{\log x}{2(x-1)x^{2}}=\frac{1}{2}\lim_{x\to1}\frac{\log x}{x-1}=\frac{1}{2}\lim_{y\to0}\frac{\log(1+y)}{y}=\frac{1}{2}.
    \end{array}
    $$

!!! esercizio "Esercizio 18"

    Consideriamo

    $$
    \int_{2}^{+\infty} \frac{x+2}{x(x+1)(x-1)}dx.
    $$

    Prima di calcolarlo motivare il fatto che tale integrale esiste finito.

??? soluzione "Soluzione"

    La funzione

    $$
    f(x)= \frac{x+2}{x(x+1)(x-1)}
    $$

    è continua e positiva su $[2,+\infty)$ ed ha il comportamento asintotico

    $$
    f(x)\sim\frac{1}{x^{2}},\ \ x\to+\infty,
    $$

    quindi è impropriamente integrabile in un intorno di $+\infty$ per confronto.

    Dai fratti semplici

    $$
    \frac{x+2}{x(x+1)(x-1)}=-\frac{2}{x}+\frac{1}{2}\frac{1}{x+1}+\frac{3}{2}\frac{1}{x-1},
    $$

    segue la primitiva su $[2,+\infty)$

    $$
    \int \frac{x+2}{x(x+1)(x-1)}dx=\log\frac{(x+1)^{1/2}(x-1)^{3/2}}{x^{2}}.
    $$

    Quindi

    $$
    \begin{array}{l}\ds\int_{2}^{+\infty}\frac{x+2}{x(x+1)(x-1)}dx=\lim_{a\to+\infty}\left[\log\frac{(x+1)^{1/2}(x-1)^{3/2}}{x^{2}}\right]_{2}^{a}\\
    \\
    \ds=\lim_{a\to+\infty}\left(\log\frac{(a+1)^{1/2}(a-1)^{3/2}}{a^{2}}-\log\frac{3^{1/2}}{4}\right)=\log\frac{4}{\sqrt{3}}.
    \end{array}
    $$

!!! esercizio "Esercizio 19"

    Utilizzando il cambiamento di variabile $y=e^x$ calcolare

    $$
    \int_0^{+\infty}\frac{e^x}{(e^x+2)(e^x+3)}dx.
    $$

??? soluzione "Soluzione"

    Da $y=e^{x}$, $x=\log y$, $dx=\frac{1}{y}dy$ e dai fratti semplici, segue

    $$
    \begin{array}{l}\ds\int_0^{+\infty}\frac{e^x}{(e^x+2)(e^x+3)}dx=\int_{1}^{+\infty}\frac{1}{(y+2)(y+3)}dy\\
    \\
    \ds=\int_{1}^{+\infty}\left(\frac{1}{y+2}-\frac{1}{y+3}\right)dy=\lim_{a\to+\infty}\left[\log\frac{y+2}{y+3}\right]_{1}^{a}\\
    \\
    \ds=\lim_{a\to+\infty}\left(\log\frac{a+2}{a+3}-\log\frac{3}{4}\right)=\log\frac{4}{3}
    \end{array}
    $$

!!! esercizio "Esercizio 20"

    Data la funzione

    $$
    f:[1,+\infty)\rightarrow{\R},\ \ f(x)=\displaystyle\int_1^x\frac{t^3-27}{t^5+1}dt
    $$

    $\bullet$ Scrivere $f'(x)$.

    $\bullet$ Determinare gli eventuali punti di massimo o minimo relativo.

    $\bullet$ Scrivere $f''(x)$.

    $\bullet$ Per motivare la presenza di flessi o meno, fare a parte un breve studio della funzione polinomiale $y=-2x^5+135x^2+3$ riportandone un grafico qualitativo. Il polinomio in questione è uno dei fattori di $f''(x)$.

    $\bullet$ Dire, dal punto precedente, se $f$ ha punti di flesso. (Non si chiede di trovare esplicitamente tali punti ma solo dire se ci sono e quanti sono e di localizzarli rispetto ad altri punti notevoli come punti di massimo o minimo relativo).

    $\bullet$ Dire se $\lim_{x\to+\infty}f(x)$ esiste e se è finito o meno motivando la risposta (nel caso che sia finito non si chiede di calcolarlo).

??? soluzione "Soluzione"

    Per il Teorema fondamentale del calcolo integrale,

    $$
    f'(x)=\frac{x^3-27}{x^5+1}
    $$

    per tutti gli $x$ nel dominio assegnato $[1,+\infty)$.

??? soluzione "Soluzione"

    La derivata si annulla per $x=3$, è negativa in $[1,3)$, positiva in $(3,+\infty)$. La funzione è strettamente decrescente  in $[1,3)$, strettamente crescente in $(3,+\infty)$. Il punto $x=3$ è di minimo assoluto, con valore

    $$
    f(3)=\int_1^3\frac{t^3-27}{t^5+1}dt,
    $$

    calcolabile coi fratti semplici se necessario, di segno negativo in quanto $f(1)=0$ ed $f$ strettamente decrescente  in $[1,3)$. Si può determinare il segno di $f(3)$ anche direttamente osservando che la funzione sotto il segno di integrale è strettamente negativa per $t\in[1,3)$.

??? soluzione "Soluzione"

    $$
    f''(x)=\frac{x^{2}(-2x^5+135x^2+3)}{(x^{5}+1)^{2}}.
    $$

??? soluzione "Soluzione"

    Si ha $\ds\lim_{x\to\pm\infty}y(x)=\mp\infty$. Poi $y'(x)=-10x(x^{3}-27)$, da cui $y(x)$ è strettamente decrescente in $(-\infty,0)$, il punto $x=0$ è di minimo relativo con valore $y(0)=3$,  $y(x)$ è strettamente crescente in $(0,3)$, il punto $x=3$ è di massimo relativo con valore $y(3)=732$,  $y(x)$ è strettamente decrescente in $(3,+\infty)$. In particolare, $y(x)$ ha un unico zero per $x=\alpha$ con $\alpha\in(3,+\infty)$, $y(x)>0$ per $x<\alpha$, $y(x)<0$ per $x>\alpha$.

??? soluzione "Soluzione"

    Nel dominio assegnato, la derivata seconda ha lo stesso segno di $-2x^5+135x^2+3$. Per quanto visto al punto precedente, la funzione $f$ ha un flesso per $x=\alpha$, con $\alpha\in(3,+\infty)$, è strettamente convessa in $(1,\alpha)$, strettamente concava $(\alpha,+\infty)$.

??? soluzione "Soluzione"

    La funzione è strettamente crescente in $(3,+\infty)$ quindi il limite esiste, finito oppure $+\infty$.

    Per definizione,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{t^3-27}{t^5+1}dt,
    $$

    quindi la domanda equivale a chiedere se la funzione

    $$
    g(t)=\frac{t^3-27}{t^5+1}
    $$

    è sommabile su $[1,+\infty)$ o meno.

    La funzione $g(t)$ è continua in $[1,+\infty)$ quindi basta esaminare il suo comportamento per $t\to+\infty$. Si ha

    $$
    g(t)\sim\frac{1}{t^{2}},\ \ t\to+\infty,
    $$

    da cui la funzione è sommabile su $[1,+\infty)$.

    Concludendo, $\displaystyle\lim_{x\to+\infty}f(x)$ esiste finito. Se necessario, è possibile calcolarlo coi fratti semplici.
