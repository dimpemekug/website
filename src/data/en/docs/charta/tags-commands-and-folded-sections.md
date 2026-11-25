---
title: "Tags, commands and folded sections"
description: "Charta's #name tags, the command palette, foldable sections and link previews, on Mac, iPhone and iPad."
project: "charta"
order: 6
section: "Folders"
---

Four tools for finding your way in long or numerous notes, added in Charta 1.1.

## Tags

A tag is a word preceded by `#`, written in the text or in the `tags:` key of the front matter:

```markdown
---
tags: [weather, hardware]
---

To check before winter. #idea #project/charta
```

- A tag starts at the beginning of a line or after a space or a parenthesis, and contains letters (accented ones too), digits, `_`, `-` and `/`. It needs at least one character that isn't a digit, so `#1` stays text.
- The `/` creates nested tags: `#project/charta` sits under `#project`.
- In the text, tags are colored on a rounded background, like inline code, and the same in the preview. After `#`, Charta suggests the tags already used in the folder.

In folders, the sidebar has a **Tags** section: one branch per tag, with nested tags inside and the notes that have them. **Search Notes for #…** searches every note for the tag. In the text, <kbd>⌘</kbd>-click on a tag or **Notes Tagged #…** in the right-click menu run the same search.

## Command palette

**View › Commands…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd>; on iPhone and iPad in the **More** menu, and <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd> with a keyboard) opens a field where you type part of a command's name:

- format, insert, table, view, section and export commands, with their shortcut;
- the document's headings, to jump to them;
- in folders, notes and tags too.

With no text, recently used commands come first. Commands can also be found with words other than their name, for example "h1" for **Heading 1** or "bold" for **Bold**.

## Folded sections

A section runs from a heading to the next heading of the same or a higher level. Folding it hides its text and leaves the heading with "…"; the file doesn't change.

- An arrow next to headings folds and unfolds the section. On the Mac it appears when the pointer passes over the margin; on iPhone and in narrow columns it sits after the text of the heading where the cursor is.
- On the Mac, in the **View** menu: **Fold Section** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>[</kbd>), **Expand Section** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>]</kbd>), **Fold All Sections** (<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>[</kbd>) and **Expand All Sections** (<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>]</kbd>). The same commands are in the right-click menu on a heading and in the command palette.
- In the **Outline**, headings have the same arrows, and the context menu has **Fold Level N Headings**. Dragging a heading in the Outline moves its whole section; the blank lines between sections stay where they are.
- Typing inside the hidden part, or pressing Return at the end of the heading, unfolds the section. The cursor never stays hidden: the → key at the end of the heading skips the section.

Charta remembers the folded sections of each file and folds them again when you reopen or reload it. It works in WYSIWYG and in the code editor.

## Link previews

Rest the pointer on a `[[note]]` link or a `[^1]` reference (on iPhone and iPad, press and hold it) and a popover shows:

- the beginning of the note, without the front matter;
- the section, if the link points to a heading (`[[note#heading]]`);
- the text of the footnote.

The text is formatted and stops at the end of a block, within about 1,200 characters. The popover closes when you start typing again.

## Broken links and orphan notes

In folders, **File › Broken Links and Orphan Notes…** (on the Mac also in the **+** menu, on iPhone and iPad in the **More** menu, and in the command palette) opens two lists:

- **Broken Links**: links that don't lead to any note in the folder, grouped by the name they look for. **Create Note** creates the missing note; clicking a link opens the note that contains it at that point.
- **Orphan Notes**: notes no other note links to, with `[[…]]` or with a Markdown link. A note linking to itself doesn't count.

The lists update on every save.
