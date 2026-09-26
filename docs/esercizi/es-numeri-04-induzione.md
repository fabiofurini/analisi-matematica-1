---
title: "Principio di induzione"
---

# Principio di induzione

<div class="info-capitolo" markdown>

**Esercizi · Numeri e logica** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-numeri-04-induzione.pdf)

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
