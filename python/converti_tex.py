"""Conversione di una dispensa LaTeX (note di Analisi) in una pagina del sito.

Uso:
    python3 python/converti_tex.py                # tutti i capitoli
    python3 python/converti_tex.py derivate-05    # solo i capitoli che iniziano così

Per ogni capitolo produce:
  - docs/<parte>/<NN>-<slug>.md          la pagina (MkDocs Material + MathJax)
  - build/figure/<id>/figNN.tex          ogni tikzpicture come documento standalone
  - build/report/<id>.txt                comandi sconosciuti e avvisi da rivedere

Le figure si compilano poi con `estrai_figure.py` (TikZ → SVG).

Il testo e la matematica restano quelli delle note: il convertitore traduce
solo la forma (ambienti → box del sito, figure → SVG, riferimenti → link).
"""
from __future__ import annotations

import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

from capitoli import CAPITOLI, DOCS, IT, LINGUA, SORGENTE, ident, ident_it, pagina

EN = LINGUA == "en"

BUILD = IT / "build"

# ---------------------------------------------------------------------------
# utilità di parsing
# ---------------------------------------------------------------------------


def strip_comments(s: str) -> str:
    out = []
    for line in s.split("\n"):
        m = re.search(r"(?<!\\)%", line)
        if m:
            before = line[: m.start()]
            if before.strip() == "":
                continue  # riga interamente commentata: sparisce
            line = before
        out.append(line)
    return "\n".join(out)


def match_brace(s: str, i: int, open_ch="{", close_ch="}") -> int:
    """s[i] == open_ch; restituisce l'indice della parentesi chiusa corrispondente."""
    depth = 0
    j = i
    while j < len(s):
        c = s[j]
        if c == "\\":
            j += 2
            continue
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return j
        j += 1
    raise ValueError(f"parentesi non chiusa: {s[i:i + 80]!r}")


def skip_ws(s: str, i: int) -> int:
    while i < len(s) and s[i] in " \t\n":
        i += 1
    return i


def read_group(s: str, i: int):
    """Legge {..} a partire da i (saltando spazi). Restituisce (contenuto, fine)."""
    i = skip_ws(s, i)
    if i >= len(s) or s[i] != "{":
        # argomento non tra graffe: un solo token
        m = re.match(r"\\[A-Za-z]+|.", s[i:], re.S)
        tok = m.group(0) if m else ""
        return tok, i + len(tok)
    j = match_brace(s, i)
    return s[i + 1: j], j + 1


def read_opt(s: str, i: int):
    """Legge [..] opzionale. Restituisce (contenuto o None, fine)."""
    k = skip_ws(s, i)
    if k < len(s) and s[k] == "[":
        j = match_brace(s, k, "[", "]")
        return s[k + 1: j], j + 1
    return None, i


def env_end(s: str, name: str, start: int) -> tuple[int, int]:
    """Da start (subito dopo \\begin{name}) trova \\end{name} corrispondente.
    Restituisce (inizio di \\end, fine di \\end)."""
    pat = re.compile(r"\\(begin|end)\{" + re.escape(name) + r"\}")
    depth = 1
    for m in pat.finditer(s, start):
        depth += 1 if m.group(1) == "begin" else -1
        if depth == 0:
            return m.start(), m.end()
    raise ValueError(f"ambiente {name} non chiuso")


def split_top(s: str, sep: str) -> list[str]:
    """Divide s su sep (es. '&' o '\\\\') solo al livello più esterno."""
    parts, depth, cur, i = [], 0, [], 0
    in_math = False
    while i < len(s):
        if s.startswith("\\begin{", i):
            depth += 1
        elif s.startswith("\\end{", i):
            depth -= 1
        c = s[i]
        if c == "\\" and not s.startswith(sep, i):
            cur.append(s[i: i + 2])
            i += 2
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
        elif c == "$":
            in_math = not in_math
        if depth == 0 and not in_math and s.startswith(sep, i):
            parts.append("".join(cur))
            cur = []
            i += len(sep)
            continue
        cur.append(c)
        i += 1
    parts.append("".join(cur))
    return parts


def indent(md: str, n: int = 4) -> str:
    pad = " " * n
    return "\n".join(pad + line if line.strip() else "" for line in md.split("\n"))


# ---------------------------------------------------------------------------
# testo in linea
# ---------------------------------------------------------------------------

ACCENTI = {
    "`a": "à", "`e": "è", "`i": "ì", "`o": "ò", "`u": "ù",
    "'a": "á", "'e": "é", "'i": "í", "'o": "ó", "'u": "ú",
    "`A": "À", "`E": "È", "`I": "Ì", "`O": "Ò", "`U": "Ù", "'E": "É",
    '"a': "ä", '"o': "ö", '"u': "ü", "^i": "î", "^e": "ê",
}

COLORI = {
    "blue": "#1971c2", "red": "#e03131", "green": "#2f9e44", "yellow": "#f08c00",
    "violet": "#9c36b5", "orange": "#e8590c", "airforceblue": "#5d8aa8",
    "munsell": "#d4a300", "viridian": "#40826d", "magenta": "#c2255c",
    "cyan": "#0c8599", "gray": "#868e96", "black": "currentColor", "brown": "#8b5e3c",
    "purple": "#7048e8", "teal": "#0e7490",
}

IGNORA = {
    "noindent", "centering", "bigskip", "medskip", "smallskip", "clearpage",
    "newpage", "pagebreak", "par", "hfill", "vfill", "raggedright", "normalsize",
    "small", "footnotesize", "large", "Large", "LARGE", "huge", "Huge", "tiny",
    "scriptsize", "protect", "maketitle", "tableofcontents", "linebreak", "nopagebreak",
    "displaystyle", "relax", "indent", "leavevmode", "null", "sloppy", "fussy",
}
IGNORA_CON_ARG = {"cmidrule", "vspace", "hspace", "vspace*", "hspace*", "setlength", "addtolength",
                  "label", "pagestyle", "thispagestyle", "setcounter", "addcontentsline",
                  "phantom", "hphantom", "vphantom", "todo"}
SOLO_CONTENUTO = {"mbox", "text", "hbox", "makebox", "fbox", "framebox", "ensuremath",
                  "centerline", "textrm", "textnormal", "textsf", "textup", "textsl", "boxed"}


@dataclass
class Stato:
    cid: str
    fonte: Path
    preambolo: str = ""
    figure: int = 0
    note: list = field(default_factory=list)
    avvisi: list = field(default_factory=list)
    contatori: dict = field(default_factory=dict)
    etichette: dict = field(default_factory=dict)  # nome -> [nomi unici, in ordine]
    visti: dict = field(default_factory=dict)       # nome -> quante volte già definito
    math: list = field(default_factory=list)        # formule in linea protette
    box: dict = field(default_factory=dict)         # etichetta -> [(nome, ancora)] (prima passata)
    box_visti: dict = field(default_factory=dict)   # etichetta -> ultimo (nome, ancora) già incontrato
    box_prima: dict = field(default_factory=dict)   # risultato della prima passata

    def conta(self, tipo: str) -> int:
        self.contatori[tipo] = self.contatori.get(tipo, 0) + 1
        return self.contatori[tipo]


def proteggi_math(s: str, st: Stato):
    """Sostituisce la matematica in linea con segnaposto (per non toccarla)."""
    store = st.math

    def keep(m):
        store.append(m.group(0))
        return f"\x00M{len(store) - 1}\x00"

    s = re.sub(r"\\\((.+?)\\\)", keep, s, flags=re.S)
    # $...$ (non $$)
    s = re.sub(r"(?<![\\$])\$(?!\$)((?:\\.|[^$\\])+?)\$(?!\$)", keep, s, flags=re.S)
    return s, store


def ripristina_math(s: str, store: list[str], st: Stato) -> str:
    def back(m):
        f = sistema_math(st.math[int(m.group(1))], st)
        if f.startswith("$"):
            f = "$" + f[1:-1].strip() + "$"  # niente spazi accanto ai $ (Markdown)
        return f
    prima = None
    while prima != s:  # segnaposto annidati (note a piè di pagina)
        prima = s
        s = re.sub(r"\x00M(\d+)\x00", back, s)
    return s


def sistema_math(m: str, st: Stato) -> str:
    """Ritocchi alla matematica per MathJax: etichette uniche, spazi inutili."""
    m = re.sub(r"\\label\{([^}]*)\}", lambda k: "\\label{" + nuova_etichetta(k.group(1), st) + "}", m)
    m = re.sub(r"\\(eq)?ref\{([^}]*)\}", lambda k: f"\\{k.group(1) or ''}ref{{{risolvi_etichetta(k.group(2), st)}}}", m)
    # \\[2 ex] -> \\[2ex] (MathJax non accetta lo spazio)
    m = re.sub(r"\\\\\[\s*([0-9.]+)\s*(ex|em|pt|mm|cm)\s*\]", r"\\\\[\1\2]", m)
    m = m.replace("\\hbox", "\\mbox")
    return m


def nuova_etichetta(nome: str, st: Stato) -> str:
    n = st.visti.get(nome, 0) + 1
    st.visti[nome] = n
    unico = nome if n == 1 else f"{nome}__{n}"
    unico = re.sub(r"[^A-Za-z0-9_:.-]", "_", unico)
    st.etichette.setdefault(nome, []).append(unico)
    return unico


def registra_box(etich: str, nome: str, st: Stato) -> str:
    base = re.sub(r"[^A-Za-z0-9_-]", "_", etich.strip()) or "box"
    n = sum(1 for v in st.box_visti.values() for _ in [0]) + 1
    ancora = f"box-{base}-{st.contatori.get('_box', 0) + 1}"
    st.contatori["_box"] = st.contatori.get("_box", 0) + 1
    st.box.setdefault(etich.strip(), []).append((nome, ancora))
    st.box_visti[etich.strip()] = (nome, ancora)
    return ancora


def riferimento_box(arg: str, st: Stato):
    """\\ref/\\eqref a un box (teorema, definizione, esempio): diventa un link
    «Teorema 3». Le etichette dei box nelle note hanno spesso un prefisso
    (theo_ita:, mytheorem:, def_ita:...) che si toglie."""
    nome = arg.strip()
    candidati = [nome, re.sub(r"^[A-Za-z_]+:", "", nome)]
    for c in candidati:
        if c in st.etichette and c == nome:
            return None  # è un'equazione
        if c in st.box_visti:
            testo, ancora = st.box_visti[c]
            return f"[{testo}](#{ancora})"
        if c in st.box_prima:
            testo, ancora = st.box_prima[c][0]
            return f"[{testo}](#{ancora})"
    return None


def risolvi_etichetta(nome: str, st: Stato) -> str:
    """Un riferimento punta all'ultima definizione già incontrata con quel nome
    (le note riusano spesso la stessa etichetta in punti diversi)."""
    lista = st.etichette.get(nome)
    if lista:
        return lista[-1]
    return re.sub(r"[^A-Za-z0-9_:.-]", "_", nome)


def inline(s: str, st: Stato) -> str:
    """Converte testo LaTeX in linea (senza ambienti a blocco) in Markdown."""
    s, store = proteggi_math(s, st)
    s = inline_cmd(s, st)
    # caratteri speciali di Markdown nel testo
    s = s.replace("<", "&lt;").replace(">", "&gt;")
    s = re.sub(r"(?<!\\)\*", r"\\*", s)
    s = re.sub(r"(?<![\\\w])_", r"\\_", s)
    s = ripristina_math(s, store, st)
    # i segnaposto HTML creati da inline_cmd
    s = s.replace("\x01", "<").replace("\x02", ">")
    return s


RE_CMD = re.compile(r"\\([A-Za-z]+\*?|.)", re.S)


def inline_cmd(s: str, st: Stato) -> str:
    out = []
    i = 0
    while i < len(s):
        c = s[i]
        if c == "\\":
            m = RE_CMD.match(s, i)
            if not m:
                i += 1
                continue
            name = m.group(1)
            j = m.end()
            if name in ("\\", "newline"):
                _, j = read_opt(s, j)
                out.append("\x01br\x02")
                i = j
                continue
            if len(name) == 1 and not name.isalpha():
                if name in "`'\"^" and j < len(s):
                    # accento: \`e oppure \`{e}
                    arg, j2 = read_group(s, j)
                    key = name + arg.strip("{}")
                    if key in ACCENTI:
                        out.append(ACCENTI[key])
                        i = j2
                        continue
                    out.append(arg)
                    i = j2
                    continue
                mappa = {"%": "%", "&": "&amp;", "_": "\\_", "#": "#", "$": "\\$",
                         "{": "{", "}": "}", ",": "\u202f", ";": " ", ":": " ",
                         "!": "", " ": " ", "-": ""}
                out.append(mappa.get(name, name))
                i = j
                continue
            if name in IGNORA:
                i = j
                continue
            if name in IGNORA_CON_ARG:
                _, j = read_opt(s, j)
                if name == "label":
                    arg, j = read_group(s, j)
                    out.append(f"\x01a id=\"{nuova_etichetta(arg, st)}\"\x02\x01/a\x02")
                    i = j
                    continue
                _, j = read_group(s, j)
                if name in ("setlength", "addtolength", "setcounter", "addcontentsline"):
                    _, j = read_group(s, j)
                if name == "addcontentsline":
                    _, j = read_group(s, j)
                i = j
                continue
            if name in ("textbf", "bf", "bfseries"):
                if name == "textbf":
                    arg, j = read_group(s, j)
                    out.append("\x01strong\x02" + inline_cmd(arg, st) + "\x01/strong\x02")
                    i = j
                    continue
                i = j  # \bf dentro un gruppo: lo gestisce il gruppo
                continue
            if name in ("textit", "emph", "textsl"):
                arg, j = read_group(s, j)
                out.append("\x01em\x02" + inline_cmd(arg, st) + "\x01/em\x02")
                i = j
                continue
            if name == "underline":
                arg, j = read_group(s, j)
                out.append("\x01u\x02" + inline_cmd(arg, st) + "\x01/u\x02")
                i = j
                continue
            if name == "texttt":
                arg, j = read_group(s, j)
                out.append("\x01code\x02" + inline_cmd(arg, st) + "\x01/code\x02")
                i = j
                continue
            if name == "textsc":
                arg, j = read_group(s, j)
                out.append(inline_cmd(arg, st).upper())
                i = j
                continue
            if name in COLORI or name == "textcolor" or name == "color":
                if name == "textcolor":
                    col, j = read_group(s, j)
                elif name == "color":
                    col, j = read_group(s, j)
                    rest = inline_cmd(s[j:], st)
                    out.append(f"\x01span style=\"color:{COLORI.get(col.split('!')[0], col)}\"\x02{rest}\x01/span\x02")
                    return "".join(out)
                else:
                    col = name
                arg, j = read_group(s, j)
                hexcol = COLORI.get(col.split("!")[0], "#0e7490")
                out.append(f"\x01span style=\"color:{hexcol}\"\x02" + inline_cmd(arg, st) + "\x01/span\x02")
                i = j
                continue
            if name == "mybluebox" or name == "colorbox":
                if name == "colorbox":
                    _, j = read_group(s, j)
                arg, j = read_group(s, j)
                out.append("\x01mark\x02" + inline_cmd(arg, st) + "\x01/mark\x02")
                i = j
                continue
            if name in SOLO_CONTENUTO:
                _, j = read_opt(s, j)
                if name == "makebox":
                    _, j = read_opt(s, j)
                arg, j = read_group(s, j)
                out.append(inline_cmd(arg, st))
                i = j
                continue
            if name == "footnote":
                arg, j = read_group(s, j)
                st.note.append(inline(arg, st))
                out.append(f"[^{len(st.note)}]")
                i = j
                continue
            if name == "href":
                url, j = read_group(s, j)
                txt, j = read_group(s, j)
                out.append(f"[{inline_cmd(txt, st)}]({url})")
                i = j
                continue
            if name == "url":
                url, j = read_group(s, j)
                out.append(f"<{url}>".replace("<", "\x01").replace(">", "\x02") if False else f"[{url}]({url})")
                i = j
                continue
            if name in ("ref", "eqref", "pageref"):
                arg, j = read_group(s, j)
                rif = riferimento_box(arg, st)
                if rif:
                    out.append(rif)
                    i = j
                    continue
                lab = risolvi_etichetta(arg, st)
                if name == "eqref":
                    store_math = f"\\(\\eqref{{{lab}}}\\)"
                    out.append(store_math)
                else:
                    out.append(f"[↗](#{lab})")
                i = j
                continue
            if name in ("ldots", "dots", "cdots"):
                out.append("…")
                i = j
                continue
            if name == "LaTeX":
                out.append("LaTeX")
                i = j
                continue
            if name == "euro" or name == "EUR":
                out.append("€")
                i = j
                continue
            if name in ("quad", "qquad", "enspace", "thinspace"):
                out.append(" ")
                i = j
                continue
            if name == "S":
                out.append("§")
                i = j
                continue
            if name in ("item",):
                out.append("")
                i = j
                continue
            if name in ("includegraphics", "ovalbox", "resizebox", "scalebox"):
                # figure in linea (rare): le gestisce il livello a blocchi
                st.avvisi.append(f"figura in linea non gestita: {s[i:i + 60]!r}")
                i = j
                continue
            # comando sconosciuto: si tiene il contenuto dell'argomento, se c'è
            st.avvisi.append(f"comando sconosciuto \\{name}")
            k = skip_ws(s, j)
            if k < len(s) and s[k] == "{":
                arg, j = read_group(s, j)
                out.append(inline_cmd(arg, st))
            i = j
            continue
        if c == "{":
            j = match_brace(s, i)
            inner = s[i + 1: j]
            m = re.match(r"\s*\\(bf|it|em|sl|tt|sc|rm|sf|bfseries|itshape)\b\s*", inner)
            if m:
                body = inline_cmd(inner[m.end():], st)
                tag = {"bf": "strong", "bfseries": "strong", "it": "em", "itshape": "em",
                       "em": "em", "sl": "em", "tt": "code"}.get(m.group(1))
                out.append(f"\x01{tag}\x02{body}\x01/{tag}\x02" if tag else body)
            else:
                out.append(inline_cmd(inner, st))
            i = j + 1
            continue
        if c == "}":
            i += 1
            continue
        if c == "~":
            out.append("\u00a0")
            i += 1
            continue
        if s.startswith("``", i):
            out.append("“")
            i += 2
            continue
        if s.startswith("''", i):
            out.append("”")
            i += 2
            continue
        if s.startswith("---", i):
            out.append("—")
            i += 3
            continue
        if s.startswith("--", i):
            out.append("–")
            i += 2
            continue
        if c == "`":
            out.append("‘")
            i += 1
            continue
        out.append(c)
        i += 1
    return "".join(out)


# ---------------------------------------------------------------------------
# blocchi
# ---------------------------------------------------------------------------

MATH_ENVS = {"equation", "equation*", "align", "align*", "gather", "gather*",
             "multline", "multline*", "eqnarray", "eqnarray*", "flalign", "flalign*",
             "alignat", "alignat*", "displaymath", "math"}

TEOREMI = {
    "Definizione": ("definizione", "Definizione"), "Definition": ("definizione", "Definizione"),
    "Teorema": ("teorema", "Teorema"), "Theorem": ("teorema", "Teorema"),
    "Proposizione": ("teorema", "Proposizione"), "Proposition": ("teorema", "Proposizione"),
    "Corollario": ("teorema", "Corollario"), "Corollary": ("teorema", "Corollario"),
    "Lemma": ("teorema", "Lemma"),
    "Osservazione": ("osservazione", "Osservazione"), "Observation": ("osservazione", "Osservazione"),
}
if EN:
    _EN = {"Definizione": "Definition", "Teorema": "Theorem", "Proposizione": "Proposition",
           "Corollario": "Corollary", "Lemma": "Lemma", "Osservazione": "Remark"}
    TEOREMI = {k: (t, _EN[n]) for k, (t, n) in TEOREMI.items()}
T = {  # testi fissi della pagina
    "Dimostrazione": "Proof" if EN else "Dimostrazione",
    "Esempio": "Example" if EN else "Esempio",
    "Esercizio": "Exercise" if EN else "Esercizio",
    "Figura": "Figure" if EN else "Figura",
    "Soluzione": "Solution" if EN else "Soluzione",
}

LARGHEZZA_TESTO_CM = 16.5  # \textwidth 6.5in delle note


def larghezza(spec: str) -> int | None:
    spec = spec.replace(" ", "")
    m = re.match(r"([0-9.]*)\\(text|line)width", spec)
    if m:
        f = float(m.group(1) or 1)
        return max(20, min(100, round(f * 100)))
    m = re.match(r"([0-9.]+)cm", spec)
    if m:
        return max(20, min(100, round(float(m.group(1)) / LARGHEZZA_TESTO_CM * 100)))
    return None


def blocco_math(env: str, corpo: str, st: Stato) -> str:
    if env in ("displaymath", "math"):
        return "$$\n" + sistema_math(corpo.strip(), st) + "\n$$"
    if env.startswith("eqnarray"):
        env = "align" + ("*" if env.endswith("*") else "")
        corpo = re.sub(r"&\s*(=|\\le|\\ge|<|>|\\leq|\\geq|\\sim|\\approx)\s*&", r"&\1", corpo)
    return f"\\begin{{{env}}}\n{sistema_math(corpo.strip(), st)}\n\\end{{{env}}}"


def figura_tikz(codice: str, st: Stato, larg: int | None, ovale: bool) -> str:
    st.figure += 1
    n = st.figure
    d = BUILD / "figure" / st.cid
    d.mkdir(parents=True, exist_ok=True)
    (d / f"fig{n:02d}.tikz").write_text(codice)
    stile = f'style="width:{larg}%"' if larg else ""
    classe = ".fig .ovale" if ovale else ".fig"
    return f'![{T["Figura"]} {n}](../img/{st.cid}/fig{n:02d}.svg){{ {classe} loading=lazy {stile} }}'


def figura_file(path: str, st: Stato, larg: int | None) -> str:
    st.figure += 1
    n = st.figure
    d = BUILD / "figure" / st.cid
    d.mkdir(parents=True, exist_ok=True)
    src = (st.fonte.parent / path)
    if not src.suffix:
        for ext in (".png", ".jpg", ".pdf", ".eps"):
            if src.with_suffix(ext).exists():
                src = src.with_suffix(ext)
                break
    (d / f"fig{n:02d}.file").write_text(str(src))
    ext = ".svg" if src.suffix.lower() in (".pdf", ".eps") else src.suffix.lower()
    stile = f'style="width:{larg}%"' if larg else ""
    return f'![{T["Figura"]} {n}](../img/{st.cid}/fig{n:02d}{ext}){{ .fig loading=lazy {stile} }}'


def tabella(spec: str, corpo: str, st: Stato) -> str:
    corpo = re.sub(r"\\(hline|toprule|midrule|bottomrule)\b", "", corpo)
    corpo = re.sub(r"\\cline\{[^}]*\}", "", corpo)
    righe = [r for r in split_top(corpo, "\\\\")]
    html = ["<div class=\"tabella\" markdown><table>"]
    for r in righe:
        r = re.sub(r"^\s*\[[^\]]*\]", "", r)  # \\[2ex]
        if not r.strip():
            continue
        celle = split_top(r, "&")
        html.append("<tr>")
        for cella in celle:
            attr = ""
            cella = cella.strip()
            m = re.match(r"\\multicolumn\{(\d+)\}\{[^}]*\}", cella)
            if m:
                arg, _ = read_group(cella, m.end())
                attr += f' colspan="{m.group(1)}"'
                cella = arg
            if "\\bbb" in cella or "\\cellcolor{blue" in cella:
                attr += ' class="cella-blu"'
            if "\\rrr" in cella or "\\cellcolor{red" in cella:
                attr += ' class="cella-rossa"'
            cella = re.sub(r"\\(bbb|rrr)\b", "", cella)
            cella = re.sub(r"\\cellcolor\{[^}]*\}", "", cella)
            testo = converti(cella, st).strip().replace("\n\n", "<br>").replace("\n", " ")
            # dentro l'HTML della tabella Markdown non elabora la matematica:
            # la si marca a mano per MathJax
            testo = re.sub(r"\$\$(.+?)\$\$", lambda k: f'<span class="arithmatex">\\[{k.group(1)}\\]</span>', testo)
            testo = re.sub(r"\$(.+?)\$", lambda k: f'<span class="arithmatex">\\({k.group(1)}\\)</span>', testo)
            testo = re.sub(r"\\begin\{(\w+\*?)\}(.+?)\\end\{\1\}", lambda k: f'<span class="arithmatex">\\[\\begin{{{k.group(1)}}}{k.group(2)}\\end{{{k.group(1)}}}\\]</span>', testo)
            html.append(f"<td{attr}>{testo}</td>")
        html.append("</tr>")
    html.append("</table></div>")
    return "\n".join(html)


def lista(env: str, corpo: str, opt: str | None, st: Stato) -> str:
    # separa gli \item al livello più esterno
    items = []
    i = 0
    depth = 0
    cur_start = None
    cur_label = None
    pat = re.compile(r"\\begin\{|\\end\{|\\item\b")
    for m in pat.finditer(corpo):
        tok = m.group(0)
        if tok == "\\begin{":
            depth += 1
        elif tok == "\\end{":
            depth -= 1
        elif depth == 0:
            if cur_start is not None:
                items.append((cur_label, corpo[cur_start:m.start()]))
            lab, k = read_opt(corpo, m.end())
            cur_label = lab
            cur_start = k
    if cur_start is not None:
        items.append((cur_label, corpo[cur_start:]))
    out = []
    lettere = opt and re.search(r"\(?a\)?|\\alph", opt or "")
    for n, (lab, testo) in enumerate(items, 1):
        md = converti(testo, st).strip()
        if env == "enumerate":
            if lettere:
                pref = f"- **({chr(96 + n)})** "
            else:
                pref = f"{n}. "
        elif lab is not None:
            pref = f"- **{inline(lab, st)}** "
        else:
            pref = "- "
        righe = md.split("\n")
        primo = righe[0] if righe else ""
        resto = "\n".join(righe[1:])
        if primo.startswith(("$$", "\\begin{")):
            # l'elemento inizia con una formula a blocco
            out.append(pref.rstrip() + "\n\n" + indent(md))
        else:
            out.append(pref + primo + ("\n" + indent(resto) if resto.strip() else ""))
    return "\n\n".join(out)


def box(tipo: str, titolo: str, corpo_md: str, apribile: bool = False, aperto: bool = False) -> str:
    segno = "???+" if (apribile and aperto) else ("???" if apribile else "!!!")
    tit = titolo.replace('"', "&quot;")
    return f'{segno} {tipo} "{tit}"\n\n{indent(corpo_md.strip())}'


RE_INLINE = re.compile(r"\$((?:\\.|[^$\\])+?)\$", re.S)
RE_SECTION = re.compile(r"\\(sub)*section\*?\s*(\[[^\]]*\])?\s*\{")
RE_PARAGRAPH = re.compile(r"\\paragraph\*?\s*\{")
RE_BEGIN = re.compile(r"\\begin\{([A-Za-z*]+)\}")
RE_BOX = re.compile(r"\\(ovalbox|shadowbox|doublebox|fbox)\s*\{")
RE_RESIZE = re.compile(r"\\(resizebox|scalebox)\s*\{")
RE_INCLUDE = re.compile(r"\\includegraphics\s*(\[[^\]]*\])?\s*\{")


def converti(s: str, st: Stato) -> str:
    """Converte un frammento LaTeX (a blocchi) in Markdown."""
    blocchi: list[str] = []
    testo: list[str] = []

    def flush():
        t = "".join(testo)
        testo.clear()
        for par in re.split(r"\n\s*\n", t):
            if par.strip():
                md = inline(" ".join(x.strip() for x in par.split("\n")), st).strip()
                md = re.sub(r"^(\d+)\.(\s)", r"\1\\.\2", md)
                md = re.sub(r"^([-+#>])", r"\\\1", md)
                md = re.sub(r"^(\x01br\x02|<br>|\s)+", "", md)
                md = re.sub(r"(<br>\s*)+$", "", md)
                if md:
                    blocchi.append(md)

    i = 0
    n = len(s)
    while i < n:
        # \\ (a capo), \$ ecc.: coppie da non spezzare
        if s[i] == "\\" and i + 1 < n and s[i + 1] in "\\$%&#_{}":
            testo.append(s[i:i + 2])
            i += 2
            continue
        # formule a blocco $$..$$ e \[..\]
        if s.startswith("$$", i):
            j = s.find("$$", i + 2)
            if j < 0:
                st.avvisi.append("$$ non chiuso")
                testo.append(s[i:])
                break
            flush()
            blocchi.append("$$\n" + sistema_math(s[i + 2:j].strip(), st) + "\n$$")
            i = j + 2
            continue
        if s.startswith("\\[", i):
            j = s.find("\\]", i + 2)
            if j < 0:
                st.avvisi.append("\\[ non chiuso")
                testo.append(s[i:])
                break
            flush()
            blocchi.append("$$\n" + sistema_math(s[i + 2:j].strip(), st) + "\n$$")
            i = j + 2
            continue
        if s.startswith("$", i) and not s.startswith("$$", i):
            # matematica in linea: la si salta intera (può contenere \begin{cases})
            m = RE_INLINE.match(s, i)
            if m:
                testo.append(m.group(0))
                i = m.end()
                continue
        m = RE_SECTION.match(s, i)
        if m:
            flush()
            livello = 2 + (m.group(0).count("sub"))
            titolo, j = read_group(s, m.end() - 1)
            if livello == 2:
                st.contatori["sezione"] = st.contatori.get("sezione", 0) + 1
                st.contatori["sub"] = 0
                num = f"{st.contatori['sezione']}. "
            elif livello == 3:
                st.contatori["sub"] = st.contatori.get("sub", 0) + 1
                num = f"{st.contatori.get('sezione', 0)}.{st.contatori['sub']} "
            else:
                num = ""
            if "*" in m.group(0):
                num = ""
            blocchi.append("#" * livello + " " + num + inline(titolo, st).strip())
            i = j
            continue
        m = RE_PARAGRAPH.match(s, i)
        if m:
            flush()
            titolo, j = read_group(s, m.end() - 1)
            testo.append(f"\\textbf{{{titolo}}} ")
            i = j
            continue
        m = RE_BEGIN.match(s, i)
        if m:
            env = m.group(1)
            a = m.end()
            try:
                e0, e1 = env_end(s, env, a)
            except ValueError as err:
                st.avvisi.append(str(err))
                testo.append(s[i:a])
                i = a
                continue
            corpo = s[a:e0]
            md = ambiente(env, corpo, st)
            if md is None:
                # ambiente in linea (es. matematica): resta nel testo
                testo.append(s[i:e1])
            else:
                flush()
                if md.strip():
                    blocchi.append(md)
            i = e1
            continue
        m = RE_BOX.match(s, i)
        if m:
            arg, j = read_group(s, m.end() - 1)
            if "tikzpicture" in arg or "includegraphics" in arg:
                flush()
                blocchi.append(figure_da(arg, st, ovale=True))
                i = j
                continue
        m = RE_RESIZE.match(s, i)
        if m:
            if m.group(1) == "resizebox":
                w, j = read_group(s, m.end() - 1)
                _, j = read_group(s, j)
            else:
                w, j = read_group(s, m.end() - 1)
                w = None
            arg, j = read_group(s, j)
            if "tikzpicture" in arg or "includegraphics" in arg:
                flush()
                blocchi.append(figure_da(arg, st, larg=larghezza(w) if w else None))
                i = j
                continue
        m = RE_INCLUDE.match(s, i)
        if m:
            flush()
            blocchi.append(figure_da(s[i:m.end() - 1] + "{" + read_group(s, m.end() - 1)[0] + "}", st))
            i = read_group(s, m.end() - 1)[1]
            continue
        testo.append(s[i])
        i += 1
    flush()
    return "\n\n".join(blocchi)


def figure_da(frammento: str, st: Stato, larg: int | None = None, ovale: bool = False) -> str:
    """Tutte le figure (tikzpicture, includegraphics) contenute in un frammento."""
    out = []
    i = 0
    while i < len(frammento):
        m = re.compile(r"\\begin\{tikzpicture\}|\\includegraphics\s*(\[[^\]]*\])?\s*\{|\\(resizebox)\s*\{").search(frammento, i)
        if not m:
            break
        if m.group(0).startswith("\\begin"):
            e0, e1 = env_end(frammento, "tikzpicture", m.end())
            out.append(figura_tikz(frammento[m.start():e1], st, larg, ovale))
            i = e1
        elif m.group(2) == "resizebox":
            w, j = read_group(frammento, m.end() - 1)
            _, j = read_group(frammento, j)
            arg, j = read_group(frammento, j)
            out.append(figure_da(arg, st, larghezza(w) or larg, ovale))
            i = j
        else:
            opt = m.group(1) or ""
            path, j = read_group(frammento, m.end() - 1)
            if "lavagna" in path:
                i = j
                continue
            w = larg
            mm = re.search(r"width=([^,\]]+)", opt)
            if mm:
                w = larghezza(mm.group(1)) or w
            ms = re.search(r"scale=([0-9.]+)", opt)
            if ms and not w:
                w = max(25, min(100, round(float(ms.group(1)) * 100)))
            out.append(figura_file(path, st, w))
            i = j
    if len(out) > 1:
        return '<div class="figure-affiancate" markdown>\n\n' + "\n\n".join(out) + "\n\n</div>"
    return "\n\n".join(out)


def ambiente(env: str, corpo: str, st: Stato) -> str | None:
    if env in MATH_ENVS:
        return blocco_math(env, corpo, st)
    if env in ("subequations",):
        return converti(corpo, st)
    if env == "empheq":
        opt, k = read_opt(corpo, 0)
        inner_env, k = read_group(corpo, k)
        return blocco_math(inner_env, corpo[k:], st)
    if env in ("cases", "array", "pmatrix", "bmatrix", "matrix", "split", "aligned", "gathered"):
        return None  # sono dentro formule in linea
    if env in ("itemize", "enumerate", "description"):
        opt, k = read_opt(corpo, 0)
        return lista(env, corpo[k:], opt, st)
    if env in ("center", "flushleft", "flushright", "minipage", "small", "footnotesize",
               "quote", "quotation", "adjustwidth", "samepage", "document", "table"):
        if env == "minipage":
            _, k = read_opt(corpo, 0)
            _, k = read_group(corpo, k)
            corpo = corpo[k:]
        md = converti(corpo, st)
        if env in ("quote", "quotation"):
            return "\n".join("> " + r if r else ">" for r in md.split("\n"))
        return md
    if env == "figure":
        _, k = read_opt(corpo, 0)
        didascalia = ""
        mc = re.search(r"\\caption\s*\{", corpo)
        if mc:
            didascalia, fine = read_group(corpo, mc.end() - 1)
            corpo = corpo[:mc.start()] + corpo[fine:]
        md = converti(corpo[k:], st)
        if didascalia:
            md += "\n\n<p class=\"didascalia\">" + inline(didascalia, st) + "</p>"
        return md
    if env == "tikzpicture":
        return figura_tikz(f"\\begin{{tikzpicture}}{corpo}\\end{{tikzpicture}}", st, None, False)
    if env in ("tabular", "tabular*", "tabularx"):
        if env != "tabular":
            _, k = read_group(corpo, 0)
            corpo = corpo[k:]
        _, k = read_opt(corpo, 0)
        spec, k = read_group(corpo, k)
        return tabella(spec, corpo[k:], st)
    if env in TEOREMI:
        tipo, nome = TEOREMI[env]
        titolo, k = read_group(corpo, 0)
        etich, k = read_group(corpo, k)
        num = st.conta(nome)
        tit = f"{nome} {num}" + (f": {inline(titolo, st)}" if titolo.strip() else "")
        ancora = registra_box(etich, f"{nome} {num}", st)
        return f'<a id="{ancora}"></a>\n\n' + box(tipo, tit, converti(corpo[k:], st))
    if env == "proof":
        opt, k = read_opt(corpo, 0)
        corpo_md = converti(corpo[k:], st)
        corpo_md = corpo_md.rstrip()
        if corpo_md.endswith(("$$", "}")) or corpo_md.split("\n")[-1].startswith(("-", "1.", "    ")):
            corpo_md += "\n\n<p class=\"qed-riga\"><span class=\"qed\">□</span></p>"
        else:
            corpo_md += " <span class=\"qed\">□</span>"
        titolo = T["Dimostrazione"] + (f" ({inline(opt, st)})" if opt else "")
        return box("dimostrazione", titolo, corpo_md, apribile=True)
    if env == "texercise":
        _, k = read_opt(corpo, 0)
        _, k = read_group(corpo, k)
        num = st.conta("Esercizio")
        return box("esercizio", f"{T['Esercizio']} {num}", converti(corpo[k:], st))
    if env == "tcolorbox":
        opt, k = read_opt(corpo, 0)
        opt = opt or ""
        contenuto = corpo[k:]
        me = re.search(r"example=\{", opt)
        if me:
            titolo, fine = read_group(opt, me.end() - 1)
            etich, _ = read_group(opt, fine)
            num = st.conta("Esempio")
            tit = f"{T['Esempio']} {num}" + (f": {inline(titolo, st)}" if titolo.strip() else "")
            ancora = registra_box(etich, f"{T['Esempio']} {num}", st)
            return f'<a id="{ancora}"></a>\n\n' + box("esempio", tit, converti(contenuto, st))
        if "blue" in opt:
            corpo_sol = converti(contenuto, st)
            if not corpo_sol.strip():
                return ""  # riquadro della soluzione ancora vuoto nelle note
            return box("soluzione", T["Soluzione"], corpo_sol, apribile=True)
        if "gray" in opt:
            if re.search(r"\\begin\{proof\}", contenuto) and re.sub(r"\\begin\{proof\}.*\\end\{proof\}", "", contenuto, flags=re.S).strip() == "":
                return converti(contenuto, st)  # la proof interna diventa il box apribile
            return box("nota", "", converti(contenuto, st))
        if "green" in opt:
            return box("chiave", "", converti(contenuto, st))
        if "red" in opt:
            return box("attenzione", "", converti(contenuto, st))
        return box("nota", "", converti(contenuto, st))
    if env == "comment":
        return ""
    if env in ("lstlisting", "verbatim"):
        return "```\n" + corpo.strip("\n") + "\n```"
    if env == "forest":
        return figura_tikz(f"\\begin{{forest}}{corpo}\\end{{forest}}", st, None, False)
    st.avvisi.append(f"ambiente sconosciuto: {env}")
    return converti(corpo, st)


# ---------------------------------------------------------------------------
# capitolo
# ---------------------------------------------------------------------------


RE_DEF = re.compile(r"\\(def\\[A-Za-z]+|colorlet|tikzset|tikzstyle\{[^}]*\}\s*=|pgfmathsetmacro|newcommand\*?|renewcommand\*?|definecolor)")


def estrai_definizioni(corpo: str):
    defs, out, i = [], [], 0
    while True:
        m = RE_DEF.search(corpo, i)
        if not m:
            out.append(corpo[i:])
            break
        # dentro un ambiente tikzpicture le definizioni restano dove sono
        prima = corpo[:m.start()]
        if prima.count("\\begin{tikzpicture}") > prima.count("\\end{tikzpicture}"):
            out.append(corpo[i:m.end()])
            i = m.end()
            continue
        out.append(corpo[i:m.start()])
        j = m.end()
        nargs = {"colorlet": 2, "definecolor": 3, "pgfmathsetmacro": 2, "newcommand": 2, "newcommand*": 2,
                 "renewcommand": 2, "renewcommand*": 2}.get(m.group(1), 1)
        if m.group(1).startswith("tikzstyle"):
            _, j = read_opt(corpo, j)
            j = j if corpo[skip_ws(corpo, j)] != "[" else read_opt(corpo, j)[1]
            nargs = 0
            k = skip_ws(corpo, j)
            if corpo[k] == "[":
                j = match_brace(corpo, k, "[", "]") + 1
        for _ in range(nargs):
            _, j = read_opt(corpo, j)
            k = skip_ws(corpo, j)
            if k < len(corpo) and corpo[k] == "{":
                j = match_brace(corpo, k) + 1
            else:
                mm = re.match(r"\\[A-Za-z]+", corpo[k:])
                j = k + (len(mm.group(0)) if mm else 1)
            _, j = read_opt(corpo, j)
        defs.append(corpo[m.start():j])
        i = j
    return "".join(out), defs


def titolo_capitolo(corpo: str) -> str:
    m = re.search(r"\{\s*\\huge\s*\\bf(.*?)\}\s*\\vspace", corpo, re.S)
    if not m:
        m = re.search(r"\\huge\s*\\bf(.*?)\}", corpo, re.S)
    t = m.group(1) if m else "Capitolo"
    t = re.sub(r"\\\\(\[[^\]]*\])?", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def autori(corpo: str) -> str:
    m = re.search(r"\\textbf\{(?:Autor[ei]|Authors?)\}:(.*?)\\item", corpo, re.S)
    if not m:
        return "Fabio Furini"
    nomi = re.findall(r"\\underline\{([^}]*)\}", m.group(1))
    return ", ".join(nomi[:-1]) + " e " + nomi[-1] if len(nomi) > 1 else (nomi[0] if nomi else "Fabio Furini")


def converti_capitolo(parte: str, num: int, slug: str, rel: str, esercizi: bool = False) -> dict:
    from capitoli import SORGENTE_ES, ident_es, ident_es_it, PARTI_ES, CARTELLA_ES
    fonte = (SORGENTE_ES if esercizi else SORGENTE) / rel
    tex = fonte.read_text(encoding="utf-8", errors="replace")
    tex = strip_comments(tex)
    tex = re.sub(r"\\vskip\s*-?[0-9.]+\s*(pt|cm|mm|em|ex|in)", "", tex)
    pre, _, resto = tex.partition("\\begin{document}")
    corpo, _, _ = resto.partition("\\end{document}")
    cid = ident_es(parte, num, slug) if esercizi else ident(parte, num, slug)
    st = Stato(cid=cid, fonte=fonte, preambolo=pre)
    titolo = titolo_capitolo(corpo)
    chi = autori(corpo)
    # il contenuto parte dopo l'indice
    k = corpo.find("\\tableofcontents")
    if k >= 0:
        corpo = corpo[k + len("\\tableofcontents"):]
    else:
        cand = [x for x in (corpo.find("\\section"), corpo.find("\\begin{texercise}")) if x >= 0]
        corpo = corpo[min(cand):] if cand else corpo
    # definizioni TikZ/macro scritte nel corpo (es. i diagrammi di Venn):
    # vanno nel preambolo delle figure e non nel testo
    corpo, defs = estrai_definizioni(corpo)
    pre = pre + "\n" + "\n".join(defs)
    # preambolo per le figure standalone
    d = BUILD / "figure" / cid
    if d.exists():
        for f in d.iterdir():
            f.unlink()
    d.mkdir(parents=True, exist_ok=True)
    (d / "preambolo.tex").write_text(pre)
    (d / "cartella.txt").write_text(str(fonte.parent))

    # prima passata: numerazione dei box, per i riferimenti in avanti
    prova = Stato(cid=cid, fonte=fonte, preambolo=pre)
    converti(corpo, prova)
    st.box_prima = prova.box
    md = converti(corpo, st)
    md = md.replace("\x01", "<").replace("\x02", ">")
    if esercizi:
        titolo = re.sub(r"^(Esercizi|Exercises)\s*:\s*", "", titolo).strip()
        titolo = titolo[:1].upper() + titolo[1:]
    testa = [
        "---",
        f"title: \"{titolo}\"",
        "---",
        "",
        f"# {titolo}",
        "",
        f'<div class="info-capitolo" markdown>',
        "",
        ((f"**Exercises · {PARTI_ES[_parte_it(parte)][1]}** · with worked solutions · "
          f"[:material-file-pdf-box: PDF](../pdf/{cid}.pdf)") if EN else
         (f"**Esercizi · {PARTI_ES[_parte_it(parte)][0]}** · con le soluzioni svolte · "
          f"[:material-file-pdf-box: PDF](../pdf/{cid}.pdf)")) if esercizi else
        (f"**Part {parte_numero(parte)} · {nome_parte(parte)} · Chapter {num}** · lecture notes by {chi} · "
         f"[:material-file-pdf-box: Chapter PDF](../pdf/{cid}.pdf)") if EN else
        (f"**Parte {parte_numero(parte)} · {nome_parte(parte)} · Capitolo {num}** · dalle dispense di {chi} · "
         f"[:material-file-pdf-box: PDF del capitolo](../pdf/{cid}.pdf)"),
        "",
        "</div>",
        "",
    ]
    note = ""
    if st.note:
        note = "\n\n" + "\n".join(f"[^{k}]: {t}" for k, t in enumerate(st.note, 1))
    from interattivi_capitoli import inserisci
    if not esercizi:
        md = inserisci(ident_it(cid), md, EN)
    out = "\n".join(testa) + "\n" + md + note + "\n"
    out = re.sub(r"\n{3,}", "\n\n", out)
    dest = DOCS / CARTELLA_ES / f"{cid}.md" if esercizi else DOCS / pagina(parte, num, slug)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(out, encoding="utf-8")
    rep = BUILD / "report"
    rep.mkdir(parents=True, exist_ok=True)
    from collections import Counter
    (rep / f"{cid}.txt").write_text("\n".join(f"{v:4d}  {k}" for k, v in Counter(st.avvisi).most_common()))
    return {"id": cid, "titolo": titolo, "figure": st.figure, "avvisi": len(st.avvisi), "autori": chi}


def _parte_it(parte: str) -> str:
    from capitoli import PARTI_ES
    for k, v in PARTI_ES.items():
        if parte in (k, v[2]):
            return k
    return parte


def parte_numero(parte: str) -> str:
    from capitoli import PARTI
    return {p[0]: p[4] for p in PARTI}[parte]


def nome_parte(parte: str) -> str:
    from capitoli import PARTI
    return {p[0]: p[1] for p in PARTI}[parte]


if __name__ == "__main__":
    filtro = sys.argv[1:] or [""]
    import json
    risultati = []
    for cap in CAPITOLI:
        cid = ident(*cap[:3])
        if any(cid.startswith(f) for f in filtro):
            try:
                r = converti_capitolo(*cap)
            except Exception as e:  # noqa: BLE001
                import traceback
                print(f"{cid:45s} ERRORE: {e!r}")
                traceback.print_exc(limit=-3)
                continue
            risultati.append(r)
            print(f"{r['id']:45s} figure:{r['figure']:3d} avvisi:{r['avvisi']:3d}  {r['titolo']}")
    from capitoli import ESERCIZI, ident_es
    for cap in ESERCIZI:
        cid = ident_es(*cap[:3])
        if any(cid.startswith(f) for f in filtro):
            try:
                r = converti_capitolo(*cap, esercizi=True)
            except Exception as e:  # noqa: BLE001
                import traceback
                print(f"{cid:45s} ERRORE: {e!r}")
                traceback.print_exc(limit=-3)
                continue
            risultati.append(r)
            print(f"{r['id']:45s} figure:{r['figure']:3d} avvisi:{r['avvisi']:3d}  {r['titolo']}")
    (BUILD / "capitoli.json").write_text(json.dumps(risultati, ensure_ascii=False, indent=1))
