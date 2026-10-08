---
title: "Cardinalità degli insiemi infiniti"
---

# Cardinalità degli insiemi infiniti

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 11** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-numeri-11-insiemi-infiniti.pdf)

</div>

## 1. Potenza del numerabile

!!! chiave ""

    È possibile confrontare la “numerosità” degli insiemi infiniti?

- Affrontiamo il discorso a partire dagli insiemi numerici notevoli che abbiamo introdotto: $\N, \Z, \Q, \R$ e chiediamoci: quanti sono gli elementi di ciascuno di questi insiemi?

- Intuitivamente, la risposta sembra ovvia: ciascuno di questi insiemi ha infiniti elementi; tuttavia i numeri razionali sono più numerosi dei numeri interi, essendo $\Z \subset \Q$, e per lo stesso motivo i numeri reali sono più numerosi dei numeri razionali, essendo $\Q \subset \R$.

- Come possiamo affermare, al tempo stesso, che due insiemi sono entrambi infiniti, ma uno è più numeroso dell'altro?

!!! chiave ""

    Com'è possibile, in generale,  confrontare la numerosità degli insiemi infiniti?

- Per dar senso a queste domande, prima ancora che per sapervi rispondere, occorre definire cosa si intenda per uguale numerosità di due insiemi.

- Astraendo dall'esperienza del contare gli elementi di un insieme finito, si è giunti a identificare l'idea di <strong>uguale numerosità</strong> con quella di <strong>corrispondenza biunivoca</strong>:

<a id="box-defXX-1"></a>

!!! definizione "Definizione 1: di uguale cardinalità di due insiemi"

    Due insiemi $A$, $B$ si dicono di <strong>uguale cardinalità</strong> (o potenza) se possono essere messi in corrispondenza biunivoca tra loro, cioè se esiste una legge che associa ad ogni elemento di $A$ uno e un solo elemento di $B$, e viceversa.

- La cardinalità (o potenza) di un insieme traduce l'idea intuitiva di numerosità

<a id="box-obserXX-2"></a>

!!! osservazione "Osservazione 1"

    L'insieme dei numeri interi $~\Z$ e l'insieme dei numeri naturali $~\N$ hanno la stessa cardinalità

??? dimostrazione "Dimostrazione"

    La seguente legge mette in corrispondenza biunivoca i numeri interi e i numeri naturali:

    <div class="tabella" markdown><table>
    <tr>
    <td><span class="arithmatex">\(\Z\)</span></td>
    <td>0</td>
    <td>1</td>
    <td>\-1</td>
    <td>2</td>
    <td>\- 2</td>
    <td>…</td>
    <td><span class="arithmatex">\(n\)</span></td>
    <td><span class="arithmatex">\(-n\)</span></td>
    <td>…</td>
    </tr>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    <td><span class="arithmatex">\(\updownarrow\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\N\)</span></td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>…</td>
    <td><span class="arithmatex">\(2\:n-1\)</span></td>
    <td><span class="arithmatex">\(2\:n\)</span></td>
    <td>…</td>
    <td></td>
    </tr>
    </table></div> <span class="qed">□</span>

- Quindi, anche se dal punto di vista dell'inclusione $\Z$ ha “più elementi” di $\N$ (nel senso che ha tutti gli elementi di $\N$ più altri), gli insiemi hanno la stessa cardinalità.

!!! chiave ""

    Due insiemi che hanno la stessa cardinalità si dicono anche <strong>equipotenti</strong> e vanno pensati come ugualmente numerosi.

<a id="box-defXX-3"></a>

!!! definizione "Definizione 2: di insieme numerabile"

    Si dice <strong>numerabile</strong> un insieme che ha la stessa cardinalità di $\N$.

- Il termine numerabile indica che gli elementi dell'insieme si possono enumerare, ossia disporre in un elenco numerato (posto 1, posto 2, posto 3, … )

!!! chiave ""

    La cardinalità di $\N$ prende il nome di <strong>potenza del numerabile</strong>.

<a id="box-obserXX-4"></a>

!!! teorema "Teorema 1"

    L'insieme $\Q$ è numerabile

??? dimostrazione "Dimostrazione"

    - Cominciamo a dimostrare che l'insieme dei numeri razionali positivi è numerabile.

    - Per far questo, rappresentiamo i numeri razionali positivi come frazioni $n/m$, con $n$, $m$ interi positivi, e disponiamo queste frazioni in una <strong>tabella triangolare infinita</strong>, al modo seguente:

        <div class="tabella" markdown><table>
        <tr>
        <td><span class="arithmatex">\(\frac{n}{m}\)</span>, con <span class="arithmatex">\(n+m=\dots\)</span></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2</td>
        <td><span class="arithmatex">\(\frac{1}{1}\)</span></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>3</td>
        <td><span class="arithmatex">\(\frac{1}{2}\)</span></td>
        <td><span class="arithmatex">\(\frac{2}{1}\)</span></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>4</td>
        <td><span class="arithmatex">\(\frac{1}{3}\)</span></td>
        <td><span class="arithmatex">\(\frac{2}{2}\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{1}\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td>5</td>
        <td><span class="arithmatex">\(\frac{1}{4}\)</span></td>
        <td><span class="arithmatex">\(\frac{2}{3}\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{2}\)</span></td>
        <td><span class="arithmatex">\(\frac{4}{1}\)</span></td>
        </tr>
        <tr>
        <td>…</td>
        <td>…</td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        </table></div>

        Si noti che: tutte le frazioni che rappresentano numeri razionali positivi compaiono in questa tabella almeno una volta; alcuni sono ripetuti più volte (ad es. $\frac{1}{1} = \frac{2}{2}$). Ogni riga ha lunghezza finita.

    - Quindi possiamo mettere in corrispondenza biunivoca $\N$ con l'insieme dei razionali positivi, percorrendo la tabella, riga dopo riga (e saltando un elemento quando è uguale ad uno già incontrato). Ad esempio:

        <div class="tabella" markdown><table>
        <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>…</td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\frac{1}{1}\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{2}\)</span></td>
        <td><span class="arithmatex">\(\frac{2}{1}\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{3}\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{1}\)</span></td>
        <td><span class="arithmatex">\(\frac{1}{4}\)</span></td>
        <td><span class="arithmatex">\(\frac{2}{3}\)</span></td>
        <td><span class="arithmatex">\(\frac{3}{2}\)</span></td>
        <td><span class="arithmatex">\(\frac{4}{1}\)</span></td>
        <td>…</td>
        </tr>
        </table></div>

        (si noti che abbiamo saltato $\frac{2}{2}$ perché uguale a $\frac{1}{1}$, già incontrato).

    - Questo dimostra che l'insieme dei razionali positivi è numerabile.

    - Allora anche $\Q$ è numerabile, e questo si può provare con una dimostrazione analoga a quella con cui abbiamo provato che $\Z$ è numerabile: detti $q_1, q_2, q_3, \dots$ i razionali positivi, si pone:

        <div class="tabella" markdown><table>
        <tr>
        <td><span class="arithmatex">\(\N\)</span></td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>…</td>
        </tr>
        <tr>
        <td></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td><span class="arithmatex">\(\updownarrow\)</span></td>
        <td></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(\Q\)</span></td>
        <td>0</td>
        <td><span class="arithmatex">\(q_1\)</span></td>
        <td><span class="arithmatex">\(-q_1\)</span></td>
        <td><span class="arithmatex">\(q_2\)</span></td>
        <td><span class="arithmatex">\(-q_2\)</span></td>
        <td><span class="arithmatex">\(q_3\)</span></td>
        <td><span class="arithmatex">\(-q_3\)</span></td>
        <td>…</td>
        <td></td>
        </tr>
        </table></div>

        che realizza una corrispondenza biunivoca tra $\N$ e $\Q$.

    <p class="qed-riga"><span class="qed">□</span></p>

- Aver scoperto che diversi insiemi infiniti, uno propriamente contenuto nell'altro $(\N, \Z, \Q)$, hanno la stessa cardinalità, potrebbe far pensare che questo sia vero per tutti gli insiemi infiniti. Ciò non è vero, come mostrato nella prossima sezione.

## 2. Potenza del continuo

<a id="box-obserXX-5"></a>

!!! teorema "Teorema 2"

    L'insieme dei numeri reali $~\R$ non è numerabile

- La tecnica di  dimostrazione prende il nome di <strong>procedimento diagonale di Cantor</strong>

??? dimostrazione "Dimostrazione"

    - Proveremo che l'intervallo $[0, 1]$  ha una cardinalità non numerabile,  da cui ovviamente segue la non numerabilità di $\R$

    - Supponiamo dunque <strong>per assurdo</strong> che $[0, 1]$ sia numerabile e disponiamo <strong>tutti</strong> i numeri reali dell'intervallo $[0 , 1]$ in un elenco $r_1 , r_2, r_3, \dots$

    - Scriviamo ogni numero $r_i$ in forma decimale:

        $$
        0.a_1 a_2 a_3 \dots
        $$

        dove gli $a_i$ sono cifre da $0$ a $9$; se le cifre sono tutte zero si ha $r_i =0$ e se sono tutte nove si ha $r_i = 0.\overline{9}  = 1$):

        \begin{align*}
        r_1=&0.a_{11} a_{12} a_{13} \dots \\
        r_2=&0.a_{21} a_{22} a_{23} \dots \\
        r_3=&0.a_{31} a_{32} a_{33} \dots \\
        \dots
        \end{align*}

    - Definiamo ora il seguente numero decimale:

        $$
        r=0.b_1 b_2 b_3 \dots
        $$

        dove le cifre $b_i$ sono definite con la seguente regola:

        $$
        b_i =
        \begin{cases}
        5 & {\rm se~~} a_{ii} {\rm ~~è~una~cifra~~} 0, 1, 2, 3 {\rm ~~o~~} 4\\
        4 & {\rm se~~} a_{ii} {\rm ~~è~una~cifra~~} 5, 6, 7, 8 {\rm ~~o~~} 9\\
        \end{cases}
        $$

        Con questa definizione risulta $b_i \neq a_{ii}$ per ogni $i$. Si noti che il numero $r$ è stato costruito ragionando sulla diagonale della tabella infinita che ha per righe i numeri $r_i$, da cui il nome del procedimento.

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Dimostrazione"

    - Osserviamo ora che $r$ è un numero reale appartenente all'intervallo $[0, 1]$ (perché è del tipo $0.b_1 b_2b_3 \dots$ con tutte le cifre uguali a 4 o 5) e d'altro canto non è uguale a nessuno dei numeri $r_i$ dell'elenco, in quanto:

        - **$\rightarrow$** $r \neq r_1$ la prima cifra di $r$ è diversa dalla prima cifra di $r_1$ ($b_1 \neq a_{11})$;

        - **$\rightarrow$** $r \neq r_2$ la seconda cifra di $r$ è diversa dalla seconda cifra di $r_2$ ($b_2 \neq a_{22})$;

        - **$\rightarrow$** …

    - Ma questo porta a una <strong>contraddizione</strong>, avevamo supposto che gli $r_i$ esaurissero completamente l'insieme dei numeri reali dell'intervallo $[0, 1]$. Dunque $[0, 1]$ non è numerabile.

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    Poiché $\N$ non può essere messo in corrispondenza biunivoca con $\R$, ma può essere messo in corrispondenza biunivoca con un sottoinsieme proprio di $\R$ ($\N$ stesso!), diciamo che $\N$ ha <strong>cardinalità minore</strong> di $\R$.

- Notiamo anche che l'intervallo $[0, 1]$, e qualsiasi intervallo di $\R$ (aperto o chiuso, limitato o illimitato) ha la stessa cardinalità di $\R$.

- Questo fatto si può dimostrare ad esempio con una costruzione geometrica elementare, che realizza una corrispondenza biunivoca tra punti della retta e di un segmento $[A,B]$; come mostra  la seguente figura, tracciando opportuni segmenti dai due punti fissati $P_1$ , $P_2$ alla retta stessa:

    ![Figura 1](../img/numeri-11-insiemi-infiniti/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

- Questo implica che, ad esempio, i punti di una retta hanno la stessa cardinalità dei punti di un segmento.

!!! chiave ""

    La cardinalità di $\R$ prende il nome di <strong>potenza del continuo</strong>.

- Non solo ogni intervallo di $\R$ ha questa stessa cardinalità. Si può dimostrare che lo stesso vale per il piano, per lo spazio tridimensionale e per i loro sottoinsiemi “continui”: per esempio, un piano e una sfera hanno entrambi la potenza del continuo.

- Abbiamo incontrato fin qui solo due livelli gerarchici di infinito: la potenza del numerabile e quella del continuo. Non si deve credere che esistano solo queste due! Ad esempio, l'insieme di tutti i sottoinsiemi di $\R$ è ancora più numeroso di $\R$; e con questo procedimento si può sempre costruire un insieme più numeroso di un insieme dato.

- Perciò i livelli gerarchici delle cardinalità infinite sono anch'essi infiniti.
