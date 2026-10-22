---
title: "Creating, Editing and Converting"
description: "Creating archives, adding and deleting files with a safety copy in the Trash, automatic exclusion of macOS system files and format conversion in rZip."
project: "rzip"
order: 4
section: "User Guides"
---

## Creating a New Archive (<kbd>⌘</kbd> <kbd>N</kbd>)

From the welcome window, the File menu or with <kbd>⌘</kbd> <kbd>N</kbd>, rZip opens the creation window:

1. **Contents**: drag files and folders from the Finder into the window.
2. **Format**:
   - **7z**: LZMA2 compression with the highest ratio, AES-256 encryption and, optionally, encrypted file names.
   - **ZIP**: the universal format that opens on any system, with optional AES-256 encryption.
   - **TAR, TAR.GZ, TAR.XZ, TAR.BZ2**: the classic Unix and Linux formats.
   - *Note*: **RAR archives can't be created**, because RAR is a proprietary RARLAB format.
3. **Compression level**: None, Fastest, Fast, Normal, Maximum or Ultra.
4. **Split into volumes**: you can split the archive into fixed-size parts (e.g. 25 MB for email) for sending or external media.

The default format, level, file-name encryption and system-file exclusion are set in Settings.

## Excluding macOS System Files

Archives created on a Mac often include invisible macOS-specific files:
- `.DS_Store` (Finder folder view settings);
- `__MACOSX` folders and `._filename` files carrying extra file information;
- Spotlight (`.Spotlight-V100`) and trash (`.Trashes`) folders.

> [!NOTE]
> By default rZip leaves these files out when it creates or updates an archive, so the archive opens cleanly on Windows or Linux too. While browsing an archive, <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>.</kbd> shows or hides system files.

## Editing an Existing Archive

You can add files to or remove files from **ZIP**, **7z** and **TAR** archives (including `.gz`, `.bz2`, `.xz`) without extracting them:

- **Add** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>A</kbd>): drag new files into the window or use *Add to Archive…*.
- **Delete** (<kbd>⌘</kbd> <kbd>⌫</kbd>): select one or more items (folders are deleted with everything inside) and use *Delete from Archive…*.

The new archive is written separately and replaces the original only if the operation succeeds. RAR archives and archives split into several volumes can't be edited.

### Safety Copy in the Trash

With **Keep a copy of the original in the Trash**, on by default in Settings, before every edit rZip puts a copy of the original archive in the Mac's Trash, named for example `Photos (before editing).zip`. If you change your mind, get it back from the Trash with **Put Back**.

## Converting an Archive to Another Format

From the File menu or the toolbar's Extract menu, choose **Convert to Another Format…**:

1. rZip extracts the archive into a private temporary folder (`ConversionStaging`).
2. The creation window opens in conversion mode.
3. Pick the new format (for example from **RAR** to **7z** or **ZIP**), compression, password and volumes.
4. The new archive is offered with the same name next to the original, which is left untouched.
5. If the source archive was protected, rZip offers the same password and file-name encryption again.
6. The temporary folder is deleted at the end (and in any case when the app launches and quits).
