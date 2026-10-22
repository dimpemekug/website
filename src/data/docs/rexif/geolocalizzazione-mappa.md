---
title: "Geolocalizzazione e Apple Maps"
description: "Posizione GPS dalla mappa, da coordinate incollate, da una traccia GPX o dalla foto più vicina nel tempo, e città e paese dalle coordinate in rExif."
project: "rexif"
order: 4
section: "Guide d'uso"
---

## Assegnare una posizione

rExif usa **Apple Maps** sia nel pannello laterale (inspector) sia nella vista **Come mappa** (`⌃⌘2`).

Puoi assegnare una posizione in diversi modi:
- **Trascinamento**: seleziona una o più foto e rilasciale sul punto giusto della mappa.
- **⌥-clic**: fai clic sulla mappa tenendo premuto `⌥` per assegnare le coordinate di quel punto.
- **Coordinate incollate**: copia le coordinate da Google Maps o Mappe (es. `45.4642, 9.1900`) e incollale nel campo della posizione nell'inspector.
- **Ricerca per nome**: digita il nome di un luogo o un indirizzo (`MKLocalSearch`) per centrare la mappa e assegnare le coordinate con un clic.

## Posizione in blocco (`⇧⌘D`)

Nella finestra **Modifiche in blocco**, la scheda *Posizione* calcola la posizione di ogni elemento da una di queste fonti.

### Dalla foto più vicina nel tempo
Se in viaggio hai scattato con una fotocamera senza GPS e insieme con uno smartphone che registra la posizione:
- rExif confronta l'ora delle foto senza posizione con quella delle foto che ce l'hanno;
- a ciascuna assegna la posizione della foto scattata nel momento più vicino.

### Da traccia GPX
Se hai una traccia `.gpx` registrata con un orologio sportivo, un'app di fitness o un navigatore:
1. scegli il file GPX nella scheda;
2. rExif calcola, interpolando tra i punti della traccia, la posizione corrispondente all'ora di scatto di ogni foto.

### Da JSON di Google Takeout
Se la posizione è nei file `.json` esportati da Google Foto, rExif legge le coordinate (`geoData`: latitudine, longitudine, altitudine) e le scrive nei metadati.

## Città e paese dalle coordinate

Dal menu **Metadati** › **Città e paese dalle coordinate**:
- rExif usa la geocodifica inversa di Apple (`CLGeocoder`);
- compila **città**, **regione o provincia** e **paese** nei campi IPTC (`City`, `Province-State`, `Country`) e XMP (`photoshop:City`, `photoshop:State`, `photoshop:Country`);
- ai server di Apple vengono inviate solo le coordinate, mai le immagini.

## Togliere la posizione

Per eliminare la posizione (per esempio prima di pubblicare una foto):
- usa il pulsante di rimozione accanto alle coordinate nell'inspector oppure **Rimuovi posizione** nel menu contestuale;
- le coordinate vengono cancellate da tutti i tag GPS e la modifica compare in arancione fino al salvataggio.
