---
title: "Insiemi numerici e intervalli"
---

# Insiemi numerici e intervalli

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 3** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/numeri-03-insiemi-numerici.pdf)

</div>
## 1. I cinque principali insiemi numerici

### 1.1 I numeri naturali

### 1.2 I numeri interi

$\Z$ è l'insieme dei <strong>numeri interi</strong> (detti anche numeri relativi), ossia:

$$
0,~ 1,~ - 1,~ 2,~ -2,~ \dots
$$

### 1.3 I numeri razionali

$\Q$ è l'insieme dei <strong>numeri razionali</strong>, ossia delle frazioni:

$$
\frac{n}{m},~~ {\rm~dove~~} n, m \in \Z , {\rm ~~e~~} m \neq 0.
$$

I numeri razionali possono essere scritti anche in forma decimale. Ad esempio:

\begin{align*}
\frac{3}{4} = 0, 75, {\rm ~~~mentre~~~} \frac{1}{3} =  0,333 \dots {\rm }= 0,\overline{3}.
\end{align*}

Un numero razionale, scritto in forma decimale, dopo la virgola può presentare un numero finito di cifre (diverse da zero), oppure un numero infinito di cifre diverse da zero, che però si ripetono <em>periodicamente</em>.

<a id="box-obserXX-1"></a>

!!! osservazione "Osservazione 1"

    $$
    0,\overline{9}=1
    $$

!!! chiave ""

    Esistono differenti prove di questa osservazione basate su differenti tecniche matematiche.

??? dimostrazione "Dimostrazione"

    Una semplice prova deriva direttamente dalla definizione di $1$ diviso $3$, abbiamo infatti:

    \begin{align*}
    \frac{1}{3} &= 0,\overline{3}\\
    \frac{1}{3} \cdot 3 &= 0,\overline{3} \cdot 3\\
     1 &= 0,\overline{9}
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Dimostrazione"

    Usando argomenti algebrici possiamo scrivere:

    \begin{align*}
    x &= 0.999\dots\\
    10\:x &= 9.999\dots & {\rm moltiplicando~per~} 10 \\
    10\:x &= 9 + 0.999\dots & {\rm dividendo~la~parte~intera~da~quella~frazionaria} \\
    10\:x &= 9 + x & {\rm per~definizione~di~} x\\
    9\:x &= 9  & {\rm sottraendo~} x\\
    x &= 1  & {\rm dividendo~per~} 9
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Dimostrazione"

    Una prova per assurdo è la seguente:

    \begin{align*}
    0,\overline{9} & \neq 1\\
    0,\overline{9} \cdot 9 & \neq 1 \cdot 9\\
    0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 1 \cdot 9 +0,\overline{9}\\
    0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 9,\overline{9}\\
    0,\overline{9} \cdot  (9+1) & \neq 9,\overline{9}\\
    0,\overline{9} \cdot  (10) & \neq 9,\overline{9}\\
    9,\overline{9} & \neq 9,\overline{9} ~~~~~~ {\rm assurdo!}
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    Altre prove partono dall'assunzione  che due numeri siano identici se e solo se la loro differenza è uguale a zero e si basano sul calcolare quanto valga $1 - 0,\overline{9}$.

??? dimostrazione "Dimostrazione"

    Scriviamo il numero $0,999...$ con $n$ cifre dopo la virgola come $0,(9)_n$, quindi $0,(9)_1 = 0.9$, $0,(9)_2 = 0.99$, $0,(9)_3 = 0.999$, e così via. 

    Dato  $\frac{1}{10^n} = 0,0 \dots 01$, con $n$ cifre dopo la virgola, le regole di addizione per i numeri decimali implicano

    $$
    0,(9)_n + \frac{1}{10^n} = 1
    {\rm ~~inoltre~~}
    0,(9)_n < 1,  \forall n \in \N.
    $$

    Si deve dimostrare che $1$ è il numero più piccolo che non sia inferiore a tutti gli $0,(9)_n$. Per questo basta provare che, se un numero $x$ non è maggiore di 1 e non minore di tutti gli $0.(9)_n$, allora $x = 1$.

    Quindi sia $x$ tale che

    $$
    0,(9)_n \le x \le 1
    $$

    per ogni intero positivo $n$. Quindi

    $$
    1-1 \le 1 -  x \le 1- 0,(9)_n
    $$

    che, usando l'aritmetica di base e la prima uguaglianza stabilita sopra, semplifica a

    $$
    0 \le 1 -  x  \le \frac{1}{10^n}
    $$

    Ciò implica che la differenza tra $1$ e $x$ è minore dell'inverso di qualsiasi intero positivo. Quindi questa differenza deve essere zero, e quindi $x = 1$; che a sua volta implica

    $$
    0.999\dots = 1
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    Questa dimostrazione si basa sul fatto che 0 è l'unico numero non negativo minore di tutti gli inversi degli interi positivi, o equivalentemente che non esiste un numero maggiore di ogni intero.

    Questa è la <strong>proprietà di Archimede</strong>, che si verifica per i numeri razionali e reali.

### 1.4 I numeri reali

$\R$  è l'insieme dei <strong>numeri reali</strong>, ossia quelli che, scritti in forma decimale, presentano dopo la virgola una successione qualsiasi di cifre diverse da zero, eventualmente anche <em>infinita</em> e <em>non periodica</em>.

Che esistano numeri di quest'ultimo tipo (ossia reali ma non razionali), si capisce riflettendo su esempi come:

$$
0,10110111011110 \dots
$$

Il numero precedente dopo la virgola ha: una cifra uguale a $1$, poi $0$, poi due cifre uguali a $1$,  poi $0$, poi tre cifre uguali a $1$ … e così via. È chiaro che questo criterio definisce con precisione un numero decimale. D'altro canto, l'allineamento di cifre diverse da zero dopo la virgola non è né finito né periodico: questo numero perciò è irrazionale.

### 1.5 I numeri complessi

$\C$ è l'insieme dei <strong>numeri complessi</strong>, ossia del tipo $a + i\:b$, dove $a$, $b$ sono numeri reali, e $i$ è l'<em>unità immaginaria</em>, ossia un numero il cui quadrato è $-1$.

!!! chiave ""

    Tra gli insiemi numerici introdotti, valgono le inclusioni:

    $$
    \N ~\subsetneqq~ \Z ~\subsetneqq~ \Q ~\subsetneqq~ \R ~\subsetneqq~ \C.
    $$

    Come indicato dai simboli, tutte le inclusioni sono strette:

    - esistono numeri interi non naturali (i numeri negativi),

    - esistono numeri razionali non interi (le frazioni proprie),

    - esistono numeri reali non razionali (i numeri irrazionali),

    - esistono numeri complessi non reali (i numeri immaginari).

## 2. Intervalli

<a id="box-defXX-2"></a>

!!! definizione "Definizione 1: di intervallo"

    Dati due numeri reali $a$, $b$, si chiama <strong>intervallo</strong> di estremi $a$ e $b$ uno dei seguenti insiemi:

    \begin{align*}
    [a,b] = \big\{ x \in \mathbb{R}:  a \le x \le b \big\}, & \qquad
     [a,b) = \big\{ x \in \mathbb{R}:  a \le x < b \big\} \\[2ex]
     (a,b] = \big\{ x \in \mathbb{R}:  a < x \le b \big\}, &\qquad
     (a,b) = \big\{ x \in \mathbb{R}:  a < x < b \big\}
    \end{align*}

- Come si può notare la parentesi quadra (tonda) in corrispondenza di uno dei due estremi indica che quest'ultimo è incluso (escluso) nell'intervallo.

- Gli intervalli $[a, b]$ si dicono <strong>chiusi</strong>; quelli $(a, b)$ si dicono <strong>aperti</strong>.

- Tutti gli intervalli indicati sopra sono limitati; si chiamano intervalli (illimitati) anche le semirette, per esempio:

    \begin{align*}
    (-\infty,b) = \big\{ x \in \mathbb{R}:  x < b \big\} \\[2ex]
     [a,+\infty) = \big\{ x \in \mathbb{R}:  x \ge a \big\}
    \end{align*}

    o l'intera retta

    $$
    \mathbb{R} = (-\infty, +\infty)
    $$

    ![Figura 1](../img/numeri-03-insiemi-numerici/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    Si può dimostrare che gli intervalli, limitati o illimitati, sono tutti e soli i sottoinsiemi $I$ di $\mathbb{R}$ che soddisfano la seguente proprietà  (detta <strong>connessione</strong>):

    $$
    x_1 < x_2 < x_3, {\rm ~~se~~} x_1,x_3 \in I, {\rm ~~allora~~} x_2 \in I
    $$

- Nel seguito ci capiterà di considerare il prodotto cartesiano di due (o più) intervalli, cui si può dare il significato geometrico di rettangolo (in due dimensioni) o parallelepipedo (in tre dimensioni).

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 1: Prodotto cartesiano di intervalli"

    Sia $A = [0, 1]$, $B = [1, 2]$; la figura

    ![Figura 2](../img/numeri-03-insiemi-numerici/fig02.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figura 3](../img/numeri-03-insiemi-numerici/fig03.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figura 4](../img/numeri-03-insiemi-numerici/fig04.svg){ .fig .ovale loading=lazy style="width:25%" }

    illustra gli insiemi $A \times B$ , $B \times A$ , $A \times A$ indicato anche con $A^2$. In generale,  $A \times B$  è diverso da $B \times A$.
