---
title: "Limiti di polinomi e funzioni razionali"
---

# Limiti di polinomi e funzioni razionali

<div class="info-capitolo" markdown>

**Parte 3 · Limiti di funzioni e continuità · Capitolo 3** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/limiti-03-polinomi-razionali.pdf)

</div>
## 1. Limiti di polinomi a $\pm \infty$

- Un polinomio  di grado (massimo) $n$ si può scrivere come:

    $$
    P_n(x) = \sum_{i=0}^n a_i \: x^i  \quad  {\rm ~~con~~} a_i \in \R,  {\rm ~per~~} i \in \{0,1,\dots,n\}, ~ {\rm ~~e~~} a_n \neq 0.
    $$

    Il valore $a_i$ è il <strong>coefficiente del monomio</strong> $i$, con $i=0,1,\dots,n$,  mentre $x^i$ è la <strong>parte letterale</strong> del monomio.   In questa scrittura, senza perdita di generalità,   i monomi sono ordinati per valori crescenti degli esponenti.  [^1]

- Raccogliendo  $a_n  \: x^n$,  ovvero l'ultimo monomio che è quello di grado  massimo,  si ha:

    $$
    P_n(x) = a_n \: x^n \left(
    \overbrace{\frac{a_0}{a_n \: x^n} + \frac{a_1}{a_n \: x^{n-1}} + {\rm \dots} + \frac{a_{n-1}}{a_n \: x}}^{\rr 0 {\rm ~~per~~} x \rr \pm \infty} 
    + 1  \right)
    $$

!!! chiave ""

    $$
    \lim_{x \rr \pm \infty} P_n(x) = \lim_{x \rr \pm \infty} a_n \: x^n
    $$

    Per calcolare il limite di un polinomio per $x \rr \pm \infty$, basta  calcolare il limite del monomio di grado massimo.

<a id="box-texexpbox1-1"></a>

!!! esempio "Esempio 1: Limiti di polinomi per $x \rr \pm \infty$"

    Ad esempio:

    $$
    \lim_{x \rr  \ip} (8  - x^2 + 3\:x^3)= \lim_{x \rr  \ip} 3\:x^3 \: \left( \underbrace{\frac{8}{3\:x^3}  - \frac{1}{3\:x}}_{\rr 0 {\rm ~per~} x \rr \ip } + 1 \right) = \lim_{x \rr  \ip} 3\:x^3 = \ip
    $$

    $$
    \lim_{x \rr  \im} (120 + 4\:x -2\:x^3) = \lim_{x \rr  \im} -2\:x^3 \: \left( \underbrace{\frac{120}{-2\:x^3}  + \frac{4}{-2\:x^2}}_{\rr 0 {\rm ~per~} x \rr \im} + 1 \right) = \lim_{x \rr  \im} -2\:x^3 = \ip
    $$

## 2. Limiti di funzioni razionali a $\pm \infty$

- Sia $f$ una funzione razionale (rapporto di polinomi):

    $$
    f(x) = \frac{P_n(x)}{P_m(x)}
    $$

    dove $P_n(x)$ e $P_m(x)$ sono, rispettivamente, polinomi di grado $n$ e $m$:

    $$
    P_n(x) = \sum_{i=0}^n a_i \: x^i  \quad  {\rm ~~con~~} a_i \in \R,  {\rm ~per~~} i=0,1,\dots,n, ~ {\rm ~~e~~} a_n \neq 0.
    $$

    $$
    P_m(x) = \sum_{i=0}^m b_i \: x^i  \quad  {\rm ~~con~~} b_i \in \R,  {\rm ~per~~} i=0,1,\dots,m, ~ {\rm ~~e~~} b_m \neq 0.
    $$

- Raccogliendo  al numeratore $a_n  \: x^n$ e al denominatore $b_m  \: x^m$,  ovvero i monomi di grado  massimo,  si ha:

    $$
    \frac{P_n(x)}{P_m(x)} = \frac{a_n \: x^n}{b_m \: x^m} \frac{\left \{ \overbrace{\frac{a_0}{a_n \: x^n} + \frac{a_1}{a_n \: x^{n-1}} + \dots + \frac{a_{n-1}}{a_n \: x}}^{\rr 0 {\rm ~~per~~} x \rr \pm \infty} + 1 \right\}}{\left \{ \underbrace{\frac{b_0}{b_m \: x^m} + \frac{b_1}{b_m \: x^{m-1}} + \dots + \frac{b_{m-1}}{b_m \: x}}_{\rr 0 {\rm ~~per~~} x \rr \pm \infty} + 1 \right\}}.
    $$

!!! chiave ""

    $$
    \lim_{x \rr \pm \infty} \frac{P_n(x)}{P_m(x)} = \lim_{x \rr \pm \infty} \frac{a_n \: x^n}{b_m \: x^m}  = \lim_{x \rr \pm \infty} \frac{a_n }{b_m} \: x^{n-m}
    $$

    Per calcolare il limite di un rapporto fra polinomi per $x \rr \pm \infty$, basta  calcolare  il limite del rapporto dei monomi di grado massimo.

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 2: Limiti di funzioni razionali per $x \rr \pm \infty$"

    Ad esempio:

    $$
    \lim_{x \rr  \im} \frac{1+3\: x^3}{2 + x^2} = 
      \lim_{x \rr  \im} \frac{3\: x^3}{x^2} =\lim_{x \rr  \im} 3\:{x} = \im
    $$

    $$
    \lim_{x \rr  \ip} \frac{1+3\: x^3}{1- 10x +x^4 } 
    = \lim_{x \rr  \ip} \frac{3\: x^3}{x^4} = \lim_{x \rr  \ip} 3\: \frac{1}{x} = 0
    $$

    $$
    \lim_{x \rr  \im} \frac{  7\: x^2 + 6\: x^5}{-4+7 \: x^5} 
    =\lim_{x \rr  \im} \frac{6\: x^5}{7 \: x^5}= \lim_{x \rr  \im} \frac{6}{7} = \frac{6}{7}
    $$

!!! chiave ""

    Per calcolare il limite di funzioni razionali (senza il termine costante) per $x \to 0$ bisogna  raccogliere al numeratore e al denominatore le potenze di grado minimo.

<a id="box-texexpbox1-3"></a>

!!! esempio "Esempio 3: Limiti di funzioni razionali per $x \rr 0$"

    Ad esempio:

    $$
    \lim_{x \rr  0} \frac{-2x^2+3\: x^3-6\: x^5}{x+x^2 - x^7} = \lim_{x \rr  0} \frac{ -2x^2 \left(1 \overbrace{-\frac{3}{2}\:x+ 3 \:x^3}^{\to 0 {\rm~per~} x \to 0} \right)}{ x \left(1 \underbrace{+x- \:x^6}_{\to 0 {\rm~per~} x \to 0} \right)} = \lim_{x \rr  0} -2\:x = 0
    $$

## 3. Limiti di quozienti di somme di potenze a esponente razionale

- Le stesse regole valgono per i quozienti di somme di potenze a esponente razionale:

    1. per $x \rr \infty$ occorre raccogliere la potenza con esponente massimo

    2. per $x \rr 0^+$ occorre raccogliere la potenza con esponente minimo

!!! chiave ""

    L'operazione di elevamento a potenza può essere definita anche con base negativa se l'esponente è un razionale (frazione) con denominatore dispari. Quindi in questo caso si può calcolare $x \rr 0$ (altrimenti soltanto $x \rr 0^+$).

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 4: Limiti di quozienti di somme di potenze a esponente razionale "

    Ad esempio:

    $$
    \lim_{x \rr  0} \frac{x^{2/3}}{ 3\: {x}^{1/3}  + x + x^2 }
    $$

    Raccogliendo al denominatore la potenza di esponente minimo, abbiamo:

    $$
    \frac{x^{2/3}}{ 3\: x^{1/3}  + x + x^2}
     =
     \frac{x^{2/3}}{3 \: x^{1/3} \left(1+ \frac{x}{3\:x^{1/3}} + \frac{x^2}{3\:x^{1/3}}  \right)}
     = 
     \frac{x^{2/3}}{3 \: x^{1/3} \left(1+ \frac{x^{2/3}}{3} + \frac{x^{5/3}}{3} \right)}
     = \frac{1}{3} \: x^{1/3}  \frac{1}{\left(1+ \frac{x^{2/3}}{3} + \frac{x^{5/3}}{3} \right)}
    $$

    quindi

    $$
    \lim_{x \rr  0} \frac{x^{2/3}}{ 3\: {x}^{1/3}  + x + x^2} =
     \frac{1}{3} \: \lim_{x \rr  0}  \: x^{1/3}  \frac{1}{\left(1+ \underbrace{\frac{x^{2/3}}{3} + \frac{x^{5/3}}{3}}_{\rr 0 {\rm ~~per~~} x \rr 0} \right)}
     = 0
    $$

!!! chiave ""

    Un'altra opzione per calcolare i limiti per $x \rr 0$ è quella di fare un cambio di variabile:

    $$
    x=\frac{1}{y}, {\rm ~~se~~} x \rr 0^{+} {\rm ~~allora~~} y \rr \ip, {\rm ~~se~~} x \rr 0^{-} {\rm ~~allora~~} y \rr \im
    $$

    e quindi ci si riconduce al caso di limiti a $\pm\infty$.

<a id="box-texexpbox1-5"></a>

!!! esempio "Esempio 5: Calcolo del limite di funzioni razionali per $x \rr 0^+$ col cambio di variabile"

    Vogliamo calcolare il seguente limite:

    $$
    \lim_{x \rr  0}  \frac{ x^{2/3} }{ 3\: x^{1/3}  + x + x^2 },   \qquad  f(x)=\frac{ x^{2/3} }{ 3\: x^{1/3}  + x + x^2 }
    $$

    Facendo il cambio di variabile $x=\frac{1}{y}$ occorre quindi calcolare i seguenti due limiti:

    $$
    \lim_{x \rr  0^+} f(x)  = \lim_{y \rr  \ip} \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    {\rm ~~~~e~~~~}
     \lim_{x \rr  0^-}  f(x)  = \lim_{y \rr  \im} \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    $$

    Abbiamo:

    $$
    \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    =
    \frac{y^{-2/3}}{3\:y^{-1/3} + y^{-1} + y^{-2}}
    $$

    Raccogliendo al denominatore la potenza di esponente massimo, abbiamo:

    $$
    \frac{y^{-2/3}}{3\:y^{-1/3} + y^{-1} + y^{-2}}
    = 
    \frac{y^{-2/3}}{3\:y^{-1/3} \left(1 + \frac{y^{-1}}{3\:y^{-1/3}}+ \frac{y^{-2}}{3\:y^{-1/3}} \right)}
    =
    \frac{1}{3} \: \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)}
    $$

    Quindi:

    $$
    \frac{1}{3} \: \lim_{y \rr  \im}  \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)} =
     \frac{1}{3} \: \lim_{y \rr  \ip}  \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)}
     = 0
    $$

    in quanto, per $y \rr \pm \infty$ abbiamo

    $$
    \frac{1}{y^{1/3}} \rr 0  {\rm ~~e~~} \left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right) \rr 1  {\rm ~~~~dato~che~~~} \frac{1}{3\:y^{2/3}} \rr 0, ~~\frac{1}{3\:y^{5/3}} \rr 0 .
    $$

    Dato che il limite destro e il limite sinistro di $f(x)$ per $x \rr 0$ esistono e sono uguali a $0$ allora:

    $$
    \lim_{x \rr  0}  f(x) =0
    $$

[^1]: Se un monomio di grado $i$ è mancante abbiamo $a_i=0$,  $a_0$ è il termine noto dato che $x^0=1.$
