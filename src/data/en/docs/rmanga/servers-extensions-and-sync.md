---
title: "Servers, Extensions, and Sync"
description: "Connecting home Jellyfin, Suwayomi, Komga, and Kavita servers, managing Aidoku/Paperback extensions, and private iCloud sync in rManga."
project: "rmanga"
order: 6
section: "Networking & Sync"
---

## Connecting Personal Home Servers

rManga integrates directly with leading self-hosted media and catalog solutions:

### 1. Jellyfin (10.9+)
- Connect your Jellyfin instance using your IP/hostname and credentials (safely stored in the iOS Keychain).
- Stream movies, anime, and series over local Wi-Fi or remote VPNs.
- Continuous bi-directional playback position tracking with server-side sync.
- Direct stream playback of untranscoded MKV files via the embedded mpv engine.

### 2. Comic & Ebook Servers: Komga, Kavita, and Suwayomi
- **Komga & Kavita (OPDS)**: browse full comic and book libraries with page streaming and precise progress sync for both illustrated comics and textual EPUBs.
- **Suwayomi (Mihon / Tachiyomi)**: access catalogs via GraphQL APIs, supporting source filtering, authentication, and remote extension management.

---

## Extension Runtimes: Aidoku and Paperback

rManga embeds isolated client runtimes to execute third-party community extensions:
- **Aidoku Extensions (`.aix`)**: run inside an on-device WebAssembly environment (**WasmKit**), supporting deep search filters, web login flows, and CoreGraphics image de-scrambling.
- **Paperback 0.9 Extensions (`.js`)**: executed via native **JavaScriptCore** with support for network interceptors, dynamic discover sections, and Cloudflare verification web views.
- **Automated Updates**: check for updates across installed extensions and Sora video modules directly in *Settings › Sources*.

---

## Private iCloud Synchronization & Storage Management

- **Personal iCloud Sync**: reading positions, bookmarks, chapter progress, and followed series sync across your iPhone and iPad via your private iCloud account.
- **Storage Management**: inspect disk usage across downloads, artwork caches, converted books, and temporary files in *Settings › Storage*, with options to automatically purge downloaded chapters and watched video episodes after 24 hours or 7 days.
- **Full JSON Backup**: export your complete configuration, history, and source references to a single JSON archive for backup or transfer to a new device.
