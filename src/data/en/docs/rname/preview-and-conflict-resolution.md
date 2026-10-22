---
title: "Preview and Conflicts"
description: "How rName's real-time preview works: automatic conflict detection, leaving problem files out and per-row manual editing."
project: "rname"
order: 3
section: "Rules & Editing"
---

## An Always-Current Preview

The main problem with traditional renaming utilities is uncertainty: a wrong setting can rename hundreds of files irreversibly before you notice the mistake.

In rName **nothing is written to disk in the background**.

The central table shows every added file in real time, with its original name next to the one proposed by the rule chain. Changing a setting, adding a rule or swapping two of them instantly recalculates the whole preview, without touching any files.

---

## Preview States

Each row in the table has an icon and a status:

| Icon | Status | Meaning |
| :---: | :--- | :--- |
| `checkmark.circle.fill` | **Ready** | The new name is valid, conflict-free and different from the current one: the file will be renamed. |
| `equal.circle` | **Unchanged** | The rules don't change this file's name, so it's simply skipped. |
| `exclamationmark.triangle.fill` | **Empty name** | The rule chain removed every character of the name. |
| `exclamationmark.triangle.fill` | **Duplicate name** | Two or more files in the list would end up with the same name in the same folder. |
| `exclamationmark.triangle.fill` | **Already exists** | Another file with the proposed name already exists in the folder. |
| `exclamationmark.triangle.fill` | **Invalid characters** | The name contains characters the file system doesn't allow (`/`, `:`, null character). |
| `exclamationmark.triangle.fill` | **Name too long** | The name exceeds the macOS and APFS limit (255 characters). |

---

## Conflicts Don't Stop Everything

In many programs a single duplicate or overlong name stops the whole rename with a generic error, or overwrites existing files.

rName instead **leaves conflicting files out in advance**:

- files with a blocking status (empty, duplicate, already existing, invalid characters, too long) are highlighted in the table and **left out of the operation**;
- every other file is renamed normally;
- no file is ever overwritten.

---

## Renaming a Single File by Hand

Sometimes, in a group of 50 documents renamed by a rule, one file needs a different name.

Instead of renaming it separately in the Finder:

1. **double-click** the file's row (or right-click › _Edit the name_);
2. type the name you want;
3. that file stops following the rule chain and is marked with a **pencil**;
4. at any time, the button next to it brings it back to the name worked out by the rules. From the _Rename_ menu you can also restore all hand-typed names at once.
