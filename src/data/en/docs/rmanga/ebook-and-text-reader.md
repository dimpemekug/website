---
title: "Ebook and Text Reader"
description: "The Readium textual reading engine for EPUB, PDF, FB2, DOCX, and TXT: themes, fonts, pagination, footnotes, highlights, and full-text search in rManga."
project: "rmanga"
order: 4
section: "Ebooks"
---

## The Readium Text Engine

rManga embeds the open-source **Readium** framework (`EPUBNavigatorViewController`), the global standard for digital publishing and ebook rendering.

Readium delivers:
- Precise device-independent locator positions across varying font sizes and display geometries.
- Multi-column layout with hyphenation calculated via Apple's `NaturalLanguage` linguistic analysis engine.
- Bi-directional reading progress synchronization with remote servers such as Komga and Kavita.

---

## On-the-Fly Document Conversions

When opening documents that are not packaged as native EPUB files (such as **TXT, Markdown, Microsoft Word DOCX, LibreOffice ODT, RTF, or FictionBook FB2**), rManga requires no third-party desktop utilities:

1. **Local Dynamic Compilation**: upon opening, the document is converted on-device into a valid, compliant **EPUB 3** package cached in `Caches/TextBooks`.
2. **Semantic Chapter Recognition**:
   - Plain text and Markdown files recognize headings (`# Chapter`, `## Section`) and preserve poetry or list line breaks.
   - Word DOCX and LibreOffice ODT files retain bold, italics, lists, tables, embedded illustrations, and native footnotes.
   - FB2 files preserve epigraphs, author verses, and embedded base64 illustrations.
3. **EPUB Native Footnotes (`noteref`)**: tapping footnote references in the text opens an interactive footnote sheet without displacing your reading position.

---

## Typography and Visual Themes

Access the reader controls overlay to customize every aspect of the reading experience:
- **Color Themes**: Classic Light, Warm Sepia, Deep AMOLED Dark, or Automatic (matching system appearance).
- **Typography**: switch between editorial Serif fonts, modern Sans-Serif typefaces, or Monospaced fonts.
- **Text Layout**: sliders for text scaling, line spacing, and margin widths.
- **iPad Dual Column Layout**: toggle two-column book layout when holding your iPad horizontally.

---

## Bookmarks, Highlights, and Search

- **Color Highlights**: select any passage of text to apply persistent highlights. Review all collected quotes in the book's annotations pane.
- **Bookmarks**: tap the top bookmark icon to pin important pages.
- **Full-Text In-Book Search**: search across the entire volume (up to 300 results) with rich contextual snippets, allowing instantaneous navigation directly to matching chapters.
