---
title: "Inserimento Letture e Fasce Orarie"
description: "Come registrare letture dei contatori, gestire fasce F1/F2/F3 per la luce e calcolare consumi a cavallo di mese in DomoMeter."
project: "domometer"
order: 3
section: "Funzionalità"
---

## Registrazione delle Letture

Ogni inserimento in DomoMeter rappresenta la cifra assoluta visibile sul quadrante o sul display digitale del tuo contatore.

### Come Inserire una Lettura
1. Tocca l'utenza desiderata (**Luce**, **Gas** o **Acqua**).
2. Tocca il pulsante **Aggiungi lettura** (`+`).
3. Seleziona la **data e ora** della rilevazione (di default è impostata al momento corrente).
4. Digita il valore numerico cumulativo visualizzato sul contatore.
5. Salva: l'app calcolerà immediatamente il delta rispetto alla lettura precedente e aggiornerà i grafici.

---

## Gestione Fasce Orarie per l'Elettricità

In Italia e in molti paesi europei, l'energia elettrica ha tariffe differenziate a seconda dell'orario di prelievo:
- **F1 (Ore di Punta)**: dal lunedì al venerdì, dalle 8:00 alle 19:00.
- **F2 (Ore Intermedie)**: dal lunedì al venerdì dalle 7:00 alle 8:00 e dalle 19:00 alle 23:00; sabato dalle 7:00 alle 23:00.
- **F3 (Ore Fuori Punta)**: dal lunedì al sabato dalle 23:00 alle 7:00; domeniche e festivi tutto il giorno.

### Modalità Monoraria vs Fasce F1/F2/F3
Nelle impostazioni dell'utenza elettrica puoi scegliere se:
- Gestire una **lettura monoraria unica** (tariffa flat).
- Registrare i **tre valori separati F1, F2 ed F3** (tariffa bioraria o trioraria). In questa modalità, DomoMeter calcola sia i singoli consumi di ciascuna fascia sia la somma complessiva per il periodo.

---

## Calcolo dei Consumi a Cavallo di Mese

Nella realtà quotidiana, le letture non vengono effettuate esattamente a mezzanotte dell'ultimo giorno del mese. Se, ad esempio, inserisci una lettura il 20 marzo e la successiva il 10 aprile:

- I giorni totali trascorsi tra le due letture sono 21 (11 a marzo e 10 ad aprile).
- DomoMeter assegna l'11/21 del consumo totale a marzo e il 10/21 ad aprile.
- Grazie a questa ripartizione pro-rata nel tempo, le medie giornaliere e i totali mensili non subiscono picchi anomali o mesi vuoti, restituendo un andamento realistico e confrontabile.
