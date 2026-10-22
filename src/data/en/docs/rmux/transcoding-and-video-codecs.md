---
title: "Transcoding and Video Codecs"
description: "VideoToolbox hardware encoders for H.264 and HEVC, AV1, VP9, Apple ProRes, containers and quality control in rMux."
project: "rmux"
order: 3
section: "Conversion"
---

## Copy or Transcode

In the **Video Inspector** you choose, for the video track:
- **Copy**: the video is copied without re-encoding (only the container or duration changes).
- **Transcode**: the video is re-encoded with the encoder and settings you pick.

The file format (**MP4, MOV, MKV, WebM or AVI**) is chosen next to the export button. If a container doesn't support a codec, rMux warns you before exporting.

All bundled codecs are built without GPL or non-free components (LGPL and BSD licenses), as required for the Mac App Store.

---

## Available Video Codecs

### 1. H.264 and HEVC/H.265 with VideoToolbox
- **Hardware acceleration**: uses the Media Engine in Apple chips to encode far faster than software.
- **Profiles**: baseline, main and high for H.264; main and main10 (10-bit) for HEVC, or automatic.

### 2. Apple ProRes
**422 Proxy, 422 LT, 422, 422 HQ, 4444 and 4444 XQ** profiles, for anyone who wants a smooth intermediate format for editing.

### 3. AV1 and VP9
- **AV1 (with SVT-AV1)**: next-generation, high-efficiency compression, well suited to streaming and the web.
- **VP9 (with libvpx)**: widespread on the web, ideal with the WebM container.

rMux can also **read** AV1 video thanks to the dav1d decoder.

---

## Quality Control

In the encoding panel you can choose:
- **Quality (CRF)**: constant visual quality; the encoder assigns the bitrate each scene needs.
- **Average Bitrate**: a fixed bitrate in kbps, with an optional **two-pass encoding** for better distribution.
- **File Size**: enter the megabytes you want and rMux works out the bitrate to hit them.

Other options:
- encoding **speed**, from "Very Slow (best quality)" to "Very Fast (larger file)";
- **frame rate**: same as source or 23.976, 24, 25, 29.97, 30, 48, 50, 59.94 or 60 fps;
- **advanced options**: level, keyframe interval, number of B-frames and track title.

Resolution, cropping and rotation are set in the filters section (see [Filters, Subtitles and Merging](/en/projects/rmux/docs/filters-subtitles-and-merging)).
