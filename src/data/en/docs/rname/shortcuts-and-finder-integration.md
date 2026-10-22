---
title: "Shortcuts and macOS Integration"
description: "Keyboard shortcuts, Finder and Dock integration, dragging files and interface design choices in rName."
project: "rname"
order: 7
section: "Reference"
---

## Built for the Mac

rName fits naturally into **macOS**: keyboard, drag and drop, system menus and the Finder.

---

## Keyboard Shortcuts

| Shortcut | Menu | Action |
| :--- | :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | File | Choose a folder |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd> | File | Add individual files to the list |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | File | Clear the list |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Rename | **Apply the rename** to the files that are ready |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Rename | **Undo the last rename** |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | View | Show or hide the rule settings |
| <kbd>⌘</kbd> <kbd>,</kbd> | rName | Open Settings |

From the _Rename_ menu you can also add a rule, remove all rules and restore hand-typed names.

---

## Finder and Dock

Besides the keyboard and toolbar, you can add files to rName in three ways:

### 1. Dragging into the Window

Drag a folder or a group of files from the Finder into the rName window. If you drag a folder, the app immediately gets write permission and loads every file inside it.

### 2. Dragging onto the Dock Icon

Drag a folder or some files onto rName's icon in the **Dock**:

- if the app is closed, it opens with the files already loaded;
- if it's already open, it adds the new items to the list.

### 3. "Open With…"

In the Finder, right-click a folder or file and choose **Open With › rName**: the app opens the path and shows the preview with the current rules.

---

## A Stable Window

During development, window stability while resizing was checked with repeated tests, because some SwiftUI split view configurations can make the app quit due to layout passes that never settle.

That's why the rule settings panel is built into the right-hand column instead of being a separate third column:

- the window can be narrowed and widened freely;
- table columns have ideal widths that adapt to the available space;
- the settings are always reachable, at any window size.
