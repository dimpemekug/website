---
title: "Introduction to rManga"
description: "Overview of rManga: native manga reader for iPhone and iPad supporting local CBZ/ZIP archives, custom repositories, and vertical Webtoon mode."
project: "rmanga"
order: 1
section: "Getting Started"
---

## What is rManga

**rManga** is a native **iOS and iPadOS** reader engineered to provide a responsive, elegant, and fully customizable reading experience for manga, comic books, and webtoons.

Built with **SwiftUI** and **SwiftData** with an interface crafted around *Liquid Glass* principles, rManga pairs high-performance rendering with direct support for local files in the Apple Files app and modular integration with external sources.

---

## Core Highlights

### 1. Direct Files App Integration
Store and organize your collection directly inside rManga's local documents folder via the iOS Files app or via Finder cable sync from a Mac. The app automatically scans and organizes:
- Compressed **`.cbz`** and **`.zip`** archives.
- Nested series folders containing standard images (JPEG, PNG, WebP).

### 2. Multi-Mode Reading Engine
- **Right-to-Left (Manga)**: authentic pagination for Japanese manga.
- **Left-to-Right (Western Comics)**: traditional page turns for comic books and graphic novels.
- **Vertical Webtoon Scroll**: smooth, continuous vertical cascade designed for infinite-scroll manhwa with zero gaps between panels.

### 3. External Repositories and Remote Servers
Connect to external repositories (using the Aidoku index standard) and self-hosted Suwayomi instances to stream or download series directly to your device.

### 4. ProMotion High-Performance Grid
The library cover grid and unread badges rely on aggregate SwiftData queries, guaranteeing buttery-smooth 120Hz ProMotion scrolling across libraries spanning hundreds of titles and thousands of chapters.
