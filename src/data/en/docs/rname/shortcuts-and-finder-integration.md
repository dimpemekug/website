---
title: "Shortcuts and macOS Integration"
description: "rName's keyboard shortcuts and how to change them, Finder and Dock integration, dragging files, the built-in guide and interface choices."
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
| <kbd>⌘</kbd> <kbd>Z</kbd> | Edit | **Undo** the last rename, even several in a row |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Edit | **Redo** the undone rename |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Rename | **Apply the rename** to the files that are ready |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Rename | Undo the last rename |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | View | Show or hide the rule settings |
| <kbd>⌘</kbd> <kbd>?</kbd> | Help | Open rName Help |
| <kbd>⌘</kbd> <kbd>,</kbd> | rName | Open Settings |

From the _Rename_ menu you can also add a rule, remove all rules and restore hand-typed names. From the _Help_ menu you can reopen the first-launch introduction (_Show the Introduction_).

### Changing shortcuts

In _Settings › Shortcuts_ you can change the shortcut of six commands: _Choose a Folder…_, _Add Individual Files…_, _Apply Rename_, _Undo Last Rename_, _Clear the List_ and _Show or Hide Rule Settings_.

- Click the shortcut and press the new keys; <kbd>Esc</kbd> cancels, <kbd>⌫</kbd> removes the shortcut from the command.
- A shortcut must use at least <kbd>⌘</kbd> or <kbd>⌃</kbd>, or a function key (<kbd>F1</kbd>–<kbd>F20</kbd>).
- rName refuses combinations already used by another of its commands or by a system command (for example <kbd>⌘</kbd> <kbd>Q</kbd>, <kbd>⌘</kbd> <kbd>W</kbd>, <kbd>⌘</kbd> <kbd>C</kbd>) and tells you which one.
- Undo (<kbd>⌘</kbd> <kbd>Z</kbd>), Redo (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>) and Settings (<kbd>⌘</kbd> <kbd>,</kbd>) stay as on every Mac.
- Next to a changed shortcut, a button restores the original one; _Restore All Shortcuts_ brings them all back to their factory values.

Menus, button tooltips and the guide always show the shortcuts in use.

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
