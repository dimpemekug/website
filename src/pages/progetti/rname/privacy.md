---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rName"
description: "Informativa completa sulla privacy dell'app rName: quali dati vengono trattati, come vengono gestiti i file e perché nessun dato lascia il Mac."
---

Ultimo aggiornamento: 12 ottobre 2026

Questa Informativa sulla Privacy descrive come **rName** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- L'app non si connette a Internet: non ha il permesso di rete, quindi macOS le impedisce qualsiasi connessione
- I file vengono rinominati interamente sul Mac e non vengono mai caricati su server, né dello sviluppatore né di terze parti
- rName non apre il contenuto dei file: legge il nome, la dimensione e le date, non ciò che c'è dentro

## Dati trattati dall'app

rName tratta esclusivamente:

- i file e le cartelle che l'utente sceglie: trascinati nella finestra o sull'icona nel Dock, scelti con «Scegli una cartella…» o «Aggiungi singoli file…», oppure aperti con «Apri con…» dal Finder
- di ciascun file: il nome, il percorso, la dimensione e le date di creazione e modifica. Queste ultime servono a ordinare l'elenco e alla regola «Data e ora»
- le preferenze dell'app: aspetto, lingua, ordinamento predefinito, opzioni sui file e sulle regole, preset salvati

rName **non legge il contenuto dei file**: non ne apre i dati, non ne estrae metadati interni
(EXIF e simili) e non ne crea anteprime. L'unica operazione che compie sul disco è cambiare
il nome di un file, su richiesta esplicita dell'utente.

L'elenco dei file aperti non viene salvato e si svuota alla chiusura dell'app. Le regole
vengono conservate fra un avvio e l'altro solo se l'utente attiva l'opzione corrispondente
in Impostazioni › File.

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati
dell'utente. L'app non comunica con alcun server.

Tutti i dati restano sul Mac dell'utente.

## Permessi sulle cartelle

Rinominare un file richiede il permesso di modificare la **cartella che lo contiene**, non il
singolo file. Per questo rName chiede l'accesso alla cartella la prima volta che deve
lavorarci.

Il permesso concesso viene conservato in un *segnalibro con ambito di sicurezza*
(security-scoped bookmark), salvato nelle preferenze dell'app dentro il container della
sandbox. È un riferimento che vale solo per rName e solo su quel Mac: non contiene il
contenuto della cartella e non è leggibile da altre app.

L'elenco completo delle cartelle autorizzate è visibile in **Impostazioni › Permessi**, dove
ogni permesso può essere revocato singolarmente o tutto insieme. Revocare non tocca alcun
file: comporta solo che il permesso verrà chiesto di nuovo alla prossima occasione.

## Cosa fa e cosa non fa sui file

rName rinomina: non copia, non sposta, non elimina e non modifica il contenuto dei file.

La rinomina avviene in due fasi, passando da un nome temporaneo, perché così funzionano
anche lo scambio di due nomi fra loro e il cambio delle sole maiuscole. Se la seconda fase
non riesce, il file viene riportato al nome originale: nessun file resta con il nome
temporaneo.

Prima di ogni operazione l'app controlla i conflitti — nomi che si ripeterebbero, file già
esistenti sul disco, caratteri non validi, nomi troppo lunghi — ed esclude i file
interessati invece di procedere.

## Servizi di terze parti

rName non utilizza servizi di terze parti. Non contiene SDK di analytics, pubblicità, crash
reporting o altri servizi esterni.

## Sincronizzazione e cloud

rName non offre funzioni di sincronizzazione e non usa iCloud. Se l'utente rinomina file in
una cartella sincronizzata da un servizio cloud (ad esempio iCloud Drive o Dropbox), la
sincronizzazione è gestita da quel servizio e da macOS, non da rName.

## Dati diagnostici

rName non invia rapporti di errore allo sviluppatore. Se l'utente ha attivato nelle
Impostazioni di Sistema di macOS la condivisione delle analisi con gli sviluppatori, i
rapporti di crash sono raccolti e resi anonimi da Apple e messi a disposizione in forma
aggregata: quel meccanismo è di Apple, e l'utente può disattivarlo in Impostazioni di
Sistema › Privacy e sicurezza › Analisi e miglioramenti.

## Condivisione dei dati

rName non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

## Conservazione dei dati

L'app salva localmente sul Mac, nel proprio contenitore:

- le preferenze: aspetto, lingua, ordinamento predefinito, opzioni sui file e sulle regole, preset salvati
- le regole in uso, solo se l'utente attiva l'opzione in Impostazioni › File
- i permessi sulle cartelle, come segnalibri con ambito di sicurezza (vedi «Permessi sulle cartelle»)

L'elenco dei file aperti non viene salvato.

## Conservazione e cancellazione

- I file rinominati fanno parte dei file dell'utente e restano anche dopo la disinstallazione dell'app.
- I permessi sulle cartelle si revocano in Impostazioni › Permessi.
- La disinstallazione dell'app rimuove preferenze, preset e permessi, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

rName non è rivolta specificamente ai minori e non raccoglie dati da nessun utente,
indipendentemente dall'età.

## Sicurezza

L'app si affida ai meccanismi di sicurezza di macOS: App Sandbox, Hardened Runtime e i permessi di accesso alle cartelle concessi dall'utente.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Eventuali modifiche verranno pubblicate a questo stesso indirizzo, aggiornando la data in
cima alla pagina.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
