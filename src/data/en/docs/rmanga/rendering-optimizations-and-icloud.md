---
title: "Rendering Optimizations and iCloud"
description: "High-performance cover grid, soft scroll edge blurred borders, and cross-device reading sync in rManga."
project: "rmanga"
order: 5
section: "Architecture"
---

## High-Performance Cover Grid

In large libraries with dozens of titles and thousands of chapters, list rendering can strain main-thread performance. rManga implements dedicated engineering solutions:

- **Unified Query `chapterCounts()`**: rather than querying individual chapter counts per card (which would trigger hundreds of database lookups per second), rManga performs a single aggregate query. Main-thread block times during refresh fell from over 80 seconds down to under 7 seconds.
- **Overlay Cover Typography**: titles are drawn directly across the lower gradient edge of cover art. Cards stay precisely aligned regardless of varying title lengths.
- **Orientation-Specific Columns**: set 2 to 6 columns independently for iPhone and iPad in portrait and landscape orientations.

---

## The "Soft Scroll Edge" Effect

In standard iOS interfaces, saturated art scrolling beneath the navigation bar produces a hard visual crease. rManga applies the `softScrollEdge()` modifier, stretching the fading gradient so book covers dissolve softly beneath the frosted glass navigation header.

---

## iCloud Synchronization

- **Reading Progress Sync**: read markers, bookmarks, and library states sync across your iPhone and iPad via iCloud and SwiftData.
- **Seamless Device Hand-Off**: start reading a chapter on your commute with your iPhone and pick up from the exact panel on your iPad when you arrive home.
