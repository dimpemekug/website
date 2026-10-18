---
title: "Installation and Requirements"
description: "Hardware and software requirements, Mac App Store distribution, sandbox security model, and authorized folder management (FolderAccess)."
project: "rzip"
order: 2
section: "Getting Started"
---

## System Requirements

rZip is built using SwiftUI and native macOS frameworks:

- **Operating System**: macOS 26.0 Tahoe or macOS 15.0 Sequoia or later.
- **Hardware Architecture**: Universal binary native for Apple Silicon (M1, M2, M3, M4 and tiers) and 64-bit Intel x86_64 processors. The bundled `7zz` engine is also compiled as a universal binary.
- **RAM**: 4 GB minimum (8 GB or more recommended when working with multi-gigabyte 7z archives using extended LZMA dictionaries).
- **Disk Space**: Approximately 35 MB of storage.

## Mac App Store Distribution

rZip is officially distributed via the **Mac App Store**:
- Bundle ID: `com.dimpemekug.rzip`.
- Category: Utilities (`public.app-category.utilities`) and Productivity.
- Free of charge: no subscriptions, no ads, no account registration, zero user tracking.

## Sandbox and Authorized Folders (`FolderAccess`)

rZip runs inside the strict macOS App Sandbox:

- **Single Archive Access**: Files opened via double-click in Finder, drag & drop, or the system Open panel (`⌘O`) are granted temporary read/write access scoped to that session.
- **Authorized Folders (`FolderAccess`)**: When an operation requires accessing a broader directory — such as scanning for multi-part spanned volumes (`.001`, `.002`...), extracting next to the archive, or creating split volumes — rZip presents a native macOS folder authorization dialog.
- **Security-Scoped Bookmarks**: Authorized folders and recent archives are stored locally on your Mac as security-scoped bookmarks. You can inspect or revoke authorized folders at any time under **Settings** (`⌘,`) > **Advanced**.

## Setting rZip as Default Handler in Finder

To open `.zip`, `.rar`, or `.7z` archives in rZip with a double-click:

1. Right-click any compressed archive in Finder and select **Get Info** (`⌘I`).
2. Expand the **Open with** section.
3. Select **rZip** from the application dropdown.
4. Click **Change All...** to make rZip the default handler for all archives with that extension.
