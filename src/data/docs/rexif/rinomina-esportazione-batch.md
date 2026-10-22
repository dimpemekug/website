---
title: "Rinomina in blocco ed esportazione CSV"
description: "Rinomina dei file con modelli e segnaposto, esportazione e reimportazione dei metadati tramite fogli di calcolo CSV in rExif."
project: "rexif"
order: 6
section: "Guide d'uso"
---

## Rinominare i file con un modello

Le foto di fotocamere e smartphone hanno spesso nomi generici e poco leggibili (es. `_DSC8921.JPG` o `IMG_2024.CR3`).

Nella finestra **Modifiche in blocco** (`⇧⌘D`), la scheda **Rinomina** compone il nuovo nome con testo libero e gli stessi segnaposto dei campi di testo. I più utili:

| Segnaposto | Descrizione | Esempio |
| :--- | :--- | :--- |
| `{data}` | Data di scatto (AAAA-MM-GG) | `2026-10-14` |
| `{anno}`, `{mese}`, `{giorno}` | Anno, mese e giorno di scatto | `2026`, `10`, `14` |
| `{ora}` | Ora di scatto (HH.MM) | `18.30` |
| `{secondi}` | Secondi dell'ora di scatto | `12` |
| `{fotocamera}` | Marca e modello | `SONY ILCE-7M4` |
| `{nome}` | Nome attuale del file, senza estensione | `_DSC8921` |
| `{cartella}` | Nome della cartella | `Vacanze` |
| `{n}` / `{nnn}` | Numero progressivo (1, 2… / 001, 002…) | `001` |

### Esempio
Con il modello `{data}_{ora}_{nnn}`:
- `_DSC8921.JPG` → `2026-10-14_18.30_001.JPG`
- `_DSC8922.JPG` → `2026-10-14_18.30_002.JPG`

L'estensione resta quella del file. I caratteri non ammessi nei nomi (`/` e `:`) vengono sostituiti con un trattino e, se un nome è già usato nella stessa cartella, viene aggiunto un suffisso (`-2`, `-3`…). Il nuovo nome compare in arancione nella tabella; il file viene rinominato solo quando premi **Salva** (`⌘S`).

## Esportare i metadati in CSV

Dal menu **File** › **Esporta metadati in CSV…** salvi i metadati degli elementi in un file **CSV** con queste colonne:
- nome e percorso del file;
- data di scatto, di digitalizzazione e date di creazione e modifica del file;
- latitudine, longitudine e altitudine;
- marca, modello, obiettivo, descrizione, autore, copyright, città, regione e paese;
- parole chiave e valutazione.

Il file si apre con **Numbers**, **Excel** o con qualsiasi script.

## Reimportare le modifiche da CSV

Se preferisci lavorare in un foglio di calcolo:
1. apri il CSV esportato in Numbers o Excel;
2. modifica descrizioni, date, coordinate o copyright nelle celle, senza toccare le colonne del percorso e del nome del file;
3. salva di nuovo il documento in formato `.csv`;
4. in rExif scegli **File** › **Importa metadati da CSV…**;
5. rExif riconosce gli elementi dal percorso (o dal nome, se nella lista ce n'è uno solo con quel nome) e carica le differenze come modifiche in arancione, da controllare prima di salvare.
