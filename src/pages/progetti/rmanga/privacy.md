---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rManga"
description: "Informativa completa sulla privacy dell'app rManga: quali dati vengono trattati, a quali sorgenti e server si collega e come funziona la sincronizzazione iCloud facoltativa."
---

Ultimo aggiornamento: 13 ottobre 2026

Questa Informativa sulla Privacy descrive come **rManga** tratta i dati.

## Sintesi

- Non è richiesto alcun account presso lo sviluppatore
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di tracciamento
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non ha server e non riceve alcun dato
- L'app si collega solo alle sorgenti, ai server e ai servizi che l'utente aggiunge o usa
- Libreria e progressi restano sul dispositivo e, solo se l'utente attiva la sincronizzazione, nel suo account iCloud privato

## Dati trattati dall'app

rManga tratta esclusivamente:

- la libreria: serie, capitoli ed episodi aggiunti dall'utente, con copertine, progressi di lettura e di visione, segnalibri ed evidenziazioni nei libri
- i file che l'utente importa: fumetti, libri e documenti (CBZ, CBR, EPUB, PDF, FB2, testo e altri), sottotitoli, modelli per il miglioramento delle immagini, backup
- i capitoli e gli episodi scaricati per l'uso senza connessione
- le sorgenti: repository ed estensioni installate dall'utente, con le loro impostazioni
- i server personali dell'utente (Suwayomi, Komga, Kavita, Jellyfin, cataloghi OPDS): indirizzo, nome utente, password o token
- le preferenze dell'app: lettura, riproduzione, aspetto, aggiornamenti, sincronizzazione iCloud

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non vende e non condivide dati dell'utente. rManga non ha server propri: comunica solo con i servizi descritti in «Connessioni di rete».

## Connessioni di rete

- **Sorgenti ed estensioni.** Le estensioni vengono scaricate dai repository che l'utente aggiunge (l'app non include né propone alcun repository) e contattano i siti dei contenuti per cercare serie, elencare capitoli e scaricare pagine o video. Questi siti sono gestiti da terze parti, che ricevono le richieste necessarie (ad esempio i termini di ricerca e l'indirizzo IP) e le trattano secondo le proprie regole. Lo sviluppatore non gestisce né controlla questi siti.
- **Server personali.** Suwayomi, Komga, Kavita, Jellyfin e i cataloghi OPDS sono server dell'utente o da lui scelti, raggiunti con le credenziali che l'utente inserisce, anche sulla rete locale.
- **Pagine web delle sorgenti.** Alcuni siti richiedono una verifica (ad esempio Cloudflare) o un accesso: rManga li apre in una vista web, e i cookie che quei siti impostano vengono conservati per le richieste successive.
- **Informazioni sugli episodi.** Per i tempi di sigla e riepilogo da saltare e per titoli e anteprime degli episodi, l'app interroga AniList (con il titolo della serie), AniSkip, Anira e Kitsu (con l'identificativo della serie e il numero dell'episodio). Non vengono inviati dati dell'utente.

## Sincronizzazione iCloud

La sincronizzazione iCloud è disattivata finché l'utente non la attiva nelle impostazioni dell'app.

Quando è attiva, la libreria con i progressi, le impostazioni e l'elenco di repository, estensioni e server vengono sincronizzati tra i dispositivi dell'utente tramite il **database privato CloudKit** del suo account iCloud. Le password e i token dei server **non** vengono sincronizzati: restano nel Portachiavi del dispositivo. Questi dati sono gestiti da Apple secondo la propria informativa sulla privacy e non sono accessibili allo sviluppatore.

## Notifiche

Se l'utente attiva gli aggiornamenti in background, l'app controlla periodicamente le sorgenti della libreria e mostra una notifica locale quando escono nuovi capitoli. L'autorizzazione viene chiesta da iOS e può essere revocata in Impostazioni › Notifiche.

## Permessi del dispositivo

rManga può chiedere l'accesso a:

- rete locale, per raggiungere i server personali dell'utente
- notifiche, per gli avvisi dei nuovi capitoli

L'app non richiede l'accesso a posizione, fotocamera, microfono, libreria Foto, contatti o calendari.

## Condivisione dei dati

rManga non condivide dati dell'utente con lo sviluppatore o con terze parti per analytics, pubblicità, profilazione o tracciamento. Le sole comunicazioni verso l'esterno sono quelle descritte in «Connessioni di rete», avviate dalle sorgenti, dai server e dalle funzioni che l'utente usa.

## Conservazione dei dati

L'app salva sul dispositivo, nel proprio contenitore:

- la libreria, i progressi e le impostazioni (database SwiftData)
- i file importati, le copertine, i capitoli e gli episodi scaricati
- le estensioni installate e i dati dei siti delle sorgenti (cookie e cache web)
- le password e i token dei server, nel Portachiavi del dispositivo

Se la sincronizzazione iCloud è attiva, la parte descritta in «Sincronizzazione iCloud» è conservata anche nel database privato CloudKit dell'utente.

## Conservazione e cancellazione

- Serie, download, estensioni e server si rimuovono dall'app.
- Nella pagina Archiviazione delle impostazioni si possono liberare download, file temporanei e dati dei siti (cookie e cache).
- La disinstallazione dell'app rimuove i dati locali, nei limiti del comportamento del sistema operativo.
- I dati sincronizzati in iCloud si possono eliminare da Impostazioni › [nome utente] › iCloud › Gestisci spazio.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

rManga non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi. I contenuti disponibili dipendono dalle sorgenti e dai server che l'utente aggiunge.

## Sicurezza

Le password e i token dei server sono conservati nel Portachiavi di iOS. L'app si affida ai meccanismi di sicurezza di iOS e iPadOS per gli altri dati sul dispositivo; i dati sincronizzati sono gestiti da iCloud secondo le condizioni di Apple.

Nessun metodo di trasmissione o di archiviazione può essere garantito come completamente sicuro, in particolare verso siti e server di terze parti.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
