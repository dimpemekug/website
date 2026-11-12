---
title: "Excubia"
seoTitle: "Excubia: firewall per le app del Mac"
applicationCategory: "SecurityApplication"
seoDescription: "Firewall per Mac: scopri quali app si collegano a internet e decidi chi passa, con regole, liste di blocco e registro. Gratuita e senza pubblicità."
description: "Firewall per le app del Mac: quando un'app senza regola prova a collegarsi a internet, Excubia la ferma e chiede cosa fare. Regole, liste di blocco, registro e dati scambiati da ogni app, tutto sul Mac. Gratuita, senza pubblicità né acquisti in-app."
pubDatetime: 2026-11-12T00:00:00+01:00
draft: false
tags: ["macOS", "rete", "sicurezza", "privacy"]
storeStatus: "coming-soon"
privacyDataTypes: "i dati delle connessioni (app, destinazione, porta, protocollo, direzione, ora ed esito), i nomi host ricavati dalle risposte DNS, le regole, le impostazioni e le liste di blocco che aggiungi; mai il contenuto delle connessioni"
privacyStorageNote: "Regole, impostazioni, liste di blocco e registro restano sul Mac e nessun dato arriva allo sviluppatore. Il registro è tenuto in memoria, o su disco per 1, 7 o 30 giorni se lo scegli. L'app si collega a internet solo per scaricare le liste di blocco che aggiungi."
privacyUpdatedAt: "12 novembre 2026"
privacyUrl: "/progetti/excubia/privacy/"
---

## Cos'è Excubia

Excubia è un firewall per le app del Mac: vede ogni nuova connessione prima che parta e, se l'app non ha ancora una regola, la ferma e ti chiede se lasciarla passare. Il lavoro lo fa un filtro di rete di macOS, installato come estensione di sistema, che decide solo se consentire o bloccare: non legge il contenuto delle connessioni. Il nome viene dal latino *excubiae*, i turni di guardia delle sentinelle.

## Funzionalità principali

- **Avvisi chiari**: l'app, la destinazione con il suo nome, la porta e la firma del software; consenti o blocca con un clic, oppure scegli ambito (quell'host, host e porta, tutto) e durata (una volta, fino alla chiusura dell'app, un'ora, per sempre)
- **Due profili**: Standard chiede solo per le app di terze parti, una volta per app, e lascia passare macOS, il software Apple e le app del Mac App Store; Esperto avvisa per host e per processo di supporto e, se vuoi, anche per le connessioni in entrata
- **Regole precise**: per app, dominio (sottodomini compresi), nome con `*`, indirizzo o intervallo di indirizzi, rete locale e porta; vince la regola più specifica e, a parità, il blocco
- **Firma controllata**: una regola vale solo per il codice firmato dallo stesso sviluppatore; se la firma di un'app cambia, Excubia lo segnala
- **Insiemi di regole**: Casa, Ufficio o quelli che vuoi, scelti a mano o cambiati da soli secondo la rete e l'ora
- **Modalità**: Chiedi, Consenti in silenzio, Blocca in silenzio e Blocca tutto, anche a tempo
- **Apprendimento**: per qualche giorno le app si collegano senza avvisi, poi rivedi una regola per ciascuna in un colpo solo
- **Liste di blocco**: pubblicità, tracciamento e malware fermati in tutte le app con file hosts, elenchi di domini o regole AdBlock semplici, aggiornati ogni giorno; il registro dice quale lista ha bloccato e un clic sblocca il dominio
- **DNS cifrato**: le app che usano un proprio DNS su HTTPS o TLS si possono riportare al DNS di sistema, così le liste funzionano
- **Registro delle connessioni**: per elenco o per app, con il motivo di ogni decisione; in memoria o conservato fino a 30 giorni, con esportazione in CSV
- **Dati scambiati**: ricevuti e inviati da ogni app, con le più pesanti nella panoramica
- **Copie delle regole**: copie automatiche da ripristinare, esportazione e importazione in JSON, uso di ogni regola e proposta di togliere quelle ferme da 90 giorni
- **Barra dei menu**: stato, modalità, blocco a tempo, attività, velocità di rete e dati scambiati; al posto dell'icona, se vuoi, la velocità in cifre o come grafico
- **Mac sveglio**: dal pannello tieni acceso il Mac da 15 minuti a 8 ore o senza limite, con o senza schermo; a batteria si ferma sotto il 20%
- **Comandi rapidi, Siri e Focus**: cambia modalità, blocca tutto per un po' o attiva un insieme di regole; ogni Focus può avere la sua modalità
- **Widget e notifiche**: stato, blocchi e app più pesanti sulla scrivania; notifiche facoltative per le connessioni bloccate
- **Facile da cominciare**: una guida al primo avvio spiega i permessi di macOS e come rispondere a un avviso
- **Privata**: nessun account, nessuna raccolta di dati; regole e registro restano sul Mac
- **Nessun abbonamento**: gratuita, senza pubblicità e senza acquisti in-app

## Piattaforme

**Mac** con chip Apple (Apple silicon) e macOS 15 Sequoia o successivo; non funziona sui Mac con processore Intel. Interfaccia in italiano e in inglese, con tema chiaro e scuro. Excubia è in arrivo sul Mac App Store.
