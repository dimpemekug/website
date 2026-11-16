---
title: "Anteprima, tastiera e impostazioni"
description: "Tasti per riprodurre e spostarsi nel video, scorciatoie riassegnabili, volume dell'anteprima, video recenti e i quattro pannelli delle impostazioni di rMux."
project: "rmux"
order: 7
section: "Produttività"
---

## Muoversi nel video con la tastiera

Questi tasti funzionano nella finestra del video quando non stai scrivendo in un campo di testo (un titolo di traccia, una battuta dei sottotitoli), dove i tasti scrivono normalmente.

| Tasto | Funzione |
| :--- | :--- |
| <kbd>Spazio</kbd> | Riproduci o metti in pausa |
| <kbd>L</kbd> | Riproduci |
| <kbd>K</kbd> | Pausa |
| <kbd>J</kbd> | Torna indietro di qualche secondo (5 secondi, regolabile) |
| <kbd>←</kbd> / <kbd>→</kbd> | Un fotogramma indietro o avanti |
| <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> | Salta indietro o avanti (1 secondo, regolabile) |
| <kbd>Inizio</kbd> / <kbd>Fine</kbd> | Vai all'inizio o alla fine del video |
| <kbd>M</kbd> | Attiva o togli il muto |

Tenendo premuta una freccia avanzi di un fotogramma alla volta. <kbd>J</kbd> è un salto e non una riproduzione all'indietro: se il video stava andando, continua.

---

## Scorciatoie dei menu

| Scorciatoia | Funzione |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>I</kbd> | Imposta il punto In |
| <kbd>⌘</kbd> <kbd>O</kbd> | Imposta il punto Out |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> | Cancella i contrassegni |
| <kbd>⌥</kbd> <kbd>←</kbd> / <kbd>⌥</kbd> <kbd>→</kbd> | Vai al keyframe precedente o successivo |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>J</kbd> | Apri la coda di lavoro |
| <kbd>⌘</kbd> <kbd>Z</kbd> / <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Annulla o ripeti contrassegni, segmenti e ripristini |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Esporta |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Mostra o nascondi il pannello delle impostazioni |

Le prime cinque si possono **riassegnare** in **Impostazioni › Scorciatoie**: fai clic su una scorciatoia e premi i tasti nuovi.

---

## Volume dell'anteprima

Il controllo del volume nell'anteprima regola solo l'ascolto mentre lavori: i file esportati non cambiano. Per modificare il volume di una traccia nel file vedi [Audio e tracce](/progetti/rmux/docs/gestione-audio-e-tracce).

---

## Video recenti

Gli ultimi video aperti (al massimo otto) compaiono nella finestra vuota e in **File › Apri recenti**, da cui si riaprono con un clic. L'elenco si svuota con **Cancella elenco** o **Cancella menu**; disattivando **Ricorda i video aperti** non si riempie più.

---

## Le impostazioni

Le impostazioni di rMux (<kbd>⌘</kbd> <kbd>,</kbd>) hanno quattro pannelli.

**Generale**
- **Lingua dell'app** (Sistema, Italiano, Inglese), che cambia al prossimo avvio, e **Aspetto** (Sistema, Chiaro, Scuro);
- **Ricorda i video aperti** e **Cancella elenco** per i video recenti;
- **Ripristina impostazioni predefinite…**, che riporta ogni impostazione e scorciatoia al valore iniziale, tranne la lingua e l'elenco dei recenti.

**Esportazione**
- **Formato** proposto all'apertura di un video (MP4 se non lo cambi) ed **Encoder video** usato quando la traccia passa a **Ricodifica** (HEVC se non lo cambi);
- **Cartella** di destinazione e **Suffisso del nome** aggiunto ai file esportati, con un esempio del nome che ne risulta;
- **Al termine**: non fare niente, mostrare il file nel Finder o aprirlo;
- **Notifica se rMux è in secondo piano**.

**Anteprima**
- **Tempo** sulla timeline come orologio o timecode, e **Fotogramma al passaggio del mouse**;
- **Confronto** dei filtri, affiancati o con un cursore;
- **Volume** e **Muto** dell'anteprima;
- quanto saltano <kbd>J</kbd> (2, 5, 10, 15 o 30 secondi) e <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> (1, 2, 5 o 10 secondi).

**Scorciatoie**
- le scorciatoie riassegnabili, divise in **Segna**, **Naviga** e **Strumenti**, e l'elenco dei **Tasti fissi**.
