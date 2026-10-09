---
title: "Radicali, potenze, logaritmi e aritmetica modulare"
---

# Radicali, potenze, logaritmi e aritmetica modulare

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 6** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-numeri-06-radicali-potenze-logaritmi.pdf)

</div>

## 1. Radicali, potenze, logaritmi

- In conseguenza della proprietà $R_4$ possiamo eseguire, nel campo reale, operazioni che sono solo occasionalmente possibili nel campo razionale, come l'estrazione di radice o l'elevamento a potenza.

### 1.1 Radici $n$-esime aritmetiche

<a id="box-theoXXX-1"></a>

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

<a id="box-texexpbox1-2"></a>

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
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1^2\)</span></td>
    <td><span class="arithmatex">\(=1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4\)</span></td>
    <td><span class="arithmatex">\((1,4)^2\)</span></td>
    <td><span class="arithmatex">\(=1,96\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,41\)</span></td>
    <td><span class="arithmatex">\((1,41)^2\)</span></td>
    <td><span class="arithmatex">\(=1,9881\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,414\)</span></td>
    <td><span class="arithmatex">\((1,414)^2\)</span></td>
    <td><span class="arithmatex">\(=1,999396\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4142\)</span></td>
    <td><span class="arithmatex">\((1,4142)^2\)</span></td>
    <td><span class="arithmatex">\(=1,99996164\)</span></td>
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
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2^2\)</span></td>
    <td><span class="arithmatex">\(=4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,5\)</span></td>
    <td><span class="arithmatex">\((1,5)^2\)</span></td>
    <td><span class="arithmatex">\(=2, 25\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,42\)</span></td>
    <td><span class="arithmatex">\((1,42)^2\)</span></td>
    <td><span class="arithmatex">\(=2,0164\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,415\)</span></td>
    <td><span class="arithmatex">\((1,415)^2\)</span></td>
    <td><span class="arithmatex">\(=2,002225\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4143\)</span></td>
    <td><span class="arithmatex">\((1,4143)^2\)</span></td>
    <td><span class="arithmatex">\(=2,00024449\)</span></td>
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

    2. se l'esponente $b=\frac{n}{m}$ è razionale, <em>scritto in forma ridotta ai minimi termini</em>, purché non sia $n$ dispari ed $m$ pari.

    Se $c < 0$ e $m$ dispari, si definisce

    $$
    \sqrt[m]{c}=-\sqrt[m]{-c}
    $$

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 2: base negativa"

    Per esempio:

    $$
    (-2)^{\frac{3}{5}} = \sqrt[5]{(-2)^3} = \sqrt[5]{-8} = - \sqrt[5]{8}
    $$

    $$
    (-2)^{\frac{2}{5}} = \sqrt[5]{(-2)^2} = \sqrt[5]{4}
    $$

    L'ipotesi che la frazione sia ridotta ai minimi termini è essenziale: $\frac{1}{3}$ e $\frac{2}{6}$ sono lo stesso numero razionale, ma

    $$
    \sqrt[3]{(-8)^1} = \sqrt[3]{-8} = -2 \qquad {\rm ~~mentre~~} \qquad \sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2.
    $$

    Solo la prima scrittura, con $\frac{n}{m}=\frac{1}{3}$ ridotta ai minimi termini, definisce $(-8)^{\frac{1}{3}}$.

- Quando si dice “non esiste in $\R$” si intende che non è possibile definire tale operazione in modo da mantenere valide le usuali regole di calcolo.

<a id="box-texexpbox1-4"></a>

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
    a^c&>0 ~~~~ \forall c \label{FFFFF}\\[2ex]
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

    <a id="box-theoXXX-5"></a>

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

<strong>le proprietà principali dei logaritmi</strong> sono (si deducono da quelle degli esponenziali):

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

    <a id="box-texexpbox1-6"></a>

    !!! esempio "Esempio 4: numeri irrazionali"

        - Nell'esempio (già considerato) del numero irrazionale:

            $$
            0,101001000100001\dots
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

    <a id="box-texexpbox1-7"></a>

    !!! esempio "Esempio 5: Arrotondamento"

        Ad esempio:

        $$
        2,4138 \approx 2,41
        $$

        $$
        2,4152 \approx 2,42
        $$

## 2. Aritmetica modulare

<a id="box-notationA-8"></a>

!!! definizione "Definizione 1: di parte intera"

    Dato un numero reale $a \in \mathbb{R}$,  denotiamo con  $[a]$ o $\lfloor a \rfloor$  la <strong>parte intera</strong> (o “<strong>floor</strong>”) di $a$:

    $$
    [a] = {\rm intero~~} n {\rm~~tale~che~~} n \le a < n+1
    $$

!!! chiave ""

    Equivalentemente, la parte intera di $a$ è il <strong>più grande</strong> intero minore o uguale ad $a$:

    $$
    \lfloor a \rfloor = \max \big\{ n \in \Z:~~ n \le a \big\}.
    $$

- Le due descrizioni coincidono. Se $n \le a < n+1$, allora $n$ appartiene all'insieme $\{k \in \Z: k \le a\}$ e ogni altro suo elemento $k$ soddisfa $k \le a < n+1$, cioè $k \le n$ (essendo $k$ e $n$ interi): quindi $n$ ne è il massimo. Viceversa, se $n$ è il massimo di quell'insieme, allora $n \le a$ e inoltre $a < n+1$, perché altrimenti $n+1$ apparterrebbe all'insieme e $n$ non ne sarebbe il massimo.

<a id="box-texexpbox1-9"></a>

!!! esempio "Esempio 6: Parte intera"

    $$
    [2,38] = 2;~~~~ [3] = 3;~~~~ [-1,8] = -2.
    $$

- Mentre per i numeri positivi la parte intera si ottiene semplicemente “buttando via le cifre dopo la virgola”, per i numeri negativi occorre prendere il massimo intero $\le a$, che è diverso da quello che si ottiene buttando via le cifre dopo la virgola (tranne nel caso in cui $a$ sia già un intero)

<a id="box-notationA-10"></a>

!!! definizione "Definizione 2: di mantissa"

    Dato un numero reale $a \in \mathbb{R}$, denotiamo con $(a)$  la <strong>mantissa</strong> (o parte decimale) di $a$:

    $$
    (a) = a - [a]
    $$

<a id="box-texexpbox1-11"></a>

!!! esempio "Esempio 7: Mantissa"

    $$
    (2,38) = 0.38;~~~~ (3) = 0;~~~~ (-1,8) = 0.2.
    $$

- La mantissa quindi non è un intero ma un numero reale, compreso in $[0, 1)$. Infatti, posto $n = [a]$, dalla definizione di parte intera abbiamo $n \le a < n+1$ e, sottraendo $n$,

    $$
    0 \le \underbrace{a - n}_{(a)} < 1.
    $$

- Per i numeri positivi, si ottiene semplicemente “buttando via le cifre prima della virgola”, per i numeri negativi la mantissa è il <strong>complemento a uno</strong> del numero che si ottiene buttando via le cifre prima della virgola.

<a id="box-notationA-12"></a>

!!! definizione "Definizione 3: di parte intera superiore"

    Dato un numero reale $a \in \mathbb{R}$, denotiamo con $\lceil a \rceil$ la <strong>parte intera superiore</strong> (o “<strong>ceil</strong>”) di $a$:

    $$
    \lceil a \rceil = {\rm intero~~} n {\rm~~tale~che~~} n -1  < a \le n
    $$

!!! chiave ""

    Equivalentemente, la parte intera superiore di $a$ è il <strong>più piccolo</strong> intero maggiore o uguale ad $a$:

    $$
    \lceil a \rceil = \min \big\{ n \in \Z:~~ n \ge a \big\}.
    $$

- Anche qui le due descrizioni coincidono. Se $n-1 < a \le n$, allora $n$ appartiene all'insieme $\{k \in \Z: k \ge a\}$ e ogni altro suo elemento $k$ soddisfa $k \ge a > n-1$, cioè $k \ge n$: quindi $n$ ne è il minimo. Viceversa, se $n$ è il minimo di quell'insieme, allora $a \le n$ e inoltre $n-1 < a$, perché altrimenti $n-1$ apparterrebbe all'insieme e $n$ non ne sarebbe il minimo.

<a id="box-texexpbox1-13"></a>

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

- Segue subito dalle due definizioni: da $\lfloor a \rfloor \le a < \lfloor a \rfloor +1$ si ricava $\lfloor a \rfloor \le a$ e $a - 1 < \lfloor a \rfloor$; da $\lceil a \rceil -1 < a \le \lceil a \rceil$ si ricava $a \le \lceil a \rceil$ e $\lceil a \rceil < a+1$.

Valgono inoltre le seguenti relazioni fra le due funzioni.

<a id="box-OSS_floor_segno-14"></a>

!!! osservazione "Osservazione 1: parte intera, parte intera superiore e cambio di segno"

    Per ogni numero reale $a \in \mathbb{R}$ si ha

    \begin{equation}
    - \lfloor a \rfloor = \lceil -a \rceil \qquad {\rm ~~e~~} \qquad - \lceil a \rceil = \lfloor -a \rfloor
    \label{floor_segno}
    \end{equation}

    e inoltre

    \begin{equation}
    \lfloor a \rfloor = a ~~~\Longleftrightarrow~~~ a \in \Z ~~~\Longleftrightarrow~~~ \lceil a \rceil = a
    \label{floor_intero}
    \end{equation}

??? dimostrazione "Dimostrazione"

    Poniamo $n = \lfloor a \rfloor$, cioè $n \le a < n+1$. Moltiplicando per $-1$ (e invertendo i versi) otteniamo

    $$
    -n-1 < -a \le -n, \qquad {\rm ~cioè~} \qquad (-n)-1 < -a \le -n.
    $$

    Poiché $-n$ è un intero, la definizione di parte intera superiore dà $\lceil -a \rceil = -n = - \lfloor a \rfloor$: questa è la prima identità della \(\eqref{floor_segno}\). Applicando la prima identità al numero $-a$ si ottiene $-\lfloor -a \rfloor = \lceil a \rceil$, cioè la seconda.

    Per la \(\eqref{floor_intero}\): se $\lfloor a \rfloor = a$ allora $a$ è un intero, perché $\lfloor a \rfloor \in \Z$. Viceversa, se $a \in \Z$ allora $a \le a < a+1$ e quindi $\lfloor a \rfloor = a$. Allo stesso modo, se $\lceil a \rceil = a$ allora $a \in \Z$; e se $a \in \Z$ allora $a-1 < a \le a$, quindi $\lceil a \rceil = a$. <span class="qed">□</span>

Le due funzioni sono completamente caratterizzate dalle disuguaglianze seguenti.

<a id="box-OSS_floor_car-15"></a>

!!! osservazione "Osservazione 2: caratterizzazioni della parte intera e della parte intera superiore"

    Per ogni numero reale $a \in \mathbb{R}$ e ogni numero intero $n \in \Z$ si ha:

    \begin{align}
    \lfloor a \rfloor = n &~~\Longleftrightarrow~~ n \le a < n+1 \label{floor_C1}\\[1ex]
    \lfloor a \rfloor = n &~~\Longleftrightarrow~~ a-1 < n \le a \label{floor_C2}\\[1ex]
    \lceil a \rceil = n &~~\Longleftrightarrow~~ n-1 < a \le n \label{floor_C3}\\[1ex]
    \lceil a \rceil = n &~~\Longleftrightarrow~~ a \le n < a+1 \label{floor_C4}\\[1ex]
    a < n &~~\Longleftrightarrow~~ \lfloor a \rfloor < n \label{floor_C5}\\[1ex]
    n \le a &~~\Longleftrightarrow~~ n \le \lfloor a \rfloor \label{floor_C6}\\[1ex]
    a \le n &~~\Longleftrightarrow~~ \lceil a \rceil \le n \label{floor_C7}\\[1ex]
    n < a &~~\Longleftrightarrow~~ n < \lceil a \rceil \label{floor_C8}
    \end{align}

    e inoltre

    \begin{equation}
    \lfloor a + n \rfloor = \lfloor a \rfloor + n \qquad {\rm ~~e~~} \qquad \lceil a + n \rceil = \lceil a \rceil + n
    \label{floor_C9}
    \end{equation}

??? dimostrazione "Dimostrazione"

    - La \(\eqref{floor_C1}\) è la definizione di parte intera e la \(\eqref{floor_C3}\) è la definizione di parte intera superiore.

    - La \(\eqref{floor_C2}\) è una riscrittura della \(\eqref{floor_C1}\): la condizione $n \le a < n+1$ equivale a “$n \le a$ e $a < n+1$”, cioè a “$n \le a$ e $a-1 < n$”. Allo stesso modo la \(\eqref{floor_C4}\) è una riscrittura della \(\eqref{floor_C3}\): $n-1 < a \le n$ equivale a “$a \le n$ e $n < a+1$”.

    - \(\eqref{floor_C5}\): se $a < n$, allora $\lfloor a \rfloor \le a < n$. Viceversa, se $\lfloor a \rfloor < n$, allora, essendo entrambi interi, $\lfloor a \rfloor \le n-1$ e quindi $a < \lfloor a \rfloor + 1 \le n$.

    - \(\eqref{floor_C7}\): se $a \le n$, allora $n$ appartiene all'insieme $\{k \in \Z: k \ge a\}$, di cui $\lceil a \rceil$ è il minimo, quindi $\lceil a \rceil \le n$. Viceversa, se $\lceil a \rceil \le n$, allora $a \le \lceil a \rceil \le n$.

    - Le \(\eqref{floor_C6}\) e \(\eqref{floor_C8}\) si ottengono negando i due membri, rispettivamente, della \(\eqref{floor_C5}\) e della \(\eqref{floor_C7}\): la negazione di $a<n$ è $n \le a$ e la negazione di $\lfloor a \rfloor < n$ è $n \le \lfloor a \rfloor$; la negazione di $a \le n$ è $n < a$ e la negazione di $\lceil a \rceil \le n$ è $n < \lceil a \rceil$.

    - \(\eqref{floor_C9}\): posto $m = \lfloor a \rfloor$, cioè $m \le a < m+1$, sommando $n$ si ottiene $m+n \le a+n < (m+n)+1$ con $m+n \in \Z$, quindi $\lfloor a+n \rfloor = m+n = \lfloor a \rfloor + n$. In modo analogo, posto $m=\lceil a \rceil$, da $m-1 < a \le m$ si ottiene $(m+n)-1 < a+n \le m+n$, quindi $\lceil a+n \rceil = m+n = \lceil a \rceil + n$.

    <p class="qed-riga"><span class="qed">□</span></p>

Dato un numero intero $n \in \mathbb{Z}$, abbiamo

!!! chiave ""

    $$
    \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil=n
    $$

??? dimostrazione "Dimostrazione"

    Distinguiamo i due casi.

    - Se $n$ è <strong>pari</strong>, esiste $m \in \Z$ tale che $n = 2\:m$, e poiché $m$ è un intero la \(\eqref{floor_intero}\) dà $\lfloor m \rfloor = \lceil m \rceil = m$:

        $$
        \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil
        = \left\lfloor \frac{2\:m}{2} \right\rfloor + \left\lceil \frac{2\:m}{2} \right\rceil
        = \lfloor m \rfloor + \lceil m \rceil = m + m = 2\:m = n.
        $$

    - Se $n$ è <strong>dispari</strong>, esiste $m \in \Z$ tale che $n = 2\:m+1$. Poiché $m \le m + \frac{1}{2} < m+1$, la \(\eqref{floor_C1}\) dà $\left\lfloor m + \frac{1}{2} \right\rfloor = m$; poiché $(m+1)-1 < m+\frac{1}{2} \le m+1$, la \(\eqref{floor_C3}\) dà $\left\lceil m + \frac{1}{2} \right\rceil = m+1$. Quindi

        $$
        \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil
        = \left\lfloor m + \frac{1}{2} \right\rfloor + \left\lceil m + \frac{1}{2} \right\rceil
        = m + (m+1) = 2\:m+1 = n.
        $$

    <p class="qed-riga"><span class="qed">□</span></p>

Dati due numeri interi positivi $r,s \in \mathbb{Z}$, $r, s > 0$, abbiamo

!!! chiave ""

    \begin{align}
    \left\lceil \frac{r}{s}  \right\rceil &\le  \frac{r + (s-1)}{s}\\[2ex]
    \left\lfloor \frac{r}{s}  \right\rfloor &\ge  \frac{r - (s-1)}{s}
    \end{align}

Dato inoltre anche un numero reale non negativo  $p \in \mathbb{R},p \ge 0$, abbiamo

!!! chiave ""

    \begin{align}
    \left\lceil \frac{ \left \lceil \frac{p}{r} \right \rceil }{s} \right\rceil &= \left\lceil \frac{p}{r\:s} \right\rceil\\[2ex]
    \left\lfloor \frac{ \left \lfloor \frac{p}{r} \right \rfloor }{s} \right\rfloor &= \left\lfloor \frac{p}{r\:s} \right\rfloor
    \end{align}

<a id="box-notationA-16"></a>

!!! definizione "Definizione 4: Divisore"

    Un <strong>divisore</strong> di un intero ${n} \in \mathbb{Z}$, chiamato anche <strong>fattore</strong> di ${n}$, è un intero ${m} \in \mathbb{Z}$ che può essere moltiplicato per un qualche intero ${q} \in \mathbb{Z}$ per ottenere ${n}$, i.e., se ${n}={q} \cdot {m}$.

- Se ${m}$ è un divisore di ${n}$,   ${n}$ è un <strong>multiplo</strong> di ${m}$.

- Un intero ${n}$ è  <strong>divisibile</strong>  per un altro intero ${m}$ se ${m}$ è un <em>divisore</em> di ${n}$.

- Per un intero ${a} \in \mathbb{Z}$ e un intero positivo  ${n} \in \mathbb{Z}, {n}>0$, il valore ${a} \mod {n}$ è il resto  della divisione $\frac{{a}}{{n}}$.

<a id="box-funcP2-17"></a>

!!! definizione "Definizione 5: di modulo (remainder)"

    Dato ${a} \in \mathbb{Z}$ e ${n} \in \mathbb{Z}, {n} >0$,

    $$
    {a} \mod {n} = {a} - {n} \: \left\lfloor \frac{{a}}{{n}} \right\rfloor
    $$

- Segue che $0 \le {a} \mod {n} < {n}$

!!! chiave ""

    Se $({a} \mod {n}) = ({b} \mod {n})$,  scriviamo

    $$
    {a} \equiv {b} \:(\mod {n})
    $$

    e diciamo che ${a}$ è <strong>equivalente</strong> a ${b}$, modulo ${n}$.

<a id="box-texexpbox1-18"></a>

!!! esempio "Esempio 9"

    Per esempio, $23$ e $13$ sono equivalenti modulo $5$ e scriviamo $23 \equiv 13 \:(\mod 5)$

- Equivalentemente, ${a} \equiv {b} \:(\mod {n})$ se ${a}$ e ${b}$ hanno lo stesso resto se divisi per  ${n}$.

- Equivalentemente, ${a} \equiv {b} \:(\mod {n})$ se e solo se  ${n}$ è un divisore di $|{b} - {a}|$.
