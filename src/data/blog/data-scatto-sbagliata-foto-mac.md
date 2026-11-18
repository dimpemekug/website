---
title: "Foto con la data sbagliata: come correggere la data di scatto su Mac"
seoTitle: "Foto con la data sbagliata: correggere la data su Mac"
description: Le foto di WhatsApp finiscono nel giorno in cui le hai salvate, le scansioni nel giorno della scansione, quelle della fotocamera un'ora avanti. Perché succede e come rimettere in ordine le date, una foto o mille insieme.
seoDescription: "Perché le foto di WhatsApp, le scansioni e le fotocamere hanno la data sbagliata e come correggere la data di scatto su Mac e iPhone, anche in blocco."
pubDatetime: 2026-11-18T10:00:00Z
related:
  - togliere-posizione-gps-foto-iphone-mac
  - convertire-heic-jpeg-mac-iphone
  - rinominare-file-in-blocco-mac
relatedProjects:
  - rexif
tags:
  - macos
  - photography
  - productivity
draft: false
---

Apri la libreria e le foto delle vacanze del 2019 compaiono in mezzo a quelle di ieri, le scansioni dell'album di famiglia risultano tutte scattate lo stesso pomeriggio e la cena di Capodanno sembra iniziata alle 23 del 30 dicembre. La causa è quasi sempre la stessa: il file non contiene la data di scatto giusta, e l'app che lo mostra ne usa un'altra. Il rimedio è scrivere la data corretta nel posto giusto, e farlo in blocco quando le foto sono tante.

<figure>
  <img
    src="https://images.unsplash.com/photo-1528569937393-ee892b976859?w=1200&q=80"
    alt="Mani che sfogliano un vecchio album con fotografie in bianco e nero di persone, cavalli e automobili d'epoca"
  />
  <figcaption class="text-center">
    Le foto stampate hanno una data scritta a mano sul retro; le loro scansioni, quasi sempre, quella del giorno in cui le hai digitalizzate.
  </figcaption>
</figure>

## Quale data conta

Un file fotografico può avere quattro date diverse, e le app non sempre usano la stessa.

1. **La data di scatto.** È scritta nei metadati EXIF dalla fotocamera nel momento in cui scatti. È quella che usano Foto, Lightroom e la maggior parte delle app per ordinare la libreria.
2. **La data di digitalizzazione.** Per una scansione è il giorno in cui l'immagine è diventata un file.
3. **La data di creazione del file.** La registra il sistema operativo quando il file nasce sul disco, e cambia spesso quando lo copi o lo scarichi.
4. **La data di modifica.** L'ultima volta che il file è stato toccato.

Quando la data di scatto manca, le app ripiegano sulle altre: ecco perché una foto vecchia può finire tra quelle di oggi.

## Perché le date si sbagliano

1. **Foto ricevute in chat.** WhatsApp, quando invia una foto normale, la ricomprime e i metadati in genere si perdono. Il nome del file però conserva la data in cui è stata inviata, nel formato `IMG-20230514-WA0001`.
2. **Scansioni.** Lo scanner scrive la data della scansione, non quella in cui è stata scattata la foto originale, che spesso non conosce nessuno con precisione.
3. **Orologio della fotocamera.** Una fotocamera non aggiorna da sola l'ora legale né il fuso orario: dopo un viaggio o a fine ottobre tutte le foto sono avanti o indietro di qualche ora.
4. **Fuso orario mancante.** Lo standard EXIF per anni non ha previsto il fuso orario accanto alla data di scatto. Se la foto non ha la posizione, le app lo indovinano, di solito con quello del Mac o del telefono che la importa.
5. **Esportazioni e servizi cloud.** Alcuni servizi, come Google Takeout, mettono la data reale in un file `.json` separato accanto alla foto, e chi importa solo l'immagine la perde.

## Con l'app Foto, su Mac e iPhone

1. **Su Mac.** Seleziona le foto e scegli **Immagine › Regola data e ora**. Indica la data giusta per la prima foto: le altre si spostano dello stesso intervallo e restano nello stesso ordine. Nella stessa finestra puoi cambiare il fuso orario scegliendo una città vicina.
2. **Su iPhone e iPad.** Apri la foto, scorri verso l'alto per vedere le informazioni e tocca **Regola** accanto alla data.

C'è un limite da conoscere: la correzione resta nella libreria di Foto e il file originale non cambia. Finché le foto vivono in Foto va benissimo, ma se le esporti per archiviarle altrove o le apri con un'altra app, potresti ritrovare la data vecchia.

## Correggere i file, anche mille insieme

Quando le foto stanno in cartelle e non nella libreria, o quando sono centinaia con problemi diversi, serve un'app che scriva la data direttamente nei metadati. [rExif](/progetti/rexif/), gratuita sul Mac App Store, copre i casi più comuni:

1. **Orologio della fotocamera sbagliato.** Se una foto ritrae un orologio o lo schermo di un telefono, inserisci l'ora vera di quello scatto: rExif calcola lo scarto al secondo e lo applica a tutte le foto della stessa fotocamera.
2. **Foto di WhatsApp e screenshot.** Ricava la data dal nome del file, da `IMG-20230514-WA0001` a `Screenshot 2023-05-14 at 12.34.56`, o dal nome della cartella, come `2019-07-04 Mare`.
3. **Google Takeout.** Legge la data reale dal `.json` che accompagna ogni foto.
4. **Scansioni senza data.** Assegna una data di partenza e un intervallo fisso, oppure calcola quelle mancanti dalle foto vicine nella serie.
5. **Date del file allineate.** Porta la data di creazione e di modifica del file alla data di scatto, così anche il Finder le ordina bene.

Ogni modifica compare in anteprima, foto per foto, prima di essere scritta; JPEG e HEIC vengono aggiornati senza ricomprimere l'immagine. Tutte le modalità sono descritte nella guida alla [gestione delle date](/progetti/rexif/docs/gestione-date/).

> **Suggerimento:** prima di partire per un viaggio, scatta una foto all'orologio del telefono con la fotocamera che userai. Al ritorno, quella foto ti dirà di quanto sbagliava l'orologio, e potrai correggere tutto il viaggio in un passaggio.

## Cosa tenere a mente

Una data giusta è ciò che tiene in ordine un archivio di foto negli anni: le ricerche per periodo, i ricordi automatici, la sequenza di un viaggio. Le correzioni fatte dentro una sola app restano lì, mentre quelle scritte nei metadati viaggiano con il file in qualsiasi programma o servizio. Se le tue foto devono durare più dell'app che usi oggi, vale la pena che la data giusta stia nel file.
