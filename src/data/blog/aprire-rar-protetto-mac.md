---
title: "Come aprire un RAR protetto da password su Mac"
description: Il Mac non apre i RAR da solo, tanto meno quelli con password. Perché succede, cosa cambia tra file e nomi cifrati, come estrarli e quando un archivio protetto è un allarme.
seoDescription: "Come aprire un archivio RAR protetto da password sul Mac: quale app usare, cosa fare se la password non va e come riconoscere un archivio sospetto."
pubDatetime: 2026-11-12T09:00:00Z
related:
  - torrent-sicuri-mac-2026
  - tagliare-video-senza-ricodifica-mac
  - note-markdown-collegate-mac-iphone
relatedProjects:
  - archiva
tags:
  - macos
  - privacy
  - cybersecurity
draft: false
---

Ti arriva un file `.rar` con la sua password, fai doppio clic e il Mac non sa che farne. Non è un guasto: macOS apre gli ZIP da solo, ma non ha mai incluso uno strumento per i RAR, e con un archivio protetto le cose si complicano ancora un po'. Serve un'app adatta, la password giusta e, prima di tutto, la certezza che l'archivio venga da qualcuno di cui ti fidi.

<figure>
  <img
    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80"
    alt="Persona al tavolino di un bar con un MacBook aperto su un'app di messaggi e uno smartphone in mano"
  />
  <figcaption class="text-center">
    Gli archivi protetti arrivano spesso per email o in chat, insieme alla loro password.
  </figcaption>
</figure>

## Perché il Mac non apre i RAR

Utility Compressione Archivi, lo strumento che macOS usa quando fai doppio clic su uno ZIP, non gestisce il formato RAR. RAR è un formato proprietario di RARLAB, l'azienda di WinRAR: la compressione non si può includere in altri programmi senza una licenza commerciale, mentre la lettura e l'estrazione sono possibili. Per questo sul Mac i RAR si aprono con app di terze parti, ma nessuna app diversa da quelle di RARLAB può crearne di nuovi.

## Protetto non vuol dire sempre la stessa cosa

Un RAR può essere protetto in due modi, e capire quale hai davanti spiega il comportamento dell'app.

1. **Solo il contenuto è cifrato.** Vedi l'elenco dei file, i nomi e le dimensioni; la password serve quando estrai o apri un file.
2. **Anche i nomi sono cifrati.** È l'opzione «Cifra nomi file» di WinRAR (`-hp` da riga di comando): senza password non si vede nemmeno cosa contiene l'archivio, e la richiesta arriva appena lo apri.

La cifratura è seria. I RAR in formato 5, introdotto con WinRAR 5.0, usano AES-256 con una derivazione della chiave basata su PBKDF2; i vecchi RAR in formato 4 usano AES-128. La documentazione di WinRAR è esplicita: se la password va persa, nemmeno l'autore del programma può estrarre i file. Le password distinguono tra maiuscole e minuscole.

## Come aprirlo su Mac con Archiva

Esistono diverse app gratuite che leggono i RAR. [Archiva](/progetti/archiva/), disponibile gratis sul Mac App Store, apre anche quelli protetti, compresi quelli con i nomi cifrati, e lavora tutto sul Mac senza connettersi a Internet.

1. **Apri l'archivio.** Trascinalo sulla finestra o sull'icona nel Dock. Se i nomi sono cifrati, Archiva chiede subito la password; altrimenti mostra l'elenco dei file.
2. **Guarda prima di estrarre.** Puoi sfogliare le cartelle, cercare e vedere l'anteprima di foto, PDF e testi senza scrivere nulla sul disco.
3. **Estrai tutto o solo quello che serve.** Seleziona i file e scegli la destinazione, oppure trascinali nel Finder: per i file protetti la password viene chiesta al rilascio.
4. **Se l'archivio è in più parti, apri una parte qualsiasi.** `archivio.part1.rar`, `archivio.part2.rar` o `archivio.rar`, `archivio.r00`: con il permesso sulla cartella, Archiva trova gli altri volumi da solo.

La password resta in memoria finché la finestra è aperta e non viene mai salvata su disco. Se vuoi tenere l'archivio in un formato che si crea anche sul Mac, **Converti in un altro formato…** lo trasforma in 7z o ZIP e ripropone la stessa password. I dettagli sono nella guida agli [archivi protetti](/progetti/archiva/docs/archivi-protetti/).

## Quando la password non funziona

1. **Maiuscole, tastiera e spazi.** La password distingue tra maiuscole e minuscole; controlla il Blocco maiuscole e il layout della tastiera, e attenzione agli spazi copiati insieme al testo da un'email o da una chat.
2. **Una parte mancante.** Se l'estrazione si ferma a metà, spesso manca un volume: tutte le parti devono stare nella stessa cartella, con i nomi originali.
3. **Un archivio danneggiato.** Un download interrotto produce errori che sembrano problemi di password. **File › Verifica integrità** controlla l'archivio in memoria e indica i file danneggiati o troncati.
4. **Una password persa.** Non c'è un modo per recuperarla: si può solo provare combinazioni a forza bruta, che con una password lunga e AES-256 non finisce in tempi umani. Conviene chiederla di nuovo a chi l'ha mandata.

## Quando un archivio protetto è un campanello d'allarme

La password ha anche un uso meno innocente. Un archivio cifrato non si può analizzare senza la chiave, e per questo chi diffonde malware lo usa per superare i controlli dei filtri di posta: la password è scritta nel messaggio, o arriva per SMS o in chat. Secondo un'analisi di Cofense riportata da TechRadar, gli archivi protetti sono una piccola parte di quelli malevoli, ma sfuggono spesso ai controlli. Succede anche con i download: un video o un disco chiusi in un archivio con password sono uno dei segnali tipici dei [file falsi nei torrent](/posts/torrent-sicuri-mac-2026/).

Prima di estrarre, guarda cosa c'è dentro. Se un archivio che dovrebbe contenere documenti o foto contiene un'app (`.app`), un pacchetto di installazione (`.pkg`), un'immagine disco (`.dmg`) o uno script, non aprirlo. Archiva mostra di un'app contenuta nell'archivio la firma e la notarizzazione di Apple prima che arrivi sul disco.

> **Suggerimento:** se sei tu a dover mandare file riservati, crea un archivio 7z con i nomi cifrati e una password lunga, e mandala per un canale diverso da quello del file: l'archivio per email, la password a voce o in un messaggio. Chi intercetta uno dei due non ha niente in mano.

## Cosa tenere a mente

Il RAR resta molto diffuso, soprattutto nei file che arrivano da Windows, e il Mac continuerà ad aver bisogno di un'app per aprirlo. La parte tecnica è semplice: un lettore adatto, tutte le parti dell'archivio e la password esatta. La parte che richiede attenzione è un'altra: un archivio protetto chiede fiducia, e prima di inserire la password vale la pena sapere da chi arriva e cosa contiene.
