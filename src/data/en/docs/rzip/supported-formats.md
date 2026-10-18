---
title: "Supported Formats and Compatibility"
description: "Comprehensive format matrix for rZip: libarchive and 7-Zip engine division, supported creation formats, and package inspection."
project: "rzip"
order: 6
section: "Formats & Compatibility"
---

## Comprehensive Engine and Format Matrix

rZip selects the optimal internal engine based on archive format and task:

| Format Container | Extensions | Read Engine | Browse / RAM Preview | Extract | Create | Password & Encryption |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **ZIP** | `.zip` | libarchive / 7-Zip | ✅ | ✅ | ✅ | ZipCrypto & AES-256 |
| **7-Zip** | `.7z` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256 (+ Header `-mhe`) |
| **RAR (v4 & v5)** | `.rar` | libarchive / 7-Zip | ✅ | ✅ | ❌ | Passwords and Names (`-hp`) |
| **UNIX TAR** | `.tar` | libarchive | ✅ | ✅ | ✅ | Not supported |
| **GZip** | `.gz`, `.tgz` | libarchive | ✅ | ✅ | ✅ | Not supported |
| **BZip2** | `.bz2`, `.tbz2` | libarchive | ✅ | ✅ | ✅ | Not supported |
| **XZ** | `.xz`, `.txz` | libarchive | ✅ | ✅ | ✅ | Not supported |
| **ISO Disk Images** | `.iso`, `.img` | libarchive | ✅ | ✅ | ❌ | Not supported |
| **Apple Disk Image**| `.dmg` | libarchive | ✅ | ✅ | ❌ | Unencrypted HFS+/APFS |
| **Windows Cabinet** | `.cab` | libarchive | ✅ | ✅ | ❌ | Not supported |
| **XAR / pkg** | `.xar`, `.pkg` | libarchive | ✅ | ✅ | ❌ | Digital signatures verified |
| **LHA / LZH** | `.lha`, `.lzh` | libarchive | ✅ | ✅ | ❌ | Legacy archives |
| **CPIO / AR** | `.cpio`, `.ar`, `.deb` | libarchive | ✅ | ✅ | ❌ | Linux/UNIX packages |
| **Digital Comic Books**| `.cbz`, `.cbr` | libarchive | ✅ | ✅ | ✅ (as CBZ) | Pages streamed in RAM |
| **eBooks / Java** | `.epub`, `.jar`, `.apk`| libarchive | ✅ | ✅ | ✅ (as ZIP) | Standard ZIP packages |

> [!NOTE]
> **Why RAR Creation is Not Supported:**
> RAR compression is proprietary to RARLAB and protected by commercial patents. Creating RAR archives requires closed-source licensing incompatible with open distribution. rZip supports full legal decompression, inspection, and decryption of RAR archives, and provides a one-click *Convert to Another Format...* feature to migrate RAR archives into standard 7z or ZIP packages.

## Specialized Package Inspection

Beyond raw files, rZip inspects complex Apple bundle packages without unpacking them:
- **Applications (`.app`)**: Displays application icons, bundle identifier, version and build number, digital code signature, Apple Notarization ticket, and supported Mach-O architectures (Apple Silicon and Intel).
- **Installer Packages (`.pkg`)**: Inspects internal XAR payloads, package components, and target installation directories on your Mac.
- **Frameworks and Plug-ins (`.framework`, `.plugin`, `.appex`)**: Validates binary architectures and macOS runtime compatibility.
