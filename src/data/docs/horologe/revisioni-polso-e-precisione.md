---
title: "Revisioni, giorni al polso e precisione"
description: "Storico delle revisioni e promemoria, Indossato oggi e Diario al polso, assistente di misura della precisione in due letture e grafico in Horologe."
project: "horologe"
order: 4
section: "Funzionalità"
---

## Registro delle revisioni

Ogni orologio ha il suo storico degli interventi, nella pagina dell'orologio:

- **Dati dell'intervento**: data, tipo (es. revisione completa, sostituzione della batteria, regolazione, prova di impermeabilità), costo con valuta e note. Una revisione nuova parte dalla valuta dell'orologio.
- **Prossima revisione**: la data in cui è consigliata, calcolata dall'ultima revisione, altrimenti dalla data d'acquisto, altrimenti dal giorno in cui hai aggiunto l'orologio.
- **Eliminare** una revisione chiede conferma.

### Promemoria
Attiva **Promemoria revisioni** nelle Impostazioni e imposta l'intervallo (da 1 a 10 anni) nella scheda dell'orologio. Horologe programma una notifica locale alle 10:00 del giorno consigliato, o del giorno dopo se la data è già passata. Gli orologi venduti o in wishlist non ricevono promemoria.

La notifica è nella lingua dell'app (su iOS dall'aggiornamento successivo alla 1.3.0; prima era sempre in italiano). Su Android i promemoria vengono riprogrammati dopo un riavvio del telefono o un aggiornamento dell'app.

---

## Giorni al polso

- **Indossato oggi**: dalla pagina dell'orologio, o con una pressione prolungata sulla sua scheda nella Collezione, segni che lo indossi oggi. Un secondo tocco toglie il segno.
- **Calendario** dell'orologio: i giorni in cui l'hai indossato, da correggere anche a ritroso.
- **Diario al polso**: un calendario mese per mese con gli orologi indossati in ogni giorno. Si apre dalle Statistiche.
- **Indossati di recente**: in cima alla Collezione, fino a dieci orologi con il giorno in cui li hai portati.

Nelle Statistiche trovi anche la mappa dei giorni al polso delle ultime settimane, la classifica dei più indossati e il **costo per utilizzo** (prezzo d'acquisto diviso per il numero di volte che l'hai indossato).

---

## Misura della precisione

Horologe misura lo scarto di marcia del tuo orologio senza un cronocomparatore, su iOS e su Android. Nella pagina dell'orologio tocca **Misura con l'assistente**.

### Assistente di misura
1. **Prima lettura**: tocca **Adesso** nell'istante esatto in cui la lancetta dei secondi passa sulle 12, poi conferma ore e minuti segnati dall'orologio.
2. **Indossa l'orologio come sempre**, caricandolo se serve, senza regolarlo. Puoi chiudere l'app: la prima lettura resta salvata sul dispositivo.
3. **Seconda lettura**, dopo almeno 24 ore: riapri l'assistente e ripeti lo stesso gesto. Più aspetti, più il risultato è preciso; l'assistente accetta anche un'ora, ma consiglia un giorno.
4. **Risultato**: quanti secondi al giorno l'orologio guadagna (+) o perde (−), confrontato con la tolleranza dei cronometri COSC (−4/+6 s/g), e salvato tra le misurazioni.

L'ora di riferimento è quella del telefono, sincronizzata con l'ora ufficiale: un tocco in ritardo di qualche decimo di secondo pesa poco se tra le due letture passa almeno un giorno.

### Inserimento manuale
Se hai misurato lo scarto in altro modo, aggiungi a mano la data e il valore in secondi al giorno.

### Grafico e avvisi
- **iOS**: un grafico nel tempo con un'area verde per la tolleranza COSC (−4/+6 s/g).
- **Android**: un grafico delle ultime 12 misure, con l'**ultima** misura e la **media**.

Su entrambe Horologe ti avvisa quando la precisione sta peggiorando. Eliminare una misurazione chiede conferma.
