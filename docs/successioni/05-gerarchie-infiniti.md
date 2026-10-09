---
title: "Gerarchie degli infiniti e criterio del rapporto"
---

# Gerarchie degli infiniti e criterio del rapporto

<div class="info-capitolo" markdown>

**Parte 3 · Limiti di successioni · Capitolo 5** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-successioni-05-gerarchie-infiniti.pdf)

</div>

## 1. Gerarchie degli infiniti delle successioni parte 1 e parte 2

<a id="box-theoXXX-1"></a>

!!! teorema "Teorema 1: della gerarchia degli infiniti (parte I)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{\log_a n}{n^{\alpha}} &= 0
    \end{align}

    per ogni $a>1$ e $\alpha > 0$.

??? dimostrazione "Dimostrazione"

    Iniziamo a stabilire un'utile disuguaglianza tra un qualsiasi numero reale positivo e il suo logaritmo.

    Per $x \in \R$, $x > 0$, sia $k$ la parte intera di $x$ ossia l'intero $k$ per cui abbiamo

    $$
    k \le x < k + 1, {\rm ~~abbiamo~inoltre~~}  2^x \ge 2^k = (1+1)^k \ge 1 + k > x,
    $$

    la prima disuguaglianza segue dalla monotonia della funzione esponenziale, la seconda dallo sviluppo del binomio di Newton (o dalla disuguaglianza di Bernoulli). Passando ai logaritmi in base $a>1$, otteniamo

    $$
    \log_a x < x \: \log_a 2 \quad ({\rm per~ogni~~} x\in \R, x>0).
    $$

    Applichiamo ora questa disuguaglianza al numero $x=n^{{\alpha}/{2}}$,  abbiamo

    \begin{align*}
    \frac{\alpha}{2} \log_a n < n^{{\alpha}/{2}} \: \log_a 2 {\rm~~~e ~~~}
     \frac{\log_a n}{n^{{\alpha}/{2}}} < \frac{2}{\alpha} \: \log_a 2,
    \end{align*}

    quindi

    $$
    \frac{\log_a n} {n^{\alpha}} = \frac{\log_a n}{n^{{\alpha}/{2}}} \: \frac{1}{n^{{\alpha}/{2}}} \le \underbrace{\frac{2}{\alpha} \: \log_a 2}_{ {\rm costante}} \: \frac{1}{n^{{\alpha}/{2}}} {\rm ~~~~~~~e ~~~~~~}  \frac{1}{n^{{\alpha}/{2}}} \rr 0.
    $$

    Per il corollario  del teorema del confronto, segue la tesi. <span class="qed">□</span>

<a id="box-theoXXX-2"></a>

!!! teorema "Teorema 2: della gerarchia degli infiniti (parte II)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{n^{\alpha}}{a^n}  &= 0
    \end{align}

    per ogni $a>1$ e $\alpha > 0$.

??? dimostrazione "Dimostrazione"

    Usiamo il teorema della gerarchia degli infiniti (parte I) sostituendo all'intero $n$ l'intero $2^n$:

    $$
    0 = \lim_{n \rr \ip} \frac{\log_a (2^n)}{\left(2^n\right)^{\alpha}} = \lim_{n \rr \ip}   \frac{ n \: \overbrace{\log_a 2}^{{\rm costante}}}{\left(2^{\alpha}\right)^{n}} {\rm ~~quindi~~ } \frac{n}{\left(2^{\alpha}\right)^{n}} \rr 0.
    $$

    Se ora $a > 1$ è fissato, scegliendo $\alpha > 0$ in modo che sia $2^{\alpha}=a$ otteniamo che $\frac{n}{a^n} \rr 0$, ovvero la seconda relazione nel caso particolare in cui $n$ sia elevato ad esponente $1$. Il caso generale segue dall'identità:

    $$
    \frac{n^{\alpha}}{a^n} = \left( \frac{n}{a^{{n}/{\alpha}}}\right)^{\alpha} = \left( \frac{n}{ \left(a^{{1}/{\alpha}}\right)^{n} }\right)^{\alpha}
    $$

    Infatti per il risultato precedente $\frac{n}{\left(a^{1/\alpha}\right)^n} \rr 0$ (la base $a^{1/\alpha}$ è ancora un numero $>1$), quindi segue

    $$
    \left(\frac{n}{\left(a^{1/\alpha}\right)^n}\right)^{\alpha} \rr 0 {\rm ~~e~da~questo~la~tesi}.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- Questi limiti descrivono la “velocità” con cui i logaritmi (con base $> 1$), le potenze (con esponente $> 0$), gli esponenziali (con base $> 1$) vanno all'infinito. I logaritmi a base $> 1$ vanno più lentamente di qualsiasi potenza con esponente $>0$, le potenze con esponente $>0$ vanno più lentamente di qualsiasi esponenziale a base $> 1$.

- Gli esponenziali a base $> 1$ sono infiniti di ordine superiore alle potenze con  esponente $>0$ e ai logaritmi a base $> 1$. Le potenze con  esponente $>0$ sono infiniti di ordine superiore ai logaritmi a base $> 1$.

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 1: Calcolo dei limiti usando la gerarchia degli infiniti"

    Calcoliamo il limite

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \left[\infty^0 \right] \qquad {\rm~~(forma~indeterminata)}
    $$

    Ora scriviamo

    $$
    \sqrt[n]{n} = n^{\frac{1}{n}} = e^{\log n^{1/n}} = e^{ \frac{\log n}{n}}
    $$

    e studiando la successione all'esponente

    $$
    a_n = \frac{\log n}{n} {\rm ~~~abbiamo~~~} a_n \rr 0
    $$

    grazie al teorema della gerarchia degli infiniti. Quindi  abbiamo :

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \lim_{n \rr \ip} e^{ \frac{\log n}{n}} =1
    $$

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 2: Calcolo dei limiti usando la gerarchia degli infiniti"

    Calcoliamo il limite

    $$
    \lim_{n \rr \ip} \frac{2^n+n}{2^{n+1}}= \left[\frac{\infty}{\infty}\right] \qquad {\rm~~(forma~indeterminata)}
    $$

    Possiamo scrivere:

    $$
    \underbrace{2^n+n}_{a_n} = ~~\underbrace{2^n}_{a'_n} ~~ \underbrace{\left( 1 + \frac{n}{2^n}\right)}_{\rr 1} \thicksim 2^n
    $$

    dato che grazie al teorema della gerarchia degli infiniti abbiamo

    $$
    \frac{n}{2^n} \rr 0,
    $$

    $2^n$ è un infinito di ordine superiore rispetto ad $n$. Quindi possiamo scrivere:

    $$
    \frac{2^n+n}{2^{n+1}} \thicksim \frac{2^n}{2^{n+1}}
    $$

    Ora dato che

    $$
    \frac{2^n}{2^{n+1}} = \frac{2^n}{2^n \: 2} = \frac{1}{2}
    $$

    allora

    $$
    \lim_{n \rr \ip} \frac{2^n+n}{2^{n+1}}= \frac{1}{2}
    $$

## 2. Teorema del criterio del rapporto

<a id="box-theoRAPPORTO-5"></a>

!!! teorema "Teorema 3: del criterio del rapporto"

    Sia $\{a_n\}$ una successione positiva (cioè $a_n > 0$ per ogni $n$).

    $$
    {\rm Se~esiste~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=l {\rm~~e~~}
    \begin{cases}
    l < 1, {\rm ~~allora~~} a_n \rr 0 \\[2ex]
    l > 1 {\rm~~(o~~} l = \ip), {\rm ~~allora~~} a_n \rr \ip 
    \end{cases}
    $$

- Il teorema precedente riconduce lo studio del limite di una successione positiva  $\{a_n\}$ al calcolo del limite di un'altra successione, la successione (dei rapporti)

    $$
    n \mapsto \frac{a_{n+1}}{a_n}
    $$

    In certi casi quest'ultima è più semplice da studiare di quella di partenza, come vedremo negli esempi.

!!! chiave ""

    Si osservi che nel caso $l = 1$ il teorema non permette di concludere nulla.

??? dimostrazione "Dimostrazione"

    1. Supponiamo che:

        $$
        \frac{a_{n+1}}{a_n} \rr  l < 1
        $$

        Quindi, per ogni $\varepsilon> 0$, si ha  per $n \ge n(\varepsilon)$

        $$
        \frac{a_{n+1}}{a_n} < l + \varepsilon
        $$

        Possiamo  allora scrivere la catena di disuguaglianze:

        $$
        a_{n(\varepsilon)+1} < (l + \varepsilon) \: a_{n(\varepsilon)}, 
        \quad 
        a_{n(\varepsilon)+2} < (l + \varepsilon) \: \underbrace{a_{n(\varepsilon)+1}}_{< (l + \varepsilon) \: a_{n(\varepsilon)}} < (l + \varepsilon)^2 a_{n(\varepsilon)}, \quad  \dots
        $$

        quindi

        $$
        a_{n(\varepsilon)+k}  <  (l + \varepsilon)^k a_{n(\varepsilon)}
        $$

        Scegliendo $\varepsilon$ abbastanza piccolo da avere $l + \varepsilon < 1$, si ha

        $$
        (l + \varepsilon)^k \rr 0 {\rm ~~per~~} k \rr \ip
        $$

        D'altro canto $n(\varepsilon)$ è fissato e di conseguenza anche $a_{n(\varepsilon)}$ è fissato; dunque per $k$ abbastanza grande il secondo membro (e quindi il primo) è piccolo quanto si vuole. Questo  dimostra la prima tesi, ovvero: $a_n \rr 0$.

    2. Supponiamo che:

        $$
        \frac{a_{n+1}}{a_n} \rr  l > 1
        $$

        Quindi, per ogni $\varepsilon> 0$, si ha  per $n \ge n(\varepsilon)$

        $$
        \frac{a_{n+1}}{a_n} > l - \varepsilon
        $$

        Scegliamo $\varepsilon$ abbastanza piccolo da avere $l - \varepsilon > 1$, con passaggi simili a prima possiamo scrivere

        $$
        a_{n(\varepsilon)+k}  >  (l - \varepsilon)^k a_{n(\varepsilon)} {\rm ~~~~~e ~~~~~} (l - \varepsilon)^k \rr \ip {\rm ~~per~~} k \rr \ip.
        $$

        D'altro canto $n(\varepsilon)$ è fissato e di conseguenza anche $a_{n(\varepsilon)}$ è fissato; dunque per $k$ abbastanza grande il secondo membro (e quindi il primo) è grande quanto si vuole. Questo  dimostra la seconda tesi, ovvero: $a_n \rr \ip.$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-6"></a>

!!! esempio "Esempio 3: Utilizzo del teorema del criterio del rapporto"

    Proviamo a calcolare, col criterio del rapporto, il limite

    $$
    \lim_{n \rr \ip} \frac{\log n}{n}= \left[ \frac{\infty}{\infty} \right] \qquad {\rm~~(forma~indeterminata)}
    $$

    si ha

    \begin{align*}
    \frac{a_{n+1}}{a_n} &= \frac{ \log (n +1)}{n+1} \cdot \frac{ n }{\log n} = {\frac{ n }{n+1}} \cdot {\frac{ \log (n +1) }{\log n}}
    \end{align*}

    abbiamo

    $$
    \frac{ n }{n+1} = \frac{ n +1 -1 }{n+1} = 1 - \underbrace{\frac{1}{n+1}}_{\rr 0} {\rm ~~~~quindi~~~~} \lim_{n \rr \ip} \frac{ n }{n+1} = 1
    $$

    abbiamo inoltre

    $$
    \frac{ \log(n+1) }{\log n} \thicksim \frac{ \log n }{ \log n} = 1 {\rm ~~~~quindi~~~~} \lim_{n \rr \ip} \frac{ \log(n+1) }{\log n} = 1
    $$

    Dove $\log(n+1) \thicksim \log(n)$ per il principio di sostituzione, dato che $n+1 \thicksim n$ e $\lim_{n \rr \ip} n = \ip$. Ora usando il teorema sull'algebra dei limiti, abbiamo

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = 1 \cdot 1 = 1
    $$

    quindi il teorema [Teorema 3](#box-theoRAPPORTO-5) del criterio del rapporto non permette, in questo caso,  di concludere nulla.

## 3. Gerarchie degli infiniti delle successioni  parte 3 e parte 4

<a id="box-corolXXX-7"></a>

!!! teorema "Teorema 4: della gerarchia degli infiniti (parte III)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{a^n}{n!} &= 0 \quad
    \end{align}

    per ogni $a > 0$.

- quindi gli esponenziali con base $>0$ vanno più lentamente del fattoriale

??? dimostrazione "Dimostrazione"

    Applichiamo il criterio del rapporto alla successione

    $$
    b_n = \frac{a^n}{n!}
    {\rm ~~~si~ha~~~}
    \frac{b_{n+1}}{b_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = \frac{a}{n+1}
    {\rm ~~~~e~~~~}
    \frac{a}{n+1}\rr 0
    $$

    Utilizzando il teorema del criterio del rapporto, si ottiene la tesi. <span class="qed">□</span>

<a id="box-corolXXX-8"></a>

!!! teorema "Teorema 5: della gerarchia degli infiniti (parte IV)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{n!}{n^n} &= 0 \quad
    \end{align}

- quindi il fattoriale va più lentamente di $n^n$

??? dimostrazione "Dimostrazione"

    Applichiamo il criterio del rapporto alla successione

    $$
    b_n = \frac{n!}{n^n}
    $$

    si ha

    \begin{align*}
    \frac{b_{n+1}}{b_n} &= \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!}   = \frac{(n+1) \cdot n!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} \\[2ex]
    &= \frac{(n+1) \cdot n^n}{(n+1)^n \cdot (n+1)} = \left( \frac{n}{n+1}\right)^n = \frac{1}{\left( 1 + \frac{1}{n}\right)^n}
    \end{align*}

    e avendo

    $$
    \left( 1 + \frac{1}{n}\right)^n \rr e
    $$

    allora

    $$
    \frac{b_{n+1}}{b_n} \rr \frac{1}{e} < 1
    $$

    Utilizzando il teorema del criterio del rapporto, si ottiene la tesi. <span class="qed">□</span>
