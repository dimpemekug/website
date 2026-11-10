---
title: "Formatting, tables and writing"
description: "The Format and Insert menus, lists and indentation, table commands, pasted text, the word goal, Focus Mode and Typewriter Mode."
project: "charta"
order: 4
section: "Writing"
---

Every command writes Markdown into the text: you can always see and fix the marks in the code editor, or with the cursor on them in WYSIWYG.

## Format

On the Mac in the **Format** menu; on iPhone and iPad in the "Aa" menu of the toolbar and in the [bar above the keyboard](/en/projects/charta/docs/iphone-and-ipad).

- **Bold**, **Italic**, **Strikethrough**, **Code**, **Highlight**: with a selection they add or remove the marks around it; without one they apply to the word under the cursor, or leave empty marks with the cursor in between.
- **Heading**: from **Body Text** to **Heading 6**, on the selected lines.
- **Bulleted List**, **Numbered List**, **Checklist**, **Quote**: add or remove the mark at the start of each selected line.
- **Increase Indent** and **Decrease Indent** (<kbd>⌘</kbd> <kbd>]</kbd> and <kbd>⌘</kbd> <kbd>[</kbd>): indent list items.

Shortcuts are listed in [Keyboard shortcuts](/en/projects/charta/docs/keyboard-shortcuts). The same heading and list menu also opens from the block type on the left of the status bar.

## Insert

On the Mac in the **Insert** menu; on iPhone and iPad in the "Aa" menu and in the **+** button above the keyboard:

- **Link**: `[text](url)`. If you selected an address, it becomes the destination and the cursor moves to the text.
- **Link to a Note**: `[[…]]`, with suggestions from the folder's notes.
- **Image**: `![description](…)`.
- **Table**: three columns and two rows, with the first header selected.
- **Code Block**, **Formula**, **Mermaid Diagram**: around the selected lines, or empty at the cursor.
- **Footnote**: the `[^n]` reference at the cursor and the note at the end of the document, with the cursor in the note.
- **Divider**: a `---` line.

## Lists and quotes

Return in a list item or a quote continues the mark on the new line (numbers go up, checkboxes start empty). Return on an empty item removes the mark and leaves the list. Tab and <kbd>⇧</kbd> Tab on list items indent and outdent them.

## Tables

With the cursor in a table:

- **Tab** moves to the next cell, <kbd>⇧</kbd> Tab to the previous one;
- **Return** moves to the row below and adds one after the last; Return on an empty last row leaves the table;
- **Format Table** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) aligns the columns in the text;
- **Add Row**, **Add Column**, **Delete Row**, **Delete Column**;
- **Move Row Up/Down** and **Move Column Left/Right**, on the Mac with <kbd>⌥</kbd> <kbd>⌘</kbd> and the arrow keys;
- **Align Left**, **Align Center**, **Align Right** for the cursor's column (from the status bar menu; on the Mac also in **Format › Table**).

On the Mac the commands are in **Format › Table** and in the status bar menu; on iPhone and iPad in the **Edit Table** menu above the keyboard and in the status bar menu.

## Pasting

Text copied from a web page or from a formatted document (headings, bold, links, lists, tables) becomes Markdown when you paste it. Text coming from a code editor stays plain text, and inside code blocks the text is always pasted as it is. On the Mac, **Edit › Paste and Match Style** always pastes plain text.

Images pasted or dropped into the text are saved as files next to the note: see [Folders and linked notes](/en/projects/charta/docs/folders-and-linked-notes).

## Word goal

In the status bar, the word count is also a button: click it to open **Word Goal**, type the number and choose **Set**. The goal is written into the document's front matter (`goal: 1500`), so it travels with the file; **Remove Goal** removes it (and the front matter, if it was left empty). With a goal, the status bar shows a ring and "135 of 600 words".

## Focus Mode and Typewriter Mode (Mac)

In the **View** menu:

- **Focus Mode** (<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) highlights the block you're writing in and dims the rest;
- **Typewriter Mode** (<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>T</kbd>) keeps the cursor's line in the middle of the window.

**Bigger Text** and **Smaller Text** (<kbd>⌘</kbd> <kbd>+</kbd> and <kbd>⌘</kbd> <kbd>-</kbd>) change the font size of WYSIWYG and the code editor in every window; **Actual Size** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>0</kbd>) goes back to the defaults.

## Spelling and punctuation

Spell checking is on at first; **Smart Quotes and Dashes** is off, because straight quotes and hyphens matter in Markdown. Change them in **Settings › Editor › Writing**.
