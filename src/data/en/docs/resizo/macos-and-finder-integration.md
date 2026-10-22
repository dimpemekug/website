---
title: "macOS and Finder Integration"
description: "Finder service, dropping files on the Dock icon, destination folder, filename suffix and keyboard shortcuts in Resizo."
project: "resizo"
order: 4
section: "Features"
---

## Finder Service

Resizo adds an item to the Finder's context menu through `FinderServiceProvider`:

- **Right-click in the Finder**: select one or more images, right-click and choose **Services › Resize with Resizo**.
- **Instant opening**: Resizo opens with the selected files already in the list, ready to be resized with the options you prefer.

---

## Dock and Drag and Drop

- **Dock icon**: drag files or folders onto Resizo's Dock icon, even when the app is closed: it launches and adds them to the list. **Open With…** from the Finder works too.
- **Main window**: drag images or folders into the list at any time. Folders are scanned along with their subfolders, skipping hidden files; images already in the list are not added twice. The table shows the thumbnail and file name, original resolution and size, new size and processing status.

---

## Destination and Suffix

To avoid accidental overwrites:
- **Default folder**: if you don't pick one, files are saved to `Pictures/Resizo`.
- **Folder of your choice**: you can set a different destination folder for all images, leaving the source folder untouched.
- **Custom suffix**: a suffix is added to each file name (`-resized` by default, e.g. `photo-resized.jpg`). If a file with the same name already exists, Resizo creates a new one instead of overwriting it.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Add images |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Resize and Save |
| <kbd>⌘</kbd> <kbd>⌫</kbd> | Remove the selected images from the list |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Show or hide the options |
| <kbd>⌘</kbd> <kbd>,</kbd> | Open Settings |

The **Clear** button above the list removes every image from it without touching the files on disk. In Settings you can also choose the app language (Italian or English) and a light, dark or system appearance.
