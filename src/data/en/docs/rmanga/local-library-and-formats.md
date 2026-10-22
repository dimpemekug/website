---
title: "Local Library and Supported Formats"
description: "How to import manga, ebooks and videos with the Files app, how to organize folders and which formats are supported: CBZ, CBR, EPUB, PDF, FB2, DOCX, MKV, MP4 and more."
project: "rmanga"
order: 2
section: "Library"
---

## The Folder in the Files App

rManga's *Documents* folder is visible in the **Files** app, under:

```text
Files › On My iPhone (or On My iPad) › rManga
```

You can copy files there from your Mac (via cable or AirDrop), download them with Safari or save them from other apps with the share sheet.

---

## Supported Formats

| Category | Formats | How they're read |
| :--- | :--- | :--- |
| **Manga and comics** | `.cbz`, `.zip`, `.cbr`, `.rar` (solid too), image folders | `ArchivePageProvider`, `RARSolidReader`, `FolderPageProvider` |
| **Ebooks and documents** | `.epub` (EPUB 2 and 3), `.fb2`, `.docx`, `.odt`, `.rtf`, `.html`, `.txt`, `.md` | **Readium** text reader (`EbookReaderView`); formats other than EPUB are converted to EPUB first |
| **PDFs and illustrated EPUBs** | `.pdf`, image-based `.epub` | Comic reader (`PDFPageProvider`, `EPUBPageProvider`) |
| **Video** | `.mp4`, `.m4v`, `.mov`, `.mkv`, `.webm`, `.avi`, `.ts`, HLS `.m3u8` streams | Apple's **AVPlayer** and **libmpv** (MoltenVK on Metal) |

---

## Organizing Folders

rManga works out title, series and volumes from the folder structure:

### 1. Single Work (One-Shot, Book or Film)
A file placed directly in the `rManga` folder becomes a series with a single chapter:
```text
rManga/
├── Akira_Volume1.cbz      ← Manga series with 1 volume
├── 1984_GeorgeOrwell.epub ← Complete book
└── MyNeighborTotoro.mkv   ← Film or single episode
```

### 2. Series with Several Volumes or Chapters
If you group files in a subfolder, the folder name becomes the series title and each file a chapter or episode:
```text
rManga/
├── Berserk/
│   ├── Chapter 001.cbz
│   └── Chapter 002.cbz
├── TheDivineComedy/
│   ├── 01_Inferno.epub
│   ├── 02_Purgatorio.epub
│   └── 03_Paradiso.epub
└── Frieren/
    ├── Episode 01.mp4
    └── Episode 02.mkv
```

### 3. Chapter as an Image Folder
If you have already-extracted images (e.g. JPEG or PNG scans):
```text
rManga/
└── OnePiece/
    └── Chapter 1000/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.png
```

---

## Automatic Metadata (ComicInfo.xml and EPUB)
- **Comics**: if a CBZ or CBR archive contains the standard `ComicInfo.xml` file, rManga reads the series title, author, synopsis, genres, chapter title and number and reading direction from it. Without metadata, file names are used.
- **Ebooks**: for EPUBs, title, author, description, subjects and reading direction come from the book's metadata, and the cover is the one the book declares (or the first page if there isn't one). An EPUB on its own names the series; inside a folder it's a volume.
- **DRM-protected EPUBs** (Adobe, Apple, Readium LCP) can't be opened: rManga tells you so with a message.
