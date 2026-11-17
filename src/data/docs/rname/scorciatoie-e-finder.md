---
title: "Scorciatoie e integrazione con macOS"
description: "Scorciatoie da tastiera di rName e come cambiarle, integrazione con Finder e Dock, trascinamento dei file, guida e scelte sull'interfaccia."
project: "rname"
order: 7
section: "Riferimento"
---

## Un'app pensata per il Mac

rName si integra con **macOS** in modo naturale: tastiera, trascinamento, menu di sistema e Finder.

---

## Scorciatoie da tastiera

| Scorciatoia | Menu | Azione |
| :--- | :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | File | Scegli una cartella |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd> | File | Aggiungi singoli file alla lista |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | File | Svuota la lista |
| <kbd>⌘</kbd> <kbd>Z</kbd> | Composizione | **Annulla** l'ultima rinomina, anche più di una di seguito |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Composizione | **Ripeti** la rinomina annullata |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Rinomina | **Applica la rinomina** ai file pronti |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Rinomina | Annulla l'ultima rinomina |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Vista | Mostra o nasconde le impostazioni della regola |
| <kbd>⌘</kbd> <kbd>?</kbd> | Aiuto | Apre la guida di rName |
| <kbd>⌘</kbd> <kbd>,</kbd> | rName | Apre le Impostazioni |

Dal menu _Rinomina_ puoi anche aggiungere una regola, rimuovere tutte le regole e ripristinare i nomi scritti a mano. Dal menu _Aiuto_ riapri l'introduzione del primo avvio (_Mostra l'introduzione_).

### Cambiare le scorciatoie

In _Impostazioni › Scorciatoie_ puoi cambiare la scorciatoia di sei comandi: _Scegli una cartella…_, _Aggiungi singoli file…_, _Applica rinomina_, _Annulla ultima rinomina_, _Svuota la lista_ e _Mostra o nascondi impostazioni regola_.

- Fai clic sulla scorciatoia e premi i tasti nuovi; <kbd>Esc</kbd> annulla, <kbd>⌫</kbd> toglie la scorciatoia dal comando.
- Una scorciatoia deve usare almeno <kbd>⌘</kbd> o <kbd>⌃</kbd>, oppure un tasto funzione (<kbd>F1</kbd>–<kbd>F20</kbd>).
- rName rifiuta le combinazioni già usate da un altro suo comando o da un comando di sistema (per esempio <kbd>⌘</kbd> <kbd>Q</kbd>, <kbd>⌘</kbd> <kbd>W</kbd>, <kbd>⌘</kbd> <kbd>C</kbd>) e dice da quale.
- Annulla (<kbd>⌘</kbd> <kbd>Z</kbd>), Ripeti (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>) e Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>) restano come su ogni Mac.
- Accanto a una scorciatoia cambiata compare il pulsante per ripristinare quella originale; _Ripristina tutte le scorciatoie_ le riporta tutte ai valori di fabbrica.

I menu, i suggerimenti dei pulsanti e la guida mostrano sempre le scorciatoie in uso.

---

## Finder e Dock

Oltre a tastiera e barra degli strumenti, puoi aggiungere file a rName in tre modi:

### 1. Trascinamento nella finestra

Trascina una cartella o un gruppo di file dal Finder nella finestra di rName. Se trascini una cartella, l'app ottiene subito il permesso di scrittura e carica tutti i file che contiene.

### 2. Trascinamento sull'icona nel Dock

Trascina una cartella o alcuni file sull'icona di rName nel **Dock**:

- se l'app è chiusa, si apre con i file già caricati;
- se è già aperta, aggiunge i nuovi elementi alla lista.

### 3. «Apri con…»

Nel Finder, fai clic destro su una cartella o un file e scegli **Apri con › rName**: l'app apre il percorso e mostra l'anteprima con le regole correnti.

---

## Una finestra stabile

Durante lo sviluppo, la stabilità della finestra durante il ridimensionamento è stata verificata con test ripetuti, perché alcune configurazioni dello split view di SwiftUI possono far terminare l'app per cicli di layout che non convergono.

Per questo il pannello delle impostazioni della regola è integrato nella colonna destra invece di essere una terza colonna separata:

- la finestra si può stringere e allargare liberamente;
- le colonne della tabella hanno larghezze ideali che si adattano allo spazio;
- le impostazioni restano sempre raggiungibili, a qualsiasi dimensione della finestra.
