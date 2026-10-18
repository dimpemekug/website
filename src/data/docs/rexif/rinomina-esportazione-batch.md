---
title: "Rinomina in Blocco ed Esportazione CSV"
description: "Rinomina basata su modelli dinamici, esportazione e re-importazione metadati tramite fogli di calcolo CSV."
project: "rexif"
order: 6
section: "Guide d'uso"
---

## Ridenominazione File con Modelli Dinamici

I file acquisiti con fotocamere reflex o smartphone presentano spesso nomi generici e poco leggibili (es. `_DSC8921.JPG` o `IMG_2024.CR3`).

All'interno della finestra **Modifiche in blocco** (`⇧⌘D`), la scheda **Rinomina** permette di comporre modelli strutturati combinando testo personalizzato e token dinamici:

### Token di Rinomina Supportati

| Token | Descrizione | Esempio Risultato |
| :--- | :--- | :--- |
| `{data}` | Data di scatto compatta `YYYYMMDD` | `20261014` |
| `{anno}` | Anno a 4 cifre | `2026` |
| `{mese}` | Mese a 2 cifre | `10` |
| `{giorno}` | Giorno a 2 cifre | `14` |
| `{ora}` | Orario a 6 cifre `HHMMSS` | `183012` |
| `{fotocamera}` | Modello della fotocamera | `Sony_A7IV` |
| `{nome}` | Nome del file originario (senza estensione) | `_DSC8921` |
| `{n}` o `{nnn}` | Contatore sequenziale progressivo | `001`, `002`... |

### Esempio Pratico
Impostando il modello `{data}_{ora}_{nnn}` su una selezione di foto:
- `_DSC8921.JPG` $\rightarrow$ `20261014_183012_001.JPG`
- `_DSC8922.JPG` $\rightarrow$ `20261014_183018_002.JPG`

Il nuovo nome compare immediatamente in arancione nella colonna della tabella. Il file effettivo sul disco viene rinominato solo quando premi **Salva** (`⌘S`).

## Esportazione Metadati in CSV

Dal menu dei comandi o premendo il pulsante nella barra degli strumenti, puoi esportare l'intero catalogo dei file caricati in formato **CSV**:
- Menu: **File** > **Esporta metadati in CSV...**.
- Vengono esportate tutte le colonne informative: percorso del file, data di scatto, data di digitalizzazione, date del filesystem, coordinate GPS (latitudine, longitudine, altitudine), toponimi, marca e modello fotocamera, ottica, autore, copyright, parole chiave e valutazione a stelle.
- Il file CSV risultante può essere aperto e modificato con **Apple Numbers**, **Microsoft Excel**, o elaborato con script Python o database relazionali.

## Re-Importazione Modifiche da CSV

Se preferisci lavorare in ambiente tabellare:
1. Apri il file CSV esportato in Numbers o Excel.
2. Modifica descrizioni, date, coordinate o crediti di copyright nelle rispettive celle (lasciando inalterata la colonna del percorso file).
3. Salva nuovamente il documento come file `.csv`.
4. In rExif, scegli **File** > **Importa metadati da CSV...**.
5. L'applicazione confronta i dati del foglio elettronico con i file aperti e carica tutte le discrepanze come modifiche in arancione, pronte per essere verificate ed applicate sul disco in un clic.
