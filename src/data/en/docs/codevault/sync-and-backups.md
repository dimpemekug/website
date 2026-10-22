---
title: "Sync and Backups"
description: "Automatic CloudKit sync, preferences synced through the iCloud key-value store, JSON backups and Markdown and PDF export in CodeVault."
project: "codevault"
order: 4
section: "Data & Sync"
---

## iCloud Sync

CodeVault syncs snippets and notes across Mac, iPhone and iPad using **SwiftData with CloudKit**:

- **Private database**: your data lives only in the private database of your iCloud account and nobody else can access it, the developer included.
- **Works offline**: if iCloud is unavailable or not set up, `PersistenceController` quietly falls back to local storage. You can also turn sync off in **Settings › Sync**.
- **Changes merged by iCloud**: edits made on different devices are merged by CloudKit as soon as the devices are back online.
- **Synced preferences**: settings (style, theme, accent color, language, editor theme, font size, line numbers, biometric lock) travel separately through `NSUbiquitousKeyValueStore`, so you get the same setup on every device. The visual style can also be kept per device.

---

## Backup, Import and Export

Your data always stays yours, with no lock-in. Everything lives in **Settings › Backup and Import** and, on Mac, in the **File** menu too.

### JSON Backup
Creates a full copy of your library in a single JSON file, with:
- every snippet, with its code blocks and their titles, language, description, category, tags and dates;
- every note, with its content, format, description, category, tags and dates.

The file can be imported into any CodeVault installation. Importing adds only the items that are not already there (matched by identifier), so it never creates duplicates; an item sitting in the Trash is restored.

### Markdown Export
Exports the whole library to a single `.md` file: each snippet and note becomes a section with its title, description, language or format, category and tags, and code goes into fenced blocks tagged with the language. Handy for reading your content in editors such as Obsidian or VS Code.

### Sharing and PDF
Any snippet or note can be shared as Markdown through the system share sheet (Mail, Messages, Notes and other apps). Markdown notes can also be exported to **PDF**.

### Sample Data
From **Backup and Import** you can load a set of sample snippets and notes to try the app; loading them again does not duplicate them.
