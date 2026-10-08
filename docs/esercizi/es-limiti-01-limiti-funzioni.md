---
title: "Limiti di funzioni reali di variabile reale"
---

# Limiti di funzioni reali di variabile reale

<div class="info-capitolo" markdown>

**Esercizi · Limiti di funzioni** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-3-limiti.pdf)

</div>

!!! esercizio "Esercizio 1"

    Da $e^{x}=1+x+o(x)$, $x\to0$, dedurre che

    $$
    \sinh(x)=x+o(x), \ x\to0.
    $$

??? soluzione "Soluzione"

    Per $x\to0$, abbiamo $e^{-x}=1-x+o(x)$ quindi

    $$
    \sinh x=\frac{e^{x}-e^{-x}}{2}=\frac{1}{2}\bigg( \big(1+x+o(x) \big)- \big(1-x+o(x)\big )\bigg)=x+o(x).
    $$

!!! esercizio "Esercizio 2"

    Utilizzando $\cosh^{2}x-1=\sinh^{2}x$ e l'esercizio precedente provare che

    $$
    \lim_{x\to0}\frac{\cosh x-1}{x^{2}}=\frac{1}{2}
    $$

    e dedurne

    $$
    \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}), \ x\to0.
    $$

??? soluzione "Soluzione"

    Dall'esercizio precedente abbiamo $\sinh^{2} x\sim x^{2}$ per $x\to0$ e inoltre $\cosh 0 =1$ quindi

    $$
    \lim_{x\to0}\frac{\cosh x-1}{x^{2}}\cdot\frac{\cosh x+1}{\cosh x+1}= \lim_{x\to0}\frac{\cosh^{2}x-1}{x^{2}} \cdot \underbrace{\lim_{x\to0} \frac{1}{\cosh x+1}}_{\rr \frac{1}{2}} =
    $$

    $$
    =\frac{1}{2} \: \lim_{x\to0}\frac{\sinh^{2} x}{x^{2}}=\frac{1}{2}\:\lim_{x\to0}\frac{x^{2}}{x^{2}}=\frac{1}{2}.
    $$

    Inoltre

    $$
    \left( \lim_{x\to0}\frac{\cosh x-1}{x^{2}} \right) - \frac{1}{2} =\lim_{x\to0}\frac{\cosh x-1-\frac{1}{2}x^{2}}{x^{2}}=0
    $$

    che significa

    $$
    \cosh x-1-\frac{1}{2}x^{2}=o(x^{2}),
    $$

    $$
    \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}),\ \ \ x\to0.
    $$

!!! esercizio "Esercizio 3"

    Precisare l'equivalenza

    $$
    \log(x^{2}+1)\sim2\log x, \ x\to+\infty
    $$

    dimostrando che

    $$
    \log(x^{2}+1)=2\log x+\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right), \ x\to+\infty.
    $$

??? soluzione "Soluzione"

    $$
    \log(x^{2}+1)=\log\left(x^{2}\left(1+\frac{1}{x^{2}}\right)\right)=\log x^{2}+\log\left(1+\frac{1}{x^{2}}\right).
    $$

    Ora

    $$
    1/x^{2}\to0 {\rm ~~per~~} x\to+\infty
    $$

    e

    $$
    \log(1+y)=y+o(y) {\rm ~~per~~} y\to0,
    $$

    quindi

    $$
    \log(x^{2}+1)=2\log x+\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right), \ x\to+\infty.
    $$

!!! esercizio "Esercizio 4"

    Calcolare il seguente limite di funzioni di variabile reale:

    $$
    \lim_{x\to+\infty}\log x-\sqrt{x}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to+\infty}\log x-\sqrt{x}=\lim_{x\to+\infty}-\sqrt{x}=-\infty.
    $$

!!! esercizio "Esercizio 5"

    Calcolare il seguente limite di funzioni di variabile reale:

    $$
    \lim_{x\to+\infty}2^{x}-x^{2}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to+\infty}2^{x}-x^{2}=\lim_{x\to+\infty}2^{x}=+\infty.
    $$

!!! esercizio "Esercizio 6"

    Calcolare il seguente limite di funzioni di variabile reale:

    $$
    \lim_{x\to+\infty}\frac{\log(x^{2}+1)}{2^{x}}
    $$

??? soluzione "Soluzione"

    Usiamo  l'equivalenza $\log(x^{2}+1)\sim 2\log x$ per $x\to+\infty$:

    $$
    \lim_{x\to+\infty}\frac{\log(x^{2}+1)}{2^{x}}=\lim_{x\to+\infty}\frac{2\log x}{2^{x}}=0.
    $$

!!! esercizio "Esercizio 7"

    Calcolare il seguente limite di funzioni di variabile reale:

    $$
    \lim_{x\to+\infty}\left(\frac{x+2}{x+1}\right)^{x}
    $$

??? soluzione "Soluzione"

    Usiamo il limite notevole

    $$
    \lim_{x\to\pm\infty}\left(1+\frac{1}{x}\right)^{x}=e.
    $$

    $$
    \lim_{x\to+\infty}\left(\frac{x+2}{x+1}\right)^{x}=\lim_{x\to+\infty}\left[\left(1+\frac{1}{x+1}\right)^{x+1}\right]^{\frac{x}{x+1}}
    =e^{1}=e.
    $$

!!! esercizio "Esercizio 8"

    Calcolare il seguente limite di funzioni di variabile reale:

    $$
    \lim_{x\to0^{+}}x^{\log x}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    x^{\log x} = e^{\log x^{\log x}} = e^{\log x \: \log x},
    $$

    quindi

    $$
    \lim_{x\to0^{+}}x^{\log x} = \lim_{x\to0^{+}} e^{ \overbrace{\log x}^{\rr \im} \: \overbrace{\log x}^{\rr \im}} =  e^{\ip} = +\infty.
    $$

    Inoltre, la base $x$ tende a $0$, l'esponente $\log x$ tende a $-\infty$ quindi il limite non è in forma indeterminata:

    $$
    \lim_{x\to0^{+}}x^{\log x} = 0^{\im} = \ip
    $$

!!! esercizio "Esercizio 9"

    Sia

    $$
    \lim_{x\to+\infty}x\left(\log(x+2)-\log x\right)=L.
    $$

    - **(a)** $L=2$

    - **(b)** $L$ non esiste

    - **(c)** $L=1$

    - **(d)** Nessuna delle altre risposte è corretta.

??? soluzione "Soluzione"

    $$
    \lim_{x\to+\infty}x\left(\log(x+2)-\log x\right)=\lim_{x\to+\infty}x\log\left(1+\frac{2}{x}\right)=
    \lim_{x\to+\infty}x\cdot\frac{2}{x}=2.
    $$

    La risposta corretta è (a).

!!! esercizio "Esercizio 10"

    Calcolare il seguente limite di quoziente utilizzando funzioni potenza equivalenti per ciascun termine:

    $$
    \lim_{x\to0}\frac{e^{x}-1}{\sin x}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to0}\frac{e^{x}-1}{\sin x}=\lim_{x\to0}\frac{x}{x}=1.
    $$

!!! esercizio "Esercizio 11"

    Calcolare il seguente limite di quoziente utilizzando funzioni potenza equivalenti per ciascun termine:

    $$
    \lim_{x\to0}\frac{1-\cos x}{\sin^{2} x}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to0} \frac{1 -\cos x}{x^2} = \frac{1}{2} {\rm ~~quindi~~} 1 -\cos x \thicksim \frac{1}{2} \: x^2 {\rm ~~per~~} x \rr 0.
    $$

    Inoltre  abbiamo

    $$
    \sin x \thicksim x {\rm ~~per~~} x \rr 0 {\rm ~~quindi~~} (\sin x)^2 \thicksim x^2 {\rm ~~per~~} x \rr 0.
    $$

    Abbiamo allora:

    $$
    \lim_{x\to0}\frac{1-\cos x}{\sin^{2} x}=\lim_{x\to0}\frac{\frac{1}{2}x^{2}}{x^{2}}=\frac{1}{2}
    $$

!!! esercizio "Esercizio 12"

    Calcolare il seguente limite di quoziente utilizzando funzioni potenza equivalenti per ciascun termine:

    $$
    \lim_{x\to0}\frac{\sin3x}{\sin4x}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to0}\frac{\sin3x}{\sin4x}=\lim_{x\to0}\frac{3x}{4x}=\frac{3}{4}
    $$

!!! esercizio "Esercizio 13"

    Calcolare il seguente limite di quoziente utilizzando funzioni potenza equivalenti per ciascun termine:

    $$
    \lim_{x\to0}\frac{(1-e^{2x})^{2}}{1-\cos5x}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to0}\frac{(1-e^{2x})^{2}}{1-\cos5x}=\lim_{x\to0}\frac{(-2x)^{2}}{\frac{1}{2}(5x)^{2}}=\frac{8}{25}
    $$

!!! esercizio "Esercizio 14"

    Calcolare il seguente limite di quoziente utilizzando funzioni potenza equivalenti per ciascun termine:

    $$
    \lim_{x\to0}\frac{\sin x^{3}}{(1-e^{x})^{3}}
    $$

??? soluzione "Soluzione"

    $$
    \lim_{x\to0}\frac{\sin x^{3}}{(1-e^{x})^{3}}=\lim_{x\to0}\frac{x^{3}}{(-x)^{3}}=-1.
    $$

!!! esercizio "Esercizio 15"

    Calcolare

    $$
    \lim_{x\to0}x^{2}e^{\frac{\sqrt{\pi}}{x}\sin(x\log7)}
    $$

??? soluzione "Soluzione"

    Analizziamo l'esponente utilizzando l'equivalenza $\sin(x\log7)\sim x\log7$ per $x\to0$:

    $$
    \lim_{x\to0}\frac{\sqrt{\pi}}{x}\sin(x\log7)=\lim_{x\to0}\frac{\sqrt{\pi}}{x}\cdot x\log7=\sqrt{\pi}\log7.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0}x^{2}e^{\frac{\sqrt{\pi}}{x}\sin(x\log7)}=0\cdot e^{\sqrt{\pi}\log7}=0\cdot7^{\sqrt{\pi}}=0.
    $$

!!! esercizio "Esercizio 16"

    Calcolare

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)
    $$

??? soluzione "Soluzione"

    Utilizzando

    $$
    \lim_{x\to0^{+}}\sin x\log x=\lim_{x\to0^{+}}x\log x=0,
    $$

    abbiamo

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)=\lim_{x\to0^{+}}\frac{1+\sin x\log x}{\sin x}=+\infty
    $$

    in quanto il numeratore $1+\sin x\log x$ tende a $1$ mentre il denominatore $\sin x$ è una funzione positiva che tende a $0$.

    In maniera equivalente, sempre da

    $$
    \lim_{x\to0^{+}}\frac{\log x}{\frac{1}{\sin x}}=\lim_{x\to0^{+}}\sin x\log x=\lim_{x\to0^{+}}x\log x=0,
    $$

    abbiamo che $1/\sin x$ è infinito di ordine superiore rispetto a $\log x$ per $x\to0^{+}$, quindi

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)=\lim_{x\to0^{+}}\frac{1}{\sin x}=+\infty.
    $$

    Dimostriamo anche che

    $$
    \lim_{x \rr 0^+} x \: \log x = 0
    $$

    Facciamo un cambio di variabile $x= \frac{1}{y}$ quindi

    $$
    \lim_{x \rr 0^+} x \: \log x = \lim_{y \rr \ip} \frac{1}{y} \: \log \frac{1}{y} = \lim_{y \rr \ip} \frac{- \log y}{y} = 0
    $$

!!! esercizio "Esercizio 17"

    Calcolare

    $$
    \lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}
    $$

??? soluzione "Soluzione"

    Da

    $$
    1-\cos x\sim\frac{1}{2}x^{2},\ \sin x\sim x,\ \ x\to0,
    $$

    abbiamo

    $$
    \begin{array}{l} \lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{(1-\cos x)^{3}}{x^{6}}-
    \lim_{x\to0}\frac{\sin x^{6}}{x^{6}}=\\
    \\
    =\lim_{x\to0}\frac{\frac{1}{8}x^{6}}{x^{6}}-\lim_{x\to0} \frac{x^{6}}{x^{6}}=\frac{1}{8}-1=-\frac{7}{8}.\end{array}
    $$

    In maniera equivalente, usando il calcolo dei simboli di Landau, da

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ \sin x=x+o(x),\ \ x\to0,
    $$

    abbiamo

    $$
    \begin{array}{l}\lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{\frac{1}{8}x^{6}- x^{6}+o(x^{6})}{x^{6}}=\\
    \\
    \lim_{x\to0}\frac{-\frac{7}{8}x^{6}+o(x^{6})}{x^{6}}=\lim_{x\to0}\frac{-\frac{7}{8}x^{6}}{x^{6}}=-\frac{7}{8}.\end{array}
    $$

!!! esercizio "Esercizio 18"

    Calcolare

    $$
    \lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}
    $$

??? soluzione "Soluzione"

    Da

    $$
    1-\cos x\sim\frac{1}{2}x^{2},\ \sin x\sim x,\ \ x\to0,
    $$

    abbiamo

    $$
    \begin{array}{l}\lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{8(1-\cos x)^{3}}{x^{6}}-
    \lim_{x\to0}\frac{\sin x^{6}}{x^{6}}=\\
    \\
    =\lim_{x\to0}\frac{x^{6}}{x^{6}}-\lim_{x\to0} \frac{x^{6}}{x^{6}}=1-1=0.\end{array}
    $$

    In maniera equivalente, usando il calcolo dei simboli di Landau, da

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ \sin x=x+o(x),\ \ x\to0,
    $$

    abbiamo

    $$
    \begin{array}{l}\lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{x^{6}- x^{6}+o(x^{6})}{x^{6}}=\\
    \\
    \lim_{x\to0}\frac{o(x^{6})}{x^{6}}=0\end{array}
    $$

    in quanto il numeratore $o(x^{6})$, per definizione stessa del simbolo di Landau, è infinitesimo di ordine superiore al denominatore $x^{6}$.

!!! chiave ""

    Abbiamo gli sviluppi asintotici per $x\to 0$:

    $$
    \begin{array}{l}\sin x=x+o(x),\ \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ e^{x}=1+x+o(x),\\
    \\
    \sinh x=x+o(x),\ \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}).\end{array}
    $$

!!! esercizio "Esercizio 19"

    Calcolare i seguenti limiti utilizzando il confronto tra infinitesimi

    $$
    \lim_{x\to0}\frac{(\sin x)^{2}+x}{x^{3}-\sin x}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{(\sin x)^{2}+x}{x^{3}-\sin x}=\lim_{x\to0}\frac{(x+o(x))^{2}+x}{x^{3}-x+o(x)}=\\
    \\
    =\lim_{x\to0}\frac{x^{2}+o(x^{2})+x}{x^{3}-x+o(x)}=
    \lim_{x\to0}\frac{x+o(x)}{-x+o(x)}=\lim_{x\to0}\frac{x}{-x}=-1.\end{array}
    $$

!!! esercizio "Esercizio 20"

    Calcolare i seguenti limiti utilizzando il confronto tra infinitesimi

    $$
    \lim_{x\to0}\frac{|1-\cos x+\sin x|}{(e^{x}-1)^{2}}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{|1-\cos x+\sin x|}{(e^{x}-1)^{2}}=\lim_{x\to0}\frac{|\frac{1}{2}x^{2}+o(x^{2})+x+o(x)|}{(x+o(x))^{2}}=\\
    \\
    \lim_{x\to0}\frac{|x+o(x)|}{x^{2}+o(x^{2})}=\lim_{x\to0}\frac{|x|}{x^{2}}=\lim_{x\to0}\frac{1}{|x|}=+\infty.\end{array}
    $$

!!! esercizio "Esercizio 21"

    Calcolare i seguenti limiti utilizzando il confronto tra infinitesimi

    $$
    \lim_{x\to0}\frac{\sin2x-\sin^{2}x}{e^{x}-1}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin2x-\sin^{2}x}{e^{x}-1}=\lim_{x\to0}\frac{2x+o(x)-(x+o(x))^{2}}{x+o(x)}=\\
    \\
    = \lim_{x\to0}\frac{2x+o(x)-x^{2}+o(x^{2})}{x+o(x)}=\lim_{x\to0}\frac{2x+o(x)}{x+o(x)}=\lim_{x\to0}\frac{2x}{x}=2.\end{array}
    $$

!!! esercizio "Esercizio 22"

    Calcolare i seguenti limiti utilizzando il confronto tra infinitesimi

    $$
    \lim_{x\to0}\frac{\sin^{3}x-\sin4x}{\cosh x-1+x}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin^{3}x-\sin4x}{\cosh x-1+x}=\lim_{x\to0}\frac{(x+o(x))^{3}-4x+o(x)}{\frac{1}{2}x^{2}+o(x^{2})+x}=\\
    \\
    =\lim_{x\to0}\frac{x^{3}+o(x^{3})-4x+o(x)}{x+o(x)}=
    \lim_{x\to0}\frac{-4x+o(x)}{x+o(x)}=\lim_{x\to0}\frac{-4x}{x}=-4.\end{array}
    $$

!!! esercizio "Esercizio 23"

    Calcolare i seguenti limiti utilizzando il confronto tra infinitesimi

    $$
    \lim_{x\to0}\frac{\sin x-\sin x^{2}}{\sinh(2x)-\sinh(2x)^{2}}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin x-\sin x^{2}}{\sinh(2x)-\sinh(2x)^{2}}=
    \lim_{x\to0}\frac{x+o(x)-x^{2}+o(x^{2})}{2x+o(x)-(2x+o(x))^{2}}=\\
    \\
    =\lim_{x\to0}\frac{x+o(x)}{2x+o(x)-4x^{2}+o(x^{2})}=
    \lim_{x\to0}\frac{x+o(x)}{2x+o(x)}=\lim_{x\to0}\frac{x}{2x}=\frac{1}{2}.\end{array}
    $$

!!! esercizio "Esercizio 24"

    Calcolare

    $$
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x^{2}-1}}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x^{2}-1}}=
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x-1}\sqrt{x+1}}=
    \frac{1}{\sqrt{2}}\lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x-1}}.
    $$

    Ponendo $y=\sqrt{x-1}$ il limite diventa

    $$
    \frac{1}{\sqrt{2}}\lim_{y\to0^{+}}\frac{\log(1+y)}{y}=\frac{1}{\sqrt{2}}
    $$

    per il limite notevole

    $$
    \lim_{y\to0}\frac{\log(1+y)}{y}=1.
    $$

!!! esercizio "Esercizio 25"

    Calcolare

    $$
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \begin{split}
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})} =
    \lim_{x\to+\infty}\left(\frac{x+3}{x-5}\right)^{(x+\log{x})} &=
    \lim_{x\to+\infty}\left(1+\frac{8}{x-5}\right)^{(x+\log{x})} \\  &=
    \lim_{x\to+\infty}\left(1+\frac{1}{\frac{x-5}{8}}\right)^{(x+\log{x})}
    \end{split}
    $$

    Usando il limite notevole

    $$
    \lim_{x\to\pm\infty}\left(1+\frac{1}{x}\right)^{x}=e
    $$

    otteniamo

    $$
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})} = \lim_{x\to+\infty}\left[\left(1+\frac{1}{\frac{x-5}{8}}\right)^{\frac{x-5}{8}}\right]^{\frac{8(x+\log{x})}{x-5}}=e^8
    $$

    in quanto

    $$
    \frac{8(x+\log{x})}{x-5} \sim \frac{8x}{x-5} \xrightarrow[]{x\to+\infty}8.
    $$

!!! esercizio "Esercizio 26"

    Calcolare

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1} = \lim_{x\to0} \frac{x\pi^x\left(1-\left(\frac{e}{\pi}\right)^x\right)}{\cos(x)-1} = \lim_{x\to0} \pi^x\frac{x\left(1-\left(\frac{e}{\pi}\right)^x\right)}{\cos(x)-1}
    $$

    Poiché

    $$
    1-\left(\frac{e}{\pi}\right)^x \sim -x\log{\left(\frac{e}{\pi}\right)}
    $$

    e anche

    $$
    \cos(x)-1 \sim -\frac{1}{2}x^2
    $$

    otteniamo

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1} = \lim_{x\to0} \pi^x\frac{-x^2\log{\left(\frac{e}{\pi}\right)}}{-\frac{1}{2}x^2}=2\log{\left(\frac{e}{\pi}\right)}.
    $$

!!! esercizio "Esercizio 27"

    Calcolare

    $$
    \lim_{x\to0}\frac{\sin\left(\ln\left(1-x\right)\right)}{1-2^x}
    $$

??? soluzione "Soluzione"

    Il limite è di fatto immediato se si osserva che, per $x\to0$,

    $$
    \ln{(1-x)} \sim -x
    $$

    e anche

    $$
    1-2^x \sim -x\log{2}
    $$

    ottenendo dunque

    $$
    \lim_{x\to0}\frac{\sin\left(\ln\left(1-x\right)\right)}{1-2^x} = \lim_{x\to0}\frac{\sin(-x)}{-x\log2} = \frac{1}{\log2}
    $$

    in quanto

    $$
    \sin(-x) \sim -x
    $$

!!! esercizio "Esercizio 28"

    Calcolare

    $$
    \lim_{x\to+\infty} \frac{x^4\sin^2(\pi - 2\arctan(x))}{x^2+3}
    $$

??? soluzione "Soluzione"

    Ricordando che

    $$
    \arctan(x) \xrightarrow[]{x\to+\infty} \frac{\pi}{2}
    $$

    e che quindi

    $$
    \pi-2\arctan(x) \xrightarrow[]{x\to+\infty} 0
    $$

    si può subito sfruttare la stima asintotica

    $$
    \sin^2(\pi - 2\arctan(x)) \sim (\pi-2\arctan(x))^2
    $$

    così come

    $$
    \frac{x^4}{x^2+3} \sim x^2
    $$

    e dire che

    \begin{align*}
    \lim_{x\to+\infty}\frac{x^4\sin^2(\pi - 2\arctan(x))}{x^2+3} &= \lim_{x\to+\infty} \frac{x^4(\pi-2\arctan(x))^2}{x^2+3} \\ &=\lim_{x\to+\infty} x^2(\pi-2\arctan(x))^2
    \end{align*}

    che è ancora una forma indeterminata del tipo $[0 \cdot +\infty]$. Tuttavia, con il cambio di variabile $y = \pi-2\arctan(x)$ e osservando che

    \begin{align*}
    x = \tan\left(\frac{\pi}{2}-\frac{y}{2}\right) = \cot\left(\frac{y}{2}\right)
    \end{align*}

    si ottiene

    \begin{align*}
    \lim_{x\to+\infty}x^2\left(\pi - 2\arctan(x)\right)^2 &= \lim_{y\to0}y^2\cot^2\left(\frac{y}{2}\right)
        \\ &= \lim_{y\to0}\frac{y^2}{\sin^2\left(\frac{y}{2}\right)}\cos^2\left(\frac{y}{2}\right) = 4.
    \end{align*}

!!! esercizio "Esercizio 29"

    Calcolare

    $$
    \lim_{x\to1} \frac{\log{(x^x)}-\log{x}}{1-\cos(x-1)}
    $$

??? soluzione "Soluzione"

    Ricordando che

    $$
    \log{(x^x)}-\log{x}=\log(e^{x\log{x}})-\log{x}=x\log{x}-\log{x}=(x-1)\log{x}
    $$

    si ha subito che

    $$
    \lim_{x\to1} \frac{\log{(x^x)}-\log{x}}{1-\cos(x-1)}=\lim_{x\to1}\frac{(x-1)\log{x}}{1-\cos(x-1)}
    $$

    Ponendo, per maggior chiarezza nell'uso delle stime asintotiche, $x-1=t$, otteniamo per sostituzione

    $$
    \lim_{x\to1}\frac{(x-1)\log{x}}{1-\cos(x-1)}=\lim_{t\to0}\frac{t\log{(1+t)}}{1-\cos{t}}=2
    $$

    in quanto

    $$
    \frac{t\log{(1+t)}}{1-\cos{t}} \sim \frac{t^2}{\frac{1}{2}t^2}
    $$

!!! esercizio "Esercizio 30"

    Calcolare

    $$
    \lim_{x\to+\infty} x\log{\left(\frac{3x+x^2}{1+x+x^2}\right)}
    $$

??? soluzione "Soluzione"

    Osserviamo da subito come il limite si presenti nella forma indeterminata del tipo $[+\infty\cdot0]$, in quanto

    $$
    \frac{3x+x^2}{1+x+x^2} \xrightarrow[]{x\to+\infty} 1
    $$

    Al fine di sciogliere l'indeterminazione, possiamo pensare di aggiungere e sottrarre $1$ all'interno dell'argomento del logaritmo:

    $$
    \log{\left(\frac{3x+x^2}{1+x+x^2}\right)}=\log{\left(1+\frac{3x+x^2}{1+x+x^2}-1\right)}
    $$

    A questo punto, poiché

    $$
    \frac{3x+x^2}{1+x+x^2}-1 \xrightarrow[]{x\to+\infty} 0
    $$

    possiamo sfruttare la ben nota stima asintotica del logaritmo, valida per un certo $\varepsilon(x)\to0$, ottenendo

    $$
    \log{\left(1+\frac{3x+x^2}{1+x+x^2}-1\right)} \sim \frac{3x+x^2}{1+x+x^2}-1=\frac{2x-1}{1+x+x^2}
    $$

    Il limite si riduce a

    $$
    \lim_{x\to+\infty} x\left(\frac{2x-1}{1+x+x^2}\right)=2.
    $$

!!! esercizio "Esercizio 31"

    Calcolare

    $$
    \lim_{x\to+\infty}\left(e^{\sqrt{x^{2}+x}}-e^{\sqrt{x^{2}-1}}\right)
    $$

??? soluzione "Soluzione"

    Raccogliendo $e^{\sqrt{x^{2}-1}}$ si ottiene

    $$
    \lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}\left(e^{\sqrt{x^{2}+x}-\sqrt{x^{2}-1}}-1\right).
    $$

    Esaminiamo la forma indeterminata $\sqrt{x^{2}+x}-\sqrt{x^{2}-1}$ per $x\to+\infty$:

    $$
    \begin{array}{l}\lim_{x\to+\infty}\sqrt{x^{2}+x}-\sqrt{x^{2}-1}\cdot\frac{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}=
    \lim_{x\to+\infty}\frac{x^{2}+x-x^{2}+1}{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}\\
    \\
    =\lim_{x\to+\infty}\frac{x+1}{x\left(\sqrt{1+\frac{1}{x}}+\sqrt{1-\frac{1}{x^{2}}}\right)}=\frac{1}{2}.\end{array}
    $$

    Il limite dato vale quindi

    $$
    \lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}\left(e^{\sqrt{x^{2}+x}-\sqrt{x^{2}-1}}-1\right)=(\sqrt{e}-1)\lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}
    =+\infty.
    $$

    In maniera equivalente, da $1/x\to0$ per $x\to+\infty$ e da

    $$
    \sqrt{1+y}=1+(1/2)y+o(y)
    $$

    per $y\to0$, abbiamo

    $$
    \sqrt{x^{2}+x}=x\sqrt{1+\frac{1}{x}}=x\left(1+\frac{1}{2x}+o\left(\frac{1}{x}\right)\right)=x+\frac{1}{2}+o(1),\ \ x\to+\infty,
    $$

    dove $o(1)$ indica un generico infinitesimo, e

    $$
    \sqrt{x^{2}-1}=x\sqrt{1-\frac{1}{x^{2}}}=x\left(1-\frac{1}{2x^{2}}+o\left(\frac{1}{x^{2}}\right)\right)=x-\frac{1}{2x}+
    o\left(\frac{1}{x}\right),\ \ x\to+\infty.
    $$

    Il limite dato vale quindi

    $$
    \begin{array}{l}
    \lim_{x\to+\infty}\left(e^{\sqrt{x^{2}+x}}-e^{\sqrt{x^{2}-1}}\right)=
    \lim_{x\to+\infty}\left(e^{x+1/2+o(1)}-e^{x-1/(2x)+o(1/x)}\right)=\\
    \\
    \lim_{x\to+\infty}e^{x}\left(e^{1/2+o(1)}-e^{-1/(2x)+o(1/x)}\right)
    =(\sqrt{e}-1)\lim_{x\to+\infty}e^{x}=+\infty.\end{array}
    $$

!!! chiave ""

    Abbiamo che $1/x\to0$ per $x\to+\infty$ e abbiamo gli sviluppi asintotici per $y\to0$

    $$
    \sin y=y+o(y),\ \cos y=1-\frac{1}{2}y^{2}+o(y^{2}),\ e^{y}=1+y+o(y),\ \log(1+y)=y+o(y).
    $$

!!! esercizio "Esercizio 32"

    Calcolare il seguente limite

    $$
    \lim_{x\to+\infty}\frac{1+x^{4}\sin(1/x^{4})}{x^{2}(1-\cos(1/x^{2}))}
    $$

??? soluzione "Soluzione"

    Abbiamo dallo sviluppo asintotico:

    $$
    \cos \left(\frac{1}{x^2} \right)=1-\frac{1}{2} \: \left(\frac{1}{x^2}\right)^2 + o\left(\left(\frac{1}{x^2}\right)^2\right) = 1-\frac{1}{2} \: \frac{1}{x^4} + o\left(\frac{1}{x^4}\right) {\rm ~~per~~} x\to \ip.
    $$

    Sviluppando asintoticamente il rapporto  abbiamo:

    - per il numeratore

        $$
        {1+x^{4}\sin\left(\frac{1}{x^{4}}\right)} = 1+x^{4}\left(\frac{1}{x^{4}}+o\left(\frac{1}{x^{4}}\right)\right) = 1+1+o(1)  {\rm ~~per~~} x\to \ip;
        $$

    - per il denominatore

        $$
        x^{2}\left[1-\cos\left(\frac{1}{x^{2}}\right)\right] = x^{2}\left[1-\left(1-\frac{1}{2} \: \frac{1}{x^4} + o\left(\frac{1}{x^4}\right)\right)\right]=
        $$

        $$
        =x^{2}\left[\frac{1}{2} \: \frac{1}{x^4} - o\left(\frac{1}{x^4}\right)\right] = \frac{1}{2} \: \frac{1}{x^2} -  o\left(\frac{1}{x^2}\right) = \frac{1}{2} \: \frac{1}{x^2} +  o\left(\frac{1}{x^2}\right) {\rm ~~per~~} x\to \ip.
        $$

    Quindi risulta:

    $$
    \lim_{x\to+\infty}\frac{1+x^{4}\sin\left(\frac{1}{x^{4}}\right)}{x^{2}\left[1-\cos\left(\frac{1}{x^{2}}\right)\right]}=\lim_{x\to+\infty} \frac{2 + o(1)}{\frac{1}{2} \: \frac{1}{x^2} +  o\left(\frac{1}{x^2}\right)}= +\infty
    $$

    dove, come sempre, $o(1)$ indica un generico infinitesimo.

!!! esercizio "Esercizio 33"

    Calcolare il seguente limite

    $$
    \lim_{x\to+\infty}\frac{x^{2}e^{-1/x^{4}}-x^{2}}{\log(x^{2}+1)-2\log x}
    $$

??? soluzione "Soluzione"

    $$
    \begin{array}{l}\lim_{x\to+\infty}\frac{x^{2}\left(e^{-1/x^{4}}-1\right)}{\log(x^{2}+1)-\log x^{2}}=
    \lim_{x\to+\infty}\frac{x^{2}\left(-\frac{1}{x^{4}}+o\left(\frac{1}{x^{4}}\right)\right)}{\log\left(1+\frac{1}{x^{2}}\right)}=\\
    \\
    =\lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}{\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}=
    \lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}
    {\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}=\lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}}{\frac{1}{x^{2}}}=-1.\end{array}
    $$

!!! esercizio "Esercizio 34"

    Calcolare

    $$
    \lim_{x\to0}\frac{e^{-x^{4}}-x^{4}-1}{x^{2}\cos x-x^{2}}
    $$

??? soluzione "Soluzione"

    Usiamo lo sviluppo

    $$
    e^{-x^{4}}=1-x^{4}+o(x^{4}) {\rm ~~per~~} x\to0
    $$

    e l'equivalenza

    $$
    \cos x-1\sim -x^{2}/2 {\rm ~~per~~} x\to0.
    $$

    Quindi abbiamo

    $$
    \begin{array}{l}\lim_{x\to0}\frac{e^{-x^{4}}-x^{4}-1}{x^{2}(\cos x-1)}=
    \lim_{x\to0}\frac{1-x^{4}+o(x^{4})-x^{4}-1}{x^{2}\left(-\frac{x^{2}}{2}\right)}=\\
    \\
    =\lim_{x\to0}\frac{-2x^{4}+o(x^{4})}{-\frac{x^{4}}{2}}=\lim_{x\to0}\frac{-2x^{4}}{-\frac{x^{4}}{2}}=4.\end{array}
    $$

!!! esercizio "Esercizio 35"

    Calcolare

    $$
    \lim_{x\to\pi/4}(2\sin^{2}x)^{\frac{1}{\cos2x}}
    $$

??? soluzione "Soluzione"

    Utilizzando $\cos2x=1-2\sin^{2}x$ e ponendo $y=1-2\sin^{2}x$, si osserva che $y\to0$ per $x\to\pi/4$ ed il limite dato vale

    $$
    \lim_{y\to0}(1-y)^{\frac{1}{y}}=\lim_{y\to0}e^{\frac{\log(1-y)}{y}}=e^{-1}=\frac{1}{e}
    $$

    in forza anche del limite notevole

    $$
    \lim_{y\to0}\frac{\log(1-y)}{y}=-1.
    $$

!!! esercizio "Esercizio 36"

    Calcolare

    $$
    \lim_{x\to0^{+}}\frac{(1+x^{5})^{\frac{1}{x^{2}\sin2x}}-1}{2\log(1+x^{3})}
    $$

??? soluzione "Soluzione"

    Scriviamo il numeratore nella forma

    $$
    e^{\frac{\log(1+x^{5})}{x^{2}\sin2x}}-1
    $$

    ed analizziamo l'esponente. Per $x\to0$ si ha

    $$
    \frac{\log(1+x^{5})}{x^{2}\sin2x}\sim\frac{x^{5}}{x^{2}\cdot2x}=\frac{x^{2}}{2}.
    $$

    Da questo e da $e^{y}-1\sim y$ per $y\to0$, segue

    $$
    e^{\frac{\log(1+x^{5})}{x^{2}\sin2x}}-1\sim\frac{\log(1+x^{5})}{x^{2}\sin2x}\sim \frac{x^{2}}{2}.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0^{+}}\frac{(1+x^{5})^{\frac{1}{x^{2}\sin2x}}-1}{2\log(1+x^{3})}=
    \lim_{x\to0^{+}}\frac{\frac{x^{2}}{2}}{2x^{3}}=\frac{1}{4}\lim_{x\to0^{+}}\frac{1}{x}=+\infty.
    $$

!!! esercizio "Esercizio 37"

    Calcolare

    $$
    \lim_{x\to0^{+}}\frac{1-x^{x}}{x^{2}}
    $$

??? soluzione "Soluzione"

    Scritto il numeratore nella forma

    $$
    1-e^{x\log x},
    $$

    l'esponente $x\log x$ tende a zero per $x\to0^{+}$. Poiché $1-e^{y}\sim -y$ per $y\to0$, ne segue

    $$
    1-e^{x\log x}\sim -x\log x,\ \ x\to0^{+}.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0^{+}}\frac{1-x^{x}}{x^{2}}=\lim_{x\to0^{+}}\frac{-x\log x}{x^{2}}=\lim_{x\to0^{+}}\frac{-\log x}{x}=+\infty.
    $$

!!! esercizio "Esercizio 38"

    Calcolare

    $$
    \lim_{x\to0}\frac{\sin(e^{x^{3}}-1)}{\sqrt{1+x^{3}}-1}
    $$

??? soluzione "Soluzione"

    Abbiamo

    $$
    \sin(e^{x^{3}}-1)\sim e^{x^{3}}-1\sim x^{3},\ \ x\to0^{+}
    $$

    e

    $$
    \sqrt{1+x^{3}}-1\sim\frac{1}{2}x^{3},\ \ x\to0^{+}.
    $$

    Il limite dato vale

    $$
    \lim_{x\to0}\frac{\sin(e^{x^{3}}-1)}{\sqrt{1+x^{3}}-1}=\lim_{x\to0}\frac{x^{3}}{\frac{1}{2}x^{3}}=2.
    $$

!!! esercizio "Esercizio 39"

    Calcolare

    $$
    \lim_{x\to0^{+}}\frac{x^{x}-e^{x}+x^{\alpha}}{\sin\sqrt{x}}=L
    $$

    al variare del parametro $\alpha>0$.

??? soluzione "Soluzione"

    Abbiamo

    $$
    \lim_{x\to0^{+}}\frac{x\log x}{x^{\alpha}}=\left\{\begin{array}{lr}0,\ &\alpha<1\\
    \\
    -\infty,\ &\alpha=1\end{array}\right.
    $$

    quindi, per $x\to0^{+}$, l'infinitesimo $x\log x$ è di ordine inferiore rispetto ad $x$ ($x=o(x\log x)$) ma di ordine superiore ad $x^{\alpha}$ se $\alpha<1$ ($x\log x=o(x^{\alpha})$, $\alpha<1$).

    Dunque, dallo sviluppo

    $$
    e^{y}=1+y+o(y), \ y\to0,
    $$

    segue

    $$
    \begin{array}{l} x^{x}-e^{x}+x^{\alpha}=e^{x\log x}-e^{x}+x^{\alpha}=\\
    \\
    1+x\log x+o(x\log x)-1-x+o(x)+x^{\alpha}=\\
    \\
    \left\{\begin{array}{lr}x\log x+o(x\log x),\ \ \ &\alpha\geq1\\
    \\
    x^{\alpha}+o(x^{\alpha}),\ \ \ &0<\alpha<1.\end{array}\right.\end{array}
    $$

    Il limite dato vale

    $$
    \lim_{x\to0^{+}}\frac{x^{x}-e^{x}+x^{\alpha}}{\sin\sqrt{x}}=
    \left\{\begin{array}{lr}\lim_{x\to0^{+}}\frac{x\log x}{\sqrt{x}}=\lim_{x\to0^{+}}\sqrt{x}\log x=0,\ \ \ &\alpha\geq1\\
    \\
    \lim_{x\to0^{+}}\frac{x^{\alpha}}{\sqrt{x}}=0,\ \ \ &1/2<\alpha<1\\
    \\
    \lim_{x\to0^{+}}\frac{\sqrt{x}}{\sqrt{x}}=1,\ \ \ &\alpha=1/2\\
    \\
    \lim_{x\to0^{+}}\frac{x^{\alpha}}{\sqrt{x}}=+\infty,\ \ \ &0<\alpha<1/2.\end{array}\right.
    $$
