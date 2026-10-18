---
title: "Backup, Sync, and Exports"
description: "Universal ZIP archives with full-resolution images, CloudKit multi-tier sync on iOS, and PDF or CSV exports in Horologe."
project: "horologe"
order: 5
section: "Data & Sync"
---

## Complete ZIP Backup Format

Unlike basic cataloging utilities that export only text logs and discard photos, Horologe produces a self-contained, compressed **`.zip` archive**:

```text
Backup_Horologe_2026-10-18.zip
├── manifest.json            ← Full database dump (watches, services, wrist time, accuracy)
└── watch_images/            ← High-resolution photo collection
    ├── watch_1_cover.jpg
    ├── watch_1_image_1.jpg
    └── ...
```

This archive format is 100% interoperable between iOS and Android: an archive generated on iPhone restores cleanly on Android, and vice versa.

---

## iCloud Synchronization (iOS Exclusive)

On Apple devices, Horologe incorporates advanced **CloudKit** sync architecture:
- **Relational Data**: synchronized in the private `primary-v2` record.
- **Deduplicated Photos**: each image is stored as a `file-<sha256>` record. If an image already exists on iCloud, redundant re-uploading is skipped.
- **Throttling Resistance**: during large initial sync batches, `withServerRetry` respects `CKErrorRetryAfterKey` to prevent HTTP 429 rate limit errors.

---

## PDF Spec Sheets and CSV Exports

- **A4 Watch Spec Sheet**: export a polished PDF document displaying the watch's hero photo, technical specifications, service history, and estimated valuation for insurance or consignment.
- **CSV Data Dump**: export tabular data to open your collection in Excel, Numbers, or Google Sheets.
