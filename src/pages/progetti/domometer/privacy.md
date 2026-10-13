---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - DomoMeter"
description: "Informativa completa sulla privacy dell'app DomoMeter: quali dati vengono trattati, dove restano e come funzionano la sincronizzazione iCloud facoltativa su iOS e il backup di Android."
---

Ultimo aggiornamento: 13 ottobre 2026

Questa Informativa sulla Privacy descrive come **DomoMeter** tratta i dati, su iOS e su Android.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di tracciamento
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non ha server e non riceve alcun dato
- Le letture restano sul dispositivo; su iOS anche nell'account iCloud privato dell'utente, solo se attiva la sincronizzazione; su Android anche nel backup Android dell'utente, se attivo
- Su Android l'app non si connette a Internet e non chiede alcun permesso

## Dati trattati dall'app

DomoMeter tratta esclusivamente i contenuti che l'utente inserisce:

- le letture dei contatori di luce (anche per fasce F1, F2 e F3), gas e acqua, con la data ed eventuali note
- i profili delle abitazioni e i limiti di consumo per ogni utenza
- su iOS, anche tariffe e budget di spesa inseriti dall'utente e le impostazioni del promemoria di lettura
- le preferenze dell'app: lingua, tema, colori, unità di misura e impostazioni dell'interfaccia

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con server dello sviluppatore né di terze parti; su Android non ha nemmeno il permesso di accedere a Internet.

## Sincronizzazione iCloud (solo iOS)

L'app offre una sincronizzazione iCloud **facoltativa**, disattivata per impostazione predefinita e attivabile dall'utente in Impostazioni.

Quando è attiva:

- i dati dell'app (letture, profili, tariffe, limiti e preferenze) vengono salvati come istantanea nel **database privato iCloud dell'account dell'utente**, tramite il servizio CloudKit di Apple
- i dati restano nell'account iCloud dell'utente: lo sviluppatore non vi ha accesso, non li riceve e non li conserva
- il trattamento da parte di Apple è regolato dall'informativa sulla privacy di Apple
- disattivando la sincronizzazione l'app smette di inviare e ricevere aggiornamenti; i dati già presenti in iCloud possono essere rimossi dall'utente dalle impostazioni iCloud del dispositivo

Se la sincronizzazione resta disattivata, nessun dato dell'app lascia il dispositivo.

## Backup di Android (solo Android)

Android può includere i dati dell'app nel backup del dispositivo che l'utente ha attivato (ad esempio il backup di Google) e ripristinarli su un nuovo dispositivo. Il backup è gestito da Android e dal servizio scelto dall'utente, secondo le loro condizioni, e non è accessibile allo sviluppatore. Si può disattivare nelle impostazioni di sistema.

## Notifiche (solo iOS)

Il promemoria di lettura utilizza le notifiche locali del sistema operativo, pianificate sul dispositivo. Non prevede l'invio di dati a server remoti e richiede l'autorizzazione dell'utente, revocabile in qualsiasi momento dalle impostazioni di sistema.

## Backup ed esportazione

I backup (JSON) e, su iOS, i file CSV vengono creati solo su richiesta dell'utente e salvati o condivisi nella destinazione che l'utente sceglie. L'importazione legge solo il file selezionato dall'utente.

## Permessi del dispositivo

- **iOS**: DomoMeter può chiedere l'autorizzazione a inviare notifiche, per il promemoria di lettura.
- **Android**: DomoMeter non chiede alcun permesso: non accede a Internet, notifiche, posizione, fotocamera, microfono, foto, contatti o calendari.

## Condivisione dei dati

DomoMeter non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

L'unica eccezione è quando l'utente esporta, salva o condivide esplicitamente un backup o un file CSV: il file va solo verso la destinazione scelta dall'utente.

## Conservazione dei dati

L'app salva sul dispositivo, nel proprio spazio:

- il database con letture, profili e limiti
- le preferenze

Su iOS, se la sincronizzazione iCloud è attiva, i dati sono conservati anche nel database privato iCloud dell'utente.

## Conservazione e cancellazione

- Letture e profili si modificano o eliminano dall'app; importare un backup sostituisce i dati presenti.
- Disinstallare l'app, o su Android cancellarne i dati dalle impostazioni di sistema, rimuove i dati locali.
- Su iOS, i dati sincronizzati si possono eliminare dalle impostazioni iCloud del dispositivo.
- I backup e i file esportati restano dove l'utente li ha salvati finché non li elimina.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

DomoMeter non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza del sistema operativo, che isolano i dati di ogni app, e, per la sincronizzazione su iOS, all'infrastruttura iCloud di Apple.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro, in particolare dopo che l'utente esporta o condivide un file fuori dall'app.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione è sempre disponibile a questo indirizzo, lo stesso indicato in App Store Connect e nella Play Console.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
