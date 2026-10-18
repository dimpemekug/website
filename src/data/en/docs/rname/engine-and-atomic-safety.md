---
title: "Engine and Atomic Safety"
description: "The technical architecture of rName's rename engine: two-phase atomic moves via temporary staging files, APFS case-change handling, automatic rollback, and Undo history."
project: "rname"
order: 4
section: "Safety & Architecture"
---

## The Hazards of Direct Filesystem Renaming

Modifying filenames directly at the operating system level is inherently delicate. If a tool executes renames in a single direct step (`rename(source, destination)`), three severe failure modes frequently occur:

1. **Cyclic Swaps**: attempting to swap two filenames (`A` → `B` and `B` → `A`) fails on the very first step because destination `B` is already occupied by an existing file.
2. **Case-Only Renames**: on standard macOS filesystems (**APFS** and **HFS+** formatted as _Case-Insensitive_), renaming `photo.jpg` to `Photo.jpg` fails or is silently ignored because the filesystem views both strings as referring to the same inode.
3. **Mid-Batch Interruptions**: if a batch of 500 files halts at file 250 (due to a revoked permission or disconnected volume), the user is left with a half-renamed directory and no safe way to know which files were altered.

rName eliminates all three failure modes through its **RenameExecutor** engine.

---

## Two-Phase Atomic Execution

All disk operations run on background threads off the main actor, following a strict two-phase staging protocol:

```
[Original File] ──(Phase 1)──> [.rname-<UUID> Staging] ──(Phase 2)──> [Final Target Name]
```

### Phase 1 — Staging to Unique Temporary Files

Each valid source file is first moved to a unique, hidden temporary file created in the same parent folder:

```
photo.jpg  ──>  .rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811
```

This instantly frees the original filename in the filesystem namespace. Complex permutations, swaps (`A` → `B`, `B` → `A`), and multi-file cycles can now take place without collisions.

### Phase 2 — Moving to the Final Destination

Each temporary staging file is moved to its ultimate destination name:

```
.rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811  ──>  Photo.jpg
```

The filesystem readily accepts the new name (even for case-only changes) because the destination name is completely unbound.

---

## Automatic Emergency Rollback

If an error occurs during Phase 2 (such as an external drive suddenly becoming read-only):

- The engine catches the failure immediately.
- The temporary staging file is **restored back to its original filename**.
- No file is ever left stranded on disk with a `.rname-` prefix.
- The user receives an informative summary detailing exactly what happened.

---

## Undo History (⌥⌘Z)

Every successful rename batch is recorded in memory as a `RenameOperation` struct, documenting the precise mapping between destination URLs and original filenames.

- If you realize you applied the wrong rule chain, simply press <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> (or choose _Edit › Undo Rename_).
- rName immediately executes the reverse plan in two phases, restoring every file in the batch back to its pre-rename state.
