---
title: "Lossless Trimming and In/Out Points"
description: "How to trim videos instantly without re-encoding, navigate keyframes with ffprobe, and execute direct stream copies in rMux."
project: "rmux"
order: 2
section: "Editing"
---

## Understanding Lossless Trimming

Modern video codecs (such as H.264 or HEVC packed in MP4, MKV, or MOV) are composed of keyframes (*I-Frames*) and inter-frames (*P-Frames* and *B-Frames*) that encode only pixel motion changes.

Exporting in **Lossless Mode**:
- **Zero Generation Loss**: audio and video streams are copied directly into the new container without decompression cycles.
- **Instantaneous Export**: a 2-hour 4K recording trims in mere seconds, bottlenecked only by SSD read and write speeds.
- **Cool & Quiet**: zero heavy CPU or GPU rendering load.

---

## Setting In and Out Points

The playback timeline offers frame-accurate scrubbing:

1. **Scrub the Timeline**: tap the spacebar to play/pause, or drag the playhead slider.
2. **Set In Point**: press <kbd>I</kbd> at the start frame of your desired clip.
3. **Set Out Point**: press <kbd>O</kbd> at the ending boundary.
4. **Step Frames**: tap arrow keys <kbd>←</kbd> and <kbd>→</kbd> to step single frames forward or backward.

---

## Keyframe Alignment

Lossless trimming requires that video streams begin on a valid *Keyframe* to prevent visual glitches or frozen opening frames:
- rMux plots actual keyframe boundaries detected via `ffprobe` directly on the timeline.
- If your chosen In point lands on an intermediate delta frame, rMux provides smart keyframe snapping or partial smart-transcoding for opening frames.
