---
title: "Audio Management and Tracks"
description: "Extracting audio streams, muting tracks, replacing background audio, and codec support for AAC, MP3, Opus, and FLAC in rMux."
project: "rmux"
order: 4
section: "Audio"
---

## Audio Track Inspection

Containers frequently house multiple audio tracks (foreign language dubs, director commentaries, 5.1 surround mixes). rMux lets you configure each stream:

- **Direct Stream Copy**: preserves existing audio bitstreams without re-sampling.
- **Audio Transcoding**: converts incompatible audio formats into standard stereo AAC or MP3.
- **Channel Downmixing**: downmix 5.1 surround mixes to stereo or retain all discrete channels.

---

## Extracting Audio from Video

To save speech or music tracks as standalone audio files:

1. Open your video in rMux.
2. Select **Audio Only** in the export panel.
3. Choose your target audio format:
   - **AAC / M4A**: pristine Apple high-efficiency audio.
   - **MP3 (via LAME LGPL)**: universal playback compatibility.
   - **Opus (BSD)**: ultra-compact, high-clarity voice and podcast encoding.
   - **FLAC / WAV (PCM)**: lossless master fidelity.
4. Export: rMux extracts the soundtrack in seconds.

---

## Muting and Track Replacement

- **Mute Video**: uncheck the audio track to export silent video without third-party software.
- **Replace Audio Track**: import external audio files (e.g. remastered music or clean voiceovers) to substitute or supplement original camera audio.
