---
title: "Presets and Preferences"
description: "The 4 built-in presets in rName, saving custom rule chains, and deep configuration options across the 6 Settings panels (⌘,)."
project: "rname"
order: 6
section: "Configuration & Presets"
---

## Presets: Reusable Rule Chains

Re-creating the same sequence of rules for recurring file management tasks is unnecessary. In rName, any custom combination of rules can be saved as a **Preset** and recalled with a single click.

From the dropdown menu at the bottom of the left sidebar, you can:

- Select and apply any existing preset.
- Save the current active rule chain under a custom name.
- Manage your personal preset library.

---

## 4 Built-In Ready-to-Use Presets

rName includes four factory presets configured for standard workflows:

### 1. Tidy up names

Ideal for files downloaded from the web or shared over email that contain messy characters or irregular spacing:

- Strips leading and trailing whitespace (`trimEdges`).
- Collapses multiple consecutive spaces into a single space (`collapseSpaces`).
- Cleans invalid filesystem characters (`stripIllegalCharacters`).

### 2. Number in sequence

Designed for organizing documents, book chapters, or photo galleries:

- Starts at `1` with an increment step of `1`.
- Formats numbers with 3-digit zero padding (`001`, `002`, `003`...).
- Inserts the counter at the start of the filename separated by `-`.

### 3. Date prefix

Perfect for archiving scanned receipts, invoices, or vacation photos:

- Reads the file's modification or capture timestamp.
- Formats dates according to ISO standard `yyyy-MM-dd`.
- Prepends the timestamp followed by an underscore (e.g., `2026-10-18_report.pdf`).

### 4. Web-friendly names

Essential for web developers and content creators before uploading assets to Linux servers or CMS platforms:

- Strips accents and diacritics (e.g., `é` → `e`, `à` → `a`).
- Removes emoji and non-ASCII graphic symbols.
- Replaces spaces with hyphens (`-`).
- Converts both filename and extension to lowercase (`kebab-case`).

---

## Settings Window (<kbd>⌘</kbd> <kbd>,</kbd>)

Pressing <kbd>⌘</kbd> <kbd>,</kbd> (or choosing _rName › Settings…_) opens a dedicated preferences window featuring 6 panels built to macOS design standards:

### 1. General

- **Appearance**: choose between _System_, _Light_, or _Dark_. Using `NSApp.appearance`, theme changes propagate cleanly to all windows, modal sheets, and file dialogs.
- **Language**: select _System_, _Italian_, or _English_. Changes modify `AppleLanguages` and prompt for a swift app restart to load the respective string tables.
- **Reset to Defaults**: restores UI preferences to factory defaults without touching your saved presets or folder bookmarks.

### 2. Files

- **Default Sort Order**: configure initial sorting when files are added (by Name, Date Modified, or Size).
- **Include Subfolders**: recursively scans and loads all nested directories when a parent folder is opened.
- **Include Hidden Files**: reveals and renames dotfiles (files starting with `.`).
- **Rename Folders**: applies active renaming rules to folders as well as files.
- **Confirm Before Renaming**: displays an explicit confirmation dialog before committing disk changes.
- **Remember Rules on Quit**: restores your active rule chain across application restarts.

### 3. Rules

Set initial default values used whenever a new rule is added:

- Default separator (e.g., `_` or `-`).
- Default sequence padding digits (e.g., 2 or 3 digits).
- Default date and time format, complete with a live formatted preview.

### 4. Presets

Full management of built-in and user-created presets:

- Rename your custom presets.
- Delete obsolete templates.
- Review the rules contained within each preset.

### 5. Permissions

Audit and manage all folder access permissions granted to rName:

- Review full filesystem paths for authorized directories.
- Selectively or completely revoke security-scoped bookmarks with a single click.

### 6. About

Version and build numbers, bundle identifier, copyright information, and privacy assurances (100% offline operation).
