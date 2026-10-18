---
title: "Preview and Conflict Resolution"
description: "How real-time preview works in rName: automated conflict detection, non-blocking conflict isolation, and manual per-file overrides."
project: "rname"
order: 3
section: "Rules & Editing"
---

## Real-Time Continuous Preview

A common flaw in traditional batch renamers is guesswork: a single misconfigured rule can inadvertently alter hundreds of files on disk before you realize what went wrong.

In rName, **no filesystem changes happen in the background**.

The central table continuously displays every added file, contrasting the original filename with the proposed result from the active rule chain. Tweaking a parameter, appending a rule, or reordering steps instantly recalculates the entire preview without writing a single byte to disk.

---

## Preview Diagnostic Statuses

Each row in the table is accompanied by a status symbol and clear diagnostic feedback:

|              Icon               | Status                                       | Description & Behavior                                                                                                       |
| :-----------------------------: | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
|     `checkmark.circle.fill`     | **Ready (`ready`)**                          | The calculated name is valid, conflict-free, and differs from the original name. The file will be renamed upon confirmation. |
|         `equal.circle`          | **Unchanged (`unchanged`)**                  | Active rules do not alter this filename. The file is skipped safely without error.                                           |
| `exclamationmark.triangle.fill` | **Empty name (`emptyName`)**                 | The active rule chain removed all characters from the filename.                                                              |
| `exclamationmark.triangle.fill` | **Duplicate name (`duplicate`)**             | Two or more files in the current batch would end up with the exact same name in the same folder.                             |
| `exclamationmark.triangle.fill` | **Already exists (`alreadyExists`)**         | Another file with the proposed name already exists in that directory on disk.                                                |
| `exclamationmark.triangle.fill` | **Invalid characters (`illegalCharacters`)** | The calculated name contains characters rejected by macOS filesystems (`/`, `:`, null byte).                                 |
| `exclamationmark.triangle.fill` | **Name too long (`tooLong`)**                | The proposed name exceeds the maximum filesystem limit (255 characters on APFS/HFS+).                                        |

---

## Conflict Isolation: No Aborted Batches

In conventional command-line tools and utilities, a single duplicate or over-length filename crashes the entire batch or silently overwrites existing files.

rName handles errors through **preventive conflict isolation**:

- Files triggering a blocking condition (`emptyName`, `duplicate`, `alreadyExists`, `illegalCharacters`, `tooLong`) are clearly highlighted and **set aside from the operation**.
- Valid, conflict-free files proceed with renaming uninterrupted.
- Your directories are protected from accidental data loss, overwrites, or broken naming sequences.

---

## Manual Per-File Overrides

Occasionally, within a batch of 50 documents following a standard naming pattern, a single item requires a unique custom title.

Rather than having to rename that file separately in Finder:

1. **Double-click** the file's row in the table (or right-click → _Edit name_).
2. Type the desired custom name directly.
3. The file will stop following the rule chain and will be tagged with a **pencil icon**.
4. At any time, clicking the reset button next to the field returns the file back to its calculated rule chain name.
