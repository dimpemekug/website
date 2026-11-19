---
title: "Statistiche, costi e promemoria"
description: "Calendario, previsione di fine periodo, grafici, limiti annui, tariffe con storico, stima della bolletta, budget, valuta, CO₂ e promemoria in DomoMeter."
project: "domometer"
order: 4
section: "Funzionalità"
---

## La schermata principale

La schermata principale di DomoMeter mostra lo stato di tutte le utenze del profilo attivo:

- **Calendario delle letture**: un anno in una griglia, con evidenziati i giorni in cui hai registrato letture. Tocca un giorno per vedere le letture di quel giorno e aprire lo storico di un'utenza.
- **Utenze**: per ognuna il consumo del periodo, la percentuale del limite, il totale, l'ultima lettura e da quanti giorni l'hai fatta; con le fasce attive, anche il consumo di F1, F2 e F3.
- **Periodo**: di default il mese in corso. Nell'editor dell'utenza, alla voce **Periodo in Home**, puoi scegliere un periodo bimestrale, semestrale o annuale: limite e previsione si riscalano di conseguenza.
- **Stima della bolletta** e **previsione dei consumi**, se hai inserito le tariffe.

---

## Statistiche

In cima alla schermata **Statistiche** trovi dove arriverà ogni utenza a fine periodo, confrontata con lo stesso periodo dell'anno prima, e la spesa stimata con lo stesso confronto. Sotto:

- **Consumo mensile** degli ultimi 12 mesi, per ogni utenza, con le barre divise per fascia e la linea del limite mensile; il mese in corso è segnato a parte.
- **Spesa mensile**, calcolata con la tariffa in vigore in ciascun mese.
- **Confronto anno su anno**, per vedere l'andamento stagionale (es. il gas d'inverno o la luce d'estate con i condizionatori).
- **Statistiche avanzate**: media giornaliera nel periodo, fascia più costosa e CO₂ stimata per utenza e in totale.

---

## Limiti annui

Per ogni utenza puoi impostare un **consumo annuo previsto**, cioè un limite di riferimento (es. 2.700 kWh l'anno per la luce o 800 Smc per il gas):

1. **Impostazione**: indica il limite nell'editor dell'utenza, nell'unità che preferisci.
2. **Percentuale usata**: DomoMeter mostra quanta parte del limite hai già consumato; nei grafici compare anche il limite mensile corrispondente.
3. **Avvisi**: quando ti avvicini alla soglia o la superi, la barra dell'utenza cambia colore.

---

## Tariffe, bolletta e budget

Se inserisci una tariffa, DomoMeter stima anche la spesa. Se la lasci vuota, l'app mostra solo i consumi.

- **Tariffa per utenza**: prezzo per unità (o un prezzo per fascia, se le fasce sono attive) e quota fissa mensile.
- **Fatturazione**: mensile, bimestrale o semestrale. La stima della bolletta mostra la spesa maturata nel periodo e quella prevista a fine periodo.
- **Storico tariffe**: ogni tariffa vale per i mesi che ha coperto, così cambiare fornitore non riscrive quanto sono costati i mesi passati.
- **Budget**: una spesa massima per periodo di fatturazione, con la percentuale già usata.
- **Valuta**: nelle Impostazioni, alla voce **Valuta**. *Automatica* segue la regione del dispositivo; se quella che ti serve non è nell'elenco, scrivi il suo codice di tre lettere (es. `CHF`). Cambiare valuta cambia solo come sono mostrati gli importi: tariffe e budget già inseriti non vengono convertiti.
- **CO₂ stimata**: inserendo nell'editor dell'utenza i kg di CO₂ per unità, l'app mostra una stima approssimativa delle emissioni.

---

## Promemoria di lettura

Da **Impostazioni › Promemoria** puoi attivare un promemoria per ogni utenza, con:

- la **frequenza**: ogni mese, ogni 2, 3 o 6 mesi oppure una volta l'anno;
- il **primo mese**, il **giorno** del mese (da 1 a 28) e l'**ora**.

Il promemoria è una notifica locale, programmata sul dispositivo. Se in quel mese hai già registrato la lettura, la notifica non arriva. L'app chiede il permesso per le notifiche solo quando accendi il primo promemoria; se lo neghi o spegni le notifiche dalle impostazioni di sistema, i promemoria si spengono.
