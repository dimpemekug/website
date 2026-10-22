---
title: "Introduction to rName"
description: "Overview of rName for macOS: batch renaming of files and folders, rule chains, real-time preview, conflict handling and safe operations."
project: "rname"
order: 1
section: "Getting Started"
---

## What is rName

**rName** is a native app for **macOS 26 or later** designed to rename single files or whole collections in bulk, predictably and without surprises.

It is written in **Swift 6** (with strict concurrency checking), **SwiftUI** and **Observation**, and takes a visual approach: drag a folder into the window, build a chain of rules, and the central table shows each new name next to the current one in real time. No file is renamed, moved or modified until you press **Rename** (or <kbd>⌘</kbd> <kbd>↩</kbd>).

The interface is available in English and Italian.

---

## Principles

### 1. Nothing Happens Behind Your Back

The preview table always compares each file's original name with the one worked out by the rule chain. If a rule produces a conflict (a duplicate name in the list, a file that already exists in the folder or an invalid name), that file is flagged and left out of the operation, so your files stay intact.

### 2. Privacy and No Network

- **No network connections**: the app uses no `URLSession`, third-party SDKs or analytics libraries.
- **No account**: no sign-ups, credentials or subscriptions.
- **Content stays private**: rName never reads what's inside your files; it only uses the name, path, size and creation and modification dates provided by the file system.

### 3. Two-Phase Renaming

Renaming files on a case-insensitive file system (like APFS and HFS+ in the Mac's default setup) has well-known pitfalls: changing only the case (`photo.jpg` → `Photo.jpg`) or swapping two file names (`A` → `B` and `B` → `A`) would fail in many utilities. rName performs every rename in **two phases**, going through unique hidden temporary names (`.rname-<UUID>`). If something stops halfway, files return to their original names and no temporary files are left behind.

### 4. Respecting the macOS Sandbox

Renaming a file requires write permission on the **folder that contains it**, not just on the file. rName remembers granted permissions with **security-scoped bookmarks**: access is requested once per folder and you can review or revoke it at any time from _Settings › Permissions_.

---

## How to Use It

1. **Add files**: drag a folder or some files into the window, or press <kbd>⌘</kbd> <kbd>O</kbd> to choose a folder.
2. **Build the rule chain**: click one or more of the 8 rules in the sidebar (e.g. _Numbering_, _Letter case_, _Replace_), or pick a preset from the menu at the bottom of the sidebar.
3. **Check the preview**: files ready to go are marked in green, with the new name next to the old one. If needed, double-click a file to type its name by hand.
4. **Rename**: press <kbd>⌘</kbd> <kbd>↩</kbd> to apply the changes on disk.
5. **Undo if you change your mind**: press <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> to bring every file from the last operation back to its previous name.

---

## Documentation Map

- [Rule Chain](/en/projects/rname/docs/rule-chain-and-modes): the 8 rules, scope and regular expressions.
- [Preview and Conflicts](/en/projects/rname/docs/preview-and-conflict-resolution): preview states, duplicate protection and per-row manual editing.
- [Engine and Safety](/en/projects/rname/docs/engine-and-atomic-safety): two-phase renaming, swaps and case changes on APFS, undo.
- [Permissions and App Sandbox](/en/projects/rname/docs/sandbox-and-folder-permissions): why folder access is needed, security bookmarks and revoking permissions.
- [Presets and Settings](/en/projects/rname/docs/presets-and-preferences): built-in presets, your own presets and options (<kbd>⌘</kbd> <kbd>,</kbd>).
- [Shortcuts and macOS Integration](/en/projects/rname/docs/shortcuts-and-finder-integration): keyboard shortcuts, Dock and "Open With".
