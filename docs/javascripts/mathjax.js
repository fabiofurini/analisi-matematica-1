// MathJax con le macro delle note (decla.tex): la matematica del sito è
// esattamente quella delle dispense.
window.MathJax = {
  loader: { load: ["[tex]/mathtools", "[tex]/cancel", "[tex]/color"] },
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams",
    packages: { "[+]": ["mathtools", "cancel", "color"] },
    macros: {
      N: "\\mathbb{N}", Z: "\\mathbb{Z}", Q: "\\mathbb{Q}", R: "\\mathbb{R}",
      C: "\\mathbb{C}", F: "\\mathbb{F}",
      rr: "\\rightarrow", mt: "\\mapsto", ip: "+\\infty", im: "-\\infty",
      epi: "\\operatorname{epi}", dom: "\\operatorname{dom}",
      sgn: "\\operatorname{sgn}", sech: "\\operatorname{sech}", csch: "\\operatorname{csch}",
      arcsec: "\\operatorname{arcsec}", arccot: "\\operatorname{arcCot}",
      arccsc: "\\operatorname{arcCsc}", arccosh: "\\operatorname{arcCosh}",
      arcsinh: "\\operatorname{arcsinh}", arctanh: "\\operatorname{arctanh}",
      arcsech: "\\operatorname{arcsech}", arccsch: "\\operatorname{arcCsch}",
      arccoth: "\\operatorname{arcCoth}",
      sinH: "\\operatorname{Sh}", cosH: "\\operatorname{Ch}", tanH: "\\operatorname{Th}",
      setsinH: "\\operatorname{SettSh}", setcosH: "\\operatorname{SettCh}",
      settanH: "\\operatorname{SettTh}",
      Ima: "\\operatorname{Im}",
      brkbinom: ["\\genfrac{[}{]}{0pt}{}{#1}{#2}", 2],
      blue: ["{\\color[RGB]{25,113,194}{#1}}", 1], red: ["{\\color[RGB]{224,49,49}{#1}}", 1],
      green: ["{\\color[RGB]{47,158,68}{#1}}", 1], yellow: ["{\\color[RGB]{240,140,0}{#1}}", 1],
      violet: ["{\\color[RGB]{156,54,181}{#1}}", 1], orange: ["{\\color[RGB]{232,89,12}{#1}}", 1],
      airforceblue: ["{\\color[RGB]{93,138,168}{#1}}", 1], munsell: ["{\\color[RGB]{212,163,0}{#1}}", 1],
      viridian: ["{\\color[RGB]{64,130,109}{#1}}", 1],
      thicksim: "\\sim", thickapprox: "\\approx",
      mathscr: ["\\mathcal{#1}", 1]
    }
  },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex|gi" }
};

// --- Composizione delle formule (comune a tutti i siti della collana) --------
// Con la navigazione istantanea di Material la pagina cambia senza ricaricarsi:
// le formule della nuova pagina vanno composte di nuovo. MathJax però non regge
// due composizioni sovrapposte (cambio di pagina, grafici e strumenti che si
// aggiornano): si rovinano a vicenda e lasciano formule come testo TeX, che
// tornavano solo ricaricando la pagina. Qui ogni composizione aspetta la fine
// della precedente, in coda su MathJax.startup.promise.
(function () {
  var pronto = false, primaPagina = true;
  window.MathJax.startup = Object.assign({}, window.MathJax.startup, {
    ready: function () {
      MathJax.startup.defaultReady();   // la prima pagina la compone MathJax all'avvio
      pronto = true;
    }
  });
  /** compone le formule di alcuni elementi (nodi) o, senza argomenti, della pagina */
  window.componiFormule = function (nodi) {
    if (!pronto) {
      return new Promise(function (ok) { setTimeout(function () { ok(window.componiFormule(nodi)); }, 100); });
    }
    MathJax.startup.promise = MathJax.startup.promise
      .then(function () {
        if (nodi) {
          MathJax.typesetClear(nodi);
          return MathJax.typesetPromise(nodi);
        }
        MathJax.startup.output.clearCache();
        MathJax.typesetClear();
        MathJax.texReset();
        return MathJax.typesetPromise();
      })
      .catch(function (e) { console.warn("MathJax:", e); });
    return MathJax.startup.promise;
  };
  document$.subscribe(function () {
    // formule nei titoli: anche l'indice laterale va composto
    var nav = [];
    document.querySelectorAll(".md-nav .md-ellipsis, .md-nav__link").forEach(function (el) {
      if (el.textContent.indexOf("\\(") >= 0 && !el.classList.contains("arithmatex")) {
        el.classList.add("arithmatex");
        nav.push(el);
      }
    });
    if (primaPagina) {
      primaPagina = false;
      if (nav.length) window.componiFormule(nav);
      return;
    }
    window.componiFormule();
  });
})();
