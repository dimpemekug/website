---
title: "Ricerca e filtro anti-spam"
description: "Cercare file su server eD2k, Kad e BitTorrent con OmniPeer: reti, filtri per tipo, fonti e dimensione, il filtro anti-spam e le sue etichette di rischio."
project: "omnipeer"
order: 4
section: "Ricerca"
---

Apri **Cerca file** nella barra laterale, scrivi nel campo di ricerca della barra degli strumenti e premi <kbd>↩</kbd> o **Cerca**.

## Dove cerca

Sopra i risultati scegli le reti: **Tutte le Reti**, **eD2k + Kad** o **BitTorrent**.

- **eD2k + Kad**: la ricerca va al server eD2k a cui sei connesso e ai nodi della rete Kad. Senza server connesso rispondono solo i nodi Kad. Ogni risultato dice da dove arriva (Server eD2k, Kad o entrambi).
- **BitTorrent**: la rete BitTorrent non ha una ricerca propria; OmniPeer interroga il servizio esterno **apibay.org** via HTTPS. Se il servizio non risponde, compare un avviso e restano i risultati eD2k.

Il testo che cerchi arriva a questi server e servizi: vedi l'[informativa sulla privacy](/progetti/omnipeer/privacy/).

## I risultati

Le colonne sono l'icona della valutazione, **Nome** (con sotto la fonte e il motivo della valutazione), **Dimensione**, **Fonti** e **Rete**. Sotto la tabella:

- **Scarica** aggiunge il file selezionato ai trasferimenti, nella cartella di download predefinita, e apre la sezione **In download**;
- **Dettagli sicurezza** apre la scheda di valutazione del file.

Il menu contestuale di un risultato ha **Scarica questo file**, **Copia Link P2P** (il link magnet o ed2k), **Dettagli Sicurezza & Analisi** e **Segnala come Spam / Fake**.

## Filtri

Il pulsante **Filtri** apre un riquadro con:

| Filtro | Valori |
|---|---|
| Tipo | Tutti, Video, Audio, Archivi, Documenti, Programmi |
| Fonti | Tutte, Almeno 5, Almeno 15, Almeno 50 |
| Dimensione | Qualsiasi, Almeno 100 MB, Almeno 500 MB, Almeno 1 GB |
| Protezione | vedi sotto |

I filtri attivi compaiono come etichette sotto la barra (per esempio «Almeno 15 fonti»): un clic sulla × li toglie. Il numero dei filtri attivi è scritto sul pulsante, e sotto la barra c'è sempre la modalità di protezione in uso.

## Filtro anti-spam

Le reti P2P contengono molti file falsi: video che sono programmi, archivi con password, «codec» da installare. OmniPeer valuta ogni risultato con alcune regole sul nome, sulla dimensione e sul numero di fonti e gli dà un'etichetta: **Affidabile**, **Normale**, **Sospetto Fake** o **Rischio Malware**, con un punteggio da 0 a 100.

Tra i segnali considerati:

- un eseguibile nascosto dietro un'altra estensione (`film.avi.exe`);
- parole tipiche dello spam nel nome (come `codec_installer` o `password_protected`);
- un programma (`.exe`, `.scr`, `.bat`…) con un nome da video o audio, o molto piccolo;
- un video sotto i 15 MB, o troppo piccolo per la risoluzione HD o 4K dichiarata;
- un'immagine disco (`.iso`, `.dmg`) insolitamente piccola;
- una sola fonte su eD2k, tipica dei file esca;
- al contrario, molte fonti o uno swarm BitTorrent con molti seed rendono il file più affidabile.

Il filtro **Protezione** decide cosa mostrare:

- **Protezione Attiva (Nascondi Spam & Malware)**, la scelta iniziale: nasconde i file con Rischio Malware;
- **Solo File Verificati (Alta Affidabilità)**: mostra solo i file Affidabili;
- **Mostra Tutto (Con Etichette di Rischio)**: mostra tutto, con l'etichetta.

Sotto i risultati OmniPeer dice quanti ne ha nascosti; **Mostra** passa a «Mostra Tutto». **Segnala come Spam / Fake** nasconde un risultato dall'elenco della ricerca in corso.

Il filtro è una stima basata sui nomi e sui numeri, non un antivirus: non apre i file e non li controlla dopo il download.
