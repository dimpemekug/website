---
title: "Audio and Tracks"
description: "Copying, converting and excluding audio tracks, volume, sync, track metadata and track extraction in rMux."
project: "rmux"
order: 4
section: "Audio"
---

## Audio Tracks One by One

A video file often contains several audio streams (different languages, commentary, 5.1 surround). rMux's **Audio Inspector** shows each track with its own settings:

- **Include or exclude**: turn a track off to leave it out of the exported file. Excluding every track gives you a silent video.
- **Copy**: the track is copied as is, with no loss.
- **Transcode**: the track is converted to **AAC, AC3, MP3, Opus, FLAC or PCM**, with bitrate, channels (same as source, mono, stereo or 5.1) and sample rate (same as source, 44.1 or 48 kHz).

---

## Volume and Sync

- **Gain**: raise or lower the track volume in dB.
- **Sync**: fix the delay between audio and video by moving the track earlier or later in 100-millisecond steps, even without re-encoding.

---

## Track Metadata

For each track you can edit:
- the **title** (e.g. "Director's commentary");
- the **language** (e.g. `eng`);
- the **default track**, the one players turn on first in files with several tracks.

---

## Extracting a Track

**Extract…** saves an audio track to a separate file without re-encoding: rMux copies it into a Matroska audio file (`.mka`), which accepts any codec. Likewise, in the Video Inspector you can use **Extract Video…** to save the video track alone, without audio.
