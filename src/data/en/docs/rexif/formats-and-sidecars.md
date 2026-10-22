---
title: "Formats and XMP Sidecars"
description: "Technical details on how rExif writes each format, differences between MOV and MP4, XMP sidecar files for RAW and known limits."
project: "rexif"
order: 8
section: "Formats & Compatibility"
---

## How Files Are Written

rExif uses a different writing method for each family of formats, always without recompressing images or re-encoding videos:

| Format | Writing method | Recompression |
| :--- | :--- | :---: |
| **JPEG** | ImageIO `CGImageDestinationCopyImageSource`, merging only the changed tags | ❌ No |
| **HEIC, PNG, TIFF** | ImageIO, full copy of the data + metadata replacement | ❌ No |
| **MOV, MP4, M4V** | AVFoundation *passthrough* export + direct patching of the QuickTime atoms (`mvhd`, `tkhd`, `mdhd`) | ❌ No |
| **RAW (CR2, CR3, NEF, ARW, DNG, RAF…)** | Creating or updating the `.xmp` sidecar next to it (original RAW untouched) | ❌ No |
| **Non-writable videos (AVI, MKV, WMV, MTS, 3GP…)** | `.xmp` sidecar next to the file | ❌ No |

## Videos: MOV and MP4/M4V

There's an important difference between QuickTime (MOV) and MPEG-4 (MP4/M4V) containers:

- **MOV**: supports every field. rExif writes them both in the `mdta` space (`com.apple.quicktime.*`) and in the older `udta` block: date, GPS location, make and model, description, author, copyright, keywords and rating.
- **MP4 and M4V**: AVFoundation only writes metadata from the 3GPP (`uiso`) and iTunes (`itsk`) standards:
  - you can edit **date**, **GPS location**, **description**, **author** and **copyright**;
  - you can't edit make, model, keywords and rating. If the changes only touch non-writable fields, the file isn't rewritten. Non-standard metadata already in the MP4 may be lost on save.

> [!NOTE]
> Saving a video copies the whole file: for large videos (e.g. 4K or ProRes) progress is shown in the bottom bar.

## RAW and `.xmp` Sidecar Files

For RAW files (Canon `.CR2`/`.CR3`, Nikon `.NEF`, Sony `.ARW`, Fujifilm `.RAF`, Olympus `.ORF`, DNG) and videos in non-writable containers:
- the original file **is never modified**;
- every field can be edited and goes into a standard XMP file in the same folder, with the same name as the file;
- `.xmp` files are read by **Adobe Lightroom Classic**, **Adobe Bridge**, **Adobe Premiere Pro** and **Capture One**;
- creating the `.xmp` requires access to the folder: if you added single files, rExif asks for it when saving.

*Note*: Finder, Photos and QuickTime don't read `.xmp` files. For these formats the date they show is the file system's, which you can align with rExif (`⇧⌘L`).

## Safe Saving

To work within the macOS sandbox:
1. overwriting is done by writing a full updated copy to a temporary file, which then replaces the original;
2. if the copy is interrupted (e.g. a full disk or an unplugged external drive), the original is restored from an APFS clone, when the folder is accessible;
3. otherwise a full copy is kept next to the file as `name (originale).ext` or `name (modificato).ext`, or in the app container's `Application Support/Recupero` folder.
