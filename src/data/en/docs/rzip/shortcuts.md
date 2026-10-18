---
title: "Shortcuts and Productivity"
description: "Comprehensive listing of native macOS keyboard shortcuts and interaction gestures supported by rZip."
project: "rzip"
order: 7
section: "Reference"
---

## Complete Native Keyboard Shortcuts

rZip provides a comprehensive set of native macOS keyboard shortcuts for rapid, mouse-free archive curation:

### Window and Archive Management
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **New Archive…** | `⌘ + N` | Opens the archive creation sheet |
| **Open Archive…** | `⌘ + O` | Displays the system open file dialog |
| **Welcome Window** | `⇧ + ⌘ + 0` | Opens the initial rZip welcome screen |
| **Reveal in Finder** | `⌥ + ⌘ + R` | Reveals the active archive file in Finder |
| **Close Window** | `⌘ + W` | Closes the current archive and scrubs associated RAM buffers |
| **Settings** | `⌘ + ,` | Opens preferences (extraction defaults, language, theme, authorized folders) |

### Navigation and Exploration
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Search in Archive** | `⌘ + F` | Sets keyboard focus directly into the search filter field |
| **Quick Look Preview** | `Space` or `⌘ + Y`| Streams the selected file in memory via native Quick Look |
| **Expand All** | `⌥ + ⌘ + →` | Recursively expands all directory branches in the tree |
| **Collapse All** | `⌥ + ⌘ + ←` | Collapses all expanded folder branches |
| **Toggle System Files** | `⇧ + ⌘ + .` | Shows or hides macOS system files (`.DS_Store`, `__MACOSX`) |

### Extraction and Editing
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Extract Selection…** | `⌘ + E` | Extracts currently highlighted items |
| **Extract All…** | `⇧ + ⌘ + E` | Unpacks the complete archive to the chosen destination |
| **Add to Archive…** | `⌥ + ⌘ + A` | Inserts new files into an open archive (ZIP, 7z, TAR) |
| **Delete from Archive…**| `⌘ + ⌫` | Removes selected items (with automatic safety backup in the Trash) |

## Dock and Drag-and-Drop Gestures

- **Dragging to the Dock Icon**:
  - Drag an archive onto the rZip Dock icon to open and inspect its contents immediately.
  - Drag ordinary files or folders onto the Dock icon to launch the creation sheet and compress them into a new archive.
- **Selective Drag & Drop Extraction**:
  - Drag any row from the archive table or the large icon from the Inspector panel directly into a Finder folder or desktop workspace to extract it on drop.
