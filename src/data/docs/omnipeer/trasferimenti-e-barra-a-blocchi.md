---
title: "Trasferimenti e barra a blocchi"
description: "L'elenco dei trasferimenti di OmniPeer: sezioni e filtri, colonne e stati, la barra a blocchi, il pannello dei dettagli con pezzi e peer, pausa ed eliminazione."
project: "omnipeer"
order: 3
section: "Trasferimenti"
---

## Sezioni e filtri

La sezione **Trasferimenti** della barra laterale divide l'elenco per stato: **Tutti**, **In download**, **In condivisione**, **Completati**, **In pausa**. Il filtro della barra degli strumenti (**Tutte le reti**, **BitTorrent**, **eD2k**) si combina con la sezione scelta, e il campo di ricerca filtra per nome.

## L'elenco

Le colonne sono **Nome**, **Velocità**, **Fonti** (fonti attive su quelle trovate, come «3 di 12»), **Stato**, **Dimensione**, **Rete** e **Aggiunto**; un clic sull'intestazione ordina l'elenco. Accanto al nome c'è l'etichetta della rete; sotto, una barra di avanzamento e una riga con byte scaricati, dimensione e percentuale, o per i file in condivisione il rapporto di condivisione (per esempio «condiviso 1,4×»).

Gli stati possibili sono In download, In condivisione, In pausa, Completato, In coda, Controllo... ed Errore. Un download finito resta in condivisione: le sue parti vengono inviate agli altri peer finché il trasferimento è nell'elenco.

## La barra a blocchi

La barra a blocchi sta nella scheda **Pezzi** del [pannello dei dettagli](#il-pannello-dei-dettagli). Divide il file nei suoi pezzi e li colora in base allo stato:

- **Scaricato e verificato**: pieno, nel colore della rete (eD2k o BitTorrent);
- **In arrivo**: più chiaro, con la parte già ricevuta del pezzo;
- **Mancante**: vuoto;
- **Nessuna fonte** (solo eD2k): nessuna delle fonti conosciute ha quel pezzo.

## Azioni

| Azione | Come |
|---|---|
| Metti in pausa o riprendi | <kbd>Spazio</kbd>, <kbd>⌘</kbd> <kbd>P</kbd>, menu **Trasferimenti** o menu contestuale |
| Metti tutti in pausa | <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd> o il pulsante nella barra degli strumenti |
| Riprendi tutti | <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>R</kbd> |
| Copia il link | menu contestuale › **Copia link (eD2k)** o **Copia link (BitTorrent)** |
| Mostra nel Finder | menu contestuale › **Mostra nel Finder** |
| Elimina | <kbd>⌫</kbd> o menu contestuale › **Elimina…**, con conferma |

**Elimina** toglie il trasferimento dall'elenco; i file già scaricati restano nella cartella.

## Il pannello dei dettagli

<kbd>⌘</kbd> <kbd>I</kbd>, il pulsante **Dettagli** o **Trasferimenti › Mostra dettagli** aprono un pannello sotto l'elenco per il trasferimento selezionato, con i pulsanti per la pausa, l'eliminazione e la chiusura. Ha tre schede:

- **Pezzi**: **Avanzamento dei pezzi** (quanti pezzi su quanti e percentuale), la barra a blocchi grande, la **Dimensione pezzo** e il conto dei pezzi scaricati, in arrivo e mancanti, con la legenda dei colori. Sotto c'è la **Griglia dei pezzi**: un quadratino per pezzo; passando il mouse si legge il numero del pezzo e il suo stato.
- **Dettagli**: **Statistiche Trasferimento** (dimensione totale, byte scaricati, velocità in download e upload, tempo stimato) e **Integrità & Rete**. Per BitTorrent: infohash (BTIH), seed connessi e peer totali. Per eD2k: hash MD4, hash AICH se c'è, fonti trovate e attive, posizione in coda. Gli hash si copiano con il pulsante accanto; la cartella di download si apre nel Finder.
- **Peer**: la tabella dei peer connessi, con **Client Software**, **Indirizzo IP:Porta**, **Stato**, **Velocità ↓**, **Velocità ↑** e **Avanzamento Peer**. Il numero dei peer è nel nome della scheda.

## Quando un download finisce

Se è attiva l'opzione nelle [Impostazioni](/progetti/omnipeer/docs/impostazioni), macOS mostra una notifica, anche con OmniPeer in primo piano. Finché ci sono download attivi, OmniPeer impedisce al Mac di andare in stop (opzione attiva all'inizio).

Chiudere la finestra non chiude OmniPeer: i trasferimenti continuano e l'app resta nella [barra dei menu](/progetti/omnipeer/docs/barra-dei-menu). Per uscire usa **OmniPeer › Esci** o **Esci da OmniPeer** nel menu della barra dei menu.
