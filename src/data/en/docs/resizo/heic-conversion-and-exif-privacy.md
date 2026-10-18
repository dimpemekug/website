---
title: "HEIC Conversion and EXIF Privacy"
description: "How to convert iPhone HEIC captures to JPEG and strip sensitive EXIF and GPS location metadata with Resizo."
project: "resizo"
order: 3
section: "Privacy & Formats"
---

## Batch HEIC to JPEG Conversion

Photos taken with iPhone and iPad default to Apple's High Efficiency Image Container (**HEIC / HEIF**). While space-efficient on iOS devices, HEIC files frequently encounter compatibility barriers with web CMSs, print kiosks, and Windows environments.

With Resizo you can:
1. Drag batches of `.heic` captures into the workspace.
2. Select **JPEG** as target format.
3. Choose whether to scale dimensions or retain original resolution.
4. Save: HEIC images are decoded and converted to universal JPEG files compatible across all platforms.

---

## EXIF and GPS Metadata Stripping

Digital photos contain invisible metadata tags:
- Precise GPS coordinates (latitude, longitude, altitude of your home or location).
- Device make, camera model, lens serial number, and firmware version.
- Timestamps and camera exposure settings (ISO, focal length, aperture).

### "Remove EXIF Metadata" Option
In Resizo, EXIF stripping is **enabled by default**:
- Resized images are rendered into fresh image buffers completely stripped of EXIF, TIFF, and geolocation headers.
- If you need to keep metadata for professional photography archives, simply uncheck the box before processing.
