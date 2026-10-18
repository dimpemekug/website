---
title: "Metadata Scrubbing and Privacy"
description: "Sanitizing sensitive GPS coordinates, device serial numbers, and embedded thumbnails for safe public sharing."
project: "rexif"
order: 7
section: "Privacy & Security"
---

## Why Metadata Scrubbing Matters

Photographs captured using modern smartphones and camera bodies embed a considerable amount of background telemetry:
- **Pinpoint Geographic Data**: GPS latitude, longitude, altitude, and heading angle.
- **Hardware Serial Numbers**: Unique identifier tokens for the camera body, lens, and internal sensor.
- **User and Environment Telemetry**: Computer user account names, editing software history, and embedded thumbnail images which might reveal uncropped versions of a redacted photo.

Sharing unscrubbed files on public web forums, classified ads, or messaging channels exposes personal routines and home addresses to automated scrapers.

## Sanitization Profiles in rExif

rExif provides granular scrubbing options to balance technical utility with privacy needs:

### 1. Remove GPS Only
Retains all technical exposure parameters (exposure time, f-stop, ISO, color profile) while stripping every geographic reference:
- Clears `GPSLatitude`, `GPSLongitude`, `GPSAltitude`, `GPSTimeStamp`, and `GPSImgDirection`.
- Removes reverse-geocoded IPTC city, state, postal code, and country records.

### 2. Remove Hardware and Personal Telemetry
Removes data identifying specific individuals or hardware serial numbers:
- Camera body and optical lens serial numbers.
- Owner name, artist attribution, and free-form user comments.
- Manufacturer proprietary *MakerNotes* (Apple, Canon, Nikon, Sony).

### 3. Full Sanitization (Strip All Metadata)
Removes all EXIF, IPTC, and XMP structures alongside embedded thumbnail caches:
- Retains only the foundational headers necessary for image rendering (dimensions, sRGB/Display P3 color space, and DPI density).
- Often reduces total file weight by 15% to 25%, expediting web delivery.

## Exporting Sanitized Copies

To safeguard primary raw assets, rExif supports creating clean derivative copies:

1. Select the images intended for distribution.
2. Click **Export Sanitized Copies...**.
3. Choose a destination folder (e.g. `Sharing/`) or append an automated suffix like `_clean.jpg`.
4. Your master library files remain completely intact with full metadata, while exported copies are stripped and safe for public release.

> [!IMPORTANT]
> Unlike web-based metadata stripping tools that require uploading your photos to third-party cloud servers, rExif executes all processing within local Mac memory, ensuring total confidentiality.
