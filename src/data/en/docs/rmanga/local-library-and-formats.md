---
title: "Local Library and Formats"
description: "How to import comics via the Apple Files app, organize CBZ/ZIP archives, and structure series folders in rManga."
project: "rmanga"
order: 2
section: "Library"
---

## Managing Files via Apple's Files App

rManga exposes its *Documents* sandbox folder directly within iOS and iPadOS. Access it inside:

```text
Files › On My iPhone (or On My iPad) › rManga
```

You can transfer files via AirDrop from your Mac, download them via Safari, or transfer them over USB cable via macOS Finder.

---

## Supported Folder Hierarchies

rManga parses your files automatically following simple structural conventions:

### 1. Single Standalone Volume
For single-volume graphic novels or one-shots, place the archive directly into the root folder:
```text
rManga/
└── Akira_Vol01.cbz
```
rManga creates a series entry titled `Akira_Vol01` containing the archive as a single readable volume.

### 2. Multi-Chapter Series
For ongoing series with separate chapters or volumes:
```text
rManga/
└── Berserk/
    ├── Chapter 001.cbz
    ├── Chapter 002.cbz
    └── Chapter 003.zip
```
The app groups them under **Berserk**, sorts chapters sequentially, and extracts the first page of the earliest chapter as the series cover.

### 3. Chapter as Image Folders
Uncompressed image folders are supported as well:
```text
rManga/
└── ChainsawMan/
    └── Chapter 01/
        ├── 001.jpg
        ├── 002.jpg
        └── 003.png
```

---

## File Formats and Covers
- **Supported Archives**: `.cbz`, `.zip`.
- **Supported Image Encodings**: JPEG, PNG, WebP, static GIF.
- **Custom Series Cover**: placing an image named `cover.jpg` or `cover.png` inside a series directory designates it as the series artwork.
