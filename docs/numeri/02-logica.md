---
title: "Basi di logica e tecniche di dimostrazione"
---

# Basi di logica e tecniche di dimostrazione

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 2** · dalle dispense di Fabio Furini e Valerio Dose · [:material-file-pdf-box: PDF del capitolo](../pdf/numeri-02-logica.pdf)

</div>
## 1. Simboli logici

!!! chiave ""

    1. il simbolo “$\forall$” si chiama <em>quantificatore universale</em> e si legge “per ogni”, “per tutti” , “per ciascuno”

    2. il simbolo “$\exists$” si chiama <em>quantificatore esistenziale</em> e si legge “esiste”, “esistono”

    3. il simbolo “$\Rightarrow$” si chiama <em>implicazione logica</em> e si legge “implica” o “se … allora”

!!! chiave ""

    1. il simbolo “$:$” si legge “tale che”

    2. il simbolo “$\in$” si legge “appartiene”

    3. il simbolo “$\notin$” si legge “non appartiene”

!!! chiave ""

    1. il simbolo “$\vee$” si chiama <em>disgiunzione logica</em> e si legge “o”,  “oppure” , “or”

    2. il simbolo “$\wedge$” si chiama <em>congiunzione logica</em> e si legge “e”, “and”

    3. il simbolo “$\neg$” si chiama <em>negazione logica</em> si legge “non”,  “not”.

## 2. Implicazioni universali e dimostrazioni

<strong>Predicati</strong> (o proprietà) e <strong>proposizioni</strong> (o enunciati)

- Consideriamo la seguente affermazione:

    \begin{equation}
    \label{TT} ``{\rm il~numero~naturale~} n {\rm ~è~dispari}''
    \end{equation}

    e chiediamoci se è vera. Ovviamente la risposta  è: “dipende da $n$”. Infatti nella \(\eqref{TT}\) il simbolo $n$ rappresenta una variabile che può assumere valori diversi e rendere l'affermazione <strong>vera</strong> o <strong>falsa</strong>.

    !!! chiave ""

        Una frase di questo tipo si chiama <strong>predicato</strong> (o <em>proprietà</em>): la sua verità o falsità dipende dai valori della o delle <strong>variabili</strong> che in essa compaiono.

- Consideriamo ora la seguente affermazione:

    \begin{equation}
    \label{TTT} ``{\rm per~ogni~numero~naturale~} n, {\rm ~se~} n {\rm ~è~dispari~allora~} n^2 {\rm~ è~dispari}''
    \end{equation}

    che possiamo scrivere più formalmente nel modo seguente:

    \begin{equation}
    \label{TTTT} \forall n \in \N ~~(n {\rm ~~dispari~~} \Rightarrow n^2 {\rm ~~dispari~~})
    \end{equation}

    !!! chiave ""

        Si dice in questo caso che la variabile $n$ non è libera, ma vincolata dal <em>quantificatore</em> $\forall$. Come conseguenza si ha che la \(\eqref{TTTT}\) è vera o falsa “ una volta per tutte” e prende il nome di <strong>proposizione</strong> (o <em>enunciato</em>).

    In particolare, i componenti della \(\eqref{TTTT}\) sono l'insieme $\N$, due predicati definiti su $\N$ dati da

    $$
    p(n) : ``n {\rm~dispari}''
    {\rm~~e~~} 
    q(n) : ``n^2 {\rm~dispari}''
    $$

    e l'implicazione

    $$
    p(n) \Rightarrow q(n).
    $$

!!! definizione "Definizione 1: di implicazione universale"

    In generale, un enunciato che presenti un <strong>insieme</strong> $A$, <strong>due predicati</strong> $p(x)$ e $q(x)$ il cui argomento $x$ varia in $A$ e la <strong>struttura logica</strong>:

    \begin{equation}
    \label{JJ}  \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    \end{equation}

    prende il nome di <strong>implicazione universale</strong>.

!!! chiave ""

    La maggior parte dei <strong>teoremi</strong> è costituita da <strong>implicazioni universali</strong>, nelle quali il predicato $p(x)$ fa la parte dell'<strong>ipotesi</strong> e il predicato $q(x)$ fa la parte della <strong>tesi</strong>.

- In particolare la \(\eqref{TTTT}\) è una proposizione (o un enunciato):

    !!! teorema "Proposizione 1"

        \begin{equation}
        \label{CC}
        \forall n \in \N ~~(~n {\rm ~~dispari~~} \Rightarrow n^2 {\rm ~~dispari}~)
        \end{equation}

    In questo caso ci si convince facilmente che la proposizione sia vera, ma come si fa a dimostrarlo rigorosamente?

- Per esempio, è sufficiente osservare che $3$ è dispari e $3^2=9$ è dispari per affermare che la proposizione sia vera? Certamente no, poiché la proposizione pretende che l'implicazione universale valga per ogni numero naturale. Tuttavia, i numeri dispari sono infiniti: come facciamo a provare un'implicazione universale per infiniti numeri?

- Il procedimento chiave è questo: si considera il generico $n$ che soddisfa l'ipotesi (essere dispari) e si dimostra che $n$ soddisfi la tesi (il suo quadrato è dispari).

    Vediamo come si opera per dimostrare la precedente  proposizione:

    ??? dimostrazione "Dimostrazione"

        Sia $n$ dispari e proviamo che allora $n^2$ è dispari. 

        Qualunque numero dispari si può scrivere nella forma $2\:k + 1$, con un  opportuno $k \in \N$. Osserviamo inoltre che $2\:k$ è un numero pari per qualunque $k \in \N$.

        Sia dunque $n = 2k + 1$ un numero dispari ($k \in \N$), occorre quindi  poter scrivere $n^2$ come un numero intero pari più uno. Si ha:

        $$
        n^2 = (2\:k + 1)^2 = 4\:k^2 + 4\:k +1 = 2\:(2\:k^2 + 2\:k) +1 .
        $$

        Poiché $2\:(2\:k^2 + 2\:k)$ è un intero pari, allora $n^2$ è dispari. <span class="qed">□</span>

!!! chiave ""

    Per dimostrare la correttezza di un'implicazione universale come la \(\eqref{JJ}\), si considera il generico $x$ che soddisfi l'ipotesi $p(x)$ e si cerca di dimostrare che la tesi $q(x)$ sia vera.

- Proviamo ora una simile relazione per i numeri pari:

!!! teorema "Proposizione 2"

    \begin{equation}
    \label{TEST_tris} \forall n \in \N ~~(~n {\rm ~~pari~~} \Rightarrow n^2 {\rm ~~pari}~)
    \end{equation}

??? dimostrazione "Dimostrazione"

    Sia $n$ pari e proviamo che allora $n^2$ è pari. 

    Sia dunque $n = 2\:k$ un numero pari ($k \in \N$), occorre quindi  poter scrivere $n^2$ come un numero intero pari. Si ha:

    $$
    n^2 = (2\:k)^2 = 4\:k^2 = 2\;(2\;k^2)
    $$

    Poiché $2\:(2\:k^2)$ è un intero pari, allora $n^2$ è pari. <span class="qed">□</span>

### 2.1 Controesempi

I <strong>controesempi</strong> sono una tecnica importante per dimostrare la <strong>falsità</strong> di un'implicazione universale.

- Chiediamoci, per esempio, se la seguente implicazione universale sia vera o falsa:

    \begin{equation}
    \label{TEST} \forall n \in \N ~~(~n {\rm ~~primo~~} \Rightarrow n {\rm ~~dispari}~)
    \end{equation}

    Un attimo di riflessione mostra che <strong>questa proposizione è falsa</strong>. Infatti, il numero 2 è primo ma è pari.

!!! chiave ""

    Per poter affermare che un'implicazione universale sia vera è necessaria una dimostrazione (un esempio non è sufficiente), mentre per dimostrare che un'implicazione universale sia falsa basta un esempio contrario.

- L'implicazione universale pretende che ogni $x$ che soddisfi l'ipotesi soddisfi anche la tesi: perciò, se troviamo anche un solo esempio di $x$ che soddisfi l'ipotesi ma non la tesi, questo significa che l'implicazione universale sia falsa. Non “falsa in un caso”, ma semplicemente “falsa”, perché  l'implicazione universale è vera o falsa una volta per tutte.

!!! definizione "Definizione 2: di controesempio"

    In generale, un esempio che soddisfi l'ipotesi ma non la tesi di una implicazione universale, e che quindi ne dimostri la falsità, si chiama <strong>controesempio</strong>.

- La dimostrazione formale che la precedente implicazione universale sia falsa è la seguente:

    ??? dimostrazione "Dimostrazione"

        Il numero $2$ è un controesempio per l'implicazione universale: “Per ogni numero naturale $n$, se $n$ è primo allora $n$ è dispari". <span class="qed">□</span>

!!! chiave ""

    La negazione della proposizione

    $$
    ``{\rm per~ogni~~} x \in A, {\rm~~se~vale~~} p (x) {\rm ~~allora~ vale~~} q (x)''
    $$

    $$
    \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    $$

    è la proposizione

    $$
    ``{\rm esiste~~} x \in A, {\rm~~per~cui~vale~} p (x) {\rm ~~e~non~vale~~} q (x)''
    $$

    $$
    \exists x \in A ~~\big(~p(x) ~\wedge~  \neg q(x)~\big)
    $$

    Questo $x$ particolare costituisce un <strong>controesempio</strong>.

## 3. Legge della contronominale

- E' una tecnica di dimostrazioni indiretta

!!! chiave ""

    L'implicazione universale

    \begin{equation}
    \label{AA}
    \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    \end{equation}

    è logicamente equivalente a

    \begin{equation}
    \label{BB}
    \forall x \in A ~~\big(~{\rm non~~} q(x) \Rightarrow {\rm ~non~~} p(x)~\big)
    \end{equation}

    La seconda implicazione si dice la <strong>contronominale</strong>  della prima.

- Ad esempio: poiché sappiamo che vale l'implicazione universale (proposizione [↗](#CC))

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~dispari~~} \Rightarrow n^2 {\rm ~~dispari}~)
    \end{equation*}

    vale la seguente proposizione:

    !!! teorema "Proposizione 3"

        \begin{equation}
        \label{DD} \forall n \in \N ~~(n^2 {\rm ~~pari~~} \Rightarrow n {\rm ~~pari~~})
        \end{equation}

    ??? dimostrazione "Dimostrazione"

        Sia $n^2$ pari e proviamo che allora $n$ è pari. Dimostriamo la \(\eqref{DD}\) basandoci sulla veridicità della \(\eqref{CC}\).

        Se $n$ non è pari allora è dispari e quindi $n^2$ è dispari per la \(\eqref{CC}\). Questo caso contraddice l'ipotesi che  $n^2$ sia pari (quindi non può accadere).

        Di conseguenza $n$ è pari e la \(\eqref{DD}\) è dimostrata. <span class="qed">□</span>

- Il ragionamento fatto nella precedente dimostrazione  ha una validità generale, e mostra appunto che se è vera la \(\eqref{AA}\) allora è vera la \(\eqref{BB}\); Inoltre, se è vera la seconda allora è vera la prima (perché “non non $p(x)$” è logicamente equivalente a $p(x)$), per cui le due sono logicamente equivalenti.

    !!! chiave ""

        L'equivalenza tra \(\eqref{AA}\) e \(\eqref{BB}\) è detta <strong>legge della contronominale</strong>. E' un metodo di <em>dimostrazione indiretta</em> che consiste  nel provare la \(\eqref{BB}\) per mostrare che la \(\eqref{AA}\) sia vera (prevede di dimostrare che la negazione della tesi implica la negazione dell'ipotesi).

Nell'usare la legge della contronominale occorre  saper costruire la <strong>corretta negazione</strong> di una proposizione o proprietà data.

- Dati $p(x)$ e $q(x)$, due predicati o proprietà qualsiasi, riportiamo schematicamente alcune <strong>regole</strong> con cui si costruisce la <strong>negazione</strong> di una proposizione o proprietà.

    !!! chiave ""

        La negazione di

        $$
        ``{\rm per~ogni~~} x \in A {\rm~~vale~~} p (x)''
        $$

        $$
        \forall x \in A ~~\big(~p(x)~ \big)
        $$

        è

        $$
        ``{\rm esiste~~} x \in A {\rm~~per~cui~non~vale~} p (x) ''
        $$

        $$
        \exists x \in A ~~\big(~\neg p(x) ~\big)
        $$

    !!! chiave ""

        La negazione di

        $$
        ``{\rm esiste~~} x \in A {\rm~~per~cui~vale~~} p (x)''
        $$

        $$
        \exists x \in A ~~\big(~p(x)~ \big)
        $$

        è

        $$
        ``{\rm per~ogni~~} x \in A {\rm~~non~vale~} p (x) ''
        $$

        $$
        \forall x \in A  ~~\big(~\neg p(x) ~\big)
        $$

    !!! chiave ""

        La negazione di

        $$
        ``{\rm vale~~} p (x) {\rm ~~e~~vale~~}  q (x)''
        $$

        $$
        \big(~p(x) \wedge q(x)~\big)
        $$

        è

        $$
        ``{\rm non~vale~~} p (x) {\rm ~~o~~non~vale~~}  q (x)''
        $$

        $$
        \big(~\neg p(x) ~\vee~  \neg q(x)~\big)
        $$

    !!! chiave ""

        La negazione di

        $$
        ``{\rm vale~~} p (x) {\rm ~~o~~vale~~}  q (x)''
        $$

        $$
        \big(~p(x) ~\vee~ q(x)~\big)
        $$

        è

        $$
        ``{\rm non~vale~~} p (x) {\rm ~~e~~non~vale~~}  q (x)''
        $$

        $$
        \big(~\neg p(x) ~\wedge~  \neg q(x)~\big)
        $$

## 4. Condizioni sufficienti  e condizioni necessarie

!!! definizione "Definizione 3: di condizione sufficiente"

    Una <strong>condizione sufficiente</strong> è quella che, se soddisfatta, garantisce la verità della proposizione.

!!! definizione "Definizione 4: di condizione necessaria"

    Una <strong>condizione necessaria</strong> è quella che deve essere soddisfatta affinché la proposizione sia vera.

!!! chiave ""

    Dati $p(x)$ e $q(x)$, due predicati o proprietà qualsiasi. Se $p(x)$ implica $q(x)$,  formalmente:

    $$
    p(x) \Rightarrow q(x)
    $$

    allora:

    - $p(x)$ è <strong>condizione sufficiente</strong> a $q(x)$

    - $q(x)$ è <strong>condizione necessaria</strong> a $p(x)$

- Abbiamo visto che la seguente implicazione universale è vera (proposizione \(\eqref{CC}\)):

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~dispari~~} \Rightarrow n^2 {\rm ~~dispari}~)
    \end{equation*}

    Quindi “$n$ dispari” è condizione  sufficiente a “$n^2$ dispari” e“$n^2$ dispari” è condizione  necessaria per  “$n$ dispari” .

- Proviamo ora che anche la seguente proposizione sia vera:

!!! teorema "Proposizione 4"

    \begin{equation}
    \label{TEST_2} \forall n \in \N ~~(~n^2 {\rm ~~dispari~~} \Rightarrow  n {\rm ~~dispari}~)
    \end{equation}

??? dimostrazione "Dimostrazione"

    Sia $n^2$ dispari e proviamo che allora $n$ sia dispari. 

    Sia dunque $n^2 = 2\;(2\;k^2 +2\;k)+1$ un numero dispari ($k \in \N$), dato che $2\;(2\;k^2 +2\;k)$ è un numero pari). Occorre quindi  poter scrivere $n$ come un numero intero pari più uno. Si ha:

    $$
    n=\sqrt{2\;(2\;k^2 +2\;k)+1} =\sqrt{4\;k^2+4\;k+1}=\sqrt{(2\;k+1)^2}= 2\;k+1.
    $$

    Poiché $2\;k+1$ è un intero dispari, allora $n$ è dispari. <span class="qed">□</span>

In questo modo abbiamo provato che “$n^2$ dispari” è condizione necessaria e sufficiente per  “$n$ dispari” e anche che “$n$ dispari” è condizione necessaria e sufficiente per “$n^2$ dispari”:

!!! teorema "Proposizione 5"

    \begin{equation}
    \label{JJJJJJJ} \forall n \in \N ~~(~n {\rm ~~dispari~~} \Longleftrightarrow n^2 {\rm ~~dispari}~)
    \end{equation}

- Abbiamo visto che la seguente implicazione universale è vera (proposizione \(\eqref{TEST_tris}\)):

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~pari~~} \Rightarrow n^2 {\rm ~~pari}~)
    \end{equation*}

    Quindi   “$n$ pari” è condizione  sufficiente a “$n^2$ pari” e “$n^2$ pari” è condizione  necessaria per  “$n$ pari”.

- Proviamo ora che anche la seguente proposizione sia vera (dimostrazione diretta, senza usare la legge della contronominale come visto in precedenza \(\eqref{DD}\)):

\begin{equation*}
\forall n \in \N ~~(~n^2 {\rm ~~pari~~} \Rightarrow n {\rm ~~pari}~)
\end{equation*}

??? dimostrazione "Dimostrazione"

    Sia $n^2$ pari e proviamo che allora $n$ è pari. 

    Sia dunque $n^2 = 2\;(2\;k^2)$ un numero pari ($k \in \N$), occorre quindi  poter scrivere $n$ come un numero intero pari. Si ha:

    $$
    n= \sqrt{2\;(2\;k^2)}=\sqrt{4\;k^2}=2\;k.
    $$

    Poiché $2\;k$ è un intero pari, allora $n$ è pari. <span class="qed">□</span>

In questo modo abbiamo provato che “$n^2$ pari” è condizione necessaria e sufficiente per  “$n$ pari” e anche che “$n$ pari” è condizione necessaria e sufficiente per  “$n^2$ pari”:

!!! teorema "Proposizione 6"

    \begin{equation}
    \label{HHHHHHHHH} \forall n \in \N ~~(~n {\rm ~~pari~~} \Longleftrightarrow n^2 {\rm ~~pari}~)
    \end{equation}

!!! esempio "Esempio 1: condizioni necessarie e sufficienti"

    Ad esempio, per una matrice quadrata di numeri reali, il fatto che il suo determinante sia diverso da zero è condizione necessaria e sufficiente affinché essa sia invertibile.

!!! teorema "Proposizione 7"

    \begin{equation}
    \label{HHHH} \forall n \in \N ~~(~n {\rm ~~ primo~} >2 \Rightarrow n  {\rm ~~dispari}~)
    \end{equation}

??? dimostrazione "Dimostrazione"

    Sia $n>2$ un numero primo e proviamo che allora $n$ è dispari. 

    Se $n$ non è dispari, è pari. Ma nessun numero pari maggiore di due è primo, fatto che contraddice l'ipotesi che $n$ sia primo e maggiore di due (quindi questo caso non può accadere).

    Di conseguenza $n$  è dispari. <span class="qed">□</span>

- Quindi “$n$ dispari” è condizione  necessaria per  “$n$  primo &gt;  2” e “$n$  primo &gt; 2” è condizione  sufficiente a “$n$ dispari”.

- Pero'  “$n$ dispari” non implica “$n$  primo &gt; 2”,  dato che per esempio il numero $9$ non è primo  (controesempio).  Ovvero:

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~ dispari~~} \nRightarrow n  {\rm ~~numero~ primo~maggiore~di~} 2~)
    \end{equation*}

    Quindi  “$n$ dispari” è condizione  necessaria ma non sufficiente per  “$n$  primo &gt;2” e “$n$  primo &gt; 2” è condizione  sufficiente ma non necessaria a “$n$ dispari”.

!!! teorema "Proposizione 8"

    \begin{equation}
    \label{JJJJ} \forall n \in \N ~~(~n {\rm ~ divisibile~per~} 6  \Rightarrow n  {\rm ~~pari}~)
    \end{equation}

??? dimostrazione "Dimostrazione"

    Sia $n$ un numero divisibile per sei e proviamo che allora $n$ è pari. 

    Se $n$ non è pari, è dispari. Ma nessun numero dispari è divisibile per sei, fatto che contraddice l'ipotesi che $n$ sia divisibile per sei (quindi questo caso non può accadere).

    Di conseguenza $n$  è pari. <span class="qed">□</span>

- Quindi “$n$ pari” è condizione  necessaria per  “$n$ divisibile per 6” e “$n$  divisibile per 6” è condizione  sufficiente a “$n$ pari”.

- Pero'  “$n$ pari” non implica “$n$  divisibile per 6”,  dato che per esempio il numero $2$ e' pari ma non e' divisibile per sei (controesempio).    Ovvero:

    \begin{equation*}
    \forall n \in \N ~~(~n  {\rm ~~pari}  \nRightarrow ~ n {\rm ~ divisibile~per~~} 6)
    \end{equation*}

    Quindi  “$n$ pari” è condizione  necessaria ma non sufficiente per  “$n$  divisibile per 6” e “$n$  divisibile per 6” è condizione  sufficiente ma non necessaria a “$n$ pari”.

!!! esempio "Esempio 2: condizioni necessarie/sufficienti ma non sufficienti/necessarie"

    Essere un quadrato implica essere un rettangolo:

    $$
    {\rm essere~un~quadrato~~} \Rightarrow {\rm essere~un~rettangolo~~}
    $$

    dato che tutti i quadrati sono rettangoli. 

    Qundi “essere un rettangolo” è condizione necessaria per “essere un quadrato” ed “essere un quadrato” e' condizione sufficiente ad “essere un rettangolo”.

    Ma  essere un rettangolo non implica esssere un quadrato

    $$
    {\rm essere~un~rettangolo~~} \nRightarrow {\rm essere~un~quadrato~~}
    $$

    perchè esistono dei rettangoli che non sono dei quadrati.

    Quindi “essere un rettangolo” non è condizione sufficiente (ma e' necessaria) per “essere un quadrato” ed “essere un quadrato” non e' condizione  necessaria (ma  e' sufficiente) per “essere un rettangolo”.

## 5. Dimostrazioni per assurdo

- E' una tecnica di dimostrazioni indiretta

!!! definizione "Definizione 5: di dimostrazione per assurdo"

    In generale, la <strong>dimostrazione per assurdo</strong> consiste nel supporre vera l'ipotesi del teorema e la negazione della tesi, e dedurre da questi fatti una contraddizione di qualsiasi tipo.

- Esemplifichiamo la <strong>dimostrazione per assurdo</strong>, col seguente teorema.

!!! teorema "Teorema 1"

    Non esiste un numero razionale il cui quadrato è $2$.

??? dimostrazione "Dimostrazione"

    Supponiamo per assurdo che esista un numero $r \in \Q$ tale che $r^2 = 2$.

    Possiamo scrivere $r = \frac{n}{m}$ con $n,m \in \Z$, $m \neq 0$. 

    Inoltre, possiamo supporre che la frazione $\frac{n}{m}$ sia già ridotta ai minimi termini, ossia “semplificata” (in altre parole: $n$, $m$ non contengono fattori comuni).

    Abbiamo dunque la catena di implicazioni:

    $$
    \left( \frac{n}{m} \right)^2 =2
    $$

    $$
    n^2 =2\:m^2
    $$

    per cui $n^2$ è pari; ma allora per la \(\eqref{HHHHHHHHH}\) anche $n$ è pari e possiamo scrivere $n = 2k$ per qualche per qualche $k \in \Z$.

    Quindi la relazione $n^2 = 2\:m^2$ si può riscrivere come:

    $$
    (2\:k)^2 = 2\:m^2
    $$

    $$
    4\:k^2 = 2\:m^2
    $$

    $$
    m^2 = 2\:k^2.
    $$

    Per cui $m^2$ è pari. Ma allora per la \(\eqref{HHHHHHHHH}\) anche $m$ è pari.

    Dunque sia $n$ che $m$ sono pari, e questo è <strong>assurdo</strong>, perché avevamo supposto che la frazione $\frac{n}{m}$ fosse già stata semplificata.

    La  dimostrazione si trova negli Elementi di Euclide (circa 300 a. C.). <span class="qed">□</span>

## 6. Logica e insiemi

Il linguaggio logico e il linguaggio insiemistico sono due facce della stessa medaglia.

### 6.1 Implicazione logica e inclusione insiemistica

- Esiste un parallelismo tra la relazione di inclusione insiemistica e l'implicazione logica. Per spiegarlo, consideriamo l'implicazione universale:

    \begin{equation}
    \label{KK} \forall n \in \N ~~(n {\rm ~~divisibile~per~} 4 \Rightarrow n {\rm ~~divisibile~per~} 2)
    \end{equation}

    Se indichiamo con:

    $$
    D_4 =\big\{ ~~ n \in \N: n {\rm~~è~divisibile~per~~} 4 ~~\big\}
    {\rm ~~e~~}
     D_2 =\big\{ ~~ n \in \N: n {\rm~~è~divisibile~per~~} 2 ~~\big\}
    $$

    possiamo osservare che l'implicazione universale scritta sopra è equivalente all'affermazione:

    $$
    ``D_4 \subseteq D_2 ''
    $$

    Infatti, questa inclusione significa che ogni elemento appartenente a $D_4$ appartiene anche a $D_2$, cioè che ogni numero naturale divisibile per $4$ è anche divisibile per $2$.

!!! chiave ""

    L'implicazione universale:

    $$
    ``{\rm per~ogni~~} x \in A, {\rm~~se~vale~~} p(x) {\rm~~allora~vale~~} q(x)''
    $$

    è equivalente all'inclusione insiemistica:

    $$
    \big\{~ x \in A:  p(x) {\rm~~è~vera} ~\big\} ~~\subseteq~~ \big\{~ x \in A : q(x) {\rm~~è~vera} ~\big\} .
    $$

### 6.2 Uguaglianza fra insieme e implicazioni universali

- Dimostrare l'uguaglianza tra due insiemi, i.e., $A=B$, comporta  dimostrare due implicazioni universali. Formalmente:

    \begin{equation}
    \label{FFF}
    \forall x ~~(x \in  A \Rightarrow x \in B) {\rm ~~~~~~e~~~~~~} \forall x ~~(x \in B \Rightarrow x \in A).
    \end{equation}

- Affermare che $A \subsetneqq B$ significa affermare che “Ogni elemento che appartiene ad $A$ appartiene anche a $B$ ed esiste un elemento di $B$ che non appartiene ad $A$”. Formalmente:

    \begin{equation}
    \label{GGG}
    \forall x ~~(x \in  A \Rightarrow x \in B) {\rm ~~~~~~e~~~~~~} \exists x \in B: x \notin A.
    \end{equation}

### 6.3 Operazioni tra insiemi e operazioni logiche

Esiste una relazione tra operazioni sugli insiemi e operazioni logiche. Precisamente:

1. L'<strong>intersezione insiemistica</strong> è definita mediante la “e” (<strong>congiunzione logica</strong>).

2. L'<strong>unione insiemistica</strong> è definita mediante la “o” (<strong>disgiunzione logica</strong>).

3. La <strong>differenza insiemistica</strong> e l'<strong>operazione di complementazione</strong> sono definite mediante il “non” (<strong>negazione logica</strong>).

- Le proprietà distributive dell'unione e dell'intersezione degli insiemi:

!!! osservazione "Osservazione 1: proprietà distributive (insiemi)"

    Dati tre insiemi $\red{A}, \blue{B}$ e $\orange{C}$ abbiamo:

    $$
    \red{A} \cap (\blue{B} \cup \orange{C}) = (\red{A} \cap \blue{B}) \cup (\red{A} \cap \orange{C})
    $$

    $$
    \red{A} \cup (\blue{B} \cap \orange{C}) = (\red{A} \cup \blue{B}) \cap (\red{A} \cup \orange{C}).
    $$

- Si possono riscrivere in termini di predicati osservando che Il simbolo di l'intersezione $\cap$ equivale alla congiunzione $\wedge$ (“and”) e che il simbolo di l'unione $\cup$ equivale alla disgiunzione $\vee$ (“or”).

!!! osservazione "Osservazione 2: proprietà distributive (predicati)"

    Dati tre predicati $\red{p(x)}, \blue{q(x)}$ e $\orange{r(x)}$ abbiamo:

    $$
    \red{p(x)} \wedge \big(\blue{q(x)} \vee \orange{r(x)}\big) = \big(\red{p(x)} \wedge \blue{q(x)}\big) \vee \big(\red{p(x)} \wedge \orange{r(x)}\big)
    $$

    $$
    \red{p(x)} \vee \big(\blue{q(x)} \wedge \orange{r(x)}\big) = \big(\red{p(x)} \vee \blue{q(x)}\big) \wedge \big(\red{p(x)} \vee \orange{r(x)}\big).
    $$

- Le leggi di DeMorgan:

!!! teorema "Proposizione 9: Leggi di DeMorgan (insiemi)"

    Dati gli insiemi $\blue{B}, \orange{C} \subseteq \violet{U}$, abbiamo

    $$
    \overline{\blue{B} \cap \orange{C}} = \overline{\blue{B}} \cup \overline{\orange{C}}
    $$

    $$
    \overline{\blue{B} \cup \orange{C}} = \overline{\blue{B}} \cap \overline{\orange{C}}
    $$

- Si possono riscrivere in termini di predicati. osservando che  l'operazione di complementazione  equivale alla negazione $\neg$ (“not”).

!!! teorema "Proposizione 10: leggi di DeMorgan (predicati)"

    Dati tre predicati $\blue{q(x)}$ e $\orange{r(x)}$ abbiamo:

    $$
    \neg \big({\blue{q(x)} \wedge \orange{r(x)}}\big) = \neg {\blue{q(x)}} \vee \neg {\orange{r(x)}}
    $$

    $$
    \neg \big({\blue{q(x)} \vee \orange{r(x)}} \big)= \neg {\blue{q(x)}} \wedge \neg {\orange{r(x)}}
    $$
