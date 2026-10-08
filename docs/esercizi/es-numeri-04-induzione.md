---
title: "Principio di induzione"
---

# Principio di induzione

<div class="info-capitolo" markdown>

**Esercizi · Numeri e logica** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-1-numeri.pdf)

</div>

!!! esercizio "Esercizio 1"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    \begin{align*}
    \sum_{k=1}^{n} k^2 &= \frac{n\:(n+1)\:(2\:n+1)}{6}
    \end{align*}

    (somma dei quadrati dei primi $n$ numeri naturali)

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 k^2 = \frac{1\:(1+1)\:(2\cdot1+1)}{6} \text{ ~~ cioè  ~~} 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n k^2 = \frac{n\:(n+1)\:(2\:n+1)}{6}.
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} k^2 &= \sum_{k=1}^{n} k^2 + (n+1)^2\\[2ex]
        &=  \frac{n\:(n+1)\:(2\:n+1)}{6} + (n+1)^2
         =  \frac{n\:(n+1) (2\:n+1) + 6\: (n+1)^2}{6} \\[2ex]
        & =  \frac{(n+1) \big( n\:(2\:n+1) + 6\: (n+1) \big) }{6} 
        =  \frac{(n+1) \big( 2\:n^2 + n + 6\:n +6 \big) }{6} \\[2ex]
        & =  \frac{(n+1) \big( 2\:n^2 + 4\:n + 3\:n +6 \big) }{6} 
         =  \frac{(n+1) \big( (2\:n) (n + 2) + 3 (n + 2) \big) }{6} \\[2ex]
        & =  \frac{(n+1)\:(n+2)\:\big(2\:n+3 \big)}{6}
         =  \frac{(n+1)\:(n+1+1)\:\big(2\:(n+1)+1\big)}{6}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 2"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale

    $$
    \sum_{k=0}^{n-1} (2\:k+1) = n^2 {\rm ~~~~~oppure~~~~~} \sum_{k=1}^{n} (2\:k-1) = n^2
    $$

    (somma dei primi $n$ numeri dispari)

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=0}^0 (2\:k+1) = 1^2 \text{ ~~ cioè  ~~} 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=0}^{n-1} (2\:k+1) = n^2
        $$

        Quindi possiamo scrivere

        \begin{align*}
        \sum_{k=0}^{n-1+1} (2\:k+1)&= \sum_{k=0}^{n-1} (2\:k+1) + 2\:n +1\\[2ex]
        & =  n^2 + 2\:n +1\\[2ex]
        & =  (n+1)^2
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 3"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^{n} 2\:k = n \:(n+1)
    $$

    (somma dei primi $n$ numeri pari)

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 2\:k = 1 \cdot 2 \text{ ~~ cioè  ~~} 2 = 2
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^{n} 2\:k = n\: (n+1)
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} 2\:k&= \sum_{k=1}^{n} 2\:k  + 2\: (n+1) \\[2ex]
        &= 2\: \left(\sum_{k=1}^{n} k  + (n+1)\right) \\[2ex]
        & = 2\: \left( \frac{n \: (n+1)}{2} + (n+1)\right)\\[2ex]
        & = 2\: \left( \frac{n \: (n+1) + 2\: (n+1)}{2} \right)\\[2ex]
        & =   (n+1) \:(n+2)  =   (n+1) \:(n+1 +1 )
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 4"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^n \frac{k}{2^k}=2-\frac{n+2}{2^n}
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 \frac{k}{2^k} = 2 - \frac{1+2}{2^1} \text{ ~~ cioè  ~~} \frac{1}{2} = \frac{1}{2}
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n \frac{k}{2^k}=2-\frac{n+2}{2^n}
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} \frac{k}{2^k}&= \sum_{k=1}^{n} \frac{k}{2^k}  + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2-\frac{n+2}{2^n}   + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2-\frac{2\;(n+2)}{2^{n+1}}   + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2- \left( \frac{2\;(n+2) - n-1}{2^{n+1}} \right) \\[2ex]
        &= 2- \left( \frac{n+3}{2^{n+1}} \right) \\[2ex]
        & =   2-\frac{(n+1)+2}{2^{n+1}}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 5"

    Dato un insieme $X$ con $n$ elementi,  dimostrare per induzione che l'insieme delle parti $\mathscr{P}(X)$ ha $2^n$ elementi, ovvero che

    $$
    |\mathscr{P}(X)|=2^n {\rm ~~~per~~~} n \ge 0
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 0$.  Un insieme con 0 elementi è un insieme vuoto ($\emptyset$).  L'insieme delle parti di un insieme vuoto contiene solo l'insieme vuoto come elemento.  Allora l'asserto diventa:

        $$
        |\mathscr{P}(\emptyset)| = 2^0  \text{ ~~ cioè  ~~} 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo l'asserto vero per un  insieme di $n$ elementi, e proviamolo per un insieme di $(n + 1)$ elementi. Per ipotesi induttiva,  l'insieme delle parti di un insieme di $n$ elementi ha $2^n$ elementi.

        Un insieme $Y$ di $(n + 1)$ elementi si può scrivere come:

        $$
        Y = \{a_1,a_2,\dots,  a_{n},a_{n+1} \}
        $$

        quindi:

        $$
        \mathscr{P}(Y)=  \big\{S: S \subseteq Y \big\} = \big\{S: S \subseteq   \{a_1,a_2,\dots,  a_{n},a_{n+1} \} \big\}
        $$

        I sottoinsiemi di  $Y$ o contengono l'elemento $a_{n+1}$ o non lo contengono.  Definiamo quindi l'insieme $Z_a$ formato dai primi $n$ elementi di $Y$:

        $$
        Z_a = \{a_1,a_2,\dots,  a_{n} \} {\rm ~~~~quindi~~~~} |\mathscr{P}(Z_a)|=2^n
        $$

        Definiamo ora il seguente insieme $Z_b$:

        $$
        Z_b ~=~ \big\{S \cup \{a_{n+1}\} : S \subseteq \underbrace{\{a_1,a_2,\dots,  a_{n} \}}_{=Z_a}  \big\} ~=~  \big\{S \cup \{a_{n+1}\} : S \subseteq Z_a \big\}{\rm ~~e~~} |Z_b|=2^n
        $$

        dato che $Z_b$ ha un elemento per ogni elemento di $\mathscr{P}(Z_a)$.

        In altre parole, $\mathscr{P}(Z_a)$ contiene tutti i sottoinsiemi di $Y$ in cui l'elemento $a_{n+1}$ non è presente e $Z_b$ contiene tutti i sottoinsiemi di $Y$ in cui l'elemento $a_{n+1}$  è invece presente.

        Notiamo anche che gli insiemi $\mathscr{P}(Z_a)$ e $Z_b$ sono disgiunti ovvero: $\mathscr{P}(Z_a) \cap Z_b = \emptyset$.  Quindi $|\mathscr{P}(Z_a) \cup Z_b|=|\mathscr{P}(Z_a)| + |Z_b|$. Abbiamo infine:

        $$
        |\mathscr{P}(Y)| = |\mathscr{P}(Z_a) \cup Z_b| = 2^n+2^n= 2^{n+1}
        $$

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 6"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^4 + 2\:n^3 + n^2}{4} = \frac{n^2\:(n+1)^2}{4}
    $$

    (somma dei cubi dei primi $n$ numeri naturali). Calcolare poi la somma dei cubi dei primi $10$, $100$ e $1000$ numeri naturali (senza lo zero) e dimostrare che la somma dei cubi dei primi $n$ numeri naturali è uguale al quadrato della somma dei primi $n$ numeri naturali:

    $$
    \sum_{k=1}^{n} k^3 = \left(\sum_{k=1}^{n} k \right)^2
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 k^3 = \frac{1+2+1}{4} \text{ ~~ cioè  ~~} 1 = 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n k^3 = \frac{n^4 + 2\:n^3 + n^2}{4}.
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} k^3 &= \sum_{k=1}^{n} k^3 + (n+1)^3
         =  \frac{n^4 + 2\:n^3 + n^2}{4} + (n+1)^3\\[2ex]
         &=  \frac{n^4 + 2\:n^3 + n^2 + 4\: (n+1)^3}{4} 
          = \frac{n^4 + 2\:n^3 + n^2 + 4\:n^3 + 12\:n^2 + 12\:n + 4}{4}\\[2ex] 
         &= \frac{ n^4 + 6\:n^3 + 13\:n^2 + 12\:n + 4}{4}\\[2ex]
         & =  \frac{(n^4+4\:n^3+6\:n^2+4\:n+1) + 2\:(n^3+3\:n^2+3\:n+1) + (n^2+2\:n+1)}{4} \\[2ex]
         & =  \frac{(n+1)^4 + 2\:(n+1)^3 + (n+1)^2}{4}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    La somma dei cubi dei primi $10$, $100$ e $1000$ numeri naturali (senza lo zero) vale:

    $$
    \sum_{k=1}^{10} k^3  =  \frac{ 10^4 + 2 \cdot 10^3 + 10^2}{4} = 3025, \qquad
    \sum_{k=1}^{100} k^3  =  \frac{ 100^4 + 2 \cdot 100^3 + 100^2}{4} = 25.502.500
    $$

    $$
    \sum_{k=1}^{1000} k^3  =  \frac{ 1000^4 + 2 \cdot 1000^3 + 1000^2}{4} = 250.500.250.000
    $$

    Infine, la somma dei cubi dei primi $n$ numeri naturali è uguale al quadrato della somma dei primi $n$ numeri naturali, dato che:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^4 + 2\:n^3 +  n^2}{4}  = \frac{n^2 \: (n^2 + 2\:n +  1)}{4}  = \frac{n^2\:(n+1)^2}{4}= \left(\frac{n\:(n+1)}{2}\right)^2= \left(\sum_{k=1}^{n} k \right)^2
    $$

!!! esercizio "Esercizio 7"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^n \frac{1}{k\:(k+1)} = \frac{n}{n+1} = 1-\frac{1}{n+1}
    $$

    Calcolare poi il valore della sommatoria per $n=10$, $n=100$ e $n=1000$.

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 \frac{1}{k\:(k+1)} = \frac{1}{1+1} \text{ ~~ cioè  ~~} \frac{1}{2} = \frac{1}{2}
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n \frac{1}{k\:(k+1)} = \frac{n}{n+1}.
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} \frac{1}{k\:(k+1)} &= \sum_{k=1}^{n} \frac{1}{k\:(k+1)}  + \frac{1}{(n+1)\:(n+2)} 
        = \frac{n}{n+1} + \frac{1}{(n+1)\:(n+2)} \\[2ex]
        &= \frac{n\:(n+2)+1}{(n+1)\:(n+2)}
         = \frac{n^2 + 2\:n + 1}{(n+1)\:(n+2)}
         = \frac{(n+1)^2}{(n+1)\:(n+2)}
         = \frac{n+1}{(n+1)+1}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    Il valore della sommatoria per $n=10$, $n=100$ e $n=1000$ è:

    $$
    \sum_{k=1}^{10} \frac{1}{k\:(k+1)}  = \frac{10}{11}, \qquad 
    \sum_{k=1}^{100} \frac{1}{k\:(k+1)}  = \frac{100}{101}, \qquad
    \sum_{k=1}^{1000} \frac{1}{k\:(k+1)}  = \frac{1000}{1001}
    $$

!!! esercizio "Esercizio 8"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    \sum_{k=1}^n k\:(k+1) = \frac{2\:n + 3\:n^2 + n^3}{3} = \frac{n\:(n+1)\:(n+2)}{3}
    $$

    Calcolare poi il valore della sommatoria per $n=10$, $n=100$ e $n=1000$.

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        \sum_{k=1}^1 k\:(k+1) = \frac{2+3+1}{3} \text{ ~~ cioè  ~~} 2 = 2
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo:

        $$
        \sum_{k=1}^n k\:(k+1) = \frac{2\:n + 3\:n^2 + n^3}{3}.
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        \sum_{k=1}^{n+1} k\:(k+1) &= \sum_{k=1}^{n} k\:(k+1) + (n+1)\:\big((n+1)+1 \big)
        = \frac{2\:n + 3\:n^2 + n^3}{3}  + (n+1)\:(n+2) \\[2ex]
        &=  \frac{2\:n + 3\:n^2 + n^3 + 3\:(n+1)\:(n+2) }{3} 
         =  \frac{n^3 + 6\:n^2 + 11\:n + 6 }{3} \\[2ex]
        & =\frac{2\:(n+1) + 3\:(n^2+2\:n+1) + (n^3 + 3\:n^2 + 3\:n+1)}{3}  \\[2ex]
        & =  \frac{2\:(n+1) + 3\:(n+1)^2 + (n+1)^3}{3}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

    Il valore della sommatoria per $n=10$, $n=100$ e $n=1000$ è:

    $$
    \sum_{k=1}^{10} k\:(k+1)  = \frac{10 \cdot 11 \cdot 12}{3} = 440, \qquad 
    \sum_{k=1}^{100} k\:(k+1)  = \frac{100 \cdot 101 \cdot 102}{3} = 343.400
    $$

    $$
    \sum_{k=1}^{1000} k\:(k+1) = \frac{1000 \cdot 1001 \cdot 1002}{3} = 334.334.000
    $$

!!! esercizio "Esercizio 9"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    n ! ~\ge~ 2^{n-1}
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        1! \ge 2^{1-1} \text{ ~~ cioè  ~~} 1 \ge 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo $n! \ge 2^{n-1}$. Inoltre, per ogni $n \ge 1$:

        $$
        (n+1)\: 2^{n-1} \ge 2^n ~~\Longleftrightarrow~~ n+1 \ge \frac{2^n}{2^{n-1}} = 2 ~~\Longleftrightarrow~~ n \ge 1
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        (n+1)! &= (n+1)\: n! ~\ge~ (n+1)\: 2^{n-1} ~\ge~ 2^n = 2^{(n+1)-1}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 10"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    n^n ~\ge~ 2^{n-1} \: n!
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        1^1 \ge 2^{1-1} \cdot 1! \text{ ~~ cioè  ~~} 1 \ge 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo $n^n \ge 2^{n-1} \: n!$. Inoltre, per ogni $n \ge 1$:

        $$
        (n+1)^n \ge 2 \: n^n 
        ~~~\Longleftrightarrow~~~ 
        \left(\frac{n+1}{n}\right)^n \ge 2 
        ~~~\Longleftrightarrow~~~
        \left(1+\frac{1}{n}\right)^n \ge 2
        $$

        e l'ultima disuguaglianza è vera per la disuguaglianza di Bernoulli, $(1+x)^m \ge 1 + m\:x$ per ogni intero $m \ge 0$ e $x \ge -1$: con $x = \frac{1}{n}$ e $m = n$ si ha

        $$
        \left(1+\frac{1}{n}\right)^n \ge 1 + n \: \frac{1}{n} = 2
        $$

        Quindi possiamo scrivere:

        \begin{align*}
        (n+1)^{n+1} &= (n+1)\: (n+1)^n 
        ~\ge~ (n+1) \: 2 \: n^n 
        ~\ge~ (n+1) \:  2 \cdot 2^{n-1} \: n! \\[2ex]
        &=  2^n \: (n+1)! 
        = 2^{(n+1)-1} \: (n+1)!
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 11"

    Dimostrare per induzione che per ogni intero $n \ge 1$, vale:

    $$
    n! ~\le~ n^{n}
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora l'asserto diventa:

        $$
        1! \le 1^1 \text{ ~~ cioè  ~~} 1 \le 1
        $$

        che è evidentemente vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo $n! \le n^n$. Inoltre, per ogni $n \ge 1$:

        $$
        (n+1)^n \ge n^n 
        ~~~\Longleftrightarrow~~~ 
        \left(\frac{n+1}{n}\right)^n \ge 1 
        ~~~\Longleftrightarrow~~~
        \left(1+\frac{1}{n}\right)^n \ge 1
        $$

        e l'ultima disuguaglianza è evidentemente vera, perché $1+\frac{1}{n} > 1$. Quindi possiamo scrivere:

        \begin{align*}
        (n+1)! &= (n+1)\: n! ~\le~ (n+1)\: n^n ~\le~ (n+1)\: (n+1)^n = (n+1)^{n+1}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.

!!! esercizio "Esercizio 12"

    Dimostrare per induzione che per ogni intero $n \ge 0$ il numero naturale $10^n -1$ è divisibile per $9$, ovvero che:

    $$
    \forall n \in \N, ~\exists m \in \N ~:~~ 10^n -1 = 9\: m
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 0$. Allora:

        $$
        10^0 -1 = 0 = 9 \cdot 0
        $$

        e, poiché $0$ è un numero naturale, l'asserto è vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, esiste $m \in \N$ tale che $10^n - 1 = 9\: m$. Quindi possiamo scrivere:

        \begin{align*}
        10^{n+1} -1 &= 10 \cdot 10^{n} -1 
        = 10 \cdot 10^{n} -10 + 9 
        = 10 \: \big( 10^{n} -1 \big) + 9\\[2ex] 
        &= 10 \: \big( 9\:m \big) + 9 
        = 9\: \big( 10\:m +1 \big)
        \end{align*}

        e, poiché $10\:m +1$ è un numero naturale, l'asserto è vero per $n + 1$.

!!! esercizio "Esercizio 13"

    Dimostrare per induzione che per ogni intero $n \ge 1$ il numero naturale $n \: (n+1)$ è divisibile per $2$, ovvero che:

    $$
    \forall n \in \N, ~n \ge 1, ~\exists m \in \N ~:~~ n \: (n+1)= 2\: m
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 1$. Allora:

        $$
        1\: (1+1) = 2 = 2 \cdot 1
        $$

        e, poiché $1$ è un numero naturale, l'asserto è vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, esiste $m \in \N$ tale che $n\:(n+1) = 2\: m$. Quindi possiamo scrivere:

        \begin{align*}
        (n+1) \: \big(( n+1) +1\big) &= (n +1) \: (n +2) 
         = n^2 + n + 2\: n +2
         = n \: (n+1)+ 2\: n +2\\[2ex]
        &= 2\: m + 2\: n +2 
        = 2 \: \big( m + n + 1 \big)
        \end{align*}

        e, poiché $m + n + 1$ è un numero naturale, l'asserto è vero per $n + 1$.

!!! esercizio "Esercizio 14"

    Dimostrare per induzione che per ogni intero $n \ge 2$ il numero naturale $n^3 - n$ è divisibile per $6$, ovvero che:

    $$
    \forall n \in \N, ~n \ge 2, ~\exists m \in \N ~:~~ n^3 - n= 6\: m
    $$

    (suggerimento: usare l'esercizio precedente).

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 2$. Allora:

        $$
        2^3 -2 = 6 = 6 \cdot 1
        $$

        e, poiché $1$ è un numero naturale, l'asserto è vero.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, esiste $m \in \N$ tale che $n^3 - n = 6\: m$. Inoltre, per l'esercizio precedente, $n\:(n+1)$ è pari: esiste $h \in \N$ tale che $n\:(n+1) = 2\:h$. Quindi possiamo scrivere:

        \begin{align*}
        (n+1)^3 - (n+1) &= n^3 +3\:n^2 +3\:n+1-n-1 
        = (n^3 - n) + (3\:n^2 + 3\:n) \\[2ex]
        &= 6\: m + 3\: n \: (n+1)
        = 6\: m + 3 \cdot 2 \: h
        = 6\: \big( m + h \big)
        \end{align*}

        e, poiché $m + h$ è un numero naturale, l'asserto è vero per $n + 1$.

!!! esercizio "Esercizio 15"

    Dimostrare per induzione che per ogni intero $n \ge 0$ e per ogni $x \in \R$, $x \ge -\frac{2}{3}$, vale:

    $$
    (1+x) \: e^n ~\ge~ \frac{1}{n+3}
    $$

??? soluzione "Soluzione"

    Per induzione su $n$.

    - <strong>Primo passo dell'induzione</strong>

        Sia $n = 0$. Allora l'asserto diventa:

        $$
        (1+x)\:e^0 \ge \frac{1}{0+3} \text{ ~~ cioè  ~~} x \ge -\frac{2}{3}
        $$

        che è vero per ipotesi.

    - <strong>Passo induttivo</strong>

        Supponiamo che sia vero per $n$, e proviamolo per $(n + 1)$. Per ipotesi induttiva, abbiamo $(1+x) \: e^n \ge \frac{1}{n+3}$. Quindi, poiché $e > 1$, possiamo scrivere:

        \begin{align*}
        (1+x) \: e^{n+1} &= e \: \big( (1+x) \: e^{n} \big)
        ~\ge~ \frac{e}{n+3} 
        ~\ge~ \frac{1}{n+3} 
        ~\ge~ \frac{1}{(n+1)+3}
        \end{align*}

        che è esattamente l'asserto voluto, per $n + 1$.
