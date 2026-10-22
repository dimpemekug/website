---
title: "Introduzione a CodeVault"
description: "Panoramica di CodeVault: archivio di snippet di codice e note per iPhone, iPad e Mac, con SwiftData, sincronizzazione iCloud e blocco biometrico."
project: "codevault"
order: 1
section: "Iniziare"
---

## Cos'è CodeVault

**CodeVault** è un'app nativa per **iOS/iPadOS 18+** e **macOS 15 Sequoia+** pensata per sviluppatori, sistemisti e studenti che vogliono tenere in un unico posto i propri frammenti di codice (*snippet*) e le note tecniche, e ritrovarli in un attimo.

È scritta in **Swift 6** con **SwiftUI** e **SwiftData** (architettura MVVM) ed è un'unica app universale: lo stesso acquisto vale per iPhone, iPad e Mac, e i dati si sincronizzano tramite il tuo account iCloud.

---

## Principi e architettura

### 1. Privacy prima di tutto
- **Nessun server dello sviluppatore**: snippet e note non passano mai da server intermedi o database di terze parti.
- **iCloud personale**: la sincronizzazione usa il database privato CloudKit del tuo Apple ID (container `iCloud.com.dimpemekug.codevault`), a cui lo sviluppatore non ha accesso.
- **Nessun account, nessuna telemetria**: niente registrazione, analytics, SDK di terze parti o pubblicità.

### 2. Dati in SwiftData con schema versionato
La persistenza usa **SwiftData** con uno schema versionato (`SnippetSchemaV1`–`SnippetSchemaV9`) e un piano di migrazione esplicito (`SnippetMigrationPlan`). Ogni aggiornamento dell'app porta con sé snippet, note, categorie e tag senza perdite.

### 3. Un'interfaccia per ogni dispositivo
- **Su Mac**: barra laterale con le sezioni, più colonne, comandi nella barra dei menu con scorciatoie da tastiera e impostazioni in una finestra dedicata (<kbd>⌘</kbd> <kbd>,</kbd>).
- **Su iPad**: barra laterale e più colonne, con supporto alle tastiere hardware.
- **Su iPhone**: navigazione compatta con barra delle schede in basso oppure menu nella barra degli strumenti (da iOS 26), feedback aptico e sblocco biometrico.

### 4. Tre stili grafici
Dalle Impostazioni puoi scegliere tra tre stili, che cambiano solo l'aspetto e non le funzioni:
- **Terminale** (predefinito): scuro e monospaziato, con accento ambra.
- **Tipografico**: chiaro ed essenziale, con titoli grandi e liste senza card.
- **Vetro**: superfici di sistema e card arrotondate, in linea con il Liquid Glass.

L'interfaccia è disponibile in italiano, inglese, tedesco, spagnolo, francese, portoghese e russo; la lingua si può cambiare dalle Impostazioni senza toccare quella di sistema.

---

## Flusso di lavoro rapido

1. **Crea uno snippet**: premi <kbd>⌘</kbd> <kbd>N</kbd> (Mac e iPad con tastiera) o tocca `+`. Per una nota usa <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>N</kbd>.
2. **Scegli il linguaggio**: tra i 20 supportati; per uno snippet nuovo CodeVault prova a riconoscerlo da solo dal codice che scrivi o incolli.
3. **Organizza**: assegna una categoria e uno o più tag, e fissa in alto gli elementi che usi più spesso.
4. **Cerca**: la ricerca full-text guarda titoli, descrizioni, codice, linguaggio, categorie e tag.
5. **Copia, condividi o esporta**: copia il codice con un tocco, condividilo in Markdown o esporta l'intera libreria in JSON o Markdown.
