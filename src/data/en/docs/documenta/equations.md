---
title: "Equations"
description: "Equations in Documenta: type them in LaTeX with a live preview and templates, inline or on their own line, and how they're saved in Word, ODT, Markdown and web."
project: "documenta"
order: 8
section: "Tables and Objects"
---

## Inserting an equation

**Insert › Equation…** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>E</kbd>) opens the equation editor; on iPhone and iPad **Equation…** is in the **+** menu. In the editor:

- the **LaTeX** field, where you type the equation, for example `\frac{a+b}{2}` or `\sum_{i=1}^{n} x_i`;
- the **preview**, which follows what you type and shows a placeholder for empty parts;
- a row of **templates**: Fraction, Square Root, nth Root, Superscript, Subscript, Sum, Product, Integral, Limit, Brackets, Matrix, Cases, Vector, Bar and Text;
- a row of **symbols**: Greek letters and operators such as ± × ≤ ≈ ∞ ∂ ∇ → ∈ ∪ ∀ ℝ;
- the **On Its Own Line** switch.

A command Documenta doesn't know stays written as text, and the editor points it out under **Unknown commands**.

To change an equation already in the document, double-click it on the Mac; on iPhone and iPad choose **Edit Equation** in the text menu.

## Inline or on its own line

An equation starts out inline, in the line of text like a word. With **On Its Own Line** it gets larger, and sums and limits have their bounds above and below, as in books. Equations aren't numbered.

## What you can write

Greek letters and symbols, fractions (`\frac`, `\dfrac`, `\binom`), roots (`\sqrt`, `\sqrt[n]{}`), superscripts and subscripts, sums, products, integrals and limits, functions such as `\sin` and `\log`, brackets that grow with `\left` and `\right`, accents (`\hat`, `\bar`, `\vec`, `\tilde`, `\overline`), matrices (`matrix`, `pmatrix`, `bmatrix`, `vmatrix`), `cases`, `array` and `align*`, text and fonts (`\text`, `\mathbf`, `\mathbb`, `\mathrm`) and spacing from `\,` to `\qquad`.

## How they're saved

| Format | Equation |
|---|---|
| DOCX | Word equation, editable in Word |
| ODT | LibreOffice formula, with the LaTeX kept for Documenta |
| Markdown | LaTeX between `$` (inline) or `$$` (on its own line) |
| Web page and EPUB | MathML |
| PDF and print | drawn as on the page |
| RTF and DOC | image |
| Plain text | LaTeX between `$` signs |

Equations in Word and LibreOffice files open as equations you can edit.
