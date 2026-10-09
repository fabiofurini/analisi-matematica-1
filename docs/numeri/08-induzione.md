---
title: "Principio di induzione"
---

# Principio di induzione

<div class="info-capitolo" markdown>

**Parte 1 · Numeri e logica · Capitolo 8** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-numeri-08-induzione.pdf)

</div>

## 1. Il principio di induzione

- Presentiamo ora un metodo dimostrativo, detto dimostrazione per induzione. Questo procedimento si può applicare a teoremi con la struttura seguente:

    “ per ogni $n \in \N$, $n \ge n_0$, vale la proprietà $p (n)$ ”

- Il numero $n_0$ è il più piccolo intero per cui si vuole che la proprietà sia vera; se $n_0 = 0$ il teorema afferma semplicemente che la proprietà è vera per ogni $n \in \N$.

    !!! chiave ""

        La dimostrazione per induzione consiste nei due passi seguenti:

        1. Si dimostra che $p (n)$ sia vero per $n = n_0$ (<strong>primo passo dell'induzione</strong>).

        2. Si dimostra che, se n è un generico numero naturale $\ge n_0$, dal fatto che $p(n)$ sia vero segue che $p( n + 1)$ sia vero (<strong>passo induttivo</strong>).

        Si può allora concludere che per ogni $n \ge n_0$, $p (n)$ è vero.

- La validità di questo metodo dimostrativo, <em>intuitivamente</em>, si basa su questo fatto:

    1. Per il punto 1, sappiamo che $p (n_0)$ è vera. Supponiamo ad esempio $n_0 = 1$: sappiamo quindi che $p(1)$ è vera (questo va dimostrato esplicitamente).

    2. Per il punto $2$, poiché è vera $p(1)$, sarà vera $p (2)$: infatti abbiamo dimostrato che qualunque sia $n$, se è vera $p ( n)$ è vera anche $p ( n + 1)$. Ma allora, poiché è vera $p (2)$, sarà vera $p (3)$; ma allora è vera $p (4)$, … e così via, dunque è vera $p (n)$ per ogni $n \ge 1$.

- Concretamente, la dimostrazione si articola in due fasi.

    1. Dimostrare direttamente $p (n_0)$;

    2. Assumere come ipotesi $p (n)$ (<strong>ipotesi induttiva</strong>) e provare $p (n + 1)$.

- È questo il punto delicato, spesso soggetto a equivoci. “Assumere per ipotesi” $p (n)$ non significa assumere come ipotesi la tesi. Quello che si deve provare è che:

    “ per ogni $n \ge n_0$, se è vera $p( n)$ allora è vera anche $p (n + 1)$ ”

    e non

    “ se per ogni $n$ è vera $p (n)$, allora è vera anche $p (n + 1)$”

## 2. Dimostrazioni basate sul principio di induzione

### 2.1 Disuguaglianza di Bernoulli

<a id="box-notationA-1"></a>

!!! osservazione "Osservazione 1: disuguaglianza di Bernoulli"

    Per ogni intero $n \ge 0$, $x \in \R$, $x \ge -1$, vale:

    \begin{equation}
    \label{BERNOULLI}
    (1+x)^n \ge 1 + n\: x
    \end{equation}

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 0$. Allora l'asserto diventa:

        $$
        (1+x)^0 \ge 1 + 0\: x \text{ cioè } 1 \ge 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        (1+x)^n \ge 1 + n\: x
        $$

        e inoltre abbiamo

        $$
        (1+x) \ge 0 {\rm~~~dato~che~~~} x \ge -1.
        $$

        Allora possiamo scrivere:

        \begin{align*}
        (1+x)^{n+1} &= (1+x) \cdot (1+x)^{n} \\[2ex] 
         &\ge (1+x) \cdot  (1 + n\: x)  \\[2ex]
         &= 1 + (n+1)\: x + n\: x^2 \\[2ex] 
         &\ge 1 + (n+1) \: x
        \end{align*}

        dove nell'ultima disuguaglianza si è sfruttato il fatto che $n\:x^2 \ge 0$.

        La catena di disuguaglianze mostra che, per $n + 1$, abbiamo

        $$
        (1 + x)^{n+1} \ge 1 + (n + 1) \: x
        $$

        che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 1: Disuguaglianza di Bernoulli"

    <div class="figure-affiancate" markdown>

    ![Figura 1](../img/numeri-08-induzione/fig01.svg){ .fig .ovale loading=lazy style="width:91%" }

    ![Figura 2](../img/numeri-08-induzione/fig02.svg){ .fig .ovale loading=lazy style="width:91%" }

    </div>

    <div class="figure-affiancate" markdown>

    ![Figura 3](../img/numeri-08-induzione/fig03.svg){ .fig .ovale loading=lazy style="width:91%" }

    ![Figura 4](../img/numeri-08-induzione/fig04.svg){ .fig .ovale loading=lazy style="width:91%" }

    </div>

### 2.2 Alcune sommatorie importanti

<a id="box-propSUM-3"></a>

!!! osservazione "Osservazione 2: somma dei primi $n$ numeri naturali"

    Per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^{n} k = \frac{n \: (n+1)}{2}
    $$

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 k = \frac{1\:(1+1)}{2} \text{ cioè } 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n k = \frac{n\:(n+1)}{2}.
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} k &= \sum_{k=1}^{n} k + (n+1) \\[2ex]
        &=  \frac{n\:(n+1)}{2} + (n+1) \\[2ex]
        &=  \frac{n\:(n+1) + 2\:(n+1)}{2} \\[2ex]
        & =  \frac{(n+1)\:( n  + 2 )}{2}  =  \frac{(n+1)\:\big(( n+1) +1\big)}{2}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-propODD-4"></a>

!!! osservazione "Osservazione 3: somma dei primi $n$ numeri dispari"

    Per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=0}^{n-1} (2\:k+1) = n^2 {\rm ~~~~~o~equivalentemente~~~~} \sum_{k=1}^{n} (2\:k-1) = n^2
    $$

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=0}^0 (2\:k+1) = 1^2 \text{ cioè } 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=0}^{n-1} (2\:k+1) = n^2
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=0}^{(n+1)-1} (2\:k+1)&= \sum_{k=0}^{n-1} (2\:k+1) + 2\:n +1
         =  n^2 + 2\:n +1
         =  (n+1)^2
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    La seconda sommatoria coincide con la prima, con una traslazione dell'indice ($k \to k+1$):

    $$
    \sum_{k=1}^{n} (2\:k-1) = \sum_{k=0}^{n-1} \big(2\:(k+1)-1\big) = \sum_{k=0}^{n-1} (2\:k+1)
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-propEVEN-5"></a>

!!! osservazione "Osservazione 4: somma dei primi $n$ numeri pari"

    Per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^{n} 2\:k = n \:(n+1)
    $$

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 2\:k = 1 \cdot 2 \text{ cioè } 2 = 2
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^{n} 2\:k = n\: (n+1)
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} 2\:k&= \sum_{k=1}^{n} 2\:k  + 2\: (n+1) 
        = n^2 + n + 2\: (n+1) \\[2ex]
        & = n^2+2\:n+1+n+1
         = (n+1)^2 + (n+1) =   (n+1) \:\big((n+1) +1 \big)
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.3 Somma dei termini della progressione geometrica

<a id="box-propXX-6"></a>

!!! osservazione "Osservazione 5: somma dei primi $n$ termini della progressione geometrica ($a=1$)"

    Dato $q \in \R$, per ogni intero $n \ge 1$ vale (con la convenzione $0^0=1$ per il caso $q=0$):

    \begin{equation}
    \label{GEOM}
    \sum_{k=1}^{n} q^{k-1} = 
    \begin{cases}
    \frac{q^{n}-1}{q-1} & {\rm ~~~se~~~~}  q \neq 1\\[2ex]
    n & {\rm ~~~altrimenti} 
    \end{cases}
    \end{equation}

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^{1} q^{k-1}  = \frac{q^1-1}{q-1} \text{ cioè } 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^{n} q^{k-1} = \frac{q^n-1}{q-1}
        $$

        Quindi possiamo scrivere

        \begin{align*}
        \sum_{k=1}^{n+1} q^{k-1}&= \sum_{k=1}^{n} q^{k-1} + q^n =  \frac{q^n-1}{q-1} + q^n\\[2ex]
        & =  \frac{q^n-1+q^{n+1}-q^n}{q-1} =  \frac{q^{n+1}-1}{q-1}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.4 Disuguaglianza tra media aritmetica e media geometrica

<a id="box-propAMGM-7"></a>

!!! osservazione "Osservazione 6: disuguaglianza tra media aritmetica e media geometrica"

    Per ogni intero $n \ge 2$ e per ogni vettore \(\boldsymbol{a}=\begin{pmatrix} a_1, a_2, \dots, a_n \end{pmatrix} \in \R_{\ge 0}^n\), vale:

    \begin{equation}
    \label{AMGM}
    \frac{\sum_{i=1}^n a_i}{n} ~~\geq~~ \sqrt[n]{\prod_{i=1}^n a_i}
    \end{equation}

- La disuguaglianza \(\eqref{AMGM}\) afferma che la <em>media aritmetica</em> è maggiore o uguale alla <em>media geometrica</em>.

- Se $a_i=a$ per ogni $i \in \{1,2,\dots,n\}$, abbiamo:

    $$
    \frac{\sum_{i=1}^n a_i}{n} ~~=~~ \frac{n\;a}{n} ~~=~~ a \qquad \text{e} \qquad \sqrt[n]{\prod_{i=1}^n a_i} ~~=~~ \sqrt[n]{ a^n}  ~~=~~ a
    $$

    e la media aritmetica e la media geometrica sono uguali (è l'unico caso in cui vale l'uguaglianza).

??? dimostrazione "Dimostrazione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 2$. Poiché entrambi i membri sono non negativi, possiamo elevarli al quadrato:

        \begin{align*}
        \frac{a_1 + a_2}{2} ~\geq~ \sqrt{a_1 \: a_2}
        &~~~~\Longleftrightarrow~~~~
        \left(\frac{a_1 + a_2}{2}\right)^2 ~\geq~ a_1 \: a_2
        ~~~~\Longleftrightarrow~~~~
        \frac{a_1^2 + 2\:a_1 \: a_2 + a_2^2}{4} ~\geq~ a_1 \: a_2\\[2ex]
        &~~~~\Longleftrightarrow~~~~
        a_1^2 - 2\:a_1 \: a_2 + a_2^2 ~\geq~ 0 ~~~~\Longleftrightarrow~~~~
        (a_1 - a_2)^2 ~\geq~ 0
        \end{align*}

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, la media aritmetica di $n$ numeri reali non negativi è maggiore o uguale alla loro media geometrica. Dobbiamo dimostrare che:

        \begin{equation}
        \label{AMGM_A}
        \tag{A}
        \frac{\sum_{i=1}^{n+1} a_i}{n+1} ~~\geq~~ \sqrt[n+1]{\prod_{i=1}^{n+1} a_i}
        \end{equation}

        Sia $\alpha$ la media aritmetica degli $n+1$ numeri reali non negativi:

        \begin{equation}
        \label{AMGM_B} \tag{B}
        \alpha = \frac{\sum_{i=1}^{n+1} a_i}{n+1}
        \end{equation}

        Se \( a_i = \alpha \) per ogni $i \in \{1,2,\dots,n+1\}$, allora \(\eqref{AMGM_A}\) vale con il segno di uguaglianza. Altrimenti esiste almeno un valore maggiore di $\alpha$ e almeno un valore minore di $\alpha$. Senza perdita di generalità, riordiniamo i valori in modo da avere:

        $$
        a_n > \alpha \quad \text{ e } \quad a_{n+1} < \alpha
        $$

        Allora abbiamo:

        \begin{equation}
        \label{AMGM_C} \tag{C}
        a_n - \alpha > 0  \quad \text{ e } \quad \alpha - a_{n+1} > 0 ~~~\Longrightarrow~~~  (a_n - \alpha) \; (\alpha - a_{n+1}) > 0
        \end{equation}

        Da \(\eqref{AMGM_B}\) abbiamo:

        $$
        (n+1) \; \alpha = \sum_{i=1}^{n+1} a_i ~~~~\Longleftrightarrow~~~~ n\; \alpha = \sum_{i=1}^{n-1} a_i + 
        \underbrace{ a_n + a_{n+1} -\alpha}_{=\,y }
        ~~~~\Longleftrightarrow~~~~  \alpha = \frac{\sum_{i=1}^{n-1} a_i + y}{n}
        $$

        dove $y = a_n + a_{n+1} - \alpha \ge a_n - \alpha > 0$, dato che $a_{n+1} \ge 0$. Quindi $\alpha$ è anche la media aritmetica degli $n$ numeri non negativi $a_1,a_2,\dots,a_{n-1}$ e $y$. Per ipotesi induttiva, $\alpha^n \ge \left(\prod_{i=1}^{n-1} a_i \right) y$, e quindi:

        \begin{equation}
        \label{AMGM_D} \tag{D}
        \alpha^{n+1} = \alpha^{n} \; \alpha \ge \left(\prod_{i=1}^{n-1} a_i \right) y \; \alpha
        \end{equation}

        Da \(\eqref{AMGM_C}\) segue che:

        $$
        (a_n - \alpha) \; (\alpha - a_{n+1}) = (\underbrace{ a_n + a_{n+1} -\alpha}_{=\,y}) \; \alpha - a_{n} \; a_{n+1} > 0
        $$

        e quindi:

        \begin{equation}
        \label{AMGM_E} \tag{E}
        y \; \alpha > a_{n} \; a_{n+1}
        \end{equation}

        Sostituendo \(\eqref{AMGM_E}\) in \(\eqref{AMGM_D}\) (il prodotto $\prod_{i=1}^{n-1} a_i$ è non negativo), otteniamo:

        $$
        \alpha^{n+1} \ge \prod_{i=1}^{n+1} a_i ~~~~\Longleftrightarrow~~~~ \frac{\sum_{i=1}^{n+1} a_i}{n+1} ~~\ge~~ \sqrt[n+1]{\prod_{i=1}^{n+1} a_i}
        $$

        cioè \(\eqref{AMGM_A}\), che è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.5 Successione di Fibonacci

- La <strong>successione di Fibonacci</strong> è definita dai due valori iniziali e dalla relazione di ricorrenza seguenti:

    \begin{equation}
    \label{FIBONACCI}
    F_0 = 0, \qquad F_1 = 1, \qquad F_n = F_{n-1} + F_{n-2} \quad \text{per ogni intero } n \ge 2.
    \end{equation}

- I primi termini sono $0,~ 1,~ 1,~ 2,~ 3,~ 5,~ 8,~ 13,~ 21,~ 34, \dots$: ogni termine è la somma dei due che lo precedono.

- Le due soluzioni dell'equazione $x^2 - x - 1 = 0$ si chiamano <strong>sezione aurea</strong> $\phi$ e <strong>coniugato della sezione aurea</strong> $\hat{\phi}$:

    $$
    \phi = \frac{1 + \sqrt{5}}{2} \qquad {\rm ~~e~~} \qquad \hat{\phi} = \frac{1 - \sqrt{5}}{2}
    $$

    Essendo soluzioni di $x^2 = x+1$, valgono le due uguaglianze:

    \begin{equation}
    \label{FIBONACCI_PHI}
    \phi^2 = \phi + 1 \qquad {\rm ~~e~~} \qquad \hat{\phi}^2 = \hat{\phi} + 1
    \end{equation}

- La proposizione seguente dà una formula chiusa per $F_n$: il termine $n$-esimo si calcola direttamente, senza passare per tutti i termini precedenti.

<a id="box-propFIB-8"></a>

!!! osservazione "Osservazione 7: formula chiusa della successione di Fibonacci"

    Per ogni intero $n \ge 0$, vale:

    \begin{equation}
    \label{BINET}
    F_n = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}}
    \end{equation}

??? dimostrazione "Dimostrazione"

    Per induzione su $n$. Poiché la relazione di ricorrenza lega $F_{n+1}$ ai <strong>due</strong> termini precedenti, il primo passo dell'induzione verifica l'asserto per $n=0$ e per $n=1$, e il passo induttivo lo suppone vero per $n$ e per $n-1$.

    - <strong>Primo passo dell'induzione</strong>

        Siano $n = 0$ e $n = 1$. Allora l'asserto diventa:

        $$
        F_0  = \frac{\phi^0 - \hat{\phi}^0 }{\sqrt{5}} = \frac{1 - 1 }{\sqrt{5}} = 0
        \qquad {\rm ~~e~~} \qquad
        F_1  = \frac{\phi^1 - \hat{\phi}^1 }{\sqrt{5}} = \frac{\frac{1 + \sqrt{5}}{2} - \frac{1 - \sqrt{5}}{2}}{\sqrt{5}} = \frac{\sqrt{5}}{\sqrt{5}} = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$ e per $n-1$, con $n \ge 1$, e proviamolo per $(n + 1)$. Per definizione della successione di Fibonacci abbiamo $F_{n+1} = F_{n} + F_{n-1}$, mentre per ipotesi induttiva abbiamo:

        $$
        F_{n}  = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}} {\rm ~~~~~e~~~~~} F_{n-1}  = \frac{\phi^{n-1} - \hat{\phi}^{n-1} }{\sqrt{5}}
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        F_{n+1} & = F_{n} + F_{n-1}
         = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}} + \frac{\phi^{n-1} - \hat{\phi}^{n-1} }{\sqrt{5}}\\[2ex]
        & = \frac{\big(\phi^n + \phi^{n-1}\big) - \big(\hat{\phi}^n  + \hat{\phi}^{n-1}\big)}{\sqrt{5}}
         = \frac{\phi^{n-1} \big(\phi + 1\big) - \hat{\phi}^{n-1} \big(\hat{\phi}  + 1\big)}{\sqrt{5}}\\[2ex]
        & = \frac{\phi^{n-1} \; \phi^2 - \hat{\phi}^{n-1} \; \hat{\phi}^2}{\sqrt{5}}
         = \frac{\phi^{n+1} - \hat{\phi}^{n+1}}{\sqrt{5}}
        \end{align*}

        dove nella penultima uguaglianza si sono usate le relazioni \(\eqref{FIBONACCI_PHI}\). Questo è esattamente l'asserto voluto, per $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

- La successione di Fibonacci è studiata più in dettaglio nel capitolo «Successione di Fibonacci».
