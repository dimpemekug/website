---
layout: ../../../../layouts/LegalLayout.astro
title: "Resizo Privacy Policy"
description: "Full privacy policy for the Resizo app: what data is processed, how image metadata is handled, and why no data ever leaves your Mac."
---

Last updated: September 11, 2026

This Privacy Policy describes how **Resizo** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking is performed
- The app does not connect to the Internet: it has no network entitlement, so macOS prevents it from making any connection
- Images are processed entirely on the Mac and are never uploaded to any server, whether the developer's or a third party's
- By default, EXIF metadata (date, camera model, GPS location) is stripped from exported images

## Data processed by the app

Resizo processes only:

- the images the user chooses to resize: dropped into the window or onto the Dock icon, chosen with "Add Images…", opened with "Open With…" from Finder, or sent with the "Resize with Resizo" service
- the resized copies the app creates at the user's request
- the app's preferences: resize mode, percentage, proportion lock, output format, JPEG quality, file name suffix, metadata option, chosen destination folder, size presets, language, and theme

Images are read and processed in memory on the Mac. The list of open images is not saved and is cleared when the app quits.

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with any server.

All data stays on the user's Mac.

## Images and metadata

Resizo never modifies the original images: it always creates a new file, without overwriting existing files, in the Pictures › Resizo folder or in another folder chosen by the user.

By default, exported copies do **not** include the original's metadata (EXIF, GPS coordinates, capture date and time, camera model, color profile). The user can choose to keep it by enabling the "Keep original metadata" option in the resize panel; in that case the metadata is copied into the new file as is, always and only on the Mac.

## Third-party services

Resizo does not use any third-party services. It contains no analytics, advertising, crash reporting, or other external SDKs.

## Sync and cloud

Resizo offers no sync features and does not use iCloud. If the user chooses a folder synced by a cloud service (for example iCloud Drive) as the destination, syncing is handled by that service and by macOS, not by Resizo.

## Notifications

Resizo does not send notifications.

## Device permissions

Resizo runs inside the macOS sandbox and can only access:

- the files and folders the user explicitly chooses (by dragging, opening, or selecting them in a system panel), to read images and save the resized copies
- the user's Pictures folder, to save copies to the default destination folder Pictures › Resizo

The app does not request access to the camera, microphone, Photos library, contacts, calendars, location, or biometric authentication, and has no network access.

## Data sharing

Resizo does not share user data with the developer or third parties for any purpose: analytics, advertising, profiling, or tracking.

No data leaves the Mac through the app.

## Data storage

The app stores locally on the Mac:

- the preferences (`UserDefaults`) listed in the "Data processed by the app" section; for the destination folder chosen by the user, a security-scoped bookmark is saved so the app can keep writing to it between launches
- the resized copies, in the chosen destination folder

## Retention and deletion

- Resized copies are regular user files: they stay where they were saved until the user moves or deletes them, even after the app is uninstalled.
- Preferences can be reset to their defaults from Settings › General › "Restore Default Settings"; presets are managed from Settings › Presets.
- Uninstalling the app removes the saved preferences, subject to operating system behavior.

Because the developer does not receive or store any data, the developer cannot access, correct, or delete the user's data on their behalf.

## Children

Resizo is not specifically directed to children and does not collect personal data from any user, children included.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the file access permissions granted by the user.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
