---
title: "Installation and Requirements"
description: "System requirements, Mac App Store distribution, macOS sandbox and authorized folder management (FolderAccess) in rZip."
project: "rzip"
order: 2
section: "Getting Started"
---

## System Requirements

- **Operating system**: macOS 26 Tahoe or later.
- **Processor**: universal binary for Macs with Apple Silicon and 64-bit Intel processors. The `7zz` bundled inside the app is universal too.

## Mac App Store

The app is built and signed for the **Mac App Store**:
- bundle ID `com.dimpemekug.rzip`;
- Utilities category;
- free, with no ads, no account and no tracking.

The interface is available in Italian and English and follows the system language.

## Sandbox and Authorized Folders (`FolderAccess`)

rZip works inside the macOS **sandbox**:

- **Single files**: archives and files opened by double-clicking in the Finder, dragging, or with the Open panel (<kbd>⌘</kbd> <kbd>O</kbd>) are authorized automatically by the system.
- **Authorized folders**: when an operation needs a whole folder (to find every volume of a split archive, `.001`, `.002`…, to extract next to the archive or to create a multi-part archive), rZip shows the system panel to ask for access once.
- **Secure bookmarks**: authorized folders and recent archives are remembered as *security-scoped* bookmarks. You can view and revoke the list of authorized folders in **Settings** (<kbd>⌘</kbd> <kbd>,</kbd>) › **Advanced**.

## Opening Archives with rZip from the Finder

To open every `.zip`, `.7z` or `.rar` archive in rZip with a double-click:

1. Right-click an archive in the Finder and choose **Get Info** (<kbd>⌘</kbd> <kbd>I</kbd>).
2. Expand the **Open with** section.
3. Choose **rZip** from the pop-up menu.
4. Click **Change All…** and confirm, to associate every file with that extension with rZip.
