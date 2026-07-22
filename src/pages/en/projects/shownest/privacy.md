---
layout: ../../../../layouts/LegalLayout.astro
title: "ShowNest Privacy Policy"
description: "Full privacy policy for the ShowNest app: what data is processed, where it is stored, and how optional iCloud sync works."
---

Last updated: July 22, 2026

This Privacy Policy describes how **ShowNest** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs are used
- No user tracking is performed
- The developer does not collect personal data through the app's remote servers
- iCloud sync, if enabled by the user, happens directly between the device and the user's own Apple Account and does not pass through the developer's servers
- The app communicates with The Movie Database (TMDB) API to retrieve show and episode information; no personal data is included in these requests

## Data processed by the app

The app allows the user to locally build and manage a library of TV shows, including:

- show data added by the user via search, sourced from TMDB (show ID, title, poster, and related metadata)
- tracked status of each show, plus the dates it was added and last modified
- episode-level watch progress, i.e. which episodes of each tracked show have been marked as watched
- preferences such as language, theme/accent color, notification settings, and the on/off status of iCloud Sync

This information is stored locally on the device to enable the app to function.

## Data collection

The developer does not automatically collect, receive, transmit, sell, or share user data through remote servers via the app.

Data normally remains in the app's local storage on the device.

If the user enables iCloud Sync (see the dedicated section below), a copy of the library data is automatically saved to the user's own private iCloud storage; even in this case, the developer does not receive or have access to that data.

## Third-party services (TMDB)

ShowNest uses The Movie Database (TMDB) API to search for shows and to display posters, descriptions, cast, and episode information, and to determine air dates used for optional new-episode notifications.

When the user searches or browses, the search query and the requested show/episode identifiers are sent to TMDB's servers to retrieve this public data. The app does not send TMDB any information that identifies the user personally — no account, no device identifier, no tracked-library data.

TMDB's own privacy policy applies to that traffic: https://www.themoviedb.org/privacy-policy

This product uses the TMDB API but is not endorsed or certified by TMDB.

## iCloud sync

ShowNest offers an optional iCloud sync feature, disabled by default and enabled by the user from the app's Settings.

When enabled:

- the app saves a copy of the tracked-shows library (shows, watch progress, and deletions) to the user's own iCloud account, using Apple's iCloud Key-Value Storage (`NSUbiquitousKeyValueStore`) — a lightweight sync mechanism, not a hosted database
- sync happens directly between the user's devices and Apple's iCloud servers; data does not pass through or get stored on the developer's servers
- data is accessible only from devices signed in with the same Apple Account as the user
- sync happens automatically in the background after a change to the library, at app launch, or when new data arrives from another of the user's devices, while the feature is enabled

The user can disable sync at any time from the app's Settings. Disabling it stops future syncs but does not automatically delete any copy already present in the user's iCloud; it can be removed using the device's iCloud storage management (Settings > [Apple ID] > iCloud > Manage Storage).

## Notifications

ShowNest can send local notifications for new episodes when the user enables "New episode alerts" in Settings.

Notifications are generated and shown locally on the device based on air dates retrieved from TMDB; they do not involve any data transmission beyond the standard TMDB requests described above. To enable them, the app requests the system permission to send notifications.

## Device permissions

ShowNest requests:

- notification permission, to deliver new-episode alerts (optional, only if enabled by the user)

The app does not request access to the camera, photo library, contacts, location, or biometric authentication, and does not use any such data.

## Data sharing

ShowNest does not share user data with the developer or third parties for analytics, advertising, profiling, or tracking purposes.

The only data that leaves the device is: the show/episode requests sent to TMDB to display content (see "Third-party services"), and, if enabled by the user, the automatic sync with the user's own Apple Account via iCloud (see above). In both cases, data only reaches TMDB's public API or the destination controlled by the user's own Apple Account — never the developer's servers.

## Data storage

App data is stored locally on the device, including:

- a local JSON file in the app's Application Support directory, containing the tracked-shows library
- local preferences (`UserDefaults`) for settings such as theme, language, notification preferences, and iCloud Sync status

If enabled by the user, a compressed copy of the library is also saved to the user's iCloud Key-Value Storage, as described in the "iCloud sync" section.

## Retention and deletion

Data entered into the app remains on the device until the user:

- removes shows from their library, or marks/unmarks episodes as watched
- disables iCloud Sync
- uninstalls the app, which removes all locally stored data, subject to operating system behavior

If iCloud Sync has been enabled, any copy saved to the user's Apple Account remains in the user's iCloud storage even after disabling the feature or uninstalling the app, until removed by the user through the device's iCloud storage management.

Because the developer does not receive or store app data on remote servers, the developer cannot access, correct, or delete the user's local or iCloud data on their behalf.

## Children

ShowNest is not specifically directed to children and does not knowingly collect personal data from children.

## Security

The app relies on the security mechanisms provided by the operating system for local storage. When enabled, iCloud sync relies on the security mechanisms of the user's own Apple Account.

No method of device storage or cloud sync can be guaranteed to be completely secure.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
