---
title: "Creating, Editing and Converting Archives"
description: "Creating new archives, direct in-place editing with Trash backup protection, macOS system junk stripping, and format conversion."
project: "rzip"
order: 4
section: "User Guides"
---

## Creating New Archives (`⌘N`)

From the Welcome window, File menu, or by pressing `⌘N`, rZip opens the archive creator sheet (`CreateArchiveView`):

1. **Adding Content**: Drag files or folders from Finder into the creation sheet.
2. **Container Format**:
   - **7z**: LZMA2 compression delivering the highest space savings, with optional AES-256 header and filename encryption.
   - **ZIP**: Universal compatibility across macOS, Windows, and Linux, with modern AES-256 password security.
   - **TAR, TAR.GZ, TAR.XZ, TAR.BZ2**: Standard packages for UNIX, Linux servers, and software distribution.
   - *Important note*: The **RAR format cannot be created** by rZip because RAR compression is proprietary to RARLAB and protected by commercial patents.
3. **Compression Level**: From *None* / *Fast* to *Ultra* (multi-core LZMA2 compression maximizing disk space savings).
4. **Volume Spanning**: Split archives into uniform parts for email attachment limits (e.g. 25 MB), cloud storage, or physical media.

## Automatic macOS System Junk Stripping

Standard macOS archiving in Finder bundles hidden system files:
- `.DS_Store` (Finder window layout and view preferences).
- `__MACOSX` directories and resource fork wrappers `._filename`.
- Spotlight indexing files (`.Spotlight-V100`) and local trash folders (`.Trashes`).

> [!NOTE]
> rZip automatically filters and strips all proprietary macOS hidden files during creation and archive editing, producing clean, cross-platform packages ready for Windows and Linux recipients. While browsing archives in rZip, press `⇧⌘.` to toggle system file visibility.

## In-Place Archive Editing

You do not need to unpack an archive to disk to modify its contents in **ZIP**, **7z**, or **TAR** formats:

- **Add Files** (`⌥⌘A`): Drag new files directly into the rZip window or use the *Add to Archive...* menu command.
- **Delete Files** (`⌘⌫`): Select items and press `⌘ + Backspace` to delete them.
- **Rename Files**: Select an item in the list and edit its name directly.

### Safety Backups in the Mac Trash

To eliminate risk during in-place archive modifications:
- Before applying any destructive changes to an archive on disk, rZip automatically deposits an **exact backup copy of the original archive in the Mac Trash** (`~/.Trash`).
- If you need to revert changes, simply open the Trash and click *Put Back*.

## Format Conversion Between Archives

Select **Convert to Another Format…** from the File menu or toolbar:

1. rZip extracts the active archive into a private, secure staging folder (`ConversionStaging` in `rZip-Convert`).
2. The creation sheet appears configured in conversion mode.
3. Choose your desired target format (e.g. convert a proprietary **RAR** archive into a modern **7z** or universal **ZIP** file), adjusting compression and encryption parameters.
4. The converted archive is saved beside the original without altering the source file.
5. If the original archive was password-protected, rZip automatically transfers the password and filename encryption settings to the new archive.
6. The temporary conversion staging folder is immediately purged upon completion.
