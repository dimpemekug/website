---
title: "Taglio Lossless e Punti In/Out"
description: "Come tagliare video all'istante senza ricodifica con punti In e Out, precisione sui keyframe e direct stream copy in rMux."
project: "rmux"
order: 2
section: "Editing"
---

## Il Concetto di Taglio Lossless (Senza Ricodifica)

I formati video compressi moderni (come MP4, MKV o MOV codificati in H.264 o HEVC) sono composti da fotogrammi chiave indipendenti (*Keyframe* o *I-Frame*) e fotogrammi intermedi che memorizzano solo le differenze tra un quadro e il successivo (*P-Frame* e *B-Frame*).

Quando esegui un'operazione di esportazione con modalità **Lossless**:
- **Zero Decadimento**: i flussi audio e video vengono estratti e reincapsulati nel nuovo contenitore senza decomprimere e ricomprimere le immagini.
- **Velocità Istantanea**: un filmato 4K da 2 ore può essere ritagliato in pochi secondi, limitato unicamente dalla velocità di lettura/scrittura dell'SSD del Mac.
- **Consumo Risorse Nullo**: la CPU e la GPU non compiono alcuno sforzo computazionale pesante.

---

## Impostazione dei Punti In e Out

La barra temporale di rMux permette un controllo al millisecondo:

1. **Riproduci o Scorri la Timeline**: usa la barra spaziatrice per avviare/fermare la riproduzione, oppure trascina la testina temporale.
2. **Imposta Punto In**: premi il tasto <kbd>I</kbd> nel punto esatto in cui desideri che il video inizi.
3. **Imposta Punto Out**: premi il tasto <kbd>O</kbd> nel punto in cui il video deve terminare.
4. **Navigazione tra Fotogrammi**: usa i tasti freccia <kbd>←</kbd> e <kbd>→</kbd> per muoverti avanti o indietro di un singolo fotogramma.

---

## Allineamento ai Keyframe

Nel taglio puramente lossless, l'inizio del flusso deve coincidere con un *Keyframe* per evitare artefatti o schermate nere nei primi secondi di riproduzione:
- rMux evidenzia visivamente sulla timeline la posizione dei keyframe reali rilevati da `ffprobe`.
- Se il punto In selezionato cade su un fotogramma intermedio, rMux offre l'opzione di agganciarsi al keyframe più vicino (*Smart Keyframe Snap*) oppure di attivare la transcodifica secolare solo per i primi fotogrammi.
