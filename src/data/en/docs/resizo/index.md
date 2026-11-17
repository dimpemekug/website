---
title: "Introduction to Resizo"
description: "Overview of Resizo for Mac: batch image resizing, estimated file size, HEIC to JPEG conversion, and metadata removal, all offline."
project: "resizo"
order: 1
section: "Getting Started"
---

## What is Resizo?

**Resizo** is an app for **macOS 14 Sonoma or later** (Macs with Apple Silicon and Intel) that resizes, converts, and slims down many images in one go.

Use it to prepare a hundred iPhone photos for a website, convert photos from HEIC to JPEG, or attach light images to an email without their GPS location. Images are processed in parallel, right on your Mac.

---

## Key features

### 1. Privacy
- **Fully offline**: the app has no network access; your files never leave your Mac.
- **Metadata stripped by default**: exported files contain no GPS location, camera model, capture date, or shooting settings unless you choose to keep them.
- **Originals untouched**: Resizo never overwrites your original files. New versions are saved with a suffix in their name, in `Pictures/Resizo`, in a folder you choose, or next to each original.

### 2. Performance
- **Parallel processing**: by default Resizo processes as many images at once as your Mac has performance cores, within a memory limit. You can change the number in [Settings](/en/projects/resizo/docs/settings).
- **Long lists**: hundreds of photos show up in the list almost instantly; thumbnails are generated only for visible rows.
- **Estimated size and space saved**: before saving you see how much the files will weigh; when the batch is done, how much space you saved.

### 3. Supported formats
- **Input**: PNG, JPEG, HEIC, HEIF, TIFF, BMP, GIF, and WebP.
- **Output**: original format, PNG, or JPEG with adjustable quality. Formats macOS can read but not write (such as WebP) are saved as PNG.

---

## Quick workflow

1. **Add images**: drag photos or whole folders (subfolders included) into the window or onto the app's Dock icon, or use **Add Images…** (<kbd>⌘</kbd> <kbd>O</kbd>).
2. **Choose the size**: apply a preset from the sidebar (e.g. *Web*, 1920 px wide) or set pixel or percentage sizes in the **Size** section.
3. **Set the output**: in the **Format and Quality** section choose the format and JPEG quality; in the **Saving** section, the destination, file name, and metadata. The **estimated size** appears at the bottom of the panel.
4. **Start**: click **Resize and Save** (<kbd>⌘</kbd> <kbd>↩</kbd>). When it's done, a green box sums up the sizes before and after, with a **Show in Finder** button.
