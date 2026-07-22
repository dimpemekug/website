---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - ShowNest"
description: "Informativa completa sulla privacy dell'app ShowNest: quali dati vengono trattati, dove sono salvati e come funziona la sincronizzazione iCloud opzionale."
---

Ultimo aggiornamento: 22 luglio 2026

Questa Informativa sulla Privacy descrive come **ShowNest** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non raccoglie dati personali tramite server remoti dell'app
- La sincronizzazione iCloud, se attivata dall'utente, avviene direttamente tra il dispositivo e il proprio Account Apple e non passa dai server dello sviluppatore
- L'app comunica con le API di The Movie Database (TMDB) per recuperare informazioni su serie ed episodi; queste richieste non includono alcun dato personale

## Dati trattati dall'app

L'app consente all'utente di creare e gestire localmente una libreria di serie TV, tra cui:

- dati delle serie aggiunte dall'utente tramite ricerca, provenienti da TMDB (ID della serie, titolo, locandina e metadati correlati)
- stato di tracciamento di ogni serie, oltre alle date di aggiunta e ultima modifica
- progressi di visione a livello di episodio, cioè quali episodi di ciascuna serie tracciata sono stati contrassegnati come visti
- preferenze come lingua, tema/colore accento, impostazioni di notifica e stato di attivazione della Sincronizzazione iCloud

Queste informazioni vengono salvate localmente sul dispositivo per consentire il funzionamento dell'app.

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide automaticamente dati dell'utente tramite server remoti attraverso l'app.

I dati restano normalmente nello storage locale dell'app sul dispositivo.

Se l'utente attiva la Sincronizzazione iCloud (vedi la sezione dedicata di seguito), una copia dei dati della libreria viene salvata automaticamente nel proprio spazio iCloud privato; anche in questo caso lo sviluppatore non riceve né può accedere a tali dati.

## Servizi di terze parti (TMDB)

ShowNest utilizza le API di The Movie Database (TMDB) per cercare le serie e mostrare locandine, descrizioni, cast e informazioni sugli episodi, oltre a determinare le date di messa in onda usate per le notifiche facoltative sui nuovi episodi.

Quando l'utente cerca o sfoglia i contenuti, la query di ricerca e gli identificativi di serie/episodio richiesti vengono inviati ai server di TMDB per recuperare questi dati pubblici. L'app non invia a TMDB alcuna informazione che identifichi personalmente l'utente — nessun account, nessun identificativo del dispositivo, nessun dato della libreria tracciata.

Si applica l'informativa sulla privacy di TMDB a tale traffico: https://www.themoviedb.org/privacy-policy

Questo prodotto utilizza le API di TMDB ma non è approvato né certificato da TMDB.

## Sincronizzazione iCloud

ShowNest offre una funzione facoltativa di sincronizzazione tramite iCloud, disattivata di default e attivabile dall'utente nelle Impostazioni dell'app.

Se attivata:

- l'app salva una copia della libreria di serie tracciate (serie, progressi di visione ed eliminazioni) nel proprio account iCloud, utilizzando l'iCloud Key-Value Storage di Apple (`NSUbiquitousKeyValueStore`) — un meccanismo di sincronizzazione leggero, non un database ospitato
- la sincronizzazione avviene direttamente tra i dispositivi dell'utente e i server iCloud di Apple; i dati non transitano né vengono salvati sui server dello sviluppatore
- i dati sono accessibili solo dai dispositivi collegati con lo stesso Account Apple dell'utente
- la sincronizzazione avviene automaticamente in background dopo una modifica alla libreria, all'avvio dell'app o quando arrivano nuovi dati da un altro dispositivo dell'utente, mentre la funzione è attiva

L'utente può disattivare la sincronizzazione in qualsiasi momento dalle Impostazioni dell'app. Disattivarla interrompe le sincronizzazioni future ma non elimina automaticamente un'eventuale copia già presente nel proprio iCloud: per rimuoverla è possibile usare la gestione archiviazione iCloud del dispositivo (Impostazioni > [ID Apple] > iCloud > Gestisci spazio).

## Notifiche

ShowNest può inviare notifiche locali per i nuovi episodi quando l'utente attiva "Avvisi nuovi episodi" nelle Impostazioni.

Le notifiche vengono generate e mostrate localmente sul dispositivo in base alle date di messa in onda recuperate da TMDB; non comportano alcuna trasmissione di dati oltre alle normali richieste a TMDB descritte sopra. Per attivarle, l'app richiede il permesso di sistema per l'invio di notifiche.

## Permessi del dispositivo

ShowNest richiede:

- il permesso per le notifiche, per recapitare gli avvisi sui nuovi episodi (facoltativo, solo se attivato dall'utente)

L'app non richiede l'accesso a fotocamera, libreria foto, contatti, posizione o autenticazione biometrica, e non utilizza alcun dato di questo tipo.

## Condivisione dei dati

ShowNest non condivide dati dell'utente con lo sviluppatore o con terze parti per finalità di analytics, pubblicità, profilazione o tracciamento.

Gli unici dati che lasciano il dispositivo sono: le richieste su serie/episodi inviate a TMDB per mostrare i contenuti (vedi "Servizi di terze parti"), e, se attivata dall'utente, la sincronizzazione automatica con il proprio Account Apple tramite iCloud (vedi sopra). In entrambi i casi i dati raggiungono solo l'API pubblica di TMDB o la destinazione controllata dal proprio Account Apple — mai i server dello sviluppatore.

## Conservazione dei dati

I dati dell'app vengono salvati localmente sul dispositivo, tra cui:

- un file JSON locale nella directory Application Support dell'app, contenente la libreria di serie tracciate
- preferenze locali (`UserDefaults`) per impostazioni come tema, lingua, preferenze di notifica e stato della Sincronizzazione iCloud

Se attivata dall'utente, una copia compressa della libreria viene inoltre salvata nell'iCloud Key-Value Storage dell'utente, come descritto nella sezione "Sincronizzazione iCloud".

## Conservazione e cancellazione

I dati inseriti nell'app restano sul dispositivo finché l'utente non:

- rimuove serie dalla propria libreria, o contrassegna/rimuove il contrassegno di episodi come visti
- disattiva la Sincronizzazione iCloud
- disinstalla l'app, il che rimuove tutti i dati salvati localmente, nei limiti del comportamento del sistema operativo

Se la Sincronizzazione iCloud è stata attivata, l'eventuale copia salvata nel proprio Account Apple resta nello spazio iCloud dell'utente anche dopo la disattivazione della funzione o la disinstallazione dell'app, finché non viene rimossa dall'utente tramite la gestione archiviazione iCloud del dispositivo.

Poiché lo sviluppatore non riceve né conserva i dati dell'app su server remoti, non può accedere, correggere o cancellare i dati locali o su iCloud dell'utente per suo conto.

## Minori

ShowNest non è rivolta specificamente ai minori e non raccoglie consapevolmente dati personali di minori.

## Sicurezza

L'app si affida ai meccanismi di sicurezza forniti dal sistema operativo per lo storage locale. Quando attiva, la sincronizzazione iCloud si affida ai meccanismi di sicurezza del proprio Account Apple.

Nessun metodo di archiviazione su dispositivo o sincronizzazione cloud può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
