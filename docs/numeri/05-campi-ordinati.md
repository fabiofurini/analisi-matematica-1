---
title: "Campi ordinati, estremo superiore/inferiore e assioma di continuità"
---

# Campi ordinati, estremo superiore/inferiore e assioma di continuità

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 5** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-numeri-05-campi-ordinati.pdf)

</div>

## 1. Proprietà $R_1$ e $R_2$

- Inizieremo ora a studiare più da vicino la <strong>struttura degli insiemi numerici</strong> che abbiamo introdotto in precedenza, ed in particolare:  l'insieme $\mathbb{Q}$ dei <strong>numeri razionali</strong> e l'insieme $\mathbb{R}$ dei <strong>numeri reali</strong>.

- Indichiamo con $a$, $b$, $c$ tre generici numeri <strong>razionali</strong> o <strong>reali</strong>.

!!! chiave ""

    - **$R_1 \rightarrow$** È definita in $\mathbb{Q}$ e  $\mathbb{R}$   un'operazione (detta <strong>addizione</strong> o <strong>somma</strong>) che ha le seguenti quattro proprietà:

    - **1** $\forall a,b, \quad a+b = b+a~~~~$  (<strong>proprietà commutativa</strong>)

    - **2** $\forall a,b,c, \quad (a+b)+c = a+(b+c)~~~~$  (<strong>proprietà associativa</strong>)

    - **3** esiste un elemento <strong>neutro della somma</strong>, indicato con $0$, tale che:

        $$
        \forall a, ~~  a+0=a
        $$

    - **4** per ogni $a$ esiste un elemento <strong>inverso</strong> di $a$ <strong>rispetto alla somma</strong>, detto <strong>opposto</strong> di $a$ e indicato con $-a$, tale che:

        $$
        a + (-a) =0
        $$

!!! chiave ""

    - **$R_2 \rightarrow$** È definita in $\mathbb{Q}$ e  $\mathbb{R}$ un'operazione (detta <strong>moltiplicazione</strong> o <strong>prodotto</strong>) che ha le seguenti quattro proprietà:

    - **1** $\forall a,b, ~~$ $a \cdot b = b \cdot a~~~~$  (<strong>proprietà commutativa</strong>)

    - **2** $\forall a,b,c, ~~$  $(a \cdot b) \cdot c = a \cdot (b\cdot c)~~~~$  (<strong>proprietà associativa</strong>)

    - **3** esiste un elemento <strong>neutro del prodotto</strong>, indicato con $1$, tale che:

        $$
        \forall a, ~~ a \cdot 1=a
        $$

    - **4** per ogni $a \neq 0$ esiste un elemento <strong>inverso</strong> di $a$ <strong>rispetto al prodotto</strong>, detto <strong>reciproco</strong> di $a$ e indicato con $a^{-1}$, tale che:

        $$
        a \cdot a^{-1}  = 1
        $$

- Le operazioni di somma e prodotto sono legate dalla seguente proprietà:

    !!! chiave ""

        - ****

            $$
            \forall a,b,c,  \qquad (a +b) \cdot c = a \cdot c + b \cdot c  \qquad ({\rm proprietà ~~\textbf{distributiva}})
            $$

- Dalle proprietà $R_1$ e $R_2$ discende la <strong>possibilità di eseguire senza restrizioni le quattro operazioni fondamentali</strong>:

    1. <strong>addizione</strong> e <strong>moltiplicazione</strong> (sopra definite)

    2. <strong>sottrazione</strong>, ponendo:

        $$
        a - b = a + (-b)
        $$

    3. <strong>divisione</strong>, ponendo:

        $$
        a / b = a \cdot b^{-1} {\rm~~~purché~~sia~} b \neq 0
        $$

## 2. Grandezze commensurabili

!!! chiave ""

    In matematica con la parola <strong>grandezza</strong> si intende una <strong>proprietà</strong> di una <strong>figura geometrica</strong> che può essere <strong>misurata</strong>. Sono esempi di grandezze: la lunghezza di un segmento, la misura di un angolo, l'area di una figura piana o il volume di un solido.

<a id="box-defXX-1"></a>

!!! definizione "Definizione 1: di grandezze omogenee"

    Due grandezze sono <strong>omogenee</strong> se hanno la stessa dimensione, cioè se si possono esprimere mediante la stessa unità di misura.

- La lunghezza di un segmento e l'altezza di un solido sono due grandezze omogenee infatti entrambe si possono esprimere con una stessa unità di misura della lunghezza.

- L'area di un quadrato e il volume di un cono non sono grandezze omogenee, infatti l'area si esprime in metri quadrati o in altre misure di superficie che però non possono essere usate per esprimere il volume.

<a id="box-defXX-2"></a>

!!! definizione "Definizione 2: di grandezze commensurabili e incommensurabili"

    Si dicono <strong>commensurabili</strong> due grandezze omogenee $a$ e $b$ il cui rapporto è un numero razionale, i.e.,  se ${a}/{b}  \in \mathbb{Q}$.  Si dicono invece <strong>incommensurabili</strong> se il loro rapporto non è un numero razionale,  i.e.,  se ${a}/{b}  \notin \mathbb{Q}$.

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 1: di grandezze commensurabili"

    Il volume di una sfera e il volume del cilindro circoscritto alla sfera sono commensurabili. In formule, il volume della sfera $V_s$ in funzione del suo raggio $r$ si ottiene con  la formula:

    $$
    V_s =\frac{4}{3} \: \pi \: r^3
    $$

    Il cilindro ad essa circoscritto ha il raggio del cerchio di base congruente al raggio $r$ della sfera e l'altezza $h$ congruente al doppio del raggio. Il volume $V_c$ di questo  cilindro  si ottiene quindi con la formula:

    $$
    V_c =\pi \: r^2 \: h = \pi \: r^2 \: 2 \: r = 2 \: \pi \: r^3
    $$

    Facendo il rapporto otteniamo:

    $$
    \frac{V_s}{V_c} = \frac{\frac{4}{3} \: \pi \: r^3}{2 \: \pi \: r^3}= \frac{2}{3} \in \mathbb{Q}
    $$

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 2: di grandezze incommensurabili"

    La lunghezza della circonferenza e la lunghezza del suo diametro sono incommensurabili. In formule, denotiamo con $d$ il diametro della circonferenza e con $c$ la lunghezza della circonferenza, abbiamo:

    $$
    c = \pi \: d
    $$

    Ora facendo il rapporto fra la lunghezza della circonferenza e il suo diametro otteniamo:

    $$
    \frac{c}{d}=\frac{\pi \: d}{d} = \pi \notin \mathbb{Q}
    $$

    Una dimostrazione che $\pi \notin \mathbb{Q}$ verrà data in seguito.

## 3. Rappresentazione geometrica di $\mathbb{Q}$

!!! chiave ""

    Una rappresentazione di tipo geometrico di $\mathbb{Q}$ si può ottenere associando a ogni numero razionale un punto della <strong>retta euclidea</strong> (immaginabile come una linea nel piano di lunghezza infinita)

- Ad un punto della retta euclidea, scelto arbitrariamente, si associa $0$ e a un altro, distinto dal primo, si associa $1$, individuando così il segmento orientato $01$ che costituisce l'<strong>unità di misura</strong>

- A questo punto si ha una <strong>corrispondenza biunivoca</strong> tra i numeri razionali e quei punti $P$ della retta che sono estremi dei segmenti orientati $0P$ <strong>commensurabili</strong>  con $01$. Infatti, se al punto $P$ è associato il numero razionale $p$ (la sua <strong>ascissa</strong>), il segmento $0P$ misura $p$ volte il segmento unitario $01$, e quindi il rapporto fra le due lunghezze è:

    $$
    \frac{0P}{01} = \frac{p}{1} = p \in \Q
    $$

![Figura 1](../img/numeri-05-campi-ordinati/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

## 4. Relazioni di ordine totale

<a id="box-propAAA-5"></a>

!!! osservazione "Osservazione 1"

    Gli insiemi dei numeri razionali $~\Q$ e dei numeri reali $~\R$ con la relazione “minore o uguale  di” (“$\le$”) sono insiemi totalmente ordinati.

- Le  relazioni “minore o uguale  di” (“$\le$”) per l'insieme dei numeri razionali o reali :

    $$
    R_{\le}= \bigg\{ (a,b): a,b \in \mathbb{Q} {\rm~~~~e~~~~} a \le b \bigg\}, \qquad ~~~R_{\le}= \bigg\{ (a,b): a,b \in \mathbb{R} {\rm~~~~e~~~~} a \le b \bigg\}
    $$

    sono <strong>relazioni d'ordine parziale</strong>. Ovvero verificano le seguenti proprietà:

    !!! chiave ""

        1. $\forall a, \quad a \le a   \qquad ({\rm proprietà ~~\textbf{riflessiva}})$

        2. $\forall a,b, \quad  a \le b {\rm~~~~e~~~~} b \le a ~~\Rightarrow~~ a =  b   \qquad ({\rm proprietà ~~\textbf{antisimmetrica}})$

        3. $\forall a,b,c, \quad  a \le b {\rm~~~~e~~~~} b \le c ~~\Rightarrow~~ a \le  c   \qquad ({\rm proprietà ~~\textbf{transitiva}})$

    Inoltre le relazioni “minore o uguale  di” (“$\le$”) per $\Q$ e $\R$ sono <strong>relazioni totali</strong> in quanto:

    !!! chiave ""

        1. $\forall a,b, \qquad a \le b {\rm~~~~o~~~~} b \le a$

- Di conseguenza la coppia costituita dall'insieme $\Q$ o $\R$ e dalla corrispettiva relazione $R_{\le}$ diventa un insieme totalmente ordinato.

<a id="box-oss_tricotomia-6"></a>

!!! osservazione "Osservazione 2: proprietà di tricotomia"

    Per ogni coppia di numeri $a$, $b$ (razionali o reali) vale <strong>una e una sola</strong> delle tre relazioni:

    $$
    a < b, \qquad a = b, \qquad a > b
    $$

- Non è una proprietà nuova: è una conseguenza del fatto che “$\le$” è una relazione d'ordine <strong>totale</strong>, come mostra la dimostrazione qui sotto. Per questo motivo non la contiamo fra gli assiomi $R_1$, $R_2$, $R_3$ ed $R_4$.

??? dimostrazione "Dimostrazione"

    Ricordiamo che $a < b$ significa $a \le b$ e $a \neq b$.

    <strong>Almeno una delle tre relazioni vale.</strong> Poiché la relazione è totale, abbiamo $a \le b$ oppure $b \le a$:

    - se $a \le b$ e $a \neq b$, allora $a < b$;

    - se $b \le a$ e $a \neq b$, allora $a > b$;

    - se $a = b$ vale la seconda relazione.

    <strong>Al più una delle tre relazioni vale.</strong> Le relazioni $a<b$ e $a=b$ non possono valere insieme, perché la prima richiede $a \neq b$; per lo stesso motivo non possono valere insieme $a>b$ e $a=b$. Infine, se valessero insieme $a<b$ e $a>b$, avremmo $a \le b$ e $b \le a$, e quindi $a = b$ per la proprietà antisimmetrica, contro $a \neq b$. <span class="qed">□</span>

## 5. Proprietà $R_3$

- Mettiamo ora in evidenza le proprietà dell'ordinamento dei numeri razionali o reali:

    !!! chiave ""

        - **$R_3 \rightarrow$** È definita in $\mathbb{Q}$ e $\mathbb{R}$  la   relazione d'ordine totale “minore o uguale  di” (“$\le$”) compatibile con la struttura algebrica [^1], cioè:

            1. $\forall a,b, c,\qquad a \le b ~~\Rightarrow~~ a +  c  \le b +c$

            2. $\forall a,b {\rm ~~e~~} \forall c > 0, \qquad  a \le b ~~\Rightarrow~~ a \cdot  c  \le b \cdot c$

- Osserviamo che tutte le regole  del calcolo algebrico derivano dalle proprietà: $R_1$, $R_2$, $R_3$.

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 3"

    Ad esempio tutte le usuali procedure con cui si risolvono le disequazioni sono  conseguenza degli  assiomi e delle proprietà algebriche della somma e del prodotto, espresse da $R_1$ e $R_2$, <strong>e della compatibilità della relazione d'ordine con queste operazioni</strong>, espressa da $R_3$. È infatti $R_3$ che permette di sommare lo stesso numero ai due membri di una disequazione e di moltiplicarli per uno stesso numero positivo senza cambiare il verso.

## 6. Campi ordinati

<a id="box-defXX-8"></a>

!!! definizione "Definizione 3: di campo (ordinato)"

    Un <strong>campo</strong> è un insieme in cui sono definite due operazioni (somma e prodotto) che soddisfano le proprietà $R_1$ ed $R_2$ e la <strong>proprietà distributiva</strong>.

    Un <strong>campo ordinato</strong> è un campo in cui è definita anche una relazione d'ordine totale che soddisfa la proprietà $R_3$.

- La proprietà distributiva fa parte della definizione di campo: è l'unica proprietà che lega fra loro la somma e il prodotto, e senza di essa le due operazioni resterebbero indipendenti.

- Tutto ciò che abbiamo detto fin qui riguardo alle operazioni di somma e prodotto e alla relazione d'ordine totale “minore o uguale  di” (“$\le$”) vale sia per l'insieme dei numeri razionali che per l'insieme dei numeri reali.

<a id="box-propAAA-9"></a>

!!! osservazione "Osservazione 3"

    Gli insiemi dei numeri razionali $~\Q$ e dei numeri reali $~\R$ sono campi ordinati.

- Da questo punto di vista, quindi, $\mathbb{Q}$ ed $\mathbb{R}$ appaiono dotati di proprietà simili.   Evidenzieremo nel seguito qual è la <strong>proprietà che distingue sostanzialmente</strong> $\mathbb{R}$ da $\mathbb{Q}$ e che rende $\mathbb{R}$ l'<strong>ambiente giusto per sviluppare l'analisi matematica</strong>.

- Iniziamo osservando che l'<strong>insieme dei numeri razionali è inadeguato ad esprimere le lunghezze dei segmenti</strong> (ma anche le aree, i volumi, i tempi, le velocità ecc.)

!!! chiave ""

    Come abbiamo visto esistono grandezze che non sono <strong>commensurabili</strong> tra loro. L'esempio classico è dato dalla diagonale e dal lato di un quadrato: se il lato misura 1, l'ascissa $d$ che misura la diagonale non è un numero razionale.

    ![Figura 2](../img/numeri-05-campi-ordinati/fig02.svg){ .fig .ovale loading=lazy style="width:80%" }

    Infatti, per il Teorema di Pitagora abbiamo:

    $$
    d^2 = 1^2 + 1^2 = 2
    $$

    ma, come abbiamo visto, non esiste un numero razionale il cui quadrato è $2$. Dunque il punto $d$ sulla retta non è il rappresentante di alcun numero razionale. Ciò significa che, dopo aver “occupato” i punti della retta con i numeri razionali, su di essa rimangono ancora dei <strong>posti vuoti</strong>.

## 7. Insiemi limitati, massimi e minimi

<a id="box-defXX-10"></a>

!!! definizione "Definizione 4: di insieme limitato"

    Sia $E$ un insieme contenuto in $\Q$ o in $\R$. L'insieme $E$ si dice <strong>limitato</strong>  se esistono due numeri $m$ e $M$,  tali che:

    $$
    \forall x \in E, \qquad m \le x \le M \qquad
    $$

- $E$ è <strong>limitato inferiormente</strong> se esiste un numero $m$ tale che:

    $$
    \forall x \in E, \qquad m \le x  \qquad
    $$

- $E$ è <strong>limitato superiormente</strong> se esiste un numero $M$ tale che:

    $$
    \forall x \in E, \qquad x \le M \qquad
    $$

- Non fa differenza imporre che $m$ e/o $M$ appartengano a $\Q$ o a $\R$ in quanto la condizione è soltanto di esistenza di tali numeri. Non è però una conseguenza immediata della definizione, perché $\Q$ è un sottoinsieme proprio di $\R$: lo si ottiene dalla <strong>proprietà di Archimede</strong> (richiamata nel capitolo <em>Insiemi</em> e dimostrata più avanti in questo capitolo). Infatti, se $M \in \R$ verifica $x \le M$ per ogni $x \in E$, esiste un numero naturale $n > M$, e quindi $x \le M < n$ per ogni $x \in E$, con $n \in \Q$; allo stesso modo, se $m \in \R$ verifica $m \le x$ per ogni $x \in E$, esiste un numero naturale $n > -m$, cioè $-n < m$, e quindi $-n < x$ per ogni $x \in E$, con $-n \in \Q$. Viceversa ogni numero razionale è anche reale, e quindi le due richieste individuano gli stessi insiemi limitati.

<a id="box-defXX-11"></a>

!!! definizione "Definizione 5: di massimo e minimo di un insieme"

    Un elemento $x_{M} \in E$ si chiama <strong>massimo</strong> di $E$ se:

    $$
    \forall x \in E, \qquad x \le x_{M}
    $$

    Un elemento $x_m \in E$ si chiama <strong>minimo</strong> di  $E$ se:

    $$
    \forall x \in E, \qquad x_m \le x
    $$

- Si noti che il massimo e il minimo, per definizione, <strong>appartengono</strong> all'insieme $E$.

<a id="box-oss_unicita-max-min-12"></a>

!!! osservazione "Osservazione 4"

    Se un insieme $E$ possiede massimo, questo è <strong>unico</strong>; allo stesso modo, se possiede minimo, questo è unico. Si scrive allora $\max E$ e $\min E$.

??? dimostrazione "Dimostrazione"

    Siano $x_M$ e $x_M'$ due massimi di $E$. Poiché $x_M'$ appartiene a $E$ e $x_M$ è un massimo di $E$, abbiamo $x_M' \le x_M$. Scambiando i ruoli, poiché $x_M$ appartiene a $E$ e $x_M'$ è un massimo di $E$, abbiamo $x_M \le x_M'$. Dalla proprietà antisimmetrica della relazione d'ordine segue:

    $$
    x_M' \le x_M {\rm ~~~~e~~~~} x_M \le x_M' \qquad \Longrightarrow \qquad x_M = x_M'
    $$

    La dimostrazione per il minimo è identica: se $x_m$ e $x_m'$ sono due minimi di $E$, allora $x_m \le x_m'$ e $x_m' \le x_m$, e quindi $x_m = x_m'$. <span class="qed">□</span>

!!! chiave ""

    L'esistenza del massimo e del minimo per un insieme implica che l'insieme è limitato, ovvero:

    \begin{equation}
    {\rm ~~esistenza~di~massimo~e~minimo~} ~~\Rightarrow~~ {\rm ~~insieme~limitato~} \label{BBB}
    \end{equation}

    ma il viceversa non è vero (daremo più avanti un controesempio):

    \begin{equation}
    {\rm ~~insieme~limitato~}  ~~\nRightarrow~~  {\rm ~~esistenza~di~massimo~e~minimo~} 
     \label{CCC}
    \end{equation}

    Quindi il fatto che un insieme sia limitato è condizione necessaria ma non sufficiente al fatto che l'insieme ammetta massimo e minimo. Inoltre l'esistenza di massimo e minimo è condizione sufficiente ma non necessaria al fatto che un insieme sia limitato.  

    Dalla <strong>contronominale</strong> di \(\eqref{BBB}\) abbiamo:

    $$
    \textrm{insieme non limitato}   ~~\Rightarrow~~ \textrm{non esiste il massimo \textbf{oppure} non esiste il minimo}
    $$

    ovvero se un insieme non è limitato non ha massimo o non ha minimo (può averne uno dei due: $\N$ non è limitato e tuttavia ha minimo $0$).

<a id="box-texexpbox1-13"></a>

!!! esempio "Esempio 4: di massimi e minimi"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>I)</td>
    <td><span class="arithmatex">\(\mathbb{N}\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td>non esiste</td>
    </tr>
    <tr>
    <td>II)</td>
    <td>numeri interi pari</td>
    <td>non esiste</td>
    <td>non esiste</td>
    </tr>
    </table></div>

<a id="box-texexpbox1-14"></a>

!!! esempio "Esempio 5: di massimi e minimi"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>III)</td>
    <td><span class="arithmatex">\(\bigg\{~~\frac{1}{n} ~~:~~ n \in \mathbb{N}_{>0}~~\bigg\}\)</span></td>
    <td>non esiste</td>
    <td>1</td>
    </tr>
    </table></div>

    ![Figura 3](../img/numeri-05-campi-ordinati/fig03.svg){ .fig .ovale loading=lazy style="width:58%" }

<a id="box-texexpbox1-15"></a>

!!! esempio "Esempio 6: di massimi e minimi"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>IV)</td>
    <td><span class="arithmatex">\(\bigg\{~~\frac{n-1}{n+1} ~~:~~ n \in \mathbb{N}~~\bigg\}\)</span></td>
    <td>\-1</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Abbiamo:

    $$
    \frac{n-1}{n+1} = \frac{n+1-1-1}{n+1}=1-\frac{2}{n+1}
    $$

    ![Figura 4](../img/numeri-05-campi-ordinati/fig04.svg){ .fig .ovale loading=lazy style="width:58%" }

!!! chiave ""

    Si osservi che talvolta, pur essendo l'insieme limitato, esso può non possedere massimo o minimo.

<a id="box-texexpbox1-16"></a>

!!! esempio "Esempio 7: di massimi e minimi"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>V)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ 27 \le  x^3 \right\}\)</span></td>
    <td>3</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Abbiamo:

    $$
    27 \le  x^3 \Longleftrightarrow \sqrt[3]{27}=3 \le  x {\rm ~~~~e~~~} 3 \in E
    $$

<a id="box-texexpbox1-17"></a>

!!! esempio "Esempio 8: di massimi e minimi"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>VI)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~ x \ge 0,  x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Il valore $\sqrt{2}$ è irrazionale quindi troncando otteniamo  numeri razionali che si avvicinano sempre di più a $\sqrt{2}$ nessuno con la proprietà di essere massimo. 

    ![Figura 5](../img/numeri-05-campi-ordinati/fig05.svg){ .fig .ovale loading=lazy style="width:50%" }

    È un esempio di insieme limitato ma che non ammette massimo.

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>VII)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~  ~  x  > \sqrt{2}, x\le 4   \right\}\)</span></td>
    <td>non esiste</td>
    <td>4</td>
    </tr>
    </table></div>

    Il valore $\sqrt{2}$ è irrazionale quindi troncando e maggiorando otteniamo dei numeri razionali che si avvicinano sempre di più a $\sqrt{2}$ nessuno con la proprietà di essere minimo. 

    ![Figura 6](../img/numeri-05-campi-ordinati/fig06.svg){ .fig .ovale loading=lazy style="width:50%" }

    È un esempio di insieme limitato ma che non ammette minimo.

<a id="box-ex_max-min-intervalli-18"></a>

!!! esempio "Esempio 9: di massimi e minimi di intervalli"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>VIII)</td>
    <td><span class="arithmatex">\([-2,1]\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td>IX)</td>
    <td><span class="arithmatex">\((-\infty,3)\)</span></td>
    <td>non esiste</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    - Nell'esempio VIII) l'intervallo contiene entrambi i suoi estremi: $-2 \in [-2,1]$ e $-2 \le x$ per ogni $x \in [-2,1]$, quindi $-2$ è il minimo; $1 \in [-2,1]$ e $x \le 1$ per ogni $x \in [-2,1]$, quindi $1$ è il massimo.

    - Nell'esempio IX) l'intervallo non è limitato inferiormente e quindi non ha minimo. Non ha nemmeno massimo: preso un qualunque $x \in (-\infty,3)$, il numero

        $$
        y = \frac{x+3}{2} \qquad {\rm ~~verifica~~} \qquad x < y < 3
        $$

        infatti $y - x = \frac{3-x}{2} > 0$ e $y < 3 \Leftrightarrow x < 3$. Dunque $y \in (-\infty,3)$ ed è strettamente maggiore di $x$: nessun elemento dell'insieme può essere il massimo.

<a id="box-ex_max-min-diseq-19"></a>

!!! esempio "Esempio 10: di massimo e minimo di un insieme definito da una disequazione"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>X)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ -5 \le 3\,x < 4 \right\}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Conviene prima <strong>risolvere la disequazione</strong>: dividendo per $3 > 0$, e usando la proprietà $R_3$ che conserva il verso, otteniamo

    $$
    -5 \le 3\,x < 4 \qquad \Longleftrightarrow \qquad -\frac{5}{3} \le x < \frac{4}{3}
    \qquad {\rm ~~cioè~~} \qquad E = \bigg[-\frac{5}{3}, \frac{4}{3}\bigg)
    $$

    - $-\frac{5}{3} \in E$ ed è minore o uguale a ogni elemento di $E$: è quindi il minimo.

    - Il massimo non esiste: come nell'esempio IX), preso $x \in E$, il numero $y = \frac{1}{2}\big(x + \frac{4}{3}\big)$ verifica $x < y < \frac{4}{3}$ ed è ancora un elemento di $E$ strettamente maggiore di $x$.

## 8. Maggioranti/minoranti e estremi superiori/inferiori

<a id="box-defXX-20"></a>

!!! definizione "Definizione 6: di maggioranti di un insieme"

    Sia $E$ un insieme contenuto in $\Q$ o in $\R$,  un numero $k$ appartenente a $\Q$ o a   $\R$ rispettivamente, si dice un <strong>maggiorante</strong>  di $E$  se:

    $$
    \forall x \in E, \qquad  x \le k
    $$

<a id="box-defXX-21"></a>

!!! definizione "Definizione 7: di minorante di un insieme"

    Sia $E$ un insieme contenuto in $\Q$ o in $\R$,  un numero $k$ appartenente a $\Q$ o a   $\R$ rispettivamente, si dice un <strong>minorante</strong>  di $E$  se:

    $$
    \forall x \in E, \qquad k \le  x
    $$

!!! chiave ""

    Osserviamo che un insieme superiormente (inferiormente) limitato ha molti maggioranti (minoranti). Inoltre  i maggioranti (minoranti) non appartengono necessariamente all'insieme stesso.

<a id="box-oss_semiretta-maggioranti-22"></a>

!!! osservazione "Osservazione 5"

    Se $k$ è un maggiorante di $E$, allora ogni numero $h \ge k$ è ancora un maggiorante di $E$; se $k$ è un minorante di $E$, allora ogni numero $h \le k$ è ancora un minorante di $E$. Quindi l'insieme dei maggioranti (minoranti) di $E$, se non è vuoto, è una <strong>semiretta</strong>.

??? dimostrazione "Dimostrazione"

    Sia $k$ un maggiorante di $E$ e sia $h \ge k$. Per ogni $x \in E$ abbiamo $x \le k$ per definizione di maggiorante, e quindi, per la proprietà transitiva,

    $$
    x \le k \le h \qquad \Longrightarrow \qquad x \le h
    $$

    cioè $h$ è un maggiorante di $E$. L'insieme dei maggioranti contiene allora, insieme a ogni suo elemento $k$, tutti i numeri maggiori di $k$: è dunque una semiretta illimitata superiormente.

    La dimostrazione per i minoranti è analoga: se $k$ è un minorante di $E$ e $h \le k$, per ogni $x \in E$ si ha $h \le k \le x$ e quindi $h \le x$. <span class="qed">□</span>

<a id="box-oss_maggiorante-massimo-23"></a>

!!! osservazione "Osservazione 6"

    Un maggiorante di $E$ che <strong>appartiene</strong> a $E$ è il massimo di $E$; un minorante di $E$ che appartiene a $E$ è il minimo di $E$.

??? dimostrazione "Dimostrazione"

    Sia $k$ un maggiorante di $E$ con $k \in E$. Per definizione di maggiorante vale $x \le k$ per ogni $x \in E$: queste sono esattamente le due condizioni che definiscono il massimo di $E$ (appartenere a $E$ ed essere maggiore o uguale a tutti i suoi elementi), e quindi $k = \max E$.

    Allo stesso modo, se $k$ è un minorante di $E$ e $k \in E$, allora $k \le x$ per ogni $x \in E$ e $k \in E$, cioè $k = \min E$. <span class="qed">□</span>

<a id="box-defXX-24"></a>

!!! definizione "Definizione 8: di estremo superiore"

    L' <strong>estremo superiore</strong> di $E$ ( indicato con $\sup E$)  è il minimo  dei maggioranti di $E$.

<a id="box-defXX-25"></a>

!!! definizione "Definizione 9: di estremo inferiore"

    L' <strong>estremo inferiore</strong> di $E$ ( indicato con $\inf E$)  è il massimo  dei minoranti di $E$.

!!! chiave ""

    Osserviamo che l'estremo superiore (inferiore) può non esistere (insiemi non limitati). Osserviamo inoltre  che se l'insieme possiede massimo (minimo), questo coincide con l'estremo superiore (inferiore).

!!! chiave ""

    Per gli insiemi non limitati si adotta la seguente <strong>convenzione</strong>: se $E$ non è limitato superiormente si scrive

    $$
    \sup E = +\infty
    $$

    e se $E$ non è limitato inferiormente si scrive

    $$
    \inf E = -\infty
    $$

    I simboli $+\infty$ e $-\infty$ <strong>non sono numeri</strong>: la scrittura è solo un modo compatto per dire che $E$ non ha maggioranti (minoranti).

<a id="box-ex_sup-inf-intervalli-26"></a>

!!! esempio "Esempio 11: di estremi superiori e inferiori di intervalli"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>VIII)</td>
    <td><span class="arithmatex">\([-2,1]\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td>IX)</td>
    <td><span class="arithmatex">\((-\infty,3)\)</span></td>
    <td><span class="arithmatex">\(-\infty\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>non esiste</td>
    <td>non esiste</td>
    </tr>
    <tr>
    <td>X)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ -5 \le 3\,x < 4 \right\}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td><span class="arithmatex">\(\frac{4}{3}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td>non esiste</td>
    </tr>
    </table></div>

    - Negli esempi VIII) e X) il minimo esiste e quindi coincide con l'estremo inferiore; nell'esempio VIII) anche il massimo esiste e coincide con l'estremo superiore.

    - Nell'esempio IX) l'insieme non è limitato inferiormente e quindi, per la convenzione appena introdotta, $\inf E = -\infty$. Il numero $3$ è un maggiorante, perché $x < 3$ per ogni $x \in E$; nessun numero $k < 3$ è un maggiorante, perché il numero $y = \frac{k+3}{2}$ verifica $k < y < 3$ e quindi appartiene a $E$. Dunque $3$ è il minimo dei maggioranti, cioè $\sup E = 3$ (e non è un massimo, perché $3 \notin E$).

    - Nell'esempio X), con lo stesso ragionamento applicato a $E = \big[-\frac{5}{3}, \frac{4}{3}\big)$, si ottiene $\sup E = \frac{4}{3} \notin E$.

    - Riprendendo infine l'esempio III), per $E = \big\{ \frac{1}{n} : n \in \N_{>0} \big\}$ si ha $\inf E = 0$ e $\sup E = \max E = 1$. Infatti $0$ è un minorante, perché $\frac{1}{n} > 0$ per ogni $n \in \N_{>0}$; e nessun numero $k > 0$ è un minorante, perché per la <strong>proprietà di Archimede</strong> esiste $n \in \N_{>0}$ con $n > \frac{1}{k}$, e quindi $\frac{1}{n} < k$. Dunque $0$ è il massimo dei minoranti, ma non è il minimo perché $0 \notin E$.

<a id="box-texexpbox1-27"></a>

!!! esempio "Esempio 12: di estremi superiori e inferiori"

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>I)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~ x \ge 0, x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td>non esiste in <span class="arithmatex">\(\Q\)</span></td>
    <td>0</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Qui si cercano i maggioranti <strong>dentro</strong> $\Q$. Abbiamo:

    $$
    \sqrt{2} \notin E
    {\rm ~~~~e~~~} \sqrt{2} \notin \Q
    $$

    quindi il massimo non esiste; e non esiste nemmeno il $\sup$ <strong>in</strong> $\Q$, perché i maggioranti razionali di $E$ sono i razionali maggiori di $\sqrt{2}$ e fra questi non ce n'è uno minimo (troncando $\sqrt{2}$ per eccesso si ottengono maggioranti razionali sempre più piccoli). Come mostra l'esempio seguente, in $\R$ l'estremo superiore esiste e vale $\sqrt{2}$.

    <div class="tabella" markdown><table>
    <tr>
    <td>Esempio</td>
    <td>insieme <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimo</td>
    <td>massimo</td>
    </tr>
    <tr>
    <td>II)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ x \ge 0,  ~x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td><span class="arithmatex">\(\sqrt{2}\)</span></td>
    <td>0</td>
    <td>non esiste</td>
    </tr>
    </table></div>

    Abbiamo:

    $$
    \sqrt{2} \notin E
    {\rm ~~~~e~~~} \sqrt{2} \in \R
    $$

    ovvero il massimo non esiste ma $\sqrt{2}$ è il minimo dei maggioranti e quindi è il $\sup$.

## 9. Definizione assiomatica dei numeri reali

!!! chiave ""

    Si dice che un insieme numerico $X$ totalmente ordinato possiede la <strong>proprietà dell'estremo superiore</strong>, se:

    - **$R_4 \rightarrow$** Ogni insieme $E \subset X$  non vuoto e limitato superiormente possiede estremo superiore in $X$

- Si prova facilmente che, se vale questa proprietà, allora è anche vero che ogni sottoinsieme di $X$ non vuoto e inferiormente limitato ammette estremo inferiore.

- Non si richiede che $X$ stesso abbia estremo superiore (ad esempio, nel caso $X = \mathbb{Q}$ o $\mathbb{R}$ questo è certamente falso!) , ma che ogni sottoinsieme non vuoto superiormente limitato di $X$ ne sia provvisto.

!!! chiave ""

    L'esempio VI mostra che certamente $\mathbb{Q}$ non ha la proprietà dell'estremo superiore. Invece, $\mathbb{R}$ ha questa proprietà. [^2]

- Nella <strong>definizione assiomatica</strong> di $\mathbb{R}$, questa proprietà costituisce parte della definizione stessa di $\mathbb{R}$

<a id="box-defXX-28"></a>

!!! definizione "Definizione 10: (assiomatica) dei numeri reali"

    Chiamiamo $\mathbb{R}$ un insieme che soddisfa le proprietà $R_1$, $R_2$ (con la proprietà distributiva), $R_3$ ed $R_4$, ossia un campo ordinato che ha la proprietà dell'estremo superiore

<a id="box-prop_archimede-29"></a>

!!! teorema "Proposizione 1: proprietà di Archimede"

    Per ogni numero reale $x$ esiste un numero naturale $n$ tale che:

    $$
    n > x
    $$

- È la proprietà che abbiamo richiamato nel capitolo <em>Insiemi</em> e usato poco sopra. <strong>Non è un assioma in più</strong>: come mostra la dimostrazione, segue dalla proprietà $R_4$.

??? dimostrazione "Dimostrazione"

    Supponiamo per assurdo che esista un numero reale $x$ tale che $n \le x$ per ogni $n \in \N$. Allora l'insieme $\N$ è un sottoinsieme di $\R$ non vuoto e limitato superiormente (da $x$), e quindi per la proprietà $R_4$ possiede estremo superiore in $\R$:

    $$
    s = \sup \N
    $$

    Poiché $s$ è il <strong>minimo</strong> dei maggioranti di $\N$, il numero $s-1$, che è più piccolo di $s$, non è un maggiorante di $\N$: esiste quindi $n \in \N$ tale che

    $$
    n > s-1 \qquad \Longrightarrow \qquad n+1 > s
    $$

    Ma $n+1$ è ancora un numero naturale, e questo contraddice il fatto che $s$ è un maggiorante di $\N$. L'ipotesi iniziale è dunque assurda, e per ogni $x \in \R$ esiste $n \in \N$ con $n > x$. <span class="qed">□</span>

- In forma equivalente: per ogni numero reale $\varepsilon > 0$ esiste $n \in \N_{>0}$ tale che $\frac{1}{n} < \varepsilon$. Infatti basta scegliere $n > \frac{1}{\varepsilon}$, e allora $\frac{1}{n} < \varepsilon$. Di conseguenza l'unico numero non negativo minore o uguale a $\frac{1}{n}$ per ogni $n \in \N_{>0}$ è lo zero.

- La proprietà dell'estremo superiore prende anche il nome di <strong>assioma di Dedekind</strong>, <strong>o assioma di continuità</strong>, o <strong>assioma di completezza</strong> e si può enunciare anche nella seguente forma equivalente.

!!! chiave ""

    Sia $\{A, B\}$ una partizione di $\mathbb{R}$ (cioè $A$ e $B$ sono insiemi non vuoti e disgiunti la cui unione è $\mathbb{R}$); la partizione  si chiama <strong>sezione</strong> se:

    $$
    \forall a \in A {\rm ~~e~~} \forall b \in B {\rm ~~risulta~~} a < b.
    $$

    Allora si dimostra che:

    - **$R_4' \rightarrow$** Per ogni sezione $\{A, B\}$ di $\mathbb{R}$ esiste un unico numero reale $s$ (chiamato <strong>elemento separatore</strong>) tale che:

        $$
        \forall a \in A {\rm ~~e~~} \forall b \in B , \qquad a \le s \le b \qquad
        $$

    Tale elemento separatore è  il $\sup A$ e  l'$\inf B$, quindi $\sup A=\inf B$

## 10. Rappresentazione geometrica di $\mathbb{R}$

!!! chiave ""

    L'insieme dei numeri reali $\mathbb{R}$ può essere messo in corrispondenza biunivoca con i punti della retta euclidea?

- Ritorniamo ora al problema dell'incommensurabilità di lato e diagonale del quadrato. Quando, con riga e compasso, fissato il lato unitario del quadrato, ne costruiamo la diagonale e la riportiamo sulla retta di partenza, l'arco tracciato dal compasso "spezza la retta in due", generando quella che abbiamo chiamato una sezione;  l'elemento separatore, che esiste per l'assioma $R_4$ rappresenta geometricamente il punto di intersezione, e quindi quel numero misura la diagonale.

![Figura 7](../img/numeri-05-campi-ordinati/fig07.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    Quindi l'interpretazione geometrica della proprietà $R_4$ ci mostra come l'insieme $\mathbb{R}$ sia una rappresentazione adeguata della nostra idea intuitiva di retta, così adeguata che <strong>spesso in matematica si usa l'espressione  “la retta reale” per indicare</strong> $\mathbb{R}$, confondendo l'insieme numerico con la sua rappresentazione geometrica naturale.

[^1]: una struttura algebrica è un insieme, chiamato insieme sostegno (della struttura), munito di una o più operazioni
[^2]: Non presenteremo però una dimostrazione formale.
