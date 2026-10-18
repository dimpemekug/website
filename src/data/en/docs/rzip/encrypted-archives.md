---
title: "Encrypted Archives, Security and Integrity"
description: "AES-256 standard encryption on ZIP and 7z, header filename protection, RAM password management, split volumes, and archive verification."
project: "rzip"
order: 5
section: "Security"
---

## Strong Encryption Standards

rZip leverages both the in-process `libarchive` engine and the sandboxed `7zz` (7-Zip 26.03) binary to handle high-security encrypted containers:

- **7z Header and Filename Encryption (`-mhe`)**: Beyond encrypting file data payloads, 7z supports full header encryption. Without entering the correct password, unauthorized third parties cannot even view file names, directory trees, or file sizes.
- **ZIP WinZip AES-256**: The modern 256-bit AES standard for `.zip` archives, universally supported across Mac, Windows, and Linux.
- **Protected RAR (v4 & v5)**: Seamless reading and extraction of password-protected RAR archives, including those with encrypted file tables (`-hp`).
- **Legacy ZipCrypto**: Read-only extraction support for older archives created on legacy systems.

## Volatile In-Memory Password Security

> [!IMPORTANT]
> To guarantee complete confidentiality:
> - Passwords entered by the user are never persisted to disk, cached in application support folders, or written to system logs.
> - Cryptographic symmetric keys live exclusively within volatile RAM associated with the active window session and are purged immediately when the window is closed (`⌘W`).
> - When dragging an encrypted item directly into Finder, rZip requests the password upon drop (and prompts again if invalid).

## Multi-Volume Spanned Archives

When large compressed archives are split across sequential files:
- 7-Zip convention: `archive.7z.001`, `archive.7z.002`...
- RAR convention: `archive.part1.rar`, `archive.part2.rar` or `archive.r00`, `archive.r01`...
- Split ZIP convention: `backup.zip`, `backup.z01`, `backup.z02`...
- Split compressed TAR: `data.tar.gz.001`, `data.tar.gz.002`...

rZip allows opening the archive **starting from any volume in the sequence**:
1. Drag any volume from the set into the rZip window.
2. Through the macOS sandbox `FolderAccess` workflow, rZip locates all associated volumes in the directory and reconstructs the full archive structure automatically.

## Archive Integrity Verification

From the main menu or toolbar, select **Verify Integrity**:
- rZip audits the cryptographic integrity and CRC/SHA checksums of every internal entry without extracting anything to disk.
- A dedicated progress banner (`VerificationBanner`) tracks real-time progress, alerting you immediately to truncated or corrupted blocks.
