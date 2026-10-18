---
title: "Sandbox and Folder Permissions"
description: "How rName manages filesystem permissions within the macOS App Sandbox: why parent folder access is required, security-scoped bookmarks, and permissions management."
project: "rname"
order: 5
section: "Safety & Architecture"
---

## Why rName Requires Folder Access

When using an application protected by the **Apple App Sandbox** (mandatory for the Mac App Store), users might wonder why dragging individual files prompts for permission to the folder containing them.

The explanation is technical and tied directly to POSIX operating system standards and APFS filesystem mechanics:

> **Renaming a file executes the system `rename()` function, which requires write permissions on the containing parent folder, not merely on the individual file itself.**

When you select or drop a single file through standard macOS dialogs, the sandbox grants read and write access to that individual file only. That permission **is insufficient to rename it**: attempting a rename would immediately fail with the macOS error:
_“You do not have the necessary permissions to access the folder…”_.

---

## Two Ways to Add Files

rName handles this workflow smoothly and transparently:

### 1. Recommended Method: Choose the Folder

If you open the folder containing your files (via the <kbd>⌘</kbd> <kbd>O</kbd> shortcut, dragging the folder into the window or onto the Dock icon, or using _Open With…_ in Finder):

- macOS grants read-write access to the entire directory and all contained files in a single step.
- All items load instantly and are immediately ready for renaming without further prompts.

### 2. Adding Individual Files & Visual Feedback

If you drag loose files from various folders that have not yet been granted permission:

- Rows belonging to unauthorized directories display a **lock icon**.
- A clear notification appears explaining the need for parent folder access, accompanied by a **Grant access** button.
- A single click opens the Finder permission sheet to unlock that folder for the session.

---

## Security-Scoped Bookmarks

To ensure you never have to re-authorize the same working folder across app restarts, rName implements Apple's official `com.apple.security.files.bookmarks.app-scope` entitlement:

1. When folder access is approved, the app generates an encrypted **security-scoped bookmark** for that directory.
2. The bookmark is stored securely in app preferences (`FolderAccess.swift`).
3. On every subsequent launch, rName automatically restores all active bookmarks. An authorized directory **will never prompt for permission again**.

---

## Complete Control: Review and Revoke Permissions

In conventional applications, granted access rights remain invisible and difficult to audit.

In rName, opening **Settings (<kbd>⌘</kbd> <kbd>,</kbd>) › Permissions**:

- Displays an alphabetical list of all currently authorized folders on your Mac.
- Shows the full disk path for each entry.
- Lets you **selectively or completely revoke** any directory authorization with one click.

> [!NOTE]
> Revoking a permission does not touch or modify any files on disk: it simply means that if you choose to rename files in that folder in the future, the app will request permission again.
