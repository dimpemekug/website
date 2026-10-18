---
title: "Installazione e Requisiti"
description: "Requisiti di sistema, integrazione con Apple Photos (PhotoKit), gestione dei permessi sandbox e preferenze dell'app."
project: "rexif"
order: 2
section: "Iniziare"
---

## Requisiti di Sistema

rExif è sviluppata con SwiftUI e framework nativi per macOS:

- **Sistema Operativo**: macOS 15.0 Sequoia o versioni successive (incluso macOS 26 Tahoe).
- **Architettura Hardware**: Universal Binary per Apple Silicon (M1, M2, M3, M4 e varianti) e processori Intel a 64-bit.
- **Memoria RAM**: 4 GB minimi (consigliati 8 GB o più per sessioni con oltre 10.000 foto caricate contemporaneamente).
- **Spazio su Disco**: Circa 45 MB per l'applicazione.

## Download e Distribuzione

L'app è disponibile sul **Mac App Store**:
- Bundle ID: `com.dimpemekug.rexif`.
- Categoria: Fotografia (`public.app-category.photography`) e Utility.
- Gratuita al 100%: senza pubblicità, senza account, senza abbonamenti e senza acquisti in-app.

## Integrazione con la Libreria Apple Foto

rExif supporta due diverse modalità di interazione con l'app Foto di macOS tramite il framework di sistema **PhotoKit**:

### 1. Aggiungi dalla Libreria Foto (`⌥⌘O`)
- Apre il selettore multimediale nativo di macOS (`PhotosPicker`).
- Gli elementi selezionati vengono caricati nell'app: puoi modificare la **data di scatto** e la **posizione geografica GPS**.
- Quando premi **Salva** (`⌘S`), macOS mostra un'unica richiesta di conferma di sistema per autorizzare la modifica degli elementi direttamente all'interno della libreria Foto.
- *Nota tecnica*: per le rigide regole di sicurezza imposte da Apple su PhotoKit, all'interno della libreria Foto è consentito modificare solo data e posizione; il file originale memorizzato nella libreria non viene alterato per gli altri campi.

### 2. Esporta Originali da Foto (`⇧⌘E`)
- Se desideri modificare anche autore, copyright, parole chiave, descrizioni o rinominare i file:
- Questa funzione estrae gli originali non modificati dalla libreria Foto e li salva in una cartella a tua scelta sul disco.
- I file vengono caricati automaticamente in rExif come file ordinari, sbloccando la modifica completa di tutti i metadati EXIF, IPTC e XMP.

## Sandbox e Gestione della Sessione

- **Accesso ai File**: rExif opera in Sandbox e accede solo ai file e alle cartelle esplicitamente aperti dall'utente tramite drag & drop o tramite la finestra Apri (`⌘O`).
- **Ripristino Sessione**: Alla chiusura dell'app, i percorsi dei file e i relativi identificativi PhotoKit vengono memorizzati tramite segnalibri di sicurezza (`SessionStore`) in `UserDefaults`. Al riavvio successivo, rExif riapre automaticamente la sessione di lavoro precedente.

## Impostazioni dell'Applicazione (`⌘,`)

Dalla finestra delle Impostazioni puoi configurare:
- **Lingua**: Scelta tra *Sistema*, *Italiano* o *English* (richiede il riavvio dell'app).
- **Aspetto (Tema)**: *Sistema*, *Chiaro* o *Scuro*.
- **Aspetto Miniature**: Dimensione predefinita delle anteprime nella vista tabella.
