---
title: "Introduction to rZip"
description: "Overview of rZip for macOS: dual-engine architecture (libarchive & 7-Zip), in-memory RAM inspection, and zero-network privacy."
project: "rzip"
order: 1
section: "Getting Started"
---

## What is rZip

**rZip** is a native macOS application (built with SwiftUI for macOS 26 Tahoe and macOS 15 Sequoia, with universal support for Apple Silicon and Intel) designed to **explore, verify, and manage compressed archives without extracting them**.

Unlike traditional macOS archivers that decompress entire archives to disk just to preview a single file, rZip allows you to:
- Browse internal folder trees with expandable branches.
- Preview photos, PDFs, text files, and source code directly in volatile RAM without generating temporary cache files on disk.
- Inspect application bundles (`.app`), frameworks, and installer packages (`.pkg`) without extracting them.
- Extract individual files selectively by dragging them straight into Finder.
- Open password-protected archives or multi-volume sets.
- Create new compressed archives with AES-256 encryption and convert existing archives between different container formats.

## Dual-Engine Architecture

rZip combines two high-performance archive engines to guarantee unmatched format breadth and extraction throughput:

| Engine | Integration | Managed Formats and Workflows |
| :--- | :--- | :--- |
| **libarchive** | In-process (macOS system library) | High-speed listing, navigation, and in-memory QuickLook streaming of ZIP, RAR/RAR5, 7z, TAR, GZ, BZ2, XZ, ISO, CAB, LHA, CPIO, XAR, and multi-volume compressed TAR files (`.tar.gz.001`…). |
| **7-Zip 26.03** | Embedded `7zz` binary in `Contents/MacOS` (Sandbox with `inherit` entitlement) | Encrypted file lists (7z `-mhe`, RAR `-hp`), password-protected contents (7z, RAR, WinZip AES-256), multi-volume spanned sets (`.7z.001`, `.partN.rar`, `.rNN`, `.zNN`), and archive creation. |

## Core Principles

1. **Zero Network Permissions (Strict Sandbox)**: The app lacks the `com.apple.security.network.client` entitlement. No files, metadata, cryptographic hashes, or passwords ever leave your Mac. The bundled `7zz` binary runs inside the exact same sandbox without network capabilities.
2. **Zero Disk Churn for Reading**: Opening an archive writes nothing to disk: previews and table catalogs are streamed entirely in volatile RAM (via libarchive or `7zz e -so`).
3. **Safe Non-Overwriting Policy**: Extraction operates strictly on explicit command. Existing files in the target directory are never overwritten (numeric increments such as `Folder 2` are appended automatically). Single root items are extracted cleanly, while multi-item archives are placed into a named folder to prevent desktop clutter.

## Next Steps

- [Installation & Requirements](/en/projects/rzip/docs/installation): Requirements, Mac App Store, sandbox, and authorized folders (`FolderAccess`).
- [Archive Management & Selective Extraction](/en/projects/rzip/docs/archive-management): Tree navigation, RAM previews, BundleInspector, and drag & drop extraction.
- [Archive Creation, Editing & Conversion](/en/projects/rzip/docs/creation-and-editing): Creating archives, in-place editing with Trash backups, system junk stripping, and format conversion.
- [Encrypted Archives, Security & Integrity](/en/projects/rzip/docs/encrypted-archives): AES-256 encryption, header encryption, RAM password handling, and archive verification.
- [Supported Formats & Compatibility](/en/projects/rzip/docs/supported-formats): Exhaustive format support matrix and package inspection.
- [Shortcuts & Productivity](/en/projects/rzip/docs/shortcuts): Complete native keyboard shortcuts and macOS dock interactions.
