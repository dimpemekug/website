---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Remuxly"
description: "Informativa completa sulla privacy dell'app Remuxly: quali dati vengono trattati, come vengono gestiti i video e perché nessun dato lascia il Mac."
---

Ultimo aggiornamento: 13 settembre 2026

Questa Informativa sulla Privacy descrive come **Remuxly** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti che comunicano in rete
- Non viene effettuato alcun tracciamento dell'utente
- L'app non si connette a Internet: non ha il permesso di rete, quindi macOS le impedisce qualsiasi connessione
- I video vengono elaborati interamente sul Mac e non vengono mai caricati su server, né dello sviluppatore né di terze parti

## Dati trattati dall'app

Remuxly tratta esclusivamente:

- i video che l'utente sceglie di aprire: con "Apri Video…", trascinandoli nella finestra o sull'icona nel Dock, con "Apri con…" dal Finder, o aggiungendoli alla finestra "Unisci video"
- i file che l'utente sceglie di usare durante la modifica: sottotitoli (SRT, ASS/SSA) e tabelle colore LUT (.cube)
- i file che l'app crea su richiesta dell'utente: video esportati o uniti, tracce audio, video o sottotitoli estratti, fotogrammi salvati come immagine, sottotitoli salvati in SRT
- la coda di lavoro: le esportazioni messe in coda, con i percorsi dei file coinvolti e le impostazioni scelte (formato, codifica, taglio, filtri, tracce)
- le preferenze dell'app: formato e codec predefiniti, cartella di destinazione predefinita, lingua dell'interfaccia e scorciatoie da tastiera

I video vengono letti ed elaborati localmente sul Mac, anche tramite i componenti FFmpeg inclusi nell'app (vedi "Componenti di terze parti").

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con alcun server.

Tutti i dati restano sul Mac dell'utente.

## Video e file originali

Remuxly non modifica mai i file originali: ogni esportazione, unione o estrazione crea un nuovo file nella destinazione scelta dall'utente.

I metadati dei video (ad esempio lingua e titolo delle tracce) vengono letti per mostrarli nell'app e, se l'utente li modifica, scritti solo nel nuovo file esportato, sempre e solo sul Mac.

## Componenti di terze parti

Remuxly include FFmpeg, distribuito con licenza LGPL, per analizzare, decodificare e codificare i video. FFmpeg viene eseguito localmente, all'interno della stessa sandbox dell'app e senza accesso alla rete.

Remuxly non contiene SDK di analytics, pubblicità, crash reporting o altri servizi esterni.

## Sincronizzazione e cloud

Remuxly non offre funzioni di sincronizzazione e non usa iCloud. Se l'utente apre video o sceglie come destinazione una cartella sincronizzata da un servizio cloud (ad esempio iCloud Drive), la sincronizzazione è gestita da quel servizio e da macOS, non da Remuxly.

## Notifiche

Remuxly può mostrare una notifica locale quando un'esportazione termina. L'autorizzazione viene chiesta da macOS la prima volta che serve e può essere revocata in qualsiasi momento da Impostazioni di Sistema › Notifiche. Le notifiche sono generate sul Mac: non viene usato alcun servizio di notifiche push.

## Permessi del dispositivo

Remuxly funziona all'interno della sandbox di macOS e può accedere solo ai file e alle cartelle che l'utente sceglie esplicitamente, trascinandoli, aprendoli o selezionandoli in un pannello di sistema.

Per poter riaprire un video o scrivere nella cartella scelta anche dopo un riavvio (ad esempio per le esportazioni in coda), l'app salva un riferimento di sicurezza (security-scoped bookmark) a quei file e cartelle.

L'app non richiede l'accesso a fotocamera, microfono, libreria di Foto, contatti, calendari, posizione o autenticazione biometrica, e non ha accesso alla rete.

## Condivisione dei dati

Remuxly non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

Nessun dato lascia il Mac a opera dell'app.

## Conservazione dei dati

L'app salva localmente sul Mac:

- le preferenze (`UserDefaults`) elencate nella sezione "Dati trattati dall'app"
- la coda di lavoro, in un file all'interno del contenitore dell'app (Application Support), insieme ai riferimenti di sicurezza dei file coinvolti
- i file creati su richiesta dell'utente, nella destinazione scelta

## Conservazione e cancellazione

- I file esportati sono normali file dell'utente: restano dove sono stati salvati finché l'utente non li sposta o li elimina, anche dopo la disinstallazione dell'app.
- Le esportazioni si possono rimuovere dalla coda di lavoro (Strumenti › Coda di lavoro).
- La disinstallazione dell'app rimuove le preferenze e la coda di lavoro salvate, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

Remuxly non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso ai file concessi dall'utente.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
