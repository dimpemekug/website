---
title: "Widget, Siri e impostazioni"
description: "I widget di rQuake per la schermata Home e di blocco con le loro opzioni, i comandi di Siri e Comandi rapidi, e le impostazioni di aspetto, lingua e informazioni."
project: "rquake"
order: 7
section: "Riferimento"
---

## Widget

Il widget **Terremoti recenti** esiste in sei formati:

- schermata Home: **piccolo** (l'ultimo evento), **medio** (l'ultimo evento con i precedenti accanto) e **grande** (gli ultimi eventi in elenco);
- schermata di blocco: **circolare**, **rettangolare** e **in linea**.

Tenendo premuto il widget e scegliendo di modificarlo si impostano:

| Opzione | Scelte | Automatica |
| :--- | :--- | :--- |
| **Area** | Automatica, Italia, Mondo | Italia o Mondo in base alla regione |
| **Magnitudo minima** | Automatica, Tutte, M ≥ 2, M ≥ 3, M ≥ 4 | M ≥ 2 in Italia, M ≥ 4 nel mondo |
| **Fonte per il mondo** | Automatica, USGS, EMSC, GFZ GEOFON | In base alla regione |

I widget mostrano gli ultimi 7 giorni, si aggiornano circa ogni 15 minuti (iOS decide il momento esatto) e non usano la posizione. Toccando un evento si apre la sua scheda nell'app. Seguono la lingua del sistema, non quella scelta nell'app.

## Siri e Comandi rapidi

rQuake aggiunge due comandi, disponibili con Siri, in Spotlight e nell'app Comandi senza configurazione:

- **Ultimo terremoto**: "Ultimo terremoto su rQuake". Siri legge magnitudo, luogo e da quanto tempo è avvenuto, con gli stessi filtri dell'elenco.
- **Terremoti vicino a me**: "Terremoti vicino a me su rQuake". Siri dice quanti terremoti, di qualsiasi magnitudo, ci sono stati nelle ultime 24 ore entro il raggio delle impostazioni dall'ultima posizione nota, e qual è stato il più forte.

Se il terremoto è stato probabilmente avvertito da te o in un tuo luogo, Siri aggiunge l'intensità stimata. Se rQuake non conosce ancora la tua posizione, chiede di aprire l'app una volta con la posizione attiva.

## Aspetto e lingua

In **Impostazioni › Aspetto e lingua**:

- **Tema**: Sistema, Chiaro o Scuro;
- **Lingua**: Sistema, Italiano o English. Il cambio vale subito, senza riavviare l'app.

L'app supporta VoiceOver e Dynamic Type.

## Informazioni

**Impostazioni › Informazioni** contiene:

- le **Fonti dei dati** e le licenze (INGV con CC BY 4.0, USGS di pubblico dominio, EMSC, GFZ GEOFON);
- le fonti di **Faglie e placche** (GEM Global Active Faults, CC BY-SA; PB2002);
- il questionario **Hai sentito il terremoto? (HSIT)** dell'INGV, per raccontare gli effetti di un terremoto avvertito;
- le **Avvertenze**, la sintesi della **Privacy** e il contatto per il **Supporto**.
