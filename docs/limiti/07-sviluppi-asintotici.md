---
title: "Sviluppi asintotici"
---

# Sviluppi asintotici

<div class="info-capitolo" markdown>

**Parte 3 · Limiti di funzioni e continuità · Capitolo 7** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-limiti-07-sviluppi-asintotici.pdf)

</div>

## 1. Simbolo di "$o$ piccolo" e sviluppi asintotici

<a id="box-defXX-1"></a>

!!! definizione "Definizione 1: di $o$ piccolo"

    Date due funzioni $f(x)$ e $g(x)$, definite in un intorno di $c \in \R^*$, si dice che

    $$
    f(x) = o \big(g(x)\big) {\rm ~~~per~~~} x \rr c
    $$

    (si legge “$f(x)$ è $o$ piccolo di $g(x)$” per $x \rr c$) se e solo se

    $$
    \frac{f(x)}{g(x)} \rr 0 {\rm ~~~per~~~} x \rr c
    $$

!!! chiave ""

    Il simbolo $o(g(x))$ per $x$ che tende a $c$ non denota  una particolare funzione $f(x)$,  ma qualsiasi funzione $f(x)$ tale che il rapporto tra $f(x)$ e $g(x)$ tende a 0 per $x$ che tende a $c$.

<a id="box-texexpbox1-2"></a>

!!! esempio "Esempio 1: $o$ piccolo"

    Ad esempio:

    $$
    x^2 = o(x) {\rm ~~~per~~~} x \rr 0 {\rm ~~~dato~~che~~~} \frac{x^2}{x} \rr 0 {\rm ~~~per~~~} x \rr 0
    $$

    $$
    x^3 = o(x) {\rm ~~~per~~~} x \rr 0 {\rm ~~~dato~~che~~~} \frac{x^3}{x} \rr 0 {\rm ~~~per~~~} x \rr 0
    $$

    $$
    x^3 = o(x^2) {\rm ~~~per~~~} x \rr 0 {\rm ~~~dato~~che~~~} \frac{x^3}{x^2} \rr 0 {\rm ~~~per~~~} x \rr 0
    $$

    $$
    e^{-1/x^2} = o(x^4) {\rm ~~~per~~~} x \rr 0 {\rm ~~~dato~~che~~~} \frac{e^{-1/x^2}}{x^4} \rr 0 {\rm ~~~per~~~} x \rr 0
    $$

- Dalla definizione di funzioni asintotiche, si ha:

    $$
    f(x)  \thicksim g(x) {\rm ~~per~~} x \rr c \Longleftrightarrow \frac{f(x)}{g(x)}  \rr 1 {\rm ~~per~~} x \rr c
    $$

    in questi casi abbiamo:

    $$
    \frac{f(x)}{g(x)}-1 \rr 0  {\rm ~~per~~} x \rr c {\rm ~~~~~e~~~~~} \frac{f(x)-g(x)}{g(x)} \rr 0  {\rm ~~per~~} x \rr c
    $$

    dalla definizione di $o$ piccolo possiamo allora scrivere :

    $$
    f(x) - g(x) = o\big(g(x)\big)   {\rm ~~per~~} x \rr c
    $$

    !!! chiave ""

        Abbiamo il seguente <em>sviluppo asintotico</em>:

        $$
        f(x)  \thicksim g(x) {\rm ~~per~~} x \rr c \Longleftrightarrow f(x) = g(x) + o\big(g(x)\big) {\rm ~~per~~} x \rr c
        $$

- Inoltre si ha:

    $$
    g(x) + f(x) \thicksim g(x) {\rm ~~per~~} x \rr c \Longleftrightarrow \frac{f(x)}{g(x)} \rr 0 {\rm ~~per~~} x \rr c,
    $$

    dato che:

    $$
    \frac{g(x) + f(x)}{g(x)} = 1 + \frac{f(x)}{g(x)}
    $$

    che tende ad 1 per $x \rr c$ se e solo se $f(x) / g(x)$ tende a 0 per $x \rr c$.

    In tali situazioni diremo che $g(x)$ è la <strong>parte principale</strong> della somma $g(x) + f(x)$ e che $f(x)$ è <strong>trascurabile</strong> rispetto a $g(x)$ per $x \rr c$; ovvero che:

    $$
    f(x) =  o\big(g(x)\big) {\rm ~~per~~ } x \rr c
    $$

    !!! chiave ""

        Abbiamo il seguente <em>sviluppo asintotico</em>:

        $$
        g(x) + f(x) \thicksim g(x) {\rm ~~per~~} x \rr c \Longleftrightarrow f(x) =  o\big(g(x)\big) {\rm ~~per~~} x \rr c
        $$

- Segue dalla definizione di $o$ piccolo che con tre funzioni abbiamo:

    $$
    f(x) = h(x) + o\big(g(x)\big) {\rm ~~per~~} x \rr c \Longleftrightarrow \frac{f(x)-h(x)}{g(x)} \rr 0 {\rm ~~per~~} x \rr c
    $$

- Il simbolo di "$o$ piccolo" si comporta al seguente modo con i prodotti:

    $$
    f \cdot  o \big(g\big) =   o \big(f \cdot  g\big)
    $$

    $$
    o \big(f\big) \cdot  o \big(g\big) =  o \big(f \cdot  g\big)
    $$

    <a id="box-texexpbox1-3"></a>

    !!! esempio "Esempio 2:  $o$ piccolo e prodotti"

        Ad esempio per $x \rr c$:

        $$
        x \cdot o\big(x^2\big) = o\big(x^3\big),~~~~~~~ \frac{o\big(x^3\big)}{x} = o\big(x^2\big),~~~~~~~ o(x) \cdot o\big(x^2\big)=o\big(x^3\big)
        $$

!!! chiave ""

    Alcune proprietà del simbolo $o$ piccolo mostrate con degli esempi:

    \begin{align*}
    o(x) \pm o(x) &= o(x),~~~ {\rm ~~per~~} x \rr c \\[1ex]
     o(a \; x) &= o(x),~~~~~ \forall a \in \R,~ a \neq 0,~~~ {\rm ~~per~~} x \rr c\\[1ex] 
     a\;o(x) &= o(x),~~~~~ \forall a \in \R,~~~ {\rm ~~per~~} x \rr c\\[1ex] 
     o(x) + o\big(x^2\big) &= o(x),~~~ {\rm ~~per~~} x \rr 0\\[1ex]
     o(x) + o\big(x^2\big) &= o\big(x^2\big),~ {\rm ~~per~~} x \rr \infty
    \end{align*}

<a id="box-defXX-4"></a>

!!! definizione "Definizione 2: di $o(1)$"

    Una funzione $f$ si dice infinitesima per $x \rr c$ e si scrive

    $$
    f(x) = o(1) {\rm ~~per~~}
    x \rr  c {\rm ~~se~~} f(x) \rr 0 {\rm ~~per~~} x \rr c
    $$

<a id="box-texexpbox1-5"></a>

!!! esempio "Esempio 3:  $o(1)$ "

    Ad esempio:

    $$
    \sqrt{x} = o(1) {\rm ~~~per~~~} x \rr 0^+ {\rm ~~~dato~~che~~~} \frac{\sqrt{x}}{1} \rr 0 {\rm ~~~per~~~} x \rr 0^+
    $$

    $$
    x^{-2} = o(1) {\rm ~~~per~~~} x \rr \ip {\rm ~~~dato~~che~~~} \frac{x^{-2}}{1} \rr 0 {\rm ~~~per~~~} x \rr \ip
    $$

- Abbiamo:

    $$
    \lim_{ x \rr c} f(x) = \ell \Longleftrightarrow \lim_{ x \rr c} (f(x) - \ell)=0 \Longleftrightarrow \lim_{ x \rr c} |f(x) - \ell|=0
    $$

    quindi

    $$
    \lim_{ x \rr c} f(x) = \ell \Longleftrightarrow f(x) =  \ell + o(1) {\rm ~~~per~~~} x \rr c
    $$

    l'ultima espressione si legge “$f(x)$ è somma di $\ell$ e di una funzione infinitesima per $x \rr c$”

<a id="box-texexpbox1-6"></a>

!!! esempio "Esempio 4:  $o(1)$ "

    Ad esempio:

    $$
    x^2 = x \big(1 + o(1)\big) {\rm ~~~per~~~} x \rr 1 {\rm ~~~dato~~che~~~} \frac{x^2}{x} = x \rr 1 {\rm ~~~per~~~} x \rr 1
    $$

    $$
    x^2 + 3\:x  = x \big(3 + o(1)\big) {\rm ~~~per~~~} x \rr 0 {\rm ~~~dato~~che~~~} \frac{x^2 + 3\:x}{x} = x + 3\rr 3 {\rm ~~~per~~~} x \rr 0
    $$

    $$
    x^2 + 3\:x  = x^2 \big(1 + o(1)\big) {\rm ~~~per~~~} x \rr \ip {\rm ~~~dato~~che~~~} \frac{x^2 + 3\:x}{x^2} = 1 + \frac{3}{x}\rr 1 {\rm ~~~per~~~} x \rr \ip
    $$

    $$
    \sqrt{x+5}  = \sqrt{x} \big(1 + o(1)\big) {\rm ~~~per~~~} x \rr \ip {\rm ~~~dato~~che~~~} \frac{\sqrt{x+5}}{\sqrt{x}} =\sqrt{1 + \frac{5}{x}} \rr 1 {\rm ~~~per~~~} x \rr \ip
    $$

!!! chiave ""

    Alcune proprietà del simbolo $o(1)$:

    \begin{align*}
    o(1) \pm o(1) &= o(1),~~~ {\rm ~~per~~} x \rr c\\[1ex]
     o(1) \cdot o(1) &= o(1),~~~ {\rm ~~per~~} x \rr c\\[1ex]
     c \cdot o(1) &= o(1),~~~ {\rm ~~per~~} x \rr c,~~ c \neq 0\\[1ex]
     \big(1+o(1)\big) \cdot \big(1+o(1)\big) &= 1+o(1),~~~ {\rm ~~per~~} x \rr c\\[1ex]
     \frac{1}{1+o(1)}  &= 1+o(1),~~~ {\rm ~~per~~} x \rr c\\[1ex]
     \frac{c}{1+o(1)} - c  &= o(1),~~~ {\rm ~~per~~} x \rr c,~~ c \neq 0
    \end{align*}

    Dato che

    $$
    \frac{c}{1+o(1)} - c = c \; \left(  \frac{1}{1+o(1)} -1\right)= c \; \big(1+o(1)-1 \big)= o(1)
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Esempio 5:  $o(1)$ "

    Abbiamo

    $$
    \big(x  + o(1)\big)^2 = x^2 \big(1  + o(1)\big) {\rm ~~~per~~~} x \rr \ip {\rm ~~~dato~~che~~~} \frac{\big(x  + o(1)\big)^2}{x^2} \rr 1 {\rm ~~~per~~~} x \rr \ip
    $$

## 2. Sviluppi asintotici derivanti dai limiti notevoli

Abbiamo visto che valgono i seguenti limiti notevoli:

$$
\lim_{x \rr 0} \frac{\sin x}{x} =1,~~\lim_{x \rr 0} \frac{1 - \cos x}{x^2} = \frac{1}{2},~~ \lim_{x \rr 0} \frac{\log(1 + x)}{x} =1,~~\lim_{x \rr 0} \frac{e^x -1}{x} =1,~~\lim_{x \rr 0} \frac{ (1 + x)^{\alpha} -1}{x} = \alpha
$$

e di conseguenza valgono le seguenti <strong>equivalenze asintotiche</strong> per $x \rr 0$:

$$
\sin x \thicksim x,~~ 1 - \cos x \thicksim \frac{1}{2} x^2,~~ e^x -1 \thicksim x,~~ \log(1+x) \thicksim x,~~ (1+x)^{\alpha} -1  \thicksim \alpha \: x
$$

Vediamo ora come ottenere gli <strong>sviluppi asintotici</strong> a partire dai limiti notevoli:

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{\sin x}{x} =1
    $$

    Quindi per $x \rr 0$:

    $$
    \frac{\sin x}{x} - 1 \rr 0, \qquad \frac{\sin x - x}{x}  \rr 0 {\rm ~~quindi~~} \sin x - x = o(x)
    $$

    che fornisce lo sviluppo asintotico:

    $$
    \sin x  =  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}
    $$

    Quindi per $x \rr 0$:

    $$
    \frac{1 - \cos x}{x^2} - \frac{1}{2} \rr 0, \qquad \frac{2\:(1 - \cos x) - x^2}{2\:x^2}  \rr 0 {\rm ~~quindi~~} 2\:(1 - \cos x) - x^2 = o\big(\:2\:x^2\big)
    $$

    che fornisce lo sviluppo asintotico:

    $$
    \cos x  =  1 - \frac{1}{2} \: x^2 + o\big(x^2\big)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{\log(1 + x)}{x} =1
    $$

    Quindi per $x \rr 0$:

    $$
    \frac{\log(1 + x)}{x} - 1 \rr 0, \qquad \frac{\log(1 + x) - x}{x}  \rr 0 {\rm ~~quindi~~} \log(1 + x) - x = o(x)
    $$

    che fornisce lo sviluppo asintotico:

    $$
    \log(1 + x)  =  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{e^x -1}{x} =1
    $$

    Quindi per $x \rr 0$:

    $$
    \frac{e^x -1}{x} - 1 \rr 0, \qquad \frac{e^x -1- x}{x}  \rr 0 {\rm ~~quindi~~} e^x-1 - x = o(x)
    $$

    che fornisce lo sviluppo asintotico:

    $$
    e^x  =1+  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{ (1 + x)^{\alpha} -1}{x} = \alpha  {\rm ~~~~~~~~con~~~} \alpha \in \R
    $$

    Quindi per $x \rr 0$:

    $$
    \frac{ (1 + x)^{\alpha} -1}{x} - \alpha \rr 0 \qquad \frac{(1 + x)^{\alpha} -1 - \alpha \: x}{x}  \rr 0 {\rm ~~quindi~~} (1 + x)^{\alpha} -1 - \alpha \: x = o(x)
    $$

    che fornisce lo sviluppo asintotico:

    $$
    (1 + x)^{\alpha} = 1 + \alpha \: x + o(x)
    $$

- Questi sviluppi asintotici si possono generalizzare

!!! chiave ""

    Se $\varepsilon(x)$ è una funzione che tende a zero, cioè è un infinitesimo (non ha importanza a che cosa tenda $x$), abbiamo i seguenti <strong>sviluppi asintotici</strong> derivanti dai limiti notevoli.

    Per $\varepsilon(x) \rr 0$, abbiamo:

    \begin{align}
    \sin{ \big( \varepsilon(x) \big)} &= \varepsilon(x) + o\big( \varepsilon(x)\big)   \\[2ex]
         \cos{\big( \varepsilon(x) \big)} &= 1 - \frac{1}{2} \; \varepsilon^2(x) + o{\big(\varepsilon^2(x)\big)} \\[2ex]
         \log{\big(1+\varepsilon(x)\big)} &= \varepsilon(x) + o\big(\varepsilon(x)\big)  \\[2ex]
          e^{\varepsilon(x)} &= 1 + \varepsilon(x) + o\big(\varepsilon(x)\big)  \\[2ex]
          \big(1+\varepsilon(x)\big)^\alpha &= 1 + \alpha \; \varepsilon(x) + o\big(\varepsilon(x)\big)  {\rm ~~~~~~~~con~~~} \alpha \in \R
    \end{align}
