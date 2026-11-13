---
title: "Registro delle connessioni"
description: "Il registro di Excubia: elenco e vista per app, motivi delle decisioni, regole dal clic destro, 30 giorni di storico, esportazione CSV e dati scambiati."
project: "excubia"
order: 9
section: "Rete"
---

La pagina **Connessioni** mostra ogni connessione controllata dal filtro, dalla più recente, con il motivo per cui è passata o è stata bloccata.

## Elenco e vista per app

- **Filtro**: **Tutte**, **Consentite**, **Bloccate**.
- **Elenco** o **Per app**: l'ultima scelta si ricorda.
- **Ricerca**: per app, host o indirizzo.

Nell'elenco ogni riga mostra l'app, il motivo, destinazione e porta con il protocollo, l'esito e l'ora. Le connessioni in entrata hanno un'icona. Sono mostrate le ultime 400: per quelle più vecchie, cerca.

Nella vista **Per app** ogni riga dice quante destinazioni ha raggiunto l'app, quando l'ultima volta, i dati ricevuti e inviati e quante connessioni sono state consentite e bloccate. Aprendo una riga si vedono le destinazioni.

## I motivi

| Motivo | Cosa vuol dire |
|---|---|
| **Regola** | ha deciso una tua regola |
| **Tua scelta** | hai risposto a un avviso |
| **Software Apple**, **macOS**, **App Store**, **App firmata** | software considerato fidato dal profilo |
| **Modalità silenziosa** | Consenti o Blocca in silenzio |
| **Blocca tutto** | la modalità Blocca tutto |
| **Lista di blocco** (o il nome della lista) | il dominio è in una lista |
| **DNS cifrato** | DNS cifrato di un'app |
| **Apprendimento** | modalità apprendimento |
| **Nessuna risposta** | l'avviso è scaduto |
| **App non aperta** | Excubia era chiusa e la connessione è passata senza avviso |
| **Excubia** | connessioni di Excubia stessa |

## Regole dal registro

Con il clic destro su una connessione: **Consenti sempre …** o **Blocca sempre …** per l'app, **Consenti a … di raggiungere …** o **Impedisci a … di raggiungere …** per l'app e quella destinazione, **Copia l'host** e **Mostra nel Finder**. Le regole create qui sono permanenti; nel profilo Standard valgono per tutta l'app.

## Conservazione

All'inizio il registro sta solo in memoria: il filtro tiene le ultime 1000 connessioni e si cancella al riavvio. In **Impostazioni › Avvisi**, **Conserva il registro** può salvarlo sul Mac per **1 giorno**, **7 giorni** o **30 giorni**; le connessioni più vecchie si cancellano da sole. Scegliendo di nuovo **Fino al riavvio** il registro salvato si cancella. Quando il registro è conservato, il menu **Periodo** mostra **Recenti**, **Ultime 24 ore**, **Ultimi 7 giorni** o **Ultimi 30 giorni**.

## Esportare e svuotare

- **Esporta…** salva in CSV (`Excubia Connections.csv`) tutte le connessioni del periodo che passano il filtro e la ricerca, non solo quelle mostrate. Colonne: `date, app, path, pid, direction, protocol, host, address, port, action, reason, blocklist_entry, team_id, signing_id`.
- **Svuota registro** cancella il registro, anche quello salvato, e azzera contatori e dati scambiati.

## Dati scambiati

Excubia conta i byte ricevuti e inviati da ogni app nelle connessioni consentite, senza leggerne il contenuto; le richieste DNS non si contano. La **Panoramica** mostra le app che ne scambiano di più, con i processi di supporto sommati alla loro app.
