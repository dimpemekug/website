---
layout: ../../../../layouts/LegalLayout.astro
title: "rExif Privacy Policy"
description: "Full privacy policy for the rExif app: what data is processed, how files are edited, and why your photos and videos never leave your Mac."
---

Last updated: October 7, 2026

This Privacy Policy describes how **rExif** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking takes place
- Photos and videos are read and edited entirely on your Mac and are never uploaded to any server, the developer's or anyone else's
- The developer runs no servers: the only network connections go to Apple services for the map and place names (see "Apple services that use the network")

## Data the app handles

rExif handles only:

- the photos and videos you choose to add: with "Add Photos and Videos…", by dragging them into the window or onto the Dock icon, with "Open With…" in Finder, or by adding whole folders
- the items in your Photos library that you pick in the system picker (see "Photos library")
- the metadata of those items: capture, digitized, creation and modification dates, GPS location, camera and lens, description, author, copyright, city, state and country, keywords and rating, file name
- the files you choose to use while editing: GPX tracks, Google Takeout JSON files located next to your photos, CSV files to import, existing .xmp files next to your files
- the files the app creates at your request: .xmp files next to files that can't be rewritten, exported CSV files, copies without personal data, originals exported from the Photos library
- the session: the list of open items, so they reopen at the next launch (can be turned off in Settings)
- the app's preferences: interface language, appearance, thumbnail size, table columns

## Data collection

The developer does not collect, receive, transmit, sell, or share any user data. rExif does not communicate with any server run by the developer or by any third party other than Apple.

All data stays on your Mac, except as described in "Apple services that use the network".

## Photos, videos, and original files

rExif is a metadata editor: when you click Save, your changes are written into the files you chose (or, for formats that can't be rewritten, such as RAW, into an .xmp file next to them). Images are not recompressed and audio and video content is not re-encoded.

Before saving, every change is shown in a preview and can be undone or reverted. Unsaved changes are not kept when the app quits.

If writing a file is interrupted (for example because the disk is full), rExif restores the original file or keeps a complete copy next to the file or in the Application Support folder inside the app's container, and tells you where it is.

## Photos library

If you pick items from your Photos library, macOS asks for permission to access it. Access is used to:

- read the date and location of the items you picked and show their thumbnails
- change the date and location of those items, only when you save; macOS asks for confirmation every time
- export the originals to a folder you choose, if you ask for it

If your library uses iCloud Photos, macOS may download items from iCloud to show thumbnails or export originals. That transfer takes place between your Mac and iCloud and is handled by macOS.

You can revoke this permission at any time in System Settings › Privacy & Security › Photos.

## Apple services that use the network

Some features use Apple services built into macOS that require an Internet connection. rExif sends nothing to these services unless you use the corresponding feature:

- **Map** (inspector and map view): to draw the map, MapKit downloads map tiles for the area shown from Apple.
- **Searching for a place by name**: the search text is sent to Apple Maps search to find the coordinates.
- **City and country from coordinates**: the items' coordinates are sent to Apple's geocoding service, which returns the place name. Photos taken at the same spot share a single request.
- **Show in Maps**: opens the Maps app (or maps.apple.com) at the item's coordinates, with its name.

Apple processes this data under its own [privacy policy](https://www.apple.com/legal/privacy/). The developer of rExif does not receive it.

## Third-party components

rExif contains no analytics, advertising, crash reporting, or other external service SDKs. It only uses macOS frameworks (ImageIO, AVFoundation, PhotoKit, MapKit, Core Location, Quick Look).

## Sync and cloud

rExif offers no sync features and does not use iCloud. If you edit files in a folder synced by a cloud service (for example iCloud Drive), syncing is handled by that service and by macOS, not by rExif.

## Device permissions

rExif runs inside the macOS App Sandbox and can only access the files and folders you explicitly choose, by dragging, opening, or selecting them in a system panel. Renaming a file or creating its .xmp requires access to its folder: if you only added individual files, rExif asks for it with a system panel.

To reopen the session after a restart, the app saves a security-scoped bookmark to the files and folders you added.

The app may ask for access to your Photos library (see above). It does not request access to the camera, microphone, contacts, calendars, your Mac's location, or biometric authentication. The locations shown and edited are those recorded in your photos, not your Mac's location.

## Clipboard

The "Copy" commands in the context menu (for example coordinates, file name, or path) put text on the macOS clipboard only when you choose them. Copying and pasting metadata between items happens inside the app.

## Data sharing

rExif does not share user data with the developer or with third parties for any purpose: analytics, advertising, profiling, or tracking.

## Data storage

The app stores locally on your Mac:

- the preferences (`UserDefaults`) listed under "Data the app handles"
- the session: file paths, Photos item identifiers, and security-scoped bookmarks to the files and folders you added
- any recovery copies from an interrupted save, in the Application Support folder inside the app's container
- the files created at your request, at the destination you chose

## Retention and deletion

- Saved changes are part of your files and remain after the app is uninstalled.
- The session is cleared by emptying the list (File › Clear List) or by turning off "Reopen items from the previous session at launch" in Settings.
- Uninstalling the app removes its preferences and session, within the limits of how the operating system behaves.

Because the developer receives and stores no data, the developer cannot access, correct, or delete user data on your behalf.

## Children

rExif is not specifically directed at children and collects no personal data from any user, children included.

## Security

The app relies on macOS security mechanisms: App Sandbox, Hardened Runtime, and the file and Photos library permissions you grant.

No method of on-device storage can be guaranteed to be completely secure.

## Changes to this policy

Any changes will be published at this same address, updating the date at the top of the page.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
