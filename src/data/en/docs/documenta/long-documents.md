---
title: "Long documents"
description: "Outline, numbered headings, table of contents, captions, table of figures, cross-references, bookmarks and notes in Documenta, for theses and reports."
project: "documenta"
order: 5
section: "Writing"
---

## Document outline

**View › Show Outline** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>O</kbd>) opens the sidebar with the Title and Heading paragraphs, indented by level; the entry containing the cursor stays highlighted.

- A click takes you to the heading.
- Dragging a heading moves **the whole chapter**: the heading and everything after it up to the next heading of the same or a higher level.
- The context menu has **Move Up**, **Move Down**, **Promote** and **Demote**; changing the level moves the subheadings too.

Each operation undoes in a single step.

## Numbered headings

**Format › Paragraph Style › Number Headings** numbers the headings as 1, 1.1, 1.1.1. Numbers update by themselves when you add, remove or move a chapter. In Word and ODT files they become the style numbering, as in Word and LibreOffice; in HTML, Markdown, RTF, DOC and plain text they are written as text.

## Table of contents

**Insert › Table of Contents** puts a table of contents at the cursor with headings 1 to 2, 3, 4 or 6 levels deep. Each entry links to its heading, with the page number and dot leaders. **Insert › Update Table of Contents** rebuilds it with the same levels or different ones. The same commands are in the Headings and Indexes section of the Document tab.

## Captions and table of figures

**Insert › Caption…** adds a numbered caption below or above the image or table: the label is Figure, Table, Equation or a name of your own with Other…, and the text is optional. Each label is numbered separately, and the number updates by itself when you add or move other captions.

**Insert › Table of Figures** lists the captions of one label with their pages; **Update Table of Contents** updates this index too.

## Cross-references

**Insert › Cross-Reference…** opens the list of headings and captions in the document. In **Show** you choose what goes into the text:

- the heading text, or label and number for a caption ("Figure 2");
- the heading number, if headings are numbered;
- the page number.

The reference follows its target: if Figure 2 becomes Figure 3, the text changes.

## Bookmarks and links

**Insert › Bookmark…** names the selected text or the word at the cursor. A `#name` link (**Insert › Link…**, <kbd>⌘</kbd> <kbd>K</kbd>) leads to the bookmark. Bookmarks are kept in DOCX and ODT; in EPUB, links between chapters work.

## Notes

- **Footnote** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) and **Endnote** from the Insert menu.
- Inserting a note opens a box to write it in, with formatting too; clicking the note number reopens it.
- Footnotes go at the bottom of the page with the reference, taking up to half the page; a note that's too long continues on the next page. Endnotes go after the text.
- Numbers count themselves.

## Counts and readability

The status bar shows words and characters. A click on the word goal lets you set one (0 for none) and shows the percentage reached.

The **Info** section of the Document tab shows words, characters, pages, **reading time**, words per sentence, longest sentence, frequent words and **readability**: the Flesch score for English and Gulpease for Italian. The reading speed (230 words per minute to start with) is set in **Settings › Writing**.
