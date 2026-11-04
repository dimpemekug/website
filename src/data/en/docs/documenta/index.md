---
title: "Introduction to Documenta"
description: "What Documenta, the word processor for Mac, is: requirements, the document window, the inspector, the status bar and the app's principles."
project: "documenta"
order: 1
section: "Getting Started"
---

## What is Documenta?

**Documenta** is a native word processor for Mac, written in SwiftUI and AppKit. You write on pages laid out like paper and open, edit and save documents in their own format: Word (`.docx` and `.doc`), OpenDocument (`.odt`), RTF and plain text.

**Requirements**: macOS 15 Sequoia or later, on a Mac with Apple silicon or Intel. The interface is in English and Italian; choose the language in **Settings › General › App language** (the app needs a restart).

## Principles

1. **The file keeps its format.** DOCX and ODT have their own reader and writer: they don't go through the macOS importers, which lose images, links and tables. An opened document is saved in the same format. What is kept, format by format, is in [Formats and compatibility](/en/projects/documenta/docs/formats-and-compatibility).
2. **No network.** The app runs in the macOS sandbox without permission to connect to the Internet: no accounts, analytics or third-party SDKs. Documents stay on your Mac or in the cloud service you choose, such as iCloud Drive.
3. **Everything can be undone.** Undo and redo have no limit; operations on tables, objects and chapters also undo in a single step.

## The document window

- **Toolbar**: paragraph style, font and size, bold, italic, underline, color and highlight, alignment, lists, table, text box, shapes and the <kbd>+</kbd> button for other insertions.
- **Outline** (on the left, <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>O</kbd>): the document's headings, indented by level. See [Long documents](/en/projects/documenta/docs/long-documents).
- **Inspector** (on the right, <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd>): text, paragraph, page, document and the selected object or table. In **Settings › Appearance › Inspector layout** you choose how it looks:
  - **Tabs**: Style, Page and Document, as in Pages, plus a tab for the selected table or object;
  - **Sections**: one column of sections you expand and collapse;
  - **Icons**: a bar with one icon per category; the Table panel appears when the cursor is in a table.
- **Status bar** (at the bottom): current page and total, words and characters, the word goal, a notice when change tracking is on, the Single Page and Two Pages buttons and the zoom.

## View

From the **View** menu:

- **Zoom** from 25% to 400%: Zoom In (<kbd>⌘</kbd> <kbd>></kbd>), Zoom Out (<kbd>⌘</kbd> <kbd><</kbd>), Actual Size (<kbd>⌘</kbd> <kbd>0</kbd>) and Fit Width.
- **Page Layout**: single page, two pages side by side, or automatic, which puts them side by side when the window is wide enough.
- **Pageless** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd>): one continuous sheet. Printing and PDF are still split into pages.
- **Page appearance**: light, dark or automatic. The dark page is on screen only: printouts and files stay black on white.
- **Focus Mode** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>F</kbd>): panels hide and the text outside the cursor's paragraph fades, notes and images included.
- **Show Ruler** (<kbd>⌘</kbd> <kbd>R</kbd>) and **Show Word Count**.

The longest document that gets paginated is 2,000 pages: beyond that a bar tells you so, and the text after the last page is visible only in Pageless view. The text still stays in the document and is saved.

## Next steps

- [Formats and compatibility](/en/projects/documenta/docs/formats-and-compatibility): what opens, what saves and what is lost.
- [Pages, headers and sections](/en/projects/documenta/docs/pages-headers-and-sections): paper, margins, columns, footers.
- [Formatting and styles](/en/projects/documenta/docs/formatting-and-styles): font, paragraph, lists, styles.
- [Long documents](/en/projects/documenta/docs/long-documents): numbered headings, table of contents, captions, notes.
- [Tables](/en/projects/documenta/docs/tables) and [Objects on the page](/en/projects/documenta/docs/objects-on-the-page).
- [Comments and tracked changes](/en/projects/documenta/docs/comments-and-tracked-changes).
- [Templates, saving and settings](/en/projects/documenta/docs/templates-saving-and-settings).
- [Keyboard shortcuts](/en/projects/documenta/docs/keyboard-shortcuts).
