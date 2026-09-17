---
layout: ../../../../layouts/LegalLayout.astro
title: "Remuxly Privacy Policy"
description: "Full privacy policy for the Remuxly app: what data is processed, how videos are handled, and why no data ever leaves your Mac."
---

Last updated: September 13, 2026

This Privacy Policy describes how **Remuxly** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs that communicate over the network are used
- No user tracking is performed
- The app does not connect to the Internet: it has no network entitlement, so macOS prevents it from making any connection
- Videos are processed entirely on the Mac and are never uploaded to any server, whether the developer's or a third party's

## Data processed by the app

Remuxly processes only:

- the videos the user chooses to open: with "Open Video…", by dragging them into the window or onto the Dock icon, with "Open With…" from Finder, or by adding them to the "Merge Videos" window
- the files the user chooses to use while editing: subtitles (SRT, ASS/SSA) and color lookup tables (.cube LUTs)
- the files the app creates at the user's request: exported or merged videos, extracted audio, video, or subtitle tracks, frames saved as images, and subtitles saved as SRT
- the job queue: queued exports, with the paths of the files involved and the chosen settings (format, encoding, trim, filters, tracks)
- the app's preferences: default format and codec, default destination folder, interface language, and keyboard shortcuts

Videos are read and processed locally on the Mac, including through the FFmpeg components bundled with the app (see "Third-party components").

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with any server.

All data stays on the user's Mac.

## Videos and original files

Remuxly never modifies the original files: every export, merge, or extraction creates a new file at the destination chosen by the user.

Video metadata (for example track language and title) is read to display it in the app and, if the user edits it, written only to the new exported file, always and only on the Mac.

## Third-party components

Remuxly includes FFmpeg, distributed under the LGPL license, to analyze, decode, and encode videos. FFmpeg runs locally, inside the same sandbox as the app and without network access.

Remuxly contains no analytics, advertising, crash reporting, or other external SDKs.

## Sync and cloud

Remuxly offers no sync features and does not use iCloud. If the user opens videos from, or chooses as the destination, a folder synced by a cloud service (for example iCloud Drive), syncing is handled by that service and by macOS, not by Remuxly.

## Notifications

Remuxly can show a local notification when an export finishes. macOS asks for permission the first time it is needed, and it can be revoked at any time from System Settings › Notifications. Notifications are generated on the Mac: no push notification service is used.

## Device permissions

Remuxly runs inside the macOS sandbox and can only access the files and folders the user explicitly chooses, by dragging, opening, or selecting them in a system panel.

To reopen a video or write to the chosen folder after a restart (for example for queued exports), the app saves a security-scoped bookmark to those files and folders.

The app does not request access to the camera, microphone, Photos library, contacts, calendars, location, or biometric authentication, and has no network access.

## Data sharing

Remuxly does not share user data with the developer or third parties for any purpose: analytics, advertising, profiling, or tracking.

No data leaves the Mac through the app.

## Data storage

The app stores locally on the Mac:

- the preferences (`UserDefaults`) listed in the "Data processed by the app" section
- the job queue, in a file inside the app's container (Application Support), together with the security-scoped bookmarks of the files involved
- the files created at the user's request, at the chosen destination

## Retention and deletion

- Exported files are regular user files: they stay where they were saved until the user moves or deletes them, even after the app is uninstalled.
- Exports can be removed from the job queue (Tools › Job Queue).
- Uninstalling the app removes the saved preferences and job queue, subject to operating system behavior.

Because the developer does not receive or store any data, the developer cannot access, correct, or delete the user's data on their behalf.

## Children

Remuxly is not specifically directed to children and does not collect personal data from any user, children included.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the file access permissions granted by the user.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
