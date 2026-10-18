---
title: "Transcoding and Video Codecs"
description: "Hardware-accelerated VideoToolbox H.264/HEVC encoding, SVT-AV1, VP9, Apple ProRes, and quality controls in rMux."
project: "rmux"
order: 3
section: "Conversion"
---

## Transcoding Engine

When you need to reformat a video, downscale resolution (e.g. 4K to 1080p), or adjust bitrate for sharing, rMux's Video Inspector provides professional encoding controls.

All bundled codecs use permissive open licenses (LGPL and BSD), ensuring strict compliance with App Store security models.

---

## Supported Video Codecs

### 1. Apple VideoToolbox (H.264 & HEVC / H.265)
- **Dedicated Silicon Encoding**: leverages Apple Silicon Media Engine decoders/encoders (M1/M2/M3/M4) and Intel Quick Sync.
- **HEVC 10-bit & HDR**: fully preserves wide color gamuts and 10-bit Dolby Vision HDR captures from iPhone cameras.
- **Speed**: performs 5x to 10x faster than pure CPU software encoding.

### 2. Apple ProRes (422 / 422 HQ / Proxy)
Ideal for videographers and editors requiring intra-frame intermediate formats for smooth editing in Final Cut Pro, DaVinci Resolve, or Premiere.

### 3. SVT-AV1 & libvpx VP9
- **AV1 (via SVT-AV1 BSD)**: state-of-the-art compression efficiency for modern web distribution.
- **VP9 (via libvpx BSD)**: open web video standard compatibility.

---

## Quality and Output Controls

- **Constant Rate Factor (CRF)**: maintains consistent perceptual visual clarity across simple and complex scenes.
- **Target Bitrate**: specify explicit bitrates (e.g., 8 Mbps) to target target file size requirements.
- **Resolution & Frame Rates**: downsample to 1440p, 1080p, or 720p, and adjust frame rates to 24, 30, or 60 fps.
