---
title: "Permissions and App Sandbox"
description: "How rName handles file system permissions in the macOS sandbox: why folder access is needed, security bookmarks and revoking authorizations."
project: "rname"
order: 5
section: "Safety & Architecture"
---

## Why rName Asks for Folder Access

If you're new to apps that use the **App Sandbox** (required on the Mac App Store), you may wonder why, when you drag single files, the app asks for permission on the folder that contains them.

The reason is technical:

> **Renaming a file uses the `rename()` system call, which requires permission to write to the folder containing the file, not just to the file.**

When you drag or select a single file, the sandbox lets the app read and modify that file. That permission **isn't enough to rename it**: the attempt would fail with the error _"You don't have permission to access…"_.

---

## Two Ways to Add Files

### 1. Recommended: Choose the Folder

If you open the folder containing your files directly (with <kbd>⌘</kbd> <kbd>O</kbd>, by dragging it into the window or onto the Dock icon, or with _Open With…_ from the Finder):

- macOS immediately grants read and write permission on the folder and its contents;
- the files are ready to rename, with no extra prompts.

### 2. Single Files and the Padlock

If instead you drag loose files from folders that aren't authorized yet:

- files from folders without permission are marked with a **padlock**;
- a notice explains why folder permission is needed, with a **Grant Access…** button;
- one click opens the system panel to authorize the folder.

---

## Security-Scoped Bookmarks

So you don't have to authorize the same folder at every launch, rName uses Apple's `com.apple.security.files.bookmarks.app-scope` entitlement:

1. when you grant access, the app creates a **security bookmark** for that folder;
2. the bookmark is saved in the app's preferences;
3. at every launch rName restores the saved bookmarks: a folder you've authorized **never needs confirming again**.

---

## Reviewing and Revoking Permissions

In many apps, granted permissions stay invisible and impossible to check.

In rName, from **Settings (<kbd>⌘</kbd> <kbd>,</kbd>) › Permissions**:

- you see the list of every authorized folder, with its path;
- you can **revoke** a single authorization or all of them, at any time.

> [!NOTE]
> Revoking a permission doesn't touch any file on disk: it simply means that next time you want to rename files in that folder, rName will ask for your consent again.
