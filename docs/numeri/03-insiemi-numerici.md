---
title: "Insiemi numerici e intervalli"
---

# Insiemi numerici e intervalli

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 3** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-numeri-03-insiemi-numerici.pdf)

</div>

## 1. I cinque principali insiemi numerici

### 1.1 I numeri naturali

$\N$ è l'insieme dei <strong>numeri naturali</strong>, ossia i numeri che si usano per contare:

$$
\N = \{0,~ 1,~ 2,~ 3,~ 4,~ \dots\}
$$

- Ricordiamo la convenzione adottata in queste note: lo <strong>zero è un numero naturale</strong>, ovvero $0 \in \N$. Altri testi escludono lo zero da $\N$: è solo una convenzione, ma va dichiarata una volta per tutte.

- Indichiamo con $\N_{>0}$ l'insieme dei <strong>numeri naturali positivi</strong>:

    $$
    \N_{>0} = \N \setminus \{0\} = \{1,~ 2,~ 3,~ 4,~ \dots\}
    $$

!!! chiave ""

    Nel capitolo <em>Insiemi</em> abbiamo già introdotto, per i numeri naturali:

    - le definizioni di numero <strong>pari</strong> ($n = 2\,m$) e di numero <strong>dispari</strong> ($n = 2\,m+1$), con $m \in \N$, e il fatto che ogni numero naturale è pari oppure dispari, ma mai entrambe le cose;

    - l'<strong>assioma del buon ordinamento</strong>, secondo cui ogni sottoinsieme non vuoto di $\N$ possiede il minimo.

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

Un numero razionale, scritto in forma decimale, ha un'<strong>espansione decimale finita o infinita periodica</strong>: dopo la virgola compare un numero finito di cifre, oppure un numero infinito di cifre che da un certo punto in poi si ripetono <em>periodicamente</em>.

!!! chiave ""

    Uno stesso numero razionale può avere due espansioni decimali diverse. L'esempio classico è l'uguaglianza

    $$
    0,\overline{9}=1
    $$

    di cui abbiamo dato quattro dimostrazioni diverse nel capitolo <em>Insiemi</em>, e che quindi qui non ripetiamo.

### 1.4 I numeri reali

$\R$  è l'insieme dei <strong>numeri reali</strong>, ossia quelli che si identificano con <strong>espansioni decimali finite o infinite, periodiche o non periodiche</strong>: dopo la virgola può comparire un allineamento qualsiasi di cifre, eventualmente anche <em>infinito</em> e <em>non periodico</em>.

Che esistano numeri di quest'ultimo tipo (ossia reali ma non razionali), si capisce riflettendo su esempi come:

$$
0,10110111011110 \dots
$$

Il numero precedente dopo la virgola ha: una cifra uguale a $1$, poi $0$, poi due cifre uguali a $1$,  poi $0$, poi tre cifre uguali a $1$ … e così via. È chiaro che questo criterio definisce con precisione un numero decimale. D'altro canto, l'allineamento delle cifre dopo la virgola non è né finito né periodico: questo numero perciò è irrazionale.

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

![Figura 1](../img/numeri-03-insiemi-numerici/fig01.svg){ .fig .ovale loading=lazy style="width:62%" }

!!! chiave ""

    Come per $\N_{>0}$, indichiamo con

    $$
    \Z_{>0}, \qquad \Q_{>0}, \qquad \R_{>0}
    $$

    gli insiemi dei numeri interi, razionali e reali <strong>positivi</strong>, e con

    $$
    \Z_{\ge 0}, \qquad \Q_{\ge 0}, \qquad \R_{\ge 0}
    $$

    gli insiemi dei numeri interi, razionali e reali <strong>non negativi</strong> (cioè positivi o nulli). Ad esempio:

    $$
    \R_{>0} = \{x \in \R : x > 0\} \qquad {\rm ~~e~~} \qquad \Z_{\ge 0} = \{x \in \Z : x \ge 0\} = \N
    $$

## 2. Intervalli

<a id="box-def_intervallo-limitato-1"></a>

!!! definizione "Definizione 1: di intervallo limitato"

    Dati due numeri reali $a$, $b$, si chiama <strong>intervallo limitato</strong> di estremi $a$ e $b$ uno dei seguenti insiemi:

    \begin{align*}
    [a,b] = \big\{ x \in \mathbb{R}:  a \le x \le b \big\}, & \qquad
     [a,b) = \big\{ x \in \mathbb{R}:  a \le x < b \big\} \\[2ex]
     (a,b] = \big\{ x \in \mathbb{R}:  a < x \le b \big\}, &\qquad
     (a,b) = \big\{ x \in \mathbb{R}:  a < x < b \big\}
    \end{align*}

- Come si può notare la parentesi quadra (tonda) in corrispondenza di uno dei due estremi indica che quest'ultimo è incluso (escluso) nell'intervallo.

- Gli intervalli $[a, b]$ si dicono <strong>chiusi</strong>; quelli $(a, b)$ si dicono <strong>aperti</strong>.

<a id="box-def_intervallo-illimitato-2"></a>

!!! definizione "Definizione 2: di intervallo illimitato"

    Dato un numero reale $a$, si chiama <strong>intervallo illimitato</strong> (o <strong>semiretta</strong>) di estremo $a$ uno dei seguenti insiemi:

    \begin{align*}
    [a,+\infty) = \big\{ x \in \mathbb{R}:  x \ge a \big\}, & \qquad
     (a,+\infty) = \big\{ x \in \mathbb{R}:  x > a \big\} \\[2ex]
     (-\infty,a] = \big\{ x \in \mathbb{R}:  x \le a \big\}, &\qquad
     (-\infty,a) = \big\{ x \in \mathbb{R}:  x < a \big\}
    \end{align*}

- I simboli $-\infty$ e $+\infty$ <strong>non sono numeri reali</strong>: non sono estremi che possano appartenere all'insieme, e perciò accanto a essi si scrive sempre la parentesi tonda.

- Anche l'intera retta è un intervallo illimitato:

    $$
    \mathbb{R} = (-\infty, +\infty)
    $$

    ![Figura 2](../img/numeri-03-insiemi-numerici/fig02.svg){ .fig .ovale loading=lazy style="width:80%" }

<a id="box-ex_intervalli-concreti-3"></a>

!!! esempio "Esempio 1: di intervalli"

    La rappresentazione grafica dell'intervallo limitato chiuso $[-3,-2]$ e dell'intervallo illimitato aperto $(2,+\infty)$ è la seguente:

    ![Figura 3](../img/numeri-03-insiemi-numerici/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

    Il primo contiene i suoi due estremi, il secondo non contiene il suo estremo $2$ e non è limitato superiormente.

!!! chiave ""

    Si può dimostrare che gli intervalli, limitati o illimitati, sono tutti e soli i sottoinsiemi $I$ di $\mathbb{R}$ che soddisfano la seguente proprietà  (detta <strong>connessione</strong>):

    $$
    \forall x_1, x_2, x_3 \in \R {\rm ~~tali~che~~} x_1 < x_2 < x_3, {\rm ~~se~~} x_1,x_3 \in I, {\rm ~~allora~~} x_2 \in I
    $$

- Nel seguito ci capiterà di considerare il prodotto cartesiano di due (o più) intervalli, cui si può dare il significato geometrico di rettangolo (in due dimensioni) o parallelepipedo (in tre dimensioni).

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 2: Prodotto cartesiano di intervalli"

    Sia $A = [0, 1]$, $B = [1, 2]$; la figura

    ![Figura 4](../img/numeri-03-insiemi-numerici/fig04.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figura 5](../img/numeri-03-insiemi-numerici/fig05.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figura 6](../img/numeri-03-insiemi-numerici/fig06.svg){ .fig .ovale loading=lazy style="width:25%" }

    illustra gli insiemi $A \times B$ , $B \times A$ , $A \times A$ indicato anche con $A^2$. In generale,  $A \times B$  è diverso da $B \times A$.
