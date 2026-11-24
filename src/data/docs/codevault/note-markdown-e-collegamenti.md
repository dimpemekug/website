---
title: "Note Markdown e collegamenti"
description: "Come si scrivono le note Markdown in CodeVault: barra sopra la tastiera, tabelle, menu dell'editor, anteprima, PDF e collegamenti fra note con [[Titolo]]."
project: "codevault"
order: 3
section: "Funzionalità"
---

## Scrivere una nota Markdown

Una nota può essere **testo semplice** o **Markdown**. In Markdown l'editor colora quello che scrivi (titoli, grassetto, codice, elenchi, citazioni, voci spuntate) e il dettaglio mostra la nota impaginata. Il pulsante `</>` nel dettaglio passa dall'anteprima al testo sorgente.

Mentre scrivi:

- <kbd>Invio</kbd> continua un elenco o una citazione; su una voce vuota la chiude.
- <kbd>Tab</kbd> e <kbd>⇧</kbd> <kbd>Tab</kbd> aumentano e riducono il rientro di una voce.
- Un tocco su `[ ]` nell'editor spunta la voce.
- **Incolla** da Safari, Mail o Pages trasforma il testo formattato in Markdown.

---

## La barra Markdown

Su **iPhone** e **iPad** la barra Markdown sta sopra la tastiera (anche con una tastiera fisica collegata); su **Mac** gli stessi comandi stanno nella barra sopra l'editor.

- **Indice**: il primo pulsante salta a uno dei titoli della nota.
- **Titoli** da 1 a 6, grassetto, corsivo, barrato.
- **Elenchi** puntati, numerati e da spuntare, citazioni, rientro.
- **Codice** in linea e a blocchi, link, nota a piè di pagina, separatore e **tabelle**.

### Tabelle

Con il cursore in una tabella, il menu **Tabella** aggiunge, sposta ed elimina righe e colonne, allinea le colonne e mette in ordine il testo.

### Il menu dell'editor

Tieni premuto nel testo (clic destro su Mac). A seconda di dove sei, il menu propone:

- su un link: **Rimuovi link**, che lascia il testo;
- in un elenco da spuntare: **Spunta tutte** o **Togli tutte le spunte**;
- su un titolo: copia il link al titolo, **Sposta sezione su** o **Sposta sezione giù**;
- in un blocco di codice: **Copia codice** e la lingua del blocco.

---

## Anteprima e PDF

- Le **caselle** si spuntano con un tocco nell'anteprima, senza aprire l'editor.
- I blocchi `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]` e `> [!CAUTION]` diventano riquadri colorati.
- Una riga con solo `[TOC]` diventa il sommario dei titoli.
- In cima trovi righe, parole e minuti di lettura.
- Dal menu **⋯** esporti la nota in **PDF** (pagine A4). Il PDF è sempre chiaro, anche se l'app è in tema scuro.

---

## Collegamenti fra note

Nelle note Markdown colleghi una nota all'altra scrivendo il titolo fra doppie parentesi quadre:

| Scrivi | Ottieni |
| :--- | :--- |
| `[[Release Runbook]]` | un collegamento alla nota |
| `[[Release Runbook#Build]]` | un collegamento al titolo *Build* di quella nota |
| `[[Release Runbook\|il runbook]]` | un collegamento alla nota che mostra «il runbook» |
| `[[#Build]]` | un salto al titolo *Build* della stessa nota |

- **Mentre scrivi**: dopo `[[` compaiono i titoli delle altre note, sopra la tastiera su iPhone e iPad e nella lista dei completamenti su Mac; dopo `[[#` compaiono i titoli della nota aperta.
- **Nell'anteprima**: un tocco sul collegamento apre la nota. Se la nota non esiste il collegamento si vede rotto, e torna a funzionare quando crei una nota con quel titolo.
- **Collegata da**: in fondo a ogni nota c'è l'elenco delle note che rimandano a lei, con la riga del collegamento.

Da sapere:

- Il titolo si confronta senza badare a maiuscole, accenti e spazi ai bordi: `[[release runbook]]` va bene.
- I collegamenti valgono fra note, non verso gli snippet.
- Dentro i blocchi di codice `[[…]]` resta testo.
- Se rinomini una nota, i collegamenti nelle altre non cambiano da soli: vanno aggiornati a mano.
