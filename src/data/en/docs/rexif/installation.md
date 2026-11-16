---
title: "Installation and Requirements"
description: "System requirements, Photos library integration (PhotoKit), sandbox, session and settings in rExif."
project: "rexif"
order: 2
section: "Getting Started"
---

## System Requirements

- **Operating system**: macOS 15 Sequoia or later (including macOS 26 Tahoe).
- **Processor**: universal binary for Macs with Apple Silicon and 64-bit Intel processors.

## Download

The app is available on the **Mac App Store**:
- bundle ID `com.dimpemekug.rexif`;
- Photography category;
- free: no ads, accounts, subscriptions or in-app purchases.

## Photos Library Integration

rExif works with the macOS Photos app in two ways, through Apple's **PhotoKit** framework.

### 1. Add from Photos Library (`⌥⌘O`)
- Opens the macOS photo picker.
- For the chosen items you can edit the **date taken** and the **GPS location**.
- When you press **Save** (`⌘S`), macOS asks for a single confirmation to allow editing the items directly in the Photos library.
- *Note*: PhotoKit only allows editing date and location; the original file stored in the library doesn't change.

### 2. Export Originals from Photos (`⇧⌘E`)
- To also edit author, copyright, keywords and description, or to rename files, use this feature.
- The originals are saved to a folder of your choice on disk.
- The files are then added to rExif as regular files, with every EXIF, IPTC and XMP field editable.

## Sandbox and Session

- **File access**: rExif runs in the sandbox and only accesses the files and folders you open, by dragging, with **Open With** from the Finder or with the **Add Photos and Videos…** panel (`⌘O`). To create an `.xmp` file next to a file you added on its own, rExif asks for access to its folder when saving.
- **Session**: on quit, file paths and Photos item identifiers are remembered as secure bookmarks (`SessionStore`); on the next launch rExif reopens the previous session. You can turn this off in Settings.
- **Recent folders**: rExif remembers the last five folders you added, with a secure bookmark. When the list is empty they appear in the window and reopen with a click; you can clear them in Settings.

## Settings (`⌘,`)

Settings has four tabs.

### General
- **Language**: *System*, *Italiano* or *English*. The new language is used at the next launch; **Restart Now** reopens the app right away (with unsaved changes it won't restart: save or revert them first). Dates and numbers always follow the format of the region chosen in System Settings.
- **Reopen the items from the previous session**: reopens the files and folders in the list at launch. Unsaved changes are not kept.
- **Recent Folders**: how many are remembered, with a **Clear List** button.

### Appearance
- **Theme**: *System*, *Light* or *Dark*.
- **Thumbnails**: *Small*, *Medium* or *Large*, with a preview of the row height.
- **Compact dates**: shorter dates in the table columns, so they take up less space.
- **Columns, order and widths**: **Revert** goes back to the default columns. You can also show or hide columns by right-clicking the headers.
- **Animations**: follow the system. With *Reduce Motion* turned on in System Settings › Accessibility › Display, the map and panels don't animate.

### Advanced
- **Thumbnails in memory**: the memory limit for thumbnails, with a **Clear** button. Thumbnails are regenerated when needed and released automatically if the Mac needs memory.
- **Parallel reads**: automatic, depending on the disk: six files at a time on the internal disk, three on an external disk, two on a network volume.

### About
The app's version and build, and a privacy summary.
