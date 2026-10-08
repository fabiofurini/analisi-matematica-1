---
title: "Funzioni parte intera e mantissa"
---

# Funzioni parte intera e mantissa

<div class="info-capitolo" markdown>

**Parte 2 · Funzioni · Capitolo 7** · dalle dispense di Fabio Furini · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-2-funzioni.pdf) · [:material-presentation: Slide (PDF)](../pdf/slide-funzioni-07-parte-intera.pdf)

</div>

## 1. Funzioni parte intera e mantissa

- Due funzioni che tipicamente si incontrano nella scrittura di <em>algoritmi</em> sono la funzione parte intera e la funzione mantissa (o parte decimale).

<a id="box-defXX-1"></a>

!!! definizione "Definizione 1: di funzione parte intera"

    La <strong>funzione parte intera</strong> è:

    \begin{equation}
    \label{parte_int}
    f: \mathbb{R} \rightarrow \mathbb{Z}, x \mapsto [x] \qquad ({\rm oppure~~ x \mapsto \lfloor x \rfloor})
    \end{equation}

<a id="box-defXX-2"></a>

!!! definizione "Definizione 2: di funzione parte intera superiore"

    La <strong>funzione parte intera superiore</strong> è:

    \begin{equation}
    \label{parte_ceil}
    f: \mathbb{R} \rightarrow \mathbb{Z}, x \mapsto \lceil x \rceil
    \end{equation}

<a id="box-defXX-3"></a>

!!! definizione "Definizione 3: di funzione mantissa"

    La <strong>funzione mantissa</strong> è:

    \begin{equation}
    \label{parte_int__2}
    f: \mathbb{R} \rightarrow [0, 1), x \mapsto (x)
    \end{equation}

- La funzione parte intera $f(x)= \lfloor x \rfloor$ è <em>monotona crescente</em>, come la funzione parte intera superiore  $f(x)= \lceil x \rceil$.

- Grafici delle funzioni $f(x)=\lceil x \rceil$ e  $f(x)= \lfloor x \rfloor$  nell'intervallo $[-4,4]$.

    ![Figura 1](../img/funzioni-07-parte-intera/fig01.svg){ .fig .ovale loading=lazy style="width:61%" }

    ![Figura 2](../img/funzioni-07-parte-intera/fig02.svg){ .fig .ovale loading=lazy style="width:61%" }

- Si noti che la mantissa è una funzione periodica di periodo 1:

    ![Figura 3](../img/funzioni-07-parte-intera/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

## 2. Funzioni definite a tratti

- A partire dalle funzioni elementari se ne possono costruire di nuove usando <strong>definizioni analitiche diverse su intervalli diversi</strong>.

<a id="box-defFunzioneMONcre-4"></a>

!!! definizione "Definizione 4: di funzione definita a tratti"

    Una funzione $f$ il cui valore $f (x)$ è calcolato mediante “istruzioni” diverse a seconda dell'intervallo in cui cade la $x$ si chiama <strong>funzione definita a tratti</strong>.

<a id="box-texexpbox1-5"></a>

!!! esempio "Esempio 1: Funzioni definite a tratti"

    Consideriamo ad esempio

    $$
    f(x)=
    \begin{cases}
    \ln x & {\rm if~~} x > 1,\\
    x^2 & {\rm if~~} 0 < x \le 1,\\
    x & {\rm if~~} x \le 0
    \end{cases}
    $$

    il suo grafico è:

    ![Figura 4](../img/funzioni-07-parte-intera/fig04.svg){ .fig .ovale loading=lazy style="width:80%" }

- Dal punto di vista <em>logico</em> / <em>algoritmico</em>, si può dire che una funzione di questo tipo ha la particolarità di essere costruita utilizzando non solo le funzioni matematiche  ma anche la <strong>funzione logica</strong> “se … allora”.
