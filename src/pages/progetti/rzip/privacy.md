---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rZip"
description: "Informativa completa sulla privacy dell'app rZip: quali dati vengono trattati e perché archivi e file non lasciano mai il Mac e come vengono gestite le password."
---

Ultimo aggiornamento: 8 ottobre 2026

Questa Informativa sulla Privacy descrive come **rZip** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- rZip non si connette a Internet: l'app non ha il permesso di usare la rete
- Gli archivi e i file vengono letti, creati e modificati interamente sul Mac e non vengono mai inviati a server, né dello sviluppatore né di terze parti

## Dati trattati dall'app

rZip tratta esclusivamente:

- gli archivi che l'utente apre: con "Apri archivio…", trascinandoli nella finestra o sull'icona nel Dock, con "Apri con…" o un doppio clic dal Finder, o dall'elenco degli archivi recenti
- il contenuto di questi archivi: nomi, dimensioni, date e permessi delle voci, e il contenuto dei file che l'utente sceglie di vedere in anteprima
- i file e le cartelle che l'utente sceglie per creare un nuovo archivio o da aggiungere a un archivio esistente
- i file che l'app crea su richiesta dell'utente: archivi nuovi o modificati, elementi estratti nella destinazione scelta, elementi trascinati da un archivio verso il Finder o un'altra app
- le password degli archivi protetti, inserite dall'utente (vedi "Password")
- le preferenze dell'app (vedi "Conservazione dei dati")

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. rZip non comunica con alcun server, né dello sviluppatore né di terze parti: l'app non ha il permesso di usare la rete.

Tutti i dati restano sul Mac dell'utente.

## Archivi e file

Aprire un archivio non estrae nulla su disco: l'elenco dei file e le anteprime (immagini, PDF, testi) vengono letti in memoria.

I file vengono scritti su disco solo quando l'utente lo chiede:

- **Estrazione**: gli elementi scelti vengono scritti nella cartella di destinazione, senza mai sovrascrivere file esistenti.
- **Trascinamento verso il Finder**: l'elemento viene estratto in una cartella temporanea all'interno del contenitore dell'app, al momento del rilascio, e consegnato al Finder o all'app di destinazione. Le copie temporanee vengono eliminate all'avvio e all'uscita dall'app.
- **Creazione di un archivio**: il nuovo archivio viene scritto nella destinazione scelta.
- **Modifica di un archivio** (aggiunta o eliminazione di elementi): l'archivio aggiornato viene preparato in una cartella temporanea e sostituisce l'originale solo se l'operazione riesce.
- **Copia di riserva**: prima di modificare un archivio, rZip ne mette una copia nel Cestino dell'utente. L'opzione si può disattivare in Impostazioni › Generale.
- **Verifica dell'integrità**: tutti i dati vengono controllati in memoria, senza scrivere nulla.

## Password

Le password degli archivi protetti vengono usate solo per aprire, estrarre, verificare o modificare l'archivio a cui si riferiscono. Restano in memoria finché la finestra dell'archivio è aperta e non vengono mai salvate su disco, nel portachiavi o altrove.

Le password scelte per creare un nuovo archivio vengono usate solo per cifrarlo (AES-256) e non vengono conservate.

## Componenti di terze parti

rZip non contiene SDK di analytics, pubblicità, crash reporting o altri servizi esterni. Per leggere e scrivere gli archivi usa:

- **7-Zip** di Igor Pavlov (licenza GNU LGPL), incluso nell'app ed eseguito localmente sul Mac
- **libarchive**, la libreria di sistema di macOS

Nessuno dei due comunica con la rete.

## Permessi del dispositivo

rZip funziona all'interno della sandbox di macOS e può accedere solo ai file e alle cartelle che l'utente sceglie esplicitamente, trascinandoli, aprendoli o selezionandoli in un pannello di sistema.

Alcune funzioni hanno bisogno dell'accesso a una cartella intera: leggere gli archivi divisi in più volumi, estrarre accanto all'archivio, creare un archivio in più volumi. In questi casi rZip lo chiede con un pannello di sistema. Le cartelle autorizzate sono elencate in Impostazioni › Avanzate, da cui si possono rimuovere.

Per riaprire gli archivi recenti e le cartelle autorizzate dopo un riavvio, l'app salva un riferimento di sicurezza (security-scoped bookmark).

rZip non richiede l'accesso a fotocamera, microfono, contatti, calendari, posizione, libreria Foto o autenticazione biometrica.

## Appunti

Il comando Copia e le voci "Copia nome" e "Copia percorso" del menu contestuale mettono negli appunti di macOS i nomi o i percorsi degli elementi selezionati, solo quando l'utente li sceglie.

## Condivisione dei dati

rZip non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

## Conservazione dei dati

L'app salva localmente sul Mac, nel proprio contenitore:

- le preferenze (`UserDefaults`): aspetto, numero di archivi recenti, opzioni di esplorazione, estrazione, creazione e modifica
- l'elenco degli archivi recenti e delle cartelle autorizzate, come riferimenti di sicurezza

## Conservazione e cancellazione

- Gli archivi creati, modificati o estratti fanno parte dei file dell'utente e restano anche dopo la disinstallazione dell'app.
- L'elenco dei recenti si cancella con "Cancella" nella finestra di benvenuto, con File › Apri recenti › Cancella menu o in Impostazioni › Generale.
- Le cartelle autorizzate si rimuovono in Impostazioni › Avanzate.
- Le copie di riserva nel Cestino si eliminano svuotando il Cestino.
- La disinstallazione dell'app rimuove preferenze e riferimenti, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

rZip non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso ai file concessi dall'utente. Gli archivi creati con password sono cifrati con AES-256.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
