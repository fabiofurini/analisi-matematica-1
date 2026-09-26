---
title: "Le funzioni"
---

# Le funzioni

<div class="info-capitolo" markdown>

**Parte 2 · Funzioni · Capitolo 1** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/funzioni-01-funzioni.pdf)

</div>
## 1. Il concetto di funzione

!!! chiave ""

    L'esistenza di una <strong>grandezza variabile</strong> sottintende l'esistenza di una <strong>relazione</strong> tra <strong>due grandezze</strong>, ovvero la dipendenza di una grandezza da un'altra.

- Questa relazione segue, di volta in volta, una certa <strong>legge</strong> o <strong>formula</strong>.

<a id="box-texexpbox1-1"></a>

!!! esempio "Esempio 1: Leggi/formule $\rightarrow$ funzioni"

    Se si lascia cadere un oggetto pesante da una certa altezza, lo spazio percorso dall'oggetto varia col tempo $t$ secondo la formula:

    \begin{equation*}
    s(t) = \frac{1}{2}\:g\:t^2 \qquad {\rm ~~con~~} t \ge 0
    \end{equation*}

    dove  $g \approx 9,8$ è costante di accelerazione di gravità.

    ![Figura 1](../img/funzioni-01-funzioni/fig01.svg){ .fig .ovale loading=lazy style="width:48%" }

    Al tempo $t$ viene quindi associato lo spazio percorso $s(t)$: $t  \mapsto s(t)$.

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 2: Leggi/formule $\rightarrow$ funzioni"

    Se un capitale unitario viene investito per un anno al tasso annuale $i$ con interessi pagati mensilmente a un tasso $\frac{i}{12}$, avremo:

    - dopo il primo mese, un capitale pari a:

        $$
        1+ \frac{i}{12} \cdot 1= \underbrace{1 + \frac{i}{12}}_{\alpha}
        $$

    - dopo il secondo mese, un capitale pari a:

        $$
        \underbrace{1 + \frac{i}{12}}_{\alpha} + \frac{i}{12} \underbrace{\left( 1 + \frac{i}{12} \right)}_{\alpha} = \left(1 + \frac{i}{12}\right) \: \left(1 + \frac{i}{12}\right) =  \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta}
        $$

    - dopo il terzo mese, un capitale pari a:

        $$
        \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta} + \frac{i}{12} \: \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta} 
        = \left(1 + \frac{i}{12}\right)^2 \: \left(1 + \frac{i}{12}\right)
        = \left(1 + \frac{i}{12}\right)^3
        $$

    Ripetendo il ragionamento, il capitale alla fine dell'anno dipende quindi dal tasso $i$ secondo la formula:

    \begin{equation*}
    k(i) = \left( 1 + \frac{i}{12}\right)^{12} \qquad {\rm ~~con~~} i \in [0,1]
    \end{equation*}

    ![Figura 2](../img/funzioni-01-funzioni/fig02.svg){ .fig .ovale loading=lazy style="width:42%" }

    Al tasso $i$ viene quindi associato il capitale $k(i)$ alla fine dell'anno: $i  \mapsto k(i)$

- In ciascuno degli esempi precedenti, a un <em>numero reale</em> (<strong>ingresso</strong>) viene associato <strong><em>univocamente</em></strong> un altro <em>numero reale</em> (<strong>uscita</strong>). È proprio l'<strong>univocità della relazione</strong> a caratterizzare una funzione.

- In generale, gli <strong>ingressi ammissibili</strong> per una data relazione (funzione) sono soggetti a restrizioni naturali, legate alla natura stessa della relazione.

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 3: Ingressi ammissibili"

    - Nel primo esempio il numero reale “di partenza” ha il significato di <em>tempo</em>; immaginando di lasciar cadere l'oggetto a un tempo iniziale $t = 0$ è evidente che ci si dovrà limitare a tempi $t \ge 0$.

    - Nel secondo esempio, evidentemente dovrà essere $0 \le i \le 1$, dove $1$ corrisponde a un tasso del 100%.

## 2. Definizione di funzione, dominio, codominio e immagine

<a id="box-defDominio-4"></a>

!!! definizione "Definizione 1: di dominio"

    L'insieme degli ingressi  ammissibili per una data funzione prende il nome di <strong>dominio</strong>.

- Spesso si usano le locuzioni <strong>variabile indipendente</strong> per indicare un <em>ingresso</em> generico e <strong>variabile dipendente</strong> per indicare l'<em>uscita</em>.

<a id="box-texexpbox1-5"></a>

!!! esempio "Esempio 4: Altri tipi di relazioni"

    Consideriamo l'insieme degli studenti di un determinato corso.

    - Se $A$ è l'insieme degli studenti e $B$ è l'insieme dei loro nomi, la relazione che associa ad ogni studente il suo nome è <em>univoca</em>.

    - In questo caso né $A$ né $B$ sono insiemi numerici, ma tuttavia risulta ben definita una relazione univoca tra questi due insiemi.

    Mentre il viceversa non è necessariamente vero: potrebbero esserci due studenti con lo stesso nome.

<a id="box-defFunzione-6"></a>

!!! definizione "Definizione 2: di funzione"

    Dati due insiemi $A$, $B$ qualsiasi, una <strong>funzione</strong> $f$ di <strong>dominio</strong> $A$ a valori in $B$ (o anche “di <strong>codominio</strong> $B$”) è una qualsiasi legge che ad ogni elemento di $A$ associa <em>uno e un solo elemento</em> di $B$.

- La scrittura:

    \begin{equation*}
    f: A \rightarrow B
    \end{equation*}

    (che si legge “$f$  definita da $A$ a $B$”), indica il <strong>dominio</strong> e il <strong>codominio</strong> della funzione $f$.

- La scrittura

    \begin{equation*}
    f: x \mapsto f(x)
    \end{equation*}

    (che si legge “$f$ ad $x$ associa $f(x)$”) indica come la funzione $f$ agisce sugli elementi.

- Il <strong>simbolo $f(x)$ indica l'uscita o il valore</strong>  che la funzione $f$ associa ad $x$, e non va confuso col simbolo $f$, che denota la <strong>funzione stessa</strong>.

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 5: Notazione delle funzioni"

    Per la funzione

    \begin{equation*}
    k(i) = \left( 1 + \frac{i}{12}\right)^{12}
    \end{equation*}

    dell'esempio precedente si avrebbe:

    $$
    k: [0,1] \rightarrow \mathbb{R}
    $$

    $$
    k: i \mapsto \left( 1 + \frac{i}{12}\right)^{12}
    $$

- Si usa anche la scrittura

    $$
    y = f (x)
    $$

    per indicare che la variabile $y$ è funzione di $x$. In questo caso $y$ è l'uscita o il valore che $f$ associa all'ingresso $x$.

    !!! chiave ""

        Per brevità, a volte si definisce direttamente il valore di $f(x)$ in funzione di $x$, come ad esempio $f(x)=x^2+10$.

- In generale, si può pensare a una funzione come a una <strong>scatola nera</strong> che a ogni ingresso ammissibile $x$ (<strong>input</strong>) associa un'unica uscita $f(x)$ (<strong>output</strong>) :

![Figura 3](../img/funzioni-01-funzioni/fig03.svg){ .fig .ovale loading=lazy style="width:75%" }

<a id="box-defImmagine-8"></a>

!!! definizione "Definizione 3: di immagine e immagine del dominio"

    L'uscita corrispondente a $x$ si chiama <strong>immagine</strong> di $x$; l'insieme delle possibili uscite si chiama <strong>immagine del dominio $A$ tramite $f$</strong> e si indica con il simbolo $f(A)$ o $\Ima f$.

- Si noti che nella scrittura $f: A \rightarrow B$, il codominio $B$ può essere più grande dell'immagine $f(A)$, ovvero in generale abbiamo

    $$
    f(A) \subseteq B.
    $$

- Se $f$ ha valori reali, solitamente si scrive $f : A \rightarrow \mathbb{R}$ senza precisare quale sia l'effettiva immagine di $f$.

## 3. Suriezioni, iniezioni e biiezioni

<a id="box-notationA-9"></a>

!!! definizione "Definizione 4: di suriezione (funzione suriettiva)"

    Una funzione $f$ è una <strong>suriezione</strong> se l'immagine del suo dominio corrisponde al suo codominio.

- Una suriezione $f:  A \rightarrow B$ si chiama talvolta anche un <em>mapping</em> da $A$ a $B$.

- Rappresentazione insiemistica:

<div class="figure-affiancate" markdown>

![Figura 4](../img/funzioni-01-funzioni/fig04.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figura 5](../img/funzioni-01-funzioni/fig05.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-10"></a>

!!! esempio "Esempio 6: funzioni suriettive e non suriettive"

    - La funzione $f(n)=\lfloor \frac{n}{2} \rfloor$ è una funzione suriettiva da $\mathbb{N}$ a $\mathbb{N}$, dato che ogni elemento nel codominio $\mathbb{N}$ è l'immagine di un qualche valore del dominio.

    - La funzione $f(n)= 2\:n$ non è una funzione suriettiva da $\mathbb{N}$ a $\mathbb{N}$, dato che nessun argomento di $f$ produce $3$ come valore.

    - La funzione $f(n)= 2\:n$ è però una funzione suriettiva dai numeri naturali ai numeri pari.

<a id="box-propAAA-11"></a>

!!! osservazione "Osservazione 1"

    Dati due insiemi $A$ e $B$, e una funzione $f: A \rightarrow B$, se $f$ è suriettiva allora $|A| \ge |B|$.

??? dimostrazione "Dimostrazione"

    Procediamo per induzione sul numero $n$ di elementi nel codominio della funzione.

    - <strong>Primo passo dell'induzione</strong>

        Se c'è un solo elemento nel codominio ($|B|=1$),  poiché la funzione è suriettiva, abbiamo $|A| \ge 1$ (ogni elemento di $B$ è immagine di almeno un elemento di $A$). Quindi $1 \ge 1$, che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo allora che tutte le funzioni con codominio di dimensione $n$ soddisfino $|A_{n}| \ge |B_{n}|$.

        Considerando codomini di dimensione  $n+1$ abbiamo $|B_{n+1}|=|B_{n}|+1$. Dato che il codominio ha un elemento in più e la funzione è suriettiva allora abbiamo $|A_{n+1}| \ge |A_{n}| +1$. Sostituendo abbiamo:

        $$
        \underbrace{|A_{n}|}_{\le~|A_{n+1}|-1} \ge \underbrace{|B_{n}|}_{=~|B_{n+1}|-1} {\rm~~quindi~~} |A_{n+1}| \ge |B_{n+1}|.
        $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-12"></a>

!!! definizione "Definizione 5: di iniezione (funzione iniettiva)"

    Una funzione $f$ è un'<strong>iniezione</strong> se argomenti distinti di $f$ producono valori distinti, ovvero se  $a \neq b$ implica $f(a) \neq f(b)$.

- rappresentazione insiemistica:

<div class="figure-affiancate" markdown>

![Figura 6](../img/funzioni-01-funzioni/fig06.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figura 7](../img/funzioni-01-funzioni/fig07.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-13"></a>

!!! esempio "Esempio 7"

    - La funzione $f(n)=  2\:n$ è una funzione iniettiva da $\mathbb{N}$ a $\mathbb{N}$, dato che ciascun numero pari $b$ è l'immagine attraverso  $f$ di esattamente un elemento del dominio, ovvero $n=\frac{b}{2}$

    - La funzione $f(n)=\lfloor \frac{n}{2} \rfloor$ non è una funzione iniettiva dato che il valore 1 si ottiene con due argomenti: $2$ e $3$.

- Una iniezione è anche chiamata una funzione <strong>one-to-one</strong>.

<a id="box-propAAA-14"></a>

!!! osservazione "Osservazione 2"

    Dati due insiemi $A$ e $B$, e una funzione $f: A \rightarrow B$, se $f$ è iniettiva allora $|A| \le |B|$.

??? dimostrazione "Dimostrazione"

    Procediamo per induzione sul numero di elementi $n$ del dominio della funzione.

    - <strong>Primo passo dell'induzione</strong>

        Se c'è un solo elemento nel dominio ($|A|=1$),  poiché ogni elemento del dominio è associato a uno e un solo elemento nel codominio, abbiamo $|B| \ge 1$.  Quindi $1 \le 1$, che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo allora che tutte le funzioni con dominio di dimensione $n$ soddisfino $|A_{n}| \le |B_{n}|$.

        Considerando domini di dimensione $n+1$ abbiamo $|A_{n+1}|=|A_{n}|+1$ e dato che la funzione è iniettiva  $|B_{n+1}| \ge |B_{n}| +1$. Sostituendo abbiamo

        $$
        \underbrace{|A_{n}|}_{=~|A_{n+1}|-1} \le \underbrace{|B_{n}|}_{\le~|B_{n+1}|-1} {\rm~~quindi~~} |A_{n+1}| \le |B_{n+1}|.
        $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-15"></a>

!!! definizione "Definizione 6: di biiezione (funzione biunivoca o bigettiva)"

    Una funzione $f$ è una <strong>biiezione</strong> se: $(i)$ è <u><em>iniettiva</em></u> e $(ii)$ è <u><em>suriettiva</em></u>.

- rappresentazione insiemistica:

![Figura 8](../img/funzioni-01-funzioni/fig08.svg){ .fig .ovale loading=lazy style="width:32%" }

<a id="box-texexpbox1-16"></a>

!!! esempio "Esempio 8"

    - La funzione $f(n)= (-1)^n\:\lceil \frac{n}{2} \rceil$ è una biiezione da $\mathbb{N}$ a $\mathbb{Z}$. I valori della funzione sono:

        $$
        f(0)=0,~~~f(1)=-1,~~~f(2)=1,~~~f(3)=-2,~~~f(4)=2 \dots
        $$

        La funzione è iniettiva, dato che nessun elemento di $\mathbb{Z}$ è immagine di più di un elemento di  $\mathbb{N}$. La funzione è suriettiva, dato che  tutti gli elementi di  $\mathbb{Z}$ sono immagini di un qualche elemento di $\mathbb{N}$.

- Una biiezione è chiamata anche una corrispondenza <strong>one-to-one</strong>, dato che accoppia elementi del dominio a elementi del codominio.

- Una biiezione da un insieme $A$  a se stesso è chiamata anche <strong>permutazione</strong>.
