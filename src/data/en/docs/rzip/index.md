---
title: "Introduction to rZip"
description: "Overview of rZip for macOS: dual engine (libarchive and 7-Zip), in-memory previews and no network access."
project: "rzip"
order: 1
section: "Getting Started"
---

## What is rZip

**rZip** is a native app for **macOS 26 Tahoe or later** (built with SwiftUI, for Macs with Apple Silicon and Intel) designed to **explore, verify and manage compressed archives without extracting them**.

Unlike traditional utilities, which force you to decompress the whole archive to disk just to look at one file, rZip lets you:
- browse the internal structure with expandable folders;
- preview images, PDFs, text and source code directly in memory, without creating temporary files;
- inspect Mac apps (`.app`), extensions and installer packages (`.pkg`) without extracting them;
- extract only the files you need by dragging them to the Finder;
- open password-protected archives or archives split into several volumes;
- create new archives, including AES-256 encrypted ones, and convert existing archives to another format.

## Two Engines

rZip combines two engines for compatibility and speed:

| Engine | Integration | Tasks and formats |
| :--- | :--- | :--- |
| **libarchive** | System library, in the app's own process | Listing, browsing and in-memory preview of ZIP, RAR/RAR5, 7z, TAR, GZ, BZ2, XZ, ISO, CAB, LHA, CPIO and XAR; compressed TAR archives split into parts (`.tar.gz.001`…). |
| **7-Zip 26.03** | `7zz` bundled in `Contents/MacOS` (sandboxed, with the `inherit` entitlement) | Encrypted listings (7z `-mhe`, RAR `-hp`), password-protected content (7z, RAR, ZIP AES), multi-volume archives (`.7z.001`, `.partN.rar`, `.rNN`, `.zNN`) and creating new archives. |

## Principles

1. **No network access**: the app has no network entitlement (`com.apple.security.network.client`). No file, name or password ever leaves your Mac, and the bundled `7zz` runs in the same sandbox with no connection.
2. **No temporary files just for reading**: opening an archive writes nothing to disk; previews read content in memory (with libarchive or `7zz e -so`).
3. **Extraction only on request, never overwriting**: files already in the destination are never overwritten (the new one gets a number, e.g. `Folder 2`). If the archive has a single item at its root it's extracted directly, otherwise into a folder named after the archive.

## Next Steps

- [Installation and Requirements](/en/projects/rzip/docs/installation): requirements, Mac App Store, sandbox and authorized folders (`FolderAccess`).
- [Exploring and Selective Extraction](/en/projects/rzip/docs/archive-management): tree navigation, in-memory preview, app and package inspection, drag-and-drop extraction.
- [Creating, Editing and Converting](/en/projects/rzip/docs/creation-and-editing): new archives, adding and deleting files with a safety copy in the Trash, excluding macOS system files and format conversion.
- [Protected Archives, Encryption and Integrity](/en/projects/rzip/docs/encrypted-archives): AES-256, encrypted file names, passwords, multi-volume archives and archive verification.
- [Supported Formats](/en/projects/rzip/docs/supported-formats): the full table of formats.
- [Shortcuts and Productivity](/en/projects/rzip/docs/shortcuts): keyboard shortcuts and dropping files on the Dock.
