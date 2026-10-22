---
title: "Supported Formats and Compatibility"
description: "List of the formats rZip handles: reading with libarchive and 7-Zip, formats it can create, encryption and package inspection."
project: "rzip"
order: 6
section: "Formats & Compatibility"
---

## Format Table

| Format | Extensions | Read engine | Browse and preview | Extract | Create | Encryption |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **ZIP** | `.zip` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256 (ZipCrypto read too) |
| **7-Zip** | `.7z` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256, names too (`-mhe`) |
| **RAR (v4 and v5)** | `.rar` | libarchive / 7-Zip | ✅ | ✅ | ❌ | Read, including encrypted names (`-hp`) |
| **TAR** | `.tar` | libarchive | ✅ | ✅ | ✅ | — |
| **GZip** | `.gz`, `.tgz` | libarchive | ✅ | ✅ | ✅ (TAR.GZ) | — |
| **BZip2** | `.bz2`, `.tbz`, `.tbz2` | libarchive | ✅ | ✅ | ✅ (TAR.BZ2) | — |
| **XZ / LZMA** | `.xz`, `.txz`, `.lzma`, `.tlz` | libarchive | ✅ | ✅ | ✅ (TAR.XZ) | — |
| **ISO images** | `.iso` | libarchive | ✅ | ✅ | ❌ | — |
| **Windows Cabinet** | `.cab` | libarchive | ✅ | ✅ | ❌ | — |
| **XAR / packages** | `.xar`, `.pkg` | libarchive | ✅ | ✅ | ❌ | — |
| **LHA / LZH** | `.lha`, `.lzh` | libarchive | ✅ | ✅ | ❌ | — |
| **CPIO, AR, Linux packages** | `.cpio`, `.ar`, `.a`, `.deb`, `.rpm` | libarchive | ✅ | ✅ | ❌ | — |
| **Compress** | `.z` | libarchive | ✅ | ✅ | ❌ | — |
| **Comics** | `.cbz`, `.cbr` | libarchive | ✅ | ✅ | ❌ | — |
| **ZIP containers** | `.epub`, `.jar`, `.war`, `.apk`, `.ipa` | libarchive | ✅ | ✅ | ❌ | — |

> [!NOTE]
> **Why can't RAR archives be created?**
> RAR is a proprietary RARLAB format: its compression can't be included in other software without a commercial license. rZip supports reading, extracting and decrypting it, and with *Convert to Another Format…* you can turn a RAR archive into 7z or ZIP.

## Inspecting Apps and Packages

Beyond ordinary files, rZip understands the structure of typical Apple bundles:
- **Apps (`.app`)**: icon, bundle ID, version and build, signature, notarization ticket, Mac App Store receipt and architectures (Apple Silicon and Intel).
- **Installer packages (`.pkg`, `.mpkg`)**: in-memory reading of the index, with components, installed size and install location.
- **Frameworks, extensions and plug-ins** (`.framework`, `.appex`, `.plugin`, `.bundle` and similar): version, architectures and macOS compatibility.
