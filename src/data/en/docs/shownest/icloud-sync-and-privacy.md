---
title: "iCloud Sync and Privacy"
description: "Cross-device synchronization via Apple iCloud Key-Value Storage, data backup, and TMDB privacy practices in ShowNest."
project: "shownest"
order: 4
section: "Data & Privacy"
---

## iCloud Key-Value Storage Synchronization

ShowNest keeps your watchlist and episode progress in sync using Apple's native **iCloud Key-Value Storage** (`NSUbiquitousKeyValueStore`):

- **Automatic Multi-Device Sync**: mark an episode as watched on your iPad, and your iPhone updates in the background automatically.
- **Strict Personal Privacy**: your library resides solely in your personal Apple iCloud sandbox. No external servers or developer backends have access to your watchlist.
- **Zero Storage Impact**: the compact synchronization payload consumes practically unnoticeable storage within your iCloud quota.

---

## The Movie Database (TMDB) Integration

- **Metadata Retrieval**: ShowNest connects to the public TMDB API strictly to fetch titles, overviews, broadcast schedules, and artwork.
- **Zero Personal Data Transmission**: queries sent to TMDB contain zero user identifiers, contacts, or viewing histories.
- **On-Device Image Caching**: fetched artwork is cached locally on your device, drastically reducing mobile cellular data consumption.
