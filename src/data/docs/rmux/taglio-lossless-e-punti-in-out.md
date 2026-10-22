---
title: "Taglio senza perdita e punti In/Out"
description: "Come tagliare video senza ricodifica con i punti In e Out, i fotogrammi chiave sulla timeline e i segmenti multipli in rMux."
project: "rmux"
order: 2
section: "Editing"
---

## Il taglio senza ricodifica

I formati video compressi (MP4, MKV o MOV in H.264 o HEVC) sono fatti di fotogrammi chiave indipendenti (*keyframe* o *I-frame*) e di fotogrammi intermedi che memorizzano solo le differenze rispetto ai precedenti (*P-frame* e *B-frame*).

Quando la traccia video è impostata su **Copy**:
- **Nessuna perdita**: i flussi audio e video vengono copiati nel nuovo contenitore senza decomprimere e ricomprimere le immagini.
- **Velocità**: anche un filmato lungo si taglia in pochi secondi; il limite è la velocità del disco.
- **Nessun carico**: CPU e GPU restano praticamente a riposo.

---

## Impostare i punti In e Out

1. **Scorri la timeline**: avvia la riproduzione o trascina la testina nel punto desiderato.
2. **Punto In**: premi <kbd>⌘</kbd> <kbd>I</kbd> (o il pulsante sotto la timeline) dove vuoi che il video inizi.
3. **Punto Out**: premi <kbd>⌘</kbd> <kbd>O</kbd> dove il video deve finire. Puoi anche trascinare le maniglie sulla timeline.
4. **Anteprima**: riproduci solo la selezione per controllare il taglio.
5. **Cancella**: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> rimuove i contrassegni.

### Più segmenti
Con **Aggiungi segmento** fissi la selezione corrente e puoi contrassegnarne un'altra, anche non contigua. All'esportazione tutti i segmenti vengono uniti in un unico file. Con più segmenti l'esportazione resta senza perdita solo se tutte le tracce incluse sono su Copy e non sono coinvolti sottotitoli; altrimenti rMux ricodifica e te lo segnala.

---

## Fotogrammi chiave

Con la copia diretta, un taglio pulito deve iniziare su un fotogramma chiave, altrimenti i primi istanti possono mostrare artefatti:
- rMux segna sulla timeline la posizione dei **keyframe reali**, rilevati con `ffprobe`.
- Con <kbd>⌥</kbd> <kbd>←</kbd> e <kbd>⌥</kbd> <kbd>→</kbd> salti al keyframe precedente o successivo, per piazzare i punti di taglio esattamente su un fotogramma chiave.
- Se ti serve un taglio preciso al fotogramma in un punto qualsiasi, imposta la traccia video su **Transcode**: il video verrà ricodificato.
