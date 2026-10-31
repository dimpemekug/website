---
title: "Tagliare video senza ricodifica su Mac: quando si perde qualità e quando no"
seoTitle: "Tagliare video senza ricodifica: guida pratica su Mac"
seoDescription: "Come tagliare un video sul Mac senza perdere qualità: cosa sono i fotogrammi chiave, quando la copia diretta basta e quando serve ricodificare."
description: Togliere l'inizio e la fine di un filmato non dovrebbe costare qualità né mezz'ora di esportazione. Cosa sono i fotogrammi chiave, quando basta copiare il video così com'è e quando ricodificare è inevitabile.
pubDatetime: 2026-10-31T08:00:00Z
related:
  - macos-27-golden-gate-fine-intel-2026
  - video-ai-generativa-2026
  - local-first-app-offline-sincronizzazione-2026
relatedProjects:
  - rmux
tags:
  - video
  - macos
  - content-creation
draft: false
---

Devi togliere i primi venti secondi di una registrazione e gli ultimi due minuti di silenzio. Il video non cambia, eppure molti programmi ricalcolano ogni fotogramma: lavorano a lungo, il file perde qualità e a volte cambia persino peso. Per un taglio semplice spesso non serve: il video si può copiare così com'è, in pochi secondi e senza alcuna perdita. L'unico prezzo è una limitazione da conoscere, quella dei fotogrammi chiave.

<figure>
  <img
    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80"
    alt="Timeline di un programma di montaggio video su uno schermo, con clip colorate e tracce audio"
  />
  <figcaption class="text-center">
    Il punto in cui tagli decide se il video viene copiato o ricalcolato.
  </figcaption>
</figure>

## Ricodificare e copiare non sono la stessa cosa

Un video in H.264 o HEVC è già compresso. **Ricodificarlo** significa decomprimere ogni fotogramma e comprimerlo di nuovo: con i formati normali una parte dell'informazione si perde a ogni passaggio, e il lavoro impegna il computer.

**Copiare** significa prendere i dati compressi e spostarli in un nuovo file senza toccarli. Non c'è nulla da calcolare, quindi il tempo dipende soprattutto dal disco. E non c'è perdita: l'immagine del file tagliato è quella dell'originale.

## Il limite: i fotogrammi chiave

La compressione video non salva ogni immagine per intero. Ogni tanto c'è un **fotogramma chiave** (*keyframe*), completo e indipendente; quelli successivi memorizzano solo le differenze rispetto ad altri fotogrammi.

Un taglio per copia, quindi, può partire pulito solo da un fotogramma chiave: se inizi a metà di un gruppo, mancano i dati da cui dipendono le immagini successive. Cosa succede dipende dallo strumento. FFmpeg, per esempio, in copia riporta l'inizio al fotogramma chiave precedente, mentre altri programmi possono mostrare artefatti nei primi istanti. Anche partendo da un fotogramma chiave, in alcuni file i fotogrammi vicini al taglio dipendono dal gruppo precedente: dopo l'esportazione conviene sempre riguardare l'inizio.

La fine del taglio crea meno problemi, perché l'ultimo fotogramma tenuto ha già tutto ciò che gli serve per essere mostrato.

## Quale metodo scegliere

1. **Togli inizio e fine di un filmato: copia.** Una registrazione dello schermo, una lezione, una partita. Qualche istante di differenza nel punto d'inizio di solito non pesa.
2. **Vuoi cambiare solo il formato del file: copia.** Passare da MKV a MP4 cambia il contenitore, non il video, se il nuovo contenitore supporta le tracce presenti.
3. **Devi tagliare su un fotogramma esatto: ricodifica.** Se il punto non cade su un fotogramma chiave, è l'unica strada per iniziare esattamente lì.
4. **Applichi filtri, ritagli l'immagine o cambi risoluzione: ricodifica.** Cambiando le immagini, vanno per forza ricalcolate.
5. **Unisci più parti: dipende.** Pezzi dello stesso file si possono copiare, purché ogni parte inizi su un fotogramma chiave. Clip con codec o parametri diversi vanno ricodificate.

## Come si fa su Mac con rMux

[rMux](/progetti/rmux/) nasce proprio per questo caso. Sulla timeline segna la posizione reale dei fotogrammi chiave, così vedi dove il taglio resta pulito, e permette di saltare dall'uno all'altro.

1. Apri il video e imposta i punti di inizio e fine, spostandoti sui fotogrammi chiave.
2. Lascia la traccia video su **Copia**, così viene copiata così com'è. Anche ogni traccia audio si può copiare, convertire o escludere.
3. Scegli il contenitore ed esporta.

Se ti serve un punto preciso, basta impostare la traccia su **Ricodifica**. Con più segmenti l'esportazione resta senza perdita solo se tutte le tracce incluse sono su Copia e non ci sono sottotitoli di mezzo; altrimenti l'app ricodifica e lo segnala. La procedura completa è nella guida su [taglio senza perdita e punti In/Out](/progetti/rmux/docs/taglio-lossless-e-punti-in-out/). L'app è gratuita, lavora offline e richiede un Mac con chip Apple e macOS 14 o successivo.

> **Suggerimento:** se sai già che un video andrà tagliato spesso, ricodificalo una volta con un intervallo breve tra i fotogrammi chiave. Il file pesa di più, ma i punti di taglio pulito diventano molti di più, e tutti i tagli successivi restano copie senza perdita.

## Cosa tenere a mente

Copiare non è sempre la scelta giusta, ma dovrebbe essere la prima da provare: è veloce, non consuma qualità e lascia intatto il file di partenza. Si passa alla ricodifica quando la precisione o una modifica dell'immagine la richiedono davvero. Sapere dove stanno i fotogrammi chiave basta a capire quale dei due casi hai davanti.
