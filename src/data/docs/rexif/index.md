---
title: "Introduzione a rExif"
description: "Panoramica di rExif per macOS: architettura SwiftUI nativa, anteprima arancione non distruttiva e modifica di metadati foto e video in blocco."
project: "rexif"
order: 1
section: "Iniziare"
---

## Cos'è rExif

**rExif** è l'editor nativo di metadati per foto e video su macOS (sviluppato in SwiftUI per macOS 15 Sequoia o successivo, con supporto universale Apple Silicon e Intel).

È progettato per risolvere in modo rapido e sicuro tutti i problemi comuni delle librerie multimediali:
- Date di scatto errate o assenti (orologi della fotocamera non aggiornati, cambi di fuso orario, esportazioni da cloud).
- Foto prive di geolocalizzazione GPS.
- Nomi di file criptici o non ordinabili (`_DSC0421.JPG`, screenshot, salvataggi WhatsApp).
- Campi autore, copyright, parole chiave e valutazioni da uniformare per cataloghi professionali.
- Necessità di igienizzare i file prima di condividerli online rimuovendo posizioni e dati personali.

## Principi di Progettazione

1. **Anteprima delle modifiche in arancione**: Nessuna modifica viene scritta sul disco finché non premi **Salva** (`⌘S`). Ogni valore calcolato o modificato compare evidenziato in arancione nella tabella e nell'inspector, permettendo di verificare riga per riga il risultato.
2. **Scrittura Non Distruttiva (Zero Ricompressione)**:
   - **JPEG**: Riscritto tramite `CGImageDestinationCopyImageSource`, fondendo unicamente i tag modificati senza toccare la matrice dei pixel.
   - **HEIC, PNG, TIFF**: Copia integrale dei dati immagine con sostituzione mirata del blocco metadati.
   - **MOV, MP4, M4V**: Esportazione *passthrough* con patch binaria diretta degli atomi QuickTime (`mvhd`, `tkhd`, `mdhd`) senza ricodificare audio o video.
   - **RAW (CR2, CR3, NEF, ARW, DNG, RAF...) e video non riscrivibili (AVI, MKV, WMV, MTS)**: Il file originale non viene mai toccato sul disco; le modifiche vengono scritte in un file sidecar `.xmp` standard adiacente, letto da Adobe Lightroom, Bridge e Premiere.
3. **Privacy Assoluta & Zero Rete Proprietaria**: L'app opera all'interno della Sandbox di macOS (`com.dimpemekug.rexif`). Non contiene server proprietari, SDK di terze parti, account o analytics. Le sole chiamate di rete sono gestite direttamente dai framework Apple MapKit e Core Location quando l'utente usa le funzioni di mappa o ricerca luogo.
4. **Sicurezza dei Dati su Disco**: La sovrascrittura avviene tramite file temporaneo e cloni APFS. In caso di interruzione imprevista (es. disco scollegato), l'originale viene ripristinato automaticamente o conservato come copia di riserva in `Application Support/Recupero`.

## Modalità di Visualizzazione

Dalla barra degli strumenti o tramite scorciatoia da tastiera puoi alternare tra due modalità:
- **Vista Tabella** (`⌃⌘1`): Elenco completo con miniature ridimensionabili (`⌘+`, `⌘-`), colonne ordinabili e personalizzabili, e selezione multipla.
- **Vista Mappa** (`⌃⌘2`): Visualizzazione geografica su Apple Maps di tutti gli elementi georeferenziati, con raggruppamento dei pin per località.

## Prossimi Passi

- [Installazione e Requisiti](/progetti/rexif/docs/installazione): Piattaforme, sandbox e integrazione con la libreria Apple Foto.
- [Gestione e Correzione Date](/progetti/rexif/docs/gestione-date): Spostamento intervalli, correzione orologio da foto e importazione da Google Takeout.
- [Geolocalizzazione e Apple Maps](/progetti/rexif/docs/geolocalizzazione-mappa): Assegnazione GPS, tracce GPX e reverse geocoding toponomastico.
- [Metadati Testuali e Copyright](/progetti/rexif/docs/metadati-testuali-iptc): Modelli con segnaposto, parole chiave e valutazioni a stelle.
- [Modifiche in Blocco e Rinomina](/progetti/rexif/docs/rinomina-esportazione-batch): Finestra batch (`⇧⌘D`), schemi di rinomina ed esportazione/importazione CSV.
- [Pulizia e Copie Sanificate](/progetti/rexif/docs/pulizia-metadati): Esportazione di copie prive di dati personali.
- [Dettagli Formati e Sidecar XMP](/progetti/rexif/docs/formati-e-sidecar): Specifiche tecniche su MOV/MP4, RAW e limiti noti.
- [Scorciatoie e Selezioni Rapide](/progetti/rexif/docs/scorciatoie-filtri): Elenco completo delle scorciatoie da tastiera e dei filtri intelligenti.
