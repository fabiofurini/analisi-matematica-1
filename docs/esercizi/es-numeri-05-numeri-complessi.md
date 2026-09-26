---
title: "Numeri complessi"
---

# Numeri complessi

<div class="info-capitolo" markdown>

**Esercizi · Numeri e logica** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-numeri-05-numeri-complessi.pdf)

</div>

!!! esercizio "Esercizio 1"

    Porre in forma algebrica i seguenti numeri complessi $z$ identificandone la parte reale e la parte immaginaria. Per ciascuno, poi, trovare il modulo, il coniugato ed il reciproco.

    $$
    z=\frac{2+5i}{1+i} ~~~~~~~~~~~~
    \ z=\frac{2+i}{1-3i}
    $$

??? soluzione "Soluzione"

    $$
    z=\frac{2+5i}{1+i}\cdot\frac{1-i}{1-i}=\frac{7+3i}{2}=\frac{7}{2}+i\frac{3}{2}
    $$

    da cui

    $$
    \Re z=\frac{7}{2},\ \Im z=\frac{3}{2},\ |z|=\sqrt{\frac{49}{4}+\frac{9}{4}}=\frac{\sqrt{58}}{2},\ \bar{z}=\frac{7}{2}-i\frac{3}{2}.
    $$

    Infine

    $$
    z^{-1}=\frac{1}{z}\cdot\frac{\bar{z}}{\bar{z}}=\frac{\bar{z}}{|z|^{2}}=\frac{7-3i}{2}\cdot\frac{4}{58}=\frac{7}{29}-i\frac{3}{29}.
    $$

??? soluzione "Soluzione"

    $$
    z=\frac{2+i}{1-3i}\cdot\frac{1+3i}{1+3i}=\frac{-1+7i}{10}=-\frac{1}{10}+i\frac{7}{10}
    $$

    da cui

    $$
    \Re z=-\frac{1}{10},\ \Im z=\frac{7}{10},\ |z|=\sqrt{\frac{1}{100}+\frac{49}{100}}=\frac{\sqrt{2}}{2},\ \bar{z}=-\frac{1}{10}-i\frac{7}{10}.
    $$

    Infine

    $$
    z^{-1}=\frac{1}{z}\cdot\frac{\bar{z}}{\bar{z}}=\frac{\bar{z}}{|z|^{2}}=-\frac{1+7i}{10}\cdot2=-\frac{1}{5}-i\frac{7}{5}.
    $$

!!! esercizio "Esercizio 2"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    |z|\leq|z-2i|
    $$

??? soluzione "Soluzione"

    Conviene passare alla forma $z=x+iy$, $x,y\in\R$.

    $$
    \begin{array}{l}
    |x+iy|\leq|x+i(y-2)|\\
    \\
    |x+iy|^{2}\leq|x+i(y-2)|^{2}\\
    \\
    x^{2}+y^{2}\leq x^{2}+(y-2)^{2}\\
    \\
    0\leq -4y+4\\
    \\
    y\leq1.
    \end{array}
    $$

    Rappresentando le soluzioni nel piano cartesiano, si ha un semipiano chiuso.

!!! esercizio "Esercizio 3"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    |z-(3+i)|\leq2
    $$

??? soluzione "Soluzione"

    Tale disequazione è soddisfatta da quei numeri complessi $z=x+iy$ che, nel piano di Gauss, sono rappresentati da quei punti $P(x, y)$ che distano dal punto $(3, 1)$ di una quantità minore o uguale a 2.

    Ossia, tutti e soli i punti del <strong>cerchio chiuso</strong> di centro $C(3, 1)$ e raggio 2 (attenzione, non è la circonferenza, bensì il cerchio, vale a dire la parte interna unita al bordo). La circonferenza ha equazione:

    $$
    \gamma: \quad (x-3)^2+(y-1)^2=4
    $$

    mentre il cerchio chiuso ha equazione:

    $$
    (x-3)^2+(y-1)^2\leq4
    $$

    Alternativamente, la disuguaglianza si può trattare attraverso la sostituzione $z=x+iy$, ottenendo

    $$
    |x+iy-3-i|\leq2
    $$

    in cui, raccogliendo l'unità immaginaria

    $$
    |x-3+i(y-1)|\leq2
    $$

    Applicando la definizione di modulo di numero complesso, si ha

    $$
    \sqrt{(x-3)^2+(y-1)^2}\leq2
    $$

    Potendo elevare al quadrato ambo i membri non negativi, si ottiene in definitiva:

    $$
    (x-3)^2+(y-1)^2\leq4
    $$

!!! esercizio "Esercizio 4"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    (1-i)z-(1+i)\bar{z}=i
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}
    (1-i)(x+iy)-(1+i)(x-iy)=i\\
    \\
    x+y-ix+iy-x-y-ix+iy=i\\
    \\
    i(2y-2x)=i\\
    \\
    2y-2x=1.
    \end{array}
    $$

    Rappresentando le soluzioni nel piano cartesiano, si ha una retta.

!!! esercizio "Esercizio 5"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    |z+\bar{z}|+|z-\bar{z}|\leq2
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}
    |z+\bar{z}|+|z-\bar{z}|\leq2\\
    \\
    2|\Re z|+2|\Im z|\leq2\\
    \\
    |x|+|y|\leq1.
    \end{array}
    $$

    Rappresentando le soluzioni nel piano cartesiano, si ha un quadrato chiuso di vertici $\pm1$, $\pm i$.

!!! esercizio "Esercizio 6"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    \Im(z)-|z+\bar{z}|^{2}<1
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}
    \Im(z)-|z+\bar{z}|^{2}<1\\
    \\
    \Im(z)-4\;|\Re z|^{2}<1\\
    \\
    y<4\;x^{2}+1.
    \end{array}
    $$

    Rappresentando le soluzioni nel piano cartesiano, si ha la regione aperta al di sotto della parabola $y=4x^{2}+1$.

!!! esercizio "Esercizio 7"

    Determinare tutti i numeri complessi $z$ che verificano:

    $$
    \left\{\begin{array}{l}z\bar{z}\leq2\\
    \\
    z+\bar{z}\leq2\end{array}\right.
    $$

??? soluzione "Soluzione"

    $$
    \left\{\begin{array}{l}|z|^{2}\leq2\\
    \\
    2\Re z\leq2\end{array}\right.
    ~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}x^{2}+y^{2}\leq2\\
    \\
    x\leq1\end{array}\right.
    $$

    Rappresentando le soluzioni nel piano cartesiano, si ha la parte di piano comune al cerchio chiuso di centro l'origine e raggio $\sqrt{2}$ ed al semipiano chiuso a sinistra della retta verticale $x=1$.

!!! esercizio "Esercizio 8"

    Il sistema in $\C$

    $$
    \left\{\begin{array}{l}z^{2}+\bar{z}^{2}=0\\
    \\
    |\Re(z)|+|\Im(z)|=1\end{array}\right.
    $$

    ha:

    $$
    \noindent(a)~~ {\rm due~soluzioni} ~~~~~~~ (b) ~~{\rm tre~soluzioni}
    $$

    $$
    \noindent(c)~~  {\rm quattro~soluzioni} ~~~~~~~ (d)~~  {\rm nessuna~delle~altre~risposte ~\`e~corretta}
    $$

??? soluzione "Soluzione"

    Posto $z=x+iy$, $x,y\in\R$, si ha

    $$
    \begin{array}{l}\left\{\begin{array}{l}(x+iy)^{2}+(x-iy)^{2}=0\\
    \\
    |x|+|y|=1\end{array}\right.\\
    \\
    \left\{\begin{array}{l}x^{2}-y^{2}+2ixy+x^{2}-y^{2}-2ixy=0\\
    \\
    |x|+|y|=1\end{array}\right.\\
    \\
    \left\{\begin{array}{l}x^{2}=y^{2}\\
    \\
    |x|+|y|=1\end{array}\right.
    ~~~
    \left\{\begin{array}{l}|x|=|y|\\
    \\
    |x|+|y|=1\end{array}\right.
    ~~~~
    \left\{\begin{array}{l}|x|=1/2\\
    \\
    |y|=1/2\end{array}\right.\end{array}
    $$

    Si ottengono i quattro punti $(1+i)/2$, $(-1+i)/2$, $(1-i)/2$, $-(1+i)/2$. La risposta corretta è (c).

!!! esercizio "Esercizio 9"

    Le soluzioni $z=x+iy$ dell'equazione complessa

    $$
    z^{2}-z\bar{z}+iz=-3+2i
    $$

    soddisfano

    $$
    {\rm (a)}~~ \left(x+\frac{1}{6}\right)^{2}+\left(y+\frac{1}{4}\right)^{2}=1~~~~~~~~~~ {\rm (b)}~~ y=\frac{2}{3}x+1
    $$

    $$
    {\rm (c)}~~ \left(x-\frac{1}{6}\right)^{2}+\left(y-\frac{1}{4}\right)^{2}=1 ~~~~~~~~~~~~~{\rm (d)}~~ y=\frac{3}{2}x
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}
    (x+iy)^{2}-(x^{2}+y^{2})+ix-y=-3+2i\\
    \\
    -2y^{2}-y+i(x+2xy)=-3+2i\\
    \\
    \left\{\begin{array}{l}2y^{2}+y-3=0\\
    \\
    x+2xy=2\end{array}\right.
    ~~~~~~
    \left\{\begin{array}{l}y=1\vee y=-3/2\\
    \\
    x=2/(1+2y)\end{array}\right.
    \end{array}
    $$

    Si ottengono i due punti $(2/3)+i$, $-1-i(3/2)$ che giacciono sulla retta $y=(3/2)x$. La risposta corretta è (d).

!!! esercizio "Esercizio 10"

    Trovare modulo ed argomento principale di

    $$
    {\rm (a)}\ z=-1-i\sqrt{3}\ \ ,\ \ {\rm (b)}\ z=-4i.
    $$

??? soluzione "Soluzione"

    (a) Si ha $|z|=\sqrt{1+3}=2$. L'argomento principale ${\rm Arg}\ z$ è l'unico $\vartheta\in[-\pi,\pi)$ tale che

    $$
    \cos\vartheta=\Re z/|z|=-1/2,\ \sin\vartheta=\Im z/|z|=-\sqrt{3}/2
    $$

    quindi ${\rm Arg}\ z=-2\pi/3$.

??? soluzione "Soluzione"

    (b) Si ha $|z|=4$. L'argomento principale ${\rm Arg}\ z$ è l'unico $\vartheta\in[-\pi,\pi)$ tale che

    $$
    \cos\vartheta=\Re z/|z|=0,\ \sin\vartheta=\Im z/|z|=-1
    $$

    quindi ${\rm Arg}\ z=-\pi/2$.

!!! esercizio "Esercizio 11"

    Sia

    $$
    w=\frac{z+1-i}{z+i}
    $$

    Determinare, individuandoli sul piano di Gauss, i numeri complessi $z$ affinché $w$ sia un numero immaginario puro.

??? soluzione "Soluzione"

    Il numero complesso $w$ è definito per $z \neq -i$. Inoltre

    $$
    w=\frac{z+1-i}{z+i}\cdot\frac{z-i}{z-i}=\frac{z^2+z-1+i(-2z-1)}{z^2+1}
    $$

    Ossia, separando la parte reale di $w$ dalla sua parte immaginaria:

    $$
    w=\frac{z^2+z-1}{z^2+1}+i\frac{-2z-1}{z^2+1}
    $$

    Il numero complesso $w$ è immaginario puro quando $\Re(w)=0$, vale a dire

    $$
    \Re(w)=\frac{z^2+z-1}{z^2+1}=0
    $$

    Tale equazione fratta, sotto condizione $z \neq \pm \sqrt{-1}$, ovvero $z \neq \pm i$, restituisce i numeri reali

    $$
    z_{1}=-\frac{1}{2}+\frac{\sqrt{5}}{2}, \; z_{2}=-\frac{1}{2}-\frac{\sqrt{5}}{2}
    $$

    che, sul piano di Gauss, sono rappresentabili come due punti appartenenti all'asse dei reali. In definitiva, $w$ è immaginario puro in corrispondenza dei due valori di $z$ trovati.

!!! esercizio "Esercizio 12"

    Sia $z=\sqrt{3}-3i$. Le soluzioni $w$ con $\Im(w)<0$ dell'equazione

    $$
    w^{6}=|z|(z+\bar{z})
    $$

    sono in numero di:

    $$
    \noindent(a)~~ {\rm due} ~~~~~~~ (b) ~~{\rm tre}
    $$

    $$
    \noindent(c)~~  {\rm nessuna} ~~~~~~~ (d)~~  {\rm nessuna~delle~altre~risposte ~\`e~corretta}
    $$

??? soluzione "Soluzione"

    Si ha $|z|=\sqrt{12}$, $z+\bar{z}=2\sqrt{3}$ quindi

    $$
    w^{6}=12.
    $$

    Le radici seste complesse di un numero reale positivo sono sei, a due a due opposte e due tra loro sono reali. Delle quattro rimanenti due hanno parte immaginaria positiva e due parte immaginaria negativa. La risposta corretta è (a). Vogliamo comunque determinarne i valori. Posto $w=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|12|=12$, ${\rm arg} 12=2k\pi$, $k\in \Z$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{6}=12\\
    \\
    6\vartheta=2k\pi
    \end{array}\right.
    ~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=12^{1/6}\\
    \\
    \vartheta=k\pi/3
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le sei radici

    $$
    w_{k}=12^{1/6}(\cos k\pi/3+i\sin k\pi/3),\ \ \ k=0,1,2,3,4,5,
    $$

    cioè

    $$
    \begin{array}{l}w_{0}=12^{1/6},\ w_{1}=12^{1/6}(1/2+i\sqrt{3}/2),\ w_{2}=12^{1/6}(-1/2+i\sqrt{3}/2)\\
    \\
    w_{3}=-12^{1/6},\ w_{4}=12^{1/6}(-1/2-i\sqrt{3}/2),\ w_{5}=12^{1/6}(1/2-i\sqrt{3}/2).\end{array}
    $$

    Le due con parte immaginaria negativa sono $w_{4}$ e $w_{5}$.

!!! esercizio "Esercizio 13"

    Risolvere il seguente sistema nella incognita $z\in \C$.

    $$
    \left\{\begin{array}{l}z^{6}=i\\
    \\
    \Re(z)\Im(z)<0\end{array}\right.
    $$

??? soluzione "Soluzione"

    Risolviamo prima l'equazione $z^{6}=i$. Posto $z=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|i|=1$, ${\rm arg}(i)=\pi/2+2k\pi$, $k\in{\bf Z}$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{6}=1\\
    \\
    6\vartheta=\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=1\\
    \\
    \vartheta=\pi/12+k\pi/3.
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le sei radici

    $$
    z_{k}=\cos((\pi+4k\pi)/12)+i\sin ((\pi+4k\pi)/12),\ \ \ k=0,1,2,3,4,5.
    $$

    Quelle che soddisfano la condizione $\Re(z)\Im(z)<0$ (punti del II o IV quadrante) sono:

    $$
    z_{2}=-\sqrt{1/2}+i\sqrt{1/2},\ z_{5}=\sqrt{1/2}-i\sqrt{1/2}.
    $$

!!! esercizio "Esercizio 14"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    \ z^{3}+8=0
    $$

??? soluzione "Soluzione"

    L'equazione da risolvere è, chiaramente,

    $$
    z^3=-8
    $$

    Posto $z=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|-8|=8$, ${\rm arg}(-8)=\pi+2k\pi$, $k\in \Z$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=8\\
    \\
    3\vartheta=\pi+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=(2k+1)\pi/3.
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le tre radici

    $$
    z_{k}=2\cos((2k+1)\pi/3)+2i\sin ((2k+1)\pi/3),\ \ \ k=0,1,2,
    $$

    cioè

    $$
    z_{0}=1+\sqrt{3}i,\ z_{1}=-2,\ z_{2}=1-\sqrt{3}i.
    $$

!!! esercizio "Esercizio 15"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    \ z^{3}=-27i
    $$

??? soluzione "Soluzione"

    Posto $z=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|-27i|=27$, ${\rm arg}(-27i)=-\pi/2+2k\pi$, $k\in \Z$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=27\\
    \\
    3\vartheta=-\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=3\\
    \\
    \vartheta=(4k-1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le tre radici

    $$
    z_{k}=3\cos((4k-1)\pi/6)+3i\sin ((4k-1)\pi/6),\ \ \ k=0,1,2,
    $$

    cioè

    $$
    z_{0}=3\sqrt{3}/2-3i/2,\ z_{1}=3i,\ z_{2}=-3\sqrt{3}/2-3i/2.
    $$

!!! esercizio "Esercizio 16"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    z^{5}+(3+i\sqrt{3})z=0
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    z(z^{4}+3+i\sqrt{3})=0
    $$

    quindi una soluzione è $z=0$. Le altre quattro si trovano risolvendo

    $$
    z^{4}=-3-i\sqrt{3}.
    $$

    Posto $z=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che

    $$
    |-3-i\sqrt{3}|=2\sqrt{3},\ {\rm arg}(-3-i\sqrt{3})=-5\pi/6+2k\pi,k \in \Z
    $$

    otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{4}=12^{1/2}\\
    \\
    4\vartheta=-5\pi/6+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=12^{1/8}\\
    \\
    \vartheta=-5\pi/24+k\pi/2.
    \end{array}\right.
    \end{array}
    $$

    Oltre alla soluzione $z=0$, abbiamo quindi le ulteriori quattro radici

    $$
    z_{k}=12^{1/8}\cos((12k-5)\pi/24)+12^{1/8}i\sin ((12k-5)\pi/24),\ \ \ k=0,1,2,3.
    $$

!!! esercizio "Esercizio 17"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    \left(\frac{z+i}{1+i}\right)^{3}=-8i
    $$

??? soluzione "Soluzione"

    Posto $w=(z+i)/(1+i)$, risolviamo $w^{3}=-8i$. Scrivendo $w=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|-8i|=8$, ${\rm arg}(-8i)=-\pi/2+2k\pi$, $k\in \Z$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=8\\
    \\
    3\vartheta=-\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=(4k-1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le tre radici

    $$
    w_{k}=2\cos((4k-1)\pi/6)+2i\sin ((4k-1)\pi/6),\ \ \ k=0,1,2,
    $$

    cioè

    $$
    w_{0}=\sqrt{3}-i,\ w_{1}=2i,\ w_{2}=-\sqrt{3}-i.
    $$

    Tornando alla variabile $z$, da $z=(1+i)w-i$, le tre soluzioni dell'equazione data sono

    $$
    z_{0}=\sqrt{3}+1+i\sqrt{3}-2i,\ \ z_{1}=-2+i,\ \ z_{2}=1-\sqrt{3}-i\sqrt{3}-2i.
    $$

!!! esercizio "Esercizio 18"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    \left(\frac{z-i}{i}\right)^{4}=-16
    $$

??? soluzione "Soluzione"

    Da $i^{4}=1$ abbiamo $(z-i)^{4}=-16$. Posto $w=z-i$, risolviamo $w^{4}=-16$. Scrivendo $w=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|-16|=16$, ${\rm arg}(-16)=-\pi+2k\pi$, $k\in \Z$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{4}=16\\
    \\
    4\vartheta=-\pi+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=-\pi/4+k\pi/2.
    \end{array}\right.
    \end{array}
    $$

    Abbiamo quindi le quattro radici

    $$
    w_{k}=2\cos((2k-1)\pi/4)+2i\sin ((2k-1)\pi/4),\ \ \ k=0,1,2,3,
    $$

    cioè

    $$
    w_{0}=\sqrt{2}-i\sqrt{2},\ w_{1}=\sqrt{2}+i\sqrt{2},\ w_{2}=-\sqrt{2}+i\sqrt{2},\ w_{3}=-\sqrt{2}-i\sqrt{2}.
    $$

    Tornando alla variabile $z$, da $z=w+i$, le quattro soluzioni dell'equazione data sono

    $$
    z_{0}=\sqrt{2}-i\sqrt{2}+i,\ z_{1}=\sqrt{2}+i\sqrt{2}+i,\ z_{2}=-\sqrt{2}+i\sqrt{2}+i,\ z_{3}=-\sqrt{2}-i\sqrt{2}+i.
    $$

!!! esercizio "Esercizio 19"

    Risolvere le seguenti equazioni di variabile complessa $z$.

    $$
    z^5=-\bar{z}
    $$

??? soluzione "Soluzione"

    L'equazione può essere vista come

    $$
    z^5=(-1)\bar{z}
    $$

    Posto $z=r(\cos\vartheta+i\sin\vartheta)$, tenendo conto che $|\bar{z}|=r$, ${\rm arg}(\bar{z})=-\vartheta+2k\pi$, $k\in \Z$, e ricordando che $-1=e^{i\pi}$, otteniamo

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{5}=r\\
    \\
    5\vartheta=\pi-\vartheta+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=0, \, r=1\\
    \\
    \vartheta=(2k+1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    A questo punto,

    - per $r=0$, otteniamo $z_{0}=0$;

    - per $r=1$, otteniamo le radici $z=\cos((2k+1)\pi/6)+i\sin ((2k+1)\pi/6),\ \ \ k=0,1,2,3,4,5.$

!!! esercizio "Esercizio 20"

    L'equazione

    $$
    z^{4}-2z^{3}+4z^{2}-2z+3=0
    $$

    ha $z_{1}=i$ per soluzione. Indicando con $z_{2},z_{3},z_{4}$ le altre soluzioni, si ha:

    $$
    \noindent(a)~~ \Im(z_{1}z_{2}z_{3}z_{4})=0 ~~~~~~~ (b) ~~\Re(z_{1}+z_{2}+z_{3}+z_{4})=0
    $$

    $$
    \noindent(c)~~  \Re\left((z_{1}+z_{2}+z_{3}+z_{4})^{-1}\right)=1/2 ~~~~~~~ (d)~~  {\rm nessuna~delle~altre~risposte ~\`e~corretta}
    $$

??? soluzione "Soluzione"

    L'equazione è a coefficienti reali quindi le soluzioni sono coniugate, in particolare un'altra soluzione è $z_{2}=-i$. Ne segue che il polinomio

    $$
    p(z)=z^{4}-2z^{3}+4z^{2}-2z+3
    $$

    è divisibile per $(z-i)(z+i)$ cioè per $z^{2}+1$. Eseguendo la divisione si ottiene

    $$
    p(z)=(z^{2}+1)(z^{2}-2z+3)
    $$

    quindi abbiamo tra le soluzioni anche le radici di

    $$
    z^{2}-2z+3=0
    $$

    che sono $z_{3}=1-i\sqrt{2}$, $z_{4}=1+i\sqrt{2}$.

    Riassumendo, le soluzioni dell'equazione data sono

    $$
    z_{1}=i, \ z_{2}=-i,\ z_{3}=1-i\sqrt{2},\ z_{4}=1+i\sqrt{2}.
    $$

    Dal momento che $z_{1}+z_{2}+z_{3}+z_{4}=2$ e $z_{1}z_{2}z_{3}z_{4}=3$, le risposte corrette sono (a) e (c).

!!! esercizio "Esercizio 21"

    Siano $z_{h}$, $h=1,\ldots,6$ le soluzioni di

    $$
    z^{6}-(8-i)z^{3}-8i=0.
    $$

    Si ha:

    $$
    \noindent(a)~~ \sum_{h=1}^{6}\Re(z_{h})=-1 ~~~~~~~ (b) ~~\sum_{h=1}^{6}\Im(z_{h})=-1
    $$

    $$
    \noindent(c)~~  \sum_{h=1}^{6}\Re(z_{h})=1 ~~~~~~~ (d)~~  \sum_{h=1}^{6}\Im(z_{h})=0
    $$

    $$
    \noindent(e)~~  \sum_{h=1}^{6}\Re(z_{h})=2 ~~~~~~~ (f)~~  {\rm nessuna~delle~altre~risposte ~\`e~corretta}
    $$

??? soluzione "Soluzione"

    Conviene fattorizzare in

    $$
    (z^{3}-8)(z^{3}+i)=0
    $$

    poi risolvere le due equazioni

    $$
    z^{3}=8,\ z^{3}=-i
    $$

    con l'usuale metodo più volte illustrato nelle soluzioni degli esercizi precedenti. Si ottengono i valori:

    $$
    \begin{array}{l}z_{1}=2,\ z_{2}=-1+i\sqrt{3},\ z_{3}=-1-i\sqrt{3},\\
    \\
    z_{4}=\sqrt{3}/2-i/2,\ z_{5}=i,\ z_{6}=-\sqrt{3}/2-i/2.\end{array}
    $$

    La risposta corretta è (d).
