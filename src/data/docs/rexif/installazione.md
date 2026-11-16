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
- **Cartelle recenti**: rExif ricorda le ultime cinque cartelle aggiunte, con un segnalibro sicuro. Quando la lista è vuota compaiono nella finestra e si riaprono con un clic; le cancelli dalle Impostazioni.

## Impostazioni (`⌘,`)

Le Impostazioni hanno quattro schede.

### Generale
- **Lingua**: *Sistema*, *Italiano* o *English*. La nuova lingua si usa al prossimo avvio; con **Riavvia ora** l'app si riapre subito (con modifiche non salvate non si riavvia: prima vanno salvate o ripristinate). Date e numeri seguono comunque il formato della regione scelta in Impostazioni di Sistema.
- **Riapri gli elementi della sessione precedente**: riapre all'avvio file e cartelle della lista. Le modifiche non salvate non vengono conservate.
- **Cartelle recenti**: quante ne sono ricordate, con il pulsante **Cancella elenco**.

### Aspetto
- **Tema**: *Sistema*, *Chiaro* o *Scuro*.
- **Miniature**: *Piccole*, *Medie* o *Grandi*, con un'anteprima dell'altezza delle righe.
- **Date compatte**: date più corte nelle colonne della tabella, che così occupano meno spazio.
- **Colonne, ordine e larghezze**: **Ripristina** torna alle colonne iniziali. Le colonne si mostrano o nascondono anche con un clic destro sulle intestazioni.
- **Animazioni**: seguono il sistema. Con *Riduci movimento* attivo in Impostazioni di Sistema › Accessibilità › Monitor, mappa e pannelli non si animano.

### Avanzate
- **Miniature in memoria**: il limite di memoria per le miniature, con il pulsante **Svuota**. Le miniature si rigenerano quando servono e si liberano da sole se il Mac ha bisogno di memoria.
- **Letture in parallelo**: automatiche, in base al disco: sei file insieme sul disco interno, tre su un disco esterno, due su un volume di rete.

### Informazioni
Versione e build dell'app e un riepilogo della privacy.
