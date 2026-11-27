---
title: "Comments and tracked changes"
description: "Comments and tracked changes in Documenta: comments to resolve, the comments list, changes to accept or reject, comparing versions and a clean copy."
project: "documenta"
order: 9
section: "Review"
---

## Comments

- **Insert › Comment** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>) puts a comment on the selected text.
- Commented text is highlighted in yellow (on screen only) and a bubble in the right margin of the page opens the comment, with author, date, text and replies. You edit, delete or reply there.
- The author is the name of the Mac user; on iPhone and iPad you set it in the app's Settings.

### Resolving a comment

When a discussion is over, **Resolve** in the comment window resolves it: the comment stays in the document, but its text is no longer highlighted and a grey mark stays in the margin. **Reopen** brings it back among the open ones.

In the **Edit › Tracked Changes** menu:

- **Next Comment** and **Previous Comment** move from one open comment to the next;
- **Resolve and Go to Next** resolves the comment at the cursor and moves on to the next one.

When there are open comments, the status bar shows how many, with a menu holding the same commands.

### The list of comments

**View › Show Comments** opens the sidebar on the **Comments** tab, next to **Outline**. The list is filtered into **Open** and **Resolved**; each entry has author, date, commented text, the comment and the number of replies. A click takes you to the text, a double-click opens the comment, and the context menu resolves, reopens or deletes it.

Comments are kept in DOCX and ODT, resolved ones too, and read from those written in Word and LibreOffice. The comment's plain text is kept, not its formatting, and so are the replies. In RTF, comments become Word annotations, with their replies; in DOC and plain text they are lost.

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
- In **RTF**, insertions and deletions stay tracked changes, including those written by Word; formatting changes are saved accepted.
- In DOC, plain text and exports, the text is kept with all changes accepted.

## Comparing with an earlier version

**File › Compare with an Earlier Version…** asks for the file of the earlier version (DOCX, ODT, RTF, DOC, Markdown or plain text) and opens a new document: today's version, with the differences as tracked changes, removed text struck through and new text underlined. You accept and reject them like any other.

- A changed paragraph is compared word by word; if almost all of it changed, it becomes one deleted paragraph and one inserted.
- Formatting and paragraph changes (style, alignment, indents) become formatting changes; tables with the same rows and columns are compared cell by cell.
- Any tracked changes already in the two files are accepted before comparing.

## Clean copy

If the document has tracked changes or open comments, **Print…** and **Export as PDF…** ask how to go on: **Print Clean Copy** (or **Export Clean Copy**) accepts the changes and removes the comments in that copy only, **Print As Is** leaves it as you see it. The document itself doesn't change.
