---
title: "Integrale di Riemann e proprietà"
---

# Integrale di Riemann e proprietà

<div class="info-capitolo" markdown>

**Esercizi · Parte 7 · Integrali** · con le soluzioni svolte · [:material-pencil-box-multiple: Esercizi, volume 7 (PDF)](../pdf/esercizi-7-integrali.pdf) · [:material-book-open-variant: Capitolo 1: L'integrale di Riemann](../integrali/01-integrale-riemann.md)

</div>

!!! esercizio "Esercizio 1"

    Sia $f(x) = 2x + 1$ in $[0,2]$ e sia $P_n$ la partizione uniforme di $[0,2]$ in $n$ intervalli.

    - Calcolare $s(f,P_n)$ e $S(f,P_n)$.

    - Dedurre che $f$ è integrabile e calcolare $\int_0^2 (2x+1)\,dx$.

??? soluzione "Soluzione"

    I punti della partizione sono $x_k = \frac{2k}{n}$ e $\Delta x_k = \frac2n$. La funzione è crescente, quindi in $I_k = [x_{k-1}, x_k]$

    $$
    m_k = f(x_{k-1}) = \frac{4(k-1)}{n} + 1, ~~~~~~ M_k = f(x_k) = \frac{4k}{n} + 1
    $$

    Con $\sum_{k=1}^n k = \frac{n(n+1)}{2}$:

    $$
    S(f,P_n) = \sum_{k=1}^{n} \left(\frac{4k}{n} + 1\right)\frac{2}{n} = \frac{8}{n^2}\cdot\frac{n(n+1)}{2} + 2 = 6 + \frac{4}{n}
    $$

    $$
    s(f,P_n) = \sum_{k=1}^{n} \left(\frac{4(k-1)}{n} + 1\right)\frac{2}{n} = \frac{8}{n^2}\cdot\frac{(n-1)n}{2} + 2 = 6 - \frac{4}{n}
    $$

    Per ogni $n$ si ha $6 - \frac4n \le \sup_P s(f,P) \le \inf_P S(f,P) \le 6 + \frac4n$; per $n \rr \ip$ si ottiene che $f$ è integrabile e

    $$
    \int_0^2 (2x+1)\,dx = 6
    $$

    È l'area del trapezio di basi $f(0) = 1$, $f(2) = 5$ e altezza $2$: $\frac{(1+5)\cdot 2}{2} = 6$.

!!! esercizio "Esercizio 2"

    Usando la formula $\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$, calcolare le somme inferiori e superiori di $f(x) = x^3$ in $[0,1]$ relative alla partizione uniforme $P_n$, e dedurre il valore di $\int_0^1 x^3\,dx$.

??? soluzione "Soluzione"

    Con $x_k = \frac{k}{n}$ e $f$ crescente, $m_k = \frac{(k-1)^3}{n^3}$ e $M_k = \frac{k^3}{n^3}$. Quindi

    $$
    S(f,P_n) = \frac{1}{n^4}\sum_{k=1}^{n} k^3 = \frac{(n+1)^2}{4n^2}, ~~~~~~ s(f,P_n) = \frac{1}{n^4}\sum_{k=1}^{n-1} k^3 = \frac{(n-1)^2}{4n^2}
    $$

    Entrambe tendono a $\frac14$ per $n \rr \ip$ e la differenza $S - s = \frac{1}{n}$ tende a $0$. Dunque

    $$
    \int_0^1 x^3\,dx = \frac14
    $$

!!! esercizio "Esercizio 3"

    Sia $f:[0,1] \rr \R$ definita da $f(x) = 1$ se $x \in \Q$ e $f(x) = -1$ se $x \notin \Q$.

    - Dimostrare che $f$ non è integrabile in $[0,1]$.

    - Dimostrare che $|f|$ è integrabile e calcolarne l'integrale.

    - Che cosa si conclude sul Teorema dell'integrale del valore assoluto?

??? soluzione "Soluzione"

    Ogni intervallo $I_k$ di una partizione contiene numeri razionali e irrazionali, quindi $m_k = -1$ e $M_k = 1$. Per ogni partizione

    $$
    s(f,P) = -\sum_{k=1}^n \Delta x_k = -1, ~~~~~~ S(f,P) = 1
    $$

    L'estremo superiore delle somme inferiori ($-1$) è diverso dall'estremo inferiore delle somme superiori ($1$): $f$ non è integrabile.

    Invece $|f(x)| = 1$ per ogni $x$: è costante, quindi integrabile, e $\int_0^1 |f(x)|\,dx = 1$.

    Il teorema dice che se $f$ è integrabile allora $|f|$ è integrabile; l'esempio mostra che il viceversa è falso.

!!! esercizio "Esercizio 4"

    Senza calcolare gli integrali, dimostrare le stime

    $$
    {\rm (a)}~~ \frac12 \le \int_0^1 \frac{dx}{1+x^4} \le 1, ~~~~~~~~ {\rm (b)}~~ 1 \le \int_0^1 \sqrt{1+x^3}\,dx \le \sqrt2
    $$

    e stabilire, sempre senza calcolarli, quale dei due integrali $\int_0^1 x^2\,dx$ e $\int_0^1 x^3\,dx$ è maggiore, e quale dei due integrali $\int_1^2 x^2\,dx$ e $\int_1^2 x^3\,dx$.

??? soluzione "Soluzione"

    Si usa il Corollario delle stime dell'integrale, con $b - a = 1$.

    - (a) In $[0,1]$ si ha $0 \le x^4 \le 1$, quindi $\frac12 \le \frac{1}{1+x^4} \le 1$.

    - (b) In $[0,1]$ si ha $0 \le x^3 \le 1$, quindi $1 \le \sqrt{1+x^3} \le \sqrt2$.

    Per $x \in [0,1]$ vale $x^3 \le x^2$, quindi per il Teorema di monotonia dell'integrale $\int_0^1 x^3\,dx \le \int_0^1 x^2\,dx$. Per $x \in [1,2]$ vale $x^3 \ge x^2$, quindi $\int_1^2 x^3\,dx \ge \int_1^2 x^2\,dx$. (Infatti $\frac14 < \frac13$ e $\frac{15}{4} > \frac73$.)

!!! esercizio "Esercizio 5"

    Sia $f(x) = |x - 1|$ in $[0,3]$. Calcolare $\int_0^3 f(x)\,dx$ con l'interpretazione geometrica, la media integrale di $f$ in $[0,3]$ e tutti i punti $c \in [0,3]$ previsti dal Teorema della media integrale.

??? soluzione "Soluzione"

    Il grafico di $f$ in $[0,3]$ forma con l'asse $x$ due triangoli: in $[0,1]$ di base $1$ e altezza $1$, in $[1,3]$ di base $2$ e altezza $2$. Per l'additività

    $$
    \int_0^3 |x-1|\,dx = \frac12 + 2 = \frac52
    $$

    La media integrale è $\frac13\cdot\frac52 = \frac56$. I punti cercati risolvono $|c - 1| = \frac56$: $c = \frac16$ oppure $c = \frac{11}{6}$, entrambi in $[0,3]$. Il punto del teorema esiste ma non è necessariamente unico.

!!! esercizio "Esercizio 6"

    Sia $f:[a,b] \rr \R$ continua e non negativa, con $\int_a^b f(x)\,dx = 0$. Dimostrare che $f(x) = 0$ per ogni $x \in [a,b]$. La conclusione resta vera se $f$ è solo integrabile?

??? soluzione "Soluzione"

    Per assurdo, sia $f(x_0) > 0$ per un $x_0 \in [a,b]$. Per la permanenza del segno (continuità di $f$ in $x_0$) esiste un intervallo $[c,d] \subseteq [a,b]$, con $c < d$ e $x_0 \in [c,d]$, in cui $f(x) \ge \frac{f(x_0)}{2}$. Per l'additività, per $f \ge 0$ e per il Corollario delle stime dell'integrale

    $$
    \int_a^b f(x)\,dx \ge \int_c^d f(x)\,dx \ge \frac{f(x_0)}{2}\,(d - c) > 0
    $$

    in contraddizione con l'ipotesi.

    Senza continuità la conclusione è falsa: la funzione uguale a $1$ in $x = a$ e a $0$ altrove è integrabile, non negativa, con integrale $0$ (Osservazione sulle modifiche in un numero finito di punti), ma non è identicamente nulla.

!!! esercizio "Esercizio 7"

    Dimostrare che $f(x) = \sqrt{x}$ è uniformemente continua in $[0,1]$, sia con il Teorema di Heine–Cantor sia direttamente, trovando un $\delta$ esplicito per ogni $\varepsilon > 0$. (Suggerimento: $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|}$.)

??? soluzione "Soluzione"

    La funzione è continua nell'intervallo chiuso e limitato $[0,1]$: per il Teorema di Heine–Cantor è uniformemente continua.

    Direttamente: per $0 \le y \le x$ si ha $\sqrt{x} \le \sqrt{y} + \sqrt{x - y}$ (elevando al quadrato: $x \le y + (x-y) + 2\sqrt{y(x-y)}$), quindi $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|}$. Dato $\varepsilon > 0$, con $\delta = \varepsilon^2$:

    $$
    |x - y| < \varepsilon^2 ~~~\Longrightarrow~~~ |\sqrt{x} - \sqrt{y}| \le \sqrt{|x-y|} < \varepsilon
    $$

    Il $\delta$ non dipende dai punti: è proprio la continuità uniforme (anche in $[0, \ip)$).
