---
title: "Serie numeriche"
---

# Serie numeriche

<div class="info-capitolo" markdown>

**Esercizi · Serie** · con le soluzioni svolte · [:material-file-pdf-box: Dispensa del volume (PDF)](../pdf/dispensa-5-serie.pdf)

</div>

!!! esercizio "Esercizio 1"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{(e^{\alpha^2-3})^n}{\log(1+n)}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Applicando il criterio del rapporto, si ottiene

    $$
    \lim_{n\to\ip}\frac{(e^{\alpha^2-3})^{n+1}}{\log(1+n+1)}\frac{\log(1+n)}{(e^{\alpha^2-3})^n}=e^{\alpha^2-3}
    $$

    Il criterio assicura che la serie proposta converge per $-\sqrt{3}<\alpha<\sqrt{3}$, diverge per $\alpha<-\sqrt{3}$ e per $\alpha>\sqrt{3}$, mentre non fornisce alcuna indicazione per $\alpha=\pm\sqrt{3}$. Per $\alpha=\pm\sqrt{3}$, la serie diventa

    $$
    \sum_{n=1}^{\infty}\frac{1}{\log(1+n)}
    $$

    che diverge per il criterio del confronto, in quanto

    $$
    a_n=\frac{1}{\log(1+n)}>\frac{1}{n}
    $$

    e quest'ultimo è il termine generale della serie armonica, che diverge. Complessivamente, la serie proposta converge per $-\sqrt{3}<\alpha<\sqrt{3}$, mentre diverge per $\alpha\leq-\sqrt{3}$ e per $\alpha\geq\sqrt{3}$.

!!! esercizio "Esercizio 2"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{\log n}{n^3}
    $$

??? soluzione "Soluzione"

    Osserviamo, anzitutto, come la condizione necessaria di convergenza sia soddisfatta. Inoltre, si ha

    $$
    a_n=\frac{\log n}{n^3}<\frac{n}{n^3}=\frac{1}{n^2}
    $$

    Per confronto con la serie armonica generalizzata di esponente $p=2$, la serie proposta converge.

!!! esercizio "Esercizio 3"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{n^{2-\alpha}}{\arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    \arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}=\frac{1}{n^2}+o\left(\frac{1}{n^2}\right)+\frac{1}{\sqrt{n}}\sim\frac{1}{\sqrt{n}}
    $$

    si ha

    $$
    a_n=\frac{n^{2-\alpha}}{\arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}}\sim\frac{n^{2-\alpha}}{\frac{1}{\sqrt{n}}}=\frac{1}{n^{\alpha-\frac{5}{2}}}
    $$

    Pertanto dal criterio del confronto asintotico segue che la serie converge per $\alpha-\frac{5}{2}>1$, ovvero se e solo se $\alpha>\frac{7}{2}$.

!!! esercizio "Esercizio 4"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=0}^{\infty}\frac{(-1)^n\sin\left(n\frac{\pi}{2}\right)}{2n+5}
    $$

??? soluzione "Soluzione"

    Osservando che

    $$
    \sin\left(n\frac{\pi}{2}\right) = \left\{ \begin{array}{ll}
             0 & \mbox{se n è pari, ovvero $n=2k$,}\\
            (-1)^k & \mbox{se n è dispari, ovvero $n=2k+1$}.\end{array} \right.
    $$

    quindi in realtà la serie proposta è sommata solo sugli indici dispari e si può riscrivere nella forma

    $$
    \sum_{n=0}^{\infty}\frac{(-1)^n\sin\left(n\frac{\pi}{2}\right)}{2n+5}=\sum_{k=0}^{\infty}\frac{(-1)^{2k+1}(-1)^k}{2(2k+1)+5}=\sum_{k=0}^{\infty}\frac{(-1)^{k+1}}{4k+7}
    $$

    Quest'ultima è una serie a segni alterni; non converge assolutamente, in quanto $\left|\frac{(-1)^{k+1}}{4k+7}\right|=\frac{1}{4k+7}\sim\frac{1}{4k}$ per $k\to+\infty$, dove l'ultimo è il termine generale di una serie armonica (che diverge). Tuttavia, la serie proposta converge semplicemente per il criterio di Leibniz. È infatti immediato dimostrare che la successione definita da $a_k=\frac{1}{4k+7}$ è positiva, infinitesima e monotona decrescente.

!!! esercizio "Esercizio 5"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=2}^{\infty}\frac{1-\sqrt{1-\frac{2}{n}}}{n}
    $$

??? soluzione "Soluzione"

    Ricordando che $\sqrt{1-\frac{2}{n}}=1-\frac{1}{2}\frac{2}{n}+o\left(\frac{1}{n}\right)$, si ha

    $$
    a_n=\frac{1-\sqrt{1-\frac{2}{n}}}{n}=\frac{1-1+\frac{1}{2}\frac{2}{n}+o\left(\frac{1}{n}\right)}{n}\sim\frac{\frac{1}{n}}{n}=\frac{1}{n^2}
    $$

    che è il termine generale della serie armonica generalizzata di esponente $2>1$. Pertanto la serie di partenza converge per il criterio del confronto asintotico.

!!! esercizio "Esercizio 6"

    Determinare, al variare di $x \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{e^{2/n}-1-\frac{x}{n}}{\sqrt{\frac{1}{n}}}
    $$

??? soluzione "Soluzione"

    Per esercizio. Utilizzare lo sviluppo di Mc Laurin al secondo ordine per $e^t$, con $t=\frac{2}{n}$. Dal confronto asintotico con la serie armonica generalizzata, la serie proposta risulterà essere divergente per $x\neq2$ e convergente per $x=2$.

!!! esercizio "Esercizio 7"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    \log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)=\log\left(1+\frac{n^2+3\sqrt{n}}{n^2+4}-1\right)\sim\frac{n^2+3\sqrt{n}}{n^2+4}-1
    $$

    Allora

    $$
    a_n=\log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)\sim\frac{n^2+3\sqrt{n}}{n^2+4}-1=\frac{3\sqrt{n}-4}{n^2+4}\sim3\frac{1}{n^\frac{3}{2}}
    $$

    Pertanto, per confronto con la serie armonica generalizzata di esponente $\frac{3}{2}>1$, segue che la serie converge per il criterio del confronto asintotico.

!!! esercizio "Esercizio 8"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{e^{\frac{1}{n}}-1}{n+1}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    e^\frac{1}{n}-1\sim\frac{1}{n}
    $$

    si ha immediatamente che

    $$
    a_n=\frac{e^{\frac{1}{n}}-1}{n+1}\sim\frac{\frac{1}{n}}{n}=\frac{1}{n^2}
    $$

    Pertanto, per confronto con la serie armonica generalizzata di esponente $2>1$, segue che la serie converge per il criterio del confronto asintotico.

!!! esercizio "Esercizio 9"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\left(e^{\frac{n^2+2n}{n^2+1}}-e\right)
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Si ha

    $$
    a_n=e^{\frac{n^2+2n}{n^2+1}}-e=e\left(e^{\frac{n^2+2n}{n^2+1}-1}-1\right)=e\left(e^{\frac{2n-1}{n^2+1}}-1\right)\sim e \frac{2n-1}{n^2+1}\sim2e\frac{1}{n}
    $$

    che è il termine generale della serie armonica. Si è sfruttato il fatto che $\frac{2n-1}{n^2+1}\to0$ e anche $\frac{2n-1}{n^2+1}\sim\frac{2}{n}$ per $n\to+\infty$. Pertanto, la serie di partenza diverge per il criterio del confronto asintotico.

!!! esercizio "Esercizio 10"

    Determinare, al variare di $\alpha>0$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\left(\sin \frac{1}{n^{3\alpha}}\right)n^{\frac{3}{2}-2\alpha}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    \sin \frac{1}{n^{3\alpha}}\sim\frac{1}{n^{3\alpha}}
    $$

    allora si ha immediatamente che

    $$
    a_n=\left(\sin \frac{1}{n^{3\alpha}}\right)n^{\frac{3}{2}-2\alpha}\sim\frac{n^{\frac{3}{2}-2\alpha}}{n^{3\alpha}}=\frac{1}{n^{5\alpha-\frac{3}{2}}}
    $$

    Pertanto, dal criterio del confronto asintotico segue che la serie converge per $5\alpha-\frac{3}{2}>1$, ovvero se e solo se $\alpha>\frac{1}{2}$.

!!! esercizio "Esercizio 11"

    Determinare, al variare di $\alpha>0$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\left(\sqrt{1+\frac{1}{n^\alpha}}-1\right)n^{2-\alpha}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    \sqrt{1+\frac{1}{n^\alpha}}-1\sim\frac{1}{2}\frac{1}{n^\alpha}
    $$

    allora

    $$
    a_n=\left(\sqrt{1+\frac{1}{n^\alpha}}-1\right)n^{2-\alpha}\sim\frac{1}{2n^\alpha}n^{2-\alpha}=\frac{1}{2n^{2\alpha-2}}
    $$

    Pertanto, dal criterio del confronto asintotico segue che la serie converge per $2\alpha-2>1$, ovvero se e solo se $\alpha>\frac{3}{2}$.

!!! esercizio "Esercizio 12"

    Determinare, al variare di $\alpha>0$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\left(\cos \frac{1}{n^\alpha}-1\right)n^{1-\alpha}
    $$

??? soluzione "Soluzione"

    La serie proposta è a termini negativi (si ragioni sul coseno di un angolo compreso fra 0 ed 1). Pertanto, possiamo applicare ad essa i criteri delle serie a termini positivi, mettendo in evidenza il segno negativo. Osservando che, per $\alpha>0$,

    $$
    \left(\cos \frac{1}{n^\alpha}-1\right)n^{1-\alpha}\sim-\frac{n^{1-\alpha}}{2n^{2\alpha}}=-\frac{1}{2n^{3\alpha-1}}
    $$

    si ottiene subito che, per il criterio del confronto asintotico, la serie proposta converge per $3\alpha-1>1$, cioè $\alpha>\frac{2}{3}$.

!!! esercizio "Esercizio 13"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{|\alpha^2-5\alpha+7|^n}{3n^2+\log n}
    $$

??? soluzione "Soluzione"

    Osserviamo, innanzitutto, che si tratta di una serie a termini positivi, in quanto $\alpha^2-5\alpha+7>0$ per ogni $\alpha \in \mathbb{R}$. Utilizzando il criterio della radice, si ottiene

    $$
    \lim_{n\to+\infty}\sqrt[n]{\frac{|\alpha^2-5\alpha+7|^n}{3n^2+\log n}}=\lim_{n\to+\infty}\frac{|\alpha^2-5\alpha+7|}{\sqrt[n]{3n^2+\log n}}=\lim_{n\to+\infty}\frac{|\alpha^2-5\alpha+7|}{\sqrt[n]{3}\sqrt[n]{n^2}}=|\alpha^2-5\alpha+7|
    $$

    dove abbiamo tenuto conto della gerarchia degli infiniti e del limite $\sqrt[n]{n^2}\to1$. Poiché $|\alpha^2-5\alpha+7|<1$ è soddisfatta se e solo se $2<\alpha<3$, mentre $|\alpha^2-5\alpha+7|>1$ è soddisfatta se e solo se $\alpha<2 \; o \; \alpha>3$, e $|\alpha^2-5\alpha+7|=1$ se e solo se $\alpha=2 \; o \; \alpha=3$, il criterio assicura che la serie proposta

    - converge per $2<\alpha<3$;

    - diverge per $\alpha<2  \; o \; \alpha>3$.

    Per $\alpha=2 \; o \; \alpha=3$, la serie proposta ha come termine generale $a_n=\frac{1}{3n^2+\log n}\sim\frac{1}{3n^2}$, che soddisfa la condizione necessaria e converge per confronto asintotico con la serie armonica generalizzata di esponente $2>1$.

!!! esercizio "Esercizio 14"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{1}{n\left(\sqrt{1+\frac{3}{n^3}}-1\right)}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Poiché

    $$
    \sqrt{1+\frac{3}{n^3}}-1\sim\frac{1}{2}\frac{3}{n^3}
    $$

    allora

    $$
    a_n=\frac{1}{n\left(\sqrt{1+\frac{3}{n^3}}-1\right)}\sim\frac{1}{n\left(\frac{3}{2n^3}\right)}=\frac{2}{3}n^2
    $$

    Pertanto la serie proposta diverge in quanto il termine generale non è infinitesimo.

!!! esercizio "Esercizio 15"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}e^{\sin n} \; \left(\sin \frac{1}{n}\right) \; \left(e^{\frac{1}{\sqrt{n}}}-1\right) \; \cos n
    $$

??? soluzione "Soluzione"

    Per esercizio. La serie proposta converge assolutamente e quindi anche semplicemente.

!!! esercizio "Esercizio 16"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=2}^{\infty}\frac{\left[2(\log n)^{\alpha-7}\right]^n}{n^2}
    $$

??? soluzione "Soluzione"

    Per esercizio. Applicare il criterio della radice. La serie proposta converge per $\alpha<7$, diverge per $\alpha\geq7$.

!!! esercizio "Esercizio 17"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{4^n}{n^3(7^{\alpha+2})^n}
    $$

??? soluzione "Soluzione"

    Per esercizio. Applicare il criterio della radice. La serie proposta converge per $\alpha\geq\frac{\log 4}{\log 7}-2$.

!!! esercizio "Esercizio 18"

    Determinare, al variare di $\alpha \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=0}^{\infty}\left[\cos\left(\frac{1}{n+2}\right)^\alpha-1\right]n^4
    $$

??? soluzione "Soluzione"

    La serie proposta è a termini negativi (si ragioni sul coseno di un angolo compreso fra 0 ed 1). Pertanto, possiamo applicare ad essa i criteri delle serie a termini positivi, mettendo in evidenza il segno negativo. Osservando che

    $$
    \left[\cos\left(\frac{1}{n+2}\right)^\alpha-1\right]n^4\sim-\frac{n^4}{2(n+2)^{2\alpha}}\sim-\frac{n^4}{2n^{2\alpha}}=-\frac{1}{2n^{2\alpha-4}}
    $$

    si ottiene subito che, per il criterio del confronto asintotico, la serie proposta converge per $2\alpha-4>1$, cioè $\alpha>\frac{5}{2}$.

!!! esercizio "Esercizio 19"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\binom{n}{4}\frac{1}{3^n}
    $$

??? soluzione "Soluzione"

    Si svolga per esercizio utilizzando il criterio del rapporto. La serie proposta converge.

!!! esercizio "Esercizio 20"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{\sqrt{n!}}{\left(\sqrt{n}\right)^n}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini positivi. Applicando il criterio del rapporto, si ottiene

    $$
    \lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=\lim_{n\to+\infty}\frac{\sqrt{(n+1)!}}{\left(\sqrt{n+1}\right)^{n+1}}\frac{\left(\sqrt{n}\right)^n}{\sqrt{n!}}=\lim_{n\to+\infty}\left(\sqrt{\frac{n}{n+1}}\right)^n
    $$

    Ricordando il limite notevole

    $$
    \lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^n=e
    $$

    si ottiene

    $$
    \lim_{n\to+\infty}\left(\sqrt{\frac{n}{n+1}}\right)^n=\lim_{n\to+\infty}\left(\sqrt{\frac{n+1}{n}}\right)^{-n}=\lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^{-\frac{1}{2}n}=e^{-\frac{1}{2}}=l
    $$

    Poiché $l=e^{-\frac{1}{2}}<1$, la serie proposta converge.

!!! esercizio "Esercizio 21"

    Determinare, al variare di $\alpha>0$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\left[\log\left(\frac{n+2}{n+1}\right)\right]^\alpha
    $$

??? soluzione "Soluzione"

    Per esercizio. Sommare e sottrarre 1 all'interno dell'argomento del logaritmo ed utilizzare un'opportuna stima asintotica. La serie proposta converge per $\alpha>1$.

!!! esercizio "Esercizio 22"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}n\left(\frac{2}{\sqrt{n}}-\sin \frac{2}{\sqrt{n}}\right)^2
    $$

??? soluzione "Soluzione"

    Per esercizio. Basta sviluppare il termine generale della serie fino al primo termine di sviluppo non nullo. La serie proposta converge.

!!! esercizio "Esercizio 23"

    Determinare, al variare di $x \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=0}^{\infty}\frac{|x-12|^{n+1}}{2n^2e^{-n}}
    $$

??? soluzione "Soluzione"

    Per esercizio. Utilizzare il criterio del rapporto. La serie proposta converge per $12-\frac{1}{e}\leq x \leq 12+\frac{1}{e}$, diverge altrove.

!!! esercizio "Esercizio 24"

    Determinare, al variare di $x \in \mathbb{R}$, il carattere della seguente serie:

    $$
    \sum_{n=0}^{\infty}\left(\frac{x}{|x-1|}\right)^n
    $$

??? soluzione "Soluzione"

    Si tratta di una serie geometrica di ragione $q=\frac{x}{|x-1|}$, definita per $x \neq 1$. La serie converge, assolutamente e semplicemente, se e solo se

    $$
    \left|\frac{x}{x-1}\right|<1
    $$

    cioè, se e solo se

    $$
    -1<\frac{x}{x-1}<1
    $$

    il cui intervallo di soluzioni è $x<\frac{1}{2}$.

!!! esercizio "Esercizio 25"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}\frac{\cos{(n\pi)}\;e^{-2n}\;\log n}{n}
    $$

??? soluzione "Soluzione"

    Ricordiamo che $\cos(n\pi)=(-1)^n$; pertanto la serie è a termini di segno alterno. Poiché $\log n < n$ per ogni $n\in\mathbb{N}$, abbiamo:

    $$
    |a_n|=\left|(-1)^n\frac{e^{-2n}\;\log n}{n}\right|=e^{-2n}\left(\frac{\log n}{n}\right)<\left(\frac{1}{e^2}\right)^n
    $$

    dove l'ultimo è il termine generale della serie geometrica di ragione $q=\frac{1}{e^2}<1$, che converge. Dal criterio del confronto si ottiene che la serie proposta converge assolutamente, quindi anche semplicemente.

!!! esercizio "Esercizio 26"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=0}^{\infty}\frac{1+n\cos{(n\pi)}}{2n^2+1}
    $$

??? soluzione "Soluzione"

    Per esercizio. Osservare che $\sum_{n=0}^{\infty}\frac{1}{2n^2+1}$ è convergente, dunque è possibile riscrivere

    $$
    \sum_{n=0}^{\infty}\frac{1+n\cos{(n\pi)}}{2n^2+1}= \sum_{n=0}^{\infty}\frac{1}{2n^2+1} + \sum_{n=0}^{\infty}\frac{n\cos{(n\pi)}}{2n^2+1}
    $$

    dove $\cos{(n\pi)}=(-1)^n$. Stabilire il carattere della seconda serie; si verificherà che converge semplicemente dal criterio di Leibniz e che, in definitiva, la serie proposta converge in quanto somma di serie convergenti.

!!! esercizio "Esercizio 27"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=1}^{\infty}(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}
    $$

??? soluzione "Soluzione"

    La serie proposta è a termini di segno alterno. Posto $a_n=(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}$, si ha

    $$
    |a_n|=\left|(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}\right|=\frac{|\cos n|}{3n^2+2\sqrt{n}}\leq\frac{1}{3n^2+2\sqrt{n}}\sim\frac{1}{3n^2}
    $$

    dove si è sfruttato il fatto che $|\cos n|\leq1$ per ogni $n$ e $3n^2+2\sqrt{n}\sim3n^2$ per $n\to+\infty$. Per il criterio del confronto asintotico con la serie armonica generalizzata di esponente $2>1$ e per il criterio del confronto, la serie proposta converge assolutamente, e quindi anche semplicemente.

!!! esercizio "Esercizio 28"

    Determinare il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=2}^{\infty}(-1)^n\frac{1-\sin^2(n\pi/2)}{3n+\sin n}
    $$

??? soluzione "Soluzione"

    Si tratta di una serie a termini di segno alterno. Osservando che

    $$
    \sin^2(n\pi/2) = \left\{ \begin{array}{ll}
             0 & \mbox{se n è pari, ovvero $n=2k$,}\\
            1 & \mbox{se n è dispari, ovvero $n=2k+1$}.\end{array} \right.
    $$

    e posto $a_n=\frac{1-\sin^2(n\pi/2)}{3n+\sin n}$, si ha

    $$
    a_n = \left\{ \begin{array}{ll}
             \frac{1}{3n+\sin n} & \mbox{se $n=2k$,} \vspace{0.5cm} \\ 
            0 & \mbox{se $n=2k+1$}.\end{array} \right.
    $$

    Quindi la serie proposta si può riscrivere nella forma

    $$
    \sum_{n=2}^{\infty}(-1)^n\frac{1}{3n+\sin n}=\sum_{k=1}^{\infty}(-1)^{2k}\frac{1}{6k+\sin(2k)}=\sum_{k=1}^{\infty}\frac{1}{6k+\sin(2k)}
    $$

    dove, per la seconda uguaglianza, si è sfruttato il fatto che $n=2k$. L'ultima serie ottenuta è a termini positivi. Poiché per $k\to+\infty$, $\frac{1}{6k+\sin(2k)}\sim\frac{1}{6k}$, dal criterio del confronto asintotico con la serie armonica si ricava che la serie proposta diverge.

!!! esercizio "Esercizio 29"

    Determinare, al variare di $x \in \mathbb{R}$, il carattere della seguente serie, utilizzando opportunamente i criteri studiati:

    $$
    \sum_{n=0}^{\infty} \; \left( \frac{2x}{1-x^2}\right)^n
    $$

    .

??? soluzione "Soluzione"

    Per esercizio. Effettuare ragionamenti analoghi all'esercizio 24.
