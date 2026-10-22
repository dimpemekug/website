---
title: "Introduction to rManga"
description: "Overview of rManga for iPhone and iPad: one app to read manga, comics and ebooks and watch anime, with no tracking."
project: "rmanga"
order: 1
section: "Getting Started"
---

## What is rManga

**rManga** is a native app for **iPhone and iPad (iOS/iPadOS 26+)**, in English and Italian, that brings three worlds together in a single library:

1. **Manga and comics**: manga, Western comics and vertical-scrolling webtoons, from local files, extensions and servers.
2. **Ebooks and text books**: a Readium-based text reader for EPUB, FB2, DOCX, ODT, RTF, HTML, TXT and Markdown, with pagination, bookmarks, highlights and search; PDFs and illustrated EPUBs are paged through like comics.
3. **Anime and video**: a player with two engines (Apple's AVPlayer and libmpv on Metal for MKV and the like), Sora video modules, Jellyfin servers, intro skipping with AniSkip and ASS/SSA subtitles with their own styling.

Built with **SwiftUI and SwiftData** in the *Liquid Glass* design, rManga doesn't host or distribute any content: it reads your files and connects to the sources you choose.

---

## Architecture and Strengths

### 1. Privacy and No Required Account
- **No profiling**: the app has no analytics, trackers or ads.
- **Your data on your device**: library, history and progress stay on your device and, only if you turn on sync, in your **personal iCloud**.
- **Credentials in the Keychain**: server passwords and tokens (Jellyfin, Suwayomi, Komga, Kavita) stay in the iOS Keychain and never end up in backups or iCloud.

### 2. One Model for Different Media
In rManga every work is a `Manga` and its contents (comic chapters, book volumes or episodes) are `Chapter`s:
- For **comics**, progress is the page reached.
- For **ebooks**, progress uses Readium positions (roughly one every thousand characters), the same on every device.
- For **videos**, the position is saved to the second, and an episode counts as watched past 90% of its length.
- This way history, the "Continue" row, backups and sync work the same for everything.

### 3. Performance and 120 Hz ProMotion Screens
Screens have been measured and optimized to avoid animation hitches:
- the Library counts chapters with **a single query** per draw;
- in webtoons only the pages near the screen have a view, recycled from page to page;
- video is hardware-decoded with VideoToolbox.

---

## Getting Started

1. **Import your files**: copy manga, book or video archives into the `rManga` folder in the **Files** app.
2. **Connect your sources**: add Aidoku or Paperback extension repositories, Sora video modules or your server (Komga, Kavita, Suwayomi or Jellyfin). No repository is included with the app.
3. **Read or watch**: page through a manga right to left, scroll a webtoon vertically, highlight a passage in an ebook or start an episode with subtitles and Picture in Picture.
