---
title: "Dettagli Formati e Sidecar XMP"
description: "Specifiche tecniche sui metodi di scrittura in-place, gestione video MOV e MP4, file sidecar XMP per formati RAW e limiti noti."
project: "rexif"
order: 8
section: "Formati & Compatibilità"
---

## Specifiche Tecniche di Scrittura

rExif adotta metodi di scrittura specifici per ogni famiglia di formati, garantendo la totale assenza di ricompressione grafica o transcodifica:

| Formato | Metodo di Scrittura nel Codice | Ricompressione Pixel / Frame |
| :--- | :--- | :---: |
| **JPEG** | ImageIO `CGImageDestinationCopyImageSource`, merge dei soli tag modificati | ❌ No |
| **HEIC, PNG, TIFF** | ImageIO, copia completa del flusso + sostituzione dizionario metadati | ❌ No |
| **MOV, MP4, M4V** | AVFoundation export *passthrough* + patch diretta degli atomi QuickTime (`mvhd`, `tkhd`, `mdhd`) | ❌ No |
| **RAW (CR2, CR3, NEF, ARW, DNG, RAF...)** | Generazione/aggiornamento file sidecar `.xmp` adiacente (file RAW originale intatto) | ❌ No |
| **Video non riscrivibili (AVI, MKV, WMV, MTS)** | File sidecar `.xmp` adiacente | ❌ No |

## Gestione dei Video: MOV vs MP4/M4V

Esiste una differenza tecnica rilevante tra contenitori Apple QuickTime (MOV) e standard MPEG-4 (MP4 / M4V) gestita da rExif:

- **Formato MOV**: Supporta la totalità dei campi metadati. rExif scrive i dati sia nello spazio `mdta` (`com.apple.quicktime.*`) sia nel blocco legacy `udta`. Sono modificabili data, posizione GPS, fotocamera, obiettivo, descrizione, autore, copyright, parole chiave e valutazione a stelle.
- **Formato MP4 e M4V**: A causa dell'architettura di AVFoundation di Apple, su MP4 e M4V vengono mappati unicamente i metadati compatibili con gli standard 3GPP (`uiso`) e iTunes (`itsk`):
  - Sono modificabili: **Data di registrazione**, **Posizione GPS**, **Descrizione**, **Autore** e **Copyright**.
  - Non sono modificabili: Marca, Modello della fotocamera, Parole chiave e Rating (non previsti dallo schema AVFoundation per MP4). Se un file MP4 contiene metadati non standard preesistenti, questi potrebbero non essere preservati alla riscrittura.

> [!NOTE]
> Durante il salvataggio di video di grandi dimensioni (es. file 4K ProRes o lunghi filmati), l'avanzamento dell'esportazione del singolo filmato viene mostrato nella barra di stato in basso.

## Formati RAW e File Sidecar `.xmp`

Per i file RAW proprietari (Canon `.CR2`/`.CR3`, Nikon `.NEF`, Sony `.ARW`, Fujifilm `.RAF`, Olympus `.ORF`, DNG):
- Il file grezzo originale del sensore **non viene mai toccato sul disco**, salvaguardando l'autenticità probatoria e forense dello scatto.
- Tutti i metadati modificati vengono scritti in un file di testo XMP standard posizionato nella stessa cartella, con il medesimo nome del file e suffisso `.xmp` (es. `IMG_0042.CR3.xmp`).
- I file `.xmp` sono letti e interpretati nativamente da **Adobe Lightroom Classic**, **Adobe Bridge**, **Adobe Premiere Pro** e **Capture One**.
- *Nota su Finder e QuickTime*: Finder, Foto e QuickTime non leggono i file sidecar `.xmp`. Per questi formati la data visualizzata nel Finder è quella del file system APFS (che puoi allineare con rExif tramite `⇧⌘L`).

## Meccanismo di Salvataggio Sicuro

Per rispettare i vincoli della Sandbox di macOS:
1. La sovrascrittura di un file avviene scrivendo una copia completa aggiornata in una cartella temporanea sicura, per poi sostituire l'originale.
2. Se la scrittura viene interrotta bruscamente (es. disco pieno o volume esterno scollegato), l'originale viene ripristinato automaticamente tramite un clone APFS.
3. Se la cartella originale non fosse accessibile, una copia completa di riserva viene conservata come `nome (originale).ext` o `nome (modificato).ext`, oppure nella directory `Application Support/Recupero` all'interno del contenitore sandbox di rExif.
