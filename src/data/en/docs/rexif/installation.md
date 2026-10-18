---
title: "Installation and Requirements"
description: "System requirements, Mac App Store download, macOS sandbox permissions, and Apple Photos library integration."
project: "rexif"
order: 2
section: "Getting Started"
---

## System Requirements

rExif is engineered using native macOS technologies to maximize performance on modern Mac hardware.

- **Operating System**: macOS 15.0 Sequoia or later (including macOS 26 Tahoe).
- **Hardware Architecture**:
  - Mac computers with Apple Silicon (M1, M2, M3, M4, and Pro/Max/Ultra tiers).
  - Mac computers with 64-bit Intel processors (Universal binary).
- **RAM**: 4 GB minimum (8 GB or more recommended for sessions handling over 10,000 photos simultaneously).
- **Disk Space**: Approximately 45 MB for application installation.

## Download and Setup

rExif is officially and freely distributed via the **Mac App Store**:

1. Open the **App Store** on your Mac.
2. Search for `rExif` or visit the [rExif Mac App Store page](https://apps.apple.com/it/app/rexif/id6820436697?mt=12).
3. Click **Get** / **Install**.
4. The application is immediately ready in your `/Applications` directory and Launchpad.

> [!NOTE]
> rExif is completely free of charge: it contains no third-party ads, requires no account registration or recurring subscriptions, and includes zero in-app purchases.

## Sandbox and Privacy Model

rExif strictly adheres to Apple's macOS App Sandbox security model:

- **File Access**: When you drag files or directories into the window, macOS grants rExif read and write access scoped exclusively to those selected items for the active session.
- **Network Access**: The application does not connect to any proprietary servers. Outbound connections are handled exclusively by native Apple system frameworks (MapKit and CoreLocation) when you explicitly perform address searches or reverse geocoding lookups.

## Apple Photos Integration

If your primary photo library is managed in **Apple Photos**:

- **System Media Browser**: Import pictures via the native macOS photo picker sheet.
- **Direct Edits**: rExif supports modifying dates and GPS data on items within your Photos library with seamless background syncing.
- **Exporting Originals**: Alternatively, drag or export unmodified originals from Photos to a local Finder folder, batch-process them in rExif, and re-import them with consolidated metadata.
