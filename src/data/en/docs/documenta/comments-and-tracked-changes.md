---
title: "Comments and tracked changes"
description: "Margin comments and change tracking in Documenta: adding, editing and deleting comments, accepting or rejecting changes, compatibility with Word and LibreOffice."
project: "documenta"
order: 8
section: "Review"
---

## Comments

- **Insert › Comment** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>) puts a comment on the selected text.
- Commented text is highlighted in yellow (on screen only) and a bubble in the right margin of the page opens the comment, with author, date, text and replies. You edit, delete or reply there.
- The author is the name of the Mac user; on iPhone and iPad you set it in the app's Settings.

Comments are kept in DOCX and ODT and read from those written in Word and LibreOffice. The comment's plain text is kept, not its formatting, and so are the replies. In RTF, DOC and plain text, comments are lost.

## Tracking changes

**Edit › Tracked Changes › Track Changes** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>) turns tracking on for the document; the status bar shows it, and a click on the notice turns it off.

With tracking on:

- typed, pasted or dragged text is an **insertion**, underlined in the author's color;
- deleted or replaced text stays, **struck through**;
- a bar in the left margin marks the changed paragraphs;
- a formatting change (bold, font, color, style…) is marked with the previous formatting;
- deletions of whole paragraphs and table rows are tracked too.

Deleting your own text you just inserted really removes it. Changes the app makes by itself, such as updating a table of contents, are not tracked. Hovering over a change shows who made it and when; the marks also show in print, as in Word.

## Accepting and rejecting

From the **Edit › Tracked Changes** menu or the context menu:

- **Accept Change** and **Reject Change**: the ones in the selection, or the one at the cursor;
- **Accept All Changes** and **Reject All Changes**;
- **Next Change** and **Previous Change** to step through them.

Each command undoes in a single step.

## Compatibility

- In **DOCX**, tracked changes are read and written like Word's.
- In **ODT**, a formatting change saved by LibreOffice can only be accepted, because ODF doesn't save the previous formatting (Documenta adds it to its own files). Paragraph changes saved in ODT reopen in Documenta, while LibreOffice shows them as formatting changes; a deletion across several paragraphs becomes a single paragraph.
- In RTF, DOC, plain text and exports, the text is kept with all changes accepted.
