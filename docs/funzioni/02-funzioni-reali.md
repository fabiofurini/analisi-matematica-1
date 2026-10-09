---
title: "Funzioni reali di variabile reale"
---

# Funzioni reali di variabile reale

<div class="info-capitolo" markdown>

**Parte 2 · Funzioni · Capitolo 2** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-2-funzioni.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-funzioni-02-funzioni-reali.pdf)

</div>

## 1. Funzione reale di variabile reale

<a id="box-defImmagine-1"></a>

!!! definizione "Definizione 1: funzione reale di variabile reale"

    Una funzione che ha per <em>dominio</em> $D$ un sottoinsieme di $\mathbb{R}$ e per <em>codominio</em> $\mathbb{R}$:

    \begin{align*}
    f&: D \subseteq \mathbb{R} \rightarrow \mathbb{R},~~~f: x \mapsto f(x)
    \end{align*}

    si chiama <strong>funzione reale di variabile reale</strong>.

- Sono  funzioni in cui la variabile di “ingresso” $x$ e quella di “uscita” $f(x)$ sono numeri reali.

- Le funzioni reali di variabile reale più comuni hanno come dominio $D$ e come immagine $f(D)$ un <strong>intervallo</strong> (eventualmente  tutto $\mathbb{R}$) o l'unione di un <strong>numero finito di intervalli</strong>.

!!! chiave ""

    La dipendenza dell'uscita $f(x)$ dall'ingresso $x$ si visualizza efficacemente disegnando il <strong>grafico</strong> di $f$, ossia l'insieme dei punti del piano di coordinate $(x,y)$ con $y = f(x)$ e  $x$ nel  dominio  $D$. 

    Esempio di  grafico di funzione reale di variabile reale di dominio $D = [a, b]$ (un intervallo chiuso e limitato): 

    ![Figura 1](../img/funzioni-02-funzioni-reali/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

    Ogni retta parallela all'asse delle ordinate che interseca l'asse delle ascisse in un punto $x_0$ del dominio $D$, interseca il grafico di $f$ in uno e un solo punto.  [^1]  <strong>Non tutte le curve sono quindi grafici di funzioni</strong>.

    Si noti che, invece, nulla impedisce che una retta parallela all'asse delle ascisse intersechi il grafico di $f$ in più punti o in nessun punto.

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 1: curva che non corrisponde al grafico di una funzione"

    Consideriamo ad esempio la curva dei  punti della circonferenza di raggio $r$:

    $$
    {x^2+y^2=r^2} ~~\Longleftrightarrow~~ y = \pm \sqrt{r^2-x^2}
    $$

    ![Figura 2](../img/funzioni-02-funzioni-reali/fig02.svg){ .fig .ovale loading=lazy style="width:55%" }

    All'ingresso $x_0 \in (-r,r)$ non è possibile associare un'unica uscita, quindi questa curva non corrisponde al grafico di una funzione!

## 2. Segno di una funzione

- Le proprietà di una funzione si studiano quasi sempre non solo su tutto il dominio, ma anche su una sua <strong>parte</strong>: si dice per esempio che $x \mapsto x^2$ è “positiva per $x>0$” o che $x \mapsto x^2$ è “decrescente in $(-\infty,0]$”. Conviene quindi dare le definizioni direttamente <strong>su un sottoinsieme $I$ del dominio</strong>, e ritrovare poi la proprietà “globale” come caso particolare $I=D$.

<a id="box-defSEGNO-3"></a>

!!! definizione "Definizione 2: segno di una funzione in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice

    $$
    \begin{cases}
    {\rm non~negativa~in~} I & {\rm se~~} f(x) \ge 0,~~ \forall  x \in I\\[2ex]
    {\rm positiva~in~} I & {\rm se~~} f(x) > 0,~~ \forall  x \in I\\[2ex]
    {\rm non~positiva~in~} I & {\rm se~~} f(x) \le 0,~~ \forall  x \in I\\[2ex]
    {\rm negativa~in~} I & {\rm se~~} f(x) < 0,~~ \forall  x \in I\\
    \end{cases}
    $$

!!! chiave ""

    Quando il sottoinsieme non viene indicato si intende <em>tutto il dominio</em>: una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ si dice <strong>non negativa</strong> (<strong>positiva</strong>, <strong>non positiva</strong>, <strong>negativa</strong>) se è non negativa (positiva, non positiva, negativa) in $I=D$.

- Graficamente: $f$ è non negativa in $I$ se nessun punto del grafico con ascissa in $I$ sta <em>sotto</em> l'asse delle ascisse; è positiva in $I$ se tutti questi punti stanno <em>strettamente sopra</em> l'asse delle ascisse.

- Se $f$ è positiva in $I$ allora è anche non negativa in $I$; il viceversa è falso, perché $f$ può annullarsi in qualche punto di $I$.

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 2: segno di una funzione"

    - La funzione $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^2$ è <em>non negativa</em> in $\mathbb{R}$, dato che $x^2 \ge 0$ per ogni $x \in \mathbb{R}$. Non è però <em>positiva</em> in $\mathbb{R}$, perché $f(0)=0$: lo è invece in $I=(0,+\infty)$ e in $I=(-\infty,0)$.

    - La funzione $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^3$ è <em>positiva</em> in $(0,+\infty)$ e <em>negativa</em> in $(-\infty,0)$, dato che

        $$
        x^3 > 0 ~~\Longleftrightarrow~~ x > 0 \qquad {\rm ~~e~~} \qquad x^3 < 0 ~~\Longleftrightarrow~~ x < 0.
        $$

    - La funzione $f: \mathbb{R} \setminus \{0\} \rightarrow \mathbb{R},~ f: x \mapsto \frac{1}{x}$ è <em>positiva</em> in $(0,+\infty)$ e <em>negativa</em> in $(-\infty,0)$: il segno di $\frac{1}{x}$ coincide con il segno di $x$.

## 3. Funzioni limitate

<a id="box-defLIM_SUP-5"></a>

!!! definizione "Definizione 3: funzioni limitate in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice

    $$
    \begin{cases}
    {\rm limitata~superiormente~in~} I & {\rm se~~} \exists M \in \R: f(x) \le M,~~ \forall  x \in I\\[2ex]
    {\rm limitata~inferiormente~in~} I & {\rm se~~} \exists m \in \R: f(x) \ge m,~~ \forall  x \in I\\[2ex]
    {\rm limitata~in~} I & {\rm se~~} \exists M \in \R_{\ge 0}: |f(x)| \le M,~~ \forall  x \in I\\
    \end{cases}
    $$

- Un numero $M \in \R$ tale che $f(x) \le M$ per ogni $x \in I$ si chiama <strong>maggiorante</strong> dei valori di $f$ in $I$; un numero $m \in \R$ tale che $f(x) \ge m$ per ogni $x \in I$ si chiama <strong>minorante</strong> dei valori di $f$ in $I$. Quindi $f$ è limitata superiormente in $I$ se i suoi valori in $I$ ammettono un maggiorante, limitata inferiormente in $I$ se ammettono un minorante.

!!! chiave ""

    Quando il sottoinsieme non viene indicato si intende <em>tutto il dominio</em>: una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ si dice <strong>limitata superiormente</strong> (<strong>limitata inferiormente</strong>, <strong>limitata</strong>) se lo è in $I=D$.

- Una funzione è limitata in $I$ <em>se e solo se</em> è limitata sia superiormente sia inferiormente in $I$. Infatti:

    1. se $|f(x)| \le M$ per ogni $x \in I$, allora $-M \le f(x) \le M$ per ogni $x \in I$, quindi $M$ è un maggiorante e $-M$ un minorante;

    2. viceversa, se $m \le f(x) \le M$ per ogni $x \in I$, posto $K = \max\{|m|,|M|\} \ge 0$ si ha $-K \le m \le f(x) \le M \le K$, cioè $|f(x)| \le K$ per ogni $x \in I$.

- Graficamente abbiamo:

    1. una funzione è limitata superiormente se il suo grafico è contenuto nel semipiano inferiore delimitato da una retta parallela all'asse delle ascisse

    2. una funzione è limitata inferiormente se il suo grafico è contenuto nel semipiano superiore delimitato da una retta parallela all'asse delle ascisse

    3. una funzione è limitata se il suo grafico è contenuto in una striscia orizzontale

<a id="box-texexpbox1-6"></a>

!!! esempio "Esempio 3: funzione limitata"

    Consideriamo la funzione:

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto \frac{1}{1 + x^2} +1
    $$

    abbiamo

    $$
    \frac{1}{1 + x^2} +1=  \frac{1+ x^2- x^2}{1 + x^2} +1 = 2- \frac{x^2}{1+x^2} \qquad {\rm ~~e~~} \qquad \frac{x^2}{1+x^2} \ge 0, ~~\forall x \in \R
    $$

    $$
    {\rm ~~~quindi~~~}1  < \frac{1}{1 + x^2} +1 \le 2, \forall x \in \mathbb{R}
    $$

    ![Figura 3](../img/funzioni-02-funzioni-reali/fig03.svg){ .fig .ovale loading=lazy style="width:70%" }

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 4: Funzione non limitata"

    La funzione

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto x^3 \qquad (y=x^3)
    $$

    non è limitata né superiormente, né inferiormente.

    ![Figura 4](../img/funzioni-02-funzioni-reali/fig04.svg){ .fig .ovale loading=lazy style="width:42%" }

<a id="box-texexpbox1-8"></a>

!!! esempio "Esempio 5: Funzione limitata inferiormente"

    La funzione

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto x^2 \qquad (y=x^2)
    $$

    è limitata inferiormente; infatti $x^2  \ge 0, \forall x \in \mathbb{R}$

    ![Figura 5](../img/funzioni-02-funzioni-reali/fig05.svg){ .fig .ovale loading=lazy style="width:45%" }

<a id="box-texexpbox1-9"></a>

!!! esempio "Esempio 6: limitatezza in un sottoinsieme del dominio"

    Una funzione può non essere limitata nel suo dominio ed esserlo in un suo sottoinsieme.

    - La funzione $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^3$ non è limitata in $\mathbb{R}$, ma è limitata in $I=[-2,2]$: infatti per $-2 \le x \le 2$ si ha

        $$
        |x^3|=|x|^3 \le 2^3 = 8.
        $$

    - La funzione $f: \mathbb{R} \setminus \{0\} \rightarrow \mathbb{R},~ f: x \mapsto \frac{1}{x}$ <strong>non</strong> è limitata superiormente in $I=(0,+\infty)$: dato un qualunque $M \in \R$ con $M>0$, scegliendo $x$ con $0 < x < \frac{1}{M}$ si ottiene

        $$
        f(x) = \frac{1}{x} > M,
        $$

        quindi nessun numero reale è maggiorante dei valori di $f$ in $(0,+\infty)$. La stessa funzione è invece limitata in $I=[1,+\infty)$, dove $0 < \frac{1}{x} \le 1$.

- Equivalentemente, si può dire che una funzione è <em>limitata superiormente </em>(<em>limitata inferiormente</em>, <em>limitata</em>) se, rispettivamente, la sua <strong>immagine</strong> è un sottoinsieme di $\mathbb{R}$ <em>limitato superiormente</em> (<em>limitato inferiormente</em>, <em>limitato</em>).

## 4. Funzioni simmetriche

<a id="box-defFunzionePari-10"></a>

!!! definizione "Definizione 4: di funzione pari"

    Funzioni che hanno il grafico simmetrico rispetto all'asse delle ordinate si chiamano <strong>pari</strong>.

- Sono caratterizzate dalla relazione

    $$
    f(-x) = f(x)
    $$

    che esprime l'uguaglianza delle ordinate corrispondenti ai punti $x$ e $-x$, simmetrici rispetto a $x = 0$.

<a id="box-defFunzioneDisPari-11"></a>

!!! definizione "Definizione 5: Funzione dispari"

    Funzioni che hanno il grafico simmetrico rispetto all'origine si chiamano <strong>dispari</strong>.

- Sono caratterizzate dalla relazione

    $$
    f(-x) = - f(x)
    $$

    che esprime che le ordinate corrispondenti ai punti $x$ e $-x$, simmetrici rispetto a $x = 0$, sono una l'opposto dell'altra.

<a id="box-texexpbox1-12"></a>

!!! esempio "Esempio 7: Funzioni pari e dispari"

    Per esempio, la funzione $x \mapsto x^2$ è pari, mentre $x  \mapsto x^3$ è dispari. Più in generale, le potenze a esponente intero sono funzioni pari  se l'esponente è pari e sono dispari se l'esponente è dispari.

1. <strong>Esempio di  grafico di  funzione pari</strong>:

    ![Figura 6](../img/funzioni-02-funzioni-reali/fig06.svg){ .fig .ovale loading=lazy style="width:80%" }

2. <strong>Esempio di grafico di  funzione dispari</strong>:

    ![Figura 7](../img/funzioni-02-funzioni-reali/fig07.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    Una funzione <em>non può</em> avere il grafico simmetrico rispetto all'asse $x$, in quanto verrebbe meno l'univocità della corrispondenza.

## 5. Funzioni monotone

<a id="box-defMONnondecr-13"></a>

!!! definizione "Definizione 6: Funzione non decrescente in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice <strong>non decrescente in $I$</strong> se per ogni coppia di punti $x_1$, $x_2 \in I$ si ha:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) \le f(x_2) \label{ed:monNONDECRE}
    \end{equation}

<a id="box-defMONcre-14"></a>

!!! definizione "Definizione 7: Funzione crescente in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice <strong>crescente in $I$</strong> se per ogni coppia di punti $x_1$, $x_2 \in I$ si ha:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) < f(x_2) \label{ed:monCRE}
    \end{equation}

<a id="box-defMONnoncre-15"></a>

!!! definizione "Definizione 8: Funzione non crescente in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice <strong>non crescente in $I$</strong> se per ogni coppia di punti $x_1$, $x_2 \in I$ si ha:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) \ge f(x_2) \label{ed:monNONCRE}
    \end{equation}

<a id="box-defMONdecr-16"></a>

!!! definizione "Definizione 9: Funzione decrescente in un sottoinsieme del dominio"

    Dati una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ e un sottoinsieme $I \subseteq D$, la funzione si dice <strong>decrescente in $I$</strong> se per ogni coppia di punti $x_1$, $x_2 \in I$ si ha:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) > f(x_2) \label{ed:monDECRE}
    \end{equation}

- Una funzione $f$ è <em>non decrescente</em> in $I$ se, all'aumentare di $x$ in $I$, l'ordinata corrispondente sul grafico della funzione non diminuisce (quindi o rimane uguale o aumenta); è <em>crescente</em> in $I$ se aumenta sempre;

- Una funzione $f$ è <em>non crescente</em> in $I$ se, all'aumentare di $x$ in $I$, l'ordinata corrispondente sul grafico della funzione non aumenta (quindi o rimane uguale o diminuisce); è <em>decrescente</em> in $I$ se diminuisce sempre.

!!! chiave ""

    - Una funzione si dice <strong>monotona in $I$</strong> se è <em>non decrescente in $I$</em> oppure <em>non crescente in $I$</em>.

    - Una funzione si dice <strong>strettamente monotona in $I$</strong> se è <em>crescente in $I$</em> oppure <em>decrescente in $I$</em>.

    Quando il sottoinsieme non viene indicato si intende <em>tutto il dominio</em>: una funzione $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ si dice <strong>non decrescente</strong> (<strong>crescente</strong>, <strong>non crescente</strong>, <strong>decrescente</strong>, <strong>monotona</strong>, <strong>strettamente monotona</strong>) se lo è in $I=D$.

- Una funzione crescente in $I$ è in particolare non decrescente in $I$ (perché $f(x_1)<f(x_2)$ implica $f(x_1) \le f(x_2)$), e una funzione decrescente in $I$ è in particolare non crescente in $I$. Quindi <strong>ogni funzione strettamente monotona in $I$ è anche monotona in $I$</strong>; il viceversa è falso, come mostra la funzione costante.

<a id="box-texexpbox1-17"></a>

!!! esempio "Esempio 8: Funzioni monotone"

    - La funzione $x \mapsto x^3$ è <em>crescente</em> in $\mathbb{R}$ (quindi strettamente monotona in $\mathbb{R}$).

    - La funzione costante  $x \mapsto k$ (che ha come grafico la retta di equazione $y = k$) è sia <em>non decrescente</em> sia <em>non crescente</em> in $\mathbb{R}$: è quindi monotona, ma non è né crescente né decrescente, e perciò non è strettamente monotona.

    - La funzione $x \mapsto x^2$ è <em>decrescente</em> in $(-\infty,0]$ ed è <em>crescente</em> in $[0,+\infty)$, ma <strong>non</strong> è monotona in $\mathbb{R}$: infatti $f(-1)=1 > f(0)=0$ (quindi non è non decrescente in $\mathbb{R}$) e $f(0)=0 < f(1)=1$ (quindi non è non crescente in $\mathbb{R}$). È l'esempio tipico di proprietà che vale <em>localmente</em> ma non su tutto il dominio.

1. <strong>Esempio di grafico di funzione non decrescente</strong> (tratto orizzontale):

    ![Figura 8](../img/funzioni-02-funzioni-reali/fig08.svg){ .fig .ovale loading=lazy style="width:80%" }

2. <strong>Esempio di grafico di funzione  crescente</strong>:

    ![Figura 9](../img/funzioni-02-funzioni-reali/fig09.svg){ .fig .ovale loading=lazy style="width:80%" }

## 6. Funzioni periodiche

<a id="box-defFunzioneMONcre-18"></a>

!!! definizione "Definizione 10: Funzione periodica"

    Una funzione $f:D \rightarrow \mathbb{R}$ (non costante) è <strong>periodica</strong> di periodo $T$ , $T > 0$, se $T$ è il più piccolo numero reale positivo tale che

    $$
    f(x+T)=f(x) {\rm~~~per~ogni~~} x \in D
    $$

- Ogni intervallo di lunghezza $T$, contenuto in $D$, si chiama <strong>intervallo di periodicità</strong>.

<a id="box-texexpbox1-19"></a>

!!! esempio "Esempio 9: Funzioni periodiche"

    Tipici esempi di funzioni periodiche sono le <em>funzioni trigonometriche</em> $x \mapsto \sin(x)$ ($T=2\:\pi$), $x \mapsto \cos(x)$ ($T=2\:\pi$) e $x \mapsto \tan(x)$ ($T=\pi$).

<a id="box-texexpbox1-20"></a>

!!! esempio "Esempio 10: Grafico di funzioni periodiche"

    Grafico di funzione periodica di periodo $T=2$:

    ![Figura 10](../img/funzioni-02-funzioni-reali/fig10.svg){ .fig .ovale loading=lazy style="width:80%" }

- Le rette parallele all'asse delle ascisse, hanno equazione

    $$
    y = k \qquad k \in \mathbb{R}
    $$

[^1]:  Se la retta non intersecasse il grafico significherebbe che all'ingresso $x$ non corrisponde alcuna uscita. Se la retta intersecasse in più di un punto significherebbe che all'ingresso $x$ corrispondono più uscite distinte, cadendo quindi l'univocità della funzione.
