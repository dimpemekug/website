---
title: "Inserimento letture e fasce orarie"
description: "Come registrare le letture dei contatori, gestire le fasce F1/F2/F3 della luce e come DomoMeter ripartisce i consumi a cavallo di due mesi."
project: "domometer"
order: 3
section: "Funzionalità"
---

## Registrare una lettura

Ogni lettura in DomoMeter è il valore progressivo che vedi sul contatore.

### Come inserirla
1. Apri l'utenza (**Luce**, **Gas** o **Acqua**) oppure usa il pulsante di nuova lettura.
2. Scegli la **data** della lettura: di default è oggi, ma puoi inserire anche letture passate.
3. Digita il valore indicato dal contatore.
4. Su iOS puoi aggiungere una **nota** (es. "cambio fornitore", "due settimane fuori casa").
5. Salva: l'app calcola il consumo rispetto alla lettura precedente e aggiorna i grafici.

### Sostituzione del contatore (iOS)
Se il contatore viene sostituito e riparte da zero, segna la lettura come **nuovo contatore**: DomoMeter non conterà il salto all'indietro come un consumo.

---

## Fasce orarie dell'elettricità

In Italia l'energia elettrica può avere prezzi diversi a seconda dell'orario:
- **F1 (ore di punta)**: dal lunedì al venerdì, dalle 8:00 alle 19:00.
- **F2 (ore intermedie)**: dal lunedì al venerdì dalle 7:00 alle 8:00 e dalle 19:00 alle 23:00; il sabato dalle 7:00 alle 23:00.
- **F3 (ore fuori punta)**: dal lunedì al sabato dalle 23:00 alle 7:00; domenica e festivi tutto il giorno.

### Lettura unica o per fasce
Per la luce puoi:
- registrare una **lettura unica** (tariffa monoraria);
- registrare i **tre valori F1, F2 e F3** nella stessa lettura. In questo caso DomoMeter calcola il consumo di ogni fascia e il totale del periodo.

---

## Consumi a cavallo di due mesi

Le letture non si fanno quasi mai a mezzanotte dell'ultimo giorno del mese. Se per esempio inserisci una lettura il 20 marzo e la successiva il 10 aprile:

- tra le due letture passano 21 giorni (11 a marzo e 10 ad aprile);
- DomoMeter assegna gli 11/21 del consumo a marzo e i 10/21 ad aprile.

Grazie a questa ripartizione proporzionale, totali mensili e medie giornaliere non mostrano picchi anomali o mesi vuoti e restano confrontabili tra loro.
