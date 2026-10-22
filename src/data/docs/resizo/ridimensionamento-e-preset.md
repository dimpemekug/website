---
title: "Ridimensionamento, preset e qualità"
description: "Modalità di ridimensionamento in pixel e in percentuale, preset predefiniti e personalizzati, formati di uscita e qualità JPEG in Resizo."
project: "resizo"
order: 2
section: "Funzionalità"
---

## Modalità di ridimensionamento

Resizo offre due modi per stabilire la dimensione finale delle immagini.

### 1. In pixel
Con l'opzione **Adatta mantenendo le proporzioni** attiva (predefinita):
- **Solo larghezza**: imposta la larghezza (es. 1200 px) e lascia vuota l'altezza, che verrà calcolata in proporzione.
- **Solo altezza**: imposta l'altezza (es. 800 px); la larghezza si adatterà in proporzione.
- **Larghezza e altezza**: indica un riquadro massimo (es. 1920×1080 px). L'immagine viene ridimensionata per starci dentro, senza deformarla né ritagliarla.

Disattivando l'opzione delle proporzioni, Resizo usa le dimensioni esatte che indichi, anche a costo di deformare l'immagine.

### 2. In percentuale
Scala l'immagine **dal 5% al 300%** rispetto alla risoluzione di partenza: comodo per dimezzare o ridurre a un quarto un intero gruppo di foto senza calcolare i pixel.

La colonna **Nuova dimensione** della tabella mostra in anticipo la risoluzione finale di ogni immagine. Per sicurezza, il lato lungo in uscita non supera i 16.384 pixel.

---

## Preset predefiniti e personalizzati

Per le operazioni ricorrenti, al primo avvio Resizo propone quattro preset, visibili nella barra laterale:
- **Web (1920 px di larghezza)**: per siti, blog e presentazioni su schermi ad alta risoluzione.
- **Social (1080 px di larghezza)**: per i post sui social network.
- **Email (800 px di larghezza)**: immagini leggere da allegare alla posta.
- **Icona (512×512 px)**: formato quadrato per avatar e immagini del profilo.

### Creare e gestire i preset
Con **Gestisci preset…** (nella barra laterale o nelle Impostazioni) puoi creare nuovi preset indicando nome, larghezza, altezza e se mantenere le proporzioni, nascondere quelli che non usi ed eliminarli, compresi quelli predefiniti.

---

## Formato di uscita e qualità JPEG

- **Originale**: cambia solo le dimensioni e mantiene il formato di partenza.
- **JPEG**: comprime l'immagine con un cursore di qualità dal 10% al 100% (predefinito 85%). Un valore tra l'80% e l'85% riduce molto il peso senza perdite visibili.
- **PNG**: compressione senza perdita che conserva la trasparenza, adatta a loghi, grafiche e screenshot.
