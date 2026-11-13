---
title: "Rispondere agli avvisi"
description: "Gli avvisi di Excubia: app, destinazione, porta e firma, come scegliere ambito e durata, avvisi raggruppati, tempo limite e firma cambiata."
project: "excubia"
order: 3
section: "Funzionalità"
---

In modalità **Chiedi**, quando un'app senza regola prova a collegarsi, Excubia ferma la connessione e mostra un avviso in primo piano, con un piccolo suono. Gli avvisi arrivano uno alla volta.

## Cosa mostra

- **L'app**, con la sua icona; per un processo di supporto, anche l'app a cui appartiene («tramite …»).
- **La destinazione**: «vuole connettersi a» seguito dal nome host, oppure, per una connessione in entrata, «vuole accettare una connessione da». Il tag **In entrata** segnala queste ultime.
- **Destinazione**: nome host e indirizzo.
- **Porta** (o **Porta locale** in entrata), con il protocollo TCP, UDP o IP.
- **Firma**: **Apple**, **App Store**, **Firmata** con il Team ID dello sviluppatore, oppure **Non firmata**.
- **Più dettagli** aggiunge il **Processo** (percorso e pid) e l'**Identificativo**.

## Consentire o bloccare

**Blocca** (<kbd>⌘</kbd> <kbd>B</kbd>) e **Consenti** (<kbd>⌘</kbd> <kbd>A</kbd>) creano la regola. Cosa copre dipende dal profilo:

- **Standard**: la scelta vale per tutta l'app, da ora in poi. Con **Opzioni…** puoi cambiarla per quell'avviso.
- **Esperto**: i menu sono sempre visibili e ricordano l'ultima scelta.

| Menu | Valori |
|---|---|
| **Vale per** | **Questo host**, **Questo host e questa porta**, **Qualsiasi connessione** e, se la stessa app aspetta altre destinazioni, **Queste destinazioni** |
| **Durata** | **Una volta**, **Fino alla chiusura dell'app**, **Per un'ora**, **Per sempre** |

- **Una volta** non crea una regola: vale per quella connessione e per le altre dello stesso processo in attesa verso le stesse destinazioni.
- **Fino alla chiusura dell'app** crea una regola che sparisce quando il processo termina.
- **Queste destinazioni** crea una regola per ogni destinazione in attesa (fino a 50).

## Avvisi raggruppati

Se la stessa app aspetta risposta per più destinazioni, l'avviso mostra **+N in attesa** e, alla riga **In attesa anche**, le prime destinazioni. Con **Vale per › Queste destinazioni** rispondi per tutte insieme.

## Se non rispondi

In **Impostazioni › Avvisi**, **Chiudi gli avvisi senza risposta** può chiudere l'avviso dopo 30 secondi, 1, 2 o 5 minuti (all'inizio è **Mai**). **Poi** decide se la connessione viene bloccata (predefinito) o consentita. Vale solo per quella connessione, senza creare una regola, e il registro la segna con **Nessuna risposta**. Mentre il tempo scorre, l'avviso mostra il conto alla rovescia.

## La firma è cambiata

Una regola nata da un avviso vale solo per il codice firmato dallo stesso sviluppatore (lo stesso Team ID). Se un'app ha regole create con un'altra firma, o senza firma, l'avviso dice **La firma di questa app è cambiata**: le vecchie regole non valgono più. L'app potrebbe essere stata sostituita o modificata: consentila solo se hai installato tu questa versione.
