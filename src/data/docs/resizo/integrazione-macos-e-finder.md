---
title: "Integrazione con macOS e Finder"
description: "Servizio di sistema del Finder, trascinamento su icona Dock, destinazione di salvataggio e scorciatoie in Resizo."
project: "resizo"
order: 4
section: "Funzionalità"
---

## Azione Rapida e Servizi del Finder

Resizo si integra profondamente nel menu contestuale di macOS grazie a `FinderServiceProvider`:

- **Tasto Destro nel Finder**: seleziona uno o più file immagine nel Finder, fai clic destro e scegli **Servizi › Ridimensiona con Resizo** (oppure dal menu *Azioni Rapide*).
- **Apertura Automatica**: Resizo si aprirà caricando all'istante tutti i file selezionati, pronto per applicare l'ultimo preset utilizzato con un solo clic.

---

## Trascinamento sul Dock e Drag & Drop

- **Icona nel Dock**: puoi trascinare file o un'intera cartella direttamente sull'icona di Resizo nel Dock di macOS, anche quando l'applicazione è chiusa: l'app si avvierà popolando subito la coda di lavoro.
- **Finestra Principale**: trascina immagini in qualsiasi momento nell'area centrale. La tabella mostrerà anteprima in miniatura, nome del file, risoluzione originaria, risoluzione calcolata e peso stimato.

---

## Gestione Destinazione e Suffisso

Per evitare qualsiasi rischio di sovrascrittura accidentale:
- **Salva nella Stessa Cartella con Suffisso**: aggiunge un suffisso al nome file (es. `foto_resized.jpg` o `foto_web.jpg`). Il suffisso è completamente personalizzabile.
- **Salva in una Cartella Specifica**: seleziona una cartella di destinazione (es. *Desktop*, *Immagini/Esportate*) dove convogliare tutte le uscite senza toccare la cartella sorgente.

---

## Scorciatoie da Tastiera

| Scorciatoia | Funzione |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Apri file o cartella dal Finder |
| <kbd>⌘</kbd> <kbd>R</kbd> | Esegui "Ridimensiona e Salva" |
| <kbd>⌫</kbd> | Rimuovi immagine selezionata dalla coda |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Svuota l'intera coda di lavoro |
| <kbd>⌘</kbd> <kbd>,</kbd> | Apri Preferenze |
| <kbd>⌘</kbd> <kbd>W</kbd> | Chiudi la finestra |
