---
title: "Introduzione a rMux"
description: "Panoramica di rMux per Mac: editor video leggero, taglio lossless istantaneo, transcodifica hardware VideoToolbox e remuxing."
project: "rmux"
order: 1
section: "Iniziare"
---

## Cos'è rMux

**rMux** è un editor video rapido e leggero per **macOS 14 o successivo** progettato per svolgere le operazioni quotidiane più frequenti sui filmati — ritagliare spezzoni, convertire formati, estrarre audio o riassemblare flussi multimediali — senza la lentezza e la complessità delle pesanti suite di montaggio non lineare.

Sviluppato interamente in **SwiftUI** nel rispetto delle Human Interface Guidelines di Apple, rMux integra al proprio interno binari ufficiali di **FFmpeg e ffprobe** compilati con licenza LGPL e accelerazione hardware **VideoToolbox**, garantendo velocità fulminea sui Mac Apple Silicon e Intel.

---

## Filosofia Progettuale

### 1. Nessun File di Progetto: Apri ed Edita
Molti editor costringono a creare complessi progetti proprietari (`.vcedit`, librerie pesanti) anche solo per accorciare un video di dieci secondi. rMux adotta un flusso diretto:
- Trascina il video nella finestra o sull'icona nel Dock.
- Imposta i punti di taglio con i tasti <kbd>I</kbd> e <kbd>O</kbd>.
- Esporta: rMux salva direttamente il nuovo file.

### 2. Taglio Lossless (Direct Stream Copy) a Perdita Zero
Se desideri semplicemente rimuovere testa e coda di una registrazione o tagliare una porzione senza cambiare risoluzione o codec, rMux esegue il **remuxing lossless**: i pacchetti video e audio vengono copiati byte per byte nel nuovo contenitore senza ricalcolare i pixel. L'operazione è istantanea (pochi decimi di secondo) e preserva il 100% della qualità originale.

### 3. Accelerazione Hardware su Apple Silicon
Per le conversioni che richiedono ricodifica, rMux sfrutta i chip Media Engine del Mac tramite l'encoder di sistema Apple VideoToolbox (per **H.264** e **HEVC/H.265**), garantendo rendering rapidissimo e consumi energetici minimi.

### 4. Privacy e Sandboxing macOS
L'applicazione è certificata con App Sandbox, funziona completamente offline e non include telemetry né analytics.
