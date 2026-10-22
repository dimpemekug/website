---
title: "iCloud Sync and Privacy"
description: "Sync between iPhone and iPad through the iCloud key-value store, use of the TMDB API and offline browsing in ShowNest."
project: "shownest"
order: 4
section: "Data & Privacy"
---

## iCloud Sync

ShowNest can sync your library and watched episodes through the **iCloud key-value store** (`NSUbiquitousKeyValueStore`). Sync is optional and off by default: you turn it on in Settings.

- **Automatic once enabled**: mark an episode as watched on your iPad and it shows up as watched on your iPhone too, with nothing to do.
- **Conflicts resolved show by show**: if you edit the same show on two devices, the most recent change wins; shows you remove are deleted on your other devices as well.
- **Private**: your data stays in your iCloud account; the developer has no access to the shows you follow.
- **Lightweight**: the library travels compressed and takes up very little space.
- **Visible status**: a page in Settings shows the sync status, the time of the last update and any problems (for example iCloud being unavailable). That's also where you turn sync on and off.

---

## Use of the TMDB API

- **Metadata only**: ShowNest calls the TMDB API solely to download information about shows, seasons, episodes, synopses and posters.
- **No personal data**: nothing about you or your viewing habits is added to requests sent to TMDB.
- **Local cache**: downloaded responses are kept on the device, so shows you've already opened remain available offline and data usage goes down.

*Data provided by The Movie Database (TMDB). ShowNest uses the TMDB API but is not endorsed or certified by TMDB.*
