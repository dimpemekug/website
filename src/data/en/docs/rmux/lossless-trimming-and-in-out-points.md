---
title: "Lossless Trimming and In/Out Points"
description: "How to trim videos without re-encoding using In and Out points, keyframes on the timeline and multiple segments in rMux."
project: "rmux"
order: 2
section: "Editing"
---

## Trimming Without Re-encoding

Compressed video formats (MP4, MKV or MOV in H.264 or HEVC) are made of independent key frames (*keyframes* or *I-frames*) and in-between frames that only store the differences from previous ones (*P-frames* and *B-frames*).

When the video track is set to **Copy**:
- **No loss**: audio and video streams are copied into the new container without decompressing and recompressing the picture.
- **Speed**: even a long video is trimmed in seconds; the limit is your disk speed.
- **No load**: CPU and GPU stay practically idle.

---

## Setting In and Out Points

1. **Scrub the timeline**: start playback or drag the playhead to the spot you want.
2. **In point**: press <kbd>⌘</kbd> <kbd>I</kbd> (or the button below the timeline) where the video should start.
3. **Out point**: press <kbd>⌘</kbd> <kbd>O</kbd> where the video should end. You can also drag the handles on the timeline.
4. **Preview**: play just the selection to check the cut.
5. **Clear**: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> removes the marks.

### Multiple Segments
**Add Segment** locks in the current selection so you can mark another one, even non-contiguous. On export, all segments are joined into a single file. With several segments, the export stays lossless only if every included track is on Copy and no subtitles are involved; otherwise rMux re-encodes and tells you so.

---

## Keyframes

With direct stream copy, a clean cut has to start on a keyframe, or the first moments may show artifacts:
- rMux marks the position of the **real keyframes** on the timeline, detected with `ffprobe`.
- <kbd>⌥</kbd> <kbd>←</kbd> and <kbd>⌥</kbd> <kbd>→</kbd> jump to the previous or next keyframe, so you can place your cut points exactly on one.
- If you need a frame-accurate cut anywhere, set the video track to **Transcode**: the video will be re-encoded.
