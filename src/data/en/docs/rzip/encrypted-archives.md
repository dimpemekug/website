---
title: "Protected Archives, Encryption and Integrity"
description: "AES-256 encryption for ZIP and 7z, file-name protection, password handling, multi-volume archives and integrity verification in rZip."
project: "rzip"
order: 5
section: "Security"
---

## Supported Encryption

rZip opens and creates encrypted archives using both `libarchive` and the bundled `7zz` (7-Zip 26.03):

- **7z with encrypted names (`-mhe`)**: besides the file data, you can encrypt the list of file and folder names. Without the password, nobody can even tell which files the archive contains.
- **ZIP with AES-256**: modern 256-bit encryption for `.zip` archives, the same rZip uses when it creates a protected ZIP.
- **Protected RAR (v4 and v5)**: opening password-protected RAR archives, including those with an encrypted file list (`-hp`).
- **ZipCrypto**: reading old ZIP files protected with the traditional encryption.

## Passwords

> [!IMPORTANT]
> - Passwords are never saved to disk or written to logs: they stay in memory only, for the open archive's window, and are discarded when you close it (<kbd>⌘</kbd> <kbd>W</kbd>).
> - If you drag an encrypted file to the Finder, rZip asks for the password on drop and asks again if it's wrong.

## Multi-Volume Archives

rZip recognizes archives split into several files:
- 7-Zip: `archive.7z.001`, `archive.7z.002`…
- RAR: `archive.part1.rar`, `archive.part2.rar` or `archive.rar`, `archive.r00`, `archive.r01`…
- Split ZIP: `archive.zip`, `archive.z01`, `archive.z02`…
- Split compressed TAR: `archive.tar.gz.001`, `archive.tar.gz.002`…

You can open the archive **starting from any volume**:
1. drag any one of the volumes into rZip;
2. with permission for the folder (`FolderAccess`), rZip finds the other volumes in the same folder and rebuilds the full list of contents.

## Integrity Verification

From the File menu you can run **Verify Integrity**:
- rZip decompresses all data in memory and checks its CRCs, without writing anything to disk. Verification uses 7-Zip, which always checks CRCs; libarchive only for formats 7-Zip can't open.
- A banner shows progress and, at the end, the list of damaged or truncated files, if any.
