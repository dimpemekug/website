---
title: "Impostazioni"
description: "Le sette schede delle Impostazioni di Resizo: aspetto e lingua, elaborazione, opzioni iniziali, preset, scorciatoie, permessi sulle cartelle e informazioni."
project: "resizo"
order: 5
section: "Funzionalità"
---

Le Impostazioni si aprono con <kbd>⌘</kbd> <kbd>,</kbd> e sono divise in sette schede.

## Generale

- **Aspetto**: Automatico, Chiaro o Scuro, scelto dalle miniature.
- **Lingua dell'app**: italiano o inglese. La lingua scelta vale dal prossimo avvio: Resizo propone **Riavvia ora**.
- **Ripristina impostazioni predefinite**: riporta ai valori di fabbrica le opzioni delle schede, scorciatoie comprese, e quelle di ridimensionamento. Preset, cartelle autorizzate e lingua non vengono toccati.

## Elaborazione

- **Quando aggiungi immagini**: **Aggiungile all'elenco** (predefinito) o **Sostituisci l'elenco**. Durante un'elaborazione l'elenco non viene mai sostituito.
- **Includi le sottocartelle**: attivo di default; vale quando trascini o scegli una cartella.
- **Al termine › Poi**: **Non fare nulla**, **Mostra i file nel Finder** o **Svuota l'elenco**. Le ultime due avvengono solo se tutte le immagini sono riuscite: dopo un errore l'elenco resta, per vedere quale.
- **Riproduci un suono** a fine lavoro (disattivato di default).
- **Avvisa con una notifica se Resizo è in secondo piano** (attivo di default).
- **Immagini elaborate insieme**: **Automatico** usa i core ad alte prestazioni del Mac, entro un limite di memoria; in alternativa 1, 2, 4, 8 o 16, fino al numero di core del Mac. Un valore più basso lascia più spazio alle altre app durante un'elaborazione lunga.

## Opzioni iniziali

**All'apertura** sceglie da dove partono le opzioni: **Riprendi le ultime opzioni usate** (predefinito) o **Parti dalle opzioni qui sotto**. Nel secondo caso imposti modalità, percentuale, formato, qualità JPEG, suffisso del nome e **Mantieni metadati**. Le misure in pixel partono sempre vuote (per quelle ci sono i preset) e la cartella di destinazione resta l'ultima scelta.

## Preset

La stessa gestione di **Gestisci preset…**: preset visibili nella barra laterale, ordine, creazione, rinomina, eliminazione e ripristino dei predefiniti. I dettagli sono in [Ridimensionamento, preset e qualità](/progetti/resizo/docs/ridimensionamento-e-preset).

## Scorciatoie

Per ogni comando (Aggiungi Immagini…, Ridimensiona e Salva, Anteprima Rapida, Rimuovi Selezionate, Svuota l'Elenco, Mostra o Nascondi Opzioni) fai clic sulla scorciatoia e premi i tasti nuovi. Serve almeno <kbd>⌘</kbd> o <kbd>⌃</kbd>, oppure un tasto funzione; Resizo avvisa se la combinazione è già usata da un altro comando o da un comando di sistema (Esci, Chiudi, Copia, Impostazioni…). Ogni scorciatoia si riporta all'originale con il suo pulsante, tutte insieme con **Ripristina tutte le scorciatoie**.

## Permessi

L'elenco delle cartelle in cui Resizo può salvare **Accanto all'originale**, con il pulsante **Revoca** per ciascuna e **Revoca tutte…**. Revocare non tocca nessun file: Resizo chiederà di nuovo il permesso la prossima volta. Con **Autorizza cartelle o dischi…** puoi dare il permesso in anticipo alla cartella Inizio o a un disco intero, così Resizo non chiederà per le cartelle al loro interno.

## Informazioni

Versione, identificatore, requisiti di sistema e una sintesi della privacy: Resizo non raccoglie dati e non si collega a internet.
