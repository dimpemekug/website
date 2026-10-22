---
title: "Anime and Video"
description: "rManga's video player: two engines (AVPlayer and libmpv for MKV), Sora modules, Jellyfin, intro skipping with AniSkip, ASS subtitles and Picture in Picture."
project: "rmanga"
order: 5
section: "Anime & Video"
---

## The Player

rManga has its own video player, built for anime, series and films, that goes beyond the limits of the iOS system player:

- **Two engines**:
  - **Apple's AVPlayer**: for HLS (`.m3u8`), MP4 and MOV, with Picture in Picture (which starts on its own when you go to the Home Screen), AirPlay and background audio with controls on the Lock Screen and in Control Center.
  - **libmpv** (via MoltenVK on Metal): for **MKV, WebM, AVI, TS** and files AVPlayer can't read, with VideoToolbox hardware decoding. The episode switches to mpv on its own from the same point; you can also pick the engine by hand or always use mpv (Settings › Video). Picture in Picture and AirPlay stay with AVPlayer.
- **Controls**: on iPhone the player stays in landscape; a padlock blocks accidental taps. Speed, fill/fit, server, audio language and subtitles are in an options sheet.

---

## Sora Video Modules

You can add video sources with **Sora modules**:
- **Adding**: paste the module's JSON address in *Explore › More › Get Extensions › Sora*, or open an `rmanga://add-module?url=…` link. From the same menu, **Play Video Address** opens any `.m3u8` or `.mp4`.
- **Multiple servers**: the module offers the available servers, with the headers they need; the chosen server is remembered for the series and, if a stream won't start, you can switch to another.
- **Episodes in the library**: series sit in the library like manga. Each episode has a 16:9 frame, a bar showing how much you've watched, its length and title; for anime, missing titles and images are filled in from Anira (or Kitsu).
- **Downloads**: episodes download in the background (HLS as `.movpkg`, or the `.mp4` file) so you can watch offline; for HLS playlists choose the maximum quality (1080p, 720p or 480p) in Settings › Video.
- **Other players**: if installed, streamed episodes can also be opened in VLC, Infuse, Outplayer, nPlayer or SenPlayer.

---

## Intro Skipping with AniSkip and AniList

No more fast-forwarding by hand at the start of every episode:
1. **Series lookup**: rManga finds the series' MyAnimeList ID by searching its title on AniList, once per series.
2. **Times from AniSkip**: it fetches the user-submitted times of:
   - **opening**;
   - **recap**;
   - **ending credits**.
3. **"Skip Intro" or automatic skipping**: during that stretch a button appears above the time bar, even with the controls hidden; with **Skip automatically** (Settings › Video) the skip happens on its own.

If the title leads to the wrong series (another season, a special), **Series for skipping intros** in the series menu lets you pick it by hand or turn skipping off.

---

## Subtitles and Audio

- **ASS/SSA**: with mpv, ASS subtitles, embedded or imported, keep their original fonts, colors and positions.
- **External subtitles**: import `.srt`, `.vtt` or `.ass` files, adjust size, color, background and height, and line them up with the delay setting.
- **Audio tracks**: choose the audio language (e.g. dub or original Japanese); the choice is remembered for the series, and in Settings › Video you can prefer Japanese audio for new series.

---

## Player Gestures
- **Double tap left or right**: back or forward 10 seconds (taps in a row add up).
- **Long press**: **2×** speed while you hold your finger down.
- **Horizontal drag**: seek through the video, with the target time and offset shown in the middle.
- **Vertical drag**: brightness on the left, volume on the right.
