---
title: "Transcodifica e Codec Video"
description: "Encoder hardware VideoToolbox H.264 ed HEVC, supporto AV1, VP9, Apple ProRes e impostazioni di esportazione in rMux."
project: "rmux"
order: 3
section: "Conversione"
---

## Motore di Transcodifica Integrato

Quando desideri convertire un video in un formato differente, ridurne la risoluzione (es. da 4K a 1080p) o regolarne il bitrate per ottenere un file leggero da condividere, rMux offre un ricco pannello di configurazione (*Inspector Video*).

Tutti i codec supportati sono compilati con licenze aperte permissibili (LGPL / BSD), garantendo la totale conformità con gli standard di sicurezza di Apple.

---

## Codec Video Disponibili

### 1. Apple VideoToolbox (H.264 & HEVC / H.265)
- **Accelerazione Hardware Dedicata**: sfrutta direttamente i circuiti di decodifica ed encode hardware dei chip Apple Silicon (M1/M2/M3/M4) e Intel Quick Sync.
- **Supporto HEVC 10-bit & HDR**: preserva la gamma dinamica estesa e i colori vividi dei video registrati con iPhone in formato HDR Dolby Vision.
- **Velocità Estrema**: codifica fino a 5-10 volte più veloce rispetto alla computazione software su CPU.

### 2. Apple ProRes (422 / 422 HQ / Proxy)
Per professionisti del video editing e della post-produzione che desiderano convertire filmati acquisiti da telecamere o smartphone in un formato intermedio fluido e ideale per il montaggio.

### 3. SVT-AV1 e libvpx VP9
- **AV1 (tramite SVT-AV1 BSD)**: l'algoritmo di compressione di nuova generazione ad altissima efficienza, perfetto per lo streaming moderno su piattaforme web.
- **VP9 (tramite libvpx BSD)**: ideale per caricamenti e compatibilità con il web aperto.

---

## Parametri di Controllo Qualità

Nel pannello di esportazione puoi scegliere tra:
- **Modalità CRF / Constant Quality**: imposta un valore di qualità visiva costante; l'encoder allocherà automaticamente il bitrate necessario per mantenere la medesima nitidezza nelle scene ad alto o basso movimento.
- **Bitrate Personalizzato**: specifica un bitrate fisso (es. 8 Mbps) per controllare con precisione la dimensione finale del file.
- **Regolazione Risoluzione e FPS**: scala la risoluzione (4K, 1440p, 1080p, 720p) e seleziona il frame rate desiderato (24, 30, 60 fps).
