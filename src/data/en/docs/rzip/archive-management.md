---
title: "Exploring and Selective Extraction"
description: "Tree navigation, in-memory preview, app and package inspection (BundleInspector) and drag-and-drop extraction in rZip."
project: "rzip"
order: 3
section: "User Guides"
---

## Exploring Without Extracting

With rZip you don't need to decompress a huge archive to reach a single document:

- **Expandable folders**: open and close folders with the disclosure triangle or the <kbd>→</kbd> / <kbd>←</kbd> keys. <kbd>⌥</kbd>-click the triangle to expand or collapse a whole branch.
- **Expand or collapse all**: <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>→</kbd> and <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>←</kbd> show or fold the entire structure.
- **Sorting**: by name, size, modification date or kind, ascending or descending; folders stay on top (configurable in Settings).
- **Search**: the search field (<kbd>⌘</kbd> <kbd>F</kbd>) instantly filters even tens of thousands of entries.
- **Navigation**: Back (<kbd>⌘</kbd> <kbd>[</kbd>), Forward (<kbd>⌘</kbd> <kbd>]</kbd>), Enclosing Folder (<kbd>⌘</kbd> <kbd>↑</kbd>) and Archive Top Level (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>H</kbd>); from the **Go** menu you can also show only password-protected items.

## In-Memory Preview

Press <kbd>Space</kbd> or <kbd>⌘</kbd> <kbd>Y</kbd> on a selected file:
- rZip reads the content directly in memory (with libarchive or `7zz e -so`), without writing temporary files to disk;
- the preview shows images, PDF documents, text and source code. The size limit for images and PDFs is set in Settings (from 10 to 250 MB).

## Inspecting Apps and Packages (`BundleInspector`)

When an archive contains a Mac app (`.app`), an extension (`.appex`), a plug-in, a framework or an installer package (`.pkg`), rZip reads `Info.plist`, icons and Mach-O headers in memory and shows in the info panel:

- **Identity and version**: icon, version, build, bundle ID, category and minimum macOS version required.
- **Architectures**: whether the binary is for *Apple Silicon* (`arm64`), *Intel* (`x86_64`) or *universal*.
- **Signing**: presence of the code signature (`_CodeSignature`), the notarization ticket and the Mac App Store receipt (`_MASReceipt`).
- **Installer packages (`.pkg`)**: from the XAR index, without extracting anything, title, version, included components, installed size, install location, scripts and signature.

## Drag-and-Drop Extraction

rZip uses macOS `Transferable` with `FileRepresentation`:

1. Select one or more files in the list (or drag the large icon from the info panel).
2. Drag them to a Finder folder or the Desktop.
3. Extraction happens only when you drop:
   - for protected files, rZip asks for the password on drop (and asks again if it's wrong);
   - a banner shows extraction progress;
   - extracted files never overwrite files with the same name already there.

## Extraction on Command (<kbd>⌘</kbd> <kbd>E</kbd> and <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>)

From the toolbar, the File menu or the context menu:
- **Extract Selection…** (<kbd>⌘</kbd> <kbd>E</kbd>): extracts only the selected items.
- **Extract All…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>): extracts the whole archive.
- **Folders**: if the archive has a single item at its root it's extracted directly, otherwise rZip creates a folder named after the archive (in Settings you can ask for that folder every time).
- **Destination**: in Settings choose whether to ask every time, extract next to the archive or always use a chosen folder, and whether to show the result in the Finder afterwards.
- **Safety**: extraction blocks paths that would escape the destination folder (`..`, symbolic links); on error or cancellation partial files are removed.
