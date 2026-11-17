---
title: "Introduzione a Resizo"
description: "Panoramica di Resizo per Mac: ridimensionamento di immagini in blocco, peso stimato, conversione da HEIC a JPEG e rimozione dei metadati, tutto offline."
project: "resizo"
order: 1
section: "Iniziare"
---

## Cos'è Resizo

**Resizo** è un'app per **macOS 14 Sonoma o successivo** (Mac con Apple Silicon e Intel) che ridimensiona, converte e alleggerisce molte immagini in un colpo solo.

Serve per preparare cento foto dell'iPhone per un sito, convertire foto da HEIC a JPEG o allegare a un'email immagini leggere e senza la posizione GPS. Le immagini vengono elaborate in parallelo, direttamente sul Mac.

---

## Caratteristiche principali

### 1. Privacy
- **Completamente offline**: l'app non ha accesso alla rete; i tuoi file non lasciano mai il Mac.
- **Metadati rimossi di default**: i file esportati non contengono posizione GPS, modello della fotocamera, data e parametri di scatto, a meno che tu non scelga di mantenerli.
- **Originali intatti**: Resizo non sovrascrive mai i file originali. Le nuove versioni vengono salvate con un suffisso nel nome, in `Immagini/Resizo`, in una cartella scelta da te o accanto a ogni originale.

### 2. Prestazioni
- **Elaborazione in parallelo**: per impostazione predefinita Resizo elabora insieme tante immagini quanti sono i core ad alte prestazioni del Mac, entro un limite di memoria. Il numero si può cambiare nelle [Impostazioni](/progetti/resizo/docs/impostazioni).
- **Elenchi lunghi**: centinaia di foto compaiono nell'elenco quasi subito; le miniature si generano solo per le righe visibili.
- **Peso stimato e spazio risparmiato**: prima di salvare vedi quanto peseranno i file; a fine lavoro, quanto spazio hai risparmiato.

### 3. Formati supportati
- **In ingresso**: PNG, JPEG, HEIC, HEIF, TIFF, BMP, GIF e WebP.
- **In uscita**: formato originale, PNG o JPEG con qualità regolabile. I formati che macOS sa leggere ma non scrivere (come il WebP) vengono salvati in PNG.

---

## Flusso di lavoro rapido

1. **Aggiungi le immagini**: trascina foto o intere cartelle (sottocartelle comprese) nella finestra o sull'icona dell'app nel Dock, oppure usa **Aggiungi Immagini…** (<kbd>⌘</kbd> <kbd>O</kbd>).
2. **Scegli le dimensioni**: applica un preset dalla barra laterale (es. *Web*, 1920 px di larghezza) oppure imposta le misure in pixel o in percentuale nella sezione **Dimensioni**.
3. **Imposta l'uscita**: nella sezione **Formato e qualità** scegli formato e qualità JPEG; nella sezione **Salvataggio**, destinazione, nome del file e metadati. In fondo al pannello compare il **peso stimato**.
4. **Avvia**: fai clic su **Ridimensiona e Salva** (<kbd>⌘</kbd> <kbd>↩</kbd>). A fine lavoro un riquadro verde riassume i pesi prima e dopo, con il pulsante **Mostra nel Finder**.
