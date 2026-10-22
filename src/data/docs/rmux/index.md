---
title: "Introduzione a rMux"
description: "Panoramica di rMux per Mac: editor video leggero con taglio senza ricodifica, transcodifica con accelerazione hardware VideoToolbox, tracce audio, sottotitoli, filtri e unione di clip."
project: "rmux"
order: 1
section: "Iniziare"
---

## Cos'è rMux

**rMux** è un editor video rapido e leggero per **macOS 14 Sonoma o successivo**, per **Mac con chip Apple**. È pensato per le operazioni più frequenti sui filmati (tagliare spezzoni, cambiare formato, sistemare audio e sottotitoli, unire clip) senza la lentezza e la complessità delle grandi suite di montaggio.

È scritto in **SwiftUI** secondo le linee guida di Apple e include al suo interno **FFmpeg e ffprobe**, compilati senza componenti GPL (licenza LGPL), con l'accelerazione hardware **VideoToolbox** per H.264 e HEVC.

---

## Filosofia

### 1. Nessun progetto: apri e modifica
rMux non crea file di progetto. Il flusso è diretto:
- apri il video trascinandolo nella finestra o sull'icona nel Dock, con **Apri con…** dal Finder o con **File › Apri Video…**;
- imposta inizio e fine del taglio con <kbd>⌘</kbd> <kbd>I</kbd> e <kbd>⌘</kbd> <kbd>O</kbd>;
- esporta (<kbd>⌘</kbd> <kbd>↩</kbd>): rMux salva un nuovo file e non modifica mai l'originale.

### 2. Taglio senza perdita di qualità
Se devi solo togliere l'inizio e la fine di una registrazione, o cambiare contenitore senza toccare codec e risoluzione, rMux **copia i flussi audio e video così come sono** nel nuovo file, senza ricalcolare i fotogrammi. L'operazione richiede pochi secondi e conserva il 100% della qualità originale.

### 3. Accelerazione hardware
Quando serve ricodificare, rMux usa il Media Engine del Mac tramite **VideoToolbox** per **H.264** e **HEVC/H.265**: codifica rapida e consumi ridotti. Sono disponibili anche AV1, VP9 e Apple ProRes.

### 4. Tutto sul tuo Mac
L'app funziona in App Sandbox e completamente offline: nessun caricamento, nessun account, nessun tracciamento. Interfaccia in italiano e in inglese, tema chiaro, scuro o automatico.

---

## Cosa puoi fare

- **Tagliare** uno o più segmenti e unirli in un unico file.
- **Convertire** in MP4, MOV, MKV, WebM o AVI, con H.264, HEVC, AV1, VP9 o ProRes.
- **Gestire le tracce audio**: copiarle, convertirle, escluderle, regolarne volume e sincronizzazione, estrarle.
- **Aggiungere sottotitoli** SRT e ASS/SSA come traccia o impressi nell'immagine.
- **Ritagliare e correggere** l'immagine: ritaglio, ridimensionamento, rotazione, filtri e LUT.
- **Unire più video** in un unico file.
- **Mettere in coda** più esportazioni e continuare a lavorare.
