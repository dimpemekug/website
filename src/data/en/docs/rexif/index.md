---
title: "Introduction to rExif"
description: "Overview of rExif for macOS: native SwiftUI app, orange non-destructive preview and batch editing of photo and video metadata."
project: "rexif"
order: 1
section: "Getting Started"
---

## What is rExif

**rExif** is a native photo and video metadata editor for macOS (built with SwiftUI for macOS 15 Sequoia or later, for Macs with Apple Silicon and Intel).

It's designed to fix the most common problems in photo and video libraries quickly and safely:
- Wrong or missing capture dates (camera clocks not set, time zone changes, cloud exports).
- Photos without a GPS location.
- Cryptic or unsortable file names (`_DSC0421.JPG`, screenshots, WhatsApp saves).
- Author, copyright, keyword and rating fields to standardize for professional catalogs.
- Files to clean up before sharing online, removing location and personal data.

## Principles

1. **Orange change preview**: nothing is written to disk until you press **Save** (`⌘S`). Every calculated or edited value appears in orange in the table and the inspector, so you can check the result row by row.
2. **Writing without recompression**:
   - **JPEG**: rewritten with `CGImageDestinationCopyImageSource`, merging only the changed tags without touching the pixels.
   - **HEIC, PNG, TIFF**: full copy of the image data, replacing only the metadata.
   - **MOV, MP4, M4V**: *passthrough* export with direct patching of the QuickTime atoms (`mvhd`, `tkhd`, `mdhd`), without re-encoding audio or video.
   - **RAW (CR2, CR3, NEF, ARW, DNG, RAF…) and non-writable videos (AVI, MKV, WMV, MTS…)**: the original file is never touched; changes go into a standard `.xmp` sidecar next to the file, read by Adobe Lightroom, Bridge and Premiere.
3. **Privacy**: the app runs in the macOS sandbox and has no servers of its own, third-party SDKs, accounts or analytics. The only connections are those made by Apple's MapKit and Core Location frameworks when you use the map, place search or city and country lookup from coordinates.
4. **Data safety**: overwriting goes through a temporary file and an APFS clone. If it's interrupted (e.g. a disk is unplugged), the original is restored automatically or a full copy is kept, as a last resort in `Application Support/Recupero`.

## View Modes

From the toolbar or with a shortcut you can switch between two modes:
- **As Table** (`⌃⌘1`): full list with resizable thumbnails (`⌘+`, `⌘-`), sortable columns and multiple selection.
- **As Map** (`⌃⌘2`): every item with a location on an Apple Maps map, each with its own pin.

## Next Steps

- [Installation and Requirements](/en/projects/rexif/docs/installation): platforms, sandbox and Photos library integration.
- [Date Management and Repair](/en/projects/rexif/docs/date-management): shifting by intervals, camera clock correction and dates from Google Takeout.
- [Geolocation and Apple Maps](/en/projects/rexif/docs/geolocation-maps): GPS location, GPX tracks and city and country from coordinates.
- [Text Metadata and Copyright](/en/projects/rexif/docs/iptc-metadata-copyright): templates with placeholders, keywords and star ratings.
- [Batch Renaming and CSV](/en/projects/rexif/docs/batch-rename-export): rename templates and metadata export and import as CSV.
- [Clean-Up and Copies Without Personal Data](/en/projects/rexif/docs/metadata-scrubbing): exporting copies to share.
- [Formats and XMP Sidecars](/en/projects/rexif/docs/formats-and-sidecars): technical details on MOV/MP4, RAW and known limits.
- [Shortcuts and Quick Selections](/en/projects/rexif/docs/shortcuts-and-filters): keyboard shortcuts and the Select menu.
