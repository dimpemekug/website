---
title: "Elenco, filtri e fonti"
description: "La scheda Terremoti di rQuake: ultimo evento, riepilogo, filtri per area, magnitudo e periodo, ricerca, ordinamento, aggiornamento e scelta della fonte per il resto del mondo."
project: "rquake"
order: 2
section: "Guide d'uso"
---

## La scheda Terremoti

In alto c'è l'**Ultimo evento**, con magnitudo, località, ora e profondità. Sotto, tre riquadri riassumono il periodo:

- **Eventi**: quanti terremoti ci sono nell'elenco;
- **Più forte**: il terremoto di magnitudo maggiore, che si apre con un tocco;
- **Ultime 24 ore**: gli eventi dell'ultimo giorno, con il confronto rispetto alle 24 ore precedenti ("Come ieri", "3 in più di ieri"…).

Seguono le **Sequenze in corso** (fino a tre, vedi [Sequenze e archivio](/progetti/rquake/docs/sequenze-e-archivio)) e l'elenco degli eventi raggruppati per giorno. Il colore di ogni scossa indica la classe di magnitudo:

| Classe | Magnitudo |
| :--- | :--- |
| Microsisma | meno di 2 |
| Molto leggero | da 2 a 3 |
| Leggero | da 3 a 4 |
| Moderato | da 4 a 5 |
| Forte | da 5 a 6 |
| Molto forte | 6 o più |

La legenda completa è in **Impostazioni › Scala dei colori**.

## Filtri

I filtri sono dei menu sotto il titolo e si trovano anche in **Impostazioni › Elenco e mappa**. Valgono per l'elenco, la mappa e le statistiche.

- **Area**: **Italia**, **Mondo**, **Vicino a me** o uno dei [luoghi salvati](/progetti/rquake/docs/luoghi-e-avvisi).
- **Magnitudo minima**: Tutte, M ≥ 1, 2, 2,5, 3, 4 o 5.
- **Periodo**: Ultime 24 ore, Ultimi 3, 7, 14 o 30 giorni.
- **Raggio**: con **Vicino a me**, 25, 50, 100, 200 o 500 km (predefinito 100 km). Un luogo salvato usa il suo raggio.

L'area **Italia** è il rettangolo che l'INGV usa per il suo elenco italiano (latitudine 35°–48° N, longitudine 6°–19° E), quindi comprende anche zone vicine come la Slovenia, la Croazia costiera e Malta.

Con **Vicino a me** l'app chiede il permesso della posizione. Se lo neghi, l'elenco lo dice e offre il pulsante **Apri Impostazioni**.

## Ricerca e ordinamento

- La lente (**Cerca**) apre il campo **Cerca località**, che filtra l'elenco per nome del luogo.
- Il pulsante **Ordina** mette gli eventi in ordine per **Più recenti**, **Magnitudo** o **Distanza**. L'ordine per distanza compare solo quando l'app conosce la tua posizione.
- **Mostra la distanza da me**, nelle impostazioni, aggiunge a ogni evento la distanza dalla tua posizione.

## Aggiornamento

Con l'app aperta l'elenco si ricarica da solo ogni due minuti; si può anche trascinare verso il basso. Fa eccezione lo USGS sui periodi lunghi: il suo elenco pubblico del mese viene rigenerato ogni 15 minuti, e rQuake lo ricarica con lo stesso ritmo. Sotto il titolo si legge quando è stato fatto l'ultimo aggiornamento.

Gli ultimi dati scaricati restano in una cache sul dispositivo: all'avvio, anche senza rete, l'elenco compare subito.

## Fonte per il resto del mondo

In **Impostazioni › Fonte per il resto del mondo** scegli il catalogo per tutto ciò che sta fuori dall'Italia:

| Fonte | Caratteristiche |
| :--- | :--- |
| **USGS** | Tutto il mondo, molto dettagliato negli Stati Uniti |
| **EMSC** | Rapido, dettagliato in Europa e nel Mediterraneo |
| **GFZ GEOFON** | Tutto il mondo, soprattutto eventi medi e forti |

La scelta vale per l'area **Mondo**, per **Vicino a me** e per i luoghi fuori dall'Italia, per gli avvisi e per l'archivio. Per l'Italia rQuake usa sempre l'INGV. I widget hanno una scelta propria, nelle loro opzioni.

Con lo USGS l'app scarica di solito gli elenchi pubblici già pronti e filtra sul dispositivo; usa la ricerca del servizio solo per l'archivio e per le ricerche intorno a un punto sotto M 2,5. Un archivio o una ricerca mostrano al massimo 2000 eventi, i più recenti.
