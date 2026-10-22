---
title: "Metadati testuali, IPTC e copyright"
description: "Autore, copyright con segnaposto, trova e sostituisci, parole chiave e valutazione a stelle in rExif."
project: "rexif"
order: 5
section: "Guide d'uso"
---

## Campi di testo e attrezzatura

rExif permette di leggere e compilare i principali campi descrittivi e di attribuzione:

- **Fotocamera e obiettivo**: marca (`Make`), modello (`Model`) e obiettivo (`LensModel`).
- **Descrizione**: `ImageDescription` / `Caption-Abstract`; si può anche importare dai JSON di Google Takeout.
- **Autore**: `Artist` (EXIF) e `By-line` (IPTC).
- **Copyright**: la dichiarazione di copyright (`CopyrightNotice`).
- **Luogo**: città, regione o provincia e paese.

Obiettivo e luogo si scrivono nelle immagini e nei file `.xmp`, non nei video; su MP4 e M4V non si possono modificare nemmeno marca e modello (vedi [Formati e sidecar XMP](/progetti/rexif/docs/formati-e-sidecar)).

## Modelli con segnaposto (`⇧⌘D`)

Nella finestra **Modifiche in blocco** › **Testo** puoi compilare un campo con un modello che contiene segnaposto, sostituiti con i dati di ciascun elemento:

| Segnaposto | Valore |
| :--- | :--- |
| `{nome}` / `{file}` | Nome del file senza / con estensione |
| `{cartella}` | Nome della cartella |
| `{anno}`, `{mese}`, `{giorno}` | Anno, mese (01–12) e giorno (01–31) di scatto |
| `{data}` | Data di scatto (AAAA-MM-GG) |
| `{ora}`, `{secondi}` | Ora (HH.MM) e secondi (00–59) di scatto |
| `{fotocamera}` | Marca e modello |
| `{marca}`, `{modello}`, `{obiettivo}` | Marca, modello e obiettivo |
| `{autore}` | Autore |
| `{citta}`, `{paese}` | Città e paese |
| `{n}`, `{nnn}` | Numero progressivo nell'ordine della tabella (1, 2… oppure 001, 002…) |

**Esempi:**
```text
Autore:      Mario Rossi
Copyright:   © {anno} Mario Rossi. Tutti i diritti riservati.
Descrizione: Scattata con {fotocamera} a {citta} (#{n})
```

Con l'opzione **Solo se il campo è vuoto** il modello si applica solo agli elementi che non hanno ancora un valore.

## Trova e sostituisci

Nella stessa scheda puoi cercare e sostituire un testo in un campo a scelta (es. solo Descrizione o solo Copyright) su centinaia di foto, distinguendo o no maiuscole e minuscole. I risultati compaiono in arancione prima del salvataggio.

## Parole chiave

Nel campo delle parole chiave dell'inspector:
- scrivi una o più parole chiave separate da virgole e premi `Invio` per aggiungerle;
- fai clic sulla `x` di un'etichetta per rimuoverla;
- con più foto selezionate vedi tutte le parole chiave presenti; accanto a quelle che non sono in tutti gli elementi compare il conteggio (es. `3/5`). Le nuove parole chiave si aggiungono a quelle esistenti, senza sostituirle.

Le parole chiave vengono scritte in IPTC (`Keywords`) e in XMP (`dc:subject`), compatibili con Apple Foto, Adobe Lightroom, Bridge e Capture One.

## Valutazione a stelle (`⌘1`–`⌘5`)

Per selezionare velocemente gli scatti migliori:
- `⌘1` … `⌘5`: da 1 a 5 stelle;
- `⌘0`: nessuna valutazione.

La valutazione viene scritta nel tag standard `xmp:Rating`, supportato su immagini, video MOV e file `.xmp` accanto ai RAW, ed è letta da Lightroom e dalle principali applicazioni fotografiche.
