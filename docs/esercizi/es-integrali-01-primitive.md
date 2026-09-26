---
title: "Primitive"
---

# Primitive

<div class="info-capitolo" markdown>

**Esercizi · Integrali** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-integrali-01-primitive.pdf)

</div>

!!! esercizio "Esercizio 1"

    Calcolare le primitive indicate negli intervalli in cui risultano definite

    $$
    {\rm (a)}\ \int\left(2x+\sqrt[3]{x}-\frac{2}{\sqrt{x}}\right)dx, ~~~{\rm (b)}\ \int\frac{x-x^{4}}{\sqrt{x}}dx
    $$

    $$
    {\rm (c)}\ \int\tan^{2}x\ dx,~~~~ {\rm (d)}\ \int(3-x)^{5}dx
    $$

    $$
    {\rm (e)}\ \int\frac{1}{2-3x}dx, ~~~{\rm (f)}\ \int x^{2}e^{x^{3}+1}dx
    $$

    $$
    {\rm (g)}\ \int x\sqrt{x^{2}+1}dx, ~~~~{\rm (h)}\ \int\frac{\sin2x}{1+\sin^{2}x}dx
    $$

    $$
    {\rm (i)}\ \int\frac{e^{x}}{e^{x}+3}dx, ~~~{\rm (j)}\ \int\frac{1}{\tan x} dx
    $$

??? soluzione "Soluzione"

    (a)

    $$
    \begin{array}{l}\ds\int\left(2x+\sqrt[3]{x}-\frac{2}{\sqrt{x}}\right)dx=\int(2x+x^{1/3}-2x^{-1/2})dx\\
    \\
    \ds=x^{2}+\frac{3}{4}x^{4/3}-4x^{1/2}+c=x^{2}+\frac{3}{4}\sqrt[3]{x^{4}}-4\sqrt{x}+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $I\subset(0,+\infty)$.

??? soluzione "Soluzione"

    (b)

    $$
    \begin{array}{l}\ds\int\frac{x-x^{4}}{\sqrt{x}}dx=\int(x^{1/2}-x^{7/2})dx=\\
    \\
    \ds\frac{2}{3}x^{3/2}-\frac{2}{9}x^{9/2}+c=\frac{2}{3}x\sqrt{x}-\frac{2}{9}x^{4}\sqrt{x}+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $I\subset(0,+\infty)$.

??? soluzione "Soluzione"

    (c)

    $$
    \int\tan^{2}x\ dx=\int[(1+\tan^{2}x)-1]dx=\tan x-x+c
    $$

    in un qualunque intervallo $I$ che non contenga punti del tipo $\pi/2+k\pi$ con $k\in \Z$.

??? soluzione "Soluzione"

    (d)

    $$
    \int(3-x)^{5}dx=-\int(x-3)^{5}dx=-\frac{1}{6}(x-3)^{6}+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (e)

    $$
    \int\frac{1}{2-3x}dx=-\int\frac{1}{3x-2}dx=-\frac{1}{3}\log|3x-2|+c
    $$

    in un qualunque intervallo $I$ tale che $2/3\notin I$.

??? soluzione "Soluzione"

    (f)

    $$
    \int x^{2}e^{x^{3}+1}dx=\frac{1}{3}e^{x^{3}+1}+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (g)

    $$
    \int x\sqrt{x^{2}+1}dx=\frac{1}{3}(x^{2}+1)^{3/2}+c=\frac{1}{3}(x^{2}+1)\sqrt{x^{2}+1}+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (h)

    $$
    \int\frac{\sin2x}{1+\sin^{2}x}dx=\int\frac{2\sin x\cos x}{1+\sin^{2}x}dx=\log(1+\sin^{2}x)+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (i)

    $$
    \int\frac{e^{x}}{e^{x}+3}dx=\log(e^{x}+3)+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (j)

    $$
    \int\frac{1}{\tan x} dx=\int\frac{\cos x}{\sin x}dx=\log|\sin x|+c
    $$

    in un qualunque intervallo $I$ che non contenga punti del tipo $k\pi$ con $k\in \Z$.

!!! esercizio "Esercizio 2"

    Calcolare le seguenti primitive integrando per parti

    $$
    {\rm (a)}\ \int x\sin x\ dx, ~~~~{\rm (b)}\ \int x^{2}\cos x\ dx
    $$

    $$
    {\rm (c)}\ \int\arcsin x\ dx, ~~~~{\rm (d)}\ \int\sin^{2}x\ dx
    $$

??? soluzione "Soluzione"

    (a)

    $$
    \int x\sin x\ dx=-x\cos x+\int \cos x\ dx=-x\cos x+\sin x+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (b) Integrando per parti due volte di seguito, si ha

    $$
    \begin{array}{l}\ds\int x^{2}\cos x\ dx=x^{2}\sin x-2\int x\sin x\ dx=\\
    \\
    \ds x^{2}\sin x+2x\cos x-2\int\cos x\ dx=x^{2}\sin x+2x\cos x-2\sin x+c\end{array}
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (c) Prendendo la funzione costante $1$ come fattore da integrare, si ha

    $$
    \int\arcsin x\ dx=x\arcsin x-\int\frac{x}{\sqrt{1-x^{2}}}dx=x\arcsin x+\sqrt{1-x^{2}}+c
    $$

    in un qualunque intervallo $I\subset(-1,1)$.

??? soluzione "Soluzione"

    (d) Integrando per parti ed utilizzando $\cos^{2}x=1-\sin^{2}x$, si ottiene

    $$
    \begin{array}{l}\ds\int\sin^{2}x\ dx=-\sin x\cos x+\int\cos^{2}x\ dx\\
    \\
    \ds=-\sin x\cos x+\int 1\ dx-\int\sin^{2}x\ dx\end{array}
    $$

    da cui

    $$
    \int\sin^{2}x\ dx=-\sin x\cos x+x-\int\sin^{2}x\ dx+c
    $$

    quindi, portando $\int\sin^{2}x\ dx$ a primo membro,

    $$
    2\int\sin^{2}x\ dx=-\sin x\cos x+x+c
    $$

    ed infine, denotando ancora con $c$ la costante arbitraria $c/2$,

    $$
    \int\sin^{2}x\ dx=-\frac{1}{2}\sin x\cos x+\frac{1}{2}x+c
    $$

    in un qualunque intervallo $I$ di $\R$.

!!! esercizio "Esercizio 3"

    Calcolare le seguenti primitive integrando per sostituzione

    $$
    {\rm (a)}\ \int\frac{e^{x}-1}{e^{x}+1}dx,~~~ {\rm (b)}\ \int\frac{\sqrt{x}}{1+x}dx,~~~{\rm (c)}\ \int x\sqrt{x+1}dx
    $$

??? soluzione "Soluzione"

    (a) Ponendo $y=e^{x}$, $y>0, x\in\R$, si ha $x=\log y$ e si scrive $dx=\frac{1}{y}dy$, quindi

    $$
    \int\frac{e^{x}-1}{e^{x}+1}dx=\int\frac{y-1}{y(y+1)}dy.
    $$

    Coi fratti semplici, otteniamo

    $$
    \frac{y-1}{y(y+1)}=-\frac{1}{y}+\frac{2}{y+1}
    $$

    da cui, tenendo conto di $y>0$,

    $$
    \int\frac{y-1}{y(y+1)}dy=-\log y+2\log(y+1)+c.
    $$

    Ne segue, sostituendo di nuovo $y=e^{x}$,

    $$
    \int\frac{e^{x}-1}{e^{x}+1}dx=-\log e^{x}+2\log(e^{x}+1)+c=-x+2\log(e^{x}+1)+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (b) Ponendo $y=\sqrt{x}$, $x,y>0$, si ha $x=y^{2}$ e si scrive $dx=2y\ dy$, quindi

    $$
    \int\frac{\sqrt{x}}{1+x}dx=2\int\frac{y^{2}}{1+y^{2}}dy.
    $$

    Da

    $$
    \frac{y^{2}}{y^{2}+1}=\frac{y^{2}+1-1}{y^{2}+1}=1-\frac{1}{y^{2}+1}
    $$

    si ha poi

    $$
    2\int\frac{y^{2}}{1+y^{2}}dy=2y-2\arctan y+c.
    $$

    Ne segue, sostituendo di nuovo $y=\sqrt{x}$,

    $$
    \int\frac{\sqrt{x}}{1+x}dx=2\sqrt{x}-2\arctan\sqrt{x}+c
    $$

    in un qualunque intervallo $I\subset(0,+\infty)$.

??? soluzione "Soluzione"

    (c) Ponendo $y=\sqrt{x+1}$, $x>-1,y>0$, si ha $x=y^{2}-1$ e si scrive $dx=2y\ dy$, quindi

    $$
    \int x\sqrt{x+1}dx=2\int(y^{2}-1)y^{2}\ dy=2\int(y^{4}-y^{2})dy=\frac{2}{5}y^{5}-\frac{2}{3}y^{3}+c.
    $$

    Ne segue, sostituendo di nuovo $y=\sqrt{x+1}$,

    $$
    \int x\sqrt{x+1}dx=\frac{2}{5}(x+1)^{5/2}-\frac{2}{3}(x+1)^{3/2}+c
    $$

    in un qualunque intervallo $I\subset(-1,+\infty)$.

!!! esercizio "Esercizio 4"

    Calcolare le seguenti primitive di funzioni razionali

    $$
    {\rm (a)}\ \int\frac{5}{x^{2}+2x+1}dx,~~~
    {\rm (b)}\ \int\frac{1}{x^{2}+x+1}dx,~~~
    {\rm (c)}\ \int\frac{x}{x^{2}+x+1}dx,~~~
    {\rm (d)}\ \int\frac{x^{3}+1}{x^{2}-3x+2}dx
    $$

    $$
    {\rm (e)}\ \int\frac{x}{x^{3}+3x^{2}+3x+1}dx,~~~
    {\rm (f)}\ \int\frac{1}{x^{4}-1}dx,~~~
    {\rm (g)}\ \int\frac{x+1}{x^{3}-x^{2}}dx,~~~
    {\rm (h)}\ \int\frac{1}{x^{3}+1}dx
    $$

??? soluzione "Soluzione"

    (a) L'integrale dato è immediato:

    $$
    \int\frac{5}{x^{2}+2x+1}dx=\int\frac{5}{(x+1)^{2}}dx=-\frac{5}{x+1}+c
    $$

    in un qualunque intervallo $I$ tale che $-1\notin I$.

??? soluzione "Soluzione"

    (b) Scrivendo il denominatore, irriducibile, come somma di quadrati:

    $$
    \int\frac{1}{x^{2}+x+1}dx=\int\frac{1}{(x+1/2)^{2}+3/4}dx=
    \frac{2}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)\right]+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (c) Utilizzando anche l'esercizio precedente:

    $$
    \begin{array}{l}\ds\int\frac{x}{x^{2}+x+1}dx=\frac{1}{2}\int\frac{2x+1}{x^{2}+x+1}dx-\frac{1}{2}\int\frac{1}{x^{2}+x+1}dx=\\
    \\
    \ds\frac{1}{2}\log(x^{2}+x+1)-\frac{1}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)\right]+c\end{array}
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (d) Eseguiamo la divisione euclidea:

    $$
    \frac{x^{3}+1}{x^{2}-3x+2}=x+3+\frac{7x-5}{x^{2}-3x+2}.
    $$

    Impostando i fratti semplici

    $$
    \frac{7x-5}{x^{2}-3x+2}=\frac{7x-5}{(x-1)(x-2)}=\frac{A}{x-1}+\frac{B}{x-2},
    $$

    si ottiene

    $$
    A=-2,\ B=9.
    $$

    Concludendo:

    $$
    \begin{array}{l}\ds\int\frac{x^{3}+1}{x^{2}-3x+2}dx=\int\left(x+3-\frac{2}{x-1}+\frac{9}{x-2}\right)dx=\\
    \\
    \ds\frac{1}{2}x^{2}+3x-2\log|x-1|+9\log|x-2|+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $1\notin I$, $2\notin I$.

??? soluzione "Soluzione"

    (e) Impostiamo i fratti semplici:

    $$
    \frac{x}{x^{3}+3x^{2}+3x+1}=\frac{x}{(x+1)^{3}}=\frac{A}{x+1}+\frac{B}{(x+1)^{2}}+\frac{C}{(x+1)^{3}}.
    $$

    Si ottiene

    $$
    A=0,\ B=1,\ C=-1.
    $$

    Concludendo

    $$
    \begin{array}{l}\ds\int\frac{x}{x^{3}+3x^{2}+3x+1}dx=\int\left(\frac{1}{(x+1)^{2}}-\frac{1}{(x+1)^{3}}\right)dx\\
    \\
    \ds=-\frac{1}{x+1}+\frac{1}{2}\frac{1}{(x+1)^{2}}+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $-1\notin I$.

??? soluzione "Soluzione"

    (f) Impostiamo i fratti semplici:

    $$
    \frac{1}{x^{4}-1}=\frac{1}{(x-1)(x+1)(x^{2}+1)}=\frac{A}{x-1}+\frac{B}{x+1}+\frac{Cx+D}{x^{2}+1}.
    $$

    Si ottiene

    $$
    A=\frac{1}{4},\ B=-\frac{1}{4},\ C=0,\ D=-\frac{1}{2}.
    $$

    Concludendo

    $$
    \begin{array}{l}\ds\int\frac{1}{x^{4}-1}dx=\int\left(\frac{1}{4}\frac{1}{x-1}-\frac{1}{4}\frac{1}{x+1}-\frac{1}{2}\frac{1}{x^{2}+1}\right)dx\\
    \\
    \ds=\frac{1}{4}\log|x-1|-\frac{1}{4}\log|x+1|-\frac{1}{2}\arctan x+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $\pm1\notin I$.

??? soluzione "Soluzione"

    (g) Impostiamo i fratti semplici:

    $$
    \frac{x+1}{x^{3}-x^{2}}=\frac{x+1}{x^{2}(x-1)}=\frac{A}{x}+\frac{B}{x^{2}}+\frac{C}{x-1}.
    $$

    Si ottiene

    $$
    A=-2,\ B=-1,\ C=2.
    $$

    Concludendo

    $$
    \begin{array}{l}\ds\int\frac{x+1}{x^{3}-x^{2}}dx=\int\left(-\frac{2}{x}-\frac{1}{x^{2}}+\frac{2}{x-1}\right)dx\\
    \\
    \ds=-2\log|x|+\frac{1}{x}+2\log|x-1|+c\end{array}
    $$

    in un qualunque intervallo $I$ tale che $0,1\notin I$.

??? soluzione "Soluzione"

    (h) Impostiamo i fratti semplici:

    $$
    \frac{1}{x^{3}+1}=\frac{1}{(x+1)(x^{2}-x+1)}=\frac{A}{x+1}+\frac{Bx+C}{x^{2}-x+1}.
    $$

    Si ottiene

    $$
    A=\frac{1}{3},\ B=-\frac{1}{3},\ C=\frac{2}{3}.
    $$

    Quindi

    $$
    \begin{array}{l}\ds\int\frac{1}{x^{3}+1}dx=\int\left(\frac{1}{3}\frac{1}{x+1}+\frac{1}{3}\frac{-x+2}{x^{2}-x+1}\right)dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\int\frac{2x-1}{x^{2}-x+1}dx+\frac{1}{2}\int\frac{1}{x^{2}-x+1}dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\log(x^{2}-x+1)+\frac{1}{2}\int\frac{1}{(x-1/2)^{2}+3/4}dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\log(x^{2}-x+1)+\frac{1}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x-\frac{1}{2}\right)\right]+c
    \end{array}
    $$

    in un qualunque intervallo $I$ tale che $-1\notin I$.

!!! esercizio "Esercizio 5"

    Calcolare le seguenti primitive

    $$
    {\rm (a)}\ \int\frac{e^{x}+1}{e^{2x}+1}dx,~~~
    {\rm (b)}\ \int x^{2}\log(x+1)dx,~~~
    {\rm (c)}\ \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx
    $$

    $$
    {\rm (d)}\ \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx,~~~
    {\rm (e)}\ \int\frac{1}{\cos x}dx,~~~
    {\rm (f)}\ \int\sqrt{4-x^{2}}dx
    $$

??? soluzione "Soluzione"

    (a) Con la sostituzione $y=e^{x}$, $y>0$, $x\in\R$, si ha $x=\log y$, si scrive $dx=\frac{1}{y}dy$, e si ottiene

    $$
    \int\frac{e^{x}+1}{e^{2x}+1}dx=\int\frac{y+1}{y(y^{2}+1)}dy.
    $$

    Impostiamo i fratti semplici:

    $$
    \frac{y+1}{y(y^{2}+1)}=\frac{A}{y}+\frac{By+C}{y^{2}+1}.
    $$

    Si ha

    $$
    A=1,\ B=-1,\ C=1,
    $$

    da cui, tenendo conto anche di $y>0$,

    $$
    \begin{array}{l}\ds\int\frac{y+1}{y(y^{2}+1)}dy=\int\left(\frac{1}{y}-\frac{y}{y^{2}+1}+\frac{1}{y^{2}+1}\right)dy\\
    \\
    \ds=\log y-\frac{1}{2}\log(y^{2}+1)+\arctan y+c.\end{array}
    $$

    Sostituendo poi di nuovo $y=e^{x}$, si ha

    $$
    \int\frac{e^{x}+1}{e^{2x}+1}dx=x-\frac{1}{2}\log(e^{2x}+1)+\arctan e^{x}+c
    $$

    in un qualunque intervallo $I$ di $\R$.

??? soluzione "Soluzione"

    (b) Integrando per parti e calcolando poi l'integrale di una funzione razionale, si ha

    $$
    \begin{array}{l}\ds\int x^{2}\log(x+1)dx=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{3}\int\frac{x^{3}}{x+1}dx\\
    \\
    \ds=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{3}\int(x^{2}-x+1)dx+\frac{1}{3}\int\frac{1}{x+1}dx\\
    \\
    \ds=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{9}x^{3}+\frac{1}{6}x^{2}-\frac{1}{3}x+\frac{1}{3}\log(x+1)+c
    \end{array}
    $$

    in un qualunque intervallo $I\subset(-1,+\infty)$.

??? soluzione "Soluzione"

    (c) Da $\tan x=\frac{\sin x}{\cos x}$ e $\sin^{2}x=1-\cos^{2}x$, si ha

    $$
    \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx=\int\frac{\sin x}{\cos x(1-2\cos^{2}x)}dx.
    $$

    Ponendo ora $y=\cos x$, si scrive $dy=-\sin x\ dx$ e si ottiene

    $$
    \int\frac{\sin x}{\cos x(1-2\cos^{2}x)}dx=\frac{1}{2}\int\frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}dy.
    $$

    Coi fratti semplici, si ha poi

    $$
    \frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}=-\frac{2}{y}+\frac{1}{y-\sqrt{1/2}}+\frac{1}{y+\sqrt{1/2}},
    $$

    da cui

    $$
    \frac{1}{2}\int\frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}=-\log|y|+\frac{1}{2}\log|y^{2}-1/2|+c.
    $$

    Concludendo,

    $$
    \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx=-\log|\cos x|+\frac{1}{2}\log|\cos^{2}x-1/2|+c
    $$

    in un qualunque intervallo $I$ che non contiene punti del tipo $x=\pi/2+k\pi$ oppure del tipo $x=\pi/4+k\pi/2$ con $k$ intero.

??? soluzione "Soluzione"

    (d) Con la sostituzione $y=\sqrt{x}$, $x,y>0$, si ha $x=y^{2}$, si scrive $dx=2y\ dy$ e si ottiene

    $$
    \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx=2\int\frac{y^{3}+y^{2}}{y+2}dy.
    $$

    Integrando la funzione razionale, si ha

    $$
    \begin{array}{l}\ds2\int\frac{y^{3}+y^{2}}{y+2}dy=2\int(y^{2}-y+2)dy-8\int\frac{1}{y+2}dy\\
    \\
    \ds=\frac{2}{3}y^{3}-y^{2}+4y-8\log(y+2)+c.\end{array}
    $$

    Sostituendo di nuovo $y=\sqrt{x}$, si conclude

    $$
    \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx=\frac{2}{3}x\sqrt{x}-x+4\sqrt{x}-8\log(\sqrt{x}+2)+c
    $$

    in un qualunque intervallo $I\subset(0,+\infty)$.

??? soluzione "Soluzione"

    (e) Operando la sostituzione razionalizzante $y=\tan\frac{x}{2}$, $dx=\frac{2}{1+y^{2}}dy$ e tenendo conto di $\cos x=\frac{1-y^{2}}{1+y^{2}}$, si ha

    $$
    \int\frac{1}{\cos x}dx=-2\int\frac{1}{y^{2}-1}dy.
    $$

    Coi fratti semplici, si ha poi

    $$
    -2\int\frac{1}{y^{2}-1}dy=\int\left(\frac{1}{y+1}-\frac{1}{y-1}\right)dy=\log\left|\frac{y+1}{y-1}\right|+c.
    $$

    Tornando a $y=\tan\frac{x}{2}$, si conclude

    $$
    \int\frac{1}{\cos x}dx=\log\left|\frac{\tan(x/2)+1}{\tan(x/2)-1}\right|+c
    $$

    in un qualunque intervallo $I$ che non contiene punti del tipo $x=\pi/2+k\pi$ con $k$ intero.

??? soluzione "Soluzione"

    (f) Operando la sostituzione razionalizzante $x=2\sin y$, $-\pi/2<y<\pi/2$, $-2<x<2$, $dx=2\cos y\ dy$, tenendo conto anche di $\cos y>0$, si ottiene

    $$
    \int\sqrt{4-x^{2}}dx=4\int\cos^{2}y\ dy.
    $$

    Da $4\cos^{2}y=2+2\cos(2y)$, si ha poi

    $$
    4\int\cos^{2}y\ dy=2y+\sin(2y)=2y+2\sin y\cos y+c.
    $$

    Usando ora $\sin y=x/2$, $y=\arcsin(x/2)$, $\cos y=\sqrt{1-\sin^{2}y}=\frac{1}{2}\sqrt{4-x^{2}}$, si conclude

    $$
    \int\sqrt{4-x^{2}}dx=2\arcsin(x/2)+(x/2)\sqrt{4-x^{2}}+c
    $$

    in un qualunque intervallo $I\subset(-2,2)$.

!!! esercizio "Esercizio 6"

    Calcolare i seguenti limiti

    $$
    {\rm (a)}\ \lim_{x\to0^{+}}\frac{1}{x^{3}}\int_{0}^{x^{2}}\log(1+\sqrt{t})dt,~~~
    {\rm (b)}\ \lim_{x\to0^{+}}\frac{1}{x^{4}}\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt
    $$

    $$
    {\rm (c)}\ \lim_{k\to+\infty}\left(2\int_{4}^{4e}\frac{\log(kx)}{x}dx-\log(k(k+1))\right),~~~
    {\rm (d)}\ \lim_{k\to+\infty}\left(\int_{1}^{3}\log(k(x+2))dx-3\log(k+1)\right)
    $$

??? soluzione "Soluzione"

    (a) Ponendo $f(x)=\int_{0}^{x^{2}}\log(1+\sqrt{t})dt$, il limite si presenta nella forma indeterminata $\frac{0}{0}$ data da $\lim_{x\to0^{+}}\frac{f(x)}{x^{3}}$. Siamo nelle ipotesi di utilizzo delle regole di De L'Hospital e possiamo passare al calcolo del limite

    $$
    \lim_{x\to0^{+}}\frac{f'(x)}{3x^{2}}.
    $$

    Calcoliamo la derivata $f'(x)$ con il Teorema fondamentale del calcolo integrale e la regola della derivata di funzione composta:

    $$
    f'(x)=2x\log(1+\sqrt{x^{2}})=2x\log(1+x),\ \ x>0.
    $$

    Concludendo

    $$
    \begin{array}{l}\ds\lim_{x\to0^{+}}\frac{1}{x^{3}}\int_{0}^{x^{2}}\log(1+\sqrt{t})dt=\lim_{x\to0^{+}}\frac{2x\log(1+x)}{3x^{2}}\\
    \\
    \ds=\frac{2}{3}\lim_{x\to0^{+}}\frac{\log(1+x)}{x}=\frac{2}{3}.
    \end{array}
    $$

??? soluzione "Soluzione"

    (b) Ponendo $f(x)=\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt$, il limite si presenta nella forma indeterminata $\frac{0}{0}$ data da $\lim_{x\to0^{+}}\frac{f(x)}{x^{4}}$. Siamo nelle ipotesi di utilizzo delle regole di De L'Hospital e possiamo passare al calcolo del limite

    $$
    \lim_{x\to0^{+}}\frac{f'(x)}{4x^{3}}.
    $$

    Calcoliamo la derivata $f'(x)$ con il Teorema fondamentale del calcolo integrale e la regola della derivata di funzione composta:

    $$
    f'(x)=2x(1-\cos\sqrt{x^{2}})=2x(1-\cos x),\ \ x>0.
    $$

    Concludendo

    $$
    \begin{array}{l}\ds\lim_{x\to0^{+}}\frac{1}{x^{4}}\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt=\lim_{x\to0^{+}}\frac{2x(1-\cos x)}{4x^{3}}\\
    \\
    \ds=\frac{1}{2}\lim_{x\to0^{+}}\frac{1-\cos x}{x^{2}}=\frac{1}{4}.
    \end{array}
    $$

??? soluzione "Soluzione"

    (c) Calcoliamo

    $$
    \begin{array}{l}\ds2\int_{4}^{4e}\frac{\log(kx)}{x}dx=[\log^{2}(kx)]_{4}^{4e}=\log^{2}(4ke)-\log^{2}(4k)\\
    \\
    \ds=(\log(4ke)-\log(4k))(\log(4ke)+\log(4k))\\
    \\
    \ds=\log\frac{4ke}{4k}\log(16k^{2}e)=\log(16k^{2}e).
    \end{array}
    $$

    Ne segue

    $$
    \begin{array}{l}\ds\lim_{k\to+\infty}\left(2\int_{4}^{4e}\frac{\log(kx)}{x}dx-\log(k(k+1))\right)
    =\lim_{k\to+\infty}\log(16k^{2}e)-\log(k(k+1))\\
    \\
    \ds=\lim_{k\to+\infty}\log\frac{16k^{2}e}{k^{2}+k}=
    \log(16e)=1+\log16.
    \end{array}
    $$

??? soluzione "Soluzione"

    (d) Calcoliamo

    $$
    \begin{array}{l}\ds\int_{1}^{3}\log(k(x+2))dx=[x\log(kx+2k)]_{1}^{3}-\int_{1}^{3}\frac{x}{x+2}dx\\
    \\
    \ds=3\log(5k)-\log(3k)-\int_{1}^{3}\left(1-\frac{2}{x+2}\right)dx\\
    \\
    \ds=3\log(5k)-\log(3k)-2+2\log\frac{5}{3}.
    \end{array}
    $$

    Ne segue

    $$
    \begin{array}{l}\ds\lim_{k\to+\infty}\left(\int_{1}^{3}\log(k(x+2))dx-3\log(k+1)\right)\\
    \\
    \ds=\lim_{k\to+\infty}3\log(5k)-\log(3k)-2+2\log\frac{5}{3}-3\log(k+1)\\
    \\
    \ds=\lim_{k\to+\infty}3\log\frac{5k}{k+1}-\log(3k)-2+2\log\frac{5}{3}=-\infty.
    \end{array}
    $$
