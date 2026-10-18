---
title: "Metadati Testuali, IPTC e Copyright"
description: "Modifica di autore, copyright con segnaposto, parole chiave, rating a stelle con scorciatoie e compatibilità con Lightroom."
project: "rexif"
order: 5
section: "Guide d'uso"
---

## Campi Testuali e Attrezzatura

rExif consente di ispezionare e compilare tutti i principali campi descrittivi e di attribuzione fotografica:

- **Fotocamera e Obiettivo**: Marca (`Make`), Modello (`Model`) e Obiettivo (`LensModel`).
- **Descrizione / Didascalia**: Campo `ImageDescription` / `Caption-Abstract` per annotazioni sullo scatto. Può essere importata anche dai file JSON di Google Takeout.
- **Autore / Fotografo**: Campo `Artist` (EXIF) e `By-line` (IPTC).
- **Copyright**: Dichiarazione legale di proprietà intellettuale (`CopyrightNotice`).

## Modelli con Segnaposto Dinamici (`⇧⌘D`)

Nel pannello **Modifiche in blocco** > **Testo**, puoi compilare i campi utilizzando token dinamici che vengono risolti per ciascuna immagine:

- `{anno}`: L'anno della data di scatto (es. `2026`).
- `{fotocamera}`: Il modello della fotocamera rilevato nel file.
- `{nome}`: Il nome del file originale (senza estensione).
- `{n}`: Numeratore progressivo (es. 1, 2, 3...).
- `{citta}`: Città ottenuta dalla geolocalizzazione.

**Esempi pratici di applicazione:**
```text
Autore:    Mario Rossi
Copyright: © {anno} Mario Rossi. Tutti i diritti riservati.
Note:      Scattata con {fotocamera} a {citta} (#{n})
```

## Trova e Sostituisci

All'interno della stessa scheda puoi eseguire ricerche e sostituzioni di testo in blocco:
- Sostituisci refusi o aggiorna nomi e diciture legali su centinaia di foto in un colpo solo.
- Puoi limitare l'operazione a campi specifici (es. solo Descrizione o solo Copyright) oppure estenderla a tutti i testi.
- I risultati compaiono evidenziati in arancione prima del salvataggio.

## Parole Chiave (Keywords)

L'editor delle parole chiave (`KeywordsEditor`) consente di aggiungere o rimuovere tag rapidamente:
- Digita una parola chiave e premi `Invio` per aggiungerla.
- Clicca sulla `x` di ciascuna etichetta per rimuoverla.
- Quando selezioni più foto, rExif mostra le parole chiave comuni e quelle parziali, consentendo di applicare tag alla selezione senza sovrascrivere le parole chiave già esistenti.
- I tag vengono scritti sia nello standard IPTC (`Keywords`) sia in XMP (`dc:subject`), garantendo piena compatibilità con **Apple Foto**, **Adobe Lightroom**, **Bridge** e **Capture One**.

## Valutazione a Stelle (Rating ⌘1–⌘5)

rExif supporta la valutazione a stelle nativa per velocizzare la cernita e selezione (culling) degli scatti:
- `⌘1` : 1 Stella ★☆☆☆☆
- `⌘2` : 2 Stelle ★★☆☆☆
- `⌘3` : 3 Stelle ★★★☆☆
- `⌘4` : 4 Stelle ★★★★☆
- `⌘5` : 5 Stelle ★★★★★
- `⌘0` : Rimuovi valutazione

Le valutazioni vengono scritte nel tag standard `xmp:Rating` (supportato su immagini, video MOV e file sidecar `.xmp` per i RAW) e vengono lette all'istante da Lightroom e dalle principali suite fotografiche.
