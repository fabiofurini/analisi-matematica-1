---
title: "Calcolo limiti di successioni"
---

# Calcolo limiti di successioni

<div class="info-capitolo" markdown>

**Esercizi · Limiti di successioni** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf)

</div>

## 1. Calcolo dei limiti con tecniche di base

!!! chiave ""

    Se:

    $$
    a_n \rr \ell_a\in \R {\rm ~~~~e~~~~}   b_n \rr \ell_b \in \R,
    $$

    abbiamo:

    $$
    a_n \pm b_n  \rr \ell_a\pm \ell_b, ~~~~~  \frac{a_n}{b_n}  \rr \frac{\ell_a}{\ell_b} ~~~~ (b_n, \ell_b\neq 0, {\rm ~definitivamente}),
    $$

    $$
    a_n \: b_n  \rr \ell_a\: \ell_b , ~~~~~ a_n^{b_n}  \rr {\ell_a}^{\ell_b} ~~~~ (a_n, \ell_a> 0, {\rm ~definitivamente}).
    $$

!!! chiave ""

    Se:

    $$
    a_n \rr \ell_a\in \R, ~~~b_n \rr \ip {\rm ~~~e~~~} c_n \rr \ip,
    $$

    abbiamo:

    $$
    a_n + b_n  \rr \ell_a \ip = \ip, ~~~a_n - b_n  \rr \ell_a \im = \im,
    $$

    $$
    b_n + c_n \rr \ip \ip = \ip, ~~~ - b_n - c_n \rr \im \im = \im.
    $$

!!! chiave ""

    Se:

    $$
    a_n \rr \ell_a\in \R, ~~~b_n \rr 0 {\rm ~~~e~~~} c_n \rr \infty,
    $$

    abbiamo:

    $$
    a_n \:\: c_n  \rr \ell_a\:\: \infty = \infty ~~ (\ell_a\neq 0), ~~~~ \frac{a_n}{b_n}  \rr \frac{\ell_a}{0} = \infty ~~ (\ell_a\neq 0), ~~~~ \frac{a_n}{c_n}  \rr \frac{\ell_a}{\infty} = 0.
    $$

!!! chiave ""

    Le quattro principali forme di indecisione sono:

    $$
    [\ip \im], \quad [0 \cdot \infty], \quad \left[\frac{0}{0}\right]  {\rm ~~~~e~~~~} \left[\frac{\infty}{\infty}\right].
    $$

    Si hanno anche altre tre forme di indecisione derivanti da $[0 \cdot \infty]$:

    $$
    \big[1^{\infty}\big], \quad \big[0^0\big] {\rm ~~~~e~~~~} \big[\infty^0\big].
    $$

!!! chiave ""

    Abbiamo:

    $$
    \lim_{n \rightarrow +\infty} n^{\alpha} = 
    \begin{cases}
    +\infty & {\rm se~} \alpha >0\\
    1 & {\rm se~} \alpha = 0\\
    0 & {\rm se~} \alpha < 0
    \end{cases}
    \qquad
    \lim_{n \rightarrow +\infty} a^n = 
    \begin{cases}
    +\infty & {\rm se~} a >1\\
    1 & {\rm se~} a = 1\\
    0 & {\rm se~} |a| < 1\\
    {\rm non~esiste~} & {\rm se~} a \le -1\\
    \end{cases}
    $$

!!! esercizio "Esercizio 1"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle\lim_{n\to+\infty}\frac{n^{2}+2n}{n+1} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\frac{n^{2}+2n}{n+1}=\lim_{n\to+\infty}\frac{n^{2} \overbrace{\left(1+ \overbrace{\frac{2}{n}}^{\rr 0}\right)}^{\rr 1}}{n \underbrace{\left(1+ \underbrace{\frac{1}{n}}_{\rr 0}\right)}_{\rr 1}}
    =\lim_{n\to+\infty}\frac{n^{2}}{n}= \lim_{n\to+\infty} n =+\infty.
    $$

!!! esercizio "Esercizio 2"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle \lim_{n\to+\infty}\frac{n^{4}+5}{n^{5}+7n-1} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\frac{n^{4}+5}{n^{5}+7n-1}=
    \lim_{n\to+\infty}\frac{n^{4}\left(1+\frac{5}{n^{4}}\right)}{n^{5}\left(1+\frac{7}{n^{4}}-\frac{1}{n^{5}}\right)}
    =\lim_{n\to+\infty}\frac{n^{4}}{n^{5}}=\lim_{n\to+\infty}\frac{1}{n}=0.
    $$

!!! esercizio "Esercizio 3"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle\lim_{n\to+\infty}\frac{1-n^{2}}{(n+2)^{2}} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\frac{1-n^{2}}{(n+2)^{2}}=
    \lim_{n\to+\infty}\frac{-n^{2}\left(1-\frac{1}{n^{2}}\right)}{n^{2}\left(1+\frac{4}{n}+\frac{4}{n^{2}}\right)}
    =\lim_{n\to+\infty}\frac{-n^{2}}{n^{2}}=\lim_{n\to+\infty} - 1=-1.
    $$

!!! esercizio "Esercizio 4"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle\lim_{n\to+\infty}\sqrt{n^{2}+1}-\sqrt{n} = [\ip \im]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\sqrt{n^{2}+1}-\sqrt{n}=\lim_{n\to+\infty}n\left( 
    \underbrace{\sqrt{1+\underbrace{\frac{1}{n^{2}}}_{\rr 0}}}_{\rr 1}
    -\underbrace{\sqrt{\frac{1}{n}}}_{\rr 0}\right)=
    \lim_{n\to+\infty}n=+\infty.
    $$

??? soluzione "Soluzione"

    <strong>Metodo alternativo:</strong>  moltiplicando e dividendo per $\sqrt{n^2+1} + \sqrt{n}$ otteniamo

    $$
    \frac{(\sqrt{n^{2}+1}-\sqrt{n})(\sqrt{n^{2}+1}+\sqrt{n})}{\sqrt{n^{2}+1}+\sqrt{n}}=\frac{\left(\sqrt{n^2+1}\right)^2 - \left(\sqrt{n}\right)^2}{\sqrt{n^2+1} + \sqrt{n}} = \frac{n^2 + 1 - n}{\sqrt{n^2+1} + \sqrt{n}},
    $$

    ricordando che $(a-b)(a+b)=a^2-b^2$.  Abbiamo inoltre

    $$
    \frac{n^2 + 1 - n}{\sqrt{n^2+1} + \sqrt{n}} 
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}{\sqrt{n^2 \left(1+\frac{1}{n^2}\right)} + \sqrt{n}} 
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}{n \: \sqrt{ \left(1+\frac{1}{n^2}\right)} + n^{\frac{1}{2}} }
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}
    {n \: \left( \sqrt{ \left(1+ {\frac{1}{n^2}}\right)} + {\frac{1}{n^{1/2}}}  \right)}.
    $$

    Quindi

    $$
    \lim_{n \rr \ip} \sqrt{n^{2}+1}-\sqrt{n}=  \lim_{n\to+\infty} n \: 
    \frac{ \overbrace{\left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}^{\rr 1}}
    { \underbrace{\left( \sqrt{ \left(1+\frac{1}{n^2}\right)} + {\frac{1}{n^{1/2}}}  \right)}_{\rr 1}}=\lim_{n\to+\infty}n=+\infty.
    $$

!!! esercizio "Esercizio 5"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle \lim_{n\to+\infty}e^{n}-2^{n} = [\ip \im]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}e^{n}-2^{n}= \lim_{n\to+\infty}e^{n} \underbrace{\left(1-\underbrace{\left(\frac{2}{e}\right)^{n}}_{\rr 0}\right)}_{\rr 1}= \lim_{n\to+\infty}e^{n} =+\infty
    $$

    in quanto

    $$
    e^{n}\to+\infty {\rm ~~e~~} \left(\frac{2}{e}\right)^{n}\to0.
    $$

!!! esercizio "Esercizio 6"

    Calcolare il seguente limite che si presenta in forma indeterminata (elementare):

    $$
    \displaystyle \lim_{n\to+\infty}3^{n}+4^{n}-5^{n} = [\ip \ip \im] = [\ip \im]
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}3^{n}+4^{n}-5^{n}= 
    \lim_{n\to+\infty}-5^{n} \underbrace{\left(1- \underbrace{\left(\frac{3}{5}\right)^{n}}_{\rr 0}- \underbrace{\left(\frac{4}{5}\right)^{n}}_{\rr 0}\right)}_{\rr 1}=\lim_{n\to+\infty}-5^{n}=-\infty
    $$

    in quanto

    $$
    -5^{n}\to-\infty, ~~~ \left(\frac{3}{5}\right)^{n}\to 0 {\rm ~~e~~} \left(\frac{4}{5}\right)^{n}\to0.
    $$

!!! esercizio "Esercizio 7"

    Calcolare il seguente  limite semplice

    $$
    \displaystyle \lim_{n\to+\infty}n^{\sqrt{2}}
    $$

??? soluzione "Soluzione"

    Per ogni $\alpha>0$, anche irrazionale, $\lim_{n\to+\infty}n^{\alpha}=+\infty$.

!!! esercizio "Esercizio 8"

    Calcolare il seguente  limite semplice

    $$
    \displaystyle \lim_{n\to+\infty}n^{-e}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}n^{-e}=\lim_{n\to+\infty}\frac{1}{n^{e}}=0.
    $$

!!! esercizio "Esercizio 9"

    Calcolare il seguente  limite semplice

    $$
    \displaystyle \lim_{n\to+\infty} \left( \frac{3 \: n + 5}{ n^2 + 120}\right)^{2\:n}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \frac{3 \: n + 5}{ n^2 + 120} = \frac{ 3 \: n \left(1 + \frac{5}{3 \: n} \right)}{n^2 \: \left( 1 + \frac{120}{n^2} \right)} = \frac{3}{n} \: \frac{\left(1 + \frac{5}{3 \: n} \right)}{ \left( 1 + \frac{120}{n^2} \right)}  \rr 0 {\rm ~~ e ~~} 2\:n \rr \ip.
    $$

    Quindi

    $$
    \lim_{n\to+\infty} \left( \frac{3 \: n + 5}{ n^2 + 120}\right)^{2\:n} = 0^{\ip} =0.
    $$

!!! esercizio "Esercizio 10"

    Calcolare il seguente  limite semplice

    $$
    \displaystyle \lim_{n\to+\infty} \left( \frac{10 \: n^2 - 5 \:n}{ n^3 - 8}\right)^{-3\:n + 8}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \frac{10 \: n^2 - 5 \:n}{ n^3 - 8} = \frac{ 10 \: n^2 \left(1 - \frac{5 \:n}{10 \: n^2} \right)}{n^3 \: \left( 1 - \frac{8}{n^3} \right)} = \frac{10}{n} \: \frac{\left(1 - \frac{1}{2 \: n} \right)}{ \left( 1 - \frac{8}{n^3} \right)}  \rr 0 {\rm ~~ e ~~} -3\:n + 8 \rr \im.
    $$

    Quindi

    $$
    \lim_{n\to+\infty} \left( \frac{10 \: n^2 - 5 \:n}{ n^3 - 8}\right)^{-3\:n + 8} = 0^{\im} = \frac{1}{0^{\ip}} = \frac{1}{0}= \ip.
    $$

## 2. Calcolo dei limiti usando la gerarchia degli infiniti

!!! chiave ""

    Per ogni $a>1$ e $\alpha > 0$ abbiamo:

    $$
    \lim_{n \rightarrow +\infty} \frac{\log_a n}{n^{\alpha}} = 0, \quad
    \lim_{n \rightarrow +\infty} \frac{n^{\alpha}}{a^n}  = 0,
    $$

    $$
    \lim_{n \rightarrow +\infty} \frac{a^n}{n!} = 0, \quad 
    \lim_{n \rightarrow +\infty} \frac{n!}{n^n} = 0. \quad
    $$

    Quindi  i seguenti infiniti, sono elencati in ordine crescente:

    $$
    \log n,~~~ n^{\alpha},~~~ a^{n},~~~ n!,~~~ n^{n}.
    $$

!!! esercizio "Esercizio 11"

    Calcolare il limite della seguente successione se esiste

    $$
    a_n = \frac{{2^{1/n}} + n^2 + 3^{-n}}{\log^6 n + 2 + n}
    $$

??? soluzione "Soluzione"

    Consideriamo il numeratore, abbiamo:

    $$
    {2^{1/n}} \rr 1, \quad n^2 \rr \ip, \quad  3^{-n} \rr 0
    $$

    La potenza di $n$ di grado maggiore è $n^2$ e inoltre abbiamo

    $$
    \frac{3^{-n}}{n^2}  = \frac{1}{3^n \; n^2} {\rm ~~~quindi~~~} \frac{3^{-n}}{n^2} \rr 0 {\rm ~~~~~e~~}\frac{2^{1/n}}{n^2}  \rr  0.
    $$

    Consideriamo il denominatore, abbiamo:

    $$
    \log^6 n \rr \ip, \quad  2 \rr 2, \quad n \rr \ip
    $$

    Per il teorema della gerarchia degli infiniti, abbiamo

    $$
    \frac{\log^6 n}{n}= \left(\underbrace{\frac{\log n}{n^{1/6}}}_{\rr 0}\right)^{6} \rr 0.
    $$

    Raccogliamo quindi $n^2$ al numeratore e $n$ al denominatore e otteniamo:

    $$
    \frac{n^2 \left(1+ \frac{2^{1/n}}{n^2} + \frac{3^{-n}}{n^2} \right)}{n \left(1+ \frac{\log^6 n}{n} + \frac{2}{n}\right)} = n \; \frac{ \left(1+ \overbrace{\frac{2^{1/n}}{n^2}}^{\rr 0} + \overbrace{\frac{3^{-n}}{n^2}}^{\rr 0} \right)}{\left(1+ \underbrace{\frac{\log^6 n}{n}}_{\rr 0} + \underbrace{\frac{2}{n}}_{\rr 0} \right)}
    $$

    $$
    \lim_{n \rr \ip} \frac{{2^{1/n}} + n^2 + 3^{-n}}{\log^6 n + 2 + n} = \lim_{n \rr \ip } n \; \overbrace{\frac{ \left(1+ \frac{2^{1/n}}{n^2} + \frac{3^{-n}}{n^2} \right)}{\left(1+ \frac{\log^6 n}{n} + \frac{2}{n}\right)}}^{\rr 1} = \ip
    $$

!!! esercizio "Esercizio 12"

    Calcolare il limite della seguente successione se esiste

    $$
    a_n = \frac{ 3 \: n^3 + 3^n + \log n}{\log^6 n + 2^{2\:n} + n^5}
    $$

??? soluzione "Soluzione"

    Consideriamo il numeratore, abbiamo:

    $$
    3 \: n^3 \rr \ip, \quad 3^n \rr \ip, \quad  \log n \rr \ip
    $$

    ovvero una somma di successioni infinite. Abbiamo anche:

    $$
    \frac{3 \: n^3}{3^n}  \rr 0 {\rm ~~~e ~~~} \frac{\log n}{3^n} \rr 0,
    $$

    per il teorema della gerarchia degli infiniti. Quindi la parte principale è $3^n$. Consideriamo il denominatore, abbiamo:

    $$
    \log^6 n \rr \ip, \quad 2^{2\:n} =4^{n} \rr \ip, \quad  n^5 \rr \ip
    $$

    ovvero una somma di successioni infinite. Abbiamo anche:

    $$
    \frac{\log^6 n}{4^{n}}  \rr 0 {\rm ~~~e ~~~} \frac{n^5}{4^{n}} \rr 0,
    $$

    per il teorema della gerarchia degli infiniti. Quindi la parte principale è $4^n$.

    Raccogliamo quindi $3^n$ al numeratore e $4^n$ al denominatore e otteniamo:

    $$
    \frac{3^n \left(1+ \frac{3 \: n^3}{3^n} + \frac{\log n}{3^n} \right)}{4^n \left(1+ \frac{\log^6 n}{4^{n}} + \frac{n^5}{4^{n}} \right)} = \left( \frac{3}{4}\right)^n \; \frac{ \left(1+ \overbrace{\frac{3 \: n^3}{3^n}}^{\rr 0} + \overbrace{\frac{\log n}{3^n}}^{\rr 0} \right)}{\left(1+ \underbrace{\frac{\log^6 n}{4^{n}}}_{\rr 0} + \underbrace{\frac{n^5}{4^{n}}}_{\rr 0} \right)}
    $$

    quindi

    $$
    \lim_{n \rr \ip} \frac{ 3 \: n^3 + 3^n + \log n}{\log^6 n + 2^{2\:n} + n^5} = \lim_{n \rr \ip } \left( \frac{3}{4}\right)^n \; \underbrace{\frac{ \left(1+ \frac{3 \: n^3}{3^n} + \frac{\log n}{3^n} \right)}{\left(1+ \frac{\log^6 n}{4^{n}} + \frac{n^5}{4^{n}} \right)}}_{\rr 1} = 0
    $$

!!! esercizio "Esercizio 13"

    Calcolare il seguente  limite semplice

    $$
    \displaystyle \lim_{n\to+\infty}\sqrt[n]{n^{2}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \sqrt[n]{n} = n^{\frac{1}{n}} = e^{\log n^{1/n}} = e^{ \frac{\log n}{n}}
    $$

    e studiando la successione all'esponente

    $$
    a_n = \frac{\log n}{n} {\rm ~~~abbiamo~~~} a_n \rr 0
    $$

    grazie al teorema della gerarchia degli infiniti. Quindi  abbiamo :

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \lim_{n \rr \ip} e^{ \frac{\log n}{n}} =1.
    $$

    Di conseguenza

    $$
    \lim_{n\to+\infty}\sqrt[n]{n^{2}}=\lim_{n\to+\infty}\left(\sqrt[n]{n}\right)^{2}=1^{2}=1.
    $$

## 3. Calcolo dei limiti usando stime asintotiche

!!! chiave ""

    Abbiamo $~~ a_n  \thicksim b_n~~$ se $~~ \frac{a_n}{b_n} \rr 1 ~~$ oppure se $~~a_n = b_n \: c_n ~~$  con $~~ c_n \rr 1.$

    Inoltre abbiamo  $~~ a_n + b_n \thicksim a_n ~~$ se $~~ \frac{b_n}{a_n} \rr 0$

!!! esercizio "Esercizio 14"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\frac{2^{n}+n^{2}+1}{5^{n}+2^{n}+n}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    2^{n}+n^{2}+1 \thicksim 2^{n} {\rm ~~dato~che~~} \frac{n^2}{2^{n}} \rr 0 {~~e~~} \frac{1}{2^{n}} \rr 0
    $$

    e

    $$
    5^{n}+2^{n}+n \thicksim 5^{n} {\rm ~~dato~che~~} \frac{2^n}{5^{n}} =  \left(\frac{2}{5}\right)^{n} \rr 0 {~~e~~} \frac{n}{5^{n}} \rr 0
    $$

    quindi

    $$
    \lim_{n\to+\infty}\frac{2^{n}+n^{2}+1}{5^{n}+2^{n}+n}=\lim_{n\to+\infty}\frac{2^{n}}{5^{n}}=
    \lim_{n\to+\infty}\left(\frac{2}{5}\right)^{n}=0
    $$

!!! esercizio "Esercizio 15"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\frac{n!-5^{n}}{7^{n}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    n!-5^{n} \thicksim n! {\rm ~~dato~che~~} \frac{5^n}{n!} \rr 0
    $$

    quindi

    $$
    \lim_{n\to+\infty}\frac{n!-5^{n}}{7^{n}}=\lim_{n\to+\infty}\frac{n!}{7^{n}}=+\infty
    $$

!!! esercizio "Esercizio 16"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\frac{2^{3n-1}-n^{2}}{(2n)!-5^{n}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    2^{3n-1}-n^{2} \thicksim 2^{3n-1}  {\rm ~~dato~che~~} - \frac{n^2}{2^{3n-1}} \rr 0
    $$

    e

    $$
    (2n)!-5^{n} \thicksim(2n)! {\rm ~~dato~che~~} -\frac{5^{n}}{(2n)!} \rr 0
    $$

    quindi

    $$
    \lim_{n\to+\infty}\frac{2^{3n-1}-n^{2}}{(2n)!-5^{n}}=\lim_{n\to+\infty}\frac{2^{3n-1}}{(2n)!}=0
    $$

!!! esercizio "Esercizio 17"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}  \frac{ 3^n}{ n!\: n^{1/n}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    n!\: n^{1/n} \thicksim n!  {\rm ~~dato~che~~}  n^{1/n} = \sqrt[n]{n} \rr 1
    $$

    perché

    $$
    n^{1/n} = e^{\log n^{1/n}} = e^{\frac{\log n}{n}} {\rm ~~ e~~} \frac{\log n}{n} \rr 0.
    $$

    Quindi

    $$
    \lim_{n \rr \ip} \frac{ 3^n}{ n!\: n^{1/n}} = \lim_{n \rr \ip} \frac{ 3^n}{ n! } = 0.
    $$

!!! esercizio "Esercizio 18"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}  \frac{\log{(1+e^n)}}{\sqrt{1+n^2}}
    $$

??? soluzione "Soluzione"

    Osservando che

    $$
    \log{(1+e^n)} \thicksim \log(e^n)=n\log{e}=n
    $$

    si ha

    $$
    \lim_{n \rr \ip}  \frac{\log{(1+e^n)}}{\sqrt{1+n^2}} = \lim_{n \rr \ip} \frac{n}{\sqrt{1+n^2}} =  \lim_{n \rr \ip} \sqrt{\frac{n^2}{1+n^2}} =1
    $$

    perché

    $$
    \frac{n^2}{1+n^2} \rr 1.
    $$

!!! esercizio "Esercizio 19"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}  \frac{n+1}{\log_2{(3+n^n)}}
    $$

??? soluzione "Soluzione"

    Osservando che

    $$
    \log_2{(3+n^n)} \thicksim \log_2(n^n)=n\log_2{n}
    $$

    si ha

    $$
    \lim_{n \rr \ip} \frac{n+1}{\log_2{(3+n^n)}} = \lim_{n \rr \ip} \frac{n+1}{n\log_2{n}} = 0
    $$

    perché

    $$
    \frac{n+1}{n} \rr 1  {\rm ~~~~e~~~~} \frac{1}{\log_2{n}} \rr 0.
    $$

## 4. Calcolo dei limiti con la successione convergente al numero di Nepero

!!! chiave ""

    Per forme indeterminate $1^{\pm\infty}$, si può usare:

    $$
    \left(1+\frac{1}{a_{n}}\right)^{a_{n}}\to e\ \ \ {\rm per}\ a_{n}\to\pm\infty.
    $$

!!! esercizio "Esercizio 20"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\left(\frac{n-1}{n-3}\right)^{n}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \left(\frac{n-1}{n-3}\right)^{n} = \left(\frac{n-3-1+3}{n-3}\right)^{n} = \left( 1 + \frac{2}{n-3}\right)^{n} =  \left( 1 + \frac{1}{ \frac{n-3}{2}}\right)^{n}
    $$

    quindi

    $$
    \lim_{n\to+\infty}\left(\frac{n-1}{n-3}\right)^{n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{\frac{n-3}{2}}\right)^{\frac{n-3}{2}}\right]^{\frac{2n}{n-3}}=e^{2},
    $$

    dato che

    $$
    \left(1+\frac{1}{\frac{n-3}{2}}\right)^{\frac{n-3}{2}} \rr e, \quad  2 \: \left( \frac{n}{n-3} \right)= 2 \:\left(  \frac{n-3 + 3}{n-3} \right) = 2 \: \left(1 + \underbrace{\frac{3}{n-3}}_{\rr 0} \right) \rr 2
    $$

    e

    $$
    \frac{n-3}{2} \rr \ip.
    $$

!!! esercizio "Esercizio 21"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\left(\frac{n^{2}+1}{n^{2}}\right)^{n}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\left(\frac{n^{2}+1}{n^{2}}\right)^{n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{n^{2}}\right)^{n^{2}}\right]^{\frac{1}{n}}=e^{0}=1
    $$

    dato che

    $$
    \left(1+\frac{1}{n^2}\right)^{n^2} \rr e, \quad  \frac{1}{n} \rr 0
    $$

    e

    $$
    n^2 \rr \ip.
    $$

!!! esercizio "Esercizio 22"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\left(\frac{2n-5}{2n}\right)^{-n}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{n\to+\infty}\left(\frac{2n-5}{2n}\right)^{-n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{-\frac{2n}{5}}\right)^{-\frac{2n}{5}}\right]^{\frac{5}{2}}=\sqrt{e^{5}}.
    $$

    dato che

    $$
    \left(1+\frac{1}{-\frac{2n}{5}}\right)^{-\frac{2n}{5}}  \rr e {\rm ~~~~e~~~~} -\frac{2n}{5} \rr \im.
    $$

!!! esercizio "Esercizio 23"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\frac{n^{n-1}}{(n-1)^n}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \frac{n^{n-1}}{(n-1)^n}=
    \frac{1}{n}\left(\frac{n}{n-1}\right)^n=\frac{1}{n}\left(\frac{n-1}{n}\right)^{-n}=\frac{1}{n}\left(1+\frac{1}{-n}\right)^{-n}
    $$

    quindi

    $$
    \lim_{n\to+\infty}\frac{n^{n-1}}{(n-1)^n}=\lim_{n\to+\infty}\frac{1}{n}\left(1+\frac{1}{-n}\right)^{-n}=0
    $$

    dato che

    $$
    \left(1+\frac{1}{-n}\right)^{-n}  \rr e {\rm ~~~~e~~~~} \frac{1}{n} \rr 0.
    $$

!!! esercizio "Esercizio 24"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip} \left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}
    $$

??? soluzione "Soluzione"

    Dato che

    $$
    \left( \frac{n^2 +2}{n^2 + n +1} \right) \rr 1 {\rm ~~e~~} 2\: n \rr \ip
    $$

    abbiamo la forma indeterminata del tipo $[1^{+\infty}]$.

    Dato che

    $$
    \left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}
    =
    \left( \frac{n^2 + n +1 - n +1}{n^2 + n +1} \right)^{2\: n}
    =
    \left( 1 + \frac{- n +1}{n^2 + n +1} \right)^{2\: n},
    $$

    possiamo quindi scrivere

    $$
    \left( 1 + \frac{- n +1}{n^2 + n +1} \right)^{2\: n}
     =
      \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{2\: n}
      =
     \left[\left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}}\right]^{ \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n} 
    .
    $$

    Quindi

    $$
    \lim_{n\to+\infty}\left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}=
    \lim_{n\to+\infty}\left[
    \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}}
    \right]^{ \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n} =e^{-2},
    $$

    dato che

    $$
    \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}} \rr e, \quad \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n = \left( \frac{ \overbrace{- 2 \: n^2 + 2\: n}^{\thicksim -2 \:n ^2}}{ \underbrace{n^2 + n +1}_{\thicksim  n ^2}} \right)  \rr -2
    $$

    e

    $$
    \frac{n^2 + n +1}{- n +1} = \frac{ n^2 \overbrace{\left(1 + \frac{1}{n} + \frac{1}{n^2}\right)}^{\rr 1}}{- n \underbrace{\left( 1 - \frac{1}{n}\right)}_{\rr 1}} \rr \im.
    $$

## 5. Calcolo dei limiti col teorema del confronto

!!! chiave ""

    - Se $c_n \rr 0$ e $|b_n|\le c_n$, definitivamente allora $b_n \rr 0$.

    - Se $c_n \rr 0$ e $b_n$ è limitata (anche non convergente) allora $c_n \: b_n \rr 0$. Il prodotto di una successione infinitesima e una limitata è infinitesimo.

    - Una somma di infiniti e di successioni limitate è equivalente all'infinito di ordine superiore.

!!! esercizio "Esercizio 25"

    Calcolare il seguente  limite

    $$
    \lim_{n\to+\infty}\frac{n+\sin n}{\cos n+\log n}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    n+\sin n \thicksim n  {\rm ~~dato~che~~}  \frac{\sin n}{n} \rr 0
    $$

    prodotto fra una successione infinitesima $\{\frac{1}{n}\}$ e una limitata $\{\sin n\}$.  Inoltre

    $$
    \cos n+\log n\thicksim \log n  {\rm ~~dato~che~~} \frac{\cos n}{\log n} \rr 0
    $$

    prodotto fra una successione infinitesima $\left\{\frac{1}{\log n} \right\}$ e una limitata $\{\cos n\}$.   Quindi

    $$
    \lim_{n\to+\infty}\frac{n+\sin n}{\cos n+\log n}=\lim_{n\to+\infty}\frac{n}{\log n}=+\infty
    $$

!!! esercizio "Esercizio 26"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \frac{ n \: \sin n + \sin n^2}{ n^2 +1} 
    =
     \frac{ n \: \sin n }{ n^2 +1} +  \frac{  \sin n^2}{ n^2 +1}
    $$

    e

    $$
    \frac{ n  }{ n^2 +1} \: \sin n \rr 0 {\rm~~dato~che~} \frac{ n  }{ n^2 +1} \rr 0 {~~e~~} \sin n  {\rm ~~è~limitata.}
    $$

    Inoltre

    $$
    \frac{ 1  }{ n^2 +1} \: \sin n^2 \rr 0 {\rm~~dato~che~} \frac{ 1  }{ n^2 +1} \rr 0 {~~e~~} \sin n^2  {\rm ~~è~limitata.}
    $$

    Quindi

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1} =  \lim_{n \rr \ip} 
    \underbrace{\frac{ n \: \sin n }{ n^2 +1}}_{\rr 0} +  \underbrace{\frac{  \sin n^2}{ n^2 +1}}_{\rr 0}  = 0
    $$

??? soluzione "Soluzione"

    Metodo alternativo.

    Notiamo che le successioni $\{\sin n\}$ $\{ \sin n^2\}$ sono irregolari ma limitate.  Quindi possiamo scrivere la seguente maggiorazione

    $$
    \left |  \frac{ n \: \sin n + \sin n^2}{ n^2 +1} \right| \le \frac{n+1}{n^2 + 1}
    $$

    e abbiamo che

    $$
    \lim_{n \rr \ip} \frac{n+1}{n^2 + 1} = \lim_{n \rr \ip} \frac{n}{n^2} = \lim_{n \rr \ip} \frac{1}{n} = 0.
    $$

    Quindi per il teorema del confronto abbiamo:

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1}  = 0
    $$

## 6. Calcolo dei limiti col teorema del rapporto

!!! chiave ""

    Data una successione positiva ($a_n > 0$ per ogni $n$):

    $$
    {\rm se~esiste~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=\ell
    {\rm ~~e~~} \ell < 1, {\rm ~~allora~~} a_n \rr 0,
    $$

    $$
    {\rm se~esiste~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=\ell
    {\rm ~~e~~} \ell > 1 {\rm~~(o~~} \ell = \ip), {\rm ~~allora~~} a_n \rr \ip.
    $$

!!! esercizio "Esercizio 27"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}   \frac{3^{n-1}}{n\:(n+1)!}
    $$

??? soluzione "Soluzione"

    Trattandosi di una successione a termini positivi il cui termine generale è il rapporto di successioni più semplici di tipo esponenziale e fattoriale, è naturale applicare il criterio del rapporto. 

    Calcoliamo quindi:

    $$
    \frac{a_{n+1}}{a_n} = \frac{\frac{3^{n}}{(n+1) \cdot (n+2)!}}{\frac{3^{n-1}}{n\:(n+1)!}} = \frac{3^{n}}{ (n+1) \cdot  \underbrace{(n+2)!}_{=(n+1)! \cdot (n+2)}} \: \frac{n\:(n+1)!}{3^{n-1}}=
    $$

    $$
    = \frac{3\:n}{(n+1)(n+2)} = \frac{3\:n}{n^2 + 2 \:n + n + 2}  = \frac{3\:n}{n^2 \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)}= \frac{3}{n \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)}
    $$

    Abbiamo:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} =\lim_{n \rr \ip}   \frac{3}{n \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)} =0
    $$

    Quindi per il teorema del rapporto:

    $$
    \lim_{n \rr \ip}   \frac{3^{n-1}}{n\:(n+1)!} = 0
    $$

!!! esercizio "Esercizio 28"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}   \frac{n^3 \: 2^n}{n!}
    $$

??? soluzione "Soluzione"

    Abbiamo una successione positiva, calcoliamo:

    $$
    \frac{a_{n+1}}{a_n} = \frac{(n+1)^3 \: 2^{(n+1)}}{(n+1)!} \frac{n!}{n^3 \: 2^n} = \underbrace{\left(\frac{n+1}{n} \right)^3}_{\rr 1} \frac{2}{n+1} \thicksim \frac{2}{n+1}
    $$

    Abbiamo quindi:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = \lim_{n \rr \ip}   \frac{2}{n+1} =0
    $$

    Allora per il teorema del rapporto:

    $$
    \lim_{n \rr \ip}   \frac{n^3 \: 2^n}{n!} = 0
    $$

!!! esercizio "Esercizio 29"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}   \frac{n^n}{(n+1)!}
    $$

??? soluzione "Soluzione"

    Abbiamo una successione positiva, calcoliamo:

    $$
    \frac{a_{n+1}}{a_n} = \frac{(n+1)^{n+1}}{(n+2)!} \frac{(n+1)!}{n^n} = \underbrace{\frac{n+1}{n+2}}_{\rr 1} \left( \frac{n+1}{n}\right)^n \thicksim \left( 1 + \frac{1}{n}\right)^n
    $$

    Abbiamo quindi:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = \lim_{n \rr \ip} \left( 1 + \frac{1}{n}\right)^n = e   > 1
    $$

    Allora per il teorema del rapporto:

    $$
    \lim_{n \rr \ip}   \frac{n^n}{(n+1)!} = \ip
    $$

!!! esercizio "Esercizio 30"

    Calcolare il limite della seguente successione, se esiste

    $$
    \lim_{n \rr \ip}   \frac{n^{\frac{1}{n}}\: 2^n}{(n+1)!}
    $$

??? soluzione "Soluzione"

    Abbiamo:

    $$
    \frac{ \overbrace{n^{\frac{1}{n}}}^{\rr 1}\: 2^n}{(n+1)!} \thicksim \frac{2^n}{(n+1)!}  \equiv b_n
    $$

    Abbiamo ora la successione positiva $\{b_n\}$, calcoliamo:

    $$
    \frac{b_{n+1}}{b_n} = \frac{2^{n+1}}{(n+2)!} \frac{(n+1)!}{2^n} = \frac{2}{n+2}
    $$

    Abbiamo quindi:

    $$
    \lim_{n \rr \ip} \frac{b_{n+1}}{b_n} = \lim_{n \rr \ip} \frac{2}{n+2} = 0
    $$

    Allora per il teorema del rapporto:

    $$
    \lim_{n \rr \ip}   \frac{n^{\frac{1}{n}}\: 2^n}{(n+1)!} = 0
    $$

## 7. Discussione al variare di un parametro

!!! esercizio "Esercizio 31"

    Calcolare, al variare del parametro $\alpha \in \mathbb{R}$, il limite di successione

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \frac{5^{3 \alpha n}}{2^{3n+1}} = \frac{1}{2}\left(\frac{5^\alpha}{2}\right)^{3n}
    $$

    quindi

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}=\lim_{n \rr \ip} \frac{1}{2}\left(\frac{5^\alpha}{2}\right)^{3n} = \frac{1}{2} \lim_{n \rr \ip}\left(\frac{5^\alpha}{2}\right)^{3n}=\ell
    $$

    A questo punto, è possibile studiare tre casi:

    - <em>Caso 1</em>

        $$
        \frac{5^\alpha}{2}>1 \Longleftrightarrow \alpha>\log_5 2
        $$

        allora $\ell=+\infty$;

    - <em>Caso 2</em>

        $$
        0<\frac{5^\alpha}{2}<1 \Longleftrightarrow \alpha<\log_5 2
        $$

        allora $\ell=0$;

    - <em>Caso 3</em>

        $$
        \frac{5^\alpha}{2}=1 \Longleftrightarrow \alpha=\log_5 2
        $$

        allora $\ell=\frac{1}{2}$.

    In definitiva:

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}=
    \begin{cases}
    +\infty & \text{se } \alpha > \log_5 2 \\
    \frac{1}{2} & \text{se } \alpha = \log_5 2\\
    0 & \text{se } \alpha < \log_5 2
    \end{cases}
    $$

!!! esercizio "Esercizio 32"

    Calcolare, al variare del parametro $\alpha \in \mathbb{R}$, il limite di successione

    $$
    \lim_{n \rr \ip}   (e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \begin{split}
    a_n=(e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)} &= (e^{(2-\alpha)\:n}+1)\frac{e^n}{e^n}\log{\left(1+\frac{1}{e^n}\right)} \\
    &= (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}\log{\left(1+\frac{1}{e^n}\right)^{e^n}} \\ &\thicksim (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}
    \end{split}
    $$

    in quanto

    $$
    \left(1+\frac{1}{e^n}\right)^{e^n}  \rr e {\rm ~~~~e~~~~} \log{\left(1+\frac{1}{e^n}\right)^{e^n}} \rr 1
    $$

    Quindi

    $$
    \lim_{n \rr \ip}   a_n =  \lim_{n \rr \ip} (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}
    $$

    D'altronde

    $$
    (e^{(2-\alpha)\:n}+1)\frac{1}{e^n} =  e^{(1-\alpha)n}+e^{-n} \rr \begin{cases}    
    +\infty & \text{se } 1-\alpha>0 \\
    1 & \text{se } 1-\alpha=0\\
    0 & \text{se } 1-\alpha<0
    \end{cases}
    $$

    Riassumendo, otteniamo

    $$
    \lim_{n \rr \ip}   (e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)} = \begin{cases}    
    +\infty & \text{se } \alpha<1 \\
    1 & \text{se } \alpha=1\\
    0 & \text{se } \alpha>1
    \end{cases}
    $$

## 8. Esercizi a risposta multipla

!!! esercizio "Esercizio 33"

    Sia

    $$
    \lim_{n\to+\infty}\left(\frac{\sqrt{3}+n}{e-2n}\right)^{n}=\ell
    $$

    - **(a)** $\ell=0$

    - **(b)** $\ell=e^{\left(\sqrt{3}-\frac{e}{2}\right)}$

    - **(c)** $\ell=+\infty$

    - **(d)** Nessuna delle altre risposte è corretta.

??? soluzione "Soluzione"

    Posto

    $$
    a_{n}=\frac{\sqrt{3}+n}{e-2n}
    $$

    abbiamo $a_{n}<0$ per $n\geq2$ e

    $$
    \left|a_{n}\right|^{n}=\left(\frac{\sqrt{3}+n}{2n-e}\right)^{n}\to0
    $$

    in quanto $|a_{n}|\to1/2$. Da $\left|a_{n}\right|^{n}\to0$ segue $(a_{n})^{n}\to0$. La risposta corretta è (a).

!!! esercizio "Esercizio 34"

    Sia

    $$
    \lim_{n\to+\infty}(-1)^{n}n^{\alpha}\left(\frac{1+3n}{2-n}\right)^{n}=\ell
    $$

    - **(a)** $\ell$ non esiste se $\alpha\geq0$

    - **(b)** $\ell=+\infty$ per ogni $\alpha\in\R$

    - **(c)** $\ell=0$ se $\alpha<0$

    - **(d)** Nessuna delle altre risposte è corretta.

??? soluzione "Soluzione"

    Poniamo

    $$
    a_{n}=(-1)^{n}\left(\frac{1+3n}{2-n}\right)^{n}=\left(\frac{1+3n}{n-2}\right)^{n}.
    $$

    Abbiamo $a_{n}\to+\infty$ in quanto $(1+3n)/(n-2)\to3$. Confrontiamo $a_{n}$ con $3^{n}$:

    $$
    \frac{a_{n}}{3^{n}}=\left(\frac{1+3n}{3n-6}\right)^{n}=\left[\left(1+\frac{1}{\frac{3n-6}{7}}\right)^{\frac{3n-6}{7}}\right]^{\frac{7n}{3n-6}}
    \to e^{7/3}
    $$

    da cui

    $$
    a_{n}\sim3^{n} e^{7/3}.
    $$

    Ne segue

    $$
    \lim_{n\to+\infty}(-1)^{n}n^{\alpha}\left(\frac{1+3n}{2-n}\right)^{n}=
    \lim_{n\to+\infty}e^{7/3}n^{\alpha}3^{n}=+\infty
    $$

    anche quando $\alpha<0$ perché $3^{n}$ è un infinito di ordine superiore ad ogni potenza di $n$. La risposta corretta è (b).

!!! esercizio "Esercizio 35"

    Sia

    $$
    \lim_{n\to+\infty}\left(\frac{an+2}{en+a}\right)^{n}=\ell
    $$

    - **(a)** $\ell=e^{ \left(\frac{2}{e}-1\right)}$ se $a=e$

    - **(b)** $\ell=1$ se $a\leq e$

    - **(c)** $\ell=0$ se $a>0$

    - **(d)** Nessuna delle altre risposte è corretta.

??? soluzione "Soluzione"

    Posto

    $$
    a_{n}=\frac{an+2}{en+a}
    $$

    abbiamo $a_{n}\to a/e$ quindi

    $$
    (a_{n})^{n}\to\left\{\begin{array}{lr}+\infty,\ &a>e\\
    \\
    0,\ &0<a<e\end{array}\right.
    $$

    dunque le risposte (b) e (c) non sono corrette. Nel caso $a=e$ abbiamo una forma indeterminata $1^{\infty}$:

    $$
    \left(\frac{en+2}{en+e}\right)^{n}=\left[\left(1+\frac{1}{\frac{en+e}{2-e}}\right)^{\frac{en+e}{2-e}}\right]^{\frac{(2-e)n}{en+e}}
    \to e^{-1+\frac{2}{e}}.
    $$

    La risposta corretta è (a).
