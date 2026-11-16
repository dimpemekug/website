---
title: "Taglio senza perdita e punti In/Out"
description: "Come tagliare video senza ricodifica in rMux: timeline con fotogrammi e zoom, punti In e Out, fotogrammi chiave, più segmenti e annullamento."
project: "rmux"
order: 2
section: "Editing"
---

## Il taglio senza ricodifica

I formati video compressi (MP4, MKV o MOV in H.264 o HEVC) sono fatti di fotogrammi chiave indipendenti (*keyframe* o *I-frame*) e di fotogrammi intermedi che memorizzano solo le differenze rispetto ai precedenti (*P-frame* e *B-frame*).

Quando la traccia video è impostata su **Copia**:
- **Nessuna perdita**: i flussi audio e video vengono copiati nel nuovo contenitore senza decomprimere e ricomprimere le immagini.
- **Velocità**: anche un filmato lungo si taglia in pochi secondi; il limite è la velocità del disco.
- **Nessun carico**: CPU e GPU restano praticamente a riposo.

---

## La timeline

Sotto l'anteprima, la timeline mostra:
- una striscia con i **fotogrammi del video** e un **righello** con i tempi;
- il **tempo corrente**, come orologio (`01:23.45`) o come **timecode** (`01:23:12`, dove l'ultima cifra è il fotogramma dentro il secondo): un clic sul tempo cambia formato;
- passando il mouse sulla timeline, il **fotogramma in quel punto** (si disattiva in **Impostazioni › Anteprima**);
- la selezione tra i punti In e Out, con le parti escluse oscurate.

Per ingrandire la timeline usa il **pizzico sul trackpad**, <kbd>⌘</kbd> e la rotella o i pulsanti **Aumenta zoom**, **Riduci zoom** e **Adatta alla finestra** in basso a destra.

---

## Impostare i punti In e Out

1. **Scorri la timeline**: avvia la riproduzione con <kbd>Spazio</kbd>, trascina la testina o spostati di un fotogramma con <kbd>←</kbd> e <kbd>→</kbd>.
2. **Punto In**: premi <kbd>⌘</kbd> <kbd>I</kbd> (o **Imposta punto In** sotto l'anteprima) dove vuoi che il video inizi.
3. **Punto Out**: premi <kbd>⌘</kbd> <kbd>O</kbd> dove il video deve finire.
4. **Rifinisci**: trascina le maniglie arancioni ai lati della selezione.
5. **Anteprima selezione**: riproduce solo la parte scelta, per controllare il taglio.
6. **Cancella**: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> rimuove i contrassegni.

Contrassegni, segmenti e ripristini si **annullano** con <kbd>⌘</kbd> <kbd>Z</kbd> e si ripetono con <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>. Tutti i tasti per muoversi nel video sono in [Anteprima, tastiera e impostazioni](/progetti/rmux/docs/anteprima-tastiera-e-impostazioni).

### Più segmenti
Con **Aggiungi segmento** fissi la selezione corrente e puoi contrassegnarne un'altra, anche non contigua. All'esportazione tutti i segmenti vengono uniti in un unico file. Con più segmenti l'esportazione resta senza perdita solo se tutte le tracce incluse sono su **Copia** e non sono coinvolti sottotitoli; altrimenti rMux ricodifica e te lo segnala.

---

## Fotogrammi chiave

Con la copia diretta, un taglio pulito deve iniziare su un fotogramma chiave, altrimenti i primi istanti possono mostrare artefatti:
- rMux segna sulla timeline la posizione dei **keyframe reali**, rilevati con `ffprobe`.
- Con <kbd>⌥</kbd> <kbd>←</kbd> e <kbd>⌥</kbd> <kbd>→</kbd> salti al keyframe precedente o successivo, per piazzare i punti di taglio esattamente su un fotogramma chiave.
- Se ti serve un taglio preciso al fotogramma in un punto qualsiasi, imposta la traccia video su **Ricodifica**: il video verrà ricodificato.
