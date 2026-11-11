---
title: "WYSIWYG and code editor"
description: "Charta's two ways of writing, the preview with synchronized scrolling, the heading outline and the status bar."
project: "charta"
order: 2
section: "Writing"
---

Every document can be written in two ways. The file is the same: only the way you see it changes.

## WYSIWYG

In WYSIWYG your text appears already formatted: headings, bold, italics, links, lists and quotes. Markdown marks show up only in the stretch where the cursor is, so you can fix them, and disappear when you move on. Heading `#` signs sit in the left margin, so a heading doesn't shift when you reach it.

These take the place of their text when the cursor isn't on them:

- **tables**, with aligned columns;
- **math** and **Mermaid diagrams**, drawn as in the preview;
- **images** on a line of their own, both files on disk and images with a web address, which Charta downloads like the preview does. An image that can't be read leaves its text; after a network error Charta tries again a minute later.

Checklist boxes are checked with a click (or a tap); the file only changes from `[ ]` to `[x]`.

Math and diagrams can be turned off in **Settings › Editor**: with **Draw Formulas** or **Draw Mermaid Diagrams** off, their text stays. With **Always Show Front Matter** off, the YAML front matter at the top of the file only appears when the cursor reaches it.

## Code editor

The code editor shows the Markdown itself, in a monospaced font, with:

- syntax colors, including inside code blocks in about thirty languages;
- line numbers and the current line highlighted (turn them off in **Settings › Editor**);
- the **preview**, beside the text (**Code and Preview**) or on its own (**Preview Only**).

On the Mac the commands are also in the **View** menu: **Show Side-by-Side Preview** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd>) and **Preview Only** (<kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd>); on iPhone and iPad **Preview Only** is in the toolbar's **More** (…) menu. Drag the divider between editor and preview to resize them. On iPhone the preview sits below the text, on iPad beside it.

With **Synchronized Scrolling** on, text and preview scroll together both ways. On the Mac, double-clicking a block in the preview moves the cursor to its line in the text. You can also check boxes in the preview, and `[[note]]` links open the note.

The preview uses one of the three styles in **Settings › Preview › Style**: **GitHub**, **Paper** (serif, centered headings, for long texts) and **Compact**. The same style is used when exporting to HTML and PDF. HTML written in documents is shown without scripts.

## The view switcher

The view switcher has three choices: **WYSIWYG**, **Code Editor** and **Code and Preview**. It sits on the right of the toolbar, as three icons; on iPhone it's in the **More** (…) menu. With **Settings › General › View Switcher** › **In the Status Bar** it moves to the bottom right, with the short words **WYSIWYG**, **Code** and **Side by Side** (a menu on iPhone). In **Preview Only** the switcher marks no choice.

<kbd>⌘</kbd> <kbd>E</kbd> (also on iPad with a keyboard) switches between WYSIWYG and the code editor, and brings back the preview layout you had. The cursor stays at the same place in the text. The default mode is set in **Settings › General › Open documents in**; in a folder, the [project settings](/en/projects/charta/docs/folders-and-linked-notes) can choose another one for the first note.

## Heading outline and backlinks

The sidebar on the right has two tabs: **Outline**, with the document's headings (the one at the cursor is highlighted; click to jump to it), and **Backlinks**, with the notes that link to the open one (folders only). On the Mac: **View › Show Outline** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>L</kbd>) and **View › Backlinks** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>B</kbd>). On iPad the sidebar sits alongside the text; on iPhone it opens in a sheet.

## Status bar

At the bottom of the window:

- on the left, the **block type at the cursor** (Text, Heading 2, Table, Code…), with a menu that changes: headings, lists and quote for text, table commands for tables, the language for code blocks;
- the **word goal** or the word count (see [Formatting, tables and writing](/en/projects/charta/docs/formatting-tables-and-writing));
- characters, lines and reading time (on iPhone only words and reading time);
- in the code editor with the preview, the synchronized scrolling switch;
- on the right, if you chose it, the view switcher.
