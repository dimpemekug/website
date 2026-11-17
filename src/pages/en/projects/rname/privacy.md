---
layout: ../../../../layouts/LegalLayout.astro
title: "rName Privacy Policy"
description: "Full privacy policy for the rName app: what data is processed, how files are handled, and why no data ever leaves your Mac."
---

Last updated: November 17, 2026

This Privacy Policy describes how **rName** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking takes place
- The app does not connect to the Internet: it has no network permission, so macOS prevents any connection
- Files are renamed entirely on the Mac and are never uploaded to servers, whether the developer's or third parties'
- rName does not change the contents of files: it reads their name, size, and dates; for photos, it reads EXIF metadata only for the "Photo metadata" rule, on the Mac

## Data the app handles

rName only handles:

- the files and folders the user chooses: dragged into the window or onto the Dock icon, chosen with "Choose a Folder…" or "Add Individual Files…", or opened with "Open With…" from the Finder
- for each file: its name, path, size, and creation and modification dates. The dates are used to sort the list and by the "Date and time" and "Photo metadata" rules
- for images, only when the chain contains the "Photo metadata" rule: the EXIF metadata the rule can put in the name (date taken, camera, lens, dimensions, ISO, focal length)
- app preferences: appearance, language, default sort order, file, renaming, and rule options, files to ignore, custom shortcuts, saved presets, and whether the introduction has been seen

rName **does not change the contents of files**. Beyond the name, size, and dates, it reads
only two things, both on the Mac:

- the **EXIF metadata of images**, read without opening the whole image and only when the
  user uses the "Photo metadata" rule. It is used to compute the new name, kept in memory
  while the app is open, and never saved or transmitted;
- the **thumbnails** shown next to the names in the list, prepared by macOS (Quick Look)
  and kept in memory only while the app is open.

The only operation it performs on disk is changing a file's name, at the user's explicit
request.

The list of open files is not saved and is cleared when the app quits. Rules are kept
between launches only if the user turns on the corresponding option in Settings › Renaming.

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does
not communicate with any server.

All data stays on the user's Mac.

## Folder permissions

Renaming a file requires permission to modify the **folder that contains it**, not the
file itself. For this reason rName asks for access to a folder the first time it needs to
work in it.

The permission granted is kept in a *security-scoped bookmark*, saved in the app's
preferences inside the sandbox container. It is a reference that is valid only for rName
and only on that Mac: it does not contain the folder's contents and cannot be read by other
apps.

The full list of authorized folders is shown in **Settings › Permissions**, where each
permission can be revoked individually or all at once. Revoking does not touch any file: it
only means the permission will be asked for again next time.

## What it does and does not do to files

rName renames: it does not copy, move, delete, or change the contents of files.

Renaming happens in two steps, through a temporary name, because that is what makes
swapping two names and changing only the letter case work. If the second step fails, the
file is returned to its original name: no file is left with the temporary name.

Before every operation the app checks for conflicts — names that would repeat, files that
already exist on disk, invalid characters, names that are too long — and leaves out the
affected files instead of going ahead.

## Third-party services

rName does not use third-party services. It contains no analytics, advertising, crash
reporting, or other external service SDKs.

## Sync and cloud

rName offers no sync features and does not use iCloud. If the user renames files in a folder
synced by a cloud service (for example iCloud Drive or Dropbox), syncing is handled by that
service and by macOS, not by rName.

## Diagnostic data

rName does not send error reports to the developer. If the user has turned on sharing
analytics with app developers in macOS System Settings, crash reports are collected and
anonymized by Apple and made available in aggregate form: that mechanism belongs to Apple,
and the user can turn it off in System Settings › Privacy & Security › Analytics &
Improvements.

## Data sharing

rName does not share user data with the developer or with third parties, for any purpose: analytics, advertising, profiling, or tracking.

## Data storage

The app stores locally on the Mac, in its own container:

- preferences: appearance, language, default sort order, file, renaming, and rule options, files to ignore, custom shortcuts, saved presets, and whether the introduction has been seen
- the rules in use, only if the user turns on the option in Settings › Renaming
- folder permissions, as security-scoped bookmarks (see "Folder permissions")

The list of open files, photo metadata, and thumbnails are not saved.

## Retention and deletion

- Renamed files are part of the user's files and remain even after the app is uninstalled.
- Folder permissions are revoked in Settings › Permissions.
- Uninstalling the app removes preferences, presets, and permissions, within the limits of operating system behavior.

Because the developer receives and stores no data, they cannot access, correct, or delete user data on the user's behalf.

## Children

rName is not specifically directed at children and does not collect data from any user,
regardless of age.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the folder access permissions granted by the user.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

Any changes will be published at this same address, with the date at the top of the page
updated.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
