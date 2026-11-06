---
title: "Formats and compatibility"
description: "The formats Documenta opens and saves (DOCX, ODT, DOC, RTF, plain text), exports to PDF, EPUB, HTML and Markdown, and the known limits."
project: "documenta"
order: 2
section: "Getting Started"
---

## Document formats

| Format | Opens | Saves | How |
|---|---|---|---|
| Word document (`.docx`) | ✓ | ✓ | Documenta's own reader and writer |
| OpenDocument text (`.odt`) | ✓ | ✓ | Documenta's own reader and writer |
| Word 97-2004 document (`.doc`) | ✓ | ✓ | text from macOS, page, headers and images from Documenta |
| Rich text (`.rtf`) | ✓ | ✓ | macOS |
| Rich text with attachments (`.rtfd`) | ✓ | — | macOS, with images |
| Plain text (`.txt`) | ✓ | ✓ | macOS |

An opened document is saved in its own format. On iPhone and iPad, `.doc` files open in a new Word document (`.docx`) and aren't saved as `.doc`; see [iPhone and iPad](/en/projects/documenta/docs/iphone-and-ipad). For new documents, the format offered on the first save is set in **Settings › File › Default format for new documents** (DOCX to start with).

## What DOCX and ODT keep

Paragraph and character styles, multilevel lists, tables (nested too, with merged cells, borders and shading), images, links and bookmarks, footnotes and endnotes, headers and footers (different on the first page and on even pages too), fields (page number, page count, date, references), table of contents and table of figures, sections, columns, page border, watermark, drop caps, objects on the page, WordArt, comments and tracked changes, and the language of the text.

If a document uses fonts that aren't installed, a bar above the pages tells you: the text uses a similar font and, when saved, the document keeps the original fonts. When macOS offers those fonts, they download with one click. The warning can be turned off in **Settings › File**.

## RTF, DOC and plain text

These formats have fewer tools than DOCX and ODT. When saving as RTF, DOC or plain text:

- text boxes become text and shapes are lost;
- comments are lost and tracked changes are kept as accepted text;
- sections become page breaks;
- fields and table formulas stay as their current text.

## Exports

From the **File** menu:

- **Export as PDF…**, with the pages as on screen (of different sizes too, if the document has sections with different paper).
- **Export as Web Page…**: a single HTML file with the images inside, headings from the styles, tables (with merged cells too), lists and notes at the end.
- **Export as Markdown…**.
- **Export as EPUB…**: an EPUB 3 with one chapter for each Title and Heading 1.
- **Print…** (<kbd>⌘</kbd> <kbd>P</kbd>) with the system panel.

**Reduce Image Size…** resamples images that are larger than they appear, to 150 ppi (screen and email) or 220 ppi (print); photos become JPEG, GIFs stay as they are.

## Known limits

- Comments keep their plain text, not their formatting; replies are kept in DOCX and ODT.
- A formatting change tracked by LibreOffice can only be accepted: ODF doesn't save the previous formatting.
- Objects: groups inside a group become a single group; freeform shapes are shown, but curves become dense segments. WordArt has six curves: Word's other shapes become the closest one.
- Sections: on the same page only the columns change; paper, margins and headers change from the next page.
- The macOS grammar checker doesn't follow the language chosen for part of the text (spelling does).
