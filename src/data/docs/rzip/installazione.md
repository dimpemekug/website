---
title: "Installazione e Requisiti"
description: "Requisiti di sistema, distribuzione Mac App Store, architettura sandbox sicura e gestione cartelle autorizzate (FolderAccess)."
project: "rzip"
order: 2
section: "Iniziare"
---

## Requisiti di Sistema

rZip è sviluppata con SwiftUI e tecnologie native per macOS:

- **Sistema Operativo**: macOS 26.0 Tahoe o macOS 15.0 Sequoia o successivi.
- **Architettura Hardware**: Universal Binary nativo per Apple Silicon (M1, M2, M3, M4 e varianti) e processori Intel x86_64 a 64-bit. Anche il binario ausiliario `7zz` integrato nel bundle è compilato come binario universale.
- **Memoria RAM**: 4 GB minimi (consigliati 8 GB o più per archivi 7z di grandi dimensioni con dizionari LZMA estesi).
- **Spazio di Archiviazione**: Circa 35 MB su disco.

## Download dal Mac App Store

L'applicazione è progettata e firmata per il **Mac App Store**:
- Bundle ID: `com.dimpemekug.rzip`.
- Categoria: Utility (`public.app-category.utilities`) e Produttività.
- Senza costi occulti, pubblicità o account: nessun tracciamento degli utenti.

## Modello Sandbox e Gestione Cartelle (`FolderAccess`)

rZip opera rigorosamente all'interno della Sandbox di sicurezza di macOS:

- **Accesso ai File Singoli**: I file e gli archivi aperti tramite doppio clic nel Finder, trascinamento o finestra Apri (`⌘O`) vengono autorizzati automaticamente dal sistema per la sola sessione di lavoro attiva.
- **Cartelle Autorizzate (`FolderAccess`)**: Quando un'operazione richiede l'accesso a una cartella intera — ad esempio per rilevare automaticamente tutti i volumi numerati di un archivio diviso (`.001`, `.002`...), per estrarre file accanto all'archivio originale, o per creare un archivio in più parti — rZip mostra un pannello di sistema nativo per richiedere l'autorizzazione una tantum.
- **Segnalibri di Sicurezza**: Le cartelle autorizzate e la cronologia degli archivi recenti vengono conservate sul Mac come segnalibri sicuri (*security-scoped bookmarks*). Puoi consultare o revocare l'elenco delle cartelle autorizzate in qualsiasi momento dalla scheda **Impostazioni** (`⌘,`) > **Avanzate**.

## Associazione Predefinita nel Finder

Per aprire qualsiasi archivio `.zip`, `.7z` o `.rar` con un semplice doppio clic in rZip:

1. Fai clic destro su un file compresso nel Finder e seleziona **Ottieni informazioni** (`⌘I`).
2. Espandi la sezione **Apri con**.
3. Seleziona **rZip** dall'elenco a discesa delle applicazioni.
4. Clicca sul pulsante **Modifica tutti...** e conferma nella finestra di dialogo per associare permanentemente tutti i file con quella estensione.
