---
title: "Lossless Trimming and In/Out Points"
description: "How to trim videos without re-encoding in rMux: a timeline with frames and zoom, In and Out points, keyframes, several segments, and undo."
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

## The Timeline

Below the preview, the timeline shows:
- a strip with the **video's frames** and a **ruler** with the times;
- the **current time**, as a clock (`01:23.45`) or as a **timecode** (`01:23:12`, where the last figure is the frame within the second): click the time to switch format;
- when you hover over the timeline, the **frame at that point** (turn it off in **Settings › Preview**);
- the selection between the In and Out points, with the parts left out dimmed.

To zoom the timeline, **pinch on the trackpad**, scroll while holding <kbd>⌘</kbd>, or use the **Zoom In**, **Zoom Out**, and **Zoom to Fit** buttons at the bottom right.

---

## Setting In and Out Points

1. **Move through the video**: play it with <kbd>Space</kbd>, drag the playhead, or step one frame with <kbd>←</kbd> and <kbd>→</kbd>.
2. **In point**: press <kbd>⌘</kbd> <kbd>I</kbd> (or **Set In Point** below the preview) where the video should start.
3. **Out point**: press <kbd>⌘</kbd> <kbd>O</kbd> where the video should end.
4. **Fine-tune**: drag the orange handles at the edges of the selection.
5. **Preview Selection**: plays just the chosen part, so you can check the cut.
6. **Clear**: <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> removes the marks.

Marks, segments, and resets can be **undone** with <kbd>⌘</kbd> <kbd>Z</kbd> and redone with <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>. All the keys for moving through the video are in [Preview, Keyboard, and Settings](/en/projects/rmux/docs/preview-keyboard-and-settings).

### Multiple Segments
**Add Segment** locks in the current selection so you can mark another one, even non-contiguous. On export, all segments are joined into a single file. With several segments, the export stays lossless only if every included track is on Copy and no subtitles are involved; otherwise rMux re-encodes and tells you so.

---

## Keyframes

With direct stream copy, a clean cut has to start on a keyframe, or the first moments may show artifacts:
- rMux marks the position of the **real keyframes** on the timeline, detected with `ffprobe`.
- <kbd>⌥</kbd> <kbd>←</kbd> and <kbd>⌥</kbd> <kbd>→</kbd> jump to the previous or next keyframe, so you can place your cut points exactly on one.
- If you need a frame-accurate cut anywhere, set the video track to **Transcode**: the video will be re-encoded.
