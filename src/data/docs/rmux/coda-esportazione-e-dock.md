---
title: "Coda di Esportazione e Dock"
description: "Gestione della coda di rendering in background, indicatore di avanzamento sull'icona nel Dock, notifiche e scorciatoie in rMux."
project: "rmux"
order: 5
section: "Produttività"
---

## Coda di Lavoro Asincrona in Background

Una delle maggiori frustrazioni con gli editor tradizionali è dover aspettare che un'esportazione finisca prima di poter aprire o lavorare su un altro video.

In rMux:
- **Sessioni Multiple Concorrenti**: puoi aprire più finestre contemporaneamente per tagliare video diversi in parallelo.
- **Accodamento dei Lavori**: quando premi Esporta, il processo viene inviato alla coda di rendering in background.
- **Continuazione anche a Finestra Chiusa**: puoi chiudere la finestra del video appena impostato senza interrompere l'elaborazione.

---

## Integrazione con macOS e Dock

- **Avanzamento sull'Icona nel Dock**: durante l'elaborazione della coda, l'icona di rMux nel Dock di macOS visualizza una barra di progressione circolare o lineare con la percentuale complessiva completata.
- **Notifica al Termine**: quando tutti i video in coda sono stati salvati su disco, il Centro Notifiche di macOS emette un avviso sonoro e visivo, con un pulsante diretto per aprire la cartella di destinazione nel Finder.

---

## Scorciatoie da Tastiera Essenziali

| Scorciatoia | Funzione |
| :--- | :--- |
| <kbd>Spazio</kbd> | Avvia / Metti in pausa la riproduzione video |
| <kbd>I</kbd> | Imposta punto In (inizio del segmento) |
| <kbd>O</kbd> | Imposta punto Out (fine del segmento) |
| <kbd>←</kbd> / <kbd>→</kbd> | Sposta la testina indietro o avanti di un singolo fotogramma |
| <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> | Salta al keyframe precedente o successivo |
| <kbd>⌘</kbd> <kbd>E</kbd> | Apri il pannello Esporta / Aggiungi alla coda |
| <kbd>⌘</kbd> <kbd>W</kbd> | Chiudi la finestra di editing corrente |
