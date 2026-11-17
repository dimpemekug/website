---
title: "HEIC Conversion and Metadata Privacy"
description: "How to convert iPhone photos from HEIC to JPEG and remove EXIF metadata and GPS coordinates from images exported with Resizo."
project: "resizo"
order: 3
section: "Privacy & Formats"
---

## From HEIC to JPEG

Photos taken with iPhone and iPad are usually saved in Apple's high-efficiency format (**HEIC/HEIF**). It takes little space, but it is often rejected by websites, portals, Windows PCs, or older graphics software.

With Resizo:
1. Drag your `.heic` files into the window, even dozens or hundreds at a time.
2. In the **Format and Quality** section, choose **JPEG**.
3. Keep the original size (**Percentage** mode at 100%) or resize in the same pass.
4. Click **Resize and Save**: you get JPEG files that open on any device.

Photos taken in portrait come out with the right orientation even when metadata is removed.

---

## Removing EXIF and GPS metadata

Photos carry a lot of information that is invisible but readable by anyone:
- geographic coordinates of where the photo was taken (latitude, longitude, altitude);
- make and model of the phone or camera, lens;
- capture date and time and exposure settings (ISO, shutter speed, aperture).

### The "Keep metadata" option
The option is in the **Saving** section of the options panel and is **off by default**:
- exported files do not contain the original's EXIF and GPS metadata or color profile;
- if you need the metadata, for example for a photo archive, turn on **Keep metadata**: it is copied into the new file as is.

When the Saving section is collapsed, its summary always says whether files will come out "without metadata" or "with metadata". In [Settings](/en/projects/resizo/docs/settings) › Startup Options you can choose whether the option starts turned on.
