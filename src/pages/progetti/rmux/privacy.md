---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rMux"
description: "Privacy dell'app rMux: quali dati vengono trattati, come vengono gestiti i video e perché nessun dato lascia il Mac."
---

Ultimo aggiornamento: 16 novembre 2026

Questa Informativa sulla Privacy descrive come **rMux** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti che comunicano in rete
- Non viene effettuato alcun tracciamento dell'utente
- L'app non si connette a Internet: non ha il permesso di rete, quindi macOS le impedisce qualsiasi connessione
- I video vengono elaborati interamente sul Mac e non vengono mai caricati su server, né dello sviluppatore né di terze parti

## Dati trattati dall'app

rMux tratta esclusivamente:

- i video che l'utente sceglie di aprire: con "Apri Video…", trascinandoli nella finestra o sull'icona nel Dock, con "Apri con…" dal Finder, o aggiungendoli alla finestra "Unisci video"
- i file che l'utente sceglie di usare durante la modifica: sottotitoli (SRT, ASS/SSA) e tabelle colore LUT (.cube)
- i file che l'app crea su richiesta dell'utente: video esportati o uniti, tracce audio, video o sottotitoli estratti, fotogrammi salvati come immagine, sottotitoli salvati in SRT
- la coda di lavoro: le esportazioni messe in coda, con i percorsi dei file coinvolti e le impostazioni scelte (formato, codifica, taglio, filtri, tracce)
- l'elenco dei video recenti: nome, percorso e riferimento di sicurezza degli ultimi video aperti (al massimo otto), mostrato nella finestra vuota e in File › Apri recenti
- le preferenze dell'app: formato e codec predefiniti, cartella di destinazione predefinita, suffisso del nome dei file esportati, lingua e aspetto dell'interfaccia, scorciatoie da tastiera, volume dell'anteprima e le altre scelte delle Impostazioni

I video vengono letti ed elaborati localmente sul Mac, anche tramite i componenti FFmpeg inclusi nell'app (vedi "Componenti di terze parti").

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. L'app non comunica con alcun server.

Tutti i dati restano sul Mac dell'utente.

## Video e file originali

rMux non modifica mai i file originali: ogni esportazione, unione o estrazione crea un nuovo file nella destinazione scelta dall'utente.

I metadati dei video (ad esempio lingua e titolo delle tracce) vengono letti per mostrarli nell'app e, se l'utente li modifica, scritti solo nel nuovo file esportato, sempre e solo sul Mac.

## Componenti di terze parti

rMux include FFmpeg, distribuito con licenza LGPL, per analizzare, decodificare e codificare i video. FFmpeg viene eseguito localmente, all'interno della stessa sandbox dell'app e senza accesso alla rete.

rMux non contiene SDK di analytics, pubblicità, crash reporting o altri servizi esterni.

## Sincronizzazione e cloud

rMux non offre funzioni di sincronizzazione e non usa iCloud. Se l'utente apre video o sceglie come destinazione una cartella sincronizzata da un servizio cloud (ad esempio iCloud Drive), la sincronizzazione è gestita da quel servizio e da macOS, non da rMux.

## Notifiche

rMux può mostrare una notifica locale quando un'esportazione, un'unione o la coda di lavoro termina. L'autorizzazione viene chiesta da macOS la prima volta che serve e può essere revocata in qualsiasi momento da Impostazioni di Sistema › Notifiche; le notifiche si possono anche disattivare in rMux, da Impostazioni › Esportazione. Le notifiche sono generate sul Mac: non viene usato alcun servizio di notifiche push.

## Permessi del dispositivo

rMux funziona all'interno della sandbox di macOS e può accedere solo ai file e alle cartelle che l'utente sceglie esplicitamente, trascinandoli, aprendoli o selezionandoli in un pannello di sistema.

Per poter riaprire un video o scrivere nella cartella scelta anche dopo un riavvio (ad esempio per le esportazioni in coda o per i video recenti), l'app salva un riferimento di sicurezza (security-scoped bookmark) a quei file e cartelle. Il riferimento dà accesso in sola lettura ai video aperti e resta sul Mac.

L'app non richiede l'accesso a fotocamera, microfono, libreria di Foto, contatti, calendari, posizione o autenticazione biometrica, e non ha accesso alla rete.

## Condivisione dei dati

rMux non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

Nessun dato lascia il Mac a opera dell'app.

## Conservazione dei dati

L'app salva localmente sul Mac:

- le preferenze (`UserDefaults`) elencate nella sezione "Dati trattati dall'app"
- l'elenco dei video recenti, anch'esso nelle preferenze, con i riferimenti di sicurezza dei video
- la coda di lavoro, in un file all'interno del contenitore dell'app (Application Support), insieme ai riferimenti di sicurezza dei file coinvolti
- i file creati su richiesta dell'utente, nella destinazione scelta

## Conservazione e cancellazione

- I file esportati sono normali file dell'utente: restano dove sono stati salvati finché l'utente non li sposta o li elimina, anche dopo la disinstallazione dell'app.
- Le esportazioni si possono rimuovere dalla coda di lavoro (Strumenti › Coda di lavoro).
- L'elenco dei video recenti si cancella con "Cancella elenco" (finestra vuota o Impostazioni › Generale) o con File › Apri recenti › Cancella menu; disattivando "Ricorda i video aperti" l'elenco viene svuotato e non si riempie più.
- "Ripristina impostazioni predefinite…" (Impostazioni › Generale) cancella le preferenze salvate, tranne la lingua e l'elenco dei video recenti.
- La disinstallazione dell'app rimuove le preferenze, l'elenco dei video recenti e la coda di lavoro salvati, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

rMux non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso ai file concessi dall'utente.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
