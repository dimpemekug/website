---
title: "Presets and Settings"
description: "rName's 4 built-in presets, creating your own presets and the 8 Settings panes (⌘,), from shortcuts to files to ignore."
project: "rname"
order: 6
section: "Configuration & Presets"
---

## Presets: Reusable Rule Chains

Rebuilding the same sequence of rules for every folder gets repetitive. In rName any rule chain can be saved as a **preset** and reapplied with one click.

From the menu at the bottom of the sidebar you can:

- apply a preset;
- save the current chain under a name (a preset with the same name is updated, not duplicated);
- delete a saved preset.

---

## The 4 Built-In Presets

### 1. Tidy Up Names

For files downloaded from the web or received by email with messy names:

- removes spaces at the start and end of the name;
- reduces double spaces to one;
- removes characters the file system doesn't allow.

### 2. Number in Sequence

To put documents, chapters or photos in order:

- starts from `1`;
- uses three digits with leading zeros (`001`, `002`, `003`…);
- puts the number at the start of the name, separated by ` - ` (e.g. `001 - report.pdf`).

### 3. Date Prefix

For scans, invoices, receipts or photos:

- uses the file's last modification date;
- in the `yyyy-MM-dd` format;
- at the start of the name, followed by `_` (e.g. `2026-10-18_report.pdf`).

### 4. Web-Friendly Names

For anyone publishing files on a website or server:

- removes edge and double spaces;
- removes accents and emoji;
- replaces spaces with a hyphen (`-`);
- puts the name and extension in lower case.

---

## Settings (<kbd>⌘</kbd> <kbd>,</kbd>)

<kbd>⌘</kbd> <kbd>,</kbd> (or _rName › Settings…_) opens eight panes.

### 1. General

- **Appearance**: _System_, _Light_ or _Dark_, picked from three window thumbnails. The appearance applies at once to every app window, alerts and open panels included.
- **Language**: _System_, _Italian_ or _English_. Switching requires restarting the app, which rName offers to do for you.
- **Restore Default Settings**: returns every option in the panes, shortcuts included, to its factory value, without touching presets, folder permissions and saved rules.

### 2. Files

- **When you add files**: _Add them to the list_ (default) or _Replace the list_.
- **Sort the list by**: _Manual order_, _Name_ (default), _Date created_, _Date modified_, _Size_ or _Kind_. The order of the list decides the sequence used by numbering.
- **Opening a folder**:
  - _Include subfolders_: also scans the folders inside the opened folder (off by default);
  - _Include hidden files_: shows and renames files starting with a dot (`.`) too (off by default);
  - _Rename folders too_: also adds to the list the folders inside the opened folder (on by default). When rName visits subfolders, folders are always left alone, because renaming them would change the path of the files they hold.
- **Ignore**: extensions or file names to leave out when you open a folder, separated by commas (for example `xmp, aae, Thumbs.db`). Useful for the sidecar files some cameras and apps add. A file you choose on its own is always added.

### 3. Renaming

- **Ask for confirmation before renaming**: one more step before writing to disk (off by default; applies to the button, the menu and the shortcut).
- **Then**: what happens to the list after renaming: _Keep the files in the list_ (default), _Remove the renamed files_ or _Clear the list_. <kbd>⌘</kbd> <kbd>Z</kbd> undoes a rename even after the files have left the list.
- **Play a sound when done**: a system sound when renaming finishes.
- **Remember the rules on quit**: the chain of rules is back the next time you open rName. Files are never remembered.

### 4. Rules

The starting values used when you add a new rule. Changing them never touches rules already in the chain, nor saved presets.

- **Separator**: _Underscore_ (`_`, default), _Hyphen_ (`-`), _Space_ or _None_.
- **Numbering**: start value (0 to 99,999), step (1 to 1,000) and digits (1 to 12; default 2).
- **Date format**: `yyyy-MM-dd` (default), `yyyyMMdd`, `dd-MM-yyyy`, `yyyy-MM`, `yyyy-MM-dd HH.mm` or `HH.mm.ss`.

A _Preview_ box shows what a numbered name and a dated name would look like.

### 5. Presets

The list of _Built-in_ presets and _Yours_. Right-click one of yours to rename, apply or delete it; drag them to change their order.

### 6. Shortcuts

The shortcuts of rName's commands, ready to change: click a shortcut and press the new keys. <kbd>Esc</kbd> cancels, <kbd>⌫</kbd> removes the shortcut. Details in [Shortcuts and macOS Integration](/en/projects/rname/docs/shortcuts-and-finder-integration).

### 7. Permissions

The authorized folders, with the option to revoke one permission (_Revoke_) or all of them (_Revoke All…_), and the _Allow Folders or Disks…_ button to grant access in advance to a parent folder or a whole disk. Details in [Permissions and App Sandbox](/en/projects/rname/docs/sandbox-and-folder-permissions).

### 8. Information

App version, identifier and a privacy note: rName collects no data and makes no network connections.
