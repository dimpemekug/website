---
title: "Introduzione a rExif"
description: "Panoramica di rExif per macOS: architettura SwiftUI nativa, anteprima arancione non distruttiva e modifica di metadati foto e video in blocco."
project: "rexif"
order: 1
section: "Iniziare"
---

## Cos'è rExif

**rExif** è un editor nativo di metadati per foto e video su macOS (sviluppato in SwiftUI per macOS 15 Sequoia o successivo, per Mac con Apple Silicon e Intel).

È pensato per risolvere in modo rapido e sicuro i problemi più comuni delle librerie di foto e video:
- Date di scatto errate o assenti (orologi della fotocamera non aggiornati, cambi di fuso orario, esportazioni da cloud).
- Foto senza posizione GPS.
- Nomi di file criptici o non ordinabili (`_DSC0421.JPG`, screenshot, salvataggi WhatsApp).
- Campi autore, copyright, parole chiave e valutazioni da uniformare per cataloghi professionali.
- File da ripulire prima di condividerli online, togliendo posizione e dati personali.

## Principi

1. **Anteprima delle modifiche in arancione**: nessuna modifica viene scritta sul disco finché non premi **Salva** (`⌘S`). Ogni valore calcolato o modificato compare in arancione nella tabella e nell'inspector, così puoi controllare il risultato riga per riga.
2. **Scrittura senza ricompressione**:
   - **JPEG**: riscritto con `CGImageDestinationCopyImageSource`, unendo solo i tag modificati senza toccare i pixel.
   - **HEIC, PNG, TIFF**: copia completa dei dati dell'immagine con sostituzione dei soli metadati.
   - **MOV, MP4, M4V**: esportazione *passthrough* con modifica diretta degli atomi QuickTime (`mvhd`, `tkhd`, `mdhd`), senza ricodificare audio o video.
   - **RAW (CR2, CR3, NEF, ARW, DNG, RAF…) e video non riscrivibili (AVI, MKV, WMV, MTS…)**: il file originale non viene mai toccato; le modifiche vengono scritte in un file sidecar `.xmp` standard accanto al file, letto da Adobe Lightroom, Bridge e Premiere.
3. **Privacy**: l'app lavora nella sandbox di macOS e non ha server propri, SDK di terze parti, account o analytics. Le uniche connessioni sono quelle dei framework Apple MapKit e Core Location quando usi la mappa, la ricerca dei luoghi o il calcolo di città e paese dalle coordinate.
4. **Sicurezza dei dati**: la sovrascrittura passa da un file temporaneo e da un clone APFS. Se si interrompe (es. disco scollegato), l'originale viene ripristinato automaticamente oppure ne resta una copia completa, al limite in `Application Support/Recupero`.

## Modalità di visualizzazione

Dalla barra degli strumenti o con una scorciatoia puoi passare da una modalità all'altra:
- **Come tabella** (`⌃⌘1`): elenco completo con miniature ridimensionabili (`⌘+`, `⌘-`), colonne ordinabili e selezione multipla.
- **Come mappa** (`⌃⌘2`): tutti gli elementi con una posizione su una mappa di Apple Maps, ciascuno con il suo segnaposto.

## Prossimi passi

- [Installazione e requisiti](/progetti/rexif/docs/installazione): piattaforme, sandbox e integrazione con la libreria di Foto.
- [Gestione e correzione delle date](/progetti/rexif/docs/gestione-date): spostamento di intervalli, correzione dell'orologio della fotocamera e date da Google Takeout.
- [Geolocalizzazione e Apple Maps](/progetti/rexif/docs/geolocalizzazione-mappa): posizione GPS, tracce GPX e città e paese dalle coordinate.
- [Metadati testuali e copyright](/progetti/rexif/docs/metadati-testuali-iptc): modelli con segnaposto, parole chiave e valutazioni a stelle.
- [Rinomina in blocco e CSV](/progetti/rexif/docs/rinomina-esportazione-batch): modelli di rinomina ed esportazione e importazione dei metadati in CSV.
- [Pulizia e copie senza dati personali](/progetti/rexif/docs/pulizia-metadati): esportazione di copie da condividere.
- [Formati e sidecar XMP](/progetti/rexif/docs/formati-e-sidecar): dettagli tecnici su MOV/MP4, RAW e limiti noti.
- [Scorciatoie e selezioni rapide](/progetti/rexif/docs/scorciatoie-filtri): elenco delle scorciatoie da tastiera e del menu Seleziona.
