---
title: "Scorciatoie e Integrazione macOS"
description: "Scorciatoie da tastiera, integrazione con Finder e Dock, trascinamento file e scelte di design dell'interfaccia in rName."
project: "rname"
order: 7
section: "Riferimento"
---

## Una Vera Applicazione macOS

rName è stata progettata specificamente per integrarsi in modo naturale con l'ambiente desktop di **macOS**, supportando pienamente i paradigmi di interazione del Mac: tastiera, drag & drop, menu di sistema e servizi del Finder.

---

## Scorciatoie da Tastiera

Ogni azione principale dell'applicazione può essere richiamata istantaneamente senza staccare le mani dalla tastiera:

| Scorciatoia                            | Menu     | Azione                                                                   |
| :------------------------------------- | :------- | :----------------------------------------------------------------------- |
| <kbd>⌘</kbd> <kbd>O</kbd>              | File     | Scegli una cartella tramite la finestra del Finder                       |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd> | File     | Aggiungi singoli file alla lista corrente                                |
| <kbd>⌘</kbd> <kbd>↩</kbd>              | Azioni   | **Applica la rinomina** a tutti i file pronti                            |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Modifica | **Annulla l'ultima operazione di rinomina**                              |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Vista    | Mostra o nasconde l'ispettore delle impostazioni della regola            |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Modifica | Svuota la lista dei file caricati                                        |
| <kbd>⌘</kbd> <kbd>,</kbd>              | rName    | Apre la finestra Impostazioni (Generale, File, Regole, Preset, Permessi) |

---

## Integrazione con il Finder e il Dock

Oltre ai comandi da tastiera e ai pulsanti della barra strumenti, puoi interagire con rName in tre modalità dirette:

### 1. Trascinamento nella Finestra (Drag & Drop)

Puoi trascinare una cartella o un gruppo di file dal Finder direttamente all'interno della finestra principale di rName. Se trascini una cartella, l'app acquisisce automaticamente il permesso di scrittura e carica tutti gli elementi contenuti.

### 2. Trascinamento sull'Icona nel Dock

Trascina una cartella o una selezione di file direttamente sull'icona di rName presente nel **Dock** del Mac:

- Se l'app è chiusa, si avvierà caricando immediatamente i file pronti per la configurazione.
- Se l'app è già aperta, aggiungerà i nuovi elementi alla sessione di lavoro.

### 3. Menu Contestuale «Apri con…»

Nel Finder, seleziona una cartella o un file, fai clic con il tasto destro e scegli **Apri con › rName**. L'applicazione aprirà il percorso e predisporrà l'anteprima secondo le regole correnti.

---

## Stabilità del Layout e Architettura Visiva

Durante lo sviluppo di rName è stata condotta una scrupolosa analisi ingegneristica per garantire la totale fluidità di ridimensionamento della finestra su display di qualsiasi dimensione (dal MacBook Air 13" ai monitor Pro Display XDR).

Per scongiurare i crash noti di AppKit legati ai cicli di autolayout multipli con tabelle ad alta densità informativa, rName implementa un pannello ispettore contestuale integrato direttamente nella gerarchia della colonna destra:

- La finestra può essere ristretta o allargata liberamente senza rallentamenti o sfarfallii.
- Le colonne della tabella adottano larghezze ideali adattive che non collassano i titoli lunghi.
- I controlli di configurazione rimangono sempre accessibili a qualsiasi risoluzione dello schermo.
