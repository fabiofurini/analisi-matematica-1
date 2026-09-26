---
title: "Derivate di funzioni elementari"
---

# Derivate di funzioni elementari

<div class="info-capitolo" markdown>

**Parte 4 · Derivate · Capitolo 2** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/derivate-02-derivate-elementari.pdf)

</div>

## 1. Funzioni derivate di funzioni elementari

- Deriveremo nel seguito le funzioni derivate di alcune delle principali funzioni elementari.

<a id="box-theoZERI-1"></a>

!!! osservazione "Osservazione 1"

    Data la funzione $f(x)=c$ con $c \in \R$ costante, la funzione derivata è $f'(x)=0$.

??? dimostrazione "Dimostrazione"

    Abbiamo:

    $$
    \frac{f(x + h) - f(x)}{h} = \frac{c - c}{h} = 0
    $$

    quindi

    $$
    f'(x) = \lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} 0 = 0
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

### 1.1 Funzioni derivate di funzioni potenza

<a id="box-theoZERI-2"></a>

!!! osservazione "Osservazione 2"

    Data la funzione $f(x)=x^n$ con $n \in \N, n \ge 1$, la funzione derivata è $f'(x)=n\;x^{n-1}$.

??? dimostrazione "Dimostrazione"

    Abbiamo dalla formula del binomio di Newton:

    \begin{align*}
    \frac{f(x + h) - f(x)}{h} &= \frac{(x+h)^n-x^n}{h} = \frac{\sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; x^{n-k} \; h^k- x^n}{h} \\[2ex]
    &= \frac{x^n+ n \;x^{n-1} \;h +\sum_{k=2}^{n} ~~{{n}\choose{k}} ~~\; x^{n-k} \; h^k- x^n}{h} \\[2ex]
    &=  n \;x^{n-1} + \frac{ \sum_{k=2}^{n} ~~{{n}\choose{k}} ~~\; x^{n-k} \; h^k}{h}
    \end{align*}

    quindi

    $$
    f'(x) = \lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} n \;x^{n-1} + \underbrace{\frac{ \sum_{k=2}^{n} ~~{{n}\choose{k}} ~~\; x^{n-k} \; h^k}{h}}_{\rr 0} = n \;x^{n-1}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Dimostrazione"

    Con $n=2$, abbiamo:

    $$
    \frac{f(x + h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{x^2 + 2\:x\:h + h^2 - x^2}{h} = 2\:x + h
    $$

    quindi

    $$
    f'(x)= \lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} 2\:x + h = 2\:x
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-theoZERI-3"></a>

!!! osservazione "Osservazione 3"

    Data la funzione $f(x)=x^{\alpha}$ con $\alpha \in \R$, la funzione derivata è $f'(x)=\alpha\;x^{\alpha-1}$ per $x >0$.

??? dimostrazione "Dimostrazione"

    Sia $x >0$. Abbiamo:

    \begin{align*}
    \frac{f(x + h) - f(x)}{h} & =  \frac{(x + h)^{\alpha} - x^{\alpha}}{h} =  \frac{ \left(x \left(1 + \frac{h}{x} \right)\right)^{\alpha} -x^{\alpha}}{h}\\[2ex]
    &= x^{\alpha} \cdot \frac{ \left(1 + \frac{h}{x}\right)^{\alpha} -1}{h} \thicksim x^{\alpha} \cdot \frac{ \alpha \: \frac{h}{x} }{h} = \alpha \: x^{\alpha-1} {\rm ~~per~~} h \rr 0
    \end{align*}

    abbiamo usato il limite notevole

    $$
    \big(1 + \varepsilon(h)\big)^{\alpha} -1 \thicksim \alpha \: \varepsilon (h)  {\rm ~~~per~~~} \varepsilon(h) \rr 0
    $$

    dove

    $$
    \varepsilon (h) = \frac{h}{x}  \rr 0 {\rm ~~per~~} h \rr 0.
    $$

    Quindi

    $$
    f'(x)= \lim_{h \rr 0} ~\frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} ~~\alpha \; x^{\alpha-1} = \alpha \; x^{\alpha-1}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-4"></a>

!!! esempio "Esempio 1: Funzione derivata"

    <div class="tabella" markdown><table>
    <tr>
    <td><span class="arithmatex">\(f(x)=x^{10}\)</span></td>
    <td><span class="arithmatex">\(\qquad\)</span></td>
    <td><span class="arithmatex">\(f'(x)=10\:x^9\)</span></td>
    <td>(per <span class="arithmatex">\(x \in \R\)</span>)</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(f(x)=\frac{1}{x} = x^{-1}\)</span></td>
    <td><span class="arithmatex">\(\qquad\)</span></td>
    <td><span class="arithmatex">\(f'(x)=-\frac{1}{x^2}\)</span></td>
    <td>(per <span class="arithmatex">\(x >0\)</span>)</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(f(x)=\sqrt{x}=x^{\frac{1}{2}}\)</span></td>
    <td><span class="arithmatex">\(\qquad\)</span></td>
    <td><span class="arithmatex">\(f'(x)=\frac{1}{2\:\sqrt{x}}\)</span></td>
    <td>(per <span class="arithmatex">\(x >0\)</span>)</td>
    </tr>
    </table></div>

### 1.2 Funzioni derivate di funzioni trigonometriche elementari

<a id="box-theoZERI-5"></a>

!!! osservazione "Osservazione 4"

    Data la funzione $f(x)=\sin x$, la funzione derivata è $f'(x)=\cos x$.

??? dimostrazione "Dimostrazione"

    Abbiamo utilizzando le formule di addizione:

    \begin{align*}
    \frac{f(x + h) - f(x)}{h} &= \frac{\sin(x + h) - \sin x }{h} = \frac{ \sin x \cos h +\sin h \cos x - \sin x }{h} = \\[2ex]
    & = {\sin x \: \frac{\cos h -1}{h}} + {\frac{\sin h}{h}} \cos x
    \end{align*}

    Usando il limite notevole

    $$
    \frac{1-\cos h}{h^2} \rr \frac{1}{2} {\rm ~~~per~~~} h \rr 0
    $$

    abbiamo

    $$
    \frac{\cos h - 1}{h}  = {h} \cdot \left( \underbrace{-\frac{1 -\cos h}{h^2}}_{\rr -\frac{1}{2} {\rm ~~~per~~~} h \rr 0} \right) \thicksim -\frac{1}{2} \: h  {\rm ~~~per~~~} h \rr 0.
    $$

    Usando il limite notevole

    $$
    \frac{\sin h}{h} \rr 1 {\rm ~~~per~~~} h \rr 0
    $$

    abbiamo

    $$
    {\frac{\sin h}{h}} \cos x \thicksim \cos x  {\rm ~~~per~~~} h \rr 0.
    $$

    Allora

    \begin{align*}
    f'(x) &=\lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} {\sin x \: \frac{\cos h -1}{h}} + {\frac{\sin h}{h}} \cos x  \\[2ex]
      & = \lim_{h \rr 0} \sin x \: \left(-\frac{1}{2} \: h\right) + \cos x = \cos x
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-theoZERI-6"></a>

!!! osservazione "Osservazione 5"

    Data la funzione $f(x)=\cos x$, la funzione derivata è $f'(x)=-\sin x$.

??? dimostrazione "Dimostrazione"

    Abbiamo utilizzando le formule di addizione:

    \begin{align*}
    \frac{f(x + h) - f(x)}{h} &= \frac{\cos(x + h) - \cos x }{h} = \frac{ \cos x \cos h -\sin x \sin h - \cos x }{h} = \\[2ex]
    & = {\cos x \: \frac{\cos h -1}{h}} - {\frac{\sin h}{h}} \sin x
    \end{align*}

    e,  usando i ragionamenti della prova precedente, abbiamo:

    \begin{align*}
    f'(x) &=\lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} {\cos x \: \frac{\cos h -1}{h}} - {\frac{\sin h}{h}} \sin x  \\[2ex]
      & = \lim_{h \rr 0} \cos x \: \left(-\frac{1}{2} \: h\right) - \sin x = -\sin x
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

### 1.3 Funzioni derivate della funzione esponenziale e logaritmica in base $e$

<a id="box-theoZERI-7"></a>

!!! osservazione "Osservazione 6"

    Data la funzione $f(x)=e^x$, la funzione derivata è $f'(x)=e^x$.

??? dimostrazione "Dimostrazione"

    Abbiamo

    $$
    \frac{f(x + h) - f(x)}{h} = \frac{e^{x+h} -e^x } {h} =e^x \cdot \frac{e^h - 1}{h} \thicksim  e^x {\rm ~~per~~} h \rr 0
    $$

    usando il limite notevole

    $$
    \frac{e^h - 1}{h} \rr 1 {\rm ~~per~~} h \rr 0.
    $$

    quindi

    $$
    f'(x)=\lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} e^x = e^x
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-theoZERI-8"></a>

!!! osservazione "Osservazione 7"

    Data la funzione $f(x)=\log x$, la funzione derivata è $f'(x)=\frac{1}{x}$.

??? dimostrazione "Dimostrazione"

    Abbiamo:

    $$
    \frac{f(x + h) - f(x)}{h} = \frac{\log(x+h) - \log x}{h} = \frac{\log\left(1+\frac{h}{x}\right)}{h} \thicksim  \frac{h}{x} \cdot \frac{1}{h} = \frac{1}{x} {\rm ~~per~~} h \rr 0
    $$

    dove abbiamo usato il limite notevole

    $$
    \log(1 + \varepsilon (h)) \thicksim \varepsilon (h) {\rm ~~per~~} \varepsilon (h) \rr 0,
    $$

    e

    $$
    \varepsilon (h) = \frac{h}{x}  \rr 0 {\rm ~~per~~} h \rr 0.
    $$

    quindi

    $$
    f'(x) =\lim_{h \rr 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \rr 0} \frac{1}{x} = \frac{1}{x}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-9"></a>

!!! esempio "Esempio 2: Retta tangente"

    Calcoliamo l'equazione della retta tangente al grafico della funzione

    $$
    f(x) = e^x {\rm ~~nel~punto~di~ascissa~~} x = 2
    $$

    Abbiamo $f(2)=e^2,~f'(x)=e^x,~ f'(2)=e^2$, quindi la retta tangente nel punto $(2,e^2)$ è:

    $$
    y = f(2) + f'(2)(x - 2) = e^2 + e^2 \; (x - 2)
    $$

    ![Figura 1](../img/derivate-02-derivate-elementari/fig01.svg){ .fig .ovale loading=lazy style="width:82%" }

<a id="box-texexpbox1-10"></a>

!!! esempio "Esempio 3: Retta tangente"

    Calcoliamo l'equazione della retta tangente al grafico della funzione

    $$
    f(x) = x^3 {\rm ~~nel~punto~di~ascissa~~} x = 2
    $$

    Abbiamo $f(2)=8,~f'(x)=3\:x^2,~ f'(2)=12$, quindi la retta tangente nel punto $(2,8)$ è:

    $$
    y = f(2) + f'(2)(x - 2) = 8 + 12\: (x - 2)
    $$

    ![Figura 2](../img/derivate-02-derivate-elementari/fig02.svg){ .fig .ovale loading=lazy style="width:82%" }
