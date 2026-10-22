---
title: "Integrazione con macOS e il Finder"
description: "Servizio del Finder, trascinamento sull'icona del Dock, cartella di destinazione, suffisso dei file e scorciatoie da tastiera in Resizo."
project: "resizo"
order: 4
section: "Funzionalità"
---

## Servizio del Finder

Resizo aggiunge una voce al menu contestuale del Finder tramite `FinderServiceProvider`:

- **Clic destro nel Finder**: seleziona una o più immagini, fai clic destro e scegli **Servizi › Ridimensiona con Resizo**.
- **Apertura immediata**: Resizo si apre con i file selezionati già in elenco, pronti da ridimensionare con le opzioni che preferisci.

---

## Dock e trascinamento

- **Icona nel Dock**: trascina file o cartelle sull'icona di Resizo, anche ad app chiusa: l'app si avvia e li aggiunge all'elenco. Funziona anche **Apri con…** dal Finder.
- **Finestra principale**: trascina immagini o cartelle nell'elenco in qualsiasi momento. Le cartelle vengono esplorate con le sottocartelle, saltando i file nascosti; le immagini già presenti non vengono aggiunte due volte. La tabella mostra miniatura e nome del file, risoluzione e peso originali, nuova dimensione e stato dell'elaborazione.

---

## Destinazione e suffisso

Per evitare sovrascritture accidentali:
- **Cartella predefinita**: se non scegli nulla, i file vengono salvati in `Immagini/Resizo`.
- **Cartella a scelta**: puoi indicare un'altra cartella di destinazione per tutte le immagini, senza toccare quella di origine.
- **Suffisso personalizzabile**: al nome di ogni file viene aggiunto un suffisso (predefinito `-resized`, es. `foto-resized.jpg`). Se esiste già un file con lo stesso nome, Resizo ne crea uno nuovo invece di sovrascriverlo.

---

## Scorciatoie da tastiera

| Scorciatoia | Funzione |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Aggiungi immagini |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Ridimensiona e Salva |
| <kbd>⌘</kbd> <kbd>⌫</kbd> | Rimuovi dall'elenco le immagini selezionate |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Mostra o nascondi le opzioni |
| <kbd>⌘</kbd> <kbd>,</kbd> | Apri le Impostazioni |

Il pulsante **Svuota** sopra l'elenco toglie tutte le immagini dalla lista senza toccare i file su disco. Nelle Impostazioni puoi anche scegliere la lingua dell'app (italiano o inglese) e l'aspetto chiaro, scuro o di sistema.
