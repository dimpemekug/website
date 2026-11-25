---
title: "Backup, Sync and Export"
description: "ZIP backup with photos, a safety copy you can restore, iCloud sync on iOS, PDF sheets, an insurance inventory and CSV export in Horologe."
project: "horologe"
order: 6
section: "Data & Sync"
---

## The ZIP backup

Horologe creates a **complete `.zip` archive**, with your data and files:

```text
Backup Horologe 2026-11-25 10-30.zip
├── manifest.json            ← watches, services, wear days, accuracy
├── watch_1_cover.jpg        ← cover photo
├── watch_1_gallery_1.jpg    ← gallery photo
├── watch_1_att_1.pdf        ← attachments
├── watch_2_cover.jpg
└── ...
```

The format is the same on iOS and Android: export the archive from an iPhone, import it on Android (or the other way round), and every photo and detail is back in place. On Android you can share the backup or save it to a folder; Android also imports older JSON backups.

### Importing a backup
Importing **replaces** the current collection with the one in the backup, after a confirmation.

### Safety copy
Before an import, a reset or loading the sample data, Horologe saves a **safety copy** of the current collection on the device, on iOS and on Android. If you change your mind, tap **Restore previous collection** in Settings: the copy takes the place of the current collection, which in turn becomes the new copy, so you can always go back.

The copy stays in the app's storage and is excluded from the device backup.

---

## iCloud sync (iOS only)

On iPhone and iPad you can turn on sync in Settings, under **Data**. Horologe uses **CloudKit**, in your iCloud account's private database:
- **What syncs**: watches, photos, attachments, services, measurements and wear days. Settings stay on each device.
- **No duplicate photos or attachments**: each file is identified by its content; if it's already in iCloud it isn't uploaded again, and if it's already on the device it isn't downloaded again.
- **Large collections**: if CloudKit asks to slow down, the app waits and retries instead of stopping.
- **Who wins**: if the collection changed on more than one device, the most recent change wins.

Android has no sync: the app doesn't connect to the Internet. Android backup, if on, may include the app's data.

---

## PDF and CSV

- **Watch PDF sheet**: a document with photos, technical details, service history and accuracy measurements, from the watch page's menu.
- **Insurance PDF**: an A4 inventory of the watches in the collection (owned and in repair), with a summary and a page for each one with photo, reference, serial number, purchase details and papers. Create it from Settings, on iOS and Android.
- **CSV**: the whole collection as a table, with semicolons as separators and headers in the app's language, to open in Excel, Numbers or Google Sheets.
