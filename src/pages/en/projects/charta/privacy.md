---
layout: ../../../../layouts/LegalLayout.astro
title: "Charta Privacy Policy"
description: "Privacy policy for Charta for Mac, iPhone and iPad: no account and no data collected, Markdown documents on your device, math and diagrams without a network."
---

Last updated: November 10, 2026

This Privacy Policy describes how **Charta**, for Mac, iPhone, and iPad, handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking takes place
- Charta does not send data to the developer or to third parties
- Documents are read, edited, and saved entirely on your device

## Data the app handles

Charta handles only:

- the Markdown documents you open or create: from the Files app, from Finder, with "Open…", or inside a folder opened as a workspace
- the folders you choose to open as workspaces, with the list of Markdown files and images they contain
- the images referenced by your documents, to show them in the editor and in the preview
- the files the app creates at your request: new notes and folders, images pasted or dropped into a note, HTML, PDF, Word (DOCX) and EPUB exports
- the app's preferences (see "Data storage")

## Data collection

The developer does not collect, receive, transmit, sell, or share any user data. Charta does not communicate with the developer's servers or with third-party servers.

## Internet connections

Charta contains no code that connects to the Internet. The only exception depends on the content of your documents: if a document references an image by its web address (for example `![](https://…)`), the preview downloads it from that site, as a browser would. The image's site receives the request with your device's IP address, but no data from the document.

Formulas (KaTeX) and diagrams (Mermaid) are drawn with libraries bundled in the app, with no connection.

HTML files you export that contain formulas or diagrams load KaTeX and Mermaid from a public content delivery network (jsDelivr) when they are opened in a browser. This happens in the browser, not in the app.

## Documents and files

Documents are saved where they are: in the location you choose or in the folder opened as a workspace. In folders, notes are saved automatically shortly after each change.

To draw formulas and diagrams in the editor, Charta uses a hidden internal WebKit view that works in memory with the files bundled in the app.

Charta does not change or rewrite your documents beyond what you type: the file stays a plain Markdown text file. When you rename a note that other notes link to, or choose "Replace" across all notes, the app asks for confirmation before changing the other files.

Exports (HTML, PDF, Word, and EPUB) are created on your device. On Mac they are saved where you choose; on iPhone and iPad they are prepared in a temporary folder of the app and go through the system share sheet, where you decide where to save them or whom to send them to.

## Device permissions

On Mac, Charta runs inside the macOS sandbox and can only access the files and folders you explicitly choose.

- To show the images stored next to a document opened on its own, Charta asks for access to its folder with a system panel.
- To reopen recent and authorized folders after a restart, the app saves a security-scoped bookmark.
- Charta declares the outgoing connection permission only for the web images described above.

On iPhone and iPad, Charta accesses the documents opened from the Files app and the folders chosen with the system picker. New documents created without iCloud go to the Charta folder in "On My iPhone" or "On My iPad".

Charta does not request access to the camera, microphone, contacts, calendars, location, Photos library, or biometric authentication.

## Clipboard

Copy, Cut, and Paste use the system clipboard only when you choose them. On Mac, the "Copy Link [[…]]" item in a note's context menu puts the link to that note on the clipboard.

## Data sharing

Charta does not share user data with the developer or with third parties for any purpose: analytics, advertising, profiling, or tracking.

## Data storage

The app stores locally on your device, in its own container:

- preferences (`UserDefaults`): editor mode, font and sizes, line spacing, text width, line numbers, preview style, editor and preview layout, appearance, language, image folder
- project settings: name in the list, color, symbol, image folder, note order, and start note
- the list of pinned projects and recently opened folders and (on Mac) authorized folders, as security-scoped bookmarks
- the list of the latest notes opened in folders (file name and path, not the content)

## Retention and deletion

- Documents and notes are your files and remain after the app is uninstalled.
- Notes deleted from a folder go to the Trash when the system allows it.
- On Mac, the list of recent folders is cleared with File › Recent Folders › Clear List, and on every device with "Clear Recents" in the project list. "Remove from List" forgets a project and its settings; the folder stays where it is.
- Uninstalling the app removes preferences and bookmarks, within the limits of the operating system's behavior.

Since the developer does not receive or store any data, the developer cannot access, correct, or delete user data on your behalf.

## Children

Charta is not specifically directed at children and does not collect personal data from any user, including children.

## Security

The app relies on the operating system's security: App Sandbox and Hardened Runtime on Mac, app isolation on iOS and iPadOS, and the file access permissions you grant. HTML written in documents is shown in the preview without scripts.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
