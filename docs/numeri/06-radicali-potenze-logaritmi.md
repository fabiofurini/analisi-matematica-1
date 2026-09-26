---
title: "Radicali, potenze, logaritmi e aritmetica modulare"
---

# Radicali, potenze, logaritmi e aritmetica modulare

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 6** · dalle dispense di Fabio Furini e Valerio Dose · [:material-file-pdf-box: PDF del capitolo](../pdf/numeri-06-radicali-potenze-logaritmi.pdf)

</div>
## 1. Radicali, potenze, logaritmi

- In conseguenza della proprietà $R_4$ possiamo eseguire, nel campo reale, operazioni che sono solo occasionalmente possibili nel campo razionale, come l'estrazione di radice o l'elevamento a potenza.

### 1.1 Radici $n$-esime aritmetiche

!!! teorema "Teorema 1"

    Per ogni $y \in \R$, $y > 0$ e $n \in \N$, $n \ge 1$, esiste uno e un solo $x \in \R, x >0$, tale che $x^n = y$.

- Tale numero si chiama radice $n$-esima aritmetica di $y$ e si indica con uno dei simboli

    $$
    \sqrt[n]{y} {\rm ~~oppure~~} y^{\frac{1}{n}}.
    $$

??? dimostrazione "Dimostrazione"

    La dimostrazione di questo Teorema verrà fornita utilizzando le proprietà delle funzioni continue. <span class="qed">□</span>

!!! chiave ""

    La radice $n$-esima aritmetica è non negativa.

!!! esempio "Esempio 1: radice $n$-esima aritmetica"

    Ad esempio:

    $$
    \sqrt{4} = 2, ~~~ \sqrt{9} = 3.
    $$

    Abbiamo inoltre:

    \begin{equation}
    \label{RAD}
    \sqrt{x^2}=|x|
    \end{equation}

<strong>Costruzione della rappresentazione decimale della radice $n$-esima.</strong>

- Cerchiamo l'allineamento decimale di

    $$
    \sqrt{2} \approx 1.41421356237
    $$

    questo numero, non essendo razionale, sarà rappresentato da un allineamento infinito (non periodico).

- Si procede così: si costruisce una classe di numeri razionali della forma:

    \begin{align*}
    0 & < a_0 \\[1ex]
     & < a_0,a_1 \\[1ex]
     & < a_0,a_1a_2 \\[1ex]
     & < a_0,a_1a_2a_3 \\[1ex]
     & < \cdots\cdots\cdots\cdots \\[1ex]
     & < a_0,a_1a_2a_3\cdots a_n \\[1ex]
     & < \cdots\cdots\cdots\cdots
    \end{align*}

    La regola è: ognuno di questi numeri è il più grande tra quelli con lo stesso numero di decimali dopo la virgola il cui quadrato è minore di $2$. I primi di questi numeri sono:

    <div class="tabella" markdown><table>
    <tr>
    <td>$1$</td>
    <td>$1^2$</td>
    <td>$=1$</td>
    </tr>
    <tr>
    <td>$1,4$</td>
    <td>$(1,4)^2$</td>
    <td>$=1,96$</td>
    </tr>
    <tr>
    <td>$1,41$</td>
    <td>$(1,41)^2$</td>
    <td>$=1,9881$</td>
    </tr>
    <tr>
    <td>$1,414$</td>
    <td>$(1,414)^2$</td>
    <td>$=1,999396$</td>
    </tr>
    <tr>
    <td>$1,4142$</td>
    <td>$(1,4142)^2$</td>
    <td>$=1,99996164$</td>
    </tr>
    <tr>
    <td>…</td>
    <td></td>
    <td></td>
    </tr>
    </table></div>

- Questo insieme di numeri, che chiamiamo  $E_{-}$,  è limitato superiormente (ognuno è $< 2$); per la proprietà $R_4$ esso possiede estremo superiore e viene usato per la definizione di $\sqrt{2}$.

    !!! chiave ""

        Il numero $\sqrt{2}$ si definisce precisamente come  $\sup E_{-}$

- Si sarebbe potuto anche costruire una classe di numeri $E_{+}$ come la precedente con la regola che ognuno di essi sia il più piccolo tra quelli con lo stesso numero di decimali dopo la virgola il cui quadrato è maggiore di $2$; avremmo ottenuto:

    <div class="tabella" markdown><table>
    <tr>
    <td>$1$</td>
    <td>$2^2$</td>
    <td>$=4$</td>
    </tr>
    <tr>
    <td>$1,5$</td>
    <td>$(1,5)^2$</td>
    <td>$=2, 25$</td>
    </tr>
    <tr>
    <td>$1,42$</td>
    <td>$(1,42)^2$</td>
    <td>$=2,0164$</td>
    </tr>
    <tr>
    <td>$1,415$</td>
    <td>$(1,415)^2$</td>
    <td>$=2,002225$</td>
    </tr>
    <tr>
    <td>$1,4143$</td>
    <td>$(1,4143)^2$</td>
    <td>$=2,00024449$</td>
    </tr>
    <tr>
    <td>…</td>
    <td></td>
    </tr>
    </table></div>

    Questo insieme $E_{+}$ è limitato inferiormente (ogni elemento è $> 1$), perciò possiede estremo inferiore; si dimostra che:

    !!! chiave ""

        $$
        \sqrt{2} = \inf E_{+} = \sup E_{-}
        $$

        I numeri della classe $E_{-}$ approssimano $\sqrt{2}$ per difetto, quelli della classe $E_{+}$ per eccesso.

### 1.2 Potenze a esponente reale

!!! chiave ""

    L'estrazione di radice $n$-esima è l'operazione inversa dell'elevamento a potenza intera.

<strong>Esponente razionale</strong>

- Si può estendere l'operazione di elevamento a potenza per ogni esponente razionale se la base è positiva (utilizzando il teorema precedente).

    !!! chiave ""

        $$
        {\rm Se~~} r = \frac{m}{n} ~~~~{\rm e}~~~~ a > 0 ~~~~{\rm allora}~~~~ a^r = (a^m)^{\frac{1}{n}} = \sqrt[n]{a^m}
        $$

        (si assume $m \in  \Z$ e $n \in  \Z$ positivo)

<strong>Esponente reale</strong>

- Se l'esponente è reale $b=b_0,b_1b_2b_3\dots b_n \dots$ il numero $a^b$ ($a > 0$) sarà individuato dalla classe di numeri

    $$
    a^{b_0} \qquad a^{b_0,b_1} \qquad a^{b_0,b_1b_2} \qquad  \dots
    $$

    in un modo simile a quello del caso della radice.

!!! chiave ""

    Se la base $a$ è negativa l'operazione di elevamento a potenza $a^b$ è definita solo in certi casi:

    1. se l'esponente $b$ è intero, oppure

    2. se l'esponente $b=\frac{n}{m}$ è razionale  purché non sia $n$ dispari ed $m$ pari.

    Se $c < 0$ e $m$ dispari, si definisce

    $$
    \sqrt[m]{c}=-\sqrt[m]{-c}
    $$

!!! esempio "Esempio 2: base negativa"

    Per esempio:

    $$
    (-2)^{\frac{3}{5}} = \sqrt[5]{(-2)^3} = \sqrt[5]{-8} = - \sqrt[5]{8}
    $$

    $$
    (-2)^{\frac{2}{5}} = \sqrt[5]{(-2)^2} = \sqrt[5]{4}
    $$

- Quando si dice “non esiste in $\R$” si intende che non è possibile definire tale operazione in modo da mantenere valide le usuali regole di calcolo.

!!! esempio "Esempio 3: non esistenza della potenza a esponente reale"

    Per esempio:

    $$
    (-2)^{\frac{3}{4}}
    $$

    non esiste nel campo reale!

Siano

$$
a, b \in \R, ~~ a>0 {\rm ~~e~~} b >0 ~~~({\rm reali~~positivi})
$$

e

$$
c, d \in \R ~~~({\rm reali~qualsiasi}),
$$

<strong>le proprietà principali dell'elevamento a potenza</strong> sono:

!!! chiave ""

    \begin{align}
    a^0&=1 ~~~~ \forall a \neq 0\\[2ex]
    1^c&=1 ~~~~ \forall c\\[2ex]
    a^c&>0 ~~~~ \forall c\\[2ex] \label{FFFFF}
    a^c&>1 ~~~~ \forall a>1 {\rm ~~e ~~} c >0\\[2ex]
    a^c&<1 ~~~~ \forall a<1 {\rm ~~e ~~} c >0
    \end{align}

!!! chiave ""

    \begin{align}
    a^{c+d}&= a^c \cdot a^d \\[2ex]
    (a\cdot b)^{c}&= a^c \cdot b^c  \\[2ex]
    \left(a^b\right)^{c}&= a^{b \cdot c}
    \end{align}

!!! chiave ""

    \begin{align}
    c < d & \Rightarrow a^c < a^d {\rm ~~se~~} a >1   \\[2ex]
    c < d & \Rightarrow a^c > a^d {\rm ~~se~~} a <1   \\[2ex]
    0 < a \le  b & \Rightarrow a^c \le  b^c ~~~ \forall c >0
    \end{align}

### 1.3 Logaritmi

- Consideriamo l'equazione

    $$
    a^x = y, \qquad a> 0
    $$

    con $y$ assegnato e $x$ incognito. Anzitutto, se $a= 1$, essa è risolubile solo se $y = 1$ (e in tal caso ogni numero reale $x$ è soluzione). Sia dunque $a \neq 1$.

    Se $y \le 0$ essa non ha alcuna soluzione, vedere la proprietà \(\eqref{FFFFF}\).

    Il seguente teorema ci dice che essa ha una sola soluzione per ogni $y > 0$:

    !!! teorema "Teorema 2"

        Sia $a > 0$, $a\neq 1$, $y >0$. Esiste un unico numero reale $x$ tale che $a^x=y$.

- Tale numero prende il nome di logaritmo in base a di $y$ e si indica col simbolo:

    $$
    \log_a y
    $$

- Il logaritmo è l'operazione inversa dell'elevamento a potenza.

- il logaritmo di un numero in una data base è l'esponente al quale la base deve essere elevata per ottenere il numero stesso.

Siano

$$
x, y, a \in \R, ~~ x>0, y>0, a >0  ~~~({\rm reali~~positivi}) {\rm ~~e~~} a \neq 1,
$$

<strong>le proprietà principali dei logartimi</strong> sono (si deducono da quelle degli esponenziali):

!!! chiave ""

    \begin{align}
    \log_a (x \cdot y)&=\log_a x + \log_a y\\[2ex]
    \log_a \left(\frac{x}{y}\right)&=\log_a x - \log_a y\\[2ex]
    \log_a \left(\frac{1}{y}\right)&= - \log_a y
    \end{align}

!!! chiave ""

    \begin{align}
    \log_a x^{\alpha}&=\alpha \: \log_a x & (\forall \alpha \in \R)\\[2ex]
    \log_b x &=\frac{\log_a x}{\log_a b} & (\forall b >0, b \neq 1)\\[2ex]
    \log_a x &=\frac{1}{\log_x a} = - \log_{\frac{1}{a}} x & (x \neq  1)
    \end{align}

<strong>Notazione</strong>:

- $\lg n = \log_2 n$  $\quad \rightarrow$ <strong>logaritmo binario</strong>

- $\ln n = \log_{e}n$ $\quad \rightarrow$ <strong>logaritmo naturale</strong> (dove  $\red{ e \approx 2.718}$ è il <strong>numero di Nepero</strong>) (a volte il logaritmo naturale $\ln$ si denota anche $\log$ )

- $\lg^k n = (\lg n)^k$ $\quad \rightarrow$ <strong>potenza</strong>

- $\lg \lg n = \lg(\lg n)$ $\quad \rightarrow$ <strong>composizione</strong>

### 1.4 Approssimazioni

- un numero razionale può essere sempre espresso con precisione assoluta, sia ricorrendo alla scrittura frazionaria che a quella decimale (eventualmente con cifre periodiche).

- Invece non è possibile, naturalmente, scrivere tutte le cifre decimali di un numero irrazionale, dato che queste sono infinite e si susseguono senza periodicità.

- Cosa significa allora “conoscere” o “specificare” un numero irrazionale? Significa conoscere qualche algoritmo che ci consenta (almeno teoricamente) di scrivere tante cifre decimali esatte quante ne desideriamo.

    !!! esempio "Esempio 4: numeri irrazionali"

        - Nell'esempio (già considerato) del numero irrazionale:

            $$
            0,10100100010001\dots
            $$

            formato in base alla regola: scrivere una cifra 1, una cifra 0, una cifra 1, due cifre 0, una cifra 1, tre cifre 0, e così via) è chiaro che potremmo scrivere tante cifre quante ne desideriamo.

        - In altri casi, come

            $$
            \sqrt{2} {\rm ~~o~~} \log_2 3,
            $$

            le cose sono più laboriose e richiedono l'esecuzione di calcoli iterativi per determinare ogni successiva cifra decimale; tuttavia, questi calcoli sono effettivamente eseguibili.

- Altre volte, in Analisi matematica, un numero viene specificato in modo non costruttivo, denotandolo come l'unico numero che risolve un determinato problema (una volta che si sia dimostrato appunto che tale soluzione esiste ed è unica). Si tratta di un modo operativamente meno soddisfacente, ma teoricamente ineccepibile.

<strong>Aspetti pratici del calcolo di numeri irrazionali</strong>

- Ogni volta che eseguiamo calcoli con una <strong>calcolatrice tascabile</strong>, questa scriverà solo numeri con un numero fissato di cifre decimali dopo la virgola (tipicamente 9). Questo significa che stiamo lavorando solo con numeri razionali, anzi con un sottoinsieme finito dell'insieme $\Q$.

- Lavorando con un <strong>computer</strong> le cose migliorano un po', ma rimaniamo comunque nell'ambito di sottoinsiemi finiti di $\Q$. Occorre naturalmente esserne consapevoli.

- Oltre all'approssimazione generata dagli strumenti di calcolo, a volte siamo noi stessi a non essere interessati a troppe cifre decimali; introduciamo allora volutamente delle approssimazioni, scrivendo ad esempio

    $$
    \sqrt{2} \approx 1,414
    $$

    !!! chiave ""

        <strong>Regola di arrotondamento</strong>: l'ultima cifra che si scrive viene arrotondata all'unità inferiore (superiore) se la prima cifra che si trascura è da 0 a 4 (rispettivamente, da 5 a 9).

    !!! esempio "Esempio 5: Arrotondamento"

        Ad esempio:

        $$
        2,4138 \approx 2,41
        $$

        $$
        2,4152 \approx 2,42
        $$

## 2. Aritmetica modulare

!!! definizione "Definizione 1: di parte intera"

    Dato un numero reale $a \in \mathbb{R}$,  denotiamo con  $[a]$ o $\lfloor a \rfloor$  la <strong>parte intera</strong> (o “<strong>floor</strong>”) di $a$:

    $$
    [a] = {\rm intero~~} n {\rm~~tale~che~~} n \le a < n+1
    $$

!!! esempio "Esempio 6: Parte intera"

    $$
    [2,38] = 2;~~~~ [3] = 3;~~~~ [-1,8] = -2.
    $$

- Mentre per i numeri positivi la parte intera si ottiene semplicemente “buttando via le cifre dopo la virgola”, per i numeri negativi occorre prendere il massimo intero $\le a$, che è diverso da quello che si ottiene buttando via le cifre dopo la virgola (tranne nel caso in cui $a$ sia già un intero)

!!! definizione "Definizione 2: di mantissa"

    Dato un numero reale $a \in \mathbb{R}$, denotiamo con $(a)$  la <strong>mantissa</strong> (o parte decimale) di $a$:

    $$
    (a) = a - [a]
    $$

!!! esempio "Esempio 7: Mantissa"

    $$
    (2,38) = 0.38;~~~~ (3) = 0;~~~~ (-1,8) = 0.2.
    $$

- La mantissa quindi non è un intero ma un numero reale, compreso in $[0, 1)$.

- Per i numeri positivi, si ottiene semplicemente “buttando via le cifre prima della virgola”, per i numeri negativi la mantissa è il <strong>complemento a uno</strong> del numero che si ottiene buttando via le cifre prima della virgola.

!!! definizione "Definizione 3: di parte intera superiore"

    Dato un numero reale $a \in \mathbb{R}$, denotiamo con $\lceil a \rceil$ la <strong>parte intera superiore</strong> (o “<strong>ceil</strong>”) di $a$:

    $$
    \lceil a \rceil = {\rm intero~~} n {\rm~~tale~che~~} n -1  < a \le n
    $$

!!! esempio "Esempio 8: di ceil"

    $$
    \lceil 2,38 \rceil = 3;~~~~ \lceil 3 \rceil = 3;~~~~ \lceil -1,8 \rceil = -1.
    $$

<strong>Alcune proprietà</strong>:

Dato un numero reale $a \in \mathbb{R}$, abbiamo

!!! chiave ""

    $$
    a - 1 < \lfloor a \rfloor \le a \le \lceil a \rceil < a + 1
    $$

Dato un numero intero $n \in \mathbb{Z}$, abbiamo

!!! chiave ""

    $$
    \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil=n
    $$

Dato due numeri interi positivi $r,s \in \mathbb{Z}$, $r, s > 0$, abbiamo

!!! chiave ""

    \begin{align}
    \left\lceil \frac{r}{s}  \right\rceil &\le  \frac{r + (s-1)}{b}\\[2ex]
    \left\lfloor \frac{r}{s}  \right\rfloor &\ge  \frac{r - (s-1)}{s}
    \end{align}

Dato inoltre anche un numero reale non negativo  $p \in \mathbb{R},p \ge 0$, abbiamo

!!! chiave ""

    \begin{align}
    \left\lceil \frac{ \left \lceil \frac{p}{r} \right \rceil }{s} \right\rceil &= \left\lceil \frac{p}{r\:s} \right\rceil\\[2ex]
    \left\lfloor \frac{ \left \lfloor \frac{p}{r} \right \rfloor }{s} \right\rfloor &= \left\lfloor \frac{p}{r\:s} \right\rfloor
    \end{align}

!!! definizione "Definizione 4: Divisore"

    Un <strong>divisore</strong> di un intero ${n} \in \mathbb{Z}$, chiamato anche <strong>fattore</strong> di ${n}$, è un intero ${m} \in \mathbb{Z}$ che può essere moltiplicato per un qualche intero ${q} \in \mathbb{Z}$ per ottenere ${n}$, i.e., se ${n}={q} \cdot {m}$.

- Se ${m}$ è un divisore di ${n}$,   ${n}$ è un <strong>multiplo</strong> di ${m}$.

- Un intero ${n}$ è  <strong>divisibile</strong>  per un altro intero ${m}$ se ${m}$ è un <em>divisore</em> di ${n}$.

- Per un intero ${a} \in \mathbb{Z}$ e un intero positivo  ${n} \in \mathbb{Z}, {n}>0$, il valore ${a} \mod {n}$ è il resto  della divisione $\frac{{a}}{{n}}$.

!!! definizione "Definizione 5: di modulo (remainder)"

    Dato ${a} \in \mathbb{Z}$ e ${n} \in \mathbb{Z}, {n} >0$,

    $$
    {a} \mod {n} = {a} - {n} \: \left\lfloor \frac{{a}}{{n}} \right\rfloor
    $$

- Segue che $0 < {a} \mod {n} < {n}$

!!! chiave ""

    Se $({a} \mod {n}) = ({b} \mod {n})$,  scriviamo

    $$
    {a} \equiv {b} \:(\mod {n})
    $$

    e diciamo che ${a}$ è <strong>equivalente</strong> a ${b}$, modulo ${n}$.

!!! esempio "Esempio 9"

    Per esempio, $23$ and $13$ sono equivalenti modulo $5$ e scriviamo $23 \equiv 13 \:(\mod 5)$

- Equivalentemente, ${a} \equiv {b} \:(\mod {n})$ se ${a}$ e ${b}$ hanno lo stesso resto se divisi per  ${n}$.

- Equivalentemente, ${a} \equiv {b} \:(\mod {n})$ se e solo se  ${n}$ è un divisore di $|{b} - {a}|$.
