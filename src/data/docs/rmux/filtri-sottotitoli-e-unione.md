---
title: "Filtri, sottotitoli e unione"
description: "Ritaglio, ridimensionamento, rotazione, filtri e LUT, sottotitoli SRT e ASS/SSA, cattura di fotogrammi e unione di più video in rMux."
project: "rmux"
order: 5
section: "Editing"
---

## Ritaglio e filtri

Quando la traccia video è su **Ricodifica**, puoi applicare una catena di filtri con anteprima:
- **Ritaglia** direttamente sull'anteprima, trascinando i bordi;
- **Ridimensiona**, **ruota** (90°, 180°, 270°) e **capovolgi**;
- **Deinterlaccia**, **riduci il rumore** e **aumenta la nitidezza**;
- **Correggi il colore** e applica **LUT `.cube`**.

L'anteprima mostra l'originale e il risultato con i filtri **affiancati** oppure divisi da un **cursore** da trascinare sull'immagine: si sceglie in **Impostazioni › Anteprima › Confronto**. Con ritaglio, ridimensionamento, rotazione o specchio attivi il confronto è sempre affiancato.

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
1. aggiungi le clip con **Aggiungi video…** o trascinandole nella lista (servono almeno due video): ogni riga mostra una miniatura, la risoluzione, il codec, i fotogrammi al secondo e la durata;
2. cambia l'ordine trascinando le righe o con **Sposta su** e **Sposta giù** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>↑</kbd> e <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>↓</kbd>);
3. scegli il formato di uscita (MKV, MP4 o MOV) e avvia l'unione. In basso vedi il numero di video e la durata totale.

Se le clip sono compatibili, rMux le unisce **senza ricodificare**. Altrimenti ti mostra perché non lo sono e, con l'opzione **Ricodifica se incompatibili**, le uniforma alla risoluzione e alla frequenza dei fotogrammi della prima clip (l'audio diventa AAC stereo), con il codec e la qualità che scegli. I sottotitoli non vengono inclusi nell'unione.
