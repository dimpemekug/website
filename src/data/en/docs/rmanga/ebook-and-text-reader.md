---
title: "Ebook and Text Reader"
description: "The Readium-based text reader for EPUB, FB2, DOCX, ODT, RTF, HTML, TXT and Markdown: themes, fonts, pagination, bookmarks, highlights and search in rManga."
project: "rmanga"
order: 4
section: "Ebooks"
---

## The Text Reader (Readium)

For text-based books rManga uses **Readium** (`EPUBNavigatorViewController`), the reference open-source toolkit for ebooks. PDFs and image-based EPUBs are paged through with the comic reader instead.

With Readium:
- positions in the book (roughly one every thousand characters) are the same on every device, whatever the screen or font;
- text is laid out with hyphenation in the book's language, detected with Apple's `NaturalLanguage` framework;
- your reading position also syncs with Komga and Kavita servers.

---

## Automatic Conversion of Other Formats

For documents that aren't EPUB (**TXT, Markdown, Word DOCX, LibreOffice ODT, RTF, HTML or FB2**) you don't need external tools like Calibre:

1. **On-device conversion**: the first time you open it, the file is converted to an **EPUB 3** stored in the cache (`Caches/TextBooks`), rebuilt if the file changes.
2. **Chapters detected automatically**:
   - in Markdown every level 1 or 2 heading starts a chapter; in TXT files chapters start at short paragraphs beginning with words like "Chapter", "Part" or "Prologue" (but not lines of a table of contents);
   - DOCX and ODT keep bold, italic, underline, headings, lists, tables, images, links and footnotes (gathered at the end of the chapter), but not fonts, sizes and colors, which would clash with the reader's themes;
   - FB2 files keep sections, notes, poems, epigraphs, quotes and embedded images.
3. **Unsupported formats**: old Word 97 `.doc` files (a binary format iOS can't open) and compressed FB2 files (`.fb2.zip`).

---

## Appearance and Typography

From the reader menu (or Settings › Book reader) you can adjust:
- **Theme**: automatic (follows iOS), light, sepia or dark.
- **Font** and **text size**.
- **Line spacing** and **continuous scrolling** instead of pages.
- **Two columns on iPad**: in landscape the text is laid out in two side-by-side columns, like an open book.

---

## Bookmarks, Highlights and Search

- **Highlights**: select a passage and choose "Highlight"; tap a highlight to remove it. You'll find them all in the Highlights tab of the table of contents.
- **Bookmarks**: the bookmark button in the top bar adds or removes a bookmark on the current page.
- **Search in book**: searches the whole volume (up to 300 results), shows each result with its surrounding text and takes you to the chosen spot, which stays underlined.

Bookmarks and highlights stay on this device: they don't go to iCloud or into backups.
