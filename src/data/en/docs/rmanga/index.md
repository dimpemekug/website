---
title: "Introduction to rManga"
description: "Overview of rManga for iPhone and iPad: complete media suite for reading manga, comics, and ebooks, and watching anime, with zero tracking and buttery-smooth performance."
project: "rmanga"
order: 1
section: "Getting Started"
---

## What is rManga

**rManga** is a native application for **iPhone and iPad (iOS/iPadOS 26+)** that unifies three core entertainment pillars into a singular, responsive library:

1. **Manga & Comics**: Japanese manga, Western graphic novels, and continuous vertical webtoons, supporting local archives and extension repositories.
2. **Ebooks & Text Documents**: an advanced digital book reader powered by the industry-standard **Readium** engine, supporting EPUB, PDF, FB2, DOCX, TXT, and Markdown with fluid pagination, highlights, and annotations.
3. **Anime & Animated Series**: a dedicated video player with a dual-engine architecture (native Apple AVPlayer plus libmpv via Metal for MKV containers), Sora streaming modules, Jellyfin server integration, AniSkip intro skipping, and stylized ASS/SSA subtitles.

Built in **SwiftUI and SwiftData** around Apple's *Liquid Glass* design paradigms, rManga hosts no content of its own: it is an open, private media player and reader built to enjoy your local files and connect to your personal servers.

---

## Architecture and Core Principles

### 1. Absolute Privacy and Zero Tracking
- **Zero Profiling**: the app contains no telemetry, commercial trackers, or third-party ads.
- **Your Data Remains On-Device**: your library, history, bookmarks, and progress live in local sandboxed storage and, optionally, your private **iCloud account**.
- **Secure Keychain Storage**: passwords and API tokens for Jellyfin, Suwayomi, and OPDS catalogs are stored encrypted in the iOS Keychain.

### 2. Unified Multi-Media Domain
In rManga, every title is represented by the unified `Manga` model and its content segments by `Chapter`:
- For **comics**, progress reflects the current page.
- For **ebooks**, progress stores the exact document locator fraction.
- For **anime and videos**, progress is tracked to the exact second, marking an episode finished when reaching 90% completion.
- Consequently, history, "Continue Watching/Reading" rows, and cross-device sync operate harmoniously without duplicated tracking state.

### 3. ProMotion 120Hz Fluidity
Every interface component is optimized to eliminate frame drops (*animation hitches*):
- Aggregated single-query chapter count computations.
- Reusable view recycling for infinite vertical webtoon scrolls.
- Hardware-accelerated VideoToolbox decoding for high-bitrate video streams.

---

## Quick Start

1. **Import Files**: place comic archives or digital books into the `rManga` folder inside the Apple **Files** app.
2. **Connect Sources**: install community Aidoku/Paperback repositories, add Sora video modules, or link your home server (Komga, Kavita, Suwayomi, or Jellyfin).
3. **Enjoy Your Media**: flip manga pages from right to left, scroll continuous webtoons, annotate prose in ebooks, or stream anime episodes with custom subtitles and Picture in Picture.
