---
title: "Servers, Extensions and Sync"
description: "Connecting to Jellyfin, Suwayomi, Komga and Kavita servers, Aidoku and Paperback extensions, iCloud sync and backups in rManga."
project: "rmanga"
order: 6
section: "Networking & Sync"
---

## Personal Servers

rManga connects to the main self-hosted servers (Settings › Sources › Add Server):

### 1. Jellyfin (10.9+)
- Add the server with its address, username and password; the access token stays in the iOS Keychain.
- Browse and search movie and series libraries and play episodes.
- Progress is read from the server and sent every minute, at the end of an episode and when the player closes.
- The original file is played as is (an MKV goes to mpv, without making the server work); the server-converted version remains as a fallback.

### 2. Comic and Ebook Servers: Komga, Kavita and Suwayomi
- **Komga and Kavita (OPDS)**: browse and search catalogs of comics and books, with pages streamed (or the file downloaded) and your reading position synced for both comics and text ebooks. For Kavita, paste the OPDS address with your API key.
- **Suwayomi (Mihon / Tachiyomi)**: Android extensions can't run on iOS, but through a Suwayomi server (GraphQL API) you can use their sources: popular and latest, search with filters, details, chapters, reading, source settings and management of the server's extensions and repositories. Authentication is detected automatically.

---

## Aidoku and Paperback Extensions

rManga runs extensions from two ecosystems inside the app. No repository is included: you add them yourself, with a link or by pasting the address.
- **Aidoku (`.aix`)**: run with a WebAssembly runtime (**WasmKit**), with home, lists, search with filters, details, chapters, source settings, login and reassembly of protected pages with CoreGraphics.
- **Paperback 0.9 (`index.js`)**: run with **JavaScriptCore**, with home sections, search with sorting, details, chapters, source settings and Cloudflare verification.
- **Updates**: extensions and video modules update on their own (this can be turned off), and from *Settings › Sources* you can check for updates whenever you like.

---

## iCloud Sync, Storage and Backups

- **iCloud**: library, progress, settings, repositories and installed extensions sync across devices signed in to the same iCloud account; for each chapter the furthest point wins. Downloaded chapters, local series (they're files on that device) and passwords don't sync.
- **Storage**: in *Settings › Storage* you see how much space downloads, covers, converted books, caches and temporary files take, and you can clear each cache. With **Delete after reading** (never, right away, after a day or after a week), downloads of read chapters and watched episodes are removed automatically.
- **Backups**: in *Settings › Data › Backups* you create, import, share and restore `.rmbackup` backups with your library, history and progress, repositories, installed extensions, servers (without passwords) and settings. The files live in `rManga/Backups` in the Files app. When restoring you choose what to bring back; the library is replaced, but rManga first saves a backup of the current one. Aidoku backups (`.aib`) can be imported too.
