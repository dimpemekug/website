---
title: "Revisioni, giorni al polso e precisione"
description: "Registro degli interventi di manutenzione, promemoria delle revisioni, giorni al polso, statistiche e misura della precisione di marcia in Horologe."
project: "horologe"
order: 4
section: "Funzionalità"
---

## Registro delle revisioni

Gli orologi meccanici hanno bisogno di manutenzione periodica. In Horologe ogni orologio ha il suo storico degli interventi:

- **Dati dell'intervento**: data, tipo (es. revisione completa, sostituzione della batteria, lucidatura, prova di impermeabilità), costo con valuta e note.
- **Promemoria**: imposta nella scheda dell'orologio un intervallo di revisione in anni. Horologe calcola la scadenza dall'ultima revisione (o dall'acquisto) e ti manda una notifica quando è il momento; le revisioni scadute compaiono anche nelle statistiche.

---

## Giorni al polso

Vuoi sapere quali orologi indossi davvero e quali restano nella scatola?
- **Registrazione con un tocco**: dalla scheda dell'orologio segni che lo indossi oggi.
- **Diario al polso** (iOS): un calendario mensile con gli orologi indossati giorno per giorno.
- **Statistiche**: classifica degli orologi più indossati, calendario delle ultime settimane, orologi che non indossi da tempo e **costo per utilizzo** (prezzo d'acquisto diviso per il numero di volte che l'hai indossato).

---

## Misura della precisione

Horologe registra lo scarto di marcia del tuo orologio senza bisogno di un cronocomparatore.

### Assistente in due letture (iOS)
1. **Prima lettura**: tocca **Adesso** nell'istante esatto in cui la lancetta dei secondi dell'orologio passa sulle 12, poi indica ore e minuti segnati dall'orologio.
2. **Indossa l'orologio come sempre** per almeno 24 ore, senza regolarlo.
3. **Seconda lettura**: ripeti la stessa operazione.
4. **Risultato**: Horologe calcola lo scarto medio in **secondi al giorno** (es. +4 s/g, −2 s/g).

L'ora di riferimento è quella del telefono, sincronizzata automaticamente con l'ora ufficiale: un tocco in ritardo di qualche decimo di secondo pesa poco se tra le due letture passa almeno un giorno.

### Inserimento manuale
Se hai misurato lo scarto in altro modo, puoi inserire direttamente il valore in secondi al giorno (su Android è il metodo disponibile).

### Grafico
Le misurazioni compaiono in un grafico nel tempo; su iOS un'area verde evidenzia la tolleranza dei cronometri certificati **COSC (−4/+6 s/g)**.

---

## Statistiche della collezione

La scheda **Statistiche** mostra valore totale della collezione per valuta e il suo andamento, distribuzione per marca e movimento, pezzo più costoso, spese di revisione, risultati delle vendite, oltre agli indicatori sui giorni al polso descritti sopra.
