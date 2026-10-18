---
title: "Shortcuts and Finder Integration"
description: "Keyboard shortcuts, Dock and Finder integration, drag-and-drop workflows, and layout stability architecture in rName."
project: "rname"
order: 7
section: "Reference"
---

## Built Exclusively for macOS

rName is tailored specifically for the **macOS** desktop environment, embracing native Mac interaction paradigms: system keyboard shortcuts, seamless drag-and-drop, Dock integration, and Finder contextual services.

---

## Keyboard Shortcuts

Every primary action can be triggered immediately without reaching for the mouse:

| Shortcut                               | Menu    | Action                                                      |
| :------------------------------------- | :------ | :---------------------------------------------------------- |
| <kbd>⌘</kbd> <kbd>O</kbd>              | File    | Choose a folder via standard Finder open dialog             |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd> | File    | Add individual files to the current batch                   |
| <kbd>⌘</kbd> <kbd>↩</kbd>              | Actions | **Apply Rename** to all ready files                         |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Edit    | **Undo the last rename operation**                          |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | View    | Toggle the rule settings inspector pane                     |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Edit    | Clear all files from the list                               |
| <kbd>⌘</kbd> <kbd>,</kbd>              | rName   | Open Settings (General, Files, Rules, Presets, Permissions) |

---

## Finder and Dock Integration

Beyond keyboard navigation, you can interact with rName through three native macOS mechanisms:

### 1. Drag and Drop onto the Window

Drop any folder or collection of files directly into the rName window. Dropping a folder automatically secures containing folder permissions and loads all items instantly.

### 2. Drag and Drop onto the Dock Icon

Drag files or folders onto the rName icon in the macOS **Dock**:

- If the application is closed, it launches and immediately loads the items.
- If the application is already running, it appends the new files to the current workspace.

### 3. Contextual «Open With…» in Finder

Select files or folders in Finder, right-click, and choose **Open With › rName**. The app opens the path and prepares the preview according to your active rule chain.

---

## Layout Stability & Adaptive Design

During the development of rName, strict layout engineering was implemented to ensure flawless resizing across displays of all sizes (from MacBook Air displays to Pro Display XDR monitors).

To avoid known AppKit autolayout constraints negotiation crashes on high-density data tables, rName integrates its rule inspector directly within the right-hand split view column:

- The window resizes fluidly without stutter or layout lag.
- Table columns use adaptive ideal widths that prevent long filenames from truncating prematurely.
- Controls remain accessible and properly proportioned at any screen resolution.
