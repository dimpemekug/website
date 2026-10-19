---
title: "Anime and Video Playback"
description: "Native video player for anime: dual AVPlayer + libmpv engines for MKV, Sora streaming modules, Jellyfin, AniSkip intro skipping, ASS subtitles, and PiP."
project: "rmanga"
order: 5
section: "Anime & Video"
---

## Native Video Playback Suite

rManga includes a dedicated video player optimized for animated series and movies, bypassing the constraints of standard iOS system players:

- **Dual Rendering Engines**:
  - **Native Apple AVPlayer**: used for HLS (`.m3u8`) streaming, MP4, and MOV files. Features automatic Picture in Picture (PiP), Apple TV AirPlay, and background audio playback with lock screen *NowPlaying* controls.
  - **MPVEngine (libmpv via Metal)**: handles complex containers including **MKV, WebM, AVI, and TS**, utilizing VideoToolbox hardware acceleration over a dedicated Metal layer (`CAMetalLayer`). Plays high-definition files directly without forcing server transcoding.
- **Glassmorphic Player UI**: auto-rotates to landscape orientation on iPhone and includes a screen lock button to prevent accidental touches.

---

## Sora Modules and Anime Streaming

Connect external anime sources using **Sora video modules**:
- **Quick Installation**: paste a module JSON manifest URL in *Browse › More › Get Extensions › Sora*, or tap a deep link with the scheme `rmanga://add-module?url=...`.
- **Multi-Server Streaming**: modules automatically discover stream mirrors, resolutions (1080p, 720p, 480p), and required network headers.
- **Unified Library Presence**: anime series live alongside your manga: episodes are grouped by season, accompanied by 16:9 thumbnails and episode overviews from Anira and Kitsu.
- **Background Offline Downloads**: download episodes via resilient background HLS sessions (`.movpkg` or `.mp4`) to watch on flights or offline commutes.

---

## Automatic Intro Skipping (AniSkip & AniList)

Eliminate repetitive manual scrubbing through intro themes:
1. **Automatic Show Identification**: rManga matches anime titles with AniList to resolve official MyAnimeList series IDs.
2. **AniSkip Timestamp Integration**: automatically fetches exact start and end timestamps for:
   - **Opening Themes (OP)**
   - **Episode Recaps**
   - **Ending Themes (ED / Outro)**
3. **"Skip Intro" Button & Auto-Skip**: an interactive pill appears on-screen during theme segments. Tap to jump forward immediately, or enable **Auto Skip** in *Settings › Video*.

---

## Stylized ASS/SSA Subtitles and Audio Tracks

- **Advanced Anime Subtitles (ASS/SSA)**: with the mpv engine, complex fan-subtitles retain original custom fonts, character-specific color palettes, on-screen positioning, and karaoke effects.
- **External Subtitles**: load standalone `.srt` or `.vtt` subtitle files directly and fine-tune synchronization using the subtitle delay slider.
- **Multi-Audio Selection**: switch between Japanese original audio and international dubs, saving your audio preference across the entire series.

---

## Touch Gestures on the Player
- **Double Tap Left / Right**: seek backward or forward by 10 seconds (stackable).
- **Long Press**: activates **2x playback speed** while holding your finger down.
- **Horizontal Swipe**: fluid scrubbing across the timeline with offset previews.
- **Vertical Swipe**: left half adjusts screen brightness; right half adjusts system volume.
