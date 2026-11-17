---
title: "macOS and Finder Integration"
description: "Resizo's Finder service, Dock, Quick Look, saving next to the original, file name suffixes, and keyboard shortcuts."
project: "resizo"
order: 4
section: "Features"
---

## Finder service

Resizo adds an item to the Finder's contextual menu:

- **Right-click in Finder**: select one or more images, right-click, and choose **Services › Resize with Resizo**.
- **Opens right away**: Resizo opens with the selected files already in the list, ready to resize.

---

## Dock and drag and drop

- **Dock icon**: drag files or folders onto Resizo's icon, even when the app is closed: it launches and adds them to the list. **Open With…** from Finder works too.
- **Main window**: drag images or folders into the window at any time. Folders are scanned with their subfolders (you can turn this off in Settings), skipping hidden files; images already in the list are not added twice.
- **List**: for each image it shows thumbnail, name and format, original resolution and size, new size, and status.
- **Batch finished in the background**: if you are using another app, when the batch ends Resizo shows the number of saved images on its Dock icon (or an exclamation mark if some failed), bounces the icon, and sends a notification. Permission for notifications is requested the first time it is needed.

---

## Quick Look

Select one or more images and press the **Space bar** or <kbd>⌘</kbd> <kbd>Y</kbd>: macOS Quick Look opens, just like in Finder. **Double-clicking** a row opens the image in its default app; after resizing, it opens the new file.

---

## Destination and file name

In the **Saving** section of the options panel, the **Destination** menu offers three choices:
- **~/Pictures/Resizo**: the default folder, `Pictures/Resizo`.
- **Next to Original**: each resized image goes into its photo's folder. Because of the macOS sandbox, Resizo needs permission to write to that folder: the first time it opens a panel already pointing there, then remembers your choice. Allowed folders are managed in Settings › Permissions.
- **Choose Folder…**: another folder for all images, remembered even if you move or rename it.

Below, **File name** holds the suffix added to each name (`-resized` by default, e.g. `photo-resized.jpg`). The **Suggested suffixes** menu offers `-resized`, `-small`, the size you set (e.g. `-1920`), and `@2x`, and an example with the name of a real image from the list appears under the field. If a file with the same name already exists, Resizo creates a new one (with " 2", " 3"…) instead of overwriting it.

---

## Keyboard shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Add Images… |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Resize and Save |
| <kbd>⌘</kbd> <kbd>Y</kbd> or <kbd>Space</kbd> | Quick Look |
| <kbd>⌘</kbd> <kbd>⌫</kbd> | Remove Selected |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Clear the List |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Show or Hide Options |
| <kbd>⌘</kbd> <kbd>,</kbd> | Settings |

Except for <kbd>⌘</kbd> <kbd>,</kbd> and the Space bar, shortcuts can be changed in [Settings › Shortcuts](/en/projects/resizo/docs/settings). Removing items or clearing the list never touches files on disk; the **Clear** button at the bottom of the window also removes all images from the list.
