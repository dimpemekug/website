---
layout: ../../../../layouts/LegalLayout.astro
title: "rZip Privacy Policy"
description: "Full privacy policy for the rZip app: what data is processed and why archives and files never leave your Mac and how passwords are handled."
---

Last updated: October 8, 2026

This Privacy Policy describes how **rZip** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking takes place
- rZip does not connect to the Internet: the app has no permission to use the network
- Archives and files are read, created, and edited entirely on your Mac and are never sent to any server, the developer's or anyone else's

## Data the app handles

rZip handles only:

- the archives you open: with "Open Archive…", by dragging them into the window or onto the Dock icon, with "Open With…" or a double click in Finder, or from the list of recent archives
- the contents of those archives: names, sizes, dates, and permissions of their items, and the contents of the files you choose to preview
- the files and folders you choose to create a new archive from, or to add to an existing archive
- the files the app creates at your request: new or edited archives, items extracted to the destination you choose, items dragged from an archive to Finder or another app
- the passwords of protected archives, entered by you (see "Passwords")
- the app's preferences (see "Data storage")

## Data collection

The developer does not collect, receive, transmit, sell, or share any user data. rZip does not communicate with any server, the developer's or a third party's: the app has no permission to use the network.

All data stays on your Mac.

## Archives and files

Opening an archive extracts nothing to disk: the file list and the previews (images, PDFs, text) are read in memory.

Files are written to disk only when you ask for it:

- **Extraction**: the chosen items are written to the destination folder, never overwriting existing files.
- **Dragging to Finder**: the item is extracted, when you drop it, into a temporary folder inside the app's container and handed to Finder or the receiving app. Temporary copies are deleted when the app launches and quits.
- **Creating an archive**: the new archive is written to the destination you choose.
- **Editing an archive** (adding or deleting items): the updated archive is prepared in a temporary folder and replaces the original only if the operation succeeds.
- **Backup copy**: before editing an archive, rZip puts a copy of it in your Trash. You can turn this off in Settings › General.
- **Integrity check**: all data is checked in memory, without writing anything.

## Passwords

Passwords of protected archives are used only to open, extract, verify, or edit the archive they belong to. They stay in memory while the archive's window is open and are never saved to disk, to the keychain, or anywhere else.

Passwords chosen when creating a new archive are used only to encrypt it (AES-256) and are not kept.

## Third-party components

rZip contains no analytics, advertising, crash reporting, or other external services. To read and write archives it uses:

- **7-Zip** by Igor Pavlov (GNU LGPL license), included in the app and run locally on your Mac
- **libarchive**, the macOS system library

Neither of them communicates over the network.

## Device permissions

rZip runs inside the macOS sandbox and can access only the files and folders you explicitly choose, by dragging, opening, or selecting them in a system panel.

Some features need access to a whole folder: reading archives split into several volumes, extracting next to the archive, creating an archive in several volumes. In these cases rZip asks for it with a system panel. Authorized folders are listed in Settings › Advanced, where you can remove them.

To reopen recent archives and authorized folders after a restart, the app saves a security-scoped bookmark.

rZip does not request access to the camera, microphone, contacts, calendars, location, Photos library, or biometric authentication.

## Clipboard

The Copy command and the "Copy Name" and "Copy Path" context menu items put the names or paths of the selected items on the macOS clipboard, only when you choose them.

## Data sharing

rZip does not share user data with the developer or with third parties for any purpose: analytics, advertising, profiling, or tracking.

## Data storage

The app stores locally on your Mac, in its own container:

- preferences (`UserDefaults`): appearance, number of recent archives, browsing, extraction, creation, and editing options
- the list of recent archives and authorized folders, as security-scoped bookmarks

## Retention and deletion

- Archives you create, edit, or extract are part of your files and remain after the app is uninstalled.
- The list of recent archives can be cleared with "Clear" in the welcome window, with File › Open Recent › Clear Menu, or in Settings › General.
- Authorized folders can be removed in Settings › Advanced.
- Backup copies in the Trash are deleted when you empty the Trash.
- Uninstalling the app removes preferences and bookmarks, within the limits of the operating system's behavior.

Because the developer neither receives nor stores any data, the developer cannot access, correct, or delete user data on your behalf.

## Children

rZip is not directed specifically at children and does not collect personal data from any user, children included.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the file access permissions granted by the user. Archives created with a password are encrypted with AES-256.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
