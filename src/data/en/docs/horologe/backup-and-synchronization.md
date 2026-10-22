---
title: "Backup, Sync and Export"
description: "ZIP archive with photos, safety copy, CloudKit sync on iOS, PDF sheets, insurance inventory and CSV export in Horologe."
project: "horologe"
order: 5
section: "Data & Sync"
---

## The ZIP Backup

Many cataloging apps export plain text only and lose your images. Horologe instead creates a **complete `.zip` archive**:

```text
Backup_Horologe.zip
├── manifest.json            ← watches, services, wrist days, accuracy
├── watch_1_cover.jpg        ← cover photo
├── watch_1_gallery_1.jpg    ← gallery photos
├── watch_1_att_1.pdf        ← attachments
├── watch_2_cover.jpg
└── ...
```

The format is the same on iOS and Android: export the archive from an iPhone and you can import it on Android (and vice versa), with every photo and detail in place.

### Importing a Backup
Importing **replaces** your current collection with the backup's. On iOS, before doing so, Horologe automatically saves a **safety copy** of the current collection: if you change your mind, **Restore previous collection** takes you back. The same copy is made before a reset or loading sample data.

---

## iCloud Sync (iOS Only)

On iPhone and iPad Horologe can sync your collection through **CloudKit**, in your private database:
- **Data**: a compact manifest in the `primary-v2` record.
- **Photos and attachments without duplicates**: each file is a `file-<sha256>` record identified by its content; if it's already in iCloud it isn't uploaded again.
- **Large collections**: requests are spread over time and, if CloudKit asks to slow down (HTTP 429), the app waits and retries instead of giving up.
- **Who wins**: if the collection changed on several devices, the most recent change prevails.

---

## PDF and CSV

- **Watch PDF sheet**: a document with photos, technical details, service history and accuracy measurements, to share or include with a sale.
- **Insurance PDF** (iOS): an A4 inventory of the collection with a summary (number of pieces, purchase value per currency, full sets), a table of every watch and a page for each one with photos, reference, serial number, purchase details and papers.
- **CSV**: the whole collection as a table, to open in Excel, Numbers or Google Sheets.
