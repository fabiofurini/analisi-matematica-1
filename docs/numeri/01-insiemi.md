---
title: "Insiemi"
---

# Insiemi

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 1** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/numeri-01-insiemi.pdf)

</div>
## 1. Introduzione informale alla teoria degli insiemi

- La teoria degli insiemi si base sui seguenti tre concetti chiave:

    1. <strong>Insiemi</strong>

        La nozione di insieme è generalmente assunta come <strong>primitiva</strong> (cioè non riducibile a concetti più elementari). Si usano come sinonimi di insieme le parole: <em>collezione</em>, <em>classe</em>, <em>aggregato</em>, <em>famiglia</em>.

        !!! esempio "Esempio 1: insiemi"

            Ad esempio abbiamo l'insieme dei punti di un piano, l'insieme degli studenti di una università o l'insieme delle stelle di una galassia.

    2. <strong>Elementi</strong>

        Un insieme è determinato dai suoi <em>elementi</em>, nel senso che un insieme è definito quando abbiamo un <strong>criterio</strong> con cui stabilire se un dato elemento è o non è elemento di questo insieme. 

        Esistono insiemi con un <em>numero finito di elementi</em> (ad esempio l'insieme degli studenti di una università ) o con un <em>numero infinito di elementi</em> (ad esempio l'insieme dei punti del piano).

        !!! chiave ""

            Per indicare gli insiemi si usano solitamente lettere maiuscole.  Per indicare gli elementi di un insieme si usano solitamente lettere minuscole.

    3. <strong>Appartenenza</strong>

        Il concetto di <em>appartenenza</em> lega gli elementi agli insiemi. Quando un oggetto è un elemento di un insieme si afferma che quell'elemento <em>appartiene</em> all'insieme. Per indicare che un elemento $x$ appartiene a un insieme insieme $A$ scriviamo:

        $$
        x \in A
        $$

### 1.1 Definizione informale di insiemi

1. Un primo modo di definire gli insieme  è la <strong>definizione mediante  tabulazione</strong>

    !!! chiave ""

        Un insieme può essere definito <strong>mediante tabulazione</strong>  ossia elencando gli elementi che vi appartengono fra parentesi graffe. Questa tecnica  presuppone che l'insieme abbia un numero finito di elementi.

    !!! esempio "Esempio 2: definizione mediante tabulazione"

        La scrittura:

        $$
        A = \{a,b,c\}
        $$

        significa che l'insieme $A$ ha come elementi le tre  lettere $a$, $b$ e $c$. Ad esempio abbiamo che $a$ appartiene ad $A$ ovvero $a \in A$.

2. Un secondo modo di definire gli insieme  è la <strong>definizione mediante proprietà</strong>:

    !!! chiave ""

        Un insieme può essere definito <strong>mediante proprietà</strong> come segue:

        $$
        A = \big\{~ x \in U:  p(x) {\rm~~è~vera} ~\big\}
        $$

        dove $p(x)$ è la proprietà che l'elemento $x$ dell'insieme  $U$ deve possedere per appartenere all'insieme $A$. Questa tecnica  si può utilizzare per definire insiemi con un numero finito di elementi o anche infinito.

    !!! esempio "Esempio 3: definizione mediante proprietà"

        Consideriamo ad esempio l'insieme delle lettere dell'alfabeto latino:

        $$
        U =\{a,~ b,~ c,~ d,~ e,~ f,~ g,~ h,~ i,~ j,~ k,~ l,~ m,~ n,~ o,~ p,~ q,~ r,~ s,~ t,~ u,~ v,~ w,~ x,~ y,~ z
        \}
        $$

        Utilizzando ad esempio la proprietà $p(x)$ definita come “$x$ è una vocale” possiamo definire il seguente insieme delle vocali:

        $$
        A= \underbrace{\{x \in U: x {\rm ~~~è~una~vocale}\}}_{ \{a,~e,~i,~o,~u\} }
        $$

    Notiamo che per definire un insieme $A$ mediante una proprietà abbiamo bisogno di un insieme $U$ a cui appartengono tutti gli elementi dell'insieme $A$ che si vuole  definire. L'insieme $U$ svolge il ruolo di <strong>insieme universo</strong>.

    E' importante che la proprietà $p(x)$ che si utilizza abbia senso per ogni $x$ dell'insieme $U$ (insieme universo), e quindi risulti vera o falsa (senza ambiguità di significato) per ogni particolare $x \in U$; l'insieme $A$ consisterà allora di tutti e soli quegli $x$ appartenenti ad $U$ per cui la proprietà $p(x)$ è vera.

!!! chiave ""

    Occorre fare attenzione alla definizione degli insiemi in quanto possono emergere contraddizioni. Esiste una definizione formale del concetto di insieme sviluppata per evitare contraddizioni ma che esula dal programma del corso. oggetti sono degli insiemi.

- Ad esempio l'insieme di tutti gli insiemi che non contengono se stessi non è un insieme nella definizione formale degli insiemi. Ammettere questo insieme genererebbe la contraddizione: “l'insieme di tutti gli insiemi che non appartengono a se stessi appartiene a se stesso se e solo se non appartiene a se stesso” (<strong>Paradosso di Russel</strong> –  sezione [↗](#sec:Russell)).

## 2. Insiemi numerici

!!! definizione "Definizione 1: sistema numerico"

    Un <strong>sistema numerico posizionale</strong> è un modo per codificare i numeri usando una <strong>sequenza di cifre</strong>, dove ciascuna cifra contribuisce in modo diverso al numero a seconda della sua posizione. Il numero di cifre distinte è la <strong>base</strong> del sistema.

!!! chiave ""

    L'<strong>espansione decimale</strong> di un numero è una rappresentazione numerica in base 10 ed esprime un numero come una somma di potenze di 10, e può essere finita o infinita a seconda del tipo di numero.

- Definizione informale dei principali insiemi numerici :

    1. Indichiamo con $\N$ l'insieme dei <strong>numeri naturali</strong> ovvero l'insieme dei numeri che si possono scrivere come <strong>espansioni decimali senza virgola e senza segni</strong>. Useremo la scrittura informale:

        $$
        \N = \{0,~ 1,~ 2,~ 3,~ 4,~ \dots\}
        $$

    2. Indichiamo con $\Z$ l'insieme dei <strong>numeri interi</strong> ovvero l'insieme dei numeri che si possono scrivere come <strong>espansioni decimali senza virgola e con segno</strong>. Useremo la scrittura informale:

        $$
        \Z = \{0,~ \pm 1,~ \pm 2,~ \pm 3,~ \pm 4,~ \dots \}
        $$

    3. Indichiamo con $\Q$  l'insieme dei <strong>numeri razionali</strong> ovvero l'insieme dei numeri che si possono scrivere come <strong>espansioni decimali finite o infinite periodiche</strong>. In altre parole, è l'insieme è dei numeri che si possono scrivere come una frazione $\frac{p}{q}$ dove $p$ è un numero intero e $q$ è un numero naturale diverso da zero.

        !!! esempio "Esempio 4: numeri razionali"

            - Ad esempio con $p=2$ e $q=5$ abbiamo la frazione $\frac{2}{5}$ la cui espansione decimale è $0.4$.

            - Ad esempio con $p=4$ e $q=10$ abbiamo la frazione $\frac{4}{10}$ la cui espansione decimale è di nuovo $0.4$. Notiamo che un numero razionale può essere scritto  con più di una frazione.

            - Ad esempio con $p=13$ e $q=30$ abbiamo la frazione $\frac{13}{30}$ la cui espansione decimale è $0.4\bar{3}=0.43333\dots$.

        Possiamo tuttavia rappresentare ogni numero razionale diverso da $0$ mediante una sola frazione $\frac{p}{q}$ scegliendo $p \in \Z$ e $q \in \N$ coprimi (ovvero primi tra loro, cioè $p$ e $q$ non sono divisibili per uno stesso intero maggiore di 1).

        !!! osservazione "Osservazione 1"

            $$
            0,\overline{9}=1
            $$

        ??? dimostrazione "Dimostrazione"

            Esistono differenti dimostrazioni di questa osservazione basate su differente tecniche matematiche.

            1. Una semplice prova deriva direttamente della definizione di $1$ diviso $3$, abbiamo infatti:

                \begin{align*}
                \frac{1}{3} &= 0,\overline{3}\\
                \frac{1}{3} \cdot 3 &= 0,\overline{3} \cdot 3\\
                 1 &= 0,\overline{9}
                \end{align*}

            2. Usando argomenti algebrici possiamo scrivere:

                \begin{align*}
                x &= 0.999\dots\\
                10\:x &= 9.999\dots & {\rm moltiplicando~per~} 10 \\
                10\:x &= 9 + 0.999\dots & {\rm dividendo~la~parte~intera~da~quella~frazionaria} \\
                10\:x &= 9 + x & {\rm per~definizione~di~} x\\
                9\:x &= 9  & {\rm sottraendo~} x\\
                x &= 1  & {\rm dividendo~per~} 9
                \end{align*}

            3. Una prova per assurdo è la seguente:

                \begin{align*}
                0,\overline{9} & \neq 1\\
                0,\overline{9} \cdot 9 & \neq 1 \cdot 9\\
                0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 1 \cdot 9 +0,\overline{9}\\
                0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 9,\overline{9}\\
                0,\overline{9} \cdot  (9+1) & \neq 9,\overline{9}\\
                0,\overline{9} \cdot  (10) & \neq 9,\overline{9}\\
                9,\overline{9} & \neq 9,\overline{9} ~~~~~~ {\rm assurdo!}
                \end{align*} <span class="qed">□</span>

    4. Indichiamo con $\R$  l'insieme dei <strong>numeri reali</strong> ovvero l'insieme dei numeri che si indentificano con espansioni decimali finite o infinite, periodiche o non periodiche.

        !!! esempio "Esempio 5: numeri reali"

            - Consideriamo ad esempio il numero

                $$
                0,10110111011110 \dots
                $$

                ottenuto mettendo dopo la virgola una cifra uguale a $1$, poi $0$, poi due cifre uguali a $1$,  poi $0$, poi tre cifre uguali a $1$ … e così via. L'allineamento di cifre diverse da zero dopo la virgola non è né finito né periodico: questo numero perciò è reale ma non razionale.

            - Altri esempi di numeri reali ma non razionali sono $\sqrt{2}$ e $\sqrt{3}$ oppure $\pi$ e il numero di Nepero $e$ che hanno espansioni decimali infinite non periodiche e dunque sono numeri reali ma non razionali.

- Esistono definizioni formali di degli  insiemi dei numeri naturali, interi e razionali che esulano dal programma del corso. Daremo più avanti una definizione formale dei numeri reali.

## 3. Relazioni tra insiemi

1. <strong>Uguaglianza</strong><br> Due insiemi $A$ e $B$ sono uguali quando possiedono gli stessi elementi. Si scrive

    $$
    A = B
    $$

    e significa che ogni elemento che appartiene ad $A$ appartiene anche a $B$ e ogni elemento che appartiene a $B$ appartiene anche ad $A$.

2. <strong>Inclusione</strong><br> Può accadere che valga solo una delle due richieste espresse dalla relazione di uguaglianza. Ad esempio, se sappiamo solo che ogni elemento di $A$ è anche elemento di $B$, potremo dire che $A$ è contenuto in $B$. Si scrive:

    $$
    A \subseteq B {\rm ~~~oppure~~} A \subset B
    $$

    e si legge “$A$ è contenuto in $B$” oppure “$A$ è un <strong>sottoinsieme</strong> di $B$”. Se si afferma che $A \subseteq B$, non si esclude che sia $A = B$.

    !!! chiave ""

        Dire che $A = B$ equivale a dire che $A \subseteq B$ e $B \subseteq A$.

    !!! chiave ""

        Si faccia attenzione a non confondere “appartiene a” e “è contenuto in” (in simboli, $\in$ e $\subseteq$). In un certo senso, sono due modi per indicare che “qualcosa sta dentro qualcos'altro” , ma hanno una differenza logica fondamentale:

        - un insieme è contenuto in un altro insieme;

        - un elemento appartiene a un insieme.

    !!! esempio "Esempio 6: “appartiene a” vs “è contenuto in”"

        Ad esempio:

        $$
        3 \in \{1,3,4\};
        $$

        $$
        \{3\} \subseteq \{1, 3, 4\};
        $$

        $$
        \{1,4\} \subseteq \{1,3,4\}.
        $$

        In particolare, non si confonda $3$ (che è un numero) con $\{3\}$ , che è l'insieme che contiene come unico elemento il numero 3.

    Talvolta si considerano insiemi che hanno per elementi altri insiemi. Anche in questo caso  i simboli $\in$ e $\subseteq$ non sono intercambiabili, ma devono rispettare essere utilizzati correttamente.

    !!! esempio "Esempio 7: “appartiene a” vs “è contenuto in”"

        Ad esempio, se definiamo l'insieme

        $$
        A = \bigg\{ ~\{1\},~ \{2\},~ \{1, 2\} ~\bigg\},
        $$

        allora è corretto affermare che $\{2\} \in A$, perché $\{2\}$ è un insieme che svolge il ruolo di elemento di $A$, mentre sarebbe scorretto dire che $\{2\} \subseteq A$, perché questo significherebbe che $2 \in A$ , mentre $A$ ha come elemento $\{2\}$  ma non $2$. Invece il sottoinsieme di $A$ che contiene il solo elemento $\{2\}$ si indica con $\big\{\{2\}\big\}$ e vale  $\big\{\{2\}\big\} \subset A$.

### 3.1 Insieme vuoto, cardinalità e insieme delle parti

!!! definizione "Definizione 2: di insieme vuoto"

    L'<strong>insieme vuoto</strong> è l'insieme che non contiene alcun elemento. Si indica  con  $\varnothing.$

!!! osservazione "Osservazione 2"

    Dato un insieme $A$, abbiamo:

    $$
    \varnothing \subseteq A
    $$

??? dimostrazione "Dimostrazione"

    Per dimostrarlo, dovremmo provare che ogni elemento che appartiene a $\varnothing$, appartiene anche ad $A$; ma nessun elemento appartiene a $\varnothing$, per cui abbiamo la tesi. <span class="qed">□</span>

!!! definizione "Definizione 3: di cardinalità di un insieme"

    Il numero di elementi di un insieme $A$ è la <strong>cardinalità</strong> dell'insieme.  Si indica con $|A|$.

!!! definizione "Definizione 4: di insieme delle parti"

    Dato  un insieme $A$, l'insieme che ha per elementi tutti i sottoinsiemi di $A$ si chiama <strong>insieme delle parti</strong> di $A$ e si indica col simbolo $\mathscr{P}(A).$

- Ogni insieme $A$ ha due sottoinsiemi banali, che sono $A$ stesso e l'insieme vuoto $\varnothing$ (potrebbero coincidere, se $A$ è vuoto).

!!! esempio "Esempio 8: insieme delle parti"

    Ad esempio, dato

    $$
    A= \{1, 2, 3\} ,
    $$

    allora

    $$
    \mathscr{P}(A) = \bigg\{~\varnothing,~ \{1\},~ \{2\},~ \{3\},~ \{1, 2\},~ \{2, 3\},~ \{1 , 3\},~ \{1,2,3\} ~\bigg\}
    $$

!!! osservazione "Osservazione 3"

    Dato un insieme $A$ con $n$ elementi, l'insieme delle parti $\mathscr{P}(A)$ ha $2^n$ elementi:

    $$
    |\mathscr{P}(A)|=2^n
    $$

??? dimostrazione "Dimostrazione"

    Per ciascuno degli elementi di $A$, i sottoinsiemi di $A$ possono contenere  o meno quell'elemento. Quindi dobbiamo prendere una decisione tra due opzioni $n$  volte. Il numero totale di sottoinsiemi possibili è quindi $2^{n}$. <span class="qed">□</span>

!!! esempio "Esempio 9: costruzione dell'insieme delle parti con un albero binario"

    Dato l'insieme $A=\{1,2,3\}$ con $n=3$ elementi, la cardinalità  del suo insieme delle parti è $2^3=8$. La costruzione dell'insieme delle parti $\mathscr{P}(A)$ può essere visualizzata attraverso il seguente <strong>albero binario</strong> (grafo non diretto, connesso e aciclico) a cui a ogni livello si decide se includere o meno l'oggetto nel sottoinsieme:

    ![Figura 1](../img/numeri-01-insiemi/fig01.svg){ .fig .ovale loading=lazy style="width:100%" }

## 4. Operazioni tra insiemi

!!! definizione "Definizione 5: di intersezione di insiemi"

    L'<em>intersezione</em> di due insiemi $A,B \subseteq U$ è l'insieme definito da:

    $$
    A \cap B = \big\{x \in U: x \in A {\rm ~~e~~} x \in B \big\}
    $$

E' l'insieme degli elementi che appartengono sia al primo sia al secondo insieme.

!!! definizione "Definizione 6: di unione di insiemi"

    L'<strong>unione</strong> di due insiemi $A,B \subseteq U$ è l'insieme definito da:

    $$
    A \cup B = \big\{x \in U: x \in A {\rm ~~o~~} x \in B \big\}
    $$

E' l'insieme degli elementi che appartengono al primo o al secondo insieme, intendendo la “o” in modo <u>non esclusivo</u> (l'insieme degli elementi che appartengono ad $A$ o a $B$ o a entrambi).

!!! definizione "Definizione 7: di differenza di insiemi"

    La <strong>differenza</strong> di due insiemi $A,B \subseteq U$ è l'insieme definito da:

    $$
    A \setminus B = \big\{x \in A: x \notin B \big\}
    $$

E' l'insieme degli elementi che appartengono al primo ma non al secondo insieme. Il simbolo “$\setminus$” si può anche scrivere “-” per analogia con la differenza aritmetica.

### 4.1 Insiemi complementari e insiemi disgiunti

!!! esempio "Esempio 10: insiemi universo"

    Ad esempio, in questioni di aritmetica potrebbe essere $U= \N$, mentre in questioni di analisi potrebbe essere $U =\R$.

!!! definizione "Definizione 8: di complementazione insiemi e insiemi complementari"

    La <strong>complementazione</strong> di un insieme $A \subseteq U$ è l'insieme definito da:

    $$
    \overline{A} = \big\{x \in U: x \notin A \big\}
    $$

    Tale insieme si chiama <strong>insieme complementare</strong> di $A$ rispetto a $U$

- Per ogni insieme $\red{A} \subseteq \violet{U}$, dove $\violet{U}$ è l'insieme universo,  abbiamo le seguenti relazioni:

!!! chiave ""

    \begin{align*}
    \overline{ \overline{ \red{A}}} &= \red{A}\\
      \red{A} \cap \overline{\red{A}} &= \varnothing\\
      \red{A} \cup \overline{\red{A}} &= \violet{U}
    \end{align*}

!!! chiave ""

    \begin{align*}
    \red{A} \cap \varnothing &= \varnothing \\
      \red{A} \cap \violet{U} &= \red{A} \\
      \red{A} \cup \varnothing &= \red{A} \\
      \red{A} \cup \violet{U} &= \violet{U}
    \end{align*}

!!! chiave ""

    \begin{align*}
    \violet{\overline{U}} &= \varnothing \\
      \overline{\varnothing} &= U
    \end{align*}

!!! definizione "Definizione 9: di insiemi disgiunti"

    Due insiemi $\red{A}$ e $\blue{B}$ sono  <strong>disgiunti</strong> se non hanno elementi in comune:

    $$
    \red{A} \cap \blue{B} = \varnothing
    $$

### 4.2 Diagrammi di Venn

I diagrammi di Venn sono rappresentazioni grafiche in cui gli insiemi sono rappresentati come regioni del piano

- Diagrammi di Venn di intersezione, unione e differenza:

    <div class="figure-affiancate" markdown>

    ![Figura 2](../img/numeri-01-insiemi/fig02.svg){ .fig .ovale loading=lazy style="width:32%" }

    ![Figura 3](../img/numeri-01-insiemi/fig03.svg){ .fig .ovale loading=lazy style="width:32%" }

    ![Figura 4](../img/numeri-01-insiemi/fig04.svg){ .fig .ovale loading=lazy style="width:32%" }

    </div>

- Diagrammi di Venn di complementare di un insieme:

    ![Figura 5](../img/numeri-01-insiemi/fig05.svg){ .fig .ovale loading=lazy style="width:25%" }

### 4.3 Prodotto cartesiano

Esiste un'altra operazione sugli insiemi, che può essere eseguita su due insiemi qualsiasi (cioè due insiemi non necessariamente contenuti nel medesimo universo):

!!! definizione "Definizione 10: di prodotto cartesiano"

    Dati due insiemi (non necessariamente distinti) $A$ e $B$, l'insieme costituito da tutte le <em>coppie ordinate</em> $(a, b)$, con $a \in A$ e $b \in B$, si chiama <strong>prodotto cartesiano</strong> di $A$ per $B$ e si indica col simbolo $A \times B$.

Quando ${A}$ e ${B}$ sono due insiemi finiti, la cardinalità del loro prodotto cartesiano è:

$$
|{A} \times {B}| = |{A}| \cdot |{B}|.
$$

!!! esempio "Esempio 11: prodotto cartesiano"

    $$
    \{a,b\} \times \{a,b,c\} = \big\{ (a,a),(a,b),(a,c),(b,a),(b,b),(b,c) \big\}
    $$

    $$
    |\{a,b\}|=2,~~ |\{a,b\}|=3,~~ |\{a,b\} \times \{a,b,c\}| = 2 \cdot 3 = 6
    $$

- Un tipico uso di prodotto cartesiano si ha con $\R \times \R$, che si abbrevia col simbolo $\R^2$, e denota l'insieme delle coppie ordinate di numeri reali.

- Analogamente, $\R^n$ (abbreviazione del prodotto cartesiano di $n$ insiemi uguali a $\R$) è l'insieme delle <em>$n$-uple ordinate di numeri reali</em>

    $$
    \R^n =\big\{ ~(x_1,~x_2,~ \dots,~ x_n)~: ~~x_i \in \R, ~~i \in \{1,2,\dots, n\} ~\big\}
    $$

### 4.4 Proprietà delle operazioni su insiemi

!!! osservazione "Osservazione 4: proprietà dell'intersezione"

    Dati tre insiemi $\red{A}, \blue{B}$ e $\orange{C}$, l'intersezione gode delle seguenti proprietà:

    - <strong>Commutativa</strong>:

        $$
        \red{A} \cap \blue{B} = \blue{B} \cap \red{A}
        $$

    - <strong>Associativa</strong>:

        $$
        \red{A} \cap (\blue{B} \cap \orange{C}) = (\red{A} \cap \blue{B}) \cap \orange{C}
        $$

    - <strong>Idempotenza:</strong>:

        $$
        \red{A} \cap \red{A} = \red{A}
        $$

??? dimostrazione "Dimostrazione"

    La dimostrazione grafica della proprietà associativa dell'intersezione è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 6](../img/numeri-01-insiemi/fig06.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 7](../img/numeri-01-insiemi/fig07.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 8](../img/numeri-01-insiemi/fig08.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 9](../img/numeri-01-insiemi/fig09.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 10](../img/numeri-01-insiemi/fig10.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

!!! osservazione "Osservazione 5: proprietà dell'unione"

    Dati tre insiemi $\red{A}, \blue{B}$ e $\orange{C}$, l'unione gode delle seguenti proprietà:

    - <strong>Commutativa</strong>:

        $$
        \red{A} \cup \blue{B} = \blue{B} \cup \red{A}
        $$

    - <strong>Associativa</strong>:

        $$
        \red{A} \cup (\blue{B} \cup \orange{C}) = (\red{A} \cup \blue{B}) \cup \orange{C}
        $$

    - <strong>Idempotenza:</strong>:

        $$
        \red{A} \cup \red{A} = \red{A}
        $$

??? dimostrazione "Dimostrazione"

    La dimostrazione grafica della proprietà associativa dell'unione è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 11](../img/numeri-01-insiemi/fig11.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 12](../img/numeri-01-insiemi/fig12.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 13](../img/numeri-01-insiemi/fig13.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 14](../img/numeri-01-insiemi/fig14.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 15](../img/numeri-01-insiemi/fig15.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

!!! osservazione "Osservazione 6: proprietà distributive (legano unione e intersezione)"

    Dati tre insiemi $\red{A}, \blue{B}$ e $\orange{C}$ abbiamo:

    $$
    \red{A} \cap (\blue{B} \cup \orange{C}) = (\red{A} \cap \blue{B}) \cup (\red{A} \cap \orange{C})
    $$

    $$
    \red{A} \cup (\blue{B} \cap \orange{C}) = (\red{A} \cup \blue{B}) \cap (\red{A} \cup \orange{C}).
    $$

Le proprietà distributive legano fra loro unione e intersezione.

??? dimostrazione "Dimostrazione"

    La dimostrazione grafica della prima proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 16](../img/numeri-01-insiemi/fig16.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 17](../img/numeri-01-insiemi/fig17.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 18](../img/numeri-01-insiemi/fig18.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 19](../img/numeri-01-insiemi/fig19.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 20](../img/numeri-01-insiemi/fig20.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div>

    La dimostrazione grafica della seconda proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 21](../img/numeri-01-insiemi/fig21.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 22](../img/numeri-01-insiemi/fig22.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 23](../img/numeri-01-insiemi/fig23.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 24](../img/numeri-01-insiemi/fig24.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 25](../img/numeri-01-insiemi/fig25.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

!!! teorema "Proposizione 1: leggi di DeMorgan (prima versione)"

    Dati tre insiemi $\red{A}, \blue{B}$ e $\orange{C}$ abbiamo:

    $$
    \red{A} \setminus (\blue{B} \cap \orange{C}) = (\red{A} \setminus \blue{B}) \cup (\red{A} \setminus \orange{C})
    $$

    $$
    \red{A} \setminus (\blue{B} \cup \orange{C}) = (\red{A} \setminus \blue{B}) \cap (\red{A} \setminus \orange{C})
    $$

??? dimostrazione "Dimostrazione"

    La dimostrazione grafica della prima proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 26](../img/numeri-01-insiemi/fig26.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 27](../img/numeri-01-insiemi/fig27.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 28](../img/numeri-01-insiemi/fig28.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 29](../img/numeri-01-insiemi/fig29.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 30](../img/numeri-01-insiemi/fig30.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div>

    La dimostrazione grafica della seconda proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 31](../img/numeri-01-insiemi/fig31.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 32](../img/numeri-01-insiemi/fig32.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 33](../img/numeri-01-insiemi/fig33.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 34](../img/numeri-01-insiemi/fig34.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figura 35](../img/numeri-01-insiemi/fig35.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

!!! teorema "Proposizione 2: Leggi di DeMorgan (seconda versione)"

    Dati gli insiemi $\blue{B}, \orange{C} \subseteq \violet{U}$, abbiamo

    $$
    \overline{\blue{B} \cap \orange{C}} = \overline{\blue{B}} \cup \overline{\orange{C}}
    $$

    $$
    \overline{\blue{B} \cup \orange{C}} = \overline{\blue{B}} \cap \overline{\orange{C}}
    $$

??? dimostrazione "Dimostrazione"

    Queste leggi si possono  derivare settando $A$ uguale a $U$ nelle precedente leggi di DeMorgan, come segue:

    $$
    \underbrace{\violet{U} \setminus (\blue{B} \cap \orange{C})}_{=\overline{\blue{B} \cap \orange{C}} } = (\underbrace{\violet{U} \setminus \blue{B}}_{=  \overline{\blue{B}}}) \cup (\underbrace {\violet{U} \setminus \orange{C}}_{= \overline{\orange{C}}})
    $$

    $$
    \underbrace{\violet{U} \setminus (\blue{B} \cup \orange{C})}_{=\overline{\blue{B} \cup \orange{C}} } = (\underbrace{\violet{U} \setminus \blue{B}}_{=  \overline{\blue{B}}}) \cap (\underbrace {\violet{U} \setminus \orange{C}}_{= \overline{\orange{C}}})
    $$ <span class="qed">□</span>

??? dimostrazione "Dimostrazione"

    La dimostrazione grafica della prima proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 36](../img/numeri-01-insiemi/fig36.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figura 37](../img/numeri-01-insiemi/fig37.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figura 38](../img/numeri-01-insiemi/fig38.svg){ .fig .ovale loading=lazy style="width:30%" }

    </div>

    La dimostrazione grafica della seconda proprietà è la seguente:

    <div class="figure-affiancate" markdown>

    ![Figura 39](../img/numeri-01-insiemi/fig39.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figura 40](../img/numeri-01-insiemi/fig40.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figura 41](../img/numeri-01-insiemi/fig41.svg){ .fig .ovale loading=lazy style="width:30%" }

    </div> <span class="qed">□</span>

- L'insieme degli elementi che appartengono a un insieme $B$ o a un insieme $C$ ma non a tutti e due (intendendo la “o” in modo <u>esclusivo</u>) si ottiene settando $U = B \cup C$ e facendo il complementare dell'intersezione:

![Figura 42](../img/numeri-01-insiemi/fig42.svg){ .fig .ovale loading=lazy style="width:40%" }

!!! chiave ""

    Relazione tra l'inclusione e le operazioni di unione e intersezione:

    $$
    A \subseteq B {\rm ~se~e~solo~se~} A \cap B = A {\rm ~e~} A \cup B = B.
    $$

### 4.5 Proprietà delle cardinalità degli insiemi

!!! chiave ""

    - Per ogni due insiemi finiti $\red{A}$ e $\blue{B}$, abbiamo

        $$
        |\red{A} \cup \blue{B}| = |\red{A}| + |\blue{B}| - |\red{A} \cap \blue{B}|
        $$

        da cui si conclude che

        $$
        |\red{A} \cup \blue{B}| \le |\red{A}| + |\blue{B}|
        $$

    - Se $\red{A}$ e $\blue{B}$ sono disgiunti allora

        $$
        |\red{A} \cap \blue{B}| = 0  {\rm~~e~quindi~~} |\red{A} \cup \blue{B}| = |\red{A}| +  |\blue{B}|
        $$

    - Se $\red{A} \subsetneqq \blue{B}$, allora $|\red{A}| < |\blue{B}|$

## 5. Approfondimenti

### 5.1 Paradosso di Russell

<a id="sec:Russell"></a>

!!! chiave ""

    “un insieme può essere o meno elemento di se stesso?”

- Ad esempio, l'insieme di tutti i libri di una biblioteca non è elemento di se stesso (un insieme di libri non è un libro). Invece, l'insieme di tutti gli insiemi con più di 20 elementi è elemento di se stesso.

- Seguendo questo ragionamento si possono definire due categorie di insiemi:

    1. gli insiemi che non sono elementi di se stessi

    2. gli insiemi che sono elementi di se stessi

!!! chiave ""

    Se consideriamo l'insieme di tutti gli insiemi che non sono elementi di se stessi, esso è o no elemento di se stesso?

Chiamiamo questo insieme $S$,  si possono fare due ipotesi:

- **1** Se supponiamo $S \in S$, allora $S$ contiene se stesso come elemento e quindi non appartiene ad $S$  (poiché per definizione un insieme appartiene ad $S$ soltanto se non contiene se stesso come elemento). Quindi $S \notin S$, e abbiamo una contraddizione. Concludiamo che l'ipotesi debba essere errata.

- **2** Se supponiamo $S \notin S$, allora $S$ non contiene se stesso come elemento e quindi appartiene a $S$ (poiché per definizione un insieme appartiene ad $S$  se non contiene se stesso come elemento). Quindi $S \in S$ e abbiamo un'altra contraddizione. Concludiamo che anche questa ipotesi debba essere errata!

!!! chiave ""

    <strong>Paradosso di Russel:</strong> L'insieme di tutti gli insiemi che non appartengono a se stessi appartiene a se stesso se e solo se non appartiene a se stesso.

- La definizione formale del concetto di insieme si basa sul <strong>sistema di assiomi di Zermelo-Fraenkel</strong>,  abbreviati con <strong>ZF</strong>. Questo sistema di assiomi comprende gli assiomi standard della teoria assiomatica degli insiemi su cui, insieme con l'<em>assioma di scelta</em>, si basa tutta la matematica ordinaria.

- L'<strong>assioma di regolarità</strong> afferma che “Ogni insieme non vuoto $A$ contiene un elemento  disgiunto da $A$”.

- L'<strong>assioma della coppia</strong> afferma che “Dati due oggetti, esiste un insieme i cui elementi sono  i due oggetti”

    !!! osservazione "Osservazione 7"

        Nessun insieme è un elemento di sé stesso

    ??? dimostrazione "Dimostrazione"

        Dato un insieme $A$, applichiamo l'assioma di regolarità a $\{A\}$, che è un insieme per l'assioma della coppia.  Otteniamo quindi l'insieme $\{A,A\}$ che abbreviamo in $\{A\}$ dato che gli insiemi non possono contenere oggetti ripetuti (è un caso speciale di coppia). Per l'assioma di regolarità deve esistere un elemento di $\{A\}$ disgiunto da $\{A\}$. Dato che l'unico elemento di $\{A\}$ è $A$, allora $A$ è disgiunto da $\{A\}$. Quindi, dato che $A\cap \{A\}=\varnothing$, non possiamo avere $A \in A$ (dalla definizione di disgiunto). <span class="qed">□</span>

- Gli altri assiomi ZF non fanno parte del corso base di Analisi Matematica.

- Una ulteriore dimostrazione di

    $$
    0,\overline{9}=1
    $$

    parte dall'assunzione  che due numeri siano uguali se e solo se la loro differenza è uguale a zero e si basano sul calcolare quanto valga $1 - 0,\overline{9}$.

- Questa dimostrazione si basa sul fatto che 0 è l'unico numero non negativo minore di tutti gli inversi degli interi positivi, o equivalentemente che non esiste un numero maggiore di ogni intero. Questa è la <strong>proprietà di Archimede</strong>, che si verifica per i numeri razionali e reali.

??? dimostrazione "Dimostrazione"

    Scriviamo il numero $0,999...$ con $n$ cifre dopo la virgola come $0,(9)_n$, quindi $0,(9)_1 = 0.9$, $0,(9)_2 = 0.99$, $0,(9)_3 = 0.999$, e cosi via. 

    Dato  $\frac{1}{10^n} = 0,0 \dots 01$, con $n$ cifre dopo la virgola, le regola di addizione per i numeri decimali implicano

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
    $$ <span class="qed">□</span>

!!! chiave ""

