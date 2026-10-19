---
title: "Libreria Locale e Formati Supportati"
description: "Come importare manga, ebook e file multimediali tramite l'app File, struttura delle cartelle e formati CBZ, CBR, EPUB, PDF, FB2, DOCX, MKV e MP4."
project: "rmanga"
order: 2
section: "Libreria"
---

## Accesso Diretto tramite l'app File

rManga espone la propria cartella *Documents* direttamente nel filesystem di iOS e iPadOS. Puoi visualizzarla aprendo l'app **File** e navigando in:

```text
File › Sul mio iPhone (o Sul mio iPad) › rManga
```

Puoi importare file multimediali trascinandoli da Mac tramite cavo o AirDrop, scaricandoli da Safari, o condividendoli da qualsiasi altra app tramite il foglio di condivisione nativo di iOS.

---

## Formati Supportati per Categoria

| Categoria | Formati Supportati | Motore di Elaborazione |
| :--- | :--- | :--- |
| **Manga e Fumetti** | `.cbz`, `.zip`, `.cbr`, `.rar` (anche solidi), cartelle di immagini | `ArchivePageProvider`, `RARSolidReader`, `FolderPageProvider` |
| **Ebook e Documenti** | `.epub` (EPUB 2 / 3), `.pdf`, `.fb2`, `.docx`, `.odt`, `.rtf`, `.txt`, `.md` | **Readium** (`EbookReaderView`), `TextBookFormats`, `PDFKit` |
| **Video e Anime** | `.mp4`, `.m4v`, `.mov`, `.mkv`, `.webm`, `.avi`, `.ts`, flussi HLS `.m3u8` | **AVPlayer** (nativo Apple) e **libmpv** (MoltenVK Metal) |

---

## Organizzazione delle Cartelle della Libreria

rManga adotta convenzioni intuitive per dedurre titolo, serie e volumi:

### 1. Opera Singola (Volume Unico, Libro o Film)
Un file posizionato direttamente nella radice della cartella `rManga` viene interpretato come opera autonoma con un unico capitolo:
```text
rManga/
├── Akira_Volume1.cbz      ← Serie manga con 1 volume
├── 1984_GeorgeOrwell.epub ← Libro di testo/ebook completo
└── IlMioVicinoTotoro.mkv  ← Film/episodio video singolo
```

### 2. Serie con Più Volumi o Capitoli
Se raggruppi i file all'interno di una sottocartella, il nome della cartella diventa il titolo della serie e ciascun file un capitolo o episodio ordinato:
```text
rManga/
├── Berserk/
│   ├── Capitolo 001.cbz
│   ├── Capitolo 002.cbz
│   └── cover.jpg            ← Copertina personalizzata della serie
├── LaDivinaCommedia/
│   ├── 01_Inferno.epub
│   ├── 02_Purgatorio.epub
│   └── 03_Paradiso.epub
└── Frieren/
    ├── Episodio 01.mp4
    ├── Episodio 02.mkv
    └── subtitles_ep2.ass    ← Sottotitolo esterno stilizzato
```

### 3. Capitolo come Cartella di Immagini
Se possiedi immagini già estratte (es. scansioni JPEG/PNG):
```text
rManga/
└── OnePiece/
    └── Capitolo 1000/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.png
```

---

## Metadati Automatici (ComicInfo.xml ed EPUB)
- **Fumetti**: se all'interno dell'archivio CBZ o CBR è presente il file standard `ComicInfo.xml`, rManga ne estrae titolo ufficiale, sceneggiatore, disegnatore, trama e generi.
- **Ebook**: per gli EPUB, titolo, autore, lingua e indice provengono dal package document (`content.opf`); la copertina ufficiale viene estratta direttamente dai metadati del libro.
