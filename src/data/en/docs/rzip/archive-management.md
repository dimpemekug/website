---
title: "Archive Management and Extraction"
description: "Tree navigation, in-memory QuickLook previews, macOS bundle inspection (BundleInspector), and drag & drop extraction."
project: "rzip"
order: 3
section: "User Guides"
---

## Instant Content Inspection Without Extraction

rZip eliminates the need to unpack multi-gigabyte archives just to access individual documents:

- **Expandable Folders**: Toggle folders open and closed with a click on the disclosure triangle or using the `→` / `←` arrow keys. Holding `⌥` (Option) while clicking expands or collapses the entire directory branch recursively.
- **Expand / Collapse All**: Use the `⌥⌘→` (Expand All) and `⌥⌘←` (Collapse All) keyboard shortcuts to view the complete internal archive tree in one keystroke.
- **Intelligent Sorting**: Sort by Name, Size, Date, or File Kind, with folders pinned to the top for familiar Finder-style browsing.
- **Real-Time Filtering**: The search bar (`⌘F`) filters tens of thousands of cataloged items in sub-millisecond speeds.
- **Interactive Path Bar**: The breadcrumb bar at the top displays your current folder depth with Back and Forward history navigation.

## In-Memory Quick Look Previews

Pressing `Space` or `⌘Y` on any highlighted item:
- rZip decodes the stream directly in volatile RAM (via libarchive or `7zz e -so`).
- The native macOS Quick Look window renders high-resolution photos, multi-page PDFs, audio clips, and syntax-highlighted source code with zero temporary files on disk.

## App and Package Inspection (`BundleInspector`)

A signature capability of rZip is the integrated **BundleInspector**: when an archive contains a macOS application (`.app`), plug-in (`.plugin`, `.appex`), framework, or installer package (`.pkg`), rZip parses internal `Info.plist` records, app icons, and Mach-O binary headers in memory without extracting anything:

- **Identity and Metadata**: High-resolution application icon, full version string and build number, Bundle ID, App Store category, copyright, and minimum macOS deployment target.
- **Mach-O Architectures**: Identifies whether the binary runs as *Apple Silicon* (`arm64`), *Intel* (`x86_64`), or *Universal*.
- **Code Signatures & Security**: Verifies the presence of a valid digital code signature (`_CodeSignature`), Apple Notarization Ticket (`stapler` CodeResources check), and Mac App Store receipt (`_MASReceipt`).
- **Installer Packages (`.pkg`)**: Inspects the internal XAR index of installer packages, reporting component identifiers, target disk install locations, and total footprint.

## Drag-and-Drop Extraction into Finder

rZip implements the modern macOS `Transferable` and `FileRepresentation` protocol:

1. Select one or more files in the table (or drag the large icon from the Inspector).
2. Drag them straight into any Finder window or desktop space.
3. Extraction executes only upon cursor release:
   - If contents are encrypted, rZip prompts for the password on drop (and re-prompts if incorrect).
   - A dedicated extraction banner monitors real-time byte throughput and progress.
   - Files are extracted safely with duplicate renaming to prevent overwriting existing assets.

## Extraction Commands (`⌘E` and `⇧⌘E`)

From the toolbar, File menu, or contextual right-click menu:
- **Extract Selection…** (`⌘E`): Unpacks only the highlighted items.
- **Extract All…** (`⇧⌘E`): Decompresses the complete archive.
- **Smart Folder Policy**: Single-item archives are unpacked directly; multi-item archives are automatically enclosed in a dedicated folder bearing the archive name.
- **Destination Options**: In Settings, configure rZip to ask for a destination folder every time, extract beside the archive, or use a fixed download directory.
