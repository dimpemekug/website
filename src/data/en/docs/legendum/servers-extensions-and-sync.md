---
title: "Servers, Extensions and Sync"
description: "Connecting to Jellyfin, Suwayomi, Komga and Kavita servers, Aidoku and Paperback extensions, series migration, iCloud sync and backups in Legendum."
project: "legendum"
order: 6
section: "Networking & Sync"
---

## Personal Servers

Legendum connects to the main self-hosted servers (Settings › Sources › Add Server):

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

Legendum runs extensions from two ecosystems inside the app. No repository is included: you add them yourself, with a link or by pasting the address.
- **Aidoku (`.aix`)**: run with a WebAssembly runtime (**WasmKit**), with home, lists, search with filters, details, chapters, source settings, login and reassembly of protected pages with CoreGraphics.
- **Paperback 0.9 (`index.js`)**: run with **JavaScriptCore**, with home sections, search with sorting, details, chapters, source settings and Cloudflare verification.
- **Updates**: extensions and video modules update on their own (this can be turned off), and from *Settings › Sources* you can check for updates whenever you like.

---

## Migrating a Series to Another Source

When a source stops working, **Migrate** moves its series to another installed extension without losing your place.

- **Where**: from the "…" menu of a series page in the library, from a cover's menu in Library, or from the **Migrate** button in Library. There, **Select Series** lets you pick several (with **Select All**), while **Migrate All Series** takes them all. Local series can't be migrated.
- **Destination**: installed Aidoku and Paperback extensions for comics, video modules for episodes. Server sources (Suwayomi, Komga, Kavita, OPDS, Jellyfin) can only be the origin.
- **Search**: Legendum searches the new source for the title and suggests the closest result, with its chapter count; you can search for another title or pick a different result. Then choose **Replace** (the default) or **Keep Both** and confirm with **Migrate**.
- **Several series**: you move from one to the next after each confirmation, or with **Skip This Series**. **Move Exact Matches Without Asking** moves a series on its own when the title found is the same. At the end, a summary says how many chapters took their progress and how many read chapters are missing from the new source.
- **Progress**: chapters are matched by number, and by volume when both sources give one. Chapters only the new source has, before the furthest one read, count as read.
- **The old entry** only leaves the library, as with **Remove from Library**: its downloads stay until you delete them, and iCloud and backups follow the change.

---

## iCloud Sync, Storage and Backups

- **iCloud**: library, progress, settings, repositories and installed extensions sync across devices signed in to the same iCloud account; for each chapter the furthest point wins. Downloaded chapters, local series (they're files on that device) and passwords don't sync.
- **Storage**: in *Settings › Storage* you see how much space downloads, covers, converted books, caches and temporary files take, and you can clear each cache. With **Delete after reading** (never, right away, after a day or after a week), downloads of read chapters and watched episodes are removed automatically.
- **Backups**: in *Settings › Data › Backups* you create, import, share and restore `.lgbackup` backups with your library, history and progress, repositories, installed extensions, servers (without passwords) and settings. The files live in `Legendum/Backups` in the Files app. When restoring you choose what to bring back; the library is replaced, but Legendum first saves a backup of the current one. Aidoku backups (`.aib`) can be imported too.
