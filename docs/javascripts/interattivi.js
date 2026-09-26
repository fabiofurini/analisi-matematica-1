/* Grafici interattivi di Analisi Matematica 1 (JSXGraph).
 *
 * Nelle pagine:  <div class="gi" data-grafico="operazioni"></div>
 * Ogni grafico è una «ricetta» in GRAFICI: le funzioni fra cui scegliere, i
 * coefficienti (ciascuno con il suo colore, uguale nel cursore e nella
 * formula), che cosa disegnare, che cosa leggere e, se c'è, la sfida.
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------ utilità
  const COLORI = ["a", "b", "c", "d", "e"];
  const css = (el, v) => getComputedStyle(el).getPropertyValue(v).trim();
  const num = (x, cifre = 1) => {
    if (!isFinite(x)) return x > 0 ? "+\\infty" : "-\\infty";
    const p = Math.pow(10, cifre);
    let s = (Math.round(x * p) / p).toFixed(cifre);
    if (cifre > 0) s = s.replace(/\.?0+$/, "");
    if (s === "-0") s = "0";
    return s.replace(".", "{,}");
  };
  const numTxt = (x, c = 3) => num(x, c).replace("{,}", ",");
  // ogni formula \(...\) va in uno span «arithmatex»: è l'unica classe che
  // il MathJax della collana elabora
  const mj = (html) => String(html).replace(/\\\((.+?)\\\)/gs, (m) => `<span class="arithmatex">${m}</span>`);
  const h = (tag, attrs = {}, html = "") => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    e.innerHTML = mj(html);
    return e;
  };
  // MathJax può non essere ancora pronto quando il grafico si disegna: si aspetta
  const typeset = (el) => {
    const vai = (tentativi) => {
      if (window.MathJax && MathJax.typesetPromise && MathJax.startup && MathJax.startup.document) {
        MathJax.typesetClear([el]);
        MathJax.typesetPromise([el]).catch(() => {});
      } else if (tentativi > 0) setTimeout(() => vai(tentativi - 1), 150);
    };
    vai(100);
  };
  const derivata = (f, x, hh = 1e-5) => (f(x + hh) - f(x - hh)) / (2 * hh);
  const fatt = (n) => { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; };

  // funzioni di partenza riutilizzate da più grafici
  const F = {
    sin: { f: Math.sin, tex: "\\sin x", wrap: (a) => `\\sin\\!\\big(${a}\\big)` },
    cos: { f: Math.cos, tex: "\\cos x", wrap: (a) => `\\cos\\!\\big(${a}\\big)` },
    x2: { f: (x) => x * x, tex: "x^2", wrap: (a) => `\\big(${a}\\big)^2` },
    x3: { f: (x) => x * x * x, tex: "x^3", wrap: (a) => `\\big(${a}\\big)^3` },
    abs: { f: Math.abs, tex: "|x|", wrap: (a) => `\\big|${a}\\big|` },
    sqrt: { f: Math.sqrt, tex: "\\sqrt{x}", wrap: (a) => `\\sqrt{${a}}` },
    exp: { f: Math.exp, tex: "e^x", wrap: (a) => `e^{${a}}` },
    log: { f: Math.log, tex: "\\ln x", wrap: (a) => `\\ln\\!\\big(${a}\\big)` },
    inv: { f: (x) => 1 / x, tex: "\\dfrac{1}{x}", wrap: (a) => `\\dfrac{1}{${a}}` },
  };

  // ------------------------------------------------------------------ ricette
  const GRAFICI = {};

  /* 1. Operazioni sui grafici: y = a f(b(x - c)) + d */
  GRAFICI.operazioni = {
    titolo: "Operazioni sui grafici",
    sottotitolo: "traslazioni, dilatazioni, simmetrie",
    funzioni: ["sin", "x2", "x3", "abs", "sqrt", "exp", "log"],
    iniziale: "sin",
    parametri: [
      { k: "a", min: -3, max: 3, step: 0.1, val: 1, descr: "allunga o schiaccia in verticale; con \\(a<0\\) ribalta rispetto all'asse \\(x\\)" },
      { k: "b", min: -3, max: 3, step: 0.1, val: 1, descr: "schiaccia o allunga in orizzontale (fattore \\(1/|b|\\)); con \\(b<0\\) ribalta rispetto all'asse \\(y\\)" },
      { k: "c", min: -5, max: 5, step: 0.1, val: 0, descr: "trasla in orizzontale: a destra se \\(c>0\\)" },
      { k: "d", min: -5, max: 5, step: 0.1, val: 0, descr: "trasla in verticale: in alto se \\(d>0\\)" },
    ],
    vista: [-8, 6, 8, -6],
    g: (x, p, f) => p.a * f(p.b * (x - p.c)) + p.d,
    originale: true,
    formula(p, fn, col) {
      const cTerm = p.c === 0 ? "x" : `x ${p.c > 0 ? "-" : "+"} ${col("c", num(Math.abs(p.c)))}`;
      const arg = `${col("b", num(p.b))}\\,(${cTerm})`;
      return `y = ${col("a", num(p.a))}\\,${fn.wrap(arg)} ${p.d < 0 ? "-" : "+"} ${col("d", num(Math.abs(p.d)))}`;
    },
    domanda: "Porta \\(b\\) da \\(1\\) a \\(2\\): il grafico si allarga o si stringe? Perché con \\(b=0\\) diventa una retta orizzontale? Con \\(|x|\\), che differenza c'è fra cambiare \\(a\\) e cambiare \\(b\\)?",
    sfida: {
      genera(fnKey) {
        const s = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const pari = fnKey === "x2" || fnKey === "abs";
        return { a: s([-2, -1, -0.5, 0.5, 2, 3]), b: s(pari ? [1, 2, 0.5] : [-2, -1, 0.5, 2]), c: s([-3, -2, -1, 1, 2, 3]), d: s([-3, -2, -1, 1, 2]) };
      },
      aiuti: {
        a: "Confronta l'altezza: il bersaglio è più «alto», più basso o ribaltato? Lavora su \\(a\\).",
        b: "Confronta la larghezza: il bersaglio è più stretto o più largo? Il fattore è \\(1/|b|\\). Lavora su \\(b\\).",
        c: "Il bersaglio è spostato a destra o a sinistra? Lavora su \\(c\\).",
        d: "Il bersaglio è spostato in alto o in basso? Lavora su \\(d\\).",
      },
    },
  };

  /* 2. Fenomeni vibratori: y = A sin(ω x + φ) */
  GRAFICI.oscillazioni = {
    titolo: "Oscillazioni armoniche",
    sottotitolo: "ampiezza, pulsazione, fase",
    parametri: [
      { k: "a", nome: "A", min: 0, max: 4, step: 0.1, val: 2, descr: "ampiezza: l'oscillazione va da \\(-A\\) a \\(A\\)" },
      { k: "b", nome: "\\omega", min: 0.2, max: 4, step: 0.1, val: 1, descr: "pulsazione: il periodo è \\(T = 2\\pi/\\omega\\)" },
      { k: "c", nome: "\\varphi", min: -3.2, max: 3.2, step: 0.1, val: 0, descr: "fase: sposta l'onda in orizzontale di \\(-\\varphi/\\omega\\)" },
    ],
    vista: [-7, 5, 7, -5],
    g: (x, p) => p.a * Math.sin(p.b * x + p.c),
    riferimento: (x) => Math.sin(x),
    formula: (p, fn, col) => `y = ${col("a", num(p.a))}\\,\\sin\\!\\big(${col("b", num(p.b))}\\,x ${p.c < 0 ? "-" : "+"} ${col("c", num(Math.abs(p.c)))}\\big)`,
    letture: (p) => `periodo T = 2π/ω ≈ ${numTxt(2 * Math.PI / p.b, 2)} · frequenza ≈ ${numTxt(p.b / (2 * Math.PI), 3)}`,
    domanda: "Raddoppia \\(\\omega\\): che cosa succede al periodo? E che cosa cambia se aumenti \\(\\varphi\\) di \\(2\\pi\\)?",
    sfida: {
      genera() {
        const s = (arr) => arr[Math.floor(Math.random() * arr.length)];
        return { a: s([1, 1.5, 2, 3]), b: s([0.5, 1, 2, 3]), c: s([-1.5, -1, 0, 1, 1.5]) };
      },
      aiuti: { a: "Guarda l'altezza delle creste: lavora su \\(A\\).", b: "Conta quante oscillazioni ci sono in un intervallo: lavora su \\(\\omega\\).", c: "Le creste sono spostate? Lavora su \\(\\varphi\\)." },
    },
  };

  /* 3. Dalla secante alla tangente */
  GRAFICI.tangente = {
    titolo: "Dalla secante alla tangente",
    sottotitolo: "il rapporto incrementale quando \\(h \\to 0\\)",
    funzioni: ["x2", "x3", "sin", "exp", "log", "sqrt"],
    iniziale: "x2",
    parametri: [
      { k: "a", nome: "x_0", min: -3, max: 3, step: 0.05, val: 1, descr: "il punto in cui si calcola la derivata" },
      { k: "b", nome: "h", min: -2, max: 2, step: 0.01, val: 1.5, descr: "l'incremento: trascinalo verso \\(0\\) e guarda la secante" },
    ],
    vista: [-4, 6, 4, -3],
    originale: true,
    solo_originale: true,
    disegna(board, st) {
      const f = () => st.fn().f;
      const x0 = () => st.p().a, hh = () => st.p().b;
      const P = board.create("point", [() => x0(), () => f()(x0())], { name: "P", fixed: true, size: 4, color: st.colore("a"), label: { offset: [-14, 12] } });
      const Q = board.create("point", [() => x0() + hh(), () => f()(x0() + hh())], { name: "Q", fixed: true, size: 4, color: st.colore("b"), label: { offset: [6, 12] } });
      board.create("line", [P, Q], { strokeColor: st.colore("b"), strokeWidth: 2.5, dash: 0, name: "", visible: () => Math.abs(hh()) > 1e-9 });
      board.create("functiongraph", [(x) => f()(x0()) + derivata(f(), x0()) * (x - x0())], { strokeColor: st.colore("c"), strokeWidth: 2, dash: 2 });
    },
    formula(p, fn, col) {
      const f = fn.f, x0 = p.a, hh = p.b;
      const r = Math.abs(hh) < 1e-9 ? NaN : (f(x0 + hh) - f(x0)) / hh;
      return `\\frac{f(${col("a", num(x0, 2))} + ${col("b", num(hh, 2))}) - f(${col("a", num(x0, 2))})}{${col("b", num(hh, 2))}} = ${isFinite(r) ? col("b", num(r, 3)) : "\\;?"} \\qquad f'(${col("a", num(x0, 2))}) = ${col("c", num(derivata(f, x0), 3))}`;
    },
    legenda: [["b", "secante PQ", ""], ["c", "tangente in P", "dashed"]],
    domanda: "Trascina \\(h\\) verso \\(0\\), da destra e da sinistra: il coefficiente angolare della secante a che numero si avvicina? Prova con \\(\\sqrt{x}\\) in \\(x_0 = 0\\): che cosa succede?",
  };

  /* 4. Polinomi di Taylor (Mac Laurin) */
  const TAYLOR = {
    exp: { tex: "e^x", f: Math.exp, coef: (k) => 1 / fatt(k) },
    sin: { tex: "\\sin x", f: Math.sin, coef: (k) => (k % 2 === 0 ? 0 : (((k - 1) / 2) % 2 === 0 ? 1 : -1) / fatt(k)) },
    cos: { tex: "\\cos x", f: Math.cos, coef: (k) => (k % 2 === 1 ? 0 : ((k / 2) % 2 === 0 ? 1 : -1) / fatt(k)) },
    log1: { tex: "\\ln(1+x)", f: (x) => Math.log(1 + x), coef: (k) => (k === 0 ? 0 : (k % 2 === 1 ? 1 : -1) / k) },
    geo: { tex: "\\dfrac{1}{1-x}", f: (x) => 1 / (1 - x), coef: () => 1 },
  };
  GRAFICI.taylor = {
    titolo: "Polinomi di Mac Laurin",
    sottotitolo: "l'approssimazione migliora al crescere del grado",
    funzioniCustom: TAYLOR,
    iniziale: "sin",
    parametri: [{ k: "a", nome: "n", min: 0, max: 15, step: 1, val: 1, descr: "il grado del polinomio \\(T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(0)}{k!}\\,x^k\\)" }],
    vista: [-7, 4, 7, -4],
    originale: true,
    solo_originale: true,
    g: (x, p, f, key) => { let s = 0, xp = 1; for (let k = 0; k <= p.a; k++) { s += TAYLOR[key].coef(k) * xp; xp *= x; } return s; },
    formula(p, fn, col, key) {
      const termini = [];
      for (let k = 0; k <= p.a && termini.length < 6; k++) {
        const c = TAYLOR[key].coef(k);
        if (c === 0) continue;
        const den = Math.round(1 / Math.abs(c));
        const coef = Math.abs(c) === 1 ? "" : (Math.abs(1 / c - Math.round(1 / c)) < 1e-9 ? `\\frac{1}{${den}}` : num(Math.abs(c), 3));
        const pot = k === 0 ? (coef ? "" : "1") : k === 1 ? "x" : `x^{${k}}`;
        termini.push({ s: c < 0 ? "-" : "+", t: (coef + pot) || "1" });
      }
      let tex = termini.map((t, i) => (i === 0 ? (t.s === "-" ? "-" : "") : ` ${t.s} `) + t.t).join("");
      if (!tex) tex = "0";
      return `T_{${col("a", p.a)}}(x) = ${tex}${termini.length >= 6 ? " + \\cdots" : ""}`;
    },
    legenda: [["orig", "f(x)", "dashed"], ["b", "polinomio T_n", ""]],
    domanda: "Con \\(\\ln(1+x)\\) o \\(\\dfrac{1}{1-x}\\) alza il grado: il polinomio migliora ovunque, o solo per \\(|x|<1\\)? E con \\(\\sin x\\), perché \\(T_1\\) e \\(T_2\\) coincidono?",
  };

  // ------------------------------------------------------------------ motore
  function monta(el) {
    if (el.dataset.montato) return;
    const R = GRAFICI[el.dataset.grafico];
    if (!R) { el.textContent = "Grafico non trovato: " + el.dataset.grafico; return; }
    el.dataset.montato = "1";
    el.innerHTML = "";

    const funzioni = R.funzioniCustom || (R.funzioni ? Object.fromEntries(R.funzioni.map((k) => [k, F[k]])) : null);
    let chiave = R.iniziale || (funzioni ? Object.keys(funzioni)[0] : null);
    let modo = "esplora", bersaglio = null, vinte = 0, giaVinta = false, board = null, anim = null;

    // --- intestazione
    const testa = h("div", { class: "gi-testa" }, `<span class="gi-titolo">${R.titolo}<small>${R.sottotitolo || ""}</small></span>`);
    const tabs = h("div", { class: "gi-tabs" });
    const tEsplora = h("button", { class: "gi-tab", "aria-selected": "true" }, "Esplora");
    const tSfida = h("button", { class: "gi-tab", "aria-selected": "false" }, "Sfida");
    if (R.sfida) { tabs.append(tEsplora, tSfida); testa.append(tabs); }
    el.append(testa);

    const corpo = h("div", { class: "gi-corpo" });
    const sx = h("div"), dx = h("div");
    corpo.append(sx, dx);
    el.append(corpo);

    const formula = h("div", { class: "gi-formula" });
    const bid = "gi-" + Math.random().toString(36).slice(2);
    const boardEl = h("div", { class: "gi-board jxgbox", id: bid, "aria-label": "Grafico interattivo: " + R.titolo });
    const legenda = h("div", { class: "gi-legenda" });
    sx.append(formula, boardEl, legenda);

    // --- scelta della funzione
    if (funzioni) {
      dx.append(h("div", {}, "<strong>Funzione</strong>"));
      const chips = h("div", { class: "gi-chips" });
      for (const [k, v] of Object.entries(funzioni)) {
        const b = h("button", { class: "gi-chip", "aria-pressed": String(k === chiave) }, `\\(${v.tex}\\)`);
        b.onclick = () => {
          chiave = k;
          chips.querySelectorAll(".gi-chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
          if (modo === "sfida") nuovaSfida();
          aggiorna(true);
        };
        chips.append(b);
      }
      dx.append(chips);
    }

    // --- cursori
    const input = {}, valEl = {};
    R.parametri.forEach((p, i) => {
      const k = p.k;
      const ctrl = h("div", { class: "gi-ctrl", style: `--c: var(--gi-${k})` });
      const riga = h("div", { class: "gi-riga" });
      riga.append(h("span", { class: "gi-nome", style: `color: var(--gi-${k})` }, `\\(${p.nome || k}\\)`));
      const destra = h("span");
      const play = h("button", { class: "gi-play", title: "Anima " + (p.nome || k), "aria-label": "Anima" }, "▶");
      valEl[k] = h("span", { class: "gi-val" });
      destra.append(play, valEl[k]);
      riga.append(destra);
      input[k] = h("input", { type: "range", min: p.min, max: p.max, step: p.step, value: p.val, "aria-label": p.nome || k });
      input[k].addEventListener("input", () => aggiorna());
      ctrl.append(riga, input[k]);
      if (p.descr) ctrl.append(h("small", {}, p.descr));
      play.onclick = () => anima(k, play);
      dx.append(ctrl);
    });

    const bottoni = h("div");
    const azzera = h("button", { class: "gi-btn" }, "Azzera");
    azzera.onclick = () => { R.parametri.forEach((p) => (input[p.k].value = p.val)); aggiorna(); };
    bottoni.append(azzera);
    dx.append(bottoni);

    const letture = h("div", { class: "gi-letture", hidden: "" });
    dx.append(letture);

    const pEsplora = h("div", { class: "gi-domanda" }, `<strong>Prova tu.</strong> ${R.domanda || ""}`);
    if (R.domanda) dx.append(pEsplora);

    // --- sfida
    const pSfida = h("div", { hidden: "" });
    let metro, vinto, punti, aiuto;
    if (R.sfida) {
      pSfida.innerHTML = `<p style="margin:.6em 0 .2em">Riproduci la curva <strong style="color:var(--gi-target)">rossa</strong> muovendo i cursori.</p>`;
      metro = h("div", { class: "gi-metro" }, "<div></div>");
      const riga = h("div", { style: "display:flex;justify-content:space-between;align-items:center" });
      vinto = h("span", { class: "gi-vinto" });
      punti = h("span", { class: "gi-punti" }, "Sfide vinte: 0");
      riga.append(vinto, punti);
      const nuova = h("button", { class: "gi-btn primario" }, "Nuova sfida");
      const bAiuto = h("button", { class: "gi-btn" }, "Suggerimento");
      aiuto = h("div", { class: "gi-domanda", hidden: "" });
      nuova.onclick = nuovaSfida;
      bAiuto.onclick = () => {
        const k = R.parametri.map((p) => p.k).find((k) => Math.abs(val(k) - bersaglio[k]) > 0.051) || R.parametri[0].k;
        aiuto.innerHTML = mj(R.sfida.aiuti[k]);
        aiuto.hidden = false;
        typeset(aiuto);
      };
      pSfida.append(metro, riga, nuova, bAiuto, aiuto);
      dx.append(pSfida);
      tEsplora.onclick = () => setModo("esplora");
      tSfida.onclick = () => setModo("sfida");
    }

    // --- stato
    const val = (k) => parseFloat(input[k].value);
    const p = () => Object.fromEntries(R.parametri.map((q) => [q.k, val(q.k)]));
    const fn = () => (funzioni ? funzioni[chiave] : { f: (x) => x, tex: "x", wrap: (a) => a });
    const colore = (k) => css(el, "--gi-" + k);
    const col = (k, s) => `\\color{${colore(k)}}{${s}}`;
    const g = (x, q) => (R.g ? R.g(x, q, fn().f, chiave) : NaN);
    const st = { p, fn, colore };

    function creaBoard() {
      if (board) JXG.JSXGraph.freeBoard(board);
      const muted = css(el, "--gi-muted"), line = css(el, "--gi-line");
      const assi = { strokeColor: muted, ticks: { strokeColor: line, majorHeight: -1, label: { strokeColor: muted } } };
      board = JXG.JSXGraph.initBoard(bid, {
        boundingbox: R.vista, axis: true, keepAspectRatio: false, showCopyright: false, showNavigation: false,
        pan: { enabled: true, needShift: false, needTwoFingers: true }, zoom: { wheel: true, needShift: true },
        defaultAxes: { x: assi, y: assi },
      });
      if (R.originale) board.create("functiongraph", [(x) => fn().f(x)], { strokeColor: colore("orig"), strokeWidth: 2.2, dash: 2, highlight: false });
      if (R.riferimento) board.create("functiongraph", [R.riferimento], { strokeColor: colore("orig"), strokeWidth: 2, dash: 2, highlight: false });
      if (R.sfida) board.create("functiongraph", [(x) => (bersaglio ? g(x, bersaglio) : NaN)], { strokeColor: colore("target"), strokeWidth: 4, dash: 1, highlight: false, visible: () => modo === "sfida" });
      if (R.g) board.create("functiongraph", [(x) => g(x, p())], { strokeColor: colore("b"), strokeWidth: 3.5, highlight: false });
      if (R.disegna) R.disegna(board, st);
    }

    function scriviLegenda() {
      const voci = R.legenda || [
        ...(R.originale || R.riferimento ? [["orig", R.riferimento ? "y = \\sin x" : "y = f(x)", "dashed"]] : []),
        ...(R.g ? [["b", "la tua funzione", ""]] : []),
        ...(R.sfida ? [["target", "bersaglio", "dotted"]] : []),
      ];
      legenda.innerHTML = voci
        .filter((v) => v[0] !== "target" || modo === "sfida")
        .map(([k, t, s]) => `<span><i style="border-color:var(--gi-${k});border-top-style:${s || "solid"}"></i>${/[\\_^]/.test(t) ? `\\(${t}\\)` : t}</span>`)
        .join("");
      legenda.innerHTML = mj(legenda.innerHTML);
      typeset(legenda);
    }

    function vicinanza() {
      let s = 0, n = 0;
      const [x0, , x1] = R.vista;
      for (let x = x0; x <= x1; x += (x1 - x0) / 160) {
        const y1 = g(x, p()), y2 = g(x, bersaglio);
        const ok1 = isFinite(y1), ok2 = isFinite(y2);
        if (!ok1 && !ok2) continue;
        n++;
        s += ok1 !== ok2 ? 4 : Math.min(Math.abs(y1 - y2), 4);
      }
      return n ? Math.max(0, 1 - s / n / 2) : 0;
    }

    function aggiorna(ricrea) {
      if (ricrea) { creaBoard(); scriviLegenda(); }
      board.update();
      R.parametri.forEach((q) => (valEl[q.k].textContent = numTxt(val(q.k), q.step < 0.05 ? 2 : 1)));
      formula.innerHTML = mj(`\\(${R.formula(p(), fn(), col, chiave)}\\)`);
      typeset(formula);
      if (R.letture) { letture.hidden = false; letture.textContent = R.letture(p(), fn()); }
      if (modo === "sfida" && bersaglio) {
        const q = vicinanza();
        metro.firstChild.style.width = (q * 100).toFixed(0) + "%";
        const esatto = R.parametri.every((pp) => Math.abs(val(pp.k) - bersaglio[pp.k]) < 0.051) || q > 0.995;
        if (esatto && !giaVinta) { giaVinta = true; vinte++; punti.textContent = "Sfide vinte: " + vinte; vinto.textContent = "Centrato! 🎯"; }
        else if (!esatto) vinto.textContent = q > 0.9 ? "Ci sei quasi…" : "";
      }
    }

    function nuovaSfida() {
      bersaglio = R.sfida.genera(chiave);
      giaVinta = false; vinto.textContent = ""; aiuto.hidden = true;
      R.parametri.forEach((q) => (input[q.k].value = q.val));
      aggiorna();
    }

    function setModo(m) {
      modo = m;
      tEsplora.setAttribute("aria-selected", String(m === "esplora"));
      tSfida.setAttribute("aria-selected", String(m === "sfida"));
      pEsplora.hidden = m !== "esplora";
      pSfida.hidden = m !== "sfida";
      scriviLegenda();
      if (m === "sfida" && !bersaglio) nuovaSfida(); else aggiorna();
    }

    function anima(k, btn) {
      if (anim) {
        cancelAnimationFrame(anim.id); anim.btn.classList.remove("on"); anim.btn.textContent = "▶";
        const stesso = anim.k === k; anim = null;
        if (stesso) return;
      }
      const inp = input[k], lo = +inp.min, hi = +inp.max, passo = +inp.step, t0 = performance.now();
      btn.classList.add("on"); btn.textContent = "⏸";
      const step = (t) => {
        if (!document.body.contains(el)) return;
        const v = lo + (hi - lo) * (0.5 - 0.5 * Math.cos((t - t0) / 1500));
        inp.value = (Math.round(v / passo) * passo).toFixed(3);
        aggiorna();
        anim.id = requestAnimationFrame(step);
      };
      anim = { k, btn, id: requestAnimationFrame(step) };
    }

    // cambio di tema chiaro/scuro: si ridisegna con i colori giusti
    new MutationObserver(() => aggiorna(true)).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

    aggiorna(true);
    typeset(el);
  }

  function montaTutti() {
    if (!window.JXG) return;
    document.querySelectorAll(".gi[data-grafico]").forEach(monta);
  }
  if (window.document$) document$.subscribe(montaTutti);
  else document.addEventListener("DOMContentLoaded", montaTutti);
  window.GraficiAnalisi = GRAFICI;
})();
