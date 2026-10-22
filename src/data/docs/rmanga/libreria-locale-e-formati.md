---
title: "Libreria locale e formati supportati"
description: "Come importare manga, ebook e video con l'app File, come organizzare le cartelle e quali formati sono supportati: CBZ, CBR, EPUB, PDF, FB2, DOCX, MKV, MP4 e altri."
project: "rmanga"
order: 2
section: "Libreria"
---

## La cartella nell'app File

La cartella *Documents* di rManga è visibile nell'app **File**, in:

```text
File › Sul mio iPhone (o Sul mio iPad) › rManga
```

Puoi copiarci i file dal Mac (via cavo o AirDrop), scaricarli con Safari o salvarli da altre app con il foglio di condivisione.

---

## Formati supportati

| Categoria | Formati | Come vengono letti |
| :--- | :--- | :--- |
| **Manga e fumetti** | `.cbz`, `.zip`, `.cbr`, `.rar` (anche solidi), cartelle di immagini | `ArchivePageProvider`, `RARSolidReader`, `FolderPageProvider` |
| **Ebook e documenti** | `.epub` (EPUB 2 e 3), `.fb2`, `.docx`, `.odt`, `.rtf`, `.html`, `.txt`, `.md` | Lettore di testo **Readium** (`EbookReaderView`); i formati diversi da EPUB vengono prima convertiti in EPUB |
| **PDF ed EPUB illustrati** | `.pdf`, `.epub` fatti di immagini | Lettore dei fumetti (`PDFPageProvider`, `EPUBPageProvider`) |
| **Video** | `.mp4`, `.m4v`, `.mov`, `.mkv`, `.webm`, `.avi`, `.ts`, flussi HLS `.m3u8` | **AVPlayer** di Apple e **libmpv** (MoltenVK su Metal) |

---

## Come organizzare le cartelle

rManga ricava titolo, serie e volumi dalla struttura delle cartelle:

### 1. Opera singola (volume unico, libro o film)
Un file messo direttamente nella cartella `rManga` diventa una serie con un solo capitolo:
```text
rManga/
├── Akira_Volume1.cbz      ← Serie manga con 1 volume
├── 1984_GeorgeOrwell.epub ← Libro completo
└── IlMioVicinoTotoro.mkv  ← Film o episodio singolo
```

### 2. Serie con più volumi o capitoli
Se raggruppi i file in una sottocartella, il nome della cartella diventa il titolo della serie e ogni file un capitolo o episodio:
```text
rManga/
├── Berserk/
│   ├── Capitolo 001.cbz
│   ├── Capitolo 002.cbz
├── LaDivinaCommedia/
│   ├── 01_Inferno.epub
│   ├── 02_Purgatorio.epub
│   └── 03_Paradiso.epub
└── Frieren/
    ├── Episodio 01.mp4
    └── Episodio 02.mkv
```

### 3. Capitolo come cartella di immagini
Se hai immagini già estratte (es. scansioni JPEG o PNG):
```text
rManga/
└── OnePiece/
    └── Capitolo 1000/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.png
```

---

## Metadati automatici (ComicInfo.xml ed EPUB)
- **Fumetti**: se l'archivio CBZ o CBR contiene il file standard `ComicInfo.xml`, rManga ne legge titolo della serie, autore, trama, generi, titolo e numero del capitolo e verso di lettura. Senza metadati valgono i nomi dei file.
- **Ebook**: per gli EPUB, titolo, autore, descrizione, argomenti e verso di lettura vengono dai metadati del libro, e la copertina è quella che il libro dichiara (in mancanza, la prima pagina). Un EPUB da solo dà il nome alla serie; dentro una cartella è un volume.
- **EPUB con DRM** (Adobe, Apple, Readium LCP) non si possono aprire: rManga lo segnala con un messaggio.
