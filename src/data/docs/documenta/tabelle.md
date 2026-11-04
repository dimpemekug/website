---
title: "Tabelle"
description: "Tabelle in Documenta: inserimento, righe e colonne, celle unite, bordi e sfondi, stili pronti, intestazione ripetuta, ordinamento e formule come =SUM(ABOVE)."
project: "documenta"
order: 6
section: "Tabelle e oggetti"
---

## Inserire una tabella

- **Inserisci › Tabella…** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>T</kbd>) o il pulsante della tabella nella barra degli strumenti: righe e colonne si scelgono su una griglia.
- **Inserisci › Converti in tabella** trasforma il testo selezionato in tabella, con il separatore automatico o uno scelto. **Formato › Tabella › Converti in testo** fa il contrario.

Con il cursore in una tabella compaiono il menu **Formato › Tabella** e la scheda **Tabella** dell'inspector.

## Righe, colonne e celle

- **Inserisci riga sopra** o **sotto**, **Inserisci colonna a sinistra** o **a destra**; **Elimina riga**, **Elimina colonna**, **Elimina tabella**.
- **Unisci celle** su due o più celle selezionate, anche in verticale; **Separa le celle unite**, **Dividi in due colonne** o **in due righe**.
- **Colonne uguali** distribuisce la larghezza; nell'inspector si cambiano anche la larghezza di una cella, la posizione della tabella e il margine interno delle celle.
- Le tabelle si possono mettere una dentro l'altra.

## Bordi, sfondi e stili

- **Bordi**: riquadri pronti dal menu, oppure colore, spessore e lati della cella nell'inspector. Sfondo, lati e allineamento verticale del testo valgono per le celle selezionate.
- **Stile tabella**: Griglia, Intestazione colorata, Righe alternate, Solo righe, Senza bordi.
- **Ripeti la prima riga in ogni pagina**: l'intestazione torna in cima a ogni pagina su cui la tabella continua.

## Ordinare le righe

**Formato › Tabella › Ordina righe**, dalla A alla Z o dalla Z alla A, per la colonna del cursore. Testo, numeri e date si ordinano ciascuno per il suo tipo; la riga d'intestazione resta ferma.

## Formule

**Formato › Tabella › Formula** mette nella cella un risultato calcolato:

- **Somma**, **Media**, **Minimo**, **Massimo** e **Conteggio** delle celle sopra o a sinistra, come `=SUM(ABOVE)` o `=AVERAGE(LEFT)` di Word;
- **Su celle indicate…**: colonne A, B, C… da sinistra e righe 1, 2, 3… dall'alto. `A1:B3` è un rettangolo; più celle o intervalli si separano con il punto e virgola.

Le formule si ricalcolano quando la tabella cambia; **Aggiorna formule** le ricalcola a richiesta. Il risultato usa il formato dei numeri delle celle, con la valuta e il separatore dei decimali che trova. In RTF, DOC e testo semplice resta solo il risultato; in ODT una formula in una cella che ha anche altro testo la ritrova Documenta, ma non LibreOffice.
