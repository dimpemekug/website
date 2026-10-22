---
title: "Introduzione a rQuake"
description: "Cos'è rQuake, da dove vengono i dati, come sono organizzate le schermate e cosa non è: un sistema di allerta precoce."
project: "rquake"
order: 1
section: "Iniziare"
---

## Cos'è rQuake

**rQuake** è un'app per **iPhone** e **iPad** (iOS/iPadOS 26 o successivo) che mostra gli ultimi terremoti in Italia e nel mondo, presi dai cataloghi ufficiali degli enti sismologici. È gratuita, senza pubblicità né acquisti in-app, e non richiede un account. L'app è in italiano e in inglese.

## Da dove vengono i dati

| Area | Fonte |
| :--- | :--- |
| **Italia** | Sempre l'**INGV** (Istituto Nazionale di Geofisica e Vulcanologia), servizio `webservices.ingv.it`, licenza CC BY 4.0 |
| **Resto del mondo** | La fonte scelta in **Impostazioni › Fonte per il resto del mondo**: **USGS** (U.S. Geological Survey), **EMSC** (Centro Sismologico Euro-Mediterraneo) o **GFZ GEOFON** (Potsdam) |

Al primo avvio la fonte per il mondo è l'EMSC se la regione impostata in iOS è in Europa, nel Mediterraneo o nel Medio Oriente, altrimenti lo USGS. La regione decide anche i valori iniziali dell'elenco:

- **in Italia** (e a San Marino e in Vaticano): area **Italia**, tutte le magnitudo, avvisi da M 3,5;
- **altrove**: area **Mondo**, magnitudo M ≥ 4, avvisi da M 5.

Sono solo valori di partenza: cambiano appena scegli altro. La regione si legge sul dispositivo e non serve il permesso della posizione.

## Le schermate

L'app ha quattro schede:

1. **Terremoti**: l'ultimo evento in primo piano, le sequenze in corso e l'elenco giorno per giorno. Vedi [Elenco, filtri e fonti](/progetti/rquake/docs/elenco-filtri-e-fonti).
2. **Mappa**: gli epicentri, le faglie e le placche. Vedi [Mappa, faglie e statistiche](/progetti/rquake/docs/mappa-faglie-e-statistiche).
3. **Statistiche**: numeri e grafici del periodo scelto.
4. **Impostazioni**: filtri, luoghi, avvisi, aspetto, lingua e fonte dei dati.

Su iPad le schede diventano una barra laterale, e l'elenco e la scheda dell'evento stanno affiancati.

## Cosa rQuake non è

rQuake **non è un sistema di allerta precoce** e non è un'app ufficiale di nessuno degli enti citati. Mostra un terremoto solo dopo che è stato localizzato e pubblicato, di solito qualche minuto dopo, e i dati più recenti possono essere rivisti dagli analisti. In caso di emergenza segui le indicazioni della Protezione Civile.

## Privacy in breve

La posizione è facoltativa e resta sul dispositivo; quando serve cercare gli eventi vicini, alla fonte arriva solo il centro della ricerca arrotondato a circa 1 km. Niente account, analytics o pubblicità. I dettagli sono nell'[informativa sulla privacy](/progetti/rquake/privacy/).
