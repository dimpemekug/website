---
title: "Installazione e requisiti"
description: "Requisiti di sistema, integrazione con la libreria di Foto (PhotoKit), sandbox, sessione e impostazioni di rExif."
project: "rexif"
order: 2
section: "Iniziare"
---

## Requisiti di sistema

- **Sistema operativo**: macOS 15 Sequoia o successivo (compreso macOS 26 Tahoe).
- **Processore**: binario universale per Mac con Apple Silicon e con processore Intel a 64 bit.

## Download

L'app è disponibile sul **Mac App Store**:
- bundle ID `com.dimpemekug.rexif`;
- categoria Fotografia;
- gratuita: senza pubblicità, account, abbonamenti né acquisti in-app.

## Integrazione con la libreria di Foto

rExif lavora con l'app Foto di macOS in due modi, tramite il framework di sistema **PhotoKit**.

### 1. Aggiungi dalla libreria Foto (`⌥⌘O`)
- Apre il selettore di foto di macOS.
- Degli elementi scelti puoi modificare la **data di scatto** e la **posizione GPS**.
- Quando premi **Salva** (`⌘S`), macOS chiede un'unica conferma per autorizzare la modifica degli elementi direttamente nella libreria di Foto.
- *Nota*: PhotoKit permette di modificare solo data e posizione; il file originale conservato nella libreria non cambia.

### 2. Esporta originali da Foto (`⇧⌘E`)
- Se vuoi modificare anche autore, copyright, parole chiave e descrizione, o rinominare i file, usa questa funzione.
- Gli originali vengono salvati in una cartella a tua scelta sul disco.
- I file vengono poi aggiunti a rExif come file normali, con tutti i campi EXIF, IPTC e XMP modificabili.

## Sandbox e sessione

- **Accesso ai file**: rExif lavora nella sandbox e accede solo ai file e alle cartelle che apri tu, con il trascinamento, con **Apri con** dal Finder o con il pannello **Aggiungi foto e video…** (`⌘O`). Per creare un file `.xmp` accanto a un file aggiunto da solo, al salvataggio rExif chiede l'accesso alla sua cartella.
- **Sessione**: alla chiusura, i percorsi dei file e gli identificativi degli elementi di Foto vengono ricordati come segnalibri sicuri (`SessionStore`); al riavvio rExif riapre la sessione precedente. Puoi disattivare questa funzione nelle Impostazioni.

## Impostazioni (`⌘,`)

Nelle Impostazioni puoi scegliere:
- **Lingua**: *Sistema*, *Italiano* o *English* (applicata al riavvio dell'app).
- **Aspetto**: *Sistema*, *Chiaro* o *Scuro*.
- **Miniature**: la dimensione delle miniature nella tabella.
- **Sessione**: se riaprire all'avvio gli elementi della sessione precedente.
