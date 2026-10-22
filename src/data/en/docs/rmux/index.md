---
title: "Introduction to rMux"
description: "Overview of rMux for Mac: a lightweight video editor with re-encode-free trimming, VideoToolbox hardware transcoding, audio tracks, subtitles, filters and clip merging."
project: "rmux"
order: 1
section: "Getting Started"
---

## What is rMux

**rMux** is a fast, lightweight video editor for **macOS 14 Sonoma or later**, for **Macs with Apple silicon**. It is built for the most common jobs on video files (trimming clips, changing format, fixing audio and subtitles, merging clips) without the sluggishness and complexity of full editing suites.

It is written in **SwiftUI** following Apple's guidelines and bundles **FFmpeg and ffprobe**, built without GPL components (LGPL license), with **VideoToolbox** hardware acceleration for H.264 and HEVC.

---

## Philosophy

### 1. No Projects: Open and Edit
rMux creates no project files. The workflow is direct:
- open a video by dragging it into the window or onto the Dock icon, with **Open With…** from the Finder or with **File › Open Video…**;
- set the start and end of the cut with <kbd>⌘</kbd> <kbd>I</kbd> and <kbd>⌘</kbd> <kbd>O</kbd>;
- export (<kbd>⌘</kbd> <kbd>↩</kbd>): rMux saves a new file and never modifies the original.

### 2. Trimming Without Quality Loss
If you only need to remove the start and end of a recording, or change container without touching codec and resolution, rMux **copies the audio and video streams as they are** into the new file, without recomputing any frames. It takes seconds and keeps 100% of the original quality.

### 3. Hardware Acceleration
When re-encoding is needed, rMux uses the Mac's Media Engine through **VideoToolbox** for **H.264** and **HEVC/H.265**: fast encoding and low power use. AV1, VP9 and Apple ProRes are available too.

### 4. Everything on Your Mac
The app runs in the App Sandbox and fully offline: no uploads, no account, no tracking. Italian and English interface, light, dark or automatic theme.

---

## What You Can Do

- **Trim** one or more segments and join them into a single file.
- **Convert** to MP4, MOV, MKV, WebM or AVI, with H.264, HEVC, AV1, VP9 or ProRes.
- **Manage audio tracks**: copy, convert or exclude them, adjust volume and sync, extract them.
- **Add subtitles** in SRT and ASS/SSA as a track or burned into the picture.
- **Crop and correct** the picture: cropping, resizing, rotation, filters and LUTs.
- **Merge several videos** into one file.
- **Queue** several exports and keep working.
