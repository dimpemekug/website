---
title: "Formats and compatibility"
description: "The formats Documenta opens and saves (DOCX, ODT, DOC, RTF, Markdown, plain text), the notice for parts it can't keep, exports and the known limits."
project: "documenta"
order: 2
section: "Getting Started"
---

## Document formats

| Format | Opens | Saves | How |
|---|---|---|---|
| Word document (`.docx`) | ✓ | ✓ | Documenta's own reader and writer |
| OpenDocument text (`.odt`) | ✓ | ✓ | Documenta's own reader and writer |
| Markdown (`.md`) | ✓ | ✓ | Documenta's own reader and writer |
| Word 97-2004 document (`.doc`) | ✓ | ✓ (Mac) | text from macOS; page, sections, headers, images and objects from Documenta |
| Rich text (`.rtf`) | ✓ | ✓ | Documenta, or macOS for the simplest files |
| Rich text with attachments (`.rtfd`) | ✓ (Mac) | ✓ (Mac) | macOS, with images |
| Plain text (`.txt`) | ✓ | ✓ | |

An opened document is saved in its own format. On iPhone and iPad, `.doc` files open in a new Word document (`.docx`) and aren't saved as `.doc`; see [iPhone and iPad](/en/projects/documenta/docs/iphone-and-ipad). For new documents, the format offered on the first save is set in **Settings › File › Default format for new documents** (DOCX to start with).

## What DOCX and ODT keep

Paragraph and character styles, multilevel lists, tables (nested too, with merged cells, borders and shading), images, links and bookmarks, footnotes and endnotes, headers and footers (different on the first page and on even pages too), fields (page number, page count, date, references), table of contents and table of figures, sections, columns, page border, watermark, drop caps, objects on the page, WordArt, equations, comments (resolved ones too) and tracked changes, and the language of the text.

Word document protection (read-only, comments only…) stays in the file and goes back into the saved DOCX, but Documenta doesn't enforce it: the document can be edited like any other.

If a document uses fonts that aren't installed, a bar above the pages tells you: the text uses a similar font and, when saved, the document keeps the original fonts. When macOS offers those fonts, they download with one click. The warning can be turned off in **Settings › File**.

## Parts Documenta doesn't keep

When you open a DOCX, ODT or Markdown file that holds parts Documenta doesn't handle, the notice **Documenta can't keep all of this file** appears with a list of those parts; **Details** explains what happens to each one. On the Mac it's a bar below the pages, on iPhone and iPad an alert. It comes back every time you open the file: to keep those parts, keep a copy of the original file.

| Part | What happens |
|---|---|
| Word charts | shown as a picture of the saved values, and stay a picture when you save |
| LibreOffice charts | not shown, and lost when you save |
| SmartArt diagrams | shown as shapes with their text, and stay shapes |
| Form fields | check boxes and drop-down lists stay as plain text |
| Embedded objects | only the preview image stays, if there is one |
| Protected sections in ODT | no longer protected once you save |
| Linked images in Markdown | their alternative text stays in their place |

## Markdown

Markdown files open and save like any other document, with headings, lists, tables, links and equations. The images of a Markdown file are separate files: when it opens, their alternative text stands in their place, and **Show Pictures…** in the notice asks for the folder that holds them. Documenta remembers the folder and loads them on its own the next times. When you save, images taken from the folder go back to being links to their files; images added in Documenta are stored inside the file.

## RTF, DOC and plain text

These formats have fewer tools than DOCX and ODT.

- **RTF**: when the document has sections, images, equations, formulas, comments or tracked changes, Documenta writes and reads the RTF itself; other files go through macOS. Sections are kept, comments as Word annotations (with replies and resolved state), insertions and deletions as Word tracked changes, fields and formulas as Word fields, and text boxes, shapes, images on the page, groups and WordArt as Word shapes. This also works for RTF files written by Word.
- **DOC** (saved on the Mac): page, margins, border, columns, sections, headers and footers with page numbers, images and objects on the page are kept. Tracked changes are saved accepted, comments are lost, and fields in the text stay as their text.
- In RTF and DOC, equations become images.
- **Plain text**: the text stays with tracked changes accepted; comments are lost, text boxes become text, shapes are lost and equations stay as LaTeX between `$` signs.

## Exports

From the **File** menu:

- **Export as PDF…**, with the pages as on screen (of different sizes too, if the document has sections with different paper).
- **Export as Web Page…**: a single HTML file with the images inside, headings from the styles, tables (with merged cells too), lists, equations and notes at the end.
- **Export as Markdown…**.
- **Export as EPUB…**: an EPUB 3 with one chapter for each Title and Heading 1.
- **Print…** (<kbd>⌘</kbd> <kbd>P</kbd>) with the system panel.

When the document has comments or tracked changes, printing and PDF ask whether to produce a **clean copy**, without comments and with the changes accepted, or the document as it appears; the document itself doesn't change. See [Comments and tracked changes](/en/projects/documenta/docs/comments-and-tracked-changes).

**Reduce Image Size…** resamples images that are larger than they appear, to 150 ppi (screen and email) or 220 ppi (print); photos become JPEG, GIFs stay as they are.

## Known limits

- Comments keep their plain text, not their formatting.
- A formatting change tracked by LibreOffice can only be accepted: ODF doesn't save the previous formatting.
- Objects: groups inside a group become a single group; freeform shapes are shown, but curves become dense segments. WordArt has six text shapes: Word's other ones become the closest.
- Sections: on the same page only the columns change; paper, margins and headers change from the next page.
- The macOS grammar checker doesn't follow the language chosen for part of the text (spelling does).
