---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Time Tracker"
description: "Informativa completa sulla privacy dell'app Time Tracker: quali dati vengono trattati, dove restano e come funzionano la sincronizzazione iCloud facoltativa su iOS e il backup di Android."
---

Ultimo aggiornamento: 13 ottobre 2026

Questa Informativa sulla Privacy descrive come **Time Tracker** tratta i dati, su iOS e su Android.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di tracciamento
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non ha server e non riceve alcun dato
- Progetti e attività restano sul dispositivo; su iOS anche nell'account iCloud privato dell'utente, solo se attiva la sincronizzazione; su Android anche nel backup Android dell'utente, se attivo
- Su Android l'app non si connette a Internet

## Dati trattati dall'app

Time Tracker tratta esclusivamente i contenuti che l'utente inserisce:

- i progetti: nome, colore, note, date di inizio e fine, archiviazione, tariffa oraria e percentuale IVA facoltative
- le attività registrate: titolo, progetto, data e ora di inizio e fine o totale giornaliero, durata, note
- il timer Pomodoro: attività e progetto scelti, durata e stato della sessione in corso
- le preferenze dell'app: lingua, tema, colori, impostazioni dell'interfaccia e del timer, sincronizzazione iCloud (su iOS), stato dell'introduzione iniziale
- i dati di esempio, solo se l'utente sceglie di caricarli

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con server dello sviluppatore né di terze parti; su Android non ha nemmeno il permesso di accedere a Internet.

## Sincronizzazione iCloud (solo iOS)

La sincronizzazione iCloud è disattivata finché l'utente non la attiva nelle impostazioni dell'app.

Quando è attiva, progetti e attività vengono sincronizzati tra iPhone e iPad dell'utente tramite il **database privato CloudKit** del suo account iCloud. Questi dati sono gestiti da Apple secondo la propria informativa sulla privacy e non sono accessibili allo sviluppatore.

## Backup di Android (solo Android)

Android può includere il database dell'app nel backup del dispositivo che l'utente ha attivato (ad esempio il backup di Google) e ripristinarlo su un nuovo dispositivo. Il backup è gestito da Android e dal servizio scelto dall'utente, secondo le loro condizioni, e non è accessibile allo sviluppatore. Si può disattivare nelle impostazioni di sistema.

## Notifiche

Durante una sessione Pomodoro l'app mostra una notifica locale con lo stato del timer; su iOS anche una Live Activity, nella schermata di blocco e nella Dynamic Island. Sono generate sul dispositivo: non viene usato alcun servizio di notifiche push. Il permesso di inviare notifiche viene chiesto dal sistema operativo e può essere revocato nelle impostazioni di sistema.

## Esportazione e importazione

I backup (JSON) e i report della dashboard (PDF o CSV) vengono creati solo su richiesta dell'utente e salvati o condivisi nella destinazione che l'utente sceglie. L'importazione legge solo il file di backup selezionato dall'utente.

## Permessi del dispositivo

Time Tracker può chiedere il permesso di inviare notifiche, per il timer Pomodoro.

L'app non accede a posizione, fotocamera, microfono, foto, contatti o calendari; su Android nemmeno a Internet.

## Condivisione dei dati

Time Tracker non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

L'unica eccezione è quando l'utente esporta, salva o condivide esplicitamente un backup o un report: il file va solo verso la destinazione scelta dall'utente.

## Conservazione dei dati

L'app salva sul dispositivo, nel proprio spazio:

- il database (SQLite) con progetti e attività
- le preferenze e lo stato del timer

Su iOS, se la sincronizzazione iCloud è attiva, progetti e attività sono conservati anche nel database privato CloudKit dell'utente.

## Conservazione e cancellazione

- Progetti e attività si modificano o eliminano dall'app; importare un backup sostituisce i dati presenti.
- Disinstallare l'app, o su Android cancellarne i dati dalle impostazioni di sistema, rimuove i dati locali.
- Su iOS, i dati sincronizzati in iCloud si possono eliminare da Impostazioni › [nome utente] › iCloud › Gestisci spazio.
- I backup e i report esportati restano dove l'utente li ha salvati finché non li elimina.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

Time Tracker non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza del sistema operativo, che isolano i dati di ogni app; su iOS i dati sincronizzati sono gestiti da iCloud secondo le condizioni di Apple.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro, in particolare dopo che l'utente esporta o condivide un backup o un report fuori dall'app.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione è sempre disponibile a questo indirizzo, lo stesso indicato in App Store Connect e nella Play Console.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
