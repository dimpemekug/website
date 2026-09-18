---
layout: ../../../../layouts/LegalLayout.astro
title: "rName Privacy Policy"
description: "Full privacy policy for the rName app: what data is processed, how files are handled, and why no data ever leaves your Mac."
---

Last updated: September 17, 2026

This Privacy Policy describes how **rName** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking is performed
- The app does not connect to the Internet: it has no network entitlement, so macOS prevents it from making any connection
- Files are renamed entirely on the Mac and are never uploaded to any server, whether the developer's or a third party's
- rName does not open the contents of your files: it reads the name, the size, and the dates, not what is inside

## Data processed by the app

rName processes only:

- the files and folders the user chooses: dragged into the window or onto the Dock icon, picked with "Choose a Folder…" or "Add Individual Files…", or opened with "Open With…" from Finder
- for each file: the name, the path, the size, and the creation and modification dates. The dates are used to sort the list and by the "Date and time" rule
- the app's preferences: appearance, language, default sorting, file and rule options, and saved presets

rName **does not read the contents of your files**: it does not open their data, does not extract internal metadata (EXIF and the like), and does not create previews. The only operation it performs on disk is changing a file's name, at the user's explicit request.

The list of open files is not saved and is emptied when the app quits. Rules are kept between launches only if the user turns on the corresponding option in Settings › Files.

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with any server.

All data stays on the user's Mac.

## Folder permissions

Renaming a file requires permission to modify the **folder holding it**, not the individual file. That is why rName asks for access to a folder the first time it needs to work in it.

The permission granted is kept in a *security-scoped bookmark*, saved in the app's preferences inside its sandbox container. It is a reference that works only for rName and only on that Mac: it does not contain the folder's contents and cannot be read by other apps.

The full list of authorised folders is visible in **Settings › Permissions**, where each permission can be revoked individually or all at once. Revoking touches no file: it only means the permission will be asked for again the next time it is needed.

The app does not request access to the camera, microphone, Photos library, contacts, calendars, location, or biometric authentication, and has no network access.

## What it does and does not do to your files

rName renames: it does not copy, move, delete, or modify the contents of files.

Renaming happens in two steps, going through a temporary name, because that is what makes swapping two names with each other and changing only capitalisation work. If the second step fails, the file is put back to its original name: no file is left with the temporary name.

Before every operation the app checks for conflicts — names that would collide, files already on disk, invalid characters, names that are too long — and leaves the affected files out instead of proceeding.

## Third-party services

rName uses no third-party services. It contains no analytics, advertising, crash reporting, or other external SDKs.

## Sync and cloud

rName offers no sync features and does not use iCloud. If the user renames files in a folder synced by a cloud service (for example iCloud Drive or Dropbox), syncing is handled by that service and by macOS, not by rName.

## Data sharing

rName does not share user data with the developer or third parties for any purpose: analytics, advertising, profiling, or tracking.

No data leaves the Mac through the app.

## Retention and deletion

The app stores locally on the Mac only the preferences (`UserDefaults`), the presets, and the bookmarks of authorised folders, inside its sandbox container.

- Renamed files are regular user files: they stay where they are, with the name chosen, even after the app is uninstalled.
- Folder permissions can be revoked in Settings › Permissions, individually or all at once.
- Uninstalling the app removes the saved preferences, presets, and bookmarks, subject to operating system behavior.

Because the developer does not receive or store any data, the developer cannot access, correct, or delete the user's data on their behalf.

## Diagnostic data

rName does not send error reports to the developer. If the user has turned on sharing analytics with developers in macOS System Settings, crash reports are collected and anonymised by Apple and made available in aggregate form: that mechanism is Apple's, and the user can turn it off in System Settings › Privacy & Security › Analytics & Improvements.

## Children

rName is not specifically directed to children and does not collect data from any user, regardless of age.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the file access permissions granted by the user.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

Any changes will be published at this same address, updating the date at the top of the page.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
