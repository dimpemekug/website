---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Horologe"
description: "Informativa completa sulla privacy dell'app Horologe: quali dati vengono trattati, dove restano e come funzionano la sincronizzazione iCloud facoltativa su iOS e il backup di Android."
---

Ultimo aggiornamento: 13 ottobre 2026

Questa Informativa sulla Privacy descrive come **Horologe** tratta i dati, su iOS e su Android.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di tracciamento
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non ha server e non riceve alcun dato
- La collezione resta sul dispositivo; su iOS anche nell'account iCloud privato dell'utente, solo se attiva la sincronizzazione; su Android anche nel backup Android dell'utente, se attivo
- Su Android l'app non si connette a Internet

## Dati trattati dall'app

Horologe tratta esclusivamente i contenuti che l'utente inserisce:

- i dati degli orologi: marca, modello, referenza, numero di serie, anno, movimento, calibro, diametro, materiale della cassa, scatola e documenti, campi personalizzati, note, stato (in collezione, desiderato o venduto), prezzo e data di acquisto, prezzo e data di vendita
- lo storico delle revisioni (data, tipo di intervento, costo, note) e l'intervallo tra una revisione e l'altra
- il registro al polso (i giorni in cui un orologio è stato indossato) e il registro di precisione (le misure di scarto in secondi al giorno)
- le foto degli orologi e gli allegati scelti dall'utente (PDF; su iOS anche immagini)
- le preferenze dell'app: tema, stile ed effetti grafici, lingua, promemoria di revisione, blocco dell'app, sincronizzazione iCloud (su iOS), stato dell'introduzione iniziale

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con server dello sviluppatore né di terze parti; su Android non ha nemmeno il permesso di accedere a Internet.

## Sincronizzazione iCloud (solo iOS)

La sincronizzazione iCloud è disattivata finché l'utente non la attiva nelle impostazioni dell'app.

Quando è attiva, la collezione (dati, foto e allegati) viene sincronizzata tra i dispositivi dell'utente tramite il **database privato CloudKit** del suo account iCloud. Questi dati sono gestiti da Apple secondo la propria informativa sulla privacy e non sono accessibili allo sviluppatore.

## Backup di Android (solo Android)

Android può includere i dati dell'app nel backup del dispositivo che l'utente ha attivato (ad esempio il backup di Google) e ripristinarli su un nuovo dispositivo. Il backup è gestito da Android e dal servizio scelto dall'utente, secondo le loro condizioni, e non è accessibile allo sviluppatore. Si può disattivare nelle impostazioni di sistema.

## Foto e allegati

- **iOS**: la fotocamera viene usata solo quando l'utente sceglie di scattare una foto di un orologio. La libreria Foto viene aperta solo per scegliere le immagini da associare a un orologio: l'app riceve soltanto le immagini selezionate.
- **Android**: le foto vengono scelte con il selettore di foto di Android: l'app riceve solo le immagini selezionate, non l'accesso alla galleria.

Foto e allegati vengono copiati nello spazio dell'app sul dispositivo.

## Blocco dell'app

Il blocco dell'app è facoltativo: Face ID, Touch ID o codice del dispositivo su iOS; impronta, riconoscimento del volto o PIN del dispositivo su Android. L'autenticazione è gestita interamente dal sistema operativo: Horologe riceve solo l'esito (riuscita o non riuscita) e non ha mai accesso a dati biometrici.

## Notifiche

Se l'utente attiva i promemoria di revisione, Horologe programma notifiche locali sul dispositivo (su Android le riprogramma dopo un riavvio). Il permesso di inviare notifiche viene chiesto dal sistema operativo e può essere revocato nelle impostazioni di sistema. Non viene usato alcun servizio di notifiche push.

## Esportazione e importazione

I backup (ZIP) e le schede PDF degli orologi vengono creati solo su richiesta dell'utente e salvati o condivisi nella destinazione che l'utente sceglie. L'importazione legge solo il file selezionato dall'utente e sostituisce la collezione: su Android chiede prima conferma; su iOS l'app conserva sul dispositivo una copia di sicurezza della collezione precedente, per poter annullare l'operazione.

## Permessi del dispositivo

Horologe può chiedere:

- il permesso di inviare notifiche, per i promemoria di revisione
- l'uso della biometria o del codice del dispositivo, per il blocco facoltativo
- su iOS, l'accesso alla fotocamera e alla libreria Foto, per le foto degli orologi

Su Android usa inoltre il permesso di avvio del dispositivo, solo per riprogrammare i promemoria.

L'app non usa la posizione dell'utente per nessuna funzione e non accede a contatti, calendari o microfono; su Android nemmeno a Internet e alla fotocamera.

## Condivisione dei dati

Horologe non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

L'unica eccezione è quando l'utente esporta, salva o condivide esplicitamente un backup o un PDF: il file va solo verso la destinazione scelta dall'utente.

## Conservazione dei dati

L'app salva sul dispositivo, nel proprio spazio:

- il database (SQLite) con orologi, revisioni, registro al polso e registro di precisione
- le foto e gli allegati
- le preferenze
- su iOS, la copia di sicurezza creata prima dell'ultima importazione

Su iOS, se la sincronizzazione iCloud è attiva, la collezione è conservata anche nel database privato CloudKit dell'utente.

## Conservazione e cancellazione

- Orologi, revisioni, foto e allegati si modificano o eliminano dall'app.
- Importare un backup sostituisce i dati della collezione; su iOS la copia di sicurezza permette di tornare indietro.
- Disinstallare l'app, o su Android cancellarne i dati dalle impostazioni di sistema, rimuove i dati locali.
- Su iOS, i dati sincronizzati in iCloud si possono eliminare da Impostazioni › [nome utente] › iCloud › Gestisci spazio.
- I backup e i PDF esportati restano dove l'utente li ha salvati finché non li elimina.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

Horologe non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza del sistema operativo, che isolano i dati di ogni app. Il blocco facoltativo protegge l'accesso all'app; su iOS i dati sincronizzati sono gestiti da iCloud secondo le condizioni di Apple.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro, in particolare dopo che l'utente esporta o condivide un backup o un PDF fuori dall'app.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione è sempre disponibile a questo indirizzo, lo stesso indicato in App Store Connect e nella Play Console.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
