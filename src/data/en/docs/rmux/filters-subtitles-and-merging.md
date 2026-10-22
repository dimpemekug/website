---
title: "Filters, Subtitles and Merging"
description: "Cropping, resizing, rotation, filters and LUTs, SRT and ASS/SSA subtitles, frame capture and merging several videos in rMux."
project: "rmux"
order: 5
section: "Editing"
---

## Cropping and Filters

When the video track is on **Transcode**, you can apply a chain of filters with a preview:
- **Crop** right on the preview by dragging the edges;
- **Resize**, **rotate** (90°, 180°, 270°) and **flip**;
- **Deinterlace**, **reduce noise** and **sharpen**;
- **Correct color** and apply **`.cube` LUTs**, with a before/after comparison.

**Capture Frame…** saves the current frame as a PNG or JPEG image.

---

## Subtitles

- **Import** **SRT** and **ASS/SSA** files, even with older character encodings.
- **Toggleable track** or **burned into the picture**, with the size, color and position (bottom or top) you choose.
- **Sync**: shift the timing of all subtitles earlier or later.
- **Edit** individual lines and save the result as SRT.
- **Extract** subtitles already in the video.

---

## Merging Several Videos

From the **Merge Videos…** window:
1. add clips with **Add Videos…** or by dragging them into the list (at least two videos are needed);
2. drag rows to change their order;
3. pick the output format and start merging.

If the clips are compatible, rMux joins them **without re-encoding**. Otherwise it shows you why they aren't and, with **Re-encode if incompatible** turned on, matches them to the resolution and frame rate of the first clip (audio becomes stereo AAC), using the codec and quality you choose. Subtitles are not included in a merge.
