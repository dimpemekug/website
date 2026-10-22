---
title: "Formati e sidecar XMP"
description: "Dettagli tecnici su come rExif scrive ogni formato, differenze tra MOV e MP4, file sidecar XMP per i RAW e limiti noti."
project: "rexif"
order: 8
section: "Formati & Compatibilità"
---

## Come vengono scritti i file

rExif usa un metodo di scrittura diverso per ogni famiglia di formati, sempre senza ricomprimere le immagini né ricodificare i video:

| Formato | Metodo di scrittura | Ricompressione |
| :--- | :--- | :---: |
| **JPEG** | ImageIO `CGImageDestinationCopyImageSource`, merge dei soli tag modificati | ❌ No |
| **HEIC, PNG, TIFF** | ImageIO, copia completa dei dati + sostituzione dei metadati | ❌ No |
| **MOV, MP4, M4V** | AVFoundation export *passthrough* + patch diretta degli atomi QuickTime (`mvhd`, `tkhd`, `mdhd`) | ❌ No |
| **RAW (CR2, CR3, NEF, ARW, DNG, RAF…)** | Creazione o aggiornamento del file sidecar `.xmp` accanto (RAW originale intatto) | ❌ No |
| **Video non riscrivibili (AVI, MKV, WMV, MTS, 3GP…)** | File sidecar `.xmp` accanto | ❌ No |

## Video: MOV e MP4/M4V

Tra i contenitori QuickTime (MOV) e MPEG-4 (MP4/M4V) c'è una differenza importante:

- **MOV**: supporta tutti i campi. rExif li scrive sia nello spazio `mdta` (`com.apple.quicktime.*`) sia nel vecchio blocco `udta`: data, posizione GPS, marca e modello, descrizione, autore, copyright, parole chiave e valutazione.
- **MP4 e M4V**: AVFoundation scrive solo i metadati degli standard 3GPP (`uiso`) e iTunes (`itsk`):
  - si possono modificare **data**, **posizione GPS**, **descrizione**, **autore** e **copyright**;
  - non si possono modificare marca, modello, parole chiave e valutazione. Se le modifiche riguardano solo campi non scrivibili, il file non viene riscritto. Metadati non standard già presenti nell'MP4 possono andare persi al salvataggio.

> [!NOTE]
> Il salvataggio di un video copia l'intero file: per i filmati grandi (es. 4K o ProRes) l'avanzamento è mostrato nella barra in basso.

## RAW e file sidecar `.xmp`

Per i file RAW (Canon `.CR2`/`.CR3`, Nikon `.NEF`, Sony `.ARW`, Fujifilm `.RAF`, Olympus `.ORF`, DNG) e per i video in contenitori non scrivibili:
- il file originale **non viene mai modificato**;
- tutti i campi si possono modificare e finiscono in un file XMP standard nella stessa cartella, con lo stesso nome del file;
- i file `.xmp` sono letti da **Adobe Lightroom Classic**, **Adobe Bridge**, **Adobe Premiere Pro** e **Capture One**;
- per creare il `.xmp` serve l'accesso alla cartella: se hai aggiunto singoli file, rExif lo chiede al salvataggio.

*Nota*: Finder, Foto e QuickTime non leggono i file `.xmp`. Per questi formati la data che mostrano è quella del file system, che puoi allineare con rExif (`⇧⌘L`).

## Salvataggio sicuro

Per rispettare i vincoli della sandbox di macOS:
1. la sovrascrittura avviene scrivendo una copia completa aggiornata in un file temporaneo, che poi prende il posto dell'originale;
2. se la copia si interrompe (es. disco pieno o volume esterno scollegato), l'originale viene ripristinato da un clone APFS, quando la cartella è accessibile;
3. altrimenti una copia completa resta accanto al file come `nome (originale).ext` o `nome (modificato).ext`, oppure nella cartella `Application Support/Recupero` del contenitore dell'app.
