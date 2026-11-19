---
title: "Inserimento letture e fasce orarie"
description: "Come registrare le letture dei contatori in DomoMeter: lettura rapida, note, contatore sostituito, fasce F1/F2/F3 e consumi ripartiti tra due mesi."
project: "domometer"
order: 3
section: "Funzionalità"
---

## Registrare una lettura

Ogni lettura in DomoMeter è il valore progressivo che vedi sul contatore.

### Come inserirla
1. Tocca il pulsante **+** oppure apri le letture di un'utenza e scegli **Nuova lettura**.
2. Scegli la **data** della lettura: di default è oggi, ma puoi inserire anche letture passate.
3. Digita il valore indicato dal contatore; il modulo mostra la lettura precedente come riferimento.
4. Se vuoi, aggiungi una **nota** (es. "cambio fornitore", "due settimane fuori casa").
5. Salva: l'app calcola il consumo rispetto alla lettura precedente e aggiorna grafici e previsioni.

### Lettura rapida
Nella schermata principale **tieni premuta la riga di un'utenza** e scegli **Nuova lettura**: il modulo si apre già impostato su quell'utenza. Su iPhone puoi anche **scorrere la riga verso destra**.

### Contatore sostituito
Se inserisci un valore più basso della lettura precedente, DomoMeter chiede cosa è successo:
- **Nuovo contatore**: il contatore è stato sostituito e riparte da un valore più basso. La lettura diventa la base del nuovo contatore e il salto all'indietro non viene contato come consumo. Nello storico compare il segno "Nuovo contatore".
- **Salva comunque**: registra il valore così com'è.
- **Correggi il valore**: torna al campo per sistemare un errore di battitura.

### Letture in ritardo
Ogni utenza mostra da quanti giorni hai fatto l'ultima lettura. Se per un'utenza hai attivato un promemoria (vedi [Statistiche, costi e promemoria](/progetti/domometer/docs/statistiche-e-limiti)) e il giorno del promemoria è passato senza una lettura, l'utenza lo segnala con **lettura in ritardo**.

---

## Fasce orarie

In Italia l'energia elettrica può avere prezzi diversi a seconda dell'orario:
- **F1 (ore di punta)**: dal lunedì al venerdì, dalle 8:00 alle 19:00.
- **F2 (ore intermedie)**: dal lunedì al venerdì dalle 7:00 alle 8:00 e dalle 19:00 alle 23:00; il sabato dalle 7:00 alle 23:00.
- **F3 (ore fuori punta)**: dal lunedì al sabato dalle 23:00 alle 7:00; domenica e festivi tutto il giorno.

### Lettura unica o per fasce
Per ogni utenza puoi:
- registrare una **lettura unica** (tariffa monoraria);
- attivare le **fasce F1/F2/F3** nell'editor dell'utenza e registrare i tre valori nella stessa lettura. In questo caso DomoMeter calcola il consumo di ogni fascia e il totale del periodo, e la tariffa può avere un prezzo per fascia.

---

## Utenze personalizzate

Oltre a luce, gas e acqua puoi creare altre utenze, fino a dieci per abitazione, da **Impostazioni › Nuova utenza**. Nell'editor scegli:
- **nome** e **icona**;
- **unità**: kWh, Smc, litri, metri cubi, chilogrammi o un conteggio. Dopo la prima lettura l'unità si può cambiare solo tra litri e metri cubi, che misurano la stessa cosa;
- **fasce orarie**, **periodo in Home** (mensile, bimestrale, semestrale o annuale), **limite annuo** e **tariffa**.

Ogni utenza ha il suo colore, usato nelle icone, nelle barre e nei grafici. Luce, gas e acqua si modificano allo stesso modo, e **Ripristina predefiniti** le riporta ai valori iniziali senza toccare letture e tariffe.

---

## Consumi a cavallo di due mesi

Le letture non si fanno quasi mai a mezzanotte dell'ultimo giorno del mese. Se per esempio inserisci una lettura il 20 marzo e la successiva il 10 aprile:

- tra le due letture passano 21 giorni (11 a marzo e 10 ad aprile);
- DomoMeter assegna gli 11/21 del consumo a marzo e i 10/21 ad aprile.

Grazie a questa ripartizione proporzionale, totali mensili e medie giornaliere non mostrano picchi anomali o mesi vuoti e restano confrontabili tra loro.
