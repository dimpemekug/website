---
title: "Introduction to rMux"
description: "Overview of rMux for Mac: lightweight video editor, instantaneous lossless trimming, VideoToolbox hardware transcoding, and remuxing."
project: "rmux"
order: 1
section: "Getting Started"
---

## What is rMux

**rMux** is a fast, lightweight video editor for **macOS 14 or newer** built to handle frequent media tasks — trimming clips, converting formats, extracting audio, and remuxing streams — without the sluggishness of heavyweight nonlinear editing suites.

Built entirely with native **SwiftUI** aligned with Apple Human Interface Guidelines, rMux embeds LGPL-compliant binaries of **FFmpeg and ffprobe** accelerated via **VideoToolbox**, delivering speed on both Apple Silicon and Intel Macs.

---

## Design Philosophy

### 1. Document-Less Direct Editing
Traditional suites force you to name projects (`.vcedit`, catalog files) even if you only need to trim a 10-second clip. rMux operates directly:
- Drag your video onto the app canvas or Dock icon.
- Set In and Out markers with <kbd>I</kbd> and <kbd>O</kbd>.
- Save: rMux writes your output directly to disk.

### 2. Lossless Direct Stream Copy
When you simply want to excise a segment without altering resolution or compression, rMux uses **lossless stream copying**: video and audio streams are re-encapsulated byte-for-byte without recalculating pixels. Processing finishes in fractions of a second, with 100% preservation of original fidelity.

### 3. Apple Silicon Hardware Acceleration
For transcode jobs, rMux delegates encoding to Apple Media Engine hardware circuits via Apple VideoToolbox (for **H.264** and **HEVC/H.265**), maximizing export throughput while keeping energy consumption low.

### 4. Sandboxed Privacy
rMux runs within macOS App Sandbox, requires zero network connectivity, and contains no user analytics.
