---
title: "HEIC Conversion and Metadata Privacy"
description: "How to convert iPhone photos from HEIC to JPEG and strip EXIF metadata and GPS coordinates from exported images with Resizo."
project: "resizo"
order: 3
section: "Privacy & Formats"
---

## From HEIC to JPEG

Photos taken with iPhone and iPad are usually saved in Apple's high-efficiency format (**HEIC/HEIF**). It is great for saving space, but often rejected by websites, online portals, Windows PCs or older graphics software.

With Resizo:
1. Drag your `.heic` files into the window, even dozens or hundreds at a time.
2. Choose **JPEG** as the output format.
3. Keep the original size (percentage mode at 100%) or resize in the same pass.
4. Click **Resize and Save**: you get JPEG files that any device can open.

Portrait photos come out with the correct orientation even when metadata is removed.

---

## Removing EXIF and GPS Metadata

Photos contain a lot of invisible information that anyone can read:
- precise coordinates of where the photo was taken (latitude, longitude, altitude);
- make and model of the phone or camera, and the lens;
- date and time of the shot and exposure settings (ISO, shutter speed, aperture).

### The "Keep original metadata" Option
In Resizo this option is **off by default**:
- exported files do not carry the original's EXIF and GPS metadata or color profile;
- if you need the metadata, for example for a photo archive, turn on **Keep original metadata (EXIF, GPS, color)** in the Metadata section of the options.
