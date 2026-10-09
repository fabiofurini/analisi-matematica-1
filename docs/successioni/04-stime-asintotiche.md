---
title: "Confronti e stime asintotiche"
---

# Confronti e stime asintotiche

<div class="info-capitolo" markdown>

**Parte 3 · Limiti di successioni · Capitolo 4** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-successioni-04-stime-asintotiche.pdf)

</div>

## 1. Confronti e stime asintotiche

- Abbiamo visto che una successione che tende a $0$ è un <strong>infinitesimo</strong>; una successione che diverge (a $\ip$, a $\im$) si dice <strong>infinito</strong>.

- Quando due successioni sono entrambe infinitesimi o entrambe infiniti è utile poter stabilire un confronto tra di esse, per capire quale delle due tenda “<strong>più rapidamente</strong>” a $0$ o all'infinito.

<a id="box-texexpbox1-1"></a>

!!! esempio "Esempio 1: Infiniti"

    Esempi di infiniti sono le successioni seguenti:

    $$
    \left\{\log n \right\}, \quad \left\{\sqrt{n} \right\}, \quad \left\{n^2 \right\}, \quad \left\{2^n \right\}
    $$

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 2: Infinitesimi"

    Esempi di infinitesimi sono le successioni seguenti:

    $$
    \left\{ \frac{1}{\log n} \right\}, \quad \left\{ \frac{1}{ \sqrt{n}} \right\}, \quad \left\{ \frac{1}{n^2} \right\}, \quad \left\{ \frac{1}{2^n} \right\}
    $$

- Siano $\{a_n\}$ e $\{b_n\}$ <strong>due infiniti</strong>, considerando il limite del loro rapporto abbiamo 4 casi:

    $$
    \lim_{n \rightarrow +\infty} \frac{a_n}{b_n} = 
    \begin{cases}
    0 & {\rm ~~~~caso~~1):~~}  \{a_n\} {\rm ~~è~un~infinito~di ~\textbf{ordine inferiore } a~~} \{b_n\}\\
    l \in \R, l \neq 0  & {\rm ~~~~caso~~2):~~} \{a_n\} {\rm ~e~} \{b_n\} {\rm ~sono~infiniti~dello~\textbf{stesso ordine}} \\
    \pm \infty & {\rm ~~~~caso~~3):~~} \{a_n\} {\rm ~~è~un~infinito~di ~\textbf{ordine superiore } a~~} \{b_n\}\\
    {\rm inesistente} & {\rm ~~~~caso~~4):~~}  \{a_n\} {\rm ~e~} \{b_n\} {\rm ~non~sono~confrontabili}
    \end{cases}
    $$

- Siano $\{a_n\}$ e $\{b_n\}$ <strong>due infinitesimi</strong> (e $b_n$ è definitivamente diverso da zero), considerando il limite del loro rapporto abbiamo 4 casi:

    $$
    \lim_{n \rightarrow +\infty} \frac{a_n}{b_n} = 
    \begin{cases}
    0 & {\rm ~~~~caso~~1):~~}  \{a_n\} {\rm ~~è~un~infinitesimo~di ~\textbf{ordine superiore } a~~} \{b_n\}\\
    l \in \R, l \neq 0  & {\rm ~~~~caso~~2):~~} \{a_n\} {\rm ~e~} \{b_n\} {\rm ~sono~infinitesimi~dello~\textbf{stesso ordine}} \\
    \pm \infty & {\rm ~~~~caso~~3):~~} \{a_n\} {\rm ~~è~un~infinitesimo~di ~\textbf{ordine inferiore } a~~} \{b_n\}\\
    {\rm inesistente} & {\rm ~~~~caso~~4):~~}  \{a_n\} {\rm ~e~} \{b_n\} {\rm ~non~sono~confrontabili}
    \end{cases}
    $$

!!! chiave ""

    - Il caso

        $$
        \frac{a_n}{b_n} \rr 1
        $$

        è particolarmente importante: si usa dire, in tal caso, che le due successioni $\{a_n\}$ e $\{b_n\}$ sono <strong>asintotiche</strong> .

    - Per indicare questa circostanza, si scrive

        $$
        a_n  \thicksim b_n
        $$

        (si legge: $a_n$ è asintotico a $b_n$)

- Il simbolo di asintotico è molto utile nel calcolo dei limiti per le seguenti <strong>proprietà</strong>:

<a id="box-propFF-3"></a>

!!! teorema "Proposizione 1: del comportamento asintotico"

    1. Se $a_n  \thicksim b_n$, le due successioni hanno lo stesso comportamento:

        - o convergono allo stesso limite,

        - o divergono entrambe a $\pm\infty$,

        - o entrambe non hanno limite.

    2. Si possono scrivere catene di relazioni asintotiche, cioè:

        $$
        {\rm se~~} a_n  \thicksim b_n  \thicksim \dots \thicksim c_n {\rm ~~~~allora~~~~} a_n  \thicksim c_n
        $$

    3. Un'espressione composta da prodotto o quoziente di più fattori può essere stimata fattore per fattore:

        $$
        {\rm se~~} a_n  \thicksim a'_n, b_n  \thicksim b'_n, c_n  \thicksim c'_n  {\rm ~~~~allora~~~~} \frac{a_n \: b_n}{c_n}  \thicksim \frac{a'_n \: b'_n}{c'_n}
        $$

        - <strong>Attenzione</strong>: lo stesso non vale per le somme o per l'esponenziale.

??? dimostrazione "Dimostrazione"

    1. Dimostriamo la prima affermazione

        $$
        {\rm se~} a_n  \thicksim b_n {\rm~allora~} \{a_n\} {\rm~e~} \{b_n\} {\rm ~~hanno~lo~stesso~comportamento}
        $$

        - Se $a_n \rr l \in \R$, poiché

            $$
            b_n = \frac{b_n}{a_n} \cdot a_n {\rm~~e~~} \frac{b_n}{a_n} \rr 1 \quad ({\rm per~definizione~di~asintotico}),
            $$

            allora per il teorema  sull'algebra dei limiti abbiamo

            $$
            b_n \rr 1 \cdot l = l.
            $$

        - Con gli stessi passaggi, il teorema  di aritmetizzazione parziale del simbolo di infinito permette di concludere che

            $$
            {\rm se~~} a_n \rr \pm \infty {\rm~~~e~~~} a_n  \thicksim b_n {\rm~~~allora~~~} b_n \rr \pm \infty.
            $$

        Osservando che la relazione di asintotico è simmetrica, quindi quanto appena provato mostra anche che se $\{b_n\}$ converge (diverge), anche $\{a_n\}$ converge (diverge).

        - Ne concludiamo che se $\{a_n\}$ è irregolare, anche $\{b_n\}$ è irregolare, perché se per assurdo non lo fosse, per quanto appena dimostrato anche $\{a_n\}$ sarebbe convergente o divergente.

    2. Proviamo la transitività della relazione di asintotico:

        $$
        {\rm se~~} a_n  \thicksim b_n  \thicksim  c_n {\rm ~~~~allora~~~~} a_n  \thicksim c_n.
        $$

        Le ipotesi significano che

        $$
        \frac{a_n}{b_n} \rr 1 {\rm~~e~~} \frac{b_n}{c_n} \rr 1
        $$

        Allora per il teorema  sull'algebra dei limiti abbiamo

        $$
        \frac{a_n}{c_n} = \frac{a_n}{b_n} \cdot \frac{b_n}{c_n} \rr 1.
        $$

    3. Analogamente si prova la terza proprietà. <span class="qed">□</span>

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 3: Successioni asintotiche applicando la definizione"

    Dimostriamo che:

    $$
    \log n \thicksim \log (n+1)
    $$

    Fattorizzando $n$ nella seconda successione otteniamo

    $$
    \log (n+1) = \log \left(n \: \left(1 + \frac{1}{n} \right)\right)= \log n + \log \left(1+\frac{1}{n}\right)
    $$

    Quindi

    $$
    \lim_{n \rr \ip} \frac{\log n}{\log (n+1)} = \lim_{n \rr \ip} \frac{\log n}{\log n + \underbrace{\log \left(1+\frac{1}{n}\right)}_{\rr 0}} =1
    $$

!!! chiave ""

    - Un tipico modo per mostrare che

        $$
        a_n  \thicksim b_n
        $$

        consiste nello scrivere

        $$
        a_n = b_n \: c_n {\rm ~~~con~~~} c_n \rr 1.
        $$

        Ovvero decomporre $\{a_n\}$ nel prodotto di una successione $\{b_n\}$ e una successione $\{c_n\}$ che tende a 1.

<a id="box-texexpbox1-5"></a>

!!! esempio "Esempio 4: Successioni asintotiche col metodo della decomposizione"

    Esempio:

    $$
    \underbrace{2 \: n^2+ 3\:n +1}_{a_n} = ~~\underbrace{2 \: n^2}_{b_n} ~~ \underbrace{\left( 1 + \frac{3}{2\:n} + \frac{1}{2\: n^2}\right)}_{c_n} \thicksim 2\: n^2 \quad {\rm ~~quindi~~} a_n  \thicksim b_n
    $$

    poiché

    $$
    \underbrace{\left( 1 + \frac{3}{2\:n} + \frac{1}{2\: n^2}\right)}_{c_n} \rr 1
    $$

<a id="box-texexpbox1-6"></a>

!!! esempio "Esempio 5: Calcolo dei limiti con stime asintotiche"

    Calcoliamo il limite

    $$
    \lim_{n \rr \ip} \frac{2\:n^3+4n+1}{5\:(n+1)^3}= \left[\frac{\infty}{\infty}\right] \qquad {\rm~~(forma~indeterminata)}
    $$

    Procedendo come prima possiamo scrivere

    $$
    \underbrace{2 \: n^3+ 4\:n +1}_{a_n} = ~~\underbrace{2 \: n^3}_{a'_n} ~~ \underbrace{\left( 1 + \frac{2}{n^2} + \frac{1}{2\: n^3}\right)}_{\rr 1} \thicksim 2\: n^3
    $$

    $$
    5\:(n+1)^3=   \underbrace{5 \: (n^3 + 3\:n^2 + 3 \:n +1)}_{c_n} = ~~\underbrace{5 \: n^3}_{c'_n} ~~ \underbrace{\left( 1 + \frac{3}{n} + \frac{3}{n^2} + \frac{1}{n^3}\right)}_{\rr 1} \thicksim 5\: n^3
    $$

    Usando il punto 3 della proposizione [Proposizione 1](#box-propFF-3) del comportamento asintotico possiamo scrivere:

    $$
    {\rm se~~} a_n  \thicksim a'_n,  c_n  \thicksim c'_n  {\rm ~~~~allora~~~~} \frac{a_n}{c_n}  \thicksim \frac{a'_n}{c'_n}
    $$

    e ottenere

    $$
    \frac{2\:n^3+4n+1}{5\:(n+1)^3} \thicksim \frac{2\:n^3}{5\:n^3}
    $$

    ovvero le due successioni hanno lo stesso comportamento. Quindi

    $$
    \lim_{n \rr \ip} \frac{2\:n^3+4n+1}{5\:(n+1)^3}= \lim_{n \rr \ip} \frac{2\:n^3}{5\:n^3} = \frac{2}{5}
    $$

!!! chiave ""

    - Un altro modo per mostrare che

        $$
        a_n  \thicksim b_n
        $$

        è usare il <strong>principio di sostituzione</strong>.

- Ad esempio, noto che

    $$
    \lim_{n \rr \ip} 	\underbrace{\log \: n}_{a_n} \rr \ip
    $$

    possiamo affermare

    $$
    \lim_{n \rr \ip} \log \: c_n \rr \ip
    $$

    dove $\{c_n\}$ è una qualsiasi successione divergente a $\ip$, dunque

    $$
    \underbrace{\log n}_{a_n} \thicksim \underbrace{\log \: c_n}_{b_n}
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 6: Calcolo dei limiti col principio di sostituzione e stime asintotiche"

    Calcoliamo il limite

    $$
    \lim_{n \rr \ip} \log_3 (n^2 + 4n +1)
    $$

    usando il principio di sostituzione e definendo

    $$
    c_n = n^2 + 4n +1 {\rm ~~~abbiamo~~~} \lim_{n \rr \ip}  n^2 + 4n +1 = \ip
    $$

    allora

    $$
    \log_3 n \thicksim \log_3 (n^2 + 4n +1)
    $$

    e quindi

    $$
    \lim_{n \rr \ip} \log_3 (n^2 + 4n +1) = \lim_{n \rr \ip} \log_3 n =\ip
    $$

!!! chiave ""

    Il fatto che la relazione di asintotico soddisfi le 3 proprietà:

    1. <em>Riflessiva</em>: $a_n \thicksim a_n$

    2. <em>Simmetrica</em>: se $a_n \thicksim b_n$ allora $b_n \thicksim a_n$

    3. <em>Transitiva</em>:  se $a_n \thicksim b_n$  e $b_n \thicksim c_n$ allora $a_n \thicksim c_n$

    fa sì che “<strong>asintotico</strong>” sia una <strong>relazione di equivalenza</strong>.
