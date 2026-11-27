---
title: "Equazioni"
description: "Equazioni in Documenta: scriverle in LaTeX con anteprima e modelli, nel testo o su una riga da sola, e come si salvano in Word, ODT, Markdown e web."
project: "documenta"
order: 8
section: "Tabelle e oggetti"
---

## Inserire un'equazione

**Inserisci › Equazione…** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>E</kbd>) apre l'editor delle equazioni; su iPhone e iPad **Equazione…** è nel menu **+**. Nell'editor:

- il campo **LaTeX**, dove si scrive l'equazione, per esempio `\frac{a+b}{2}` o `\sum_{i=1}^{n} x_i`;
- l'**anteprima**, che segue quello che scrivi e mostra un segnaposto al posto delle parti vuote;
- una fila di **modelli**: Frazione, Radice, Radice n-esima, Apice, Pedice, Somma, Prodotto, Integrale, Limite, Parentesi, Matrice, Casi, Vettore, Barra e Testo;
- una fila di **simboli**: lettere greche e operatori come ± × ≤ ≈ ∞ ∂ ∇ → ∈ ∪ ∀ ℝ;
- l'interruttore **Su una riga da sola**.

Un comando che Documenta non conosce resta scritto come testo e l'editor lo segnala con **Comandi non riconosciuti**.

Per cambiare un'equazione già nel documento, sul Mac fai doppio clic su di lei; su iPhone e iPad scegli **Modifica equazione** nel menu del testo.

## Nel testo o su una riga da sola

All'inizio un'equazione sta nella riga del testo, come una parola. Con **Su una riga da sola** diventa più grande e somme e limiti hanno gli estremi sopra e sotto, come nei libri. Le equazioni non si numerano.

## Cosa si può scrivere

Lettere greche e simboli, frazioni (`\frac`, `\dfrac`, `\binom`), radici (`\sqrt`, `\sqrt[n]{}`), apici e pedici, somme, prodotti, integrali e limiti, funzioni come `\sin` e `\log`, parentesi che crescono con `\left` e `\right`, accenti (`\hat`, `\bar`, `\vec`, `\tilde`, `\overline`), matrici (`matrix`, `pmatrix`, `bmatrix`, `vmatrix`), `cases`, `array` e `align*`, testo e caratteri (`\text`, `\mathbf`, `\mathbb`, `\mathrm`) e gli spazi da `\,` a `\qquad`.

## Come si salvano

| Formato | Equazione |
|---|---|
| DOCX | equazione di Word, modificabile in Word |
| ODT | formula di LibreOffice, con il LaTeX conservato per Documenta |
| Markdown | LaTeX tra `$` (nel testo) o `$$` (su una riga da sola) |
| Pagina web ed EPUB | MathML |
| PDF e stampa | disegnata come sulla pagina |
| RTF e DOC | immagine |
| Testo semplice | LaTeX tra `$` |

Le equazioni dei file di Word e di LibreOffice si aprono come equazioni da modificare.
