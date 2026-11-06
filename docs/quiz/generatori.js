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
})();
