---
title: "Shortcuts and Quick Selections"
description: "Complete list of rExif keyboard shortcuts and of the Select menu criteria to work faster."
project: "rexif"
order: 9
section: "Reference"
---

## Keyboard Shortcuts

The main features of rExif have a keyboard shortcut:

### Files and Session
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Add Photos and Videos…** | `⌘ + O` | Opens the panel to choose files and folders |
| **Add from Photos Library…** | `⌥ + ⌘ + O` | Opens the system picker to edit date and location in Photos |
| **Export Originals from Photos…** | `⇧ + ⌘ + E` | Exports originals so every field can be edited |
| **Save Changes** | `⌘ + S` | Writes every orange change to disk |
| **Clear List** | `⇧ + ⌘ + ⌫` | Removes every item from the window (files on disk stay intact, `⌘Z` brings them back) |
| **Show in Finder** | `⇧ + ⌘ + R` | Shows the selected files in their Finder folder |
| **Settings** | `⌘ + ,` | Opens settings (language, appearance, thumbnails, session) |

### Editing and Metadata
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Bulk Edit…** | `⇧ + ⌘ + D` | Opens the bulk panel with a row-by-row preview |
| **Align All Dates to Date Taken** | `⇧ + ⌘ + L` | Copies the date taken to the date digitized and the file dates |
| **Copy Metadata** | `⌥ + ⌘ + C` | Copies the selected photo's metadata |
| **Paste Metadata** | `⌥ + ⌘ + V` | Pastes all copied metadata onto the selection (from the menu you can paste just part of it) |
| **Rating 1–5 stars** | `⌘ + 1` … `⌘ + 5` | Gives the selected items 1 to 5 stars |
| **Remove rating** | `⌘ + 0` | Clears the star rating |
| **Undo** | `⌘ + Z` | Undoes the last operation |
| **Redo** | `⇧ + ⌘ + Z` | Redoes the last undone operation |

### View
| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **As Table** | `⌃ + ⌘ + 1` | Switches to the table view |
| **As Map** | `⌃ + ⌘ + 2` | Switches to the map view (Apple Maps) |
| **Bigger thumbnails** | `⌘ + +` | Increases thumbnail size in the table |
| **Smaller thumbnails** | `⌘ + -` | Decreases thumbnail size in the table |
| **Quick Look** | `Space` | Shows the Quick Look preview of the selected items |

## The Select Menu

The **Select** menu (in the toolbar and the menu bar) selects with one click the items that need attention:

- **Without Date Taken**: items without `DateTimeOriginal`.
- **Suspicious Dates**: capture dates before 1990 or in the future.
- **File Dates Different from Date Taken**: files whose creation or modification dates don't match the capture time (useful before `⇧⌘L`).
- **Without Location**: photos without GPS coordinates, to geolocate.
- **With Location**: files with a location (for example to remove it before sharing).
- **By Camera**: a submenu with the cameras found in the items.
- **Photos Only** / **Videos Only** / **Photos Library Only**: by file type or origin.
- **With Unsaved Changes**: items with orange changes waiting to be saved.
- **With Errors**: files that couldn't be read or saved (e.g. write-protected or without permission).

There are also **All** and **Invert Selection**.
