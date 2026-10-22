---
title: "Filtri, sottotitoli e unione"
description: "Ritaglio, ridimensionamento, rotazione, filtri e LUT, sottotitoli SRT e ASS/SSA, cattura di fotogrammi e unione di più video in rMux."
project: "rmux"
order: 5
section: "Editing"
---

## Ritaglio e filtri

Quando la traccia video è su **Transcode**, puoi applicare una catena di filtri con anteprima:
- **Ritaglia** direttamente sull'anteprima, trascinando i bordi;
- **Ridimensiona**, **ruota** (90°, 180°, 270°) e **capovolgi**;
- **Deinterlaccia**, **riduci il rumore** e **aumenta la nitidezza**;
- **Correggi il colore** e applica **LUT `.cube`**, con un confronto prima/dopo.

Con **Cattura fotogramma…** salvi il fotogramma corrente come immagine PNG o JPEG.

---

## Sottotitoli

- **Importa** file **SRT** e **ASS/SSA**, anche con codifiche dei caratteri datate.
- **Traccia attivabile** o **impressi nell'immagine** (*burn-in*), con dimensione, colore e posizione (in basso o in alto) a tua scelta.
- **Sincronizza**: sposta i tempi di tutti i sottotitoli in avanti o indietro.
- **Modifica** le singole battute e salva il risultato in SRT.
- **Estrai** i sottotitoli già presenti nel video.

---

## Unire più video

Dalla finestra **Unisci video…**:
1. aggiungi le clip con **Aggiungi video…** o trascinandole nella lista (servono almeno due video);
2. trascina le righe per cambiarne l'ordine;
3. scegli il formato di uscita e avvia l'unione.

Se le clip sono compatibili, rMux le unisce **senza ricodificare**. Altrimenti ti mostra perché non lo sono e, con l'opzione **Ricodifica se incompatibili**, le uniforma alla risoluzione e alla frequenza dei fotogrammi della prima clip (l'audio diventa AAC stereo), con il codec e la qualità che scegli. I sottotitoli non vengono inclusi nell'unione.
