---
title: "Funzioni trigonometriche"
---

# Funzioni trigonometriche

<div class="info-capitolo" markdown>

**Parte 2 · Funzioni · Capitolo 5** · dalle dispense di Fabio Furini · [:material-file-pdf-box: PDF del capitolo](../pdf/funzioni-05-trigonometriche.pdf)

</div>

## 1. Funzioni trigonometriche

<a id="box-defXX-1"></a>

!!! definizione "Definizione 1: funzione seno e funzione coseno"

    Le funzioni trigonometriche:

    \begin{align}
    \label{seno}  f: \mathbb{R} \rightarrow \mathbb{R},~~~ f: x \mapsto \sin x \\[2ex] 
     \label{coseno}
    f: \mathbb{R} \rightarrow \mathbb{R},~~~ f: x \mapsto \cos x
    \end{align}

    si chiamano <strong>seno</strong> e <strong>coseno</strong>.

- Il seno è una funzione <strong>dispari</strong> mentre il coseno è una funzione <strong>pari</strong>. Abbiamo quindi:

    $$
    \sin(-x)=-\sin x, ~~~\forall x \in \R {\rm ~~~~e~~~~} \cos(-x)=\cos x, ~~~\forall x \in \R
    $$

- Il seno e il coseno sono funzioni periodiche di periodo:

    $$
    T=2\: \pi {\rm ~~~~e~abbiamo~la~relazione~fondamentale~~~} \sin^2 x + \cos^2 x = 1,~~ \forall x \in \mathbb{R}
    $$

    ![Figura 1](../img/funzioni-05-trigonometriche/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

    Abbiamo

    $$
    \cos\left(x -\frac{\pi}{2}\right) = \sin x,~~ \forall x \in \mathbb{R}
    $$

- Per la positività e monotonicità della funzione seno abbiamo:

    $$
    \sin x = 0 \Longleftrightarrow x= k\;\pi,~ \forall k \in \Z \qquad 
    \begin{cases}
    \sin x > 0 & {\rm se~~~}  x \in (2\;k\;\pi~,~ 2\;k\;\pi + \pi),~ \forall k \in \Z    \\[3ex]
    \sin x < 0 & {\rm se~~~}  x \in (2\;k\;\pi-\pi~,~ 2\;k\;\pi),~ \forall k \in \Z    
    \end{cases}
    $$

    $$
    \begin{cases}
    {\rm se~~~}  x \in (2\;k\;\pi- \frac{\pi}{2},~ 2\;k\;\pi + \frac{\pi}{2}),~ \forall k \in \Z   & f {\rm ~~è~crescente}  \\[3ex]
    {\rm se~~~}  x \in (2\;k\;\pi+ \frac{\pi}{2}~,~ 2\;k\;\pi + \frac{3\;\pi}{2}),~ \forall k \in \Z   & f {\rm ~~è~decrescente}    
    \end{cases}
    $$

- Per la positività e monotonicità della funzione coseno abbiamo:

    $$
    \cos x = 0 \Longleftrightarrow x= k\;\pi-\frac{\pi}{2},~ \forall k \in \Z \qquad 
    \begin{cases}
    \cos x > 0 & {\rm se~~~}  x \in (2\;k\;\pi~-\frac{\pi}{2},~ 2\;k\;\pi + \frac{\pi}{2}),~ \forall k \in \Z    \\[3ex]
    \cos x < 0 & {\rm se~~~}  x \in (2\;k\;\pi+\frac{\pi}{2}~,~ 2\;k\;\pi +\frac{3\;\pi}{2}),~ \forall k \in \Z    
    \end{cases}
    $$

    $$
    \begin{cases}
    {\rm se~~~}  x \in (2\;k\;\pi+ \pi,~ 2\;k\;\pi + 2\; \pi),~ \forall k \in \Z   & f {\rm ~~è~crescente}  \\[3ex]
    {\rm se~~~}  x \in (2\;k\;\pi ~,~ 2\;k\;\pi + \pi),~ \forall k \in \Z   & f {\rm ~~è~decrescente}    
    \end{cases}
    $$

!!! chiave ""

    Le funzioni  trigonometriche:

    \begin{align}
    \label{tangente} f: \mathbb{R} \setminus \{k\;\pi-\frac{\pi}{2},~ \forall k \in \Z\}  \rightarrow \mathbb{R},~~~ f: x \mapsto \tan x = \frac{\sin x}{\cos x} \\[2ex] 
     \label{cotangente}
    f: \mathbb{R}\setminus \{k\;\pi,~ \forall k \in \Z\}  \rightarrow \mathbb{R},~~~ f: x \mapsto \cot x = \frac{\cos x}{\sin x}
    \end{align}

    si chiamano <strong>tangente</strong> e <strong>cotangente</strong> e sono entrambe dispari e periodiche di periodo $T=\pi$.

![Figura 2](../img/funzioni-05-trigonometriche/fig02.svg){ .fig .ovale loading=lazy style="width:60%" }

![Figura 3](../img/funzioni-05-trigonometriche/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    Le funzioni  trigonometriche:

    \begin{align}
    \label{secante} f: \mathbb{R} \setminus \{k\;\pi-\frac{\pi}{2},~ \forall k \in \Z\}  \rightarrow \mathbb{R},~~~ f: x \mapsto \sec x = \frac{1}{\cos x} \\[2ex] 
     \label{cosecante}
    f: \mathbb{R}\setminus \{k\;\pi,~ \forall k \in \Z\}  \rightarrow \mathbb{R},~~~ f: x \mapsto \csc x = \frac{1}{\sin x}
    \end{align}

    si chiamano <strong>secante</strong> e <strong>cosecante</strong> e sono periodiche di periodo $T=2\;\pi$. La funzione secante è pari mentre la funzione cosecante è dispari.

![Figura 4](../img/funzioni-05-trigonometriche/fig04.svg){ .fig .ovale loading=lazy style="width:80%" }

## 2. Valori delle funzioni trigonometriche

<div class="tabella" markdown><table>
<tr>
<td></td>
<td><span class="arithmatex">\(\cos\)</span></td>
<td><span class="arithmatex">\(\sin\)</span></td>
<td><span class="arithmatex">\(\tan\)</span></td>
<td><span class="arithmatex">\(\cot\)</span></td>
<td><span class="arithmatex">\(\sec\)</span></td>
<td><span class="arithmatex">\(\csc\)</span></td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
<td>1</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(x=\frac{\pi}{6}\)</span> (<span class="arithmatex">\(30^{\circ}\)</span>)</td>
<td><span class="arithmatex">\(\frac{\sqrt{3}}{2}\)</span></td>
<td><span class="arithmatex">\(\frac{1}{2}\)</span></td>
<td><span class="arithmatex">\(\frac{\sqrt{3}}{3}\)</span></td>
<td><span class="arithmatex">\(\sqrt{3}\)</span></td>
<td><span class="arithmatex">\(\frac{2}{3}\:\sqrt{3}\)</span></td>
<td>2</td>
</tr>
<tr>
<td><span class="arithmatex">\(x=\frac{\pi}{4}\)</span> (<span class="arithmatex">\(45^{\circ}\)</span>)</td>
<td><span class="arithmatex">\(\frac{\sqrt{2}}{2}\)</span></td>
<td><span class="arithmatex">\(\frac{\sqrt{2}}{2}\)</span></td>
<td>1</td>
<td>1</td>
<td><span class="arithmatex">\(\sqrt{2}\)</span></td>
<td><span class="arithmatex">\(\sqrt{2}\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(x=\frac{\pi}{3}\)</span> (<span class="arithmatex">\(60^{\circ}\)</span>)</td>
<td><span class="arithmatex">\(\frac{1}{2}\)</span></td>
<td><span class="arithmatex">\(\frac{\sqrt{3}}{2}\)</span></td>
<td><span class="arithmatex">\(\sqrt{3}\)</span></td>
<td><span class="arithmatex">\(\frac{\sqrt{3}}{3}\)</span></td>
<td>2</td>
<td><span class="arithmatex">\(\frac{2}{3}\: \sqrt{3}\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(x=\frac{\pi}{2}\)</span> (<span class="arithmatex">\(90^{\circ}\)</span>)</td>
<td>0</td>
<td>1</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
<td>0</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
<td>1</td>
</tr>
<tr>
<td><span class="arithmatex">\(x=\pi\)</span> (<span class="arithmatex">\(180^{\circ}\)</span>)</td>
<td>\-1</td>
<td>0</td>
<td>0</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
<td>\-1</td>
<td><span class="arithmatex">\(\pm \infty\)</span></td>
</tr>
</table></div>

![Figura 5](../img/funzioni-05-trigonometriche/fig05.svg){ .fig .ovale loading=lazy style="width:68%" }

<div class="tabella" markdown><table>
<tr>
<td></td>
<td><span class="arithmatex">\(\phantom{-} \cos\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \sin\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \tan\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cot\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\phantom{-}x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cos x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \sin x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \tan x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cot x\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(-x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cos x\)</span></td>
<td><span class="arithmatex">\(- \sin x\)</span></td>
<td><span class="arithmatex">\(-\tan x\)</span></td>
<td><span class="arithmatex">\(-\cot x\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\frac{\pi}{2} +x\)</span></td>
<td><span class="arithmatex">\(-\sin x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cos x\)</span></td>
<td><span class="arithmatex">\(-\cot x\)</span></td>
<td><span class="arithmatex">\(-\tan x\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\frac{\pi}{2} - x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \sin x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cos x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cot  x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \tan x\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\pi+x\)</span></td>
<td><span class="arithmatex">\(-\cos x\)</span></td>
<td><span class="arithmatex">\(-\sin x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \tan x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \cot x\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(\pi-x\)</span></td>
<td><span class="arithmatex">\(-\cos x\)</span></td>
<td><span class="arithmatex">\(\phantom{-} \sin x\)</span></td>
<td><span class="arithmatex">\(-\tan x\)</span></td>
<td><span class="arithmatex">\(-\cot x\)</span></td>
</tr>
</table></div>

## 3. Principali formule trigonometriche

<strong>Interdipendenze fra le funzioni trigonometriche</strong>

!!! chiave ""

    <div class="tabella" markdown><table>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(\sin x\)</span></td>
    <td><span class="arithmatex">\(\cos x\)</span></td>
    <td><span class="arithmatex">\(\tan x\)</span></td>
    <td><span class="arithmatex">\(\cot x\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\sin x\)</span></td>
    <td>\-</td>
    <td><span class="arithmatex">\(\pm \sqrt{1 - \cos^2 x}\)</span></td>
    <td><span class="arithmatex">\(\pm \sqrt{\frac{\tan^2 x}{1 + \tan^2 x}}\)</span></td>
    <td><span class="arithmatex">\(\pm \sqrt{\frac{1}{1 + \cot^2 x}}\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\cos x\)</span></td>
    <td><span class="arithmatex">\(\pm \sqrt{1 - \sin^2 x}\)</span></td>
    <td>\-</td>
    <td><span class="arithmatex">\(\pm \sqrt{\frac{1}{1 + \tan^2 x}}\)</span></td>
    <td><span class="arithmatex">\(\pm \sqrt{\frac{\cot^2 x}{1 + \cot^2 x}}\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\tan x\)</span></td>
    <td><span class="arithmatex">\(\pm\sqrt{\frac{\sin^2 x}{1 - \sin^2 x}}\)</span></td>
    <td><span class="arithmatex">\(\pm\sqrt{\frac{1- \cos^2 x}{\cos^2 x}}\)</span></td>
    <td>\-</td>
    <td><span class="arithmatex">\(\frac{1}{\cot x}\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(\cot x\)</span></td>
    <td><span class="arithmatex">\(\pm\sqrt{\frac{1- \sin^2 x}{\sin^2 x}}\)</span></td>
    <td><span class="arithmatex">\(\pm\sqrt{\frac{\cos^2 x}{1 - \cos^2 x}}\)</span></td>
    <td><span class="arithmatex">\(\frac{1}{\tan x}\)</span></td>
    <td>\-</td>
    </tr>
    </table></div>

    Dove il simbolo $\pm$ significa che il segno dipende dal quadrante in cui si trova $x$

<strong>Addizione e sottrazione</strong>

!!! chiave ""

    \begin{align}
    \label{trig:add}
    \sin ( x_1 \pm x_2)  &= \sin x_1 \: \cos x_2 \pm \sin x_2 \: \cos x_1\\[2ex]
    \cos ( x_1 \pm x_2)  &= \cos x_1 \: \cos x_2 \mp \sin x_1 \: \sin x_2
    \end{align}

!!! chiave ""

    \begin{align}
    \tan ( x_1 \pm x_2)  &= \frac{\tan x_1 \pm \tan x_2}{1 \mp \tan x_1 \: \tan x_2}\\[2ex]
    \cot ( x_1 \pm x_2)  &= \frac{\cot x_1 \: \cot x_2 \mp 1}{\cot x_2 \pm \cot x_1}
    \end{align}

<strong>Duplicazione</strong>

!!! chiave ""

    \begin{align}
    \sin ( 2\: x)  &= 2\: \sin x \: \cos x \\[2ex]
    \cos ( 2\: x)  &= \cos^2 x - \sin^2 x \nonumber\\[2ex]
                        &= 2\: \cos^2 x - 1 \nonumber\\[2ex]
                        &= 1 - 2\: \sin^2 x
    \end{align}

!!! chiave ""

    \begin{align}
    \tan ( 2\: x)  &= \frac{2 \:\tan x}{1 - \tan^2 x}\\[2ex]
    \cot ( 2\: x)  &= \frac{\cot^2 x -1}{2\: \cot x}
    \end{align}

<strong>Triplicazione</strong>

!!! chiave ""

    \begin{align}
    \sin ( 3\: x)  &= 3\: \sin x - 4\: \sin^3 x \\[2ex]
    \cos ( 3\: x)  &= 4\: \cos^3 x - 3\: \cos x
    \end{align}

<strong>Bisezione</strong>

!!! chiave ""

    \begin{align}
    \sin  \frac{x}{2}  &= \pm \sqrt{\frac{1 - \cos x}{2}}\\[2ex]
    \cos  \frac{x}{2}  &= \pm \sqrt{\frac{1 + \cos x}{2}}
    \end{align}

!!! chiave ""

    \begin{align}
    \tan  \frac{x}{2}  &= \pm \sqrt{\frac{1 - \cos x}{1 + \cos x}} \nonumber\\[2ex]
        &= \frac{\sin x}{1 + \cos x} \nonumber\\[2ex]
        &= \frac{1 - \cos x}{\sin x}
    \end{align}

!!! chiave ""

    \begin{align}
    \cot  \frac{x}{2}  &= \pm \sqrt{\frac{1 + \cos x}{1 - \cos x}} \nonumber\\[2ex]
        &= \frac{\sin x}{1 - \cos x} \nonumber\\[2ex]
        &= \frac{1 + \cos x}{\sin x}
    \end{align}

<strong>Formule parametriche</strong>

!!! chiave ""

    \begin{align}
    \sin {x}  &= \frac{2\: \tan \frac{{x}}{2}}{1+ \tan^2 \frac{{x}}{2}}\\[2ex]
    \cos {x}  &= \frac{1- \tan^2 \frac{{x}}{2}}{1+ \tan^2 \frac{{x}}{2}}
    \end{align}

<strong>Formule di prostaferesi</strong>

!!! chiave ""

    \begin{align}
    \sin  {x_1} + \sin {x_2}  &= \phantom{-} 2\: \sin \frac{x_1 + x_2}{2} \: \cos \frac{x_1 - x_2}{2}\\[2ex]
    \sin  {x_1} - \sin {x_2}  &= \phantom{-}2\: \sin \frac{x_1 - x_2}{2} \: \cos \frac{x_1 + x_2}{2}\\[2ex]
    \cos  {x_1} + \cos {x_2}  &= \phantom{-}2\: \cos \frac{x_1 + x_2}{2} \: \cos \frac{x_1 - x_2}{2}\\[2ex]
    \cos  {x_1} - \cos {x_2}  &= - 2\: \sin \frac{x_1 + x_2}{2} \: \sin \frac{x_1 - x_2}{2}
    \end{align}

<strong>Formule di Werner</strong>

!!! chiave ""

    \begin{align}
    \sin  {x_1} \: \sin {x_2}  &= \frac{1}{2} \bigg(\cos(x_1-x_2) - \cos(x_1 +x_2) \bigg)\\[2ex]
    \sin  {x_1} \: \cos {x_2}  &= \frac{1}{2} \bigg(\sin(x_1-x_2) + \sin(x_1 +x_2) \bigg)\\[2ex]
    \cos  {x_1} \: \cos {x_2}  &= \frac{1}{2} \bigg(\cos(x_1-x_2) + \cos(x_1 +x_2) \bigg)
    \end{align}

<strong>Formule aggiuntive</strong>

!!! chiave ""

    \begin{align}
    \sin^2 x  &= \frac{1 - \cos (2\:x)}{2}\\[2ex]
    \cos^2 x  &= \frac{1 + \cos (2\:x)}{2}\\[2ex]
    \sin  x \:\cos x  &= \frac{\sin (2\:x)}{2}
    \end{align}
