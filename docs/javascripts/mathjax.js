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
      blue: ["{\\color{#1971c2}{#1}}", 1], red: ["{\\color{#e03131}{#1}}", 1],
      green: ["{\\color{#2f9e44}{#1}}", 1], yellow: ["{\\color{#f08c00}{#1}}", 1],
      violet: ["{\\color{#9c36b5}{#1}}", 1], orange: ["{\\color{#e8590c}{#1}}", 1],
      airforceblue: ["{\\color{#5d8aa8}{#1}}", 1], munsell: ["{\\color{#d4a300}{#1}}", 1],
      viridian: ["{\\color{#40826d}{#1}}", 1],
      thicksim: "\\sim", thickapprox: "\\approx",
      mathscr: ["\\mathcal{#1}", 1]
    }
  },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex|gi" }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
