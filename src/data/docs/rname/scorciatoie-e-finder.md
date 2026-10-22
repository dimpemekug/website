---
title: "Scorciatoie e integrazione con macOS"
description: "Scorciatoie da tastiera, integrazione con Finder e Dock, trascinamento dei file e scelte di progettazione dell'interfaccia di rName."
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
| <kbd>⌘</kbd> <kbd>↩</kbd> | Rinomina | **Applica la rinomina** ai file pronti |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Rinomina | **Annulla l'ultima rinomina** |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Vista | Mostra o nasconde le impostazioni della regola |
| <kbd>⌘</kbd> <kbd>,</kbd> | rName | Apre le Impostazioni |

Dal menu _Rinomina_ puoi anche aggiungere una regola, rimuovere tutte le regole e ripristinare i nomi scritti a mano.

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
