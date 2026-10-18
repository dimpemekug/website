---
title: "Supported Formats and XMP Sidecars"
description: "Non-destructive in-place writing, video atom handling without re-encoding, and Adobe XMP sidecars for RAW photos."
project: "rexif"
order: 8
section: "Formats & Compatibility"
---

## Non-Destructive In-Place Writing

Modifying file metadata must never compromise the underlying optical quality of photographs or video recordings. Conventional tools frequently decompress and re-encode images, producing permanent generation loss and compression artifacts.

rExif operates directly at the container header level, avoiding any re-encoding steps.

## Raster Image Formats (In-Place Updates)

For standard raster images, rExif modifies exclusively the dedicated metadata chunks:

- **JPEG / JPG**: Rewrites binary markers `APP1` (EXIF), `APP2` (ICC Profile), and `APP13` (IPTC/Photoshop). Pixel arrays remain bit-for-bit identical to the originals.
- **HEIC / HEIF (Apple)**: Navigates the ISOBMFF container structure, updating the `meta` and `iloc` boxes without recompressing HEVC-encoded video frames.
- **PNG**: Manages native `eXIf`, `tEXt`, `zTXt`, and `iTXt` chunks.
- **TIFF**: Updates Image File Directories (IFD) while preserving full 16-bit or 32-bit color fidelity.

## Video Containers (QuickTime & MP4)

Modern video files store temporal metadata inside container atom trees:

- **MOV, MP4, M4V**: rExif traverses the QuickTime atom hierarchy (`moov` $\rightarrow$ `mvhd` and `trak` $\rightarrow$ `mdia` $\rightarrow$ `mdhd`).
- When adjusting capture timestamps, 32-bit and 64-bit timestamps within the `mvhd` atom are updated in place with zero video or audio transcoding. The process is instantaneous even for 50 GB ProRes 422 or 8K HEVC recordings.

## RAW Camera Formats and Sidecar `.xmp` Files

Proprietary RAW files produced by professional cameras hold un-demosaiced sensor data:
- **Canon**: `.CR2`, `.CR3`
- **Nikon**: `.NEF`, `.NRW`
- **Sony**: `.ARW`
- **Fujifilm**: `.RAF`
- **Olympus / OM System**: `.ORF`
- **Panasonic**: `.RW2`
- **Adobe Digital Negative**: `.DNG`

> [!NOTE]
> To preserve the forensic integrity of the camera capture, rExif leaves RAW binary files unaltered. Instead, it creates industry-standard **Adobe XMP Sidecars**:
> - Changes to dates, GPS coordinates, copyright, keywords, and star ratings are stored in an adjacent XML file with the `.xmp` extension (e.g. `_DSC0012.ARW.xmp` or `_DSC0012.xmp`).
> - The sidecar file is natively detected and prioritized by **Adobe Lightroom Classic**, **Adobe Camera Raw**, **Bridge**, **Capture One**, and **Darktable**.

## Broadcast Video Containers (AVI, MKV, MTS)

For broadcast and legacy video formats such as AVCHD (`.mts`, `.m2ts`), Matroska (`.mkv`), and AVI, rExif generates companion `.xmp` sidecars recognized by non-linear editing suites like **Adobe Premiere Pro** and **DaVinci Resolve**.
