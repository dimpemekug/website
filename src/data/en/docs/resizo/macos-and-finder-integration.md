---
title: "macOS and Finder Integration"
description: "Finder Quick Action services, Dock drag-and-drop, destination safety, and keyboard shortcuts in Resizo."
project: "resizo"
order: 4
section: "Features"
---

## Finder Quick Action and System Services

Resizo integrates into macOS contextual menus via `FinderServiceProvider`:

- **Right-Click in Finder**: select images in Finder, right-click and choose **Services › Resize with Resizo** (or via the *Quick Actions* menu).
- **Auto-Launch**: Resizo launches and loads the selected items immediately, ready to run your active preset with a single click.

---

## Dock Drag-and-Drop

- **Dock Icon**: drop files or entire folders directly onto Resizo's Dock icon, even if the app is closed: it launches and populates the batch queue automatically.
- **Main Canvas**: drag files in at any point. The list displays thumbnail previews, file names, input dimensions, and calculated output sizes.

---

## Output Destinations & Suffix Safety

To avoid accidental file overwrites:
- **Save to Same Folder with Suffix**: adds a customizable suffix to the filename (e.g. `photo_resized.jpg` or `photo_web.jpg`).
- **Save to Custom Destination Folder**: select a target directory (such as *Desktop* or *Exported Images*) to isolate outputs from source files.

---

## Keyboard Shortcuts

| Shortcut | Function |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Open files or folder from Finder |
| <kbd>⌘</kbd> <kbd>R</kbd> | Execute "Resize & Save" |
| <kbd>⌫</kbd> | Remove selected item from queue |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Clear the entire queue |
| <kbd>⌘</kbd> <kbd>,</kbd> | Open Preferences |
| <kbd>⌘</kbd> <kbd>W</kbd> | Close window |
