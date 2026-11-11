---
title: "Export and print"
description: "Exporting a Charta document to HTML, PDF, Word (DOCX) and EPUB and printing it, on Mac, iPhone and iPad."
project: "charta"
order: 6
section: "Sharing"
---

The document stays in Markdown; exports are new files, written where you choose.

- **Mac**: **File › Export as HTML…**, **Export as PDF…**, **Export as Word (DOCX)…**, **Export as EPUB…** and **Print…** (<kbd>⌘</kbd> <kbd>P</kbd>). The file is saved with the save panel.
- **iPhone and iPad**: the same items in the toolbar's **More** (…) menu. The file goes through the share sheet: save it to Files, send it with AirDrop or Mail, or open it in another app.

## HTML

A single page with the preview style (**GitHub**, **Paper** or **Compact**, from **Settings › Preview › Style**) and colored code. If the document has math or diagrams, the page loads KaTeX and Mermaid from jsDelivr when you open it in a browser: you need a network connection at that moment to see them. The browser does this, not Charta.

## PDF and printing

PDF and printing use the preview style, always in light colors even with the dark theme, with math, diagrams and code block backgrounds. On the Mac pages are A4, or the paper chosen in the print settings, with half-inch margins; on iPhone and iPad the PDF is A4.

## Word (DOCX)

A real Word document, not a renamed web page:

- headings with the **Heading 1**…**6** styles, so Word's table of contents recognizes them;
- real Word bulleted and numbered lists, each with its own numbering;
- Word footnotes;
- tables, code, quotes, links and images;
- math and diagrams as images;
- A4 pages.

## EPUB

An e-book with one chapter for each first-level heading (`#`). Links between headings work across chapters too. Math and diagrams become images, and the document's images go into the book.

## Title, author and language

For Word and EPUB, Charta reads `title`, `author` (or `autore`) and `lang` (or `language`, `lingua`) from the front matter. Without `title` it uses the file name; without a language, the device's.

```markdown
---
title: The Lighthouse
author: Jane Smith
lang: en
---
```

## Math, diagrams and images in exported files

For Word and EPUB, Charta draws math and diagrams in light colors before writing them. Each one gets up to 8 seconds: if it can't be drawn, the file keeps the formula's or diagram's text. Images with a relative path are read from the note's folder: on the Mac, for a document opened on its own, Charta needs access to its folder (see [Folders and linked notes](/en/projects/charta/docs/folders-and-linked-notes)).
