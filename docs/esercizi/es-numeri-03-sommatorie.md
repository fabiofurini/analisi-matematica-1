---
title: "Sommatorie"
---

# Sommatorie

<div class="info-capitolo" markdown>

**Esercizi · Numeri e logica** · con le soluzioni svolte · [:material-file-pdf-box: PDF](../pdf/es-numeri-03-sommatorie.pdf)

</div>

!!! esercizio "Esercizio 1"

    Dimostrare utilizzando le proprietà delle sommatorie che, per ogni intero $n \ge 1$, abbiamo:

    $$
    \sum_{k=1}^{n} k^2 = \frac{n\:(n+1)\:(2\:n+1)}{6}
    $$

    (somma dei quadrati dei primi $n$ numeri naturali senza lo zero).

??? soluzione "Soluzione"

    Partiamo scrivendo in due modi diversi la somma: $\sum_{k=0}^n (k+1)^3$

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^3 &=\sum_{k=0}^n(k^3+3\:k^2+3\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + 3\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right)  +1 \\[2ex]
    &=\sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + \frac{3\:n\:(n+1)}{2} +n +1\\[5ex]
    2)~~~ \sum_{k=0}^n (k+1)^3&=\sum_{k=1}^{n+1} k^3=\sum_{k=1}^n k^3 + (n+1)^3
    \end{align*}

    Uguagliando e cancellando la somma con $k^3$ otteniamo:

    $$
    3\: \sum_{k=1}^n k^2 + \frac{3\:n\:(n+1)}{2} +n +1=   (n+1)^3
    $$

    Isolando quella con $k^2$ otteniamo:

    \begin{align*}
    3\: \sum_{k=1}^n k^2 &= (n+1)^3 - \frac{3\:n\:(n+1)}{2} -n -1 \\[2ex]
     &= n^3 + 3n^2 +3n+1 - \frac{3n^2+3n}{2} -n -1\\[2ex]
       &= \frac{2n^3 + 3n^2 + n}{2}
    \end{align*}

    Quindi:

    \begin{align*}
    \sum_{k=1}^n k^2 &= \frac{2n^3 + 3n^2 + n}{6} = \frac{n\:(n+1)\:(2\:n+1)}{6}
    \end{align*}

!!! esercizio "Esercizio 2"

    Dimostrare utilizzando le proprietà delle sommatorie che, per ogni intero $n \ge 1$, abbiamo:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^2\:(n+1)^2}{4}
    $$

    (somma dei cubi dei primi $n$ numeri naturali senza lo zero). Ovvero che abbiamo:

    $$
    \sum_{k=1}^{n} k^3 = 	\frac{n^2\:(n+1)^2}{4} = \left(\frac{n\:(n+1)}{2}\right)^2= \left(\sum_{k=1}^{n} k \right)^2
    $$

    e  quindi la somma dei cubi è uguale al quadrato della somma dei numeri naturali.

??? soluzione "Soluzione"

    Partiamo scrivendo in due modi diversi la seguente somma: $\sum_{k=0}^n (k+1)^4$.

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^4 &=\sum_{k=0}^n(k^4+4\:k^3+6\:k^2+4\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 6\: \sum_{k=1}^n k^2 + 4\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right) +1 \\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 +  n\:(n+1)\:(2\:n+1) + 2\:n\:(n+1) +n +1\\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 2n^3 + 5n^2 +4n +1\\[2ex] 
    2)~~~ \sum_{k=0}^n (k+1)^4&=\sum_{k=1}^{n+1} k^4=\sum_{k=1}^n k^4 + (n+1)^4
    \end{align*}

    Uguagliando e cancellando la somma con $k^4$ otteniamo:

    $$
    4\: \sum_{k=1}^n k^3 + 
    2n^3 + 5 n^2 +4n +1  =   (n+1)^4
    $$

    Isolando quella con $k^3$ otteniamo:

    \begin{align*}
    4\: \sum_{k=1}^n k^3 &= n^4 + 4n^3 +6n^2 + 4n +1  - 
    2n^3 - 5 n^2 -4n -1 =  n^4 + 2n^3 +  n^2
    \end{align*}

    Quindi:

    \begin{align*}
    \sum_{k=1}^n k^3 & = \frac{n^4 + 2n^3 +  n^2}{4}  = \frac{n^2\:(n+1)^2}{4}
    \end{align*}
