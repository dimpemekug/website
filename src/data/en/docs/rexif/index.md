---
title: "Introduction to rExif"
description: "Comprehensive guide to using rExif for macOS: visual inspection, batch date & GPS adjustments, and safe privacy metadata scrubbing."
project: "rexif"
order: 1
section: "Getting Started"
---

## What is rExif

**rExif** is an advanced, native macOS metadata editor for photos and videos, designed around a strict **local-first** architecture that merges surgical accuracy with uncompromising privacy.

Whether dealing with a single smartphone snapshot or extensive archives containing tens of thousands of RAW captures from professional mirrorless or DSLR cameras, rExif enables you to inspect, repair, synchronize, and sanitize EXIF, IPTC, and XMP tags in a responsive and fluid desktop environment.

## Core Principles

1. **Non-Destructive Orange Diff**: No bytes on disk are altered until you explicitly click the *Save* button. Every edited property is highlighted in high-contrast orange in the UI, letting you inspect before and after values with complete confidence.
2. **Strictly Local Processing**: Images and video files are decoded and processed directly on your Mac, leveraging Apple Silicon unified memory. Files are never uploaded to remote servers or third-party cloud services.
3. **Pixel Quality Preservation**: Rewriting supported raster formats (JPEG, HEIC, PNG, TIFF) modifies only the metadata header chunks without ever recompressing the underlying pixel raster. For QuickTime video containers (MOV, MP4, M4V), temporal metadata is adjusted without video transcoding. For professional camera RAWs, adjustments are safely stored in industry-standard `.xmp` sidecar files.

## Feature Overview

- **Advanced Date Repair**: Batch time shifts for cameras with misconfigured internal clocks, automatic date extraction from filenames or Google Takeout JSON files, smart neighbor interpolation, and filesystem timestamp synchronization.
- **Interactive Geolocation & GPX**: Drag-and-drop coordinate assignment on native Apple Maps, address search, automated matching with GPX tracking files from fitness devices (Garmin, Strava, Apple Watch), and reverse geocoding.
- **IPTC Tags, Author & Copyright**: Rapid assignment of copyright notices with dynamic tokens such as `© {year}`, photographer credits, descriptive captions, hierarchical keywords, and star ratings compatible with Adobe Lightroom and Capture One.
- **Privacy Sanitization**: One-click stripping of GPS coordinates, hardware serial numbers, and embedded thumbnails before sharing photos via email or social networks.
- **Batch Renaming**: Customizable renaming patterns with dynamic tokens like `{date}_{nnn}` to organize massive photo collections.
- **Interactive Table with Smart Filters**: Instant search across thousands of files, quick filters for missing dates or GPS coordinates, and bidirectional CSV import/export.

## Supported Formats Matrix

| Image / Video Format | Writing Method | Pixel Recompression | Software Compatibility |
| :--- | :---: | :---: | :--- |
| **JPEG / JPG** | In-place (Header) | ❌ Zero recompression | Universal |
| **HEIC / HEIF** | In-place (Header) | ❌ Zero recompression | Apple, Adobe, Web |
| **PNG / TIFF** | In-place (Chunk/Tag) | ❌ Zero recompression | Desktop & Design |
| **MOV / MP4 / M4V** | QuickTime Moov Atom | ❌ Zero transcoding | QuickTime, Final Cut |
| **RAW (CR2, CR3, NEF, ARW, DNG)** | Sidecar `.xmp` | Original file untouched | Lightroom, Bridge, Darktable |
| **AVI / MKV / MTS** | Sidecar `.xmp` | Original file untouched | Premiere, DaVinci Resolve |

## Next Steps

- [Installation & Requirements](/en/projects/rexif/docs/installation): Hardware requirements, PhotoKit integration, and settings.
- [Date Management & Repair](/en/projects/rexif/docs/date-management): Shifting time intervals, reference photo alignment, and Google Takeout sync.
- [Geolocation & Apple Maps](/en/projects/rexif/docs/geolocation-maps): Drag & drop geotagging, GPX tracking, and reverse geocoding.
- [IPTC Metadata, Author & Copyright](/en/projects/rexif/docs/iptc-metadata-copyright): Dynamic templates, keywords, and star ratings.
- [Batch Renaming & CSV Export](/en/projects/rexif/docs/batch-rename-export): Token-based rename patterns and spreadsheet round-trips.
- [Metadata Scrubbing & Privacy](/en/projects/rexif/docs/metadata-scrubbing): Sanitizing files and exporting clean copies for public sharing.
- [Supported Formats & XMP Sidecars](/en/projects/rexif/docs/formats-and-sidecars): Technical writing methods, MOV vs MP4, and RAW sidecars.
- [Shortcuts & Smart Filters](/en/projects/rexif/docs/shortcuts-and-filters): Complete native keyboard shortcuts and smart selection queries.
