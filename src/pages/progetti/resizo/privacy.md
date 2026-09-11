---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Resizo"
description: "Informativa completa sulla privacy dell'app Resizo: quali dati vengono trattati, come vengono gestiti i metadati delle immagini e perché nessun dato lascia il Mac."
---

Ultimo aggiornamento: 11 settembre 2026

Questa Informativa sulla Privacy descrive come **Resizo** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- L'app non si connette a Internet: non ha il permesso di rete, quindi macOS le impedisce qualsiasi connessione
- Le immagini vengono elaborate interamente sul Mac e non vengono mai caricate su server, né dello sviluppatore né di terze parti
- Per impostazione predefinita, i metadati EXIF (data, modello di fotocamera, posizione GPS) vengono rimossi dalle immagini esportate

## Dati trattati dall'app

Resizo tratta esclusivamente:

- le immagini che l'utente sceglie di ridimensionare: trascinate nella finestra o sull'icona nel Dock, scelte con "Aggiungi Immagini…", aperte con "Apri con…" dal Finder o inviate con il servizio "Ridimensiona con Resizo"
- le copie ridimensionate che l'app crea su richiesta dell'utente
- le preferenze dell'app: modalità di ridimensionamento, percentuale, blocco delle proporzioni, formato di output, qualità JPEG, suffisso del nome file, opzione sui metadati, cartella di destinazione scelta, preset di dimensione, lingua e tema

Le immagini vengono lette ed elaborate in memoria sul Mac. L'elenco delle immagini aperte non viene salvato e si svuota alla chiusura dell'app.

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con alcun server.

Tutti i dati restano sul Mac dell'utente.

## Immagini e metadati

Resizo non modifica mai le immagini originali: crea sempre un nuovo file, senza sovrascrivere file esistenti, nella cartella Immagini › Resizo o in un'altra cartella scelta dall'utente.

Per impostazione predefinita le copie esportate **non** includono i metadati dell'originale (EXIF, coordinate GPS, data e ora di scatto, modello di fotocamera, profilo colore). L'utente può scegliere di mantenerli attivando l'opzione "Mantieni metadati originali" nel pannello di ridimensionamento; in quel caso i metadati vengono copiati nel nuovo file così come sono, sempre e solo sul Mac.

## Servizi di terze parti

Resizo non utilizza servizi di terze parti. Non contiene SDK di analytics, pubblicità, crash reporting o altri servizi esterni.

## Sincronizzazione e cloud

Resizo non offre funzioni di sincronizzazione e non usa iCloud. Se l'utente sceglie come destinazione una cartella sincronizzata da un servizio cloud (ad esempio iCloud Drive), la sincronizzazione è gestita da quel servizio e da macOS, non da Resizo.

## Notifiche

Resizo non invia notifiche.

## Permessi del dispositivo

Resizo funziona all'interno della sandbox di macOS e può accedere solo a:

- i file e le cartelle che l'utente sceglie esplicitamente (trascinandoli, aprendoli o selezionandoli in un pannello di sistema), per leggere le immagini e salvare le copie ridimensionate
- la cartella Immagini dell'utente, per salvare le copie nella cartella di destinazione predefinita Immagini › Resizo

L'app non richiede l'accesso a fotocamera, microfono, libreria di Foto, contatti, calendari, posizione o autenticazione biometrica, e non ha accesso alla rete.

## Condivisione dei dati

Resizo non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

Nessun dato lascia il Mac a opera dell'app.

## Conservazione dei dati

L'app salva localmente sul Mac:

- le preferenze (`UserDefaults`) elencate nella sezione "Dati trattati dall'app"; per la cartella di destinazione scelta dall'utente viene salvato un riferimento di sicurezza (security-scoped bookmark) che permette all'app di continuare a scriverci tra un avvio e l'altro
- le copie ridimensionate, nella cartella di destinazione scelta

## Conservazione e cancellazione

- Le copie ridimensionate sono normali file dell'utente: restano dove sono state salvate finché l'utente non le sposta o le elimina, anche dopo la disinstallazione dell'app.
- Le preferenze possono essere riportate ai valori predefiniti da Impostazioni › Generale › "Ripristina impostazioni predefinite"; i preset si gestiscono da Impostazioni › Preset.
- La disinstallazione dell'app rimuove le preferenze salvate, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

Resizo non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso ai file concessi dall'utente.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
