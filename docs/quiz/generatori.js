// Domande generate del modulo «Analisi Matematica 1» (mathematical-analysis-1).
// Ogni generatore riceve rng() (numeri in [0,1) deterministici) e la lingua ("it" | "en") e restituisce
// { testo, opzioni[4], corretta, spiegazione, _dati }. Calcoli esatti con frazioni (classe Fr).
// _dati (parametri e valori delle opzioni in forma macchina) serve solo al gemello di verifica
// (verifica/gemelli.py): l'app lo ignora.
(function () {
  "use strict";
  var MOD = "mathematical-analysis-1";
  window.QUIZ_GEN = window.QUIZ_GEN || {};
  var G = (window.QUIZ_GEN[MOD] = window.QUIZ_GEN[MOD] || []);
  var SITO = { it: "https://fabiofurini.github.io/analisi-matematica-1/",
               en: "https://fabiofurini.github.io/mathematical-analysis-1/" };
  function L(it, en) { return { it: SITO.it + it, en: SITO.en + en }; }
  function T(lingua, it, en) { return lingua === "it" ? it : en; }

  // ------------------------------------------------------------------ numeri casuali
  function ri(rng, a, b) { return a + Math.floor(rng() * (b - a + 1)); }
  function riNZ(rng, a, b) { var v; do { v = ri(rng, a, b); } while (v === 0); return v; }
  function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
  function mescola(rng, arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // ------------------------------------------------------------------ frazioni esatte
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function Fr(n, d) {
    if (d === undefined) d = 1;
    if (d === 0) throw new Error("denominatore nullo");
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d) || 1;
    this.n = n / g; this.d = d / g;
  }
  function F(x) { return x instanceof Fr ? x : new Fr(x, 1); }
  Fr.prototype.add = function (o) { o = F(o); return new Fr(this.n * o.d + o.n * this.d, this.d * o.d); };
  Fr.prototype.sub = function (o) { o = F(o); return new Fr(this.n * o.d - o.n * this.d, this.d * o.d); };
  Fr.prototype.mul = function (o) { o = F(o); return new Fr(this.n * o.n, this.d * o.d); };
  Fr.prototype.div = function (o) { o = F(o); return new Fr(this.n * o.d, this.d * o.n); };
  Fr.prototype.neg = function () { return new Fr(-this.n, this.d); };
  Fr.prototype.pow = function (k) { var r = F(1); for (var i = 0; i < k; i++) r = r.mul(this); return r; };
  Fr.prototype.eq = function (o) { o = F(o); return this.n === o.n && this.d === o.d; };
  Fr.prototype.sgn = function () { return Math.sign(this.n); };
  Fr.prototype.cmp = function (o) { return this.sub(o).sgn(); };
  Fr.prototype.abs = function () { return new Fr(Math.abs(this.n), this.d); };
  Fr.prototype.key = function () { return this.n + "/" + this.d; };
  Fr.prototype.tex = function () {
    if (this.d === 1) return String(this.n);
    return (this.n < 0 ? "-" : "") + "\\frac{" + Math.abs(this.n) + "}{" + this.d + "}";
  };
  function fatt(k) { var r = 1; for (var i = 2; i <= k; i++) r *= i; return r; }
  function binom(n, k) { return fatt(n) / (fatt(k) * fatt(n - k)); }

  // ------------------------------------------------------------------ formattazione
  // polinomio: coefficienti dal grado massimo al termine noto
  function poli(coef, v) {
    v = v || "x";
    var g = coef.length - 1, s = "";
    for (var i = 0; i < coef.length; i++) {
      var c = F(coef[i]), k = g - i;
      if (c.n === 0) continue;
      var m = c.abs(), cs = (k > 0 && m.eq(1)) ? "" : m.tex();
      var vs = k === 0 ? "" : (k === 1 ? v : v + "^" + k);
      var termine = cs + vs;
      if (s === "") s = (c.n < 0 ? "-" : "") + termine;
      else s += (c.n < 0 ? " - " : " + ") + termine;
    }
    return s === "" ? "0" : s;
  }
  function valTex(v) { return v === "+inf" ? "+\\infty" : (v === "-inf" ? "-\\infty" : v.tex()); }
  function valKey(v) { return typeof v === "string" ? v : v.key(); }
  function espTex(e) {   // e^{e} con e frazione
    if (e.n === 0) return "1";
    if (e.d === 1) return "e^{" + e.n + "}";
    return "e^{" + (e.n < 0 ? "-" : "") + "\\frac{" + Math.abs(e.n) + "}{" + e.d + "}}";
  }
  function compTex(p, q) {   // p + q i con p, q interi
    if (q === 0) return String(p);
    var qs = q === 1 ? "i" : (q === -1 ? "-i" : q + "\\,i");
    if (p === 0) return qs;
    if (q > 0) return p + " + " + (q === 1 ? "i" : q + "\\,i");
    return p + " - " + (q === -1 ? "i" : (-q) + "\\,i");
  }
  // insiemi di numeri reali come unione di intervalli {lo, li, hi, hi_i}; lo/hi null = infinito
  function insTex(ins) {
    if (ins.length === 0) return "\\emptyset";
    return ins.map(function (I) {
      if (I.lo === null && I.hi === null) return "\\R";
      if (I.lo !== null && I.hi !== null && I.lo.eq(I.hi)) return "\\{" + I.lo.tex() + "\\}";
      return (I.lo === null ? "(-\\infty" : (I.li ? "[" : "(") + I.lo.tex()) + ", " +
             (I.hi === null ? "+\\infty)" : I.hi.tex() + (I.hi_i ? "]" : ")"));
    }).join(" \\cup ");
  }
  function insKey(ins) {
    return ins.map(function (I) {
      return [I.lo === null ? "-inf" : I.lo.key(), I.li ? 1 : 0, I.hi === null ? "inf" : I.hi.key(), I.hi_i ? 1 : 0].join(",");
    }).join(";");
  }
  // costruisce l'insieme {x : pred(x)} noti i punti critici (pred valutato sui punti e tra i punti)
  function insiemeDa(crit, pred) {
    var c = crit.map(F).sort(function (a, b) { return a.cmp(b); });
    var u = [];
    c.forEach(function (x) { if (!u.length || !u[u.length - 1].eq(x)) u.push(x); });
    var pezzi = [];   // [tipo, a, b, dentro]  tipo 'I' intervallo aperto (a,b) / 'P' punto
    for (var i = 0; i <= u.length; i++) {
      var a = i === 0 ? null : u[i - 1], b = i === u.length ? null : u[i];
      var t = a === null ? (b === null ? F(0) : b.sub(1)) : (b === null ? a.add(1) : a.add(b).div(2));
      pezzi.push(["I", a, b, pred(t)]);
      if (b !== null) pezzi.push(["P", b, b, pred(b)]);
    }
    var ins = [], cur = null;
    pezzi.forEach(function (p) {
      if (p[3]) {
        if (cur === null) cur = p[0] === "I" ? { lo: p[1], li: false, hi: p[2], hi_i: false } : { lo: p[1], li: true, hi: p[1], hi_i: true };
        else { cur.hi = p[2]; cur.hi_i = p[0] === "P"; }
      } else if (cur !== null) { ins.push(cur); cur = null; }
    });
    if (cur !== null) ins.push(cur);
    return ins;
  }
  function verificaRel(v, rel) {   // v Fr, rel in > >= < <=
    var s = v.sgn();
    return rel === ">" ? s > 0 : rel === ">=" ? s >= 0 : rel === "<" ? s < 0 : s <= 0;
  }
  var REL_TEX = { ">": ">", ">=": "\\ge", "<": "<", "<=": "\\le" };

  // chiude il generatore: controlla 4 opzioni distinte, mescola la posizione della corretta
  function chiudi(rng, testo, corretta, distr, spieg, dati) {
    var opz = [corretta].concat(distr);
    var testi = opz.map(function (o) { return o.t; });
    var chiavi = opz.map(function (o) { return o.k; });
    for (var i = 0; i < 4; i++) for (var j = i + 1; j < 4; j++)
      if (testi[i] === testi[j] || chiavi[i] === chiavi[j]) return null;
    var ordine = mescola(rng, [0, 1, 2, 3]);
    dati.valori = ordine.map(function (k) { return chiavi[k]; });
    return { testo: testo, opzioni: ordine.map(function (k) { return testi[k]; }),
             corretta: ordine.indexOf(0), spiegazione: spieg, _dati: dati };
  }
  function ripeti(fn) {   // rigenera finché i dati non danno 4 opzioni distinte
    return function (rng, lingua) {
      for (var t = 0; t < 500; t++) { var r = fn(rng, lingua); if (r) return r; }
      throw new Error("generatore: nessuna istanza valida");
    };
  }
  function O(t, k) { return { t: "$" + t + "$", k: k }; }        // opzione matematica
  function fat(r) { return r === 0 ? "x" : (r < 0 ? "x + " + (-r) : "x - " + r); }   // x - r
  function lin1(a) {   // "1 + a x" scritto bene anche con a negativo o |a| = 1
    var m = Math.abs(a) === 1 ? "" : String(Math.abs(a));
    return "1 " + (a < 0 ? "- " : "+ ") + m + "x";
  }
  function OT(t, k) { return { t: t, k: k }; }                   // opzione testuale

  // ================================================================== 1. disequazione razionale
  G.push({
    id: "am1-g-disequazione", livello: "facile", capitolo: "numbers-02-number-sets",
    link: L("esercizi/es-numeri-02-equazioni-disequazioni/", "exercises/es-numbers-02-equations-inequalities/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, -5, 4), b = ri(rng, a + 1, 5), c = ri(rng, -5, 5);
      if (c === a || c === b) return null;
      var rel = pick(rng, [">", ">=", "<", "<="]);
      var num = function (x) { return x.sub(a).mul(x.sub(b)); };
      var f = function (rr) { return function (x) { return !x.eq(c) && verificaRel(num(x).div(x.sub(c)), rr); }; };
      var giusto = insiemeDa([a, b, c], f(rel));
      var opp = { ">": "<", ">=": "<=", "<": ">", "<=": ">=" }[rel];
      var stretta = rel.length === 1;
      var togg = stretta ? rel + "=" : rel.charAt(0);
      var d1 = insiemeDa([a, b], function (x) { return verificaRel(num(x), rel); });
      var d2 = insiemeDa([a, b, c], f(opp));
      var d3 = insiemeDa([a, b, c], function (x) { return verificaRel(num(x).mul(x.sub(c)), togg); });
      var testo = T(lingua, "Qual è l'insieme delle soluzioni della disequazione ", "What is the solution set of the inequality ") +
        "$\\frac{" + poli([1, -(a + b), a * b]) + "}{" + poli([1, -c]) + "} " + REL_TEX[rel] + " 0$?";
      var sp = T(lingua,
        "Il numeratore si annulla in $x = " + a + "$ e $x = " + b + "$, il denominatore in $x = " + c + "$ (sempre escluso). Studiando il segno dei fattori si ottiene $" + insTex(giusto) + "$.",
        "The numerator vanishes at $x = " + a + "$ and $x = " + b + "$, the denominator at $x = " + c + "$ (always excluded). Studying the sign of the factors gives $" + insTex(giusto) + "$.");
      return chiudi(rng, testo, O(insTex(giusto), insKey(giusto)),
        [O(insTex(d1), insKey(d1)), O(insTex(d2), insKey(d2)), O(insTex(d3), insKey(d3))], sp,
        { param: { a: a, b: b, c: c, rel: rel } });
    })
  });

  // ================================================================== 2. insieme di definizione
  G.push({
    id: "am1-g-dominio", livello: "facile", capitolo: "functions-02-real-functions",
    link: L("esercizi/es-funzioni-01-insiemi-definizione/", "exercises/es-functions-01-domains/"),
    genera: ripeti(function (rng, lingua) {
      var fam = ri(rng, 1, 4), a = ri(rng, -5, 4), b = ri(rng, a + 1, 6);
      var sa = poli([1, -a]), sb = poli([1, -b]), fx, pred, distr;
      var I = function (lo, li, hi, hi_i) { return { lo: lo === null ? null : F(lo), li: li, hi: hi === null ? null : F(hi), hi_i: hi_i }; };
      if (fam === 1) {
        fx = "\\frac{\\sqrt{" + sa + "}}{" + sb + "}";
        pred = function (x) { return x.sub(a).sgn() >= 0 && !x.eq(b); };
        distr = [[I(a, true, null, false)], [I(a, false, b, false), I(b, false, null, false)], [I(null, false, a, true)]];
      } else if (fam === 2) {
        fx = "\\frac{\\log(" + sa + ")}{" + sb + "}";
        pred = function (x) { return x.sub(a).sgn() > 0 && !x.eq(b); };
        distr = [[I(a, true, b, false), I(b, false, null, false)], [I(a, false, null, false)], [I(null, false, a, false)]];
      } else if (fam === 3) {
        if (a === -b) return null;
        fx = "\\sqrt{" + poli([-1, a + b, -a * b]) + "}";
        pred = function (x) { return x.sub(a).mul(F(b).sub(x)).sgn() >= 0; };
        distr = [[I(null, false, a, true), I(b, true, null, false)], [I(a, false, b, false)], [I(-b, true, -a, true)]];
      } else {
        fx = "\\log\\left(\\frac{" + sa + "}{" + sb + "}\\right)";
        pred = function (x) { return !x.eq(b) && x.sub(a).div(x.sub(b)).sgn() > 0; };
        distr = [[I(a, false, b, false)], [I(null, false, a, true), I(b, false, null, false)], [I(a, false, b, false), I(b, false, null, false)]];
      }
      var giusto = insiemeDa([a, b, -a, -b], pred);
      var testo = T(lingua, "Qual è l'insieme di definizione della funzione ", "What is the domain of the function ") + "$f(x) = " + fx + "$?";
      var sp = T(lingua,
        "Si impongono le condizioni di esistenza (argomento della radice $\\ge 0$, argomento del logaritmo $> 0$, denominatore $\\neq 0$) e si ottiene $" + insTex(giusto) + "$.",
        "Impose the existence conditions (square-root argument $\\ge 0$, logarithm argument $> 0$, denominator $\\neq 0$): the result is $" + insTex(giusto) + "$.");
      return chiudi(rng, testo, O(insTex(giusto), insKey(giusto)),
        distr.map(function (d) { return O(insTex(d), insKey(d)); }), sp, { param: { fam: fam, a: a, b: b } });
    })
  });

  // ================================================================== 3. limite di funzione razionale a ±infinito
  G.push({
    id: "am1-g-limite-razionale", livello: "facile", capitolo: "limits-03-polynomials-rational-functions",
    link: L("limiti/03-polinomi-razionali/#2-limiti-di-funzioni-razionali-a-pm-infty",
            "limits/03-polynomials-rational-functions/#2-limits-of-rational-functions-at-pm-infty"),
    genera: ripeti(function (rng, lingua) {
      var dp = ri(rng, 1, 3), dq = ri(rng, 1, 3), dir = pick(rng, [1, -1]);
      var P = [riNZ(rng, -4, 4)], Q = [riNZ(rng, -4, 4)];
      for (var i = 0; i < dp; i++) P.push(ri(rng, -5, 5));
      for (var j = 0; j < dq; j++) Q.push(ri(rng, -5, 5));
      if (Q[dq] === 0 || P[dp] === 0) return null;
      var rl = new Fr(P[0], Q[0]), rc = new Fr(P[dp], Q[dq]), corr;
      if (dp < dq) corr = F(0);
      else if (dp === dq) corr = rl;
      else corr = (rl.sgn() * Math.pow(dir, dp - dq)) > 0 ? "+inf" : "-inf";
      var pool = mescola(rng, [F(0), rl, "+inf", "-inf", rc]);
      var distr = [];
      pool.forEach(function (v) {
        if (distr.length < 3 && valKey(v) !== valKey(corr) && distr.every(function (w) { return valKey(w) !== valKey(v); })) distr.push(v);
      });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{x \\rr " + (dir > 0 ? "\\ip" : "\\im") + "} \\frac{" + poli(P) + "}{" + poli(Q) + "}$?";
      var sp = T(lingua,
        "Contano solo i termini di grado massimo: il limite è quello di $\\frac{" + poli([P[0]].concat(new Array(dp).fill(0))) + "}{" + poli([Q[0]].concat(new Array(dq).fill(0))) + "}$, cioè $" + valTex(corr) + "$.",
        "Only the highest-degree terms matter: the limit is that of $\\frac{" + poli([P[0]].concat(new Array(dp).fill(0))) + "}{" + poli([Q[0]].concat(new Array(dq).fill(0))) + "}$, i.e. $" + valTex(corr) + "$.");
      return chiudi(rng, testo, O(valTex(corr), valKey(corr)),
        distr.map(function (v) { return O(valTex(v), valKey(v)); }), sp, { param: { P: P, Q: Q, dir: dir } });
    })
  });

  // ================================================================== 4. limite di razionale in forma 0/0
  G.push({
    id: "am1-g-limite-zero-su-zero", livello: "facile", capitolo: "limits-02-computing-limits",
    link: L("limiti/02-calcolo-limiti/#11-teorema-dellalgebra-dei-limiti", "limits/02-computing-limits/#11-algebra-of-limits-theorem"),
    genera: ripeti(function (rng, lingua) {
      var c = riNZ(rng, -4, 4), d = ri(rng, -5, 5), e = ri(rng, -5, 5);
      if (d === c || e === c || d === e) return null;
      var corr = new Fr(c - d, c - e);
      var pool = [new Fr(c + d, c + e === 0 ? 1 : c + e), F(1), F(0), new Fr(d - c, c - e)];
      if (e !== 0) pool.push(new Fr(d, e));
      if (c + e === 0) pool.shift();
      pool = mescola(rng, pool);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var N = [1, -(c + d), c * d], D = [1, -(c + e), c * e];
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{x \\rr " + c + "} \\frac{" + poli(N) + "}{" + poli(D) + "}$?";
      var sp = T(lingua,
        "Forma $\\left[\\frac00\\right]$: si scompone e si semplifica il fattore $(" + poli([1, -c]) + ")$: $\\frac{" + poli([1, -d]) + "}{" + poli([1, -e]) + "} \\rr " + corr.tex() + "$.",
        "Form $\\left[\\frac00\\right]$: factor and cancel $(" + poli([1, -c]) + ")$: $\\frac{" + poli([1, -d]) + "}{" + poli([1, -e]) + "} \\rr " + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { c: c, d: d, e: e } });
    })
  });

  // ================================================================== 5. limiti notevoli
  G.push({
    id: "am1-g-limite-notevole", livello: "facile", capitolo: "limits-06-standard-limits",
    link: L("limiti/06-limiti-notevoli/#13-altri-limiti-notevoli", "limits/06-standard-limits/#13-other-fundamental-limits"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 5), a = riNZ(rng, -5, 5), b = riNZ(rng, -5, 5);
      if (Math.abs(a) === Math.abs(b)) return null;
      var ax = (a === 1 ? "" : a === -1 ? "-" : a) + "x", bx = (b === 1 ? "" : b === -1 ? "-" : b) + "x";
      var bx2 = (b === 1 ? "" : b === -1 ? "-" : b) + "x^2", f, corr, pool;
      var r = new Fr(a, b);
      if (tipo === 1) { f = "\\frac{\\sin(" + ax + ")}{" + bx + "}"; corr = r; pool = [new Fr(b, a), new Fr(a * a, b), F(1), F(0), new Fr(a, 2 * b)]; }
      else if (tipo === 2) { f = "\\frac{\\log(" + lin1(a) + ")}{" + bx + "}"; corr = r; pool = [new Fr(b, a), F(1), F(0), new Fr(a * a, b), r.neg()]; }
      else if (tipo === 3) { f = "\\frac{e^{" + ax + "} - 1}{" + bx + "}"; corr = r; pool = [new Fr(b, a), F(1), F(0), new Fr(a * a, b), r.neg()]; }
      else if (tipo === 4) { f = "\\frac{1 - \\cos(" + ax + ")}{" + bx2 + "}"; corr = new Fr(a * a, 2 * b); pool = [new Fr(a, 2 * b), new Fr(a * a, b), new Fr(1, 2 * b), F(0), corr.neg()]; }
      else { f = "\\frac{\\sin(" + ax + ")}{\\sin(" + bx + ")}"; corr = r; pool = [new Fr(b, a), F(1), F(0), new Fr(a * a, b * b)]; }
      pool = mescola(rng, pool);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{x \\rr 0} " + f + "$?";
      var sp = T(lingua,
        "Con le stime asintotiche dei limiti notevoli ($\\sin t \\sim t$, $\\log(1+t) \\sim t$, $e^t - 1 \\sim t$, $1 - \\cos t \\sim \\frac{t^2}{2}$ per $t \\rr 0$) il limite vale $" + corr.tex() + "$.",
        "With the asymptotic estimates from the fundamental limits ($\\sin t \\sim t$, $\\log(1+t) \\sim t$, $e^t - 1 \\sim t$, $1 - \\cos t \\sim \\frac{t^2}{2}$ as $t \\rr 0$) the limit is $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { tipo: tipo, a: a, b: b } });
    })
  });

  // ================================================================== 6. regole di derivazione
  G.push({
    id: "am1-g-derivata", livello: "facile", capitolo: "derivatives-04-differentiation-rules",
    link: L("derivate/04-regole-calcolo/#1-regole-di-calcolo-delle-derivate", "derivatives/04-differentiation-rules/#1-rules-for-computing-derivatives"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 3), f, x0, corr, pool, regola, coef;
      if (tipo === 1) {
        var p = riNZ(rng, -4, 4), q = riNZ(rng, -4, 4), r = riNZ(rng, -3, 3);
        x0 = 0; coef = [p, q, r]; f = "(" + poli([p, q]) + ")\\,e^{" + (r === 1 ? "" : r === -1 ? "-" : r) + "x}";
        corr = F(p + q * r); pool = [F(p), F(q * r), F(p * r), F(p - q * r)];
        regola = T(lingua, "regola del prodotto e della catena", "product rule and chain rule");
      } else if (tipo === 2) {
        var p2 = riNZ(rng, -4, 4), q2 = ri(rng, -4, 4), s = riNZ(rng, -3, 3), t = ri(rng, -4, 4);
        x0 = ri(rng, -2, 2);
        var den = s * x0 + t;
        if (den === 0 || p2 * t - q2 * s === 0) return null;
        coef = [p2, q2, s, t]; f = "\\frac{" + poli([p2, q2]) + "}{" + poli([s, t]) + "}";
        corr = new Fr(p2 * t - q2 * s, den * den);
        pool = [new Fr(p2 * t + q2 * s, den * den), new Fr(p2 * t - q2 * s, den), new Fr(q2 * s - p2 * t, den * den), new Fr(p2, s)];
        regola = T(lingua, "regola del quoziente", "quotient rule");
      } else {
        var pp = riNZ(rng, -3, 3), qq = ri(rng, -3, 3), n = ri(rng, 2, 3);
        x0 = pick(rng, [-2, -1, 1, 2]);
        var u = pp * x0 * x0 + qq;
        if (u === 0) return null;
        coef = [pp, qq, n]; f = "(" + poli([pp, 0, qq]) + ")^{" + n + "}";
        corr = F(n * Math.pow(u, n - 1) * 2 * pp * x0);
        pool = [F(n * Math.pow(u, n - 1)), F(n * Math.pow(u, n - 1) * 2 * pp), F(Math.pow(2 * pp * x0, n)), F((n - 1) * Math.pow(u, n - 1) * 2 * pp * x0)];
        regola = T(lingua, "regola della catena", "chain rule");
      }
      pool = mescola(rng, pool);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Sia $f(x) = " + f + "$. Quanto vale $f'(" + x0 + ")$?", "Let $f(x) = " + f + "$. What is $f'(" + x0 + ")$?");
      var sp = T(lingua, "Con la " + regola + " si calcola $f'(x)$ e lo si valuta in $x = " + x0 + "$: $f'(" + x0 + ") = " + corr.tex() + "$.",
        "Using the " + regola + " compute $f'(x)$ and evaluate it at $x = " + x0 + "$: $f'(" + x0 + ") = " + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { tipo: tipo, coef: coef, x0: x0 } });
    })
  });

  // ================================================================== 7. retta tangente
  function valPoli(c, x) { var r = F(0); for (var i = 0; i < c.length; i++) r = r.mul(x).add(c[i]); return r; }
  function derPoli(c) { var g = c.length - 1, d = []; for (var i = 0; i < g; i++) d.push(F(c[i]).mul(g - i)); return d.length ? d : [F(0)]; }
  G.push({
    id: "am1-g-tangente", livello: "facile", capitolo: "derivatives-01-the-derivative",
    link: L("derivate/01-funzione-derivata/#31-derivata-e-retta-tangente", "derivatives/01-the-derivative/#31-derivative-and-tangent-line"),
    genera: ripeti(function (rng, lingua) {
      var g = ri(rng, 2, 3), c = [riNZ(rng, -3, 3)];
      for (var i = 0; i < g; i++) c.push(ri(rng, -4, 4));
      var x0 = riNZ(rng, -2, 2), y0 = valPoli(c, x0), m = valPoli(derPoli(c), x0);
      if (m.n === 0 || y0.n === 0) return null;
      var q = y0.sub(m.mul(x0));
      var cErr = []; for (var k = 0; k < g; k++) cErr.push(F(c[k]));   // derivata senza il fattore esponente
      var mErr = valPoli(cErr, x0);
      var retta = function (mm, qq) { return "y = " + poli([mm, qq]); };
      var opt = function (mm, qq) { return O(retta(mm, qq), mm.key() + "|" + qq.key()); };
      if (mErr.eq(m) || mErr.n === 0) return null;
      var testo = T(lingua, "Qual è la retta tangente al grafico di $f(x) = " + poli(c) + "$ nel punto di ascissa $x_0 = " + x0 + "$?",
        "What is the tangent line to the graph of $f(x) = " + poli(c) + "$ at the point with abscissa $x_0 = " + x0 + "$?");
      var sp = T(lingua,
        "$f(" + x0 + ") = " + y0.tex() + "$, $f'(" + x0 + ") = " + m.tex() + "$; la tangente è $y = f(x_0) + f'(x_0)(x - x_0)$, cioè $" + retta(m, q) + "$.",
        "$f(" + x0 + ") = " + y0.tex() + "$, $f'(" + x0 + ") = " + m.tex() + "$; the tangent is $y = f(x_0) + f'(x_0)(x - x_0)$, i.e. $" + retta(m, q) + "$.");
      return chiudi(rng, testo, opt(m, q), [opt(m, y0), opt(m, y0.add(m.mul(x0))), opt(mErr, y0.sub(mErr.mul(x0)))], sp,
        { param: { c: c, x0: x0 } });
    })
  });

  // ================================================================== 8. coefficienti di MacLaurin
  G.push({
    id: "am1-g-maclaurin", livello: "facile", capitolo: "derivatives-08-approximations",
    link: L("derivate/08-approssimazioni/#3-formulasviluppo-di-taylor-con-resto-secondo-peano", "derivatives/08-approximations/#3-taylor-formulaexpansion-with-peano-remainder"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 5), a = pick(rng, [-3, -2, -1, 2, 3]), k = ri(rng, 2, 4), f, corr;
      var ak = Math.pow(a, k), ax = (a === -1 ? "-" : a) + "x";
      if (tipo === 1) { f = "e^{" + ax + "}"; corr = new Fr(ak, fatt(k)); }
      else if (tipo === 2) { if (k % 2 === 0) k = 3; ak = Math.pow(a, k); f = "\\sin(" + ax + ")"; corr = new Fr((k === 3 ? -1 : 1) * ak, fatt(k)); }
      else if (tipo === 3) { if (k % 2 === 1) k = pick(rng, [2, 4]); a = Math.abs(a); ax = (a === 1 ? "" : a) + "x"; ak = Math.pow(a, k); f = "\\cos(" + ax + ")"; corr = new Fr((k === 2 ? -1 : 1) * ak, fatt(k)); }
      else if (tipo === 4) { f = "\\log(" + lin1(a) + ")"; corr = new Fr((k % 2 === 0 ? -1 : 1) * ak, k); }
      else { f = "\\frac{1}{1 - " + ax + "}"; if (a < 0) f = "\\frac{1}{1 + " + (a === -1 ? "" : -a) + "x}"; corr = F(ak); }
      var pool = mescola(rng, [F(ak), new Fr(ak, k), corr.neg(), new Fr(a, fatt(k)), new Fr(ak, fatt(k)), new Fr(ak, k).neg()]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3 || corr.n === 0) return null;
      var testo = T(lingua, "Qual è il coefficiente di $x^{" + k + "}$ nel polinomio di MacLaurin di $f(x) = " + f + "$?",
        "What is the coefficient of $x^{" + k + "}$ in the Maclaurin polynomial of $f(x) = " + f + "$?");
      var sp = T(lingua, "Il coefficiente è $\\frac{f^{(" + k + ")}(0)}{" + k + "!}$; dallo sviluppo noto con $t = " + ax + "$ si ottiene $" + corr.tex() + "$.",
        "The coefficient is $\\frac{f^{(" + k + ")}(0)}{" + k + "!}$; from the known expansion with $t = " + ax + "$ we get $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { tipo: tipo, a: a, k: k } });
    })
  });

  // ================================================================== 9. integrale definito di un polinomio
  function primPoli(c) { var g = c.length - 1, r = []; for (var i = 0; i <= g; i++) r.push(F(c[i]).div(g - i + 1)); r.push(F(0)); return r; }
  G.push({
    id: "am1-g-integrale", livello: "facile", capitolo: "es-integrals-02-integrals",
    link: L("esercizi/es-integrali-02-integrali/", "exercises/es-integrals-02-integrals/"),
    genera: ripeti(function (rng, lingua) {
      var c = [riNZ(rng, -3, 3), ri(rng, -4, 4), ri(rng, -4, 4)];
      var a = ri(rng, -2, 1), b = ri(rng, a + 1, 3);
      var P = primPoli(c), corr = valPoli(P, b).sub(valPoli(P, a));
      if (corr.n === 0) return null;
      var Pbad = [F(c[0]), F(c[1]), F(c[2]), F(0)];   // primitiva senza dividere per l'esponente
      var pool = [valPoli(P, b).add(valPoli(P, a)), valPoli(Pbad, b).sub(valPoli(Pbad, a)), valPoli(c, b).sub(valPoli(c, a)), corr.neg()];
      pool = mescola(rng, pool);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\int_{" + a + "}^{" + b + "} \\left(" + poli(c) + "\\right) dx$?";
      var sp = T(lingua, "Una primitiva è $F(x) = " + poli(P) + "$ e l'integrale vale $F(" + b + ") - F(" + a + ") = " + corr.tex() + "$.",
        "An antiderivative is $F(x) = " + poli(P) + "$ and the integral equals $F(" + b + ") - F(" + a + ") = " + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { c: c, a: a, b: b } });
    })
  });

  // ================================================================== 10. somma di una serie geometrica
  G.push({
    id: "am1-g-serie-geometrica", livello: "facile", capitolo: "series-01-numerical-series",
    link: L("serie/01-serie-numeriche/#14-serie-geometrica", "series/01-numerical-series/#14-geometric-series"),
    genera: ripeti(function (rng, lingua) {
      var den = ri(rng, 2, 5), num = riNZ(rng, -den + 1, den - 1), q = new Fr(num, den);
      if (q.d !== den) return null;
      var c = riNZ(rng, -3, 3), k0 = ri(rng, 0, 2);
      var corr = F(c).mul(q.pow(k0)).div(F(1).sub(q));
      var pool = [F(c).div(F(1).sub(q)), F(c).mul(q.pow(k0)).div(F(1).add(q)), F(c).div(F(1).sub(q)).sub(c), F(c).mul(q.pow(k0 + 1)).div(F(1).sub(q))];
      pool = mescola(rng, pool);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var qt = q.d === 1 ? q.tex() : "\\left(" + q.tex() + "\\right)";
      var ct = c === 1 ? "" : (c === -1 ? "-" : c + "\\,");
      var testo = T(lingua, "Quanto vale la somma della serie ", "What is the sum of the series ") + "$\\sum_{k=" + k0 + "}^{\\infty} " + ct + qt + "^k$?";
      var sp = T(lingua, "Serie geometrica di ragione $q = " + q.tex() + "$, con $|q| < 1$: $\\sum_{k=" + k0 + "}^{\\infty} q^k = \\frac{q^{" + k0 + "}}{1 - q}$; la somma è $" + corr.tex() + "$.",
        "Geometric series with ratio $q = " + q.tex() + "$, $|q| < 1$: $\\sum_{k=" + k0 + "}^{\\infty} q^k = \\frac{q^{" + k0 + "}}{1 - q}$; the sum is $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { num: num, den: den, c: c, k0: k0 } });
    })
  });

  // ================================================================== 11. sommatoria di una progressione aritmetica
  G.push({
    id: "am1-g-sommatoria", livello: "facile", capitolo: "numbers-05-summations",
    link: L("numeri/05-sommatorie/#12-alcune-sommatorie-importanti", "numbers/05-summations/#12-some-important-summations"),
    genera: ripeti(function (rng, lingua) {
      var a = riNZ(rng, -5, 6), b = riNZ(rng, -6, 6), n = ri(rng, 10, 40);
      var corr = F(a * n * (n + 1) / 2 + b * n);
      var pool = mescola(rng, [F(a * n * (n + 1) / 2 + b), F(a * n * (n - 1) / 2 + b * n), F(a * n * n + b * n), F(a * n * (n + 1) + b * n)]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\sum_{k=1}^{" + n + "} \\left(" + poli([a, b], "k") + "\\right)$?";
      var sp = T(lingua, "$\\sum_{k=1}^{n} (a\\,k + b) = a\\,\\frac{n\\,(n+1)}{2} + b\\,n$ con $a = " + a + "$, $b = " + b + "$, $n = " + n + "$: il risultato è $" + corr.tex() + "$.",
        "$\\sum_{k=1}^{n} (a\\,k + b) = a\\,\\frac{n\\,(n+1)}{2} + b\\,n$ with $a = " + a + "$, $b = " + b + "$, $n = " + n + "$: the result is $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { a: a, b: b, n: n } });
    })
  });

  // ================================================================== 12. prodotto di numeri complessi
  G.push({
    id: "am1-g-complessi", livello: "facile", capitolo: "numbers-09-complex-numbers",
    link: L("numeri/09-numeri-complessi/#2-forma-algebrica-dei-numeri-complessi", "numbers/09-complex-numbers/#2-algebraic-form-of-complex-numbers"),
    genera: ripeti(function (rng, lingua) {
      var a = riNZ(rng, -4, 4), b = riNZ(rng, -4, 4), c = riNZ(rng, -4, 4), d = riNZ(rng, -4, 4);
      var o = function (p, q) { return O(compTex(p, q), p + "|" + q); };
      var testo = T(lingua, "Quanto vale il prodotto ", "What is the product ") + "$(" + compTex(a, b) + ")(" + compTex(c, d) + ")$?";
      var sp = T(lingua, "$(a + ib)(c + id) = (ac - bd) + i\\,(ad + bc)$, perché $i^2 = -1$: si ottiene $" + compTex(a * c - b * d, a * d + b * c) + "$.",
        "$(a + ib)(c + id) = (ac - bd) + i\\,(ad + bc)$, since $i^2 = -1$: the result is $" + compTex(a * c - b * d, a * d + b * c) + "$.");
      return chiudi(rng, testo, o(a * c - b * d, a * d + b * c),
        [o(a * c + b * d, a * d + b * c), o(a * c, b * d), o(a * c - b * d, a * d - b * c)], sp, { param: { a: a, b: b, c: c, d: d } });
    })
  });

  // ================================================================== 13. formula di Newton (binomio)
  G.push({
    id: "am1-g-binomio", livello: "facile", capitolo: "numbers-06-factorials-binomials",
    link: L("numeri/06-fattoriali-binomiali/#21-formula-di-newton", "numbers/06-factorials-binomials/#21-newtons-formula"),
    genera: ripeti(function (rng, lingua) {
      var n = ri(rng, 4, 6), k = ri(rng, 2, n - 1), p = pick(rng, [-2, -1, 1, 2, 3]), q = pick(rng, [-3, -2, -1, 2, 3]);
      var corr = F(binom(n, k) * Math.pow(p, n - k) * Math.pow(q, k));
      var pool = mescola(rng, [F(binom(n, k) * Math.pow(q, k)), F(binom(n, k) * Math.pow(p, k) * Math.pow(q, n - k)),
        F(binom(n, k - 1) * Math.pow(p, n - k + 1) * Math.pow(q, k - 1)), F(Math.pow(p, n - k) * Math.pow(q, k))]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Qual è il coefficiente di $x^{" + k + "}$ nello sviluppo di $(" + poli([q, p]) + ")^{" + n + "}$?",
        "What is the coefficient of $x^{" + k + "}$ in the expansion of $(" + poli([q, p]) + ")^{" + n + "}$?");
      var sp = T(lingua, "Formula di Newton: il termine in $x^{" + k + "}$ è $\\binom{" + n + "}{" + k + "} (" + p + ")^{" + (n - k) + "} (" + q + ")^{" + k + "}$, cioè $" + corr.tex() + "$.",
        "Newton's formula: the term in $x^{" + k + "}$ is $\\binom{" + n + "}{" + k + "} (" + p + ")^{" + (n - k) + "} (" + q + ")^{" + k + "}$, i.e. $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { n: n, k: k, p: p, q: q } });
    })
  });

  // ================================================================== 14. limiti con il numero di Nepero
  G.push({
    id: "am1-g-nepero", livello: "facile", capitolo: "sequences-03-euler-number",
    link: L("successioni/03-nepero/#1-il-numero-e-di-nepero", "sequences/03-euler-number/#1-eulers-number-e-napiers-constant"),
    genera: ripeti(function (rng, lingua) {
      var a = riNZ(rng, -4, 4), b = riNZ(rng, -3, 4);
      if (Math.abs(a) === Math.abs(b) || Math.abs(a) === 1 && Math.abs(b) === 1) return null;
      var o = function (e) { return O(espTex(e), "e^" + e.key()); };
      var corr = F(a * b);
      var pool = mescola(rng, [new Fr(a, b), F(a + b), F(0), new Fr(b, a)]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var fr = a > 0 ? "1 + \\frac{" + a + "}{n}" : "1 - \\frac{" + (-a) + "}{n}";
      var es = b === 1 ? "n" : (b === -1 ? "-n" : b + "n");
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{n \\rr \\ip} \\left(" + fr + "\\right)^{" + es + "}$?";
      var sp = T(lingua, "Poiché $\\left(1 \\pm \\frac{1}{c_n}\\right)^{c_n} \\rr e^{\\pm 1}$ per ogni successione $c_n \\rr \\ip$, con $c_n = \\frac{n}{" + Math.abs(a) + "}$ si ha $\\left(" + fr + "\\right)^{n} \\rr e^{" + a + "}$, quindi $\\left(" + fr + "\\right)^{" + es + "} = \\left[\\left(" + fr + "\\right)^{n}\\right]^{" + b + "} \\rr " + espTex(corr) + "$.",
        "Since $\\left(1 \\pm \\frac{1}{c_n}\\right)^{c_n} \\rr e^{\\pm 1}$ for every sequence $c_n \\rr \\ip$, with $c_n = \\frac{n}{" + Math.abs(a) + "}$ we get $\\left(" + fr + "\\right)^{n} \\rr e^{" + a + "}$, hence $\\left(" + fr + "\\right)^{" + es + "} = \\left[\\left(" + fr + "\\right)^{n}\\right]^{" + b + "} \\rr " + espTex(corr) + "$.");
      return chiudi(rng, testo, o(corr), distr.map(o), sp, { param: { a: a, b: b } });
    })
  });

  // ================================================================== 15. punto di flesso di una cubica
  G.push({
    id: "am1-g-flesso", livello: "facile", capitolo: "derivatives-07-second-derivative",
    link: L("derivate/07-derivata-seconda/#5-punti-di-flesso", "derivatives/07-second-derivative/#5-inflection-points"),
    genera: ripeti(function (rng, lingua) {
      var a = riNZ(rng, -3, 3), b = riNZ(rng, -9, 9), c = ri(rng, -6, 6), d = ri(rng, -6, 6);
      var x = new Fr(-b, 3 * a);
      var conv = a > 0;   // convessa a destra del flesso se a > 0
      var o = function (xx, destra) {
        var t = T(lingua, "$x = " + xx.tex() + "$, convessa per $x " + (destra ? ">" : "<") + " " + xx.tex() + "$",
                          "$x = " + xx.tex() + "$, convex for $x " + (destra ? ">" : "<") + " " + xx.tex() + "$");
        return OT(t, xx.key() + "|" + (destra ? "dx" : "sx"));
      };
      var testo = T(lingua, "Sia $f(x) = " + poli([a, b, c, d]) + "$. Qual è l'ascissa del punto di flesso e dove $f$ è convessa?",
        "Let $f(x) = " + poli([a, b, c, d]) + "$. What is the abscissa of the inflection point and where is $f$ convex?");
      var sp = T(lingua, "$f''(x) = " + poli([6 * a, 2 * b]) + "$ si annulla in $x = " + x.tex() + "$ e cambia segno; è positiva (convessità) per $x " + (conv ? ">" : "<") + " " + x.tex() + "$.",
        "$f''(x) = " + poli([6 * a, 2 * b]) + "$ vanishes at $x = " + x.tex() + "$ and changes sign; it is positive (convexity) for $x " + (conv ? ">" : "<") + " " + x.tex() + "$.");
      return chiudi(rng, testo, o(x, conv), [o(x, !conv), o(x.neg(), conv), o(new Fr(-b, 6 * a), conv)], sp,
        { param: { a: a, b: b, c: c, d: d } });
    })
  });

  // ================================================================== 16. (media) estremi locali di una cubica
  G.push({
    id: "am1-g-estremi-locali", livello: "media", capitolo: "derivatives-05-mean-value",
    link: L("derivate/05-valor-medio/#5-ricerca-di-massimi-e-minimi", "derivatives/05-mean-value/#5-finding-maxima-and-minima"),
    genera: ripeti(function (rng, lingua) {
      var al = ri(rng, -3, 2), be = ri(rng, al + 1, 3), c = riNZ(rng, -5, 5), s = pick(rng, [1, -1]);
      // f(x) = s (2x^3 - 3(al+be)x^2 + 6 al be x) + c,  f'(x) = 6 s (x - al)(x - be)
      var coef = [2 * s, -3 * (al + be) * s, 6 * al * be * s, c];
      var f = function (x) { return valPoli(coef, F(x)); };
      var g = function (x) { return f(x).sub(c); };
      var xM = s > 0 ? al : be, xm = s > 0 ? be : al;
      var o = function (pM, vM, pm, vm) {
        var t = T(lingua, "massimo locale in $x = " + pM + "$ con valore $" + vM.tex() + "$; minimo locale in $x = " + pm + "$ con valore $" + vm.tex() + "$",
                          "local maximum at $x = " + pM + "$ with value $" + vM.tex() + "$; local minimum at $x = " + pm + "$ with value $" + vm.tex() + "$");
        return OT(t, [pM, vM.key(), pm, vm.key()].join("|"));
      };
      var testo = T(lingua, "Sia $f(x) = " + poli(coef) + "$. Quali sono gli estremi locali di $f$?",
        "Let $f(x) = " + poli(coef) + "$. What are the local extrema of $f$?");
      var sp = T(lingua, "$f'(x) = " + poli([6 * s, -6 * (al + be) * s, 6 * al * be * s]) + " = " + (6 * s) + "(x " + (al < 0 ? "+ " + (-al) : "- " + al) + ")(x " + (be < 0 ? "+ " + (-be) : "- " + be) + ")$; dal segno di $f'$: massimo locale in $x = " + xM + "$, minimo locale in $x = " + xm + "$.",
        "$f'(x) = " + poli([6 * s, -6 * (al + be) * s, 6 * al * be * s]) + " = " + (6 * s) + "(x " + (al < 0 ? "+ " + (-al) : "- " + al) + ")(x " + (be < 0 ? "+ " + (-be) : "- " + be) + ")$; from the sign of $f'$: local maximum at $x = " + xM + "$, local minimum at $x = " + xm + "$.");
      sp = sp.replace(/\(x - 0\)/g, "x");
      return chiudi(rng, testo, o(xM, f(xM), xm, f(xm)),
        [o(xm, f(xm), xM, f(xM)), o(-xM, f(-xM), -xm, f(-xm)), o(xM, g(xM), xm, g(xm))], sp,
        { param: { al: al, be: be, c: c, s: s } });
    })
  });

  // ================================================================== 17. (media) massimo e minimo assoluti su un intervallo chiuso
  G.push({
    id: "am1-g-weierstrass", livello: "media", capitolo: "limits-09-weierstrass",
    link: L("limiti/09-weierstrass/#1-teorema-di-weierstrass", "limits/09-weierstrass/#1-weierstrass-theorem"),
    genera: ripeti(function (rng, lingua) {
      var s = ri(rng, 1, 2), c = ri(rng, -5, 5), a = ri(rng, -4, 0), b = ri(rng, 1, 4);
      var coef = [1, 0, -3 * s * s, c];
      var f = function (x) { return valPoli(coef, F(x)); };
      var cand = [a, b].concat([-s, s].filter(function (x) { return x > a && x < b; }));
      if (cand.length < 3) return null;
      var vals = cand.map(f);
      var M = vals.reduce(function (p, q) { return p.cmp(q) >= 0 ? p : q; }), m = vals.reduce(function (p, q) { return p.cmp(q) <= 0 ? p : q; });
      var est = [f(a), f(b)], sta = [-s, s].map(f);
      var mx = function (arr) { return arr.reduce(function (p, q) { return p.cmp(q) >= 0 ? p : q; }); };
      var mn = function (arr) { return arr.reduce(function (p, q) { return p.cmp(q) <= 0 ? p : q; }); };
      var o = function (MM, mm) {
        return OT(T(lingua, "massimo $" + MM.tex() + "$, minimo $" + mm.tex() + "$", "maximum $" + MM.tex() + "$, minimum $" + mm.tex() + "$"), MM.key() + "|" + mm.key());
      };
      var testo = T(lingua, "Quali sono il massimo e il minimo assoluti di $f(x) = " + poli(coef) + "$ sull'intervallo $[" + a + ", " + b + "]$?",
        "What are the global maximum and minimum of $f(x) = " + poli(coef) + "$ on the interval $[" + a + ", " + b + "]$?");
      var sp = T(lingua, "Per Weierstrass esistono. Si confrontano i valori agli estremi $f(" + a + ") = " + f(a).tex() + "$, $f(" + b + ") = " + f(b).tex() + "$ e nei punti stazionari interni ($f'(x) = 3x^2 - " + (3 * s * s) + "$): massimo $" + M.tex() + "$, minimo $" + m.tex() + "$.",
        "They exist by Weierstrass. Compare the values at the endpoints $f(" + a + ") = " + f(a).tex() + "$, $f(" + b + ") = " + f(b).tex() + "$ and at the interior stationary points ($f'(x) = 3x^2 - " + (3 * s * s) + "$): maximum $" + M.tex() + "$, minimum $" + m.tex() + "$.");
      // distrattori: solo gli estremi; solo i punti stazionari interni; anche i punti stazionari esterni;
      // f supposta monotona (estremi in a e b); tutti e due i punti stazionari; un solo estremo corretto
      var interni = vals.slice(2), tutti = est.concat(sta);
      var pool = mescola(rng, [[mx(est), mn(est)], [mx(interni), mn(interni)], [mx(tutti), mn(tutti)], [f(b), f(a)], [f(a), f(b)],
        [mx(sta), mn(sta)], [M, mn(est)], [mx(est), m], [M, mn(interni)], [mx(interni), m]]);
      var distr = [], visti = [M.key() + "|" + m.key()];
      pool.forEach(function (pq) {
        var kk = pq[0].key() + "|" + pq[1].key();
        if (distr.length < 3 && visti.indexOf(kk) < 0 && pq[0].cmp(pq[1]) > 0) { visti.push(kk); distr.push(o(pq[0], pq[1])); }
      });
      if (distr.length < 3) return null;
      return chiudi(rng, testo, o(M, m), distr, sp, { param: { s: s, c: c, a: a, b: b } });
    })
  });

  // ================================================================== 18. (media) serie con parametro
  G.push({
    id: "am1-g-serie-parametro", livello: "media", capitolo: "series-02-nonnegative-terms",
    link: L("serie/02-termini-non-negativi/#12-criterio-del-confronto-asintotico", "series/02-nonnegative-terms/#12-limit-comparison-test"),
    genera: ripeti(function (rng, lingua) {
      var p = ri(rng, 1, 4), q = ri(rng, 1, 3), r = pick(rng, [1, 2]), c = ri(rng, 1, 5), d = ri(rng, 1, 5);
      // a_k = (k^p + c)^{1/r} / (k^q + d) * 1/k^alpha  ~  k^{p/r - q - alpha}
      var t = new Fr(p, r).sub(q).add(1);   // converge sse alpha > t
      var num = r === 1 ? "k^{" + p + "} + " + c : "\\sqrt{k^{" + p + "} + " + c + "}";
      var o = function (rel, v) {
        return OT(T(lingua, "converge se e solo se $\\alpha " + rel + " " + v.tex() + "$", "converges if and only if $\\alpha " + rel + " " + v.tex() + "$"), rel + "|" + v.key());
      };
      var testo = T(lingua, "Per quali $\\alpha \\in \\R$ converge la serie $\\sum_{k=1}^{\\infty} \\frac{" + num + "}{k^{\\alpha}\\,(k^{" + q + "} + " + d + ")}$?",
        "For which $\\alpha \\in \\R$ does the series $\\sum_{k=1}^{\\infty} \\frac{" + num + "}{k^{\\alpha}\\,(k^{" + q + "} + " + d + ")}$ converge?");
      var e1 = F(q).sub(new Fr(p, r));
      var esp = "\\alpha" + (e1.n > 0 ? " + " + e1.tex() : (e1.n < 0 ? " - " + e1.abs().tex() : ""));
      var sp = T(lingua, "Termini positivi e $a_k \\sim \\frac{k^{" + new Fr(p, r).tex() + "}}{k^{\\alpha + " + q + "}} = \\frac{1}{k^{" + esp + "}}$: per il confronto asintotico con la serie armonica generalizzata converge sse $" + esp + " > 1$, cioè $\\alpha > " + t.tex() + "$.",
        "Positive terms and $a_k \\sim \\frac{k^{" + new Fr(p, r).tex() + "}}{k^{\\alpha + " + q + "}} = \\frac{1}{k^{" + esp + "}}$: by limit comparison with the generalized harmonic series it converges iff $" + esp + " > 1$, i.e. $\\alpha > " + t.tex() + "$.");
      return chiudi(rng, testo, o(">", t), [o("\\ge", t), o(">", t.sub(1)), o("<", t)], sp, { param: { p: p, q: q, r: r, c: c, d: d } });
    })
  });

  // ================================================================== 19. (media) limite con sviluppi di MacLaurin
  G.push({
    id: "am1-g-limite-sviluppi", livello: "media", capitolo: "derivatives-08-approximations",
    link: L("derivate/08-approssimazioni/#3-formulasviluppo-di-taylor-con-resto-secondo-peano", "derivatives/08-approximations/#3-taylor-formulaexpansion-with-peano-remainder"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 4), a = pick(rng, [-3, -2, -1, 2, 3]), b = pick(rng, [1, 2, 3, -2]);
      var ax = (a === -1 ? "-" : a) + "x", axm = a < 0 ? "+ " + (a === -1 ? "" : -a) + "x" : "- " + a + "x";
      var bt = b === 1 ? "" : b, f, n, corr, nf;
      if (tipo === 1) { n = 2; f = "\\frac{e^{" + ax + "} - 1 " + axm + "}{" + bt + "x^2}"; corr = new Fr(a * a, 2 * b); nf = 2; }
      else if (tipo === 2) { n = 3; f = "\\frac{\\sin(" + ax + ") " + axm + "}{" + bt + "x^3}"; corr = new Fr(-a * a * a, 6 * b); nf = 6; }
      else if (tipo === 3) { n = 2; f = "\\frac{\\log(" + lin1(a) + ") " + axm + "}{" + bt + "x^2}"; corr = new Fr(-a * a, 2 * b); nf = 2; }
      else { n = 4; f = "\\frac{\\cos(" + ax + ") - 1 + " + new Fr(a * a, 2).tex() + "x^2}{" + bt + "x^4}"; corr = new Fr(a * a * a * a, 24 * b); nf = 24; }
      var an = Math.pow(a, n);
      var pool = mescola(rng, [corr.neg(), new Fr(an, b), new Fr(an, n * b * (tipo === 2 ? 1 : 2)), F(0), new Fr(a, nf * b)]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{x \\rr 0} " + f + "$?";
      var sp = T(lingua, "Si sviluppa il numeratore con MacLaurin fino al primo termine non nullo, di grado $" + n + "$ (es. $e^t = 1 + t + \\frac{t^2}{2} + o(t^2)$, $\\sin t = t - \\frac{t^3}{6} + o(t^3)$, $\\log(1+t) = t - \\frac{t^2}{2} + o(t^2)$, $\\cos t = 1 - \\frac{t^2}{2} + \\frac{t^4}{24} + o(t^4)$ con $t = " + ax + "$): il limite è $" + corr.tex() + "$.",
        "Expand the numerator with Maclaurin up to the first non-zero term, of degree $" + n + "$ (e.g. $e^t = 1 + t + \\frac{t^2}{2} + o(t^2)$, $\\sin t = t - \\frac{t^3}{6} + o(t^3)$, $\\log(1+t) = t - \\frac{t^2}{2} + o(t^2)$, $\\cos t = 1 - \\frac{t^2}{2} + \\frac{t^4}{24} + o(t^4)$ with $t = " + ax + "$): the limit is $" + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { tipo: tipo, a: a, b: b } });
    })
  });

  // ================================================================== 20. (media) area tra parabola e retta
  G.push({
    id: "am1-g-area", livello: "media", capitolo: "es-integrals-02-integrals",
    link: L("esercizi/es-integrali-02-integrali/", "exercises/es-integrals-02-integrals/"),
    genera: ripeti(function (rng, lingua) {
      var r1 = ri(rng, -3, 2), r2 = ri(rng, r1 + 1, 4), p = ri(rng, -3, 3), q = ri(rng, -4, 4);
      var m = p + r1 + r2, n = q - r1 * r2, L3 = Math.pow(r2 - r1, 3);
      var corr = new Fr(L3, 6);
      var pool = mescola(rng, [new Fr(L3, 3), new Fr((r2 - r1) * (r2 - r1), 2), new Fr(L3, 2), corr.neg()]);
      var distr = [];
      pool.forEach(function (v) { if (distr.length < 3 && !v.eq(corr) && distr.every(function (w) { return !w.eq(v); })) distr.push(v); });
      if (distr.length < 3) return null;
      var testo = T(lingua, "Quanto vale l'area della regione limitata compresa tra la parabola $y = " + poli([1, p, q]) + "$ e la retta $y = " + poli([m, n]) + "$?",
        "What is the area of the bounded region between the parabola $y = " + poli([1, p, q]) + "$ and the line $y = " + poli([m, n]) + "$?");
      var sp = T(lingua, "Le curve si intersecano in $x = " + r1 + "$ e $x = " + r2 + "$; tra questi punti la retta sta sopra e l'area è $\\int_{" + r1 + "}^{" + r2 + "} -(" + fat(r1) + ")(" + fat(r2) + ")\\,dx = \\frac{" + (r2 - r1) + "^3}{6} = " + corr.tex() + "$.",
        "The curves meet at $x = " + r1 + "$ and $x = " + r2 + "$; between them the line lies above and the area is $\\int_{" + r1 + "}^{" + r2 + "} -(" + fat(r1) + ")(" + fat(r2) + ")\\,dx = \\frac{" + (r2 - r1) + "^3}{6} = " + corr.tex() + "$.");
      return chiudi(rng, testo, O(corr.tex(), corr.key()), distr.map(function (v) { return O(v.tex(), v.key()); }), sp,
        { param: { r1: r1, r2: r2, p: p, q: q } });
    })
  });

  // ================================================================== 21. (complessa) studio di una funzione razionale
  G.push({
    id: "am1-g-studio-razionale", livello: "complessa", capitolo: "derivatives-09-curve-sketching",
    link: L("derivate/09-studio-funzioni/#1-grafico-di-funzioni-reali-di-variabile-reale", "derivatives/09-curve-sketching/#1-graphs-of-real-functions-of-a-real-variable"),
    genera: ripeti(function (rng, lingua) {
      var b = riNZ(rng, -3, 3), s = ri(rng, 1, 3), a = s * s - b * b;
      if (a === 0) return null;
      // f(x) = (x^2 + a)/(x - b) = x + b + s^2/(x - b)
      var o = function (qa, pM, vM, pm, vm) {
        var as = "y = " + poli([1, qa]);
        var t = T(lingua,
          "asintoto verticale $x = " + b + "$, asintoto obliquo $" + as + "$, massimo locale in $x = " + pM + "$ con $f = " + vM + "$, minimo locale in $x = " + pm + "$ con $f = " + vm + "$",
          "vertical asymptote $x = " + b + "$, oblique asymptote $" + as + "$, local maximum at $x = " + pM + "$ with $f = " + vM + "$, local minimum at $x = " + pm + "$ with $f = " + vm + "$");
        return OT(t, [b, qa, pM, vM, pm, vm].join("|"));
      };
      var testo = T(lingua, "Studio di funzione: quale descrizione di $f(x) = \\frac{" + poli([1, 0, a]) + "}{" + poli([1, -b]) + "}$ è corretta?",
        "Curve sketching: which description of $f(x) = \\frac{" + poli([1, 0, a]) + "}{" + poli([1, -b]) + "}$ is correct?");
      var sp = T(lingua,
        "$f(x) = " + poli([1, b]) + " + \\frac{" + (s * s) + "}{" + fat(b) + "}$: asintoto verticale $x = " + b + "$ e obliquo $y = " + poli([1, b]) + "$. $f'(x) = 1 - \\frac{" + (s * s) + "}{(" + fat(b) + ")^2}$ si annulla in $x = " + b + " \\pm " + s + "$: massimo locale in $" + (b - s) + "$ ($f = " + (2 * b - 2 * s) + "$), minimo locale in $" + (b + s) + "$ ($f = " + (2 * b + 2 * s) + "$). Il massimo locale è minore del minimo locale.",
        "$f(x) = " + poli([1, b]) + " + \\frac{" + (s * s) + "}{" + fat(b) + "}$: vertical asymptote $x = " + b + "$ and oblique $y = " + poli([1, b]) + "$. $f'(x) = 1 - \\frac{" + (s * s) + "}{(" + fat(b) + ")^2}$ vanishes at $x = " + b + " \\pm " + s + "$: local maximum at $" + (b - s) + "$ ($f = " + (2 * b - 2 * s) + "$), local minimum at $" + (b + s) + "$ ($f = " + (2 * b + 2 * s) + "$). The local maximum is smaller than the local minimum.");
      return chiudi(rng, testo, o(b, b - s, 2 * b - 2 * s, b + s, 2 * b + 2 * s),
        [o(-b, b - s, 2 * b - 2 * s, b + s, 2 * b + 2 * s), o(b, b + s, 2 * b + 2 * s, b - s, 2 * b - 2 * s), o(b, b - s, 2 * b + 2 * s, b + s, 2 * b - 2 * s)], sp,
        { param: { a: a, b: b } });
    })
  });

  // ================================================================== 22. (complessa) studio di una cubica
  G.push({
    id: "am1-g-studio-cubica", livello: "complessa", capitolo: "derivatives-09-curve-sketching",
    link: L("derivate/09-studio-funzioni/#1-grafico-di-funzioni-reali-di-variabile-reale", "derivatives/09-curve-sketching/#1-graphs-of-real-functions-of-a-real-variable"),
    genera: ripeti(function (rng, lingua) {
      var h = riNZ(rng, -2, 2), s = ri(rng, 1, 2), c = ri(rng, -20, 20);
      // f(x) = (x - h)^3 - 3 s^2 (x - h) + c
      var coef = [1, -3 * h, 3 * h * h - 3 * s * s, -h * h * h + 3 * s * s * h + c];
      var soglia = 2 * s * s * s, nz = Math.abs(c) < soglia ? 3 : (Math.abs(c) === soglia ? 2 : 1);
      var o = function (pM, vM, pm, vm, fl, z) {
        var t = T(lingua,
          "massimo locale in $x = " + pM + "$ ($f = " + vM + "$), minimo locale in $x = " + pm + "$ ($f = " + vm + "$), flesso in $x = " + fl + "$, " + (z === 1 ? "un solo zero reale" : z + " zeri reali distinti"),
          "local maximum at $x = " + pM + "$ ($f = " + vM + "$), local minimum at $x = " + pm + "$ ($f = " + vm + "$), inflection at $x = " + fl + "$, " + (z === 1 ? "exactly one real zero" : z + " distinct real zeros"));
        return OT(t, [pM, vM, pm, vm, fl, z].join("|"));
      };
      var zErr = nz === 3 ? 1 : 3;
      var testo = T(lingua, "Studio di funzione: quale descrizione di $f(x) = " + poli(coef) + "$ è corretta?",
        "Curve sketching: which description of $f(x) = " + poli(coef) + "$ is correct?");
      var sp = T(lingua,
        "$f'(x) = 3(" + fat(h) + ")^2 - " + (3 * s * s) + "$ si annulla in $x = " + h + " \\pm " + s + "$; $f''(x) = 6(" + fat(h) + ")$ dà il flesso in $x = " + h + "$. Valori: $f(" + (h - s) + ") = " + (c + soglia) + "$ (massimo), $f(" + (h + s) + ") = " + (c - soglia) + "$ (minimo). Per il teorema degli zeri e la monotonia sugli intervalli gli zeri reali sono " + nz + ".",
        "$f'(x) = 3(" + fat(h) + ")^2 - " + (3 * s * s) + "$ vanishes at $x = " + h + " \\pm " + s + "$; $f''(x) = 6(" + fat(h) + ")$ gives the inflection at $x = " + h + "$. Values: $f(" + (h - s) + ") = " + (c + soglia) + "$ (maximum), $f(" + (h + s) + ") = " + (c - soglia) + "$ (minimum). By the intermediate zero theorem and monotonicity on the intervals there are " + nz + " real zeros.");
      return chiudi(rng, testo, o(h - s, c + soglia, h + s, c - soglia, h, nz),
        [o(h - s, c + soglia, h + s, c - soglia, h, zErr), o(h + s, c - soglia, h - s, c + soglia, h, nz), o(h - s, c + soglia, h + s, c - soglia, -h, nz)], sp,
        { param: { h: h, s: s, c: c } });
    })
  });

  // ================================================================== 23. (complessa) polinomio di MacLaurin di ordine 3 di un prodotto
  G.push({
    id: "am1-g-maclaurin-prodotto", livello: "complessa", capitolo: "derivatives-08-approximations",
    link: L("derivate/08-approssimazioni/#3-formulasviluppo-di-taylor-con-resto-secondo-peano", "derivatives/08-approximations/#3-taylor-formulaexpansion-with-peano-remainder"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 2), a = riNZ(rng, -2, 2), b = pick(rng, [1, 2, 3, -1, -2]);
      var A = F(a), B = F(b), f, c, d1, d2, d3;
      var ex = (a === 1 ? "" : a === -1 ? "-" : a) + "x", bx = (b === 1 ? "" : b === -1 ? "-" : b) + "x";
      if (tipo === 1) {   // e^{ax} sin(bx) = b x + a b x^2 + (a^2 b/2 - b^3/6) x^3
        f = "e^{" + ex + "}\\,\\sin(" + bx + ")";
        c = [A.mul(A).mul(B).div(2).sub(B.pow(3).div(6)), A.mul(B), B, F(0)];
        d1 = [A.mul(A).mul(B).sub(B.pow(3).div(6)), A.mul(B), B, F(0)];
        d2 = [A.mul(A).mul(B).div(2).add(B.pow(3).div(6)), A.mul(B), B, F(0)];
        d3 = [B.pow(3).div(6).neg(), A.mul(B), B, F(0)];
      } else {            // e^{ax} cos(bx), b > 0
        // = 1 + a x + (a^2 - b^2)/2 x^2 + (a^3/6 - a b^2/2) x^3
        b = Math.abs(b); B = F(b); bx = (b === 1 ? "" : b) + "x";
        f = "e^{" + ex + "}\\,\\cos(" + bx + ")";
        c = [A.pow(3).div(6).sub(A.mul(B).mul(B).div(2)), A.mul(A).sub(B.mul(B)).div(2), A, F(1)];
        d1 = [A.pow(3).div(6).sub(A.mul(B).mul(B)), A.mul(A).sub(B.mul(B)).div(2), A, F(1)];
        d2 = [A.pow(3).div(6).add(A.mul(B).mul(B).div(2)), A.mul(A).add(B.mul(B)).div(2), A, F(1)];
        d3 = [A.pow(3).div(6), A.mul(A).sub(B.mul(B)).div(2), A, F(1)];
      }
      var o = function (cc) { return O("T_3(x) = " + poli(cc), cc.map(function (v) { return v.key(); }).join("|")); };
      var testo = T(lingua, "Qual è il polinomio di MacLaurin di grado $3$ di $f(x) = " + f + "$?",
        "What is the Maclaurin polynomial of degree $3$ of $f(x) = " + f + "$?");
      var sp = T(lingua, "Si moltiplicano gli sviluppi $e^{t} = 1 + t + \\frac{t^2}{2} + \\frac{t^3}{6} + o(t^3)$ e " + (tipo === 1 ? "$\\sin u = u - \\frac{u^3}{6} + o(u^3)$" : "$\\cos u = 1 - \\frac{u^2}{2} + o(u^3)$") + " (con $t = " + ex + "$, $u = " + bx + "$) e si tengono i termini fino a $x^3$: $T_3(x) = " + poli(c) + "$.",
        "Multiply the expansions $e^{t} = 1 + t + \\frac{t^2}{2} + \\frac{t^3}{6} + o(t^3)$ and " + (tipo === 1 ? "$\\sin u = u - \\frac{u^3}{6} + o(u^3)$" : "$\\cos u = 1 - \\frac{u^2}{2} + o(u^3)$") + " (with $t = " + ex + "$, $u = " + bx + "$) and keep the terms up to $x^3$: $T_3(x) = " + poli(c) + "$.");
      return chiudi(rng, testo, o(c), [o(d1), o(d2), o(d3)], sp, { param: { tipo: tipo, a: a, b: b } });
    })
  });
  // ================================================================== GENERATORI AGGIUNTI (novembre 2026): almeno 2 per capitolo con calcoli
  function cxj(a) { return (a === 1 ? "" : (a === -1 ? "-" : String(a))) + "x"; }
  function fpar(r) { return r === 0 ? "x" : "(" + fat(r) + ")"; }
  function intv(lo, hi) { return [{ lo: F(lo), li: true, hi: F(hi), hi_i: true }]; }
  function OI(ins) { return O(insTex(ins), insKey(ins)); }
  function OF(v) { return O(F(v).tex(), F(v).key()); }
  function distinti(corr, cand, chiave) {   // primi 3 candidati diversi dalla corretta e tra loro
    var out = [], visti = [chiave(corr)];
    cand.forEach(function (c) { var kk = chiave(c); if (out.length < 3 && visti.indexOf(kk) < 0) { visti.push(kk); out.push(c); } });
    return out.length === 3 ? out : null;
  }

  // ------------------------------------------------------------------ numeri: disequazione di secondo grado
  G.push({
    id: "am1-g-disequazione-2grado", livello: "media", capitolo: "numbers-02-number-sets",
    link: L("numeri/02-insiemi-numerici/", "numbers/02-number-sets/"),
    genera: ripeti(function (rng, lingua) {
      var r1 = ri(rng, -5, 3), r2 = ri(rng, r1 + 1, 6), s = pick(rng, [1, -1]), rel = pick(rng, [">", ">=", "<", "<="]);
      var p = function (x, u1, u2) { return F(s).mul(x.sub(u1)).mul(x.sub(u2)); };
      var opp = { ">": "<", ">=": "<=", "<": ">", "<=": ">=" }[rel];
      var togg = rel.length === 1 ? rel + "=" : rel.charAt(0);
      var giusto = insiemeDa([r1, r2], function (x) { return verificaRel(p(x, r1, r2), rel); });
      var d1 = insiemeDa([r1, r2], function (x) { return verificaRel(p(x, r1, r2), opp); });
      var d2 = insiemeDa([r1, r2], function (x) { return verificaRel(p(x, r1, r2), togg); });
      var d3 = insiemeDa([-r1, -r2], function (x) { return verificaRel(p(x, -r1, -r2), rel); });
      var P = poli([s, -s * (r1 + r2), s * r1 * r2]);
      var testo = T(lingua, "Qual è l'insieme delle soluzioni reali della disequazione $", "What is the real solution set of the inequality $") + P + " " + REL_TEX[rel] + " 0$?";
      var sp = T(lingua,
        "Il polinomio si annulla in $x = " + r1 + "$ e $x = " + r2 + "$ e ha coefficiente direttore " + (s > 0 ? "positivo: è negativo tra le radici e positivo fuori" : "negativo: è positivo tra le radici e negativo fuori") + ". Gli estremi sono inclusi se la disuguaglianza è larga: $" + insTex(giusto) + "$.",
        "The polynomial vanishes at $x = " + r1 + "$ and $x = " + r2 + "$ and has " + (s > 0 ? "positive leading coefficient: it is negative between the roots and positive outside" : "negative leading coefficient: it is positive between the roots and negative outside") + ". The endpoints are included if the inequality is non-strict: $" + insTex(giusto) + "$.");
      return chiudi(rng, testo, OI(giusto), [OI(d1), OI(d2), OI(d3)], sp, { param: { r1: r1, r2: r2, s: s, rel: rel } });
    })
  });

  // ------------------------------------------------------------------ numeri: logaritmi
  G.push({
    id: "am1-g-logaritmi", livello: "facile", capitolo: "numbers-04-roots-powers-logarithms",
    link: L("numeri/04-radicali-potenze-logaritmi/", "numbers/04-roots-powers-logarithms/"),
    genera: ripeti(function (rng, lingua) {
      var b = pick(rng, [2, 3, 5]), mx = { 2: 9, 3: 6, 5: 4 }[b];
      var e1 = ri(rng, 1, mx), e2 = ri(rng, 1, mx), e3 = ri(rng, 1, mx);
      var A = Math.pow(b, e1), B = Math.pow(b, e2), C = Math.pow(b, e3), g = e1 + e2 - e3;
      var cand = [e1 + e2 + e3, e1 * e2 - e3, e1 - e2 - e3, g + 1, g - 1].map(F);
      var distr = distinti(F(g), cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\log_{" + b + "} " + A + " + \\log_{" + b + "} " + B + " - \\log_{" + b + "} " + C + "$?";
      var sp = T(lingua, "Per le proprietà dei logaritmi l'espressione è $\\log_{" + b + "} \\frac{" + A + " \\cdot " + B + "}{" + C + "}$; poiché $" + A + " = " + b + "^{" + e1 + "}$, $" + B + " = " + b + "^{" + e2 + "}$ e $" + C + " = " + b + "^{" + e3 + "}$, vale $" + e1 + " + " + e2 + " - " + e3 + " = " + g + "$.",
        "By the properties of logarithms the expression is $\\log_{" + b + "} \\frac{" + A + " \\cdot " + B + "}{" + C + "}$; since $" + A + " = " + b + "^{" + e1 + "}$, $" + B + " = " + b + "^{" + e2 + "}$ and $" + C + " = " + b + "^{" + e3 + "}$, it equals $" + e1 + " + " + e2 + " - " + e3 + " = " + g + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { b: b, e1: e1, e2: e2, e3: e3 } });
    })
  });

  // ------------------------------------------------------------------ numeri: aritmetica modulare
  G.push({
    id: "am1-g-modulo", livello: "media", capitolo: "numbers-04-roots-powers-logarithms",
    link: L("numeri/04-radicali-potenze-logaritmi/", "numbers/04-roots-powers-logarithms/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, 2, 9), n = ri(rng, 5, 20), m = ri(rng, 3, 11);
      if (a % m === 0) return null;
      var pw = function (e) { var r = 1; for (var i = 0; i < e; i++) r = (r * a) % m; return r; };
      var g = pw(n);
      var cand = [((a % m) * n) % m, pw(n % m), (g + 1) % m, (g + m - 1) % m].map(F);
      var distr = distinti(F(g), cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Aritmetica modulare: qual è il resto della divisione di $" + a + "^{" + n + "}$ per $" + m + "$, cioè $" + a + "^{" + n + "} \\bmod " + m + "$?",
        "Modular arithmetic: what is the remainder of the division of $" + a + "^{" + n + "}$ by $" + m + "$, i.e. $" + a + "^{" + n + "} \\bmod " + m + "$?");
      var sp = T(lingua, "Si calcolano le potenze successive riducendo ogni volta modulo $" + m + "$ (se $x \\equiv r$, allora $" + a + "x \\equiv " + a + "r$): le potenze di $" + a + "$ si ripetono periodicamente e si ottiene $" + g + "$.",
        "Compute the successive powers reducing each time modulo $" + m + "$ (if $x \\equiv r$, then $" + a + "x \\equiv " + a + "r$): the powers of $" + a + "$ repeat periodically and one gets $" + g + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { a: a, n: n, m: m } });
    })
  });

  // ------------------------------------------------------------------ numeri: somma di una progressione geometrica
  G.push({
    id: "am1-g-progressione-geometrica", livello: "media", capitolo: "numbers-05-summations",
    link: L("numeri/05-sommatorie/", "numbers/05-summations/"),
    genera: ripeti(function (rng, lingua) {
      var q = pick(rng, [2, 3, -2, -3]), c = ri(rng, 1, 3), m = ri(rng, 0, 2), n = m + ri(rng, 3, 5);
      var Q = F(q), C = F(c);
      var somma = function (da, a) { var s = F(0); for (var k = da; k <= a; k++) s = s.add(C.mul(Q.pow(k))); return s; };
      var g = somma(m, n);
      var cand = [somma(m, n - 1), somma(0, n), g.neg(), somma(m + 1, n + 1)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var ct = c === 1 ? "" : c + "\\,", qt = q < 0 ? "(" + q + ")" : String(q);
      var testo = T(lingua, "Quanto vale la somma della progressione geometrica ", "What is the sum of the geometric progression ") + "$\\sum_{k=" + m + "}^{" + n + "} " + ct + qt + "^k$?";
      var sp = T(lingua, "Con $\\sum_{k=m}^{n} q^k = q^m\\,\\frac{1 - q^{n - m + 1}}{1 - q}$ ($q \\neq 1$; i termini sono $n - m + 1 = " + (n - m + 1) + "$) si ottiene $" + g.tex() + "$.",
        "With $\\sum_{k=m}^{n} q^k = q^m\\,\\frac{1 - q^{n - m + 1}}{1 - q}$ ($q \\neq 1$; there are $n - m + 1 = " + (n - m + 1) + "$ terms) one gets $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { q: q, c: c, m: m, n: n } });
    })
  });

  // ------------------------------------------------------------------ numeri: disequazione con valore assoluto
  G.push({
    id: "am1-g-valore-assoluto", livello: "media", capitolo: "numbers-06-factorials-binomials",
    link: L("numeri/06-fattoriali-binomiali/", "numbers/06-factorials-binomials/"),
    genera: ripeti(function (rng, lingua) {
      var a = pick(rng, [2, 3]), b = riNZ(rng, -5, 5), c = ri(rng, 1, 6), rel = pick(rng, [">", ">=", "<", "<="]);
      var opp = { ">": "<=", ">=": "<", "<": ">=", "<=": ">" }[rel];
      var pr = function (aa, bb, rr) { return function (x) { return verificaRel(x.mul(aa).sub(bb).abs().sub(c), rr); }; };
      var crit = function (aa, bb) { return [F(bb - c).div(aa), F(bb + c).div(aa)]; };
      var giusto = insiemeDa(crit(a, b), pr(a, b, rel));
      var d1 = insiemeDa(crit(a, b), pr(a, b, opp));
      var d2 = insiemeDa(crit(1, b), pr(1, b, rel));
      var d3 = insiemeDa(crit(a, -b), pr(a, -b, rel));
      var expr = a + "x " + (b > 0 ? "- " + b : "+ " + (-b));
      var testo = T(lingua, "Qual è l'insieme delle soluzioni reali della disequazione $|" + expr + "| " + REL_TEX[rel] + " " + c + "$?",
        "What is the real solution set of the inequality $|" + expr + "| " + REL_TEX[rel] + " " + c + "$?");
      var sp = T(lingua, "$|" + expr + "| = " + c + "$ per $" + expr + " = \\pm " + c + "$, cioè $x = " + crit(a, b)[0].tex() + "$ e $x = " + crit(a, b)[1].tex() + "$; $|t| < c$ equivale a $-c < t < c$, $|t| > c$ a $t < -c$ oppure $t > c$. Risultato: $" + insTex(giusto) + "$.",
        "$|" + expr + "| = " + c + "$ for $" + expr + " = \\pm " + c + "$, i.e. $x = " + crit(a, b)[0].tex() + "$ and $x = " + crit(a, b)[1].tex() + "$; $|t| < c$ means $-c < t < c$, $|t| > c$ means $t < -c$ or $t > c$. Result: $" + insTex(giusto) + "$.");
      return chiudi(rng, testo, OI(giusto), [OI(d1), OI(d2), OI(d3)], sp, { param: { a: a, b: b, c: c, rel: rel } });
    })
  });

  // ------------------------------------------------------------------ numeri: quoziente di numeri complessi
  G.push({
    id: "am1-g-complessi-quoziente", livello: "media", capitolo: "numbers-09-complex-numbers",
    link: L("numeri/09-numeri-complessi/", "numbers/09-complex-numbers/"),
    genera: ripeti(function (rng, lingua) {
      var p = ri(rng, -3, 3), q = riNZ(rng, -3, 3), c = ri(rng, -3, 3), d = riNZ(rng, -3, 3);
      var nr = p * c - q * d, ni = p * d + q * c;
      var oc = function (x, y) { return O(compTex(x, y), x + "," + y); };
      var testo = T(lingua, "Quanto vale il quoziente di numeri complessi $\\frac{" + compTex(nr, ni) + "}{" + compTex(c, d) + "}$ in forma algebrica $a + i\\,b$?",
        "What is the quotient of complex numbers $\\frac{" + compTex(nr, ni) + "}{" + compTex(c, d) + "}$ in algebraic form $a + i\\,b$?");
      var sp = T(lingua, "Si moltiplicano numeratore e denominatore per il coniugato $" + compTex(c, -d) + "$ del denominatore, che diventa $" + (c * c + d * d) + "$: il risultato è $" + compTex(p, q) + "$ (controllo: $(" + compTex(p, q) + ")(" + compTex(c, d) + ") = " + compTex(nr, ni) + "$).",
        "Multiply numerator and denominator by the conjugate $" + compTex(c, -d) + "$ of the denominator, which becomes $" + (c * c + d * d) + "$: the result is $" + compTex(p, q) + "$ (check: $(" + compTex(p, q) + ")(" + compTex(c, d) + ") = " + compTex(nr, ni) + "$).");
      return chiudi(rng, testo, oc(p, q), [oc(p, -q), oc(q, p), oc(-p, -q)], sp, { param: { p: p, q: q, c: c, d: d } });
    })
  });

  // ------------------------------------------------------------------ funzioni: parità
  G.push({
    id: "am1-g-parita", livello: "facile", capitolo: "functions-02-real-functions",
    link: L("funzioni/02-funzioni-reali/", "functions/02-real-functions/"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 2), f, par;
      if (tipo === 1) {
        var m = ri(rng, 2, 6), n = ri(rng, 0, m - 1), a = riNZ(rng, -4, 4), b = riNZ(rng, -4, 4);
        var cf = []; for (var i = m; i >= 0; i--) cf.push(i === m ? a : (i === n ? b : 0));
        f = poli(cf); par = (m % 2 === 0 && n % 2 === 0) ? "P" : ((m % 2 === 1 && n % 2 === 1) ? "D" : "N");
      } else {
        var e = ri(rng, 1, 4), tr = pick(rng, ["sin", "cos"]);
        f = (e === 1 ? "x" : "x^" + e) + "\\" + tr + " x";
        par = ((e % 2 === 0) === (tr === "cos")) ? "P" : "D";
      }
      var testi = { P: T(lingua, "pari", "even"), D: T(lingua, "dispari", "odd"), N: T(lingua, "né pari né dispari", "neither even nor odd"), E: T(lingua, "sia pari sia dispari", "both even and odd") };
      var o = function (kk) { return OT(testi[kk], kk); };
      var altri = ["P", "D", "N", "E"].filter(function (kk) { return kk !== par; });
      var testo = T(lingua, "La funzione $f(x) = " + f + "$, definita su $\\R$, è:", "The function $f(x) = " + f + "$, defined on $\\R$, is:");
      var sp = T(lingua, "Si confronta $f(-x)$ con $f(x)$: $x^k$ è pari per $k$ pari e dispari per $k$ dispari, $\\sin$ è dispari e $\\cos$ è pari; il prodotto di due funzioni con la stessa parità è pari, con parità diverse è dispari; una somma di un termine pari e uno dispari (non nulli) non è né pari né dispari.",
        "Compare $f(-x)$ with $f(x)$: $x^k$ is even for even $k$ and odd for odd $k$, $\\sin$ is odd and $\\cos$ is even; the product of two functions with the same parity is even, with different parities it is odd; a sum of a (non-zero) even term and odd term is neither even nor odd.");
      return chiudi(rng, testo, o(par), altri.map(o), sp, { param: { f: f, par: par } });
    })
  });

  // ------------------------------------------------------------------ successioni: limiti con esponenziali
  G.push({
    id: "am1-g-limite-successione", livello: "facile", capitolo: "sequences-02-computing-limits",
    link: L("successioni/02-calcolo-limiti/", "sequences/02-computing-limits/"),
    genera: ripeti(function (rng, lingua) {
      var p = riNZ(rng, -4, 4), q = riNZ(rng, -4, 4), r = riNZ(rng, -4, 4), s = riNZ(rng, -4, 4);
      if (3 * r + s === 0) return null;
      var g = new Fr(p, 3 * r);
      var cand = [new Fr(p, r), F(0), new Fr(p + q, 3 * r + s), new Fr(q, s)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var tm = function (c, b, e) { return (c === 1 ? "" : (c === -1 ? "-" : c + "\\cdot ")) + b + "^{" + e + "}"; };
      var piu = function (c, b, e) { return (c < 0 ? " - " : " + ") + tm(Math.abs(c), b, e); };
      var frz = "\\frac{" + tm(p, 3, "n") + piu(q, 2, "n") + "}{" + tm(r, 3, "n+1") + piu(s, 2, "n") + "}";
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{n \\rr \\ip} " + frz + "$?";
      var sg = function (v) { return (v < 0 ? " - " + (-v) : " + " + v) + "\\left(\\frac23\\right)^n"; };
      var rac = "\\frac{" + p + sg(q) + "}{" + 3 * r + sg(s) + "}";
      var sp = T(lingua, "Si raccoglie $3^n$: $" + rac + "$ e $\\left(\\frac23\\right)^n \\rr 0$, quindi il limite è $" + g.tex() + "$.",
        "Factor out $3^n$: $" + rac + "$ and $\\left(\\frac23\\right)^n \\rr 0$, so the limit is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { p: p, q: q, r: r, s: s } });
    })
  });

  // ------------------------------------------------------------------ successioni: limiti con radici
  G.push({
    id: "am1-g-limite-successione-radici", livello: "media", capitolo: "sequences-02-computing-limits",
    link: L("successioni/02-calcolo-limiti/", "sequences/02-computing-limits/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, 1, 4), p = ri(rng, 1, 9), c = riNZ(rng, -3, 3), d = ri(rng, 1, 5), e = riNZ(rng, -5, 5);
      if (a + c === 0) return null;
      var g = new Fr(a + c, d);
      var cand = [new Fr(a * a + c, d), new Fr(c, d), new Fr(a, d), new Fr(a + c, e)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var num = "\\sqrt{" + poli([a * a, 0, p], "n") + "} " + (c < 0 ? "- " : "+ ") + (Math.abs(c) === 1 ? "" : Math.abs(c)) + "n";
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{n \\rr \\ip} \\frac{" + num + "}{" + poli([d, e], "n") + "}$?";
      var sp = T(lingua, "$\\sqrt{" + poli([a * a, 0, p], "n") + "} = " + (a === 1 ? "" : a) + "n\\sqrt{1 + \\frac{" + p + "}{" + (a * a) + "n^2}} \\sim " + (a === 1 ? "" : a) + "n$, quindi numeratore $\\sim " + (a + c) + "n$ e denominatore $\\sim " + d + "n$: il limite è $" + g.tex() + "$.",
        "$\\sqrt{" + poli([a * a, 0, p], "n") + "} = " + (a === 1 ? "" : a) + "n\\sqrt{1 + \\frac{" + p + "}{" + (a * a) + "n^2}} \\sim " + (a === 1 ? "" : a) + "n$, so the numerator is $\\sim " + (a + c) + "n$ and the denominator $\\sim " + d + "n$: the limit is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { a: a, p: p, c: c, d: d, e: e } });
    })
  });

  // ------------------------------------------------------------------ successioni: limite di tipo e (rapporto)
  G.push({
    id: "am1-g-nepero-rapporto", livello: "media", capitolo: "sequences-03-euler-number",
    link: L("successioni/03-nepero/", "sequences/03-euler-number/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, -4, 4), b = ri(rng, -4, 4), c = pick(rng, [1, 2, 3, -1, -2]);
      if (a === b) return null;
      var g = F(c * (a - b));
      var o = function (e) { return O(espTex(e), "e^" + e.key()); };
      var cand = [F(c * (a + b)), new Fr(a - b, c), F(a - b), F(0)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var es = c === 1 ? "n" : (c === -1 ? "-n" : c + "n");
      var fr = "\\frac{" + poli([1, a], "n") + "}{" + poli([1, b], "n") + "}";
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{n \\rr \\ip} \\left(" + fr + "\\right)^{" + es + "}$?";
      var sp = T(lingua, "$" + fr + " = 1 + \\frac{" + (a - b) + "}{" + poli([1, b], "n") + "}$; poiché $\\left(1 + \\frac{k}{c_n}\\right)^{c_n} \\rr e^{k}$ per $c_n \\rr \\ip$, la base elevata a $n$ tende a $e^{" + (a - b) + "}$ e il limite è $" + espTex(g) + "$.",
        "$" + fr + " = 1 + \\frac{" + (a - b) + "}{" + poli([1, b], "n") + "}$; since $\\left(1 + \\frac{k}{c_n}\\right)^{c_n} \\rr e^{k}$ for $c_n \\rr \\ip$, the base raised to $n$ tends to $e^{" + (a - b) + "}$ and the limit is $" + espTex(g) + "$.");
      return chiudi(rng, testo, o(g), distr.map(o), sp, { param: { a: a, b: b, c: c } });
    })
  });

  // ------------------------------------------------------------------ successioni: ricorrenza lineare
  G.push({
    id: "am1-g-ricorrenza", livello: "facile", capitolo: "sequences-06-recursive-sequences",
    link: L("successioni/06-ricorrenza/", "sequences/06-recursive-sequences/"),
    genera: ripeti(function (rng, lingua) {
      var p = pick(rng, [2, 3, -1, -2]), q = riNZ(rng, -3, 3), r = ri(rng, -2, 3);
      var a = [r]; for (var i = 1; i <= 4; i++) a.push(p * a[i - 1] + q);
      var g = F(a[3]);
      var cand = [F(a[2]), F(a[4]), F(p * p * p * r + q), F(a[3] + q)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var ric = poli([p, q], "a_n");
      var testo = T(lingua, "Sia $a_0 = " + r + "$ e $a_{n+1} = " + ric + "$ per $n \\ge 0$. Quanto vale $a_3$?",
        "Let $a_0 = " + r + "$ and $a_{n+1} = " + ric + "$ for $n \\ge 0$. What is $a_3$?");
      var sp = T(lingua, "Applicando la ricorrenza: $a_1 = " + a[1] + "$, $a_2 = " + a[2] + "$, $a_3 = " + a[3] + "$.",
        "Applying the recurrence: $a_1 = " + a[1] + "$, $a_2 = " + a[2] + "$, $a_3 = " + a[3] + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { p: p, q: q, r: r } });
    })
  });

  // ------------------------------------------------------------------ successioni: limite di una ricorrenza contrattiva
  G.push({
    id: "am1-g-punto-fisso", livello: "media", capitolo: "sequences-06-recursive-sequences",
    link: L("successioni/06-ricorrenza/", "sequences/06-recursive-sequences/"),
    genera: ripeti(function (rng, lingua) {
      var P = pick(rng, [new Fr(1, 2), new Fr(-1, 2), new Fr(1, 3), new Fr(-1, 3), new Fr(2, 3)]);
      var q = riNZ(rng, -6, 6), r = ri(rng, -3, 5);
      var g = F(q).div(F(1).sub(P));
      var cand = [F(q).div(F(1).add(P)), F(q), F(q).div(P), F(r)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var ric = poli([P, q], "a_n");
      var testo = T(lingua, "Sia $a_0 = " + r + "$ e $a_{n+1} = " + ric + "$ per $n \\ge 0$. La successione converge; qual è il suo limite?",
        "Let $a_0 = " + r + "$ and $a_{n+1} = " + ric + "$ for $n \\ge 0$. The sequence converges; what is its limit?");
      var sp = T(lingua, "Il limite $\\ell$ soddisfa $\\ell = " + poli([P, q], "\\ell") + "$ (la funzione $x \\mt " + poli([P, q]) + "$ è continua), cioè $\\ell = " + g.tex() + "$; non dipende da $a_0$.",
        "The limit $\\ell$ satisfies $\\ell = " + poli([P, q], "\\ell") + "$ (the function $x \\mt " + poli([P, q]) + "$ is continuous), i.e. $\\ell = " + g.tex() + "$; it does not depend on $a_0$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { pn: P.n, pd: P.d, q: q, r: r } });
    })
  });

  // ------------------------------------------------------------------ limiti: differenza di radici
  G.push({
    id: "am1-g-limite-radici", livello: "media", capitolo: "limits-02-computing-limits",
    link: L("limiti/02-calcolo-limiti/", "limits/02-computing-limits/"),
    genera: ripeti(function (rng, lingua) {
      var p = ri(rng, -6, 6), q = ri(rng, 0, 9), r = ri(rng, -6, 6), s = ri(rng, 0, 9);
      if (p === r) return null;
      var g = new Fr(p - r, 2);
      var cand = [F(p - r), new Fr(p + r, 2), F(0), new Fr(r - p, 2)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var A = poli([1, p, q]), B = poli([1, r, s]);
      var testo = T(lingua, "Quanto vale ", "What is ") + "$\\lim_{x \\rr \\ip} \\left(\\sqrt{" + A + "} - \\sqrt{" + B + "}\\right)$?";
      var sp = T(lingua, "Forma $[\\ip - \\infty]$: moltiplicando e dividendo per la somma delle radici si ottiene $\\frac{" + poli([p - r, q - s]) + "}{\\sqrt{" + A + "} + \\sqrt{" + B + "}}$, e il denominatore è $\\sim 2x$: il limite è $" + g.tex() + "$.",
        "Form $[\\ip - \\infty]$: multiplying and dividing by the sum of the roots gives $\\frac{" + poli([p - r, q - s]) + "}{\\sqrt{" + A + "} + \\sqrt{" + B + "}}$, and the denominator is $\\sim 2x$: the limit is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { p: p, q: q, r: r, s: s } });
    })
  });

  // ------------------------------------------------------------------ limiti: asintoto obliquo di una funzione razionale
  G.push({
    id: "am1-g-asintoto-obliquo", livello: "media", capitolo: "limits-03-polynomials-rational-functions",
    link: L("limiti/03-polinomi-razionali/", "limits/03-polynomials-rational-functions/"),
    genera: ripeti(function (rng, lingua) {
      var a = riNZ(rng, -3, 3), b = ri(rng, -5, 5), c = ri(rng, -6, 6), d = riNZ(rng, -4, 4);
      if (a * d * d + b * d + c === 0) return null;
      var oy = function (m, qq) { return O("y = " + poli([m, qq]), m + "|" + qq); };
      var corr = [a, b + a * d];
      var cand = [[a, b], [a, b - a * d], [a, c], [2 * a, b + a * d]];
      var distr = distinti(corr, cand, function (v) { return v[0] + "|" + v[1]; });
      if (!distr) return null;
      var testo = T(lingua, "Qual è l'asintoto obliquo della funzione $f(x) = \\frac{" + poli([a, b, c]) + "}{" + fat(d) + "}$ per $x \\rr \\pm\\infty$?",
        "What is the oblique asymptote of the function $f(x) = \\frac{" + poli([a, b, c]) + "}{" + fat(d) + "}$ as $x \\rr \\pm\\infty$?");
      var sp = T(lingua, "$m = \\lim \\frac{f(x)}{x} = " + a + "$ e $q = \\lim \\big(f(x) - m\\,x\\big) = " + (b + a * d) + "$ (equivalentemente, dalla divisione del numeratore per $" + fat(d) + "$): l'asintoto è $y = " + poli(corr) + "$.",
        "$m = \\lim \\frac{f(x)}{x} = " + a + "$ and $q = \\lim \\big(f(x) - m\\,x\\big) = " + (b + a * d) + "$ (equivalently, from dividing the numerator by $" + fat(d) + "$): the asymptote is $y = " + poli(corr) + "$.");
      return chiudi(rng, testo, oy(corr[0], corr[1]), distr.map(function (v) { return oy(v[0], v[1]); }), sp, { param: { a: a, b: b, c: c, d: d } });
    })
  });

  // ------------------------------------------------------------------ limiti: prodotto e quoziente di limiti notevoli
  G.push({
    id: "am1-g-limite-notevole-prodotto", livello: "media", capitolo: "limits-06-standard-limits",
    link: L("limiti/06-limiti-notevoli/", "limits/06-standard-limits/"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 2), a = riNZ(rng, -3, 3), b = riNZ(rng, -3, 3), c = ri(rng, 1, 3), g, cand, fr;
      if (tipo === 1) {
        g = new Fr(2 * a * b, c * c); cand = [new Fr(a * b, c * c), new Fr(2 * a * b, c), new Fr(a * b, 2 * c * c), F(0)];
        fr = "\\frac{\\sin(" + cxj(a) + ")\\,\\log(" + lin1(b) + ")}{1 - \\cos(" + cxj(c) + ")}";
      } else {
        g = new Fr(a * b, c); cand = [F(a * b * c), new Fr(a, b * c), new Fr(b, a * c), F(0)];
        fr = "\\frac{(e^{" + cxj(a) + "} - 1)\\,\\sin(" + cxj(b) + ")}{x\\,\\log(" + lin1(c) + ")}";
      }
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Usando le stime asintotiche dei limiti notevoli per $x \\rr 0$ ($\\log$ naturale), quanto vale $\\lim_{x \\rr 0} " + fr + "$?",
        "Using the asymptotic estimates of the standard limits as $x \\rr 0$ (natural $\\log$), what is $\\lim_{x \\rr 0} " + fr + "$?");
      var st = "$\\sin t \\sim t$, $\\log(1 + t) \\sim t$, $e^t - 1 \\sim t$, $1 - \\cos t \\sim \\frac{t^2}{2}$";
      var sp = T(lingua, "Con " + st + " (per $t \\rr 0$) si sostituisce ogni fattore con il suo equivalente: il limite vale $" + g.tex() + "$.",
        "With " + st + " (as $t \\rr 0$) each factor is replaced by its equivalent: the limit is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { tipo: tipo, a: a, b: b, c: c } });
    })
  });

  // ------------------------------------------------------------------ limiti: immagine di una parabola su un intervallo
  G.push({
    id: "am1-g-immagine", livello: "media", capitolo: "limits-09-weierstrass",
    link: L("limiti/09-weierstrass/", "limits/09-weierstrass/"),
    genera: ripeti(function (rng, lingua) {
      var v = ri(rng, -3, 3), a = v - ri(rng, 1, 3), b = v + ri(rng, 1, 4), p = -2 * v, q = ri(rng, -4, 4);
      var f = function (x) { return x * x + p * x + q; };
      var fa = f(a), fb = f(b), fv = f(v), hi = Math.max(fa, fb);
      var corr = intv(fv, hi);
      var d1 = intv(Math.min(fa, fb), hi), d2 = intv(a, b), d3 = intv(-hi, -fv);
      var testo = T(lingua, "Per i teoremi di Weierstrass e dei valori intermedi, l'immagine di $[" + a + ", " + b + "]$ tramite la funzione continua $f(x) = " + poli([1, p, q]) + "$ è un intervallo chiuso. Quale?",
        "By the Weierstrass and intermediate value theorems, the image of $[" + a + ", " + b + "]$ under the continuous function $f(x) = " + poli([1, p, q]) + "$ is a closed interval. Which one?");
      var sp = T(lingua, "Il minimo è nel vertice $x = " + v + "$ (interno all'intervallo), $f(" + v + ") = " + fv + "$; il massimo è nell'estremo più lontano dal vertice: $f(" + a + ") = " + fa + "$, $f(" + b + ") = " + fb + "$. L'immagine è $[" + fv + ", " + hi + "]$.",
        "The minimum is at the vertex $x = " + v + "$ (inside the interval), $f(" + v + ") = " + fv + "$; the maximum is at the endpoint farther from the vertex: $f(" + a + ") = " + fa + "$, $f(" + b + ") = " + fb + "$. The image is $[" + fv + ", " + hi + "]$.");
      return chiudi(rng, testo, OI(corr), [OI(d1), OI(d2), OI(d3)], sp, { param: { a: a, b: b, p: p, q: q } });
    })
  });

  // ------------------------------------------------------------------ derivate: tangente parallela a una retta
  G.push({
    id: "am1-g-tangente-parallela", livello: "facile", capitolo: "derivatives-01-the-derivative",
    link: L("derivate/01-funzione-derivata/", "derivatives/01-the-derivative/"),
    genera: ripeti(function (rng, lingua) {
      var x0 = riNZ(rng, -4, 4), p = ri(rng, -5, 5), q = ri(rng, -5, 5), k = riNZ(rng, -6, 6);
      var m = 2 * x0 + p;
      if (m === 0) return null;
      var f = function (x) { return F(x).mul(x).add(F(x).mul(p)).add(q); };
      var opt = function (x) { var X = F(x); return O("\\left(" + X.tex() + ", " + f(X).tex() + "\\right)", X.key() + "|" + f(X).key()); };
      var cand = [F(m - p), new Fr(m + p, 2), new Fr(p - m, 2), F(m)];
      var distr = distinti(F(x0), cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "In quale punto del grafico di $f(x) = " + poli([1, p, q]) + "$ la retta tangente è parallela alla retta $y = " + poli([m, k]) + "$?",
        "At which point of the graph of $f(x) = " + poli([1, p, q]) + "$ is the tangent line parallel to the line $y = " + poli([m, k]) + "$?");
      var sp = T(lingua, "Rette parallele hanno la stessa pendenza: $f'(x) = " + poli([2, p]) + " = " + m + "$ dà $x = " + x0 + "$, e $f(" + x0 + ") = " + f(F(x0)).tex() + "$.",
        "Parallel lines have the same slope: $f'(x) = " + poli([2, p]) + " = " + m + "$ gives $x = " + x0 + "$, and $f(" + x0 + ") = " + f(F(x0)).tex() + "$.");
      return chiudi(rng, testo, opt(x0), distr.map(opt), sp, { param: { x0: x0, p: p, q: q, k: k } });
    })
  });

  // ------------------------------------------------------------------ derivate: regola della catena
  G.push({
    id: "am1-g-derivata-composta", livello: "media", capitolo: "derivatives-04-differentiation-rules",
    link: L("derivate/04-regole-calcolo/", "derivatives/04-differentiation-rules/"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 3), a = ri(rng, 1, 4), x0 = ri(rng, -3, 3), g, cand, f, b, n = 0;
      if (tipo === 1) {
        b = ri(rng, 1, 6); var den = a * x0 * x0 + b;
        f = "\\log(" + poli([a, 0, b]) + ")"; g = new Fr(2 * a * x0, den);
        cand = [new Fr(1, den), F(2 * a * x0), new Fr(-2 * a * x0, den), new Fr(2 * a, den)];
      } else if (tipo === 2) {
        var s = ri(rng, 1, 4); b = s * s - a * x0;
        f = "\\sqrt{" + poli([a, b]) + "}"; g = new Fr(a, 2 * s);
        cand = [new Fr(1, 2 * s), F(a), new Fr(a, s), new Fr(-a, 2 * s)];
      } else {
        n = ri(rng, 2, 4); b = ri(rng, -3, 3); var u = a * x0 + b;
        f = "(" + poli([a, b]) + ")^{" + n + "}"; g = F(n * a * Math.pow(u, n - 1));
        cand = [F(n * Math.pow(u, n - 1)), F(a * Math.pow(u, n - 1)), F(n * a * Math.pow(u, n)), g.neg()];
      }
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Sia $f(x) = " + f + "$" + (tipo === 1 ? " ($\\log$ naturale)" : "") + ". Quanto vale $f'(" + x0 + ")$?",
        "Let $f(x) = " + f + "$" + (tipo === 1 ? " (natural $\\log$)" : "") + ". What is $f'(" + x0 + ")$?");
      var sp = T(lingua, "Regola della catena: derivata della funzione esterna, calcolata nella funzione interna, per la derivata della funzione interna. Valutando in $x = " + x0 + "$ si ottiene $" + g.tex() + "$.",
        "Chain rule: derivative of the outer function, evaluated at the inner function, times the derivative of the inner function. Evaluating at $x = " + x0 + "$ gives $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { tipo: tipo, a: a, b: b, x0: x0, n: n } });
    })
  });

  // ------------------------------------------------------------------ derivate: intervallo di decrescenza di una cubica
  G.push({
    id: "am1-g-monotonia", livello: "media", capitolo: "derivatives-05-mean-value",
    link: L("derivate/05-valor-medio/", "derivatives/05-mean-value/"),
    genera: ripeti(function (rng, lingua) {
      var r1 = ri(rng, -4, 2), r2 = r1 + ri(rng, 1, 4), c = ri(rng, -5, 5);
      var coef = [F(1), new Fr(-3 * (r1 + r2), 2), F(3 * r1 * r2), F(c)];
      var corr = intv(r1, r2);
      var d1 = [{ lo: null, li: false, hi: F(r1), hi_i: true }, { lo: F(r2), li: true, hi: null, hi_i: false }];
      var d2 = intv(-r2, -r1);
      var d3 = [{ lo: null, li: false, hi: new Fr(r1 + r2, 2), hi_i: true }];
      var testo = T(lingua, "Su quale intervallo la funzione $f(x) = " + poli(coef) + "$ è decrescente (in senso stretto, intervallo massimale)?",
        "On which interval is the function $f(x) = " + poli(coef) + "$ (strictly) decreasing (maximal interval)?");
      var sp = T(lingua, "$f'(x) = " + poli([3, -3 * (r1 + r2), 3 * r1 * r2]) + " = 3" + fpar(r1) + fpar(r2) + "$ è negativa tra le radici: per il test di monotonia $f$ è decrescente su $[" + r1 + ", " + r2 + "]$.",
        "$f'(x) = " + poli([3, -3 * (r1 + r2), 3 * r1 * r2]) + " = 3" + fpar(r1) + fpar(r2) + "$ is negative between the roots: by the monotonicity test $f$ is decreasing on $[" + r1 + ", " + r2 + "]$.");
      return chiudi(rng, testo, OI(corr), [OI(d1), OI(d2), OI(d3)], sp, { param: { r1: r1, r2: r2, c: c } });
    })
  });

  // ------------------------------------------------------------------ derivate: De l'Hospital con potenze
  G.push({
    id: "am1-g-hopital-potenze", livello: "media", capitolo: "derivatives-06-lhopital",
    link: L("derivate/06-de-l-hospital/", "derivatives/06-lhopital/"),
    genera: ripeti(function (rng, lingua) {
      var c = pick(rng, [1, 2, -1, 3, -2]), m = ri(rng, 2, 5), n = ri(rng, 2, 5);
      if (m === n) return null;
      var C = F(c), pw = function (e) { return e >= 0 ? C.pow(e) : F(1).div(C.pow(-e)); };
      var g = new Fr(m, n).mul(pw(m - n));
      var cand = [new Fr(m, n), pw(m - n), new Fr(m - 1, n - 1).mul(pw(m - n)), new Fr(n, m).mul(pw(n - m))];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var cm = C.pow(m), cn = C.pow(n);
      var fr = "\\frac{x^{" + m + "} " + (cm.n < 0 ? "+ " + (-cm.n) : "- " + cm.n) + "}{x^{" + n + "} " + (cn.n < 0 ? "+ " + (-cn.n) : "- " + cn.n) + "}";
      var testo = T(lingua, "Con la regola di De l'Hospital, quanto vale $\\lim_{x \\rr " + c + "} " + fr + "$?",
        "Using L'Hôpital's rule, what is $\\lim_{x \\rr " + c + "} " + fr + "$?");
      var sp = T(lingua, "Forma $\\left[\\frac00\\right]$: il rapporto delle derivate è $\\frac{" + m + "x^{" + (m - 1) + "}}{" + n + "x^{" + (n - 1) + "}}$, che in $x = " + c + "$ vale $" + g.tex() + "$.",
        "Form $\\left[\\frac00\\right]$: the ratio of the derivatives is $\\frac{" + m + "x^{" + (m - 1) + "}}{" + n + "x^{" + (n - 1) + "}}$, which at $x = " + c + "$ equals $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { c: c, m: m, n: n } });
    })
  });

  // ------------------------------------------------------------------ derivate: De l'Hospital con coseno
  G.push({
    id: "am1-g-hopital-coseno", livello: "media", capitolo: "derivatives-06-lhopital",
    link: L("derivate/06-de-l-hospital/", "derivatives/06-lhopital/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, 1, 4), b = riNZ(rng, -3, 3);
      var g = new Fr(a * a, 2 * b);
      var cand = [new Fr(a, 2 * b), new Fr(a * a, b), new Fr(a * a, 2 * b * b), g.neg()];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var fr = "\\frac{1 - \\cos(" + cxj(a) + ")}{x\\,\\sin(" + cxj(b) + ")}";
      var testo = T(lingua, "Con la regola di De l'Hospital (applicata due volte se serve), quanto vale $\\lim_{x \\rr 0} " + fr + "$?",
        "Using L'Hôpital's rule (twice if needed), what is $\\lim_{x \\rr 0} " + fr + "$?");
      var sp = T(lingua, "Forma $\\left[\\frac00\\right]$; dopo due applicazioni il rapporto delle derivate seconde in $0$ è $\\frac{" + (a * a) + "}{" + (2 * b) + "}$ (in accordo con $1 - \\cos t \\sim \\frac{t^2}{2}$ e $\\sin t \\sim t$): il limite è $" + g.tex() + "$.",
        "Form $\\left[\\frac00\\right]$; after two applications the ratio of the second derivatives at $0$ is $\\frac{" + (a * a) + "}{" + (2 * b) + "}$ (consistent with $1 - \\cos t \\sim \\frac{t^2}{2}$ and $\\sin t \\sim t$): the limit is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { a: a, b: b } });
    })
  });

  // ------------------------------------------------------------------ derivate: flessi e concavità di una quartica
  G.push({
    id: "am1-g-convessita", livello: "complessa", capitolo: "derivatives-07-second-derivative",
    link: L("derivate/07-derivata-seconda/", "derivatives/07-second-derivative/"),
    genera: ripeti(function (rng, lingua) {
      var s1 = ri(rng, -3, 2), s2 = s1 + ri(rng, 1, 3), C = ri(rng, -6, 6);
      var A = -2 * (s1 + s2), B = 6 * s1 * s2;
      var mid = new Fr(s1 + s2, 2);
      var ot = function (pts, ins, key) {
        var p = pts.map(function (v) { return "$x = " + F(v).tex() + "$"; });
        var ptxt = p.length === 1 ? T(lingua, "flesso in ", "inflection at ") + p[0] : T(lingua, "flessi in ", "inflections at ") + p[0] + T(lingua, " e ", " and ") + p[1];
        return OT(ptxt + T(lingua, "; concava su ", "; concave on ") + "$" + insTex(ins) + "$", key);
      };
      var corr = ot([s1, s2], intv(s1, s2), "c");
      var d1 = ot([s1, s2], [{ lo: null, li: false, hi: F(s1), hi_i: true }, { lo: F(s2), li: true, hi: null, hi_i: false }], "d1");
      var d2 = ot([-s2, -s1], intv(-s2, -s1), "d2");
      var d3 = ot([mid], [{ lo: null, li: false, hi: mid, hi_i: true }], "d3");
      if (s1 + s2 === 0) return null;
      var testo = T(lingua, "Quali sono i punti di flesso di $f(x) = " + poli([1, A, B, C, 0]) + "$ e dove $f$ è concava?",
        "What are the inflection points of $f(x) = " + poli([1, A, B, C, 0]) + "$ and where is $f$ concave?");
      var sp = T(lingua, "$f''(x) = " + poli([12, 6 * A, 2 * B]) + " = 12" + fpar(s1) + fpar(s2) + "$: è negativa (concavità) tra $" + s1 + "$ e $" + s2 + "$, positiva fuori, e cambia segno in entrambe le radici, che sono flessi.",
        "$f''(x) = " + poli([12, 6 * A, 2 * B]) + " = 12" + fpar(s1) + fpar(s2) + "$: it is negative (concavity) between $" + s1 + "$ and $" + s2 + "$, positive outside, and changes sign at both roots, which are inflection points.");
      return chiudi(rng, testo, corr, [d1, d2, d3], sp, { param: { s1: s1, s2: s2, C: C } });
    })
  });

  // ------------------------------------------------------------------ derivate: metodo di Newton (un passo)
  G.push({
    id: "am1-g-newton", livello: "media", capitolo: "derivatives-10-newton",
    link: L("derivate/10-newton/", "derivatives/10-newton/"),
    genera: ripeti(function (rng, lingua) {
      var m = pick(rng, [2, 3]), x0 = ri(rng, 1, 4), c = ri(rng, 2, 30);
      if (Math.round(Math.pow(c, 1 / m)) ** m === c) return null;
      var X = F(x0), fx = X.pow(m).sub(c), dfx = X.pow(m - 1).mul(m);
      var g = X.sub(fx.div(dfx));
      var cand = [X.add(fx.div(dfx)), X.sub(fx.div(X.pow(m - 1))), X.sub(fx.mul(dfx)), X];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Metodo di Newton $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ per $f(x) = x^{" + m + "} - " + c + "$, con $x_0 = " + x0 + "$: quanto vale $x_1$?",
        "Newton's method $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ for $f(x) = x^{" + m + "} - " + c + "$, with $x_0 = " + x0 + "$: what is $x_1$?");
      var sp = T(lingua, "$f(" + x0 + ") = " + fx.tex() + "$ e $f'(x) = " + m + "x^{" + (m - 1) + "}$, quindi $f'(" + x0 + ") = " + dfx.tex() + "$ e $x_1 = " + x0 + " - \\frac{" + fx.tex() + "}{" + dfx.tex() + "} = " + g.tex() + "$.",
        "$f(" + x0 + ") = " + fx.tex() + "$ and $f'(x) = " + m + "x^{" + (m - 1) + "}$, so $f'(" + x0 + ") = " + dfx.tex() + "$ and $x_1 = " + x0 + " - \\frac{" + fx.tex() + "}{" + dfx.tex() + "} = " + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { m: m, x0: x0, c: c } });
    })
  });

  // ------------------------------------------------------------------ derivate: metodo di Newton (due passi)
  G.push({
    id: "am1-g-newton-due-passi", livello: "complessa", capitolo: "derivatives-10-newton",
    link: L("derivate/10-newton/", "derivatives/10-newton/"),
    genera: ripeti(function (rng, lingua) {
      var c = ri(rng, 2, 20), x0 = ri(rng, 1, 5);
      if (Math.round(Math.sqrt(c)) ** 2 === c) return null;
      var passo = function (x, segno) { return x.sub(x.mul(x).sub(c).div(x.mul(2)).mul(segno)); };
      var x1 = passo(F(x0), 1), g = passo(x1, 1);
      var cand = [x1, passo(passo(F(x0), -1), -1), x1.add(F(x0)).div(2), passo(x1, -1)];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var testo = T(lingua, "Metodo di Newton $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ per $f(x) = x^2 - " + c + "$ (zero $\\sqrt{" + c + "}$), con $x_0 = " + x0 + "$: quanto vale $x_2$?",
        "Newton's method $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ for $f(x) = x^2 - " + c + "$ (zero $\\sqrt{" + c + "}$), with $x_0 = " + x0 + "$: what is $x_2$?");
      var sp = T(lingua, "Qui $x_{n+1} = \\frac12\\left(x_n + \\frac{" + c + "}{x_n}\\right)$: $x_1 = " + x1.tex() + "$ e $x_2 = " + g.tex() + "$.",
        "Here $x_{n+1} = \\frac12\\left(x_n + \\frac{" + c + "}{x_n}\\right)$: $x_1 = " + x1.tex() + "$ and $x_2 = " + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { c: c, x0: x0 } });
    })
  });

  // ------------------------------------------------------------------ serie: telescopica
  G.push({
    id: "am1-g-serie-telescopica", livello: "media", capitolo: "series-01-numerical-series",
    link: L("serie/01-serie-numeriche/", "series/01-numerical-series/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, 0, 3), b = ri(rng, 1, 3), c = pick(rng, [1, b, 2 * b]);
      var H = F(0); for (var j = 1; j <= b; j++) H = H.add(new Fr(1, a + j));
      var g = F(c).div(b).mul(H);
      var cand = [new Fr(c, b * (a + 1)), F(c).mul(H), new Fr(c, a + 1), F(c).div(b).mul(H.sub(new Fr(1, a + 1)))];
      var distr = distinti(g, cand, function (v) { return v.key(); });
      if (!distr) return null;
      var f1 = a === 0 ? "k" : "(" + poli([1, a], "k") + ")", f2 = "(" + poli([1, a + b], "k") + ")";
      var testo = T(lingua, "Quanto vale la somma della serie telescopica ", "What is the sum of the telescoping series ") + "$\\sum_{k=1}^{\\infty} \\frac{" + c + "}{" + f1 + f2 + "}$?";
      var dec = "\\frac{1}{" + f1 + f2 + "} = \\frac{1}{" + b + "}\\left(\\frac{1}{" + poli([1, a], "k") + "} - \\frac{1}{" + poli([1, a + b], "k") + "}\\right)";
      var rest = "\\frac{1}{" + (a + 1) + "}" + (b > 2 ? " + \\dots" : "") + (b > 1 ? " + \\frac{1}{" + (a + b) + "}" : "");
      var sp = T(lingua, "$" + dec + "$: nelle somme parziali restano solo i primi $" + b + "$ termini positivi, $" + rest + "$, moltiplicati per $\\frac{" + c + "}{" + b + "}$. La somma è $" + g.tex() + "$.",
        "$" + dec + "$: in the partial sums only the first $" + b + "$ positive terms survive, $" + rest + "$, multiplied by $\\frac{" + c + "}{" + b + "}$. The sum is $" + g.tex() + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { a: a, b: b, c: c } });
    })
  });

  // ------------------------------------------------------------------ serie: criterio del rapporto
  G.push({
    id: "am1-g-criterio-rapporto", livello: "media", capitolo: "series-02-nonnegative-terms",
    link: L("serie/02-termini-non-negativi/", "series/02-nonnegative-terms/"),
    genera: ripeti(function (rng, lingua) {
      var tipo = ri(rng, 1, 3), p = ri(rng, 0, 3), Q, ak, corr, cand;
      var esito = { C: T(lingua, "la serie converge", "the series converges"), D: T(lingua, "la serie diverge", "the series diverges"), N: T(lingua, "il criterio non decide", "the test is inconclusive") };
      var o = function (v, w) { return OT("$\\ell = " + valTex(v) + "$: " + esito[w], valKey(v) + "|" + w); };
      var kp = p === 0 ? "" : (p === 1 ? "k\\," : "k^{" + p + "}\\,");
      if (tipo === 1) {
        Q = pick(rng, [new Fr(1, 2), new Fr(1, 3), new Fr(2, 3), new Fr(3, 4), new Fr(3, 2), F(2), F(3), new Fr(4, 3)]);
        ak = kp + (Q.d === 1 ? Q.n : "\\left(" + Q.tex() + "\\right)") + "^k";
        var w = Q.cmp(1) < 0 ? "C" : "D", wo = w === "C" ? "D" : "C";
        corr = [Q, w]; cand = [[Q, wo], [F(1).div(Q), wo], [F(1), "N"], [F(1).div(Q), w]];
      } else if (tipo === 2) {
        var c = ri(rng, 2, 9); ak = "\\frac{" + c + "^k}{k!}";
        corr = [F(0), "C"]; cand = [[F(c), "D"], [F(1), "N"], [F(0), "D"], [F(c), "C"]];
      } else {
        var c2 = ri(rng, 2, 9); ak = "\\frac{k!}{" + c2 + "^k}";
        corr = ["+inf", "D"]; cand = [[new Fr(1, c2), "C"], [F(1), "N"], [F(0), "C"], ["+inf", "C"]];
      }
      var distr = distinti(corr, cand, function (v) { return valKey(v[0]) + "|" + v[1]; });
      if (!distr) return null;
      var testo = T(lingua, "Criterio del rapporto per la serie a termini positivi $\\sum_{k=1}^{\\infty} a_k$ con $a_k = " + ak + "$: quanto vale $\\ell = \\lim_{k \\rr \\ip} \\frac{a_{k+1}}{a_k}$ e che cosa si conclude?",
        "Ratio test for the positive series $\\sum_{k=1}^{\\infty} a_k$ with $a_k = " + ak + "$: what is $\\ell = \\lim_{k \\rr \\ip} \\frac{a_{k+1}}{a_k}$ and what is concluded?");
      var sp = T(lingua, "Si calcola $\\frac{a_{k+1}}{a_k}$ e se ne fa il limite: $\\ell = " + valTex(corr[0]) + "$. Se $\\ell < 1$ la serie converge, se $\\ell > 1$ (o $\\ell = \\ip$) diverge, se $\\ell = 1$ il criterio non decide.",
        "Compute $\\frac{a_{k+1}}{a_k}$ and take its limit: $\\ell = " + valTex(corr[0]) + "$. If $\\ell < 1$ the series converges, if $\\ell > 1$ (or $\\ell = \\ip$) it diverges, if $\\ell = 1$ the test is inconclusive.");
      return chiudi(rng, testo, o(corr[0], corr[1]), distr.map(function (v) { return o(v[0], v[1]); }), sp,
        { param: { tipo: tipo, p: p, qn: Q ? Q.n : 0, qd: Q ? Q.d : 1, ak: ak } });
    })
  });

  // ------------------------------------------------------------------ serie: stima dell'errore di Leibniz
  G.push({
    id: "am1-g-leibniz-stima", livello: "media", capitolo: "series-03-alternating-series",
    link: L("serie/03-segno-variabile/", "series/03-alternating-series/"),
    genera: ripeti(function (rng, lingua) {
      var cp = pick(rng, [[1, 2], [1, 3], [2, 2], [2, 4], [3, 3], [3, 6]]), p = cp[0], m = cp[1];
      var t = Math.pow(10, m / p), g = t - 1;
      var cand = [F(t), F(Math.pow(10, m) - 1), F(t + 1), F(Math.pow(10, m / p) * 2 - 1)];
      var distr = distinti(F(g), cand, function (v) { return v.key(); });
      if (!distr) return null;
      var den = p === 1 ? "k" : "k^{" + p + "}";
      var testo = T(lingua, "Per la serie $\\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1}}{" + den + "}$, con somma $s$ e somme parziali $s_n$, la stima del criterio di Leibniz è $|s - s_n| \\le a_{n+1}$ con $a_k = \\frac{1}{" + den + "}$. Qual è il minimo $n$ che garantisce $|s - s_n| \\le 10^{-" + m + "}$?",
        "For the series $\\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1}}{" + den + "}$, with sum $s$ and partial sums $s_n$, the Leibniz estimate is $|s - s_n| \\le a_{n+1}$ with $a_k = \\frac{1}{" + den + "}$. What is the smallest $n$ guaranteeing $|s - s_n| \\le 10^{-" + m + "}$?");
      var sp = T(lingua, "Serve $\\frac{1}{(n+1)^{" + p + "}} \\le 10^{-" + m + "}$, cioè $n + 1 \\ge 10^{" + (m / p) + "} = " + t + "$: il minimo è $n = " + g + "$.",
        "We need $\\frac{1}{(n+1)^{" + p + "}} \\le 10^{-" + m + "}$, i.e. $n + 1 \\ge 10^{" + (m / p) + "} = " + t + "$: the smallest is $n = " + g + "$.");
      return chiudi(rng, testo, OF(g), distr.map(OF), sp, { param: { p: p, m: m } });
    })
  });

  // ------------------------------------------------------------------ serie: convergenza di una serie a segni alterni
  G.push({
    id: "am1-g-convergenza-alternata", livello: "complessa", capitolo: "series-03-alternating-series",
    link: L("serie/03-segno-variabile/", "series/03-alternating-series/"),
    genera: ripeti(function (rng, lingua) {
      var a = ri(rng, 0, 3), b = ri(rng, 1, 5), e = b - a;
      var key = e > 1 ? "A" : (e > 0 ? "S" : "N0");
      var testi = { A: T(lingua, "converge assolutamente", "it converges absolutely"), S: T(lingua, "converge, ma non assolutamente", "it converges, but not absolutely"),
                    N0: T(lingua, "non converge: il termine generale non tende a $0$", "it does not converge: the general term does not tend to $0$"),
                    N1: T(lingua, "non converge, anche se il termine generale tende a $0$", "it does not converge, although the general term tends to $0$") };
      var o = function (kk) { return OT(testi[kk], kk); };
      var altri = ["A", "S", "N0", "N1"].filter(function (kk) { return kk !== key; });
      var nu = a === 0 ? "1" : (a === 1 ? "k" : "k^{" + a + "}"), de = (b === 1 ? "k" : "k^{" + b + "}") + " + 1";
      var testo = T(lingua, "Come si comporta la serie $\\sum_{k=1}^{\\infty} (-1)^k\\,\\frac{" + nu + "}{" + de + "}$?", "How does the series $\\sum_{k=1}^{\\infty} (-1)^k\\,\\frac{" + nu + "}{" + de + "}$ behave?");
      var sp = T(lingua, "Il modulo del termine generale è $\\sim " + (e === 1 ? "\\frac{1}{k}" : (e === 0 ? "1" : "\\frac{1}{k^{" + e + "}}")) + "$. Se l'esponente è $> 1$ la serie dei moduli converge; se è in $(0, 1]$ converge solo per Leibniz (termini definitivamente decrescenti e infinitesimi); se è $\\le 0$ il termine generale non tende a $0$.",
        "The modulus of the general term is $\\sim " + (e === 1 ? "\\frac{1}{k}" : (e === 0 ? "1" : "\\frac{1}{k^{" + e + "}}")) + "$. If the exponent is $> 1$ the series of moduli converges; if it is in $(0, 1]$ it converges only by Leibniz (eventually decreasing infinitesimal terms); if it is $\\le 0$ the general term does not tend to $0$.");
      return chiudi(rng, testo, o(key), altri.map(o), sp, { param: { a: a, b: b } });
    })
  });
})();
