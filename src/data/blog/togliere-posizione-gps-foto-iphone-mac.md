---
title: "Come togliere la posizione GPS dalle foto prima di condividerle"
seoTitle: "Togliere la posizione GPS dalle foto su iPhone e Mac"
description: Ogni foto scattata con il telefono può portarsi dietro le coordinate del luogo in cui è stata fatta. Dove finiscono, quali app le tolgono da sole e come condividere foto senza posizione da iPhone e Mac.
seoDescription: "Come togliere la posizione GPS dalle foto su iPhone e Mac prima di inviarle, quali app la eliminano da sole e quando invece resta nel file."
pubDatetime: 2026-11-18T08:00:00Z
related:
  - aprire-rar-protetto-mac
  - local-first-app-offline-sincronizzazione-2026
  - data-scatto-sbagliata-foto-mac
relatedProjects:
  - rexif
  - resizo
tags:
  - privacy
  - macos
  - mobile
draft: false
---

Mandi la foto del gatto sul divano, del bambino in giardino o dell'oggetto da vendere, e insieme all'immagine parte un'informazione che non si vede: le coordinate del punto in cui l'hai scattata, precise abbastanza da indicare il palazzo. Non succede sempre, dipende da come condividi e da quale app usi, ed è proprio questo il problema: è difficile sapere quando la posizione resta nel file. Per fortuna toglierla è facile, sia su iPhone sia su Mac.

<figure>
  <img
    src="https://images.unsplash.com/photo-1665054546585-11413bcdfb52?w=1200&q=80"
    alt="Persona di spalle che fotografa con lo smartphone una via di città con taxi gialli"
  />
  <figcaption class="text-center">
    Una foto scattata con il telefono può contenere anche le coordinate del luogo, invisibili nell'immagine.
  </figcaption>
</figure>

## Cosa c'è dentro una foto

Oltre ai pixel, una foto contiene i metadati EXIF: un insieme di campi scritti dalla fotocamera al momento dello scatto. Alcuni sono innocui, altri dicono molto di te.

1. **La posizione GPS.** Latitudine, longitudine e spesso altitudine. Basta incollarle in una mappa per vedere dove sei stato, e una serie di foto fatte a casa indica dove abiti.
2. **La data e l'ora.** Insieme alla posizione raccontano le tue abitudini: dove sei la sera, dove passi le vacanze.
3. **Il dispositivo.** Marca, modello, obiettivo e, nelle fotocamere, a volte il numero di serie, che collega tra loro foto pubblicate in posti diversi.
4. **Autore e copyright.** Il nome che hai impostato nella fotocamera o in un programma di fotoritocco.

Anche i video registrati con il telefono possono contenere la posizione. Su iPhone e iPad la registra l'app Fotocamera quando ha il permesso di usare la Localizzazione.

## Quando la posizione parte con la foto

Non esiste un elenco ufficiale di cosa fa ogni servizio, e i test pubblicati non sempre concordano. In linea generale:

1. **Social network.** Instagram e Facebook, nelle copie che mostrano agli altri, tolgono le coordinate. Il file originale però arriva comunque ai loro server.
2. **App di messaggi.** WhatsApp, quando invia una foto normale, la ricomprime e i metadati in genere si perdono. Se la mandi come documento, il file arriva intatto, posizione compresa.
3. **Email, AirDrop, cloud e chiavette.** Il file viaggia così com'è: chi lo riceve trova tutti i metadati.

L'unico modo per esserne sicuri è togliere la posizione prima di condividere, invece di contare su quello che farà l'app dall'altra parte.

## Su iPhone e iPad

1. **Togli la posizione a una sola condivisione.** Nell'app Foto seleziona le foto, tocca il pulsante di condivisione e poi **Opzioni** in alto. Disattiva **Posizione** e tocca Fine: sopra le Opzioni compare la scritta che la posizione non è inclusa. Vale solo per quell'invio, la foto nella libreria la conserva.
2. **Controlla cosa contiene una foto.** Aprila in Foto e scorri verso l'alto: se c'è una mappa con il luogo, la posizione è nel file.
3. **Smetti di registrarla.** In Impostazioni › Privacy e sicurezza › Localizzazione › Fotocamera scegli **Mai**: le foto nuove non avranno più le coordinate. Perdi però la mappa dei ricordi nell'app Foto, quindi molti preferiscono lasciarla attiva e toglierla al momento di condividere.

L'opzione nel pulsante di condivisione funziona solo partendo dall'app Foto o dalla Fotocamera. Se scegli la foto dall'interno di un'altra app, per esempio mentre scrivi un post, non c'è.

## Su Mac

1. **Esporta senza posizione da Foto.** Seleziona le foto, scegli **File › Esporta** e nella finestra di esportazione togli la spunta alle informazioni sulla posizione. Le copie esportate non hanno più le coordinate; gli originali nella libreria non cambiano.
2. **Nascondi la posizione nella libreria.** In Foto, **Immagine › Posizione › Nascondi posizione** la toglie dalle foto selezionate. Puoi sempre ripristinare quella originale dallo stesso menu.
3. **Toglila da un singolo file con Anteprima.** Apri la foto, scegli **Strumenti › Mostra Inspector**, poi la scheda delle informazioni e quella **GPS**: in fondo c'è il pulsante per rimuovere la posizione. Salva il file prima di chiuderlo. Se la scheda GPS non c'è, la foto non ha coordinate.

Anteprima e Foto si occupano solo della posizione. Data, modello del dispositivo, numero di serie e autore restano nel file.

## Ripulire molte foto insieme

Quando le foto sono tante, o vuoi togliere anche gli altri dati personali, conviene un'app che lavori in blocco. [rExif](/progetti/rexif/), gratuita sul Mac App Store, ha la funzione **Esporta copie senza dati personali**: crea copie senza GPS, numeri di serie e cronologia delle modifiche, lascia solo i campi che scegli (per esempio data e autore) e non ricomprime l'immagine. Gli originali restano intatti; i dettagli sono nella guida alla [pulizia dei metadati](/progetti/rexif/docs/pulizia-metadati/).

Se invece devi anche rimpicciolire le foto o convertirle da HEIC in JPEG per un sito o un modulo online, [Resizo](/progetti/resizo/) toglie i metadati, posizione compresa, già nell'impostazione iniziale. Entrambe lavorano sul Mac senza caricare le foto da nessuna parte, a differenza dei siti che promettono di ripulirle online e che per farlo devono riceverle.

> **Suggerimento:** prima di mettere in vendita un oggetto o pubblicare la foto di una stanza, guarda anche cosa si vede nell'immagine. Il numero civico, il campanello, la vista dalla finestra o un documento sulla scrivania rivelano il luogo anche quando i metadati sono puliti.

## Cosa tenere a mente

La posizione nelle foto è utile finché resta tua: ritrovi i ricordi su una mappa e ordini i viaggi per luogo. Il rischio nasce quando la foto esce dal telefono, perché a quel punto non decidi più tu chi la legge. Le app di messaggi e i social tolgono già molto, ma non tutto e non sempre; un'abitudine di pochi secondi prima di condividere, come disattivare la posizione o esportare una copia pulita, evita di dover sperare che lo abbia fatto qualcun altro.
