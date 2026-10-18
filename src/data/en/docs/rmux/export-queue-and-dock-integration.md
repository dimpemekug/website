---
title: "Export Queue and Dock Integration"
description: "Background rendering queue, macOS Dock progress indicator, system notifications, and keyboard shortcuts in rMux."
project: "rmux"
order: 5
section: "Productivity"
---

## Asynchronous Background Export Queue

rMux avoids modal rendering blockages:

- **Concurrent Multi-Window Editing**: open multiple independent windows to prepare separate clips concurrently.
- **Background Queue**: clicking Export immediately delegates encoding jobs to an asynchronous background worker.
- **Survives Closed Windows**: closing editing windows does not abort active background export tasks.

---

## macOS Dock and Notification Integration

- **Dock Progress Indicator**: the rMux Dock icon renders an active progress gauge indicating total batch percentage completion.
- **Completion Notifications**: when exports finish, macOS Notification Center alerts you with a direct shortcut to reveal the exported file in Finder.

---

## Essential Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Toggle video playback |
| <kbd>I</kbd> | Set In point (start boundary) |
| <kbd>O</kbd> | Set Out point (end boundary) |
| <kbd>←</kbd> / <kbd>→</kbd> | Step back / forward by single frame |
| <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> | Jump to previous / next keyframe |
| <kbd>⌘</kbd> <kbd>E</kbd> | Open Export panel / Add to queue |
| <kbd>⌘</kbd> <kbd>W</kbd> | Close current editing window |
