---
title: "Engine and Safety"
description: "How rName's renaming engine works: two-phase operation with temporary names, case changes on APFS, automatic rollback and undo."
project: "rname"
order: 4
section: "Safety & Architecture"
---

## The Risks of Renaming

Renaming files is a delicate operation. If a utility renames files directly, in a single pass (`rename(source, destination)`), three kinds of problems are common:

1. **Name swaps**: swapping two files (`A` → `B` and `B` → `A`) fails immediately, because the destination `B` is still taken.
2. **Case-only changes**: on the Mac's default file system (case-insensitive **APFS** or **HFS+**), renaming `archive.zip` to `Archive.zip` fails or is ignored, because to the file system both names are the same file.
3. **Halfway interruptions**: if an operation on 500 files stops at file 250 (for example because of a revoked permission or an unplugged disk), you're left with a half-renamed set, not knowing which files were touched.

rName avoids all of these with its renaming engine (`RenameExecutor`).

---

## Two-Phase Renaming

Disk operations run in the background, off the main thread, in two phases:

```
[Original file] ──(phase 1)──> [temporary .rname-<UUID>] ──(phase 2)──> [Final name]
```

### Phase 1: Temporary Names

Each file to rename first gets a unique hidden temporary name, in the same folder:

```
photo.jpg  ──>  .rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811
```

This frees the original name right away, so swaps (`A` → `B` and `B` → `A`) and longer cycles happen without collisions.

### Phase 2: Final Names

Then each temporary file gets its final name:

```
.rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811  ──>  Photo.jpg
```

Now the file system accepts the new name, even when only the case changes, because the destination is free.

---

## Automatic Rollback

If a move fails during the second phase (for example because an external disk suddenly became read-only):

- the engine catches the error right away;
- the temporary file **goes back to its original name**;
- no file is ever left on disk with the temporary `.rname-` name;
- you get a summary explaining what went wrong.

---

## Undoing the Last Rename (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>)

Every successful rename is remembered, with each file's new and previous name.

- If you realize you applied the wrong rules, press <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> (or choose _Rename › Undo Last Rename_).
- rName runs the reverse operation, again in two phases, and brings every file back to the name it had before.
