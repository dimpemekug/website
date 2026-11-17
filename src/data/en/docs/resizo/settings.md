---
title: "Settings"
description: "The seven tabs of Resizo's Settings: appearance and language, processing, startup options, presets, shortcuts, folder permissions, and about."
project: "resizo"
order: 5
section: "Features"
---

Settings open with <kbd>⌘</kbd> <kbd>,</kbd> and are split into seven tabs.

## General

- **Appearance**: Automatic, Light, or Dark, chosen from thumbnails.
- **App language**: English or Italian. The chosen language applies from the next launch: Resizo offers **Restart Now**.
- **Restore Default Settings**: resets the options in the tabs, shortcuts included, and the resizing options to their factory values. Presets, allowed folders, and language are left untouched.

## Processing

- **When you add images**: **Add them to the list** (default) or **Replace the list**. The list is never replaced while a batch is running.
- **Include subfolders**: on by default; applies when you drop or choose a folder.
- **When finished › Then**: **Do nothing**, **Show the files in Finder**, or **Clear the list**. The last two only happen if every image succeeded: after an error the list stays, so you can see which one.
- **Play a sound** when done (off by default).
- **Notify me if Resizo is in the background** (on by default).
- **Images processed at once**: **Automatic** uses your Mac's performance cores, within a memory limit; alternatively 1, 2, 4, 8, or 16, up to the number of cores in your Mac. A lower value leaves more room for other apps during a long batch.

## Startup Options

**On launch** chooses where the options start from: **Resume the last options used** (default) or **Start from the options below**. In the second case you set mode, percentage, format, JPEG quality, name suffix, and **Keep metadata**. Pixel sizes always start empty (that's what presets are for), and the destination folder stays the last one you chose.

## Presets

The same management as **Manage Presets…**: which presets appear in the sidebar, their order, creating, renaming, deleting, and restoring the defaults. Details are in [Resizing, Presets and Quality](/en/projects/resizo/docs/resizing-modes-and-presets).

## Shortcuts

For each command (Add Images…, Resize and Save, Quick Look, Remove Selected, Clear the List, Show or Hide Options), click the shortcut and press the new keys. It needs at least <kbd>⌘</kbd> or <kbd>⌃</kbd>, or a function key; Resizo warns you if the combination is already used by another command or by a system command (Quit, Close, Copy, Settings…). Each shortcut goes back to its original with its own button, all of them at once with **Restore All Shortcuts**.

## Permissions

The list of folders where Resizo may save **Next to Original**, with a **Revoke** button for each and **Revoke All…**. Revoking never touches any file: Resizo will ask again next time. With **Allow Folders or Disks…** you can grant access in advance to your Home folder or a whole disk, so Resizo won't ask for the folders inside.

## About

Version, identifier, system requirements, and a privacy summary: Resizo collects no data and makes no network connections.
