---
title: "Calcolo dei limiti delle successioni"
---

# Calcolo dei limiti delle successioni

<div class="info-capitolo" markdown>

**Parte 3 · Limiti di successioni · Capitolo 2** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/successioni-02-calcolo-limiti.pdf)

</div>
## 1. Il calcolo dei limiti delle successioni

- Le dimostrazioni dei  <strong>teoremi basilari</strong> sul calcolo  limiti  si basano sulla <strong>definizione di limite</strong>, sull'<strong>uso di disuguaglianze</strong>, e sull'uso di <strong>proprietà definitivamente vere</strong>.

- In particolare, questi teoremi illustrano la relazione tra l'operazione di limite e le strutture algebriche[^1] e le strutture d'ordine[^2] presenti in $\R$.

!!! chiave ""

    Scriveremo semplicemente $a_n \rr \ell$ per intendere $a_n \rr \ell$ per $n \rr \ip$

<strong>Proprietà dell'operazione di limite rispetto alle operazioni algebriche</strong>.

<a id="box-theoALGEBRA_LIMITI_FINITI-1"></a>

!!! teorema "Teorema 1: dell'algebra dei limiti caso dei limiti finiti"

    Ipotesi:

    $$
    \textbf{1.}~~a_n \rr \ell_a \in \R  \qquad  \textbf{2.}~~ b_n \rr \ell_b \in \R.
    $$

    Tesi:

    $$
    \textbf{1.}~~ a_n \pm b_n  \rr \ell_a \pm \ell_b \qquad  \textbf{2.}~~  \frac{a_n}{b_n}  \rr \frac{\ell_a}{\ell_b} \qquad (b_n, \ell_b\neq 0, {\rm ~definitivamente})
    $$

    $$
    \textbf{3.}~~ a_n \: b_n  \rr \ell_a \: \ell_b \qquad  \textbf{4.}~~  a_n^{b_n}  \rr {\ell_a}^{\ell_b} \qquad (a_n, \ell_a > 0, {\rm ~definitivamente}).
    $$

??? dimostrazione "Dimostrazione"

    Dimostriamo che:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b\in \R ~ \Rightarrow a_n + b_n \rr \ell_a + \ell_b
    $$

    Consideriamo

    \begin{equation}
    |(a_n+b_n) - (\ell_a+\ell_b)| = | (a_n - \ell_a) + (b_n - \ell_b) | \le |a_n - \ell_a| + |b_n - \ell_b| \label{AAA}
    \end{equation}

    per la disuguaglianza triangolare. Poiché per ipotesi $a_n \rr \ell_a~$ e $~b_n \rr \ell_b~$, si ha che

    $$
    |a_n - \ell_a| < \varepsilon_a {\rm ~~~e~~~} |b_n - \ell_b | < \varepsilon_b \quad ({\rm definitivamente})
    $$

    per ogni $\varepsilon_a > 0$ e  $\varepsilon_b > 0$.  Maggiorando i termini della parte destra di \(\eqref{AAA}\) concludiamo che

    $$
    |(a_n+b_n) - (\ell_a+\ell_b)| < \underbrace{2 \: \max \{\varepsilon_a, \varepsilon_b\}}_{=\tilde{\varepsilon} {\rm ~e~}> 0}
    $$

    Per l'arbitrarietà di $\tilde{\varepsilon}$, abbiamo la tesi. <span class="qed">□</span>

??? dimostrazione "Dimostrazione"

    Dimostriamo che:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b \in \R~ \Rightarrow a_n - b_n \rr \ell_a - \ell_b
    $$

    Per ogni $\varepsilon_a > 0$ e  $\varepsilon_b > 0$,  abbiamo:

    \begin{equation*}
    |(a_n-b_n) - (\ell_a-\ell_b)| = | (a_n - \ell_a) + ( \ell_b - b_n) | \le \underbrace{|a_n - \ell_a|}_{< \varepsilon_a} + \underbrace{|\ell_b - b_n|}_{=|b_n -\ell_b | < \varepsilon_b}
    \end{equation*}

    Quindi

    $$
    |(a_n-b_n) - (\ell_a-\ell_b)| < \underbrace{2 \: \max \{\varepsilon_a, \varepsilon_b\}}_{=\tilde{\varepsilon} {\rm ~e~}> 0}
    $$

    Per l'arbitrarietà di $\tilde{\varepsilon}$, abbiamo la tesi. <span class="qed">□</span>

??? dimostrazione "Dimostrazione"

    Dimostriamo che:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b \in \R~ \Rightarrow a_n \: b_n \rr \ell_a \: \ell_b
    $$

    Consideriamo

    \begin{align*}
    |(a_n \: b_n) - (\ell_a \: \ell_b)|  &=  | a_n \: b_n - a_n \: \ell_b + a_n \: \ell_b  - \ell_a \: \ell_b|\\[2ex]
     &= | a_n \: (b_n - \ell_b) + \ell_b \: (a_n - \ell_a) | \le |a_n\: (b_n - \ell_b)| +  |\ell_b \: (a_n - \ell_a)|\\[2ex]
     &=|a_n| \: |b_n - \ell_b| + |\ell_b| \: |a_n - \ell_a|
    \end{align*}

    per la disuguaglianza triangolare e le proprietà del valore assoluto. Quindi

    \begin{equation}
    |(a_n \: b_n) - (\ell_a \: \ell_b)| \le |a_n| \: |b_n - \ell_b| + |\ell_b| \: |a_n - \ell_a| \label{BBB}
    \end{equation}

    Poiché per ipotesi $a_n \rr \ell_a~$ e $~b_n \rr \ell_b~$, si ha che per ogni $\varepsilon_a > 0$ e  $\varepsilon_b > 0$ abbiamo

    $$
    |a_n - \ell_a| < \varepsilon_a {\rm ~~~e~~~} |b_n - \ell_b | < \varepsilon_b \quad ({\rm definitivamente}).
    $$

    Inoltre dato che

    $$
    |a_n - \ell_a|  \ge |a_n| - |\ell_a|
    {\rm ~~abbiamo~~} 
      |a_n| < |\ell_a| + \varepsilon_a, \quad {\rm definitivamente}.
    $$

    Perciò, maggiorando i termini della parte destra di \(\eqref{BBB}\), concludiamo che

    $$
    |(a_n \: b_n) - (\ell_a \: \ell_b)| < (|\ell_a| + \varepsilon_a) \: \varepsilon_b + |\ell_b| \: \varepsilon_a =  \underbrace{|\ell_a| \: \varepsilon_b +  |\ell_b| \: \varepsilon_a  +  \varepsilon_a \cdot \varepsilon_b }_{=\tilde{\varepsilon} {\rm ~e~}> 0}
    $$

    Per l'arbitrarietà di $\tilde{\varepsilon}$, abbiamo la tesi. <span class="qed">□</span>

- L'<strong>operazione di limite mantiene inoltre l' ordinamento</strong>

<a id="box-theoPERMANENZA_SEGNO_1-2"></a>

!!! teorema "Teorema 2: di permanenza del segno $1^a$ forma"

    Ipotesi:

    $$
    \textbf{1.} ~~ a_n \rr \ell_a \qquad \textbf{2.}~~ \ell_a \lessgtr 0.
    $$

    Tesi:

    $$
    a_n  \lessgtr 0, {\rm ~~definitivamente}.
    $$

??? dimostrazione "Dimostrazione"

    Consideriamo il caso con $\ell_a > 0$.  Per definizione di limite abbiamo che

    $$
    |a_n - \ell_a| < \varepsilon, \quad {\rm definitivamente},
    $$

    per ogni $\varepsilon>0$,  che riscriviamo nella forma:

    $$
    \ell_a - \varepsilon < a_n  < \ell_a + \varepsilon, \quad {\rm definitivamente}.
    $$

    Poiché $\ell_a > 0$, possiamo scegliere $\varepsilon > 0$ in modo che $\ell_a - \varepsilon > 0$, allora la disuguaglianza

    $$
    0 < \ell_a - \varepsilon < a_n
    $$

    mostra che $a_n > 0$,  definitivamente. 

    In modo analogo si dimostra il caso con $\ell_a < 0$. <span class="qed">□</span>

<a id="box-theoPERMANENZA_SEGNO_2_A-3"></a>

!!! teorema "Teorema 3: di permanenza del segno $2^a$ forma (parte I)"

    Ipotesi:

    $$
    \textbf{1. }~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~ a_n \ge 0, {\rm ~~definitivamente}.
    $$

    Tesi:

    $$
    \ell_a \ge 0.
    $$

??? dimostrazione "Dimostrazione"

    Segue dal teorema precedente. Infatti, se per assurdo fosse $\ell_a < 0$, dal teorema precedente si avrebbe $a_n < 0$ definitivamente, il che è incompatibile con l'ipotesi che sia $a_n \ge 0$ definitivamente.

    Questo  caso non può accadere ovvero si verifica il contrario,    la tesi del teorema. <span class="qed">□</span>

<a id="box-theoPERMANENZA_SEGNO_2_B-4"></a>

!!! teorema "Teorema 4: di permanenza del segno $2^a$ forma (parte II)"

    Ipotesi:

    $$
    \textbf{1. }~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~ b_n \rr \ell_b \in \R \qquad \textbf{3.}~~ a_n \ge b_n, {\rm~~definitivamente}.
    $$

    Tesi:

    $$
    \ell_a \ge \ell_b.
    $$

??? dimostrazione "Dimostrazione"

    Consideriamo la successione $a_n - b_n$, abbiamo per il Teorema dell'Algebra dei limiti

    $$
    a_n - b_n \rr \ell_a - \ell_b.
    $$

    Dato che per ipotesi

    $$
    a_n \ge b_n {\rm ~~~e~quindi~~~~}  a_n - b_n \ge 0,
    $$

    per il teorema  permanenza del segno $2^a$ forma (parte I) applicato alla successione $a_n - b_n$ abbiamo

    $$
    \ell_a - \ell_b \ge 0 {\rm ~~~e~quindi~~}  \ell_a \ge \ell_b.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- Questo teorema ci dice che in una disuguaglianza tra due successioni si può passare al limite ad ambo i membri, mantenendo il “$\le$” o il “$\ge$”.

- Si noti che in generale, invece, nel passaggio al limite non si conservano  le diseguaglianze strette “$<$” e “$>$”.

    <a id="box-texexpbox1-5"></a>

    !!! esempio "Esempio 1: Passaggio al limite con disuguaglianze strette"

        Ad esempio, anche se gli $a_n$ sono strettamente positivi, il loro limite $\ell_a$ è positivo o nullo come mostra il semplice esempio di $\frac{1}{n} \rr 0$.

<a id="box-theoCONFRONTO-6"></a>

!!! teorema "Teorema 5: del confronto"

    Ipotesi:

    $$
    \textbf{1.}~~ a_n \rr \ell, c_n \rr \ell {\rm ~~e~~} \ell \in \R, \qquad \textbf{2. }~~ a_n \le b_n \le c_n, ~~{\rm definitivamente}.
    $$

    Tesi:

    $$
    b_n \rr \ell.
    $$

??? dimostrazione "Dimostrazione"

    Per definizione di limite abbiamo, definitivamente, che

    $$
    \ell - \varepsilon_a < a_n  < \ell + \varepsilon_a \quad {\rm~e~} \quad \ell - \varepsilon_c < c_n  < \ell + \varepsilon_c
    $$

    per ogni $\varepsilon_a >0$ e $\varepsilon_c >0$.  Quindi:

    $$
    \ell - \max\{ \varepsilon_a, \varepsilon_c\} < a_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\} \quad {\rm~e~} \quad \ell - \max\{ \varepsilon_a, \varepsilon_c\} < c_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\}
    $$

    Dalle ipotesi del teorema abbiamo quindi, definitivamente, che

    $$
    \ell - \max\{ \varepsilon_a, \varepsilon_c\} < a_n  \le b_n \le  c_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\}
    $$

    Ma allora, definitivamente, abbiamo

    $$
    \ell - \underbrace{\max\{ \varepsilon_a, \varepsilon_c\}}_{=\tilde{\varepsilon} {\rm ~e~}> 0} < b_n  < \ell + \underbrace{\max\{ \varepsilon_a, \varepsilon_c\}}_{=\tilde{\varepsilon} {\rm ~e~}> 0}.
    $$

    Per l'arbitrarietà di $\tilde{\varepsilon}$, abbiamo la tesi. <span class="qed">□</span>

- Casi particolari di questo teorema che si usano frequentemente sono espressi dai prossimi corollari, molto utili quando si studia il prodotto tra una successione oscillante (ma limitata) e una che tende a zero

<a id="box-corolCONFRONTO_A-7"></a>

!!! teorema "Corollario 1: del teorema del confronto (parte I)"

    Ipotesi:

    $$
    \textbf{1.}~~c_n \rr 0   \qquad \textbf{2. }~~ |b_n|\le c_n, ~~{\rm definitivamente}.
    $$

    Tesi:

    $$
    b_n \rr 0.
    $$

??? dimostrazione "Dimostrazione"

    Sappiamo che definitivamente abbiamo $-c_n \le b_n \le c_n$. Ovviamente

    $$
    {\rm se~~} c_n \rr 0 {\rm ~~allora~~} -c_n \rr 0.
    $$

    Quindi per il teorema del confronto (con $a_n = -c_n$ e $\ell = 0$) si ha che $b_n \rr 0$. <span class="qed">□</span>

<a id="box-corolCONFRONTO_B-8"></a>

!!! teorema "Corollario 2: del teorema del confronto (parte II)"

    Ipotesi:

    $$
    \textbf{1.}~~c_n \rr 0   \qquad \textbf{2. }~~ \{b_n\} ~~{\rm ~è~limitata ~~(ma~non~necessariamente~convergente)}.
    $$

    Tesi:

    $$
    c_n \: b_n \rr 0.
    $$

??? dimostrazione "Dimostrazione"

    Se $\{b_n\}$ è limitata, ossia $|b_n| \le M$ per un certo $M>0$ e per ogni $n \in \N$. Possiamo quindi scrivere

    $$
    |b_n \: c_n| \le M \: |c_n|.
    $$

    Poiché

    $$
    c_n \rr 0 {\rm ~~anche~~} M \: |c_n| \rr 0,
    $$

    per il corollario [Corollario 1](#box-corolCONFRONTO_A-7) si conclude che $b_n \: c_n \rr 0$. <span class="qed">□</span>

!!! chiave ""

    Il prodotto di una successione infinitesima e una limitata è infinitesimo.

<a id="box-texexpbox1-9"></a>

!!! esempio "Esempio 2: Applicazione del corollario"

    Consideriamo la successione di un rapporto di due espressioni ognuna costituita dalla somma di potenze di $n$, come ad esempio:

    $$
    n \mapsto \frac{n^{{5}/{2}} - 3 \: n + 7}{n^3 + \sqrt{n} - 3 \: n^2}
    $$

    Mettendo in evidenza a numeratore come a denominatore la potenza maggiore si ottiene:

    $$
    \frac{ n^{{5}/{2}} \: \left( 1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}\right)}{n^3\:\left(1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  \right)} = \frac{1}{\sqrt{n}} \: \frac{   1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}}{ 1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  }
    $$

    Ora per il teorema [Teorema 1](#box-theoALGEBRA_LIMITI_FINITI-1) sull'algebra dei limiti e sapendo che potenze negative di $n$ tendono a zero possiamo affermare che:

    $$
    1 - \underbrace{\frac{3}{n^{{3}/{2}} }}_{\rr 0} + \underbrace{\frac{7}{n^{5/2}}}_{\rr 0} \rr 1, \quad 1 + \underbrace{\frac{1}{n^{{5}/{2}} }}_{\rr 0} - \underbrace{\frac{3}{n}}_{\rr 0} \rr 1 {\rm ~~~e~~~} \left( \frac{   1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}}{ 1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  } \right) \rr 1
    $$

    quindi  l'ultima successione è convergente e di conseguenza limitata. Ora per il corollario [Corollario 2](#box-corolCONFRONTO_B-8) e dato che

    $$
    \frac{1}{\sqrt{n}} \rr 0 {\rm~~abbiamo~~} \frac{n^{{5}/{2}} - 3 \: n + 7}{n^3 + \sqrt{n} - 3 \: n^2} \rr 0
    $$

<a id="box-texexpbox1-10"></a>

!!! esempio "Esempio 3: Applicazione del corollario"

    La successione

    $$
    n \mapsto \frac{\sin n}{n}
    $$

    è il prodotto di due successioni

    $$
    n \mapsto \frac{1}{n} {\rm ~~(convergente,~infinitesima)} {\rm ~~e~~} n \mapsto \sin n {\rm ~~(irregolare)},
    $$

    quindi il teorema [Teorema 1](#box-theoALGEBRA_LIMITI_FINITI-1) sull'algebra dei limiti non è applicabile (il secondo limite non esiste).

    - Tuttavia è applicabile il corollario [Corollario 2](#box-corolCONFRONTO_B-8). La successione $\left\{\frac{1}{n}\right\}$ è infinitesima e, dato che $|\sin n| \le 1$, la successione $\{\sin n\}$ è limitata, perciò abbiamo

        $$
        \lim_{n \rr \ip} \frac{\sin n}{n} = 0
        $$

- Fin qui abbiamo visto teoremi che operano su coppie di successioni entrambe convergenti o comunque limitate.

<strong>Successioni con limiti $\ip$ e $\im$</strong>

- Supponiamo  per esempio, che

    $$
    a_n \rr \ell_a {\rm~~e~~} b_n \rr \ip
    $$

    allora è facile (e intuitivo) vedere che

    $$
    a_n + b_n \rr \ip
    $$

    Abbrevieremo questa scrittura così:

    $$
    \ell_a \ip = \ip
    $$

- Ragionando in maniera analoga possiamo compendiare le regole per il limite della somma (o differenza) di due successioni delle quali una o entrambe sono divergenti.

<strong>Regole di aritmetizzazione parziale del simbolo di infinito</strong>

<a id="box-theoARIT_INF1-11"></a>

!!! teorema "Teorema 6: di aritmetizzazione parziale del simbolo di infinito (addizione)"

    Ipotesi:

    $$
    \textbf{1.}~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~b_n \rr \ip \qquad \textbf{3.}~~ c_n \rr \ip.
    $$

    Tesi:

    $$
    \textbf{1.}~~ a_n + b_n  \rr \ell_a  \ip = \ip \qquad \textbf{2.}~~a_n - b_n  \rr \ell_a  \im = \im
    $$

    $$
    \textbf{3.}~~ b_n + c_n \rr \ip \ip = \ip \qquad \textbf{4.}~~- b_n - c_n \rr \im \im = \im.
    $$

<a id="box-theoARIT_INF2-12"></a>

!!! teorema "Teorema 7: di aritmetizzazione parziale del simbolo di infinito (prodotto)"

    Ipotesi:

    $$
    \textbf{1.}~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~b_n \rr 0 \qquad \textbf{3.}~~ c_n \rr \infty.
    $$

    Tesi:

    $$
    \textbf{1.}~~ a_n \:\: c_n  \rr \ell_a \:\: \infty = \infty \quad (\ell_a \neq 0) \qquad \textbf{2.}~~\frac{a_n}{b_n}  \rr \frac{\ell_a}{0} = \infty \quad (\ell_a \neq 0) \qquad \textbf{3.}~~ \frac{a_n}{c_n}  \rr \frac{\ell_a}{\infty} = 0.
    $$

- il <strong>segno</strong> di $\infty$ va determinato con la <strong>usuale regola dei segni</strong>.

<a id="box-texexpbox1-13"></a>

!!! esempio "Esempio 4: Regola dei segni"

    Abbiamo:

    - ${\rm se~~} a_n \rr \ell_a \in \R, \ell_a > 0 {\rm ~~e~~} b_n \rr 0^+ {\rm ~~allora~~} \frac{a_n}{ b_n} \rr \ip$

    - ${\rm se~~} a_n \rr \ell_a \in \R, \ell_a < 0 {\rm ~~e~~} b_n \rr 0^- {\rm ~~allora~~} \frac{a_n}{ b_n} \rr \ip$

    - ${\rm se~~} a_n \rr \ell_a \in \R, \ell_a > 0 {\rm ~~e~~} b_n \rr 0^- {\rm ~~allora~~} \frac{a_n}{ b_n} \rr \im$

    - ${\rm se~~} a_n \rr \ell_a \in \R, \ell_a < 0 {\rm ~~e~~} b_n \rr 0^+ {\rm ~~allora~~} \frac{a_n}{ b_n} \rr \im$

    È quindi necessario, per applicare le regole di aritmetizzazione parziale del simbolo di infinito, determinare se $b_n$ tenda a zero per eccesso o per difetto.

??? dimostrazione "Dimostrazione"

    Dimostriamo che:

    $$
    a_n \rr \ell_a \in \R,~~c_n \rr \ip  ~~\Rightarrow~~ \frac{a_n}{c_n} \rr 0.
    $$

    Per ogni $\varepsilon >0$,  poiché $a_n \rr \ell_a$, definitivamente, si ha

    $$
    \underbrace{|a_n - \ell_a|}_{\ge |a_n| - |\ell_a|} <   \varepsilon {\rm ~~~~quindi~~~~}|a_n| < |\ell_a| + \varepsilon.
    $$

    Inoltre, poiché $c_n \rr \ip$, definitivamente, si ha

    $$
    c_n > \frac{1}{\varepsilon}
    $$

    Ne segue che, definitivamente, si ha

    $$
    \frac{|a_n|}{|c_n|} < \frac{|\ell_a|+\varepsilon}{\frac{1}{\varepsilon}} 
    {\rm ~~~~e~quindi~~~~}
     \left| \frac{a_n}{c_n}\right| < \varepsilon \: (|\ell_a| + \varepsilon) = \underbrace{|\ell_a| \: \varepsilon + \varepsilon^2}_{=\tilde{\varepsilon} {\rm ~e~}> 0}
    $$

    Per l'arbitrarietà di $\tilde{\varepsilon}$, abbiamo la tesi. <span class="qed">□</span>

!!! chiave ""

    Le quattro operazioni mancanti:

    $$
    \ip \im, \quad 0 \cdot \infty, \quad \frac{0}{0}  {\rm ~~~~e~~~~} \frac{\infty}{\infty}
    $$

    si chiamano <strong>forme di indecisione</strong>, poiché nessuna regola può essere stabilita a priori per determinarne il risultato.

<a id="box-texexpbox1-14"></a>

!!! esempio "Esempio 5: Risoluzione di forme di indecisione $\ip\im$"

    Consideriamo la successione

    $$
    n \mapsto \sqrt{n+1} - \sqrt{n-1}
    $$

    Abbiamo la differenza di due successioni:

    $$
    n \mapsto \sqrt{n+1} {\rm ~~con~~} \lim_{n \rr \ip} \sqrt{n+1} = +\infty
    $$

    $$
    n \mapsto \sqrt{n-1} {\rm ~~con~~} \lim_{n \rr \ip} \sqrt{n-1} = +\infty
    $$

    Quindi ricadiamo nella forma di indecisione $\ip \im$.

    Moltiplicando e dividendo per $\sqrt{n+1} + \sqrt{n-1}$ otteniamo

    $$
    \frac{(\sqrt{n+1} - \sqrt{n-1})(\sqrt{n+1} + \sqrt{n-1})}{\sqrt{n+1} + \sqrt{n-1}}=\frac{\left(\sqrt{n+1}\right)^2 - \left(\sqrt{n-1}\right)^2}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{\sqrt{n+1} + \sqrt{n-1}}
    $$

    Ricordando che $a^2-b^2=(a-b)(a+b)$. Ora considerando la successione al denominatore abbiamo

    $$
    \lim_{n \rr \ip} \sqrt{n+1} + \sqrt{n-1}= +\infty+\infty= +\infty
    $$

    Usando la regola

    $$
    a_n \rr \ell_a \in \R,~~c_n \rr \infty  ~~\Rightarrow~~ \frac{a_n}{c_n} \rr 0
    $$

    del teorema di aritmetizzazione parziale del simbolo di infinito (prodotto), abbiamo:

    $$
    \lim_{n \rr \ip} \sqrt{n+1} - \sqrt{n-1}= \lim_{n \rr \ip} \frac{2}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{+\infty}= 0
    $$

- Limiti di successioni che si presentano nella forma:

    $$
    \left\{a_n^{b_n}\right\}
    $$

    si possono trattare considerando la successione dei loro logaritmi, prendendo per semplicità la base $e$.

!!! chiave ""

    Data una successione  $\left\{a_n^{b_n}\right\}$, abbiamo che:

    \begin{align}
    {\rm se~~~} b_n \: \log a_n \rr \ell &{\rm ~~allora~~}  a_n^{b_n} \rr e^\ell\\[2ex] 
    {\rm se~~~} b_n \: \log a_n \rr \ip &{\rm ~~allora~~}  a_n^{b_n} \rr \ip\\[2ex] 
    {\rm se~~~} b_n \: \log a_n \rr 0 &{\rm ~~allora~~}  a_n^{b_n} \rr 1\\[2ex] 
    {\rm se~~~} b_n \: \log a_n \rr \im &{\rm ~~allora~~}  a_n^{b_n} \rr 0
    \end{align}

    Se la successione $\left\{b_n \log a_n\right\}$ è indeterminata allora anche $\left\{a_n^{b_n}\right\}$ è indeterminata.

<a id="box-texexpbox1-15"></a>

!!! esempio "Esempio 6: Calcolo dei limiti col passaggio al logaritmo"

    $$
    \lim_{n \rr \ip} (3 \: n )^{\left(-3 \: n^2 +7\right)}
    $$

    passando ai logaritmi abbiamo

    $$
    \underbrace{\left(-3 \: n^2 +7\right)}_{b_n} \:\: \log \overbrace{3\:n}^{a_n}
    $$

    dato che

    $$
    \lim_{n \rr \ip} \left(-3 \: n^2 +7\right) \: \log (3\:n) = \im \cdot \ip = \im
    $$

    allora

    $$
    \lim_{n \rr \ip} (3 \: n)^{\left(-3 \: n^2 +7\right)} = 0
    $$

<a id="box-texexpbox1-16"></a>

!!! esempio "Esempio 7: Calcolo dei limiti col passaggio al logaritmo (metodo alternativo)"

    $$
    \lim_{n \rr \ip} (3 \: n )^{\left(-3 \: n^2 +7\right)} = \lim_{n \rr \ip} e^{	\log \left( (3 \: n )^{\left(-3 \: n^2 +7\right)}\right)} = \lim_{n \rr \ip} e^{	(-3 \: n^2 +7) \; \log (3 \: n) }
    $$

    dato che

    $$
    \lim_{n \rr \ip} \left(-3 \: n^2 +7\right) \: \log (3\:n) = \im \cdot \ip = \im
    $$

    allora

    $$
    \lim_{n \rr \ip} (3 \: n)^{\left(-3 \: n^2 +7\right)} = e^{\im}=0
    $$

!!! chiave ""

    Abbiamo anche le seguenti <strong>forme di indecisione</strong>:

    $$
    1^{\infty}, \quad 0^0, \quad \infty^0
    $$

    Passando al logaritmo corrispondono alla forma di indecisione

    $$
    0 \cdot \infty
    $$

    dato che:

    $$
    \log \left( 1^{\infty} \right)= \infty \: \log 1 = \infty  \cdot 0
    $$

    $$
    \log \left( 0^{0} \right) = 0 \: \log 0 = 0  \cdot -\infty
    $$

    $$
    \log \left(+\infty^0\right)= 0 \: \log \left(+\infty\right) = 0  \cdot +\infty
    $$

    Infine dato che $-\infty^0= -1 \cdot (+\infty^0)$, abbiamo

    $$
    -1 \cdot \left(\log \left(+\infty^0\right) \right) = -1 \cdot \left( 0 \: \log +\infty\right) = -1 \cdot \left( 0  \cdot +\infty \right)
    $$

!!! chiave ""

    I limiti nella forma

    $$
    0^{\ip} {\rm ~~e~~} 0^{\im}
    $$

    <strong>non sono forme di indecisione</strong>. Abbiamo:

    $$
    0^{\ip} = 0 {\rm ~~e~~} 0^{\im}= \ip.
    $$

    dato che passando al logaritmo abbiamo

    $$
    \log \left( 0^{+\infty} \right)= +\infty \cdot \log 0 =  +\infty \cdot -\infty = -\infty  {\rm ~~~~e~~~~} e^{-\infty}=0
    $$

    $$
    \log \left( 0^{-\infty} \right)= -\infty \cdot \log 0 =  -\infty \cdot -\infty = +\infty  {\rm ~~~~e~~~~} e^{+\infty}=+\infty
    $$

<a id="box-texexpbox1-17"></a>

!!! esempio "Esempio 8: Limiti nelle forme $0^{\ip}$ e $0^{\im}$"

    - Esempio del caso $0^{\ip}= 0$:

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{\log n} = 0^{\ip}= 0.
        $$

        Infatti abbiamo

        $$
        \left( \frac{1}{n}\right)^{\log n} = e^{\log \left( \frac{1}{n}\right)^{\log n}} = e^{\log n \: \log \frac{1}{n} }
        $$

        quindi

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{\log n} = \lim_{n \rr \ip } e^{ \overbrace{\log n}^{\rr \ip} \: \overbrace{\log \frac{1}{n}}^{\rr \im} } = e^{\im} = 0.
        $$

    - Esempio del caso  $0^{\im}= \ip$:

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{-\log n} = 0^{\im}= \ip.
        $$

        Infatti abbiamo

        $$
        \left( \frac{1}{n}\right)^{-\log n} = e^{\log \left( \frac{1}{n}\right)^{-\log n}} = e^{-\log n \: \log \frac{1}{n} }
        $$

        quindi

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{-\log n} = \lim_{n \rr \ip } e^{ \overbrace{-\log n}^{\rr \im} \: \overbrace{\log \frac{1}{n}}^{\rr \im} } = e^{\ip} = \ip.
        $$

[^1]: Un insieme su cui è definita un'operazione è detto struttura algebrica
[^2]: Un  insieme è dotato di una struttura d'ordine se su di esso è definita una relazione d'ordine
