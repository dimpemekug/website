---
title: "Local Library and Supported Formats"
description: "How to import manga, ebooks, and video media via the Apple Files app, folder hierarchies, and support for CBZ, CBR, EPUB, PDF, FB2, DOCX, MKV, and MP4."
project: "rmanga"
order: 2
section: "Library"
---

## Accessing Files via Apple's Files App

rManga exposes its *Documents* sandbox folder directly inside iOS and iPadOS. Access it inside:

```text
Files › On My iPhone (or On My iPad) › rManga
```

You can import media by dropping files from Mac over AirDrop or USB cable, downloading via Safari, or using the standard iOS Share Sheet from other apps.

---

## Supported Formats by Media Category

| Media Category | Supported Formats | Engine |
| :--- | :--- | :--- |
| **Manga & Comics** | `.cbz`, `.zip`, `.cbr`, `.rar` (including solid archives), image folders | `ArchivePageProvider`, `RARSolidReader`, `FolderPageProvider` |
| **Ebooks & Text** | `.epub` (EPUB 2 / 3), `.pdf`, `.fb2`, `.docx`, `.odt`, `.rtf`, `.txt`, `.md` | **Readium** (`EbookReaderView`), `TextBookFormats`, `PDFKit` |
| **Anime & Video** | `.mp4`, `.m4v`, `.mov`, `.mkv`, `.webm`, `.avi`, `.ts`, HLS `.m3u8` streams | **AVPlayer** (Apple native) & **libmpv** (MoltenVK Metal) |

---

## Library Folder Organization

rManga automatically parses file layouts following natural naming conventions:

### 1. Single Standalone Work (One-Shot, Book, or Movie)
Placing a file directly in the root of the `rManga` directory creates a single self-contained title:
```text
rManga/
├── Akira_Volume1.cbz      ← Manga volume
├── 1984_GeorgeOrwell.epub ← Complete text ebook
└── Totoro.mkv             ← Standalone video file
```

### 2. Multi-Chapter Series
Group separate chapters or volumes inside a named folder; the folder name becomes the series title and files become ordered chapters:
```text
rManga/
├── Berserk/
│   ├── Chapter 001.cbz
│   ├── Chapter 002.cbz
│   └── cover.jpg            ← Custom series cover artwork
├── Foundation_Trilogy/
│   ├── 01_Foundation.epub
│   ├── 02_FoundationAndEmpire.epub
│   └── 03_SecondFoundation.epub
└── Frieren/
    ├── Episode 01.mp4
    ├── Episode 02.mkv
    └── subtitles_ep2.ass    ← Stylized external subtitle file
```

### 3. Chapter as Image Folders
Uncompressed image folders are supported directly:
```text
rManga/
└── OnePiece/
    └── Chapter 1000/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.png
```

---

## Metadata Support (ComicInfo.xml & EPUB)
- **Comics**: if a CBZ or CBR archive includes standard `ComicInfo.xml` metadata, rManga extracts official titles, writers, illustrators, plot summaries, and genres.
- **Ebooks**: for EPUB files, book metadata, chapter hierarchies, and cover art are extracted directly from the package manifest (`content.opf`).
