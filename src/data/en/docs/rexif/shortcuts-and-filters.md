---
title: "Shortcuts and Smart Filters"
description: "Complete list of native macOS keyboard shortcuts and intelligent selection filters for high-speed metadata workflows."
project: "rexif"
order: 9
section: "Reference"
---

## Complete Keyboard Shortcuts

rExif exposes all core curation and metadata operations through native macOS keyboard shortcuts:

### File Management and Session
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Add Photos and Videos…** | `⌘ + O` | Opens the standard system open file/folder panel |
| **Add from Photos Library…** | `⌥ + ⌘ + O` | Opens the native photo picker sheet to edit items directly in Photos |
| **Export Originals from Photos…** | `⇧ + ⌘ + E` | Exports unmodified originals to a folder to edit all metadata fields |
| **Save Changes** | `⌘ + S` | Writes all orange staged changes to disk |
| **Clear List** | `⇧⌘⌫` | Removes all items from the window (`⌘Z` immediately restores the list) |
| **Reveal in Finder** | `⇧ + ⌘ + R` | Reveals the selected file in its parent Finder directory |
| **Settings** | `⌘ + ,` | Opens application settings (Language, Theme, Thumbnail size) |

### Metadata and Batch Operations
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Batch Edit…** | `⇧ + ⌘ + D` | Opens the multi-tab batch edit sheet with row-by-row live preview |
| **Align Dates to Date Taken** | `⇧ + ⌘ + L` | Synchronizes digitization and APFS filesystem dates to the capture date |
| **Copy Metadata** | `⌥ + ⌘ + C` | Copies all metadata tags from the selected picture |
| **Paste Metadata** | `⌥ + ⌘ + V` | Applies copied tags across all currently selected items |
| **Star Rating 1–5 Stars** | `⌘ + 1` … `⌘ + 5` | Assigns star ratings (`xmp:Rating`) compatible with Adobe Lightroom |
| **Remove Rating** | `⌘ + 0` | Clears star rating from the selected items |
| **Undo Modification** | `⌘ + Z` | Reverts the last metadata modification |
| **Redo Modification** | `⇧ + ⌘ + Z` | Re-applies the previously reverted action |

### View Modes and Navigation
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Table View** | `⌃ + ⌘ + 1` | Switches to the multi-column tabular list |
| **Map View** | `⌃ + ⌘ + 2` | Switches to the interactive full-window Apple Maps browser |
| **Larger Thumbnails** | `⌘ + +` | Increases preview thumbnail dimension in the table |
| **Smaller Thumbnails** | `⌘ + -` | Decreases preview thumbnail dimension in the table |
| **Quick Look Preview** | `Space` | Opens the native high-resolution full-screen Quick Look preview |
| **Find in Catalog** | `⌘ + F` | Moves focus to the real-time search field in the toolbar |

## Smart Selection Queries

The **Select** pop-up menu in the toolbar provides one-click queries to identify files requiring curation:

- **Missing Date Taken**: Isolates media lacking authentic `DateTimeOriginal` timestamps.
- **File Dates Differ from Date Taken**: Identifies files whose filesystem creation/modification dates disagree with the camera capture time (ideal before pressing `⇧⌘L`).
- **Missing Location**: Selects all pictures lacking GPS coordinates for rapid geotagging.
- **Has Location**: Isolates geotagged files (e.g. for sanitization or map review).
- **By Camera**: Dynamic hierarchical submenu grouping files by detected camera body or lens model.
- **Photos Only** / **Videos Only** / **From Photos**: Filters files by format class or origin.
- **With Unsaved Changes**: Isolates all items holding orange staged diffs awaiting disk write.
- **With Errors**: Highlights read-only files, locked volumes, or missing folder access permissions.
