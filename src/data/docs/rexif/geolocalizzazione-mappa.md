---
title: "Geolocalizzazione e Apple Maps"
description: "Assegnazione coordinate, associazione da traccia GPX o foto vicina nel tempo, e reverse geocoding toponomastico."
project: "rexif"
order: 4
section: "Guide d'uso"
---

## Modalità di Geolocalizzazione

rExif integra il framework nativo **Apple Maps** sia nel pannello laterale (Inspector) sia come modalità a schermo intero (**Vista Mappa**, attivabile con `⌃⌘2`).

Puoi geolocalizzare le foto attraverso molteplici canali:

### 1. Interazione Diretta sulla Mappa
- **Trascinamento**: Seleziona una o più foto e rilasciale sul punto esatto della mappa.
- **⌥-clic (Option-clic)**: Clicca sulla mappa tenendo premuto il tasto `⌥` per posizionare il cursore GPS alle coordinate indicate.
- **Incolla Coordinate**: Copia le coordinate negli appunti da Google Maps o Apple Mappe (es. `45.4642, 9.1900`) e incollale nel campo di testo della posizione nell'inspector.
- **Cerca per Nome**: Digita il nome di un monumento, piazza o indirizzo (`MKLocalSearch`) per centrare la mappa e assegnare le coordinate con un clic.

## Assegnazione della Posizione in Blocco (`⇧⌘D`)

All'interno del pannello **Modifiche in blocco** (`⇧⌘D`), la scheda *Posizione* offre potenti algoritmi di automazione:

### Dalla Foto con GPS Più Vicina nel Tempo
Se durante un viaggio hai scattato fotografie con una reflex priva di GPS e contemporaneamente hai scattato qualche foto con il tuo smartphone geolocalizzato:
- rExif confronta i timestamp delle foto non georeferenziate con quelle dotate di coordinate GPS.
- Assegna a ciascuna foto la posizione dello scatto effettuato nel momento più vicino nel tempo.

### Da Traccia GPX (Interpolazione Temporale)
Se possiedi un file di traccia `.gpx` registrato con un fitness tracker, smartwatch o navigatore (Garmin, Strava, Apple Watch):
1. Seleziona la traccia GPX nella scheda di modifica in blocco.
2. rExif calcola per interpolazione lineare la posizione esatta corrispondente al secondo di scatto di ciascuna foto.

### Da File JSON di Google Takeout
Se i metadati di posizione sono archiviati nei file `.json` associati scaricati da Google Foto, rExif estrae le proprietà `geoData` (`latitude`, `longitude`, `altitude`) e le scrive nei tag EXIF.

## Città e Paese dalle Coordinate (Reverse Geocoding)

Dal menu **Metadati** > **Città e paese dalle coordinate**:
- rExif interroga il servizio di geocodifica inversa di sistema di Apple (`CLGeocoder`).
- Riconosce e compila automaticamente i campi:
  - Città (`IPTC:City` / `XMP:City`)
  - Regione / Provincia (`IPTC:Province-State`)
  - Nazione (`IPTC:Country-PrimaryLocationName`)
- L'operazione non trasmette immagini ai server Apple: vengono scambiate unicamente le coppie numeriche di coordinate geografiche.

## Rimozione della Posizione

Per rimuovere completamente la geolocalizzazione (ad esempio prima della pubblicazione online):
- Clicca sull'icona di cancellazione posizione nell'Inspector oppure seleziona **Rimuovi posizione** dal menu contestuale.
- Le coordinate vengono cancellate da tutti i tag GPS e la modifica compare evidenziata in arancione.
