---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rExif"
description: "Informativa completa sulla privacy dell'app rExif: quali dati vengono trattati, come vengono modificati i file e perché foto e video non lasciano mai il Mac."
---

Ultimo aggiornamento: 7 ottobre 2026

Questa Informativa sulla Privacy descrive come **rExif** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- Le foto e i video vengono letti e modificati interamente sul Mac e non vengono mai caricati su server, né dello sviluppatore né di terze parti
- Lo sviluppatore non gestisce alcun server: le sole connessioni di rete sono verso i servizi di Apple per la mappa e i nomi dei luoghi (vedi "Servizi di Apple che usano la rete")

## Dati trattati dall'app

rExif tratta esclusivamente:

- le foto e i video che l'utente sceglie di aggiungere: con "Aggiungi foto e video…", trascinandoli nella finestra o sull'icona nel Dock, con "Apri con…" dal Finder, o aggiungendo intere cartelle
- gli elementi della libreria Foto che l'utente sceglie nel selettore di sistema (vedi "Libreria Foto")
- i metadati di questi elementi: date di scatto, digitalizzazione, creazione e modifica, posizione GPS, fotocamera e obiettivo, descrizione, autore, copyright, città, regione e paese, parole chiave e valutazione, nome del file
- i file che l'utente sceglie di usare durante la modifica: tracce GPX, file JSON di Google Takeout che si trovano accanto alle foto, file CSV da importare, file .xmp esistenti accanto ai file
- i file che l'app crea su richiesta dell'utente: file .xmp accanto ai file che non si possono riscrivere, file CSV esportati, copie senza dati personali, originali esportati dalla libreria Foto
- la sessione: l'elenco degli elementi aperti, per riaprirli all'avvio successivo (disattivabile in Impostazioni)
- le preferenze dell'app: lingua dell'interfaccia, aspetto, dimensione delle miniature, colonne della tabella

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. rExif non comunica con alcun server dello sviluppatore né di terze parti diverse da Apple.

Tutti i dati restano sul Mac dell'utente, salvo quanto descritto in "Servizi di Apple che usano la rete".

## Foto, video e file originali

rExif serve a modificare i metadati dei file: quando l'utente preme Salva, le modifiche vengono scritte nei file scelti (oppure, per i formati che non si possono riscrivere, come i RAW, in un file .xmp accanto). Le immagini non vengono ricompresse e il contenuto di audio e video non viene ricodificato.

Prima di salvare, ogni modifica è visibile in anteprima e si può annullare o ripristinare. Le modifiche non salvate non vengono conservate alla chiusura dell'app.

Se la scrittura di un file si interrompe (ad esempio per un disco pieno), rExif ripristina il file originale oppure ne conserva una copia completa accanto al file o nella cartella Application Support del contenitore dell'app, e lo indica all'utente.

## Libreria Foto

Se l'utente sceglie elementi dalla libreria Foto, macOS chiede il permesso di accedervi. L'accesso serve a:

- leggere data e posizione degli elementi scelti e mostrarne le miniature
- modificare data e posizione di quegli elementi, solo quando l'utente salva; macOS chiede ogni volta una conferma
- esportare gli originali in una cartella scelta dall'utente, se l'utente lo chiede

Se la libreria usa Foto di iCloud, per mostrare le miniature o esportare gli originali macOS può scaricarli da iCloud. Il trasferimento avviene tra il Mac e iCloud, gestito da macOS.

Il permesso può essere revocato in qualsiasi momento da Impostazioni di Sistema › Privacy e sicurezza › Foto.

## Servizi di Apple che usano la rete

Alcune funzioni usano servizi di Apple integrati in macOS, che richiedono una connessione a Internet. rExif non invia nulla a questi servizi se l'utente non usa le funzioni corrispondenti:

- **Mappa** (inspector e vista mappa): per disegnare la mappa, MapKit scarica da Apple le porzioni di mappa della zona mostrata.
- **Ricerca di un luogo per nome**: il testo cercato viene inviato al servizio di ricerca di Apple Mappe per trovare le coordinate.
- **Città e paese dalle coordinate**: le coordinate degli elementi vengono inviate al servizio di geocodifica di Apple, che restituisce il nome del luogo. Per le foto scattate nello stesso posto si fa una sola richiesta.
- **Mostra in Mappe**: apre l'app Mappe (o il sito maps.apple.com) sulle coordinate dell'elemento, con il suo nome.

Questi dati vengono trattati da Apple secondo la sua [informativa sulla privacy](https://www.apple.com/legal/privacy/). Lo sviluppatore di rExif non li riceve.

## Componenti di terze parti

rExif non contiene SDK di analytics, pubblicità, crash reporting o altri servizi esterni. Usa solo i framework di macOS (ImageIO, AVFoundation, PhotoKit, MapKit, Core Location, Quick Look).

## Sincronizzazione e cloud

rExif non offre funzioni di sincronizzazione e non usa iCloud. Se l'utente modifica file in una cartella sincronizzata da un servizio cloud (ad esempio iCloud Drive), la sincronizzazione è gestita da quel servizio e da macOS, non da rExif.

## Permessi del dispositivo

rExif funziona all'interno della sandbox di macOS e può accedere solo ai file e alle cartelle che l'utente sceglie esplicitamente, trascinandoli, aprendoli o selezionandoli in un pannello di sistema. Per rinominare un file o creare il suo .xmp serve l'accesso alla cartella: se l'utente ha aggiunto solo singoli file, rExif lo chiede con un pannello di sistema.

Per riaprire la sessione dopo un riavvio, l'app salva un riferimento di sicurezza (security-scoped bookmark) ai file e alle cartelle aggiunti.

L'app può chiedere l'accesso alla libreria Foto (vedi sopra). Non richiede l'accesso a fotocamera, microfono, contatti, calendari, posizione del Mac o autenticazione biometrica. Le posizioni mostrate e modificate sono quelle registrate nelle foto, non quella del Mac.

## Appunti

Le funzioni "Copia" del menu contestuale (ad esempio coordinate, nome o percorso del file) mettono il testo negli appunti di macOS solo quando l'utente le sceglie. Copia e incolla dei metadati tra elementi avviene all'interno dell'app.

## Condivisione dei dati

rExif non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

## Conservazione dei dati

L'app salva localmente sul Mac:

- le preferenze (`UserDefaults`) elencate nella sezione "Dati trattati dall'app"
- la sessione: percorsi dei file, identificativi degli elementi di Foto e riferimenti di sicurezza dei file e delle cartelle aggiunti
- le eventuali copie di recupero di un salvataggio interrotto, nella cartella Application Support del contenitore dell'app
- i file creati su richiesta dell'utente, nella destinazione scelta

## Conservazione e cancellazione

- Le modifiche salvate fanno parte dei file dell'utente e restano anche dopo la disinstallazione dell'app.
- La sessione si cancella svuotando la lista (Archivio › Svuota lista) o disattivando "Riapri all'avvio gli elementi della sessione precedente" in Impostazioni.
- La disinstallazione dell'app rimuove preferenze e sessione, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

rExif non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso ai file e alla libreria Foto concessi dall'utente.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Eventuali modifiche verranno pubblicate a questo stesso indirizzo, aggiornando la data in cima alla pagina.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
