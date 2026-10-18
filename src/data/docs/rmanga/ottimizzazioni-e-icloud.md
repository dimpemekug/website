---
title: "Ottimizzazioni Grafiche e iCloud"
description: "Griglia copertine a elevate prestazioni, sfocatura soft scroll edge e sincronizzazione dei progressi tramite iCloud in rManga."
project: "rmanga"
order: 5
section: "Architettura"
---

## Griglia delle Copertine ad Alte Prestazioni

In collezioni ricche con dozzine di serie e migliaia di capitoli, la visualizzazione di elenchi può appesantire la CPU. rManga implementa accorgimenti ingegneristici dedicati:

- **Query Unificata `chapterCounts()`**: invece di interrogare ogni singolo capitolo all'interno dei cicli di disegno (che causerebbe decine di accessi a SwiftData al secondo), rManga esegue una sola query aggregata. I tempi di blocco del thread principale sono stati ridotti da oltre 80 secondi a meno di 7 secondi durante le sincronizzazioni.
- **Titolo Sovrapposto alla Copertina**: il titolo viene renderizzato sopra la parte inferiore dell'illustrazione su un gradiente scuro traslucido. Questo fa sì che tutte le copertine della riga mantengano sempre un allineamento millimetrico senza creare scalettature tra didascalie di lunghezza differente.
- **Colonne Personalizzabili per Orientamento**: puoi impostare da 2 a 6 colonne in modo indipendente per iPhone e iPad, sia in modalità verticale (*portrait*) che orizzontale (*landscape*).

---

## Il Bordo Sfumato "Soft Scroll Edge"

Nelle interfacce standard di iOS, i contenuti saturi che scorrono sotto la barra di navigazione subiscono un taglio visivo netto. In rManga, il modificatore `softScrollEdge()` estende progressivamente la dissolvenza: le copertine e le illustrazioni sfumano elegantemente sotto il vetro satinato della barra senza interruzioni sgradevoli.

---

## Sincronizzazione iCloud

- **Stato di Lettura Sincronizzato**: i capitoli letti, i segnalibri e la libreria si sincronizzano tra il tuo iPhone e il tuo iPad tramite iCloud e SwiftData.
- **Ripresa Continua**: inizia a leggere un capitolo su iPhone mentre sei in treno e riprendi dalla stessa esatta tavola sull'ampio schermo del tuo iPad una volta tornato a casa.
