---
title: "Markdown Notes and Links"
description: "How to write Markdown notes in CodeVault: the bar above the keyboard, tables, the editor menu, preview, PDF and links between notes with [[Title]]."
project: "codevault"
order: 3
section: "Features"
---

## Writing a Markdown Note

A note can be **plain text** or **Markdown**. In Markdown the editor colors what you type (headings, bold, code, lists, quotes, checked items) and the detail view shows the note laid out. The `</>` button in the detail view switches between the preview and the source text.

As you type:

- <kbd>Return</kbd> continues a list or a quote; on an empty item it ends it.
- <kbd>Tab</kbd> and <kbd>⇧</kbd> <kbd>Tab</kbd> increase and decrease an item's indent.
- Tapping `[ ]` in the editor ticks the item.
- **Paste** from Safari, Mail or Pages turns formatted text into Markdown.

---

## The Markdown Bar

On **iPhone** and **iPad** the Markdown bar sits above the keyboard (also with a hardware keyboard attached); on **Mac** the same commands are in the bar above the editor.

- **Outline**: the first button jumps to one of the note's headings.
- **Headings** 1 to 6, bold, italic, strikethrough.
- **Lists**: bulleted, numbered and checklists, quotes, indent.
- **Code** inline and in blocks, links, footnotes, a divider and **tables**.

### Tables

With the cursor in a table, the **Table** menu adds, moves and deletes rows and columns, aligns columns and tidies up the text.

### The Editor Menu

Long-press in the text (right-click on Mac). Depending on where you are, the menu offers:

- on a link: **Remove Link**, which keeps the text;
- in a checklist: **Check All** or **Uncheck All**;
- on a heading: copy the link to the heading, **Move Section Up** or **Move Section Down**;
- in a code block: **Copy Code** and the block's language.

---

## Preview and PDF

- **Checkboxes** can be ticked with a tap in the preview, without opening the editor.
- `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]` and `> [!CAUTION]` blocks become colored boxes.
- A line with only `[TOC]` becomes a table of contents of the headings.
- At the top you see lines, words and reading time.
- From the **⋯** menu you export the note to **PDF** (A4 pages). The PDF is always light, even when the app uses the dark theme.

---

## Links Between Notes

In Markdown notes you link one note to another by writing its title between double square brackets:

| You type | You get |
| :--- | :--- |
| `[[Release Runbook]]` | a link to the note |
| `[[Release Runbook#Build]]` | a link to the *Build* heading of that note |
| `[[Release Runbook\|the runbook]]` | a link to the note that reads "the runbook" |
| `[[#Build]]` | a jump to the *Build* heading of the same note |

- **As you type**: after `[[` the titles of your other notes appear, above the keyboard on iPhone and iPad and in the completion list on Mac; after `[[#` the headings of the open note appear.
- **In the preview**: tapping a link opens the note. If the note doesn't exist the link shows as broken, and works again once you create a note with that title.
- **Linked From**: at the bottom of every note there is a list of the notes that point to it, with the line of the link.

Good to know:

- Titles are matched ignoring case, accents and leading or trailing spaces: `[[release runbook]]` works.
- Links work between notes, not to snippets.
- Inside code blocks `[[…]]` stays plain text.
- If you rename a note, links in other notes don't update on their own: change them by hand.
