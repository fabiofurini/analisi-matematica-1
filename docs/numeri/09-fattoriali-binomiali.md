---
title: "Fattoriali, coefficienti binomiali e disuguaglianza triangolare"
---

# Fattoriali, coefficienti binomiali e disuguaglianza triangolare

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 9** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf)

</div>

## 1. Fattoriali

<a id="box-notationA-1"></a>

!!! definizione "Definizione 1: di fattoriale di $n$"

    Il fattoriale di $n$ è il prodotto dei primi $n$  interi. Si indica con $n!$ e si legge “$n$ fattoriale”. In formule:

    $$
    n! = \prod_{k=1}^n k=1 \cdot 2 \cdot 3 \cdot {\rm} \dots {\rm} \cdot (n-1) \cdot n
    $$

    Si pone, per definizione, $0! = 1$.

- Il numero $n!$ cresce molto rapidamente al crescere di $n$. I primi valori sono:

    <div class="tabella" markdown><table>
    <tr>
    <td>n</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    </tr>
    <tr>
    <td>n!</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>6</td>
    <td>24</td>
    <td>120</td>
    <td>720</td>
    <td>5.040</td>
    <td>40.320</td>
    <td>362.880</td>
    <td>3.628.800</td>
    </tr>
    </table></div>

- Alcune proprietà del fattoriale, di verifica immediata, sono:

    !!! chiave ""

        $$
        n! = n \cdot (n-1)!
        $$

        \begin{equation}
        \label{MM}
        \frac{n!}{(n-k)!}  =  n \cdot (n-1) \cdot (n-2) \cdot {\rm} \dots {\rm} \cdot (n-k+1),  {\rm ~~con~~} k\ge 1
        \end{equation}

        Con $k\ge 1$,  diventa  il prodotto di $k$ fattori, partendo da $n$ e decrescendo di una unità alla volta.

    <a id="box-texexpbox1-2"></a>

    !!! esempio "Esempio 1: Calcolo del fattoriale"

        $$
        \frac{100!}{95!}= \frac{100!}{(100-5)!}=100 \cdot 99 \cdot 98 \cdot 97 \cdot 96 = 9.034.502.400
        $$

        Conviene sempre semplificare il più possibile le espressioni che contengono il fattoriale, prima di calcolarle!

## 2. Coefficienti binomiali

<a id="box-notationA-3"></a>

!!! definizione "Definizione 2: di coefficiente binomiale"

    Si definisce <strong>coefficiente binomiale</strong> il numero:

    \begin{equation}
    c_{n,k}  = \frac{n!}{k!\:(n-k)!}
    \qquad {\rm ~~con~~}
    0 \le k \le n.
    \label{CB1}
    \end{equation}

    Il coefficiente binomiale $c_{n,k}$ si indica usualmente col simbolo: ${{n}\choose{k}}$ che si legge “$n$ su $k$”.

- Data la regola \(\eqref{MM}\), abbiamo:

    \begin{equation}
    c_{n,k} = \frac{n \cdot (n-1) \cdot (n-2) \cdot {\rm} \dots {\rm} \cdot (n-k+1)}{k!} 
    \label{CB2}
    \end{equation}

    con $k\ge 1$,  espressione che è più maneggevole per il calcolo  del coefficiente binomiale.

!!! chiave ""

    Abbiamo:

    \begin{equation}
    \label{LL}
     {{n}\choose{n-k}}  = {{n}\choose{k}}
    \end{equation}

    Dato che:

    $$
    {{n}\choose{n-k}} =  \frac{n!}{(n-k)!\:(n-(n-k))!}=\frac{n!}{k!\:(n-k)!}= {{n}\choose{k}}
    $$

    Abbiamo:

    \begin{equation}
    \label{TT}
     {{n-1}\choose{k-1}} + {{n-1}\choose{k}} = {{n}\choose{k}}
    \end{equation}

    Dato che:

    \begin{align*}
    {{n-1}\choose{k-1}} + {{n-1}\choose{k}} &=  \frac{(n-1)!}{(k-1)!\:\underbrace{(n-1-(k-1))!}_{=~(n-k)!~=~(n-k)\:(n-k-1)!}}+\frac{(n-1)!}{k!\:(n-k-1)!}\\[2ex]
    &=\frac{(n-1)!}{(k-1)!\:(n-k)\:(n-k-1)!}+\frac{(n-1)!}{k\:(k-1)!\:(n-k-1)!} \\[2ex]
    &=\frac{k\:(n-1)!+(n-k)\:(n-1)!}{k\:(k-1)!\:(n-k)\:(n-k-1)!}  =\frac{\overbrace{(n-1)!\:n}^{=n!}}{\underbrace{k\:(k-1)!}_{k!}\:\underbrace{(n-k)\:(n-k-1)!}_{(n-k)!}}  \\[2ex]
    &=\frac{n!}{k!\:(n-k)!}= {{n}\choose{k}}
    \end{align*}

    Segue anche:

    \begin{equation*}
    {{n}\choose{k-1}} + {{n}\choose{k}} = {{n+1}\choose{k}}
    \end{equation*}

### 2.1 Formula di Newton

La potenza $n$-esima di un binomio $(a + b)$ si può calcolare con la seguente formula (da cui deriva il nome di coefficiente binomiale):

<a id="box-PROP_NEWTON-4"></a>

!!! osservazione "Osservazione 1: formula di Newton"

    Per ogni intero $n \ge 0$, con $a, b \in \R$, vale:

    \begin{equation}
    \label{NEWTON}
    (a+b)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k
    \end{equation}

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 0$. Allora l'asserto diventa: $(a+b)^0 = {{0}\choose{0}} \; a^{0} \; b^0$ cioè $1 = 1$ che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva,   abbiamo: $(a+b)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k$. Allora:

        \begin{align*}
        (a+b)^{n+1} &= (a+b) \cdot (a+b)^{n} = (a+b) \:  \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k\\[2.5ex]
        &= \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k+1} \; b^{k} + \underbrace{\sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^{k+1}}_{\displaystyle = \sum_{k=1}^{n+1} ~~{{n}\choose{k-1}} ~~\; a^{n-k+1} \; b^{k}}\\[2ex]
        &= a^{n+1} + \sum_{k=1}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k+1} \; b^{k} + b^{n+1} + \sum_{k=1}^{n} ~~{{n}\choose{k-1}} ~~\; a^{n-k+1} \; b^{k}\\[4ex]
        & = a^{n+1} + b^{n+1} + \sum_{k=1}^{n} ~~ \underbrace{ \left(~~ {{n}\choose{k}} +  {{n}\choose{k-1}} ~~\right)}_{\displaystyle ={{n+1}\choose{k}}} ~~\; a^{n-k+1} \; b^{k}\\[1ex]
        &=   \sum_{k=0}^{n+1} ~~   {{n+1}\choose{k}} ~~\; a^{n+1-k} \; b^{k}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-PROP_XX-5"></a>

!!! osservazione "Osservazione 2"

    Per ogni intero $n \ge 0$ e $k$ intero tale che $0\le k \le n$, abbiamo:

    \begin{equation}
    \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~ = 2^n
    \end{equation}

??? dimostrazione "Dimostrazione"

    Scriviamo:

    $$
    2^n = (1+1)^n
    $$

    Applichiamo ora la formula di Newton \(\eqref{NEWTON}\):

    $$
    (1+1)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; 1^{n-k} \; 1^k =  \sum_{k=0}^{n} ~~{{n}\choose{k}}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.2 Calcolo ricorsivo dei coefficienti binomiali

!!! chiave ""

    La relazione \(\eqref{TT}\) permette di calcolare i coefficienti binomiali ${{n}\choose{k}}$ per mezzo del cosiddetto <strong>triangolo di Tartaglia</strong> (o di Pascal).

    Le regole per la creazione del triangolo  sono:

    1. In cima al triangolo si pone il numero ${{0}\choose{0}}=1$ (per definizione).

    2. Ai lati si pongono i numeri ${{n}\choose{0}} = {{n}\choose{n}} = 1$ per ogni $n  \ge 1$.

    3. Per $0 < k < n$, il numero ${{n}\choose{k}}$ viene scritto all'incrocio della $n$-esima riga e della $k$-esima colonna.

    4. Il numero ${{n}\choose{k}}$ risulta dalla somma dei due numeri che si trovano nella riga precedente, quello sulla stessa colonna e quello sulla colonna precedente.

<a id="box-texexpbox1-6"></a>

!!! esempio "Esempio 2: triangolo di Tartaglia (o di Pascal)"

    Il triangolo di Tartaglia con $n \le 10$ e $k \le 10$ è:

    <div class="tabella" markdown><table>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(k=0\)</span></td>
    <td><span class="arithmatex">\(k=1\)</span></td>
    <td><span class="arithmatex">\(k=2\)</span></td>
    <td><span class="arithmatex">\(k=3\)</span></td>
    <td><span class="arithmatex">\(k=4\)</span></td>
    <td><span class="arithmatex">\(k=5\)</span></td>
    <td><span class="arithmatex">\(k=6\)</span></td>
    <td><span class="arithmatex">\(k=7\)</span></td>
    <td><span class="arithmatex">\(k=8\)</span></td>
    <td><span class="arithmatex">\(k=9\)</span></td>
    <td><span class="arithmatex">\(k=10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=0\)</span></td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=1\)</span></td>
    <td>1</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=2\)</span></td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=3\)</span></td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=4\)</span></td>
    <td>1</td>
    <td>4</td>
    <td class="cella-rossa">6</td>
    <td class="cella-rossa">4</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=5\)</span></td>
    <td>1</td>
    <td>5</td>
    <td>10</td>
    <td class="cella-blu">10</td>
    <td>5</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=6\)</span></td>
    <td>1</td>
    <td>6</td>
    <td>15</td>
    <td>20</td>
    <td>15</td>
    <td>6</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=7\)</span></td>
    <td>1</td>
    <td>7</td>
    <td>21</td>
    <td>35</td>
    <td>35</td>
    <td>21</td>
    <td>7</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=8\)</span></td>
    <td>1</td>
    <td>8</td>
    <td>28</td>
    <td>56</td>
    <td>70</td>
    <td>56</td>
    <td>28</td>
    <td>8</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=9\)</span></td>
    <td>1</td>
    <td>9</td>
    <td>36</td>
    <td>84</td>
    <td>126</td>
    <td>126</td>
    <td>84</td>
    <td>36</td>
    <td>9</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=10\)</span></td>
    <td>1</td>
    <td>10</td>
    <td>45</td>
    <td>120</td>
    <td>210</td>
    <td>252</td>
    <td>210</td>
    <td>120</td>
    <td>45</td>
    <td>10</td>
    <td>1</td>
    </tr>
    </table></div>

    Per calcolare il coefficiente binomiale ${{5}\choose{3}}$, corrispondente alla cella blu, si può usare la relazione \(\eqref{TT}\) e sommare i due coefficienti binomiali: ${{4}\choose{2}}$ e ${{4}\choose{3}}$, corrispondenti alle celle rosse:

    $$
    {{5}\choose{3}} =  {{4}\choose{2}} +  {{4}\choose{3}} = 6+4 =10.
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 3: calcolo della potenza di un binomio usando il triangolo di Tartaglia"

    Grazie al precedente triangolo di Tartaglia e alla formula di Newton \(\eqref{NEWTON}\) possiamo calcolare:

    $$
    (a+b)^5 = a^5 + 5\: a^4 \: b + 10\: a^3 \:b^2 + 10 \:a^2 \:b^3 + 5 \: a\: b^4 + b^5
    $$

## 3. Valore assoluto

<a id="box-defXX-8"></a>

!!! definizione "Definizione 3: di valore assoluto"

    Il <strong>valore assoluto</strong> di un numero reale $a \in \mathbb{R}$ (o <strong>modulo</strong> di $a$) è il  numero non negativo così definito:

    \begin{equation}
    |a|  = 
    \begin{cases}
    a & {\rm se~~} a \ge 0\\
    -a & {\rm se~~} a < 0
    \end{cases}
    \label{ass_1}
    \end{equation}

!!! chiave ""

    Dalla definizione di valore assoluto segue immediatamente che:

    \begin{equation}
    \forall \varepsilon \ge 0, a \in \mathbb{R}, \qquad  |a| \le \varepsilon \Longleftrightarrow -\varepsilon \le a \le \varepsilon
    \label{ass_2}
    \end{equation}

### 3.1 Disuguaglianza triangolare in $\R$

<a id="box-notationA-9"></a>

!!! osservazione "Osservazione 3: disuguaglianza triangolare in $\R$"

    \begin{equation}
    |b + c| \le |b| + |c|  \qquad \forall  b,c \in \mathbb{R}
    \label{ass_3}
    \end{equation}

??? dimostrazione "Dimostrazione"

    Scriviamo le due relazioni:

    $$
    -|b| \le b \le |b|, \quad \quad -|c| \le c \le |c|
    $$

    e sommiamo membro a membro:

    $$
    -(|b| + |c|) \le b + c \le |b| + |c|
    $$

    Quindi per la \(\eqref{ass_2}\), con $\varepsilon=|b|+|c|\ge 0$ e  $a=b+c$, segue la \(\eqref{ass_3}\). <span class="qed">□</span>

- La disuguaglianza triangolare è  usata anche nella forma seguente:

    \begin{equation}
    |d - e| \le |d-f| + |e-f| \qquad \forall d,e,f \in \mathbb{R}
    \label{ass_4}
    \end{equation}

    Per ottenerla basta porre nella \(\eqref{ass_3}\):

    $$
    b = d - f, \quad c =   f-e
    $$

    otteniamo:

    $$
    |d - f  +f-e|=|d -e| \le |d - f| + |f-e| = |d - f| + |e-f|
    $$

    in quanto:

    $$
    |f - e| = |e-f| \qquad \forall e,f \in \mathbb{R}
    $$

- Inoltre la disuguaglianza triangolare si può anche scrivere nella  forma seguente:

    \begin{equation}
    |g| \le |g-h| + |h| {\rm ~~~~~cioè~~~~~} |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
     \label{ass_AA}
    \end{equation}

    Per ottenerla basta porre nella \(\eqref{ass_3}\):

    $$
    b =  g - h, \quad  c = h
    $$

<a id="box-notationA-10"></a>

!!! osservazione "Osservazione 4: disuguaglianza triangolare inversa in $\R$"

    \begin{equation}
    \big||g| - |h|\big| \le |g-h|, \quad \forall g,h \in \mathbb{R}.
    \label{ass_4__2}
    \end{equation}

??? dimostrazione "Dimostrazione"

    Dalla \(\eqref{ass_AA}\) abbiamo

    $$
    |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Analogamente scambiando $g$ con $h$ nella \(\eqref{ass_AA}\) otteniamo:

    $$
    |h| - |g| \le |h-g| = |g-h|  {\rm ~~~~ovvero~~~~} |g| - |h| \ge -|g-h|
    $$

    dunque abbiamo

    $$
    -(|g-h|) \le  |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Quindi per la \(\eqref{ass_2}\), con $\varepsilon = |g-h| \ge 0$ e $a= |g| - |h|$ segue la disuguaglianza triangolare inversa. <span class="qed">□</span>

- La \(\eqref{ass_3}\) può facilmente estendersi al caso di $k$ addendi:

    \begin{equation}
    \left| \sum_{i=1}^k  b_i \right| \le  \sum_{i=1}^k  |b_i|.
    \label{ass_6}
    \end{equation}

- Valgono anche le seguenti proprietà immediate:

    \begin{equation}
    |b\:c| = |b| \: |c|, \qquad \left| \frac{b}{c}\right|= \frac{|b|}{|c|}, \qquad |-b|=|b| \qquad \forall  b,c \in \mathbb{R}.
    \label{ass_7}
    \end{equation}
