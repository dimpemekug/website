---
title: "Audio e tracce"
description: "Copia, conversione ed esclusione delle tracce audio, volume, sincronizzazione, metadati ed estrazione delle tracce in rMux."
project: "rmux"
order: 4
section: "Audio"
---

## Le tracce audio una per una

Un file video contiene spesso più flussi audio (lingue diverse, commento, audio surround 5.1). L'**Inspector Audio** di rMux mostra ogni traccia con le sue impostazioni:

- **Includi o escludi**: disattiva una traccia per non portarla nel file esportato. Escludendo tutte le tracce ottieni un video muto.
- **Copy**: la traccia viene copiata così com'è, senza perdite.
- **Transcode**: la traccia viene convertita in **AAC, AC3, MP3, Opus, FLAC o PCM**, con bitrate, canali (come la sorgente, mono, stereo o 5.1) e frequenza di campionamento (come la sorgente, 44,1 o 48 kHz).

---

## Volume e sincronizzazione

- **Guadagno**: alza o abbassa il volume della traccia in dB.
- **Sincronizzazione**: correggi il ritardo tra audio e video anticipando o ritardando la traccia a passi di 100 millisecondi, anche senza ricodificare.

---

## Metadati della traccia

Per ogni traccia puoi modificare:
- il **titolo** (es. "Commento del regista");
- la **lingua** (es. `ita`);
- la **traccia predefinita**, cioè quella che i lettori attivano per prima nei file con più tracce.

---

## Estrarre una traccia

Con **Estrai…** salvi una traccia audio in un file separato, senza ricodifica: rMux la copia in un file Matroska audio (`.mka`), che accetta qualsiasi codec. Allo stesso modo, nell'Inspector Video puoi usare **Estrai video…** per salvare la sola traccia video, senza audio.
