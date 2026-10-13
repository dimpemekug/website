---
layout: ../../../../layouts/LegalLayout.astro
title: "rManga Privacy Policy"
description: "Full privacy policy for the rManga app: what data is processed, which sources and servers it connects to, and how optional iCloud sync works."
---

Last updated: October 13, 2026

This Privacy Policy describes how **rManga** handles data.

## Summary

- No account with the developer is required
- No analytics tools are used
- No advertising or tracking SDKs are used
- No user tracking takes place
- The developer runs no servers and receives no data
- The app connects only to the sources, servers, and services the user adds or uses
- The library and progress stay on the device and, only if the user turns on sync, in their private iCloud account

## Data the app handles

rManga only handles:

- the library: series, chapters, and episodes added by the user, with covers, reading and watching progress, bookmarks, and book highlights
- the files the user imports: comics, books, and documents (CBZ, CBR, EPUB, PDF, FB2, text, and others), subtitles, image enhancement models, backups
- chapters and episodes downloaded for offline use
- sources: repositories and extensions installed by the user, with their settings
- the user's own servers (Suwayomi, Komga, Kavita, Jellyfin, OPDS catalogs): address, username, password or token
- app preferences: reading, playback, appearance, updates, iCloud sync

## Data collection

The developer does not collect, receive, sell, or share user data. rManga has no servers of its own: it communicates only with the services described under "Network connections".

## Network connections

- **Sources and extensions.** Extensions are downloaded from the repositories the user adds (the app neither includes nor suggests any repository) and contact the content websites to search for series, list chapters, and download pages or videos. These websites are run by third parties, which receive the necessary requests (for example search terms and the IP address) and handle them under their own rules. The developer does not run or control these websites.
- **Personal servers.** Suwayomi, Komga, Kavita, Jellyfin, and OPDS catalogs are servers belonging to or chosen by the user, reached with the credentials the user enters, including on the local network.
- **Source web pages.** Some websites require a check (for example Cloudflare) or a sign-in: rManga opens them in a web view, and the cookies those websites set are kept for later requests.
- **Episode information.** For intro and recap skip times and for episode titles and thumbnails, the app queries AniList (with the series title), AniSkip, Anira, and Kitsu (with the series identifier and episode number). No user data is sent.

## iCloud sync

iCloud sync stays off until the user turns it on in the app's settings.

When it is on, the library with its progress, the settings, and the list of repositories, extensions, and servers are synced across the user's devices through the **CloudKit private database** of their iCloud account. Server passwords and tokens are **not** synced: they stay in the device's Keychain. This data is managed by Apple under its own privacy policy and is not accessible to the developer.

## Notifications

If the user turns on background updates, the app periodically checks the library's sources and shows a local notification when new chapters come out. iOS asks for permission, which can be revoked in Settings › Notifications.

## Device permissions

rManga may ask for access to:

- the local network, to reach the user's own servers
- notifications, for new chapter alerts

The app does not request access to location, camera, microphone, Photos library, contacts, or calendars.

## Data sharing

rManga does not share user data with the developer or with third parties for analytics, advertising, profiling, or tracking. The only outside communications are those described under "Network connections", started by the sources, servers, and features the user uses.

## Data storage

The app stores on the device, in its own container:

- the library, progress, and settings (SwiftData database)
- imported files, covers, and downloaded chapters and episodes
- installed extensions and data from source websites (cookies and web cache)
- server passwords and tokens, in the device's Keychain

When iCloud sync is on, the part described under "iCloud sync" is also kept in the user's CloudKit private database.

## Retention and deletion

- Series, downloads, extensions, and servers are removed in the app.
- The Storage page in Settings can free downloads, temporary files, and website data (cookies and cache).
- Uninstalling the app removes local data, within the limits of operating system behavior.
- Data synced to iCloud can be deleted in Settings › [your name] › iCloud › Manage Storage.

Because the developer receives and stores no data, they cannot access, correct, or delete user data on the user's behalf.

## Children

rManga is not specifically directed at children and does not collect personal data from any user, including children. The content available depends on the sources and servers the user adds.

## Security

Server passwords and tokens are kept in the iOS Keychain. The app relies on the security mechanisms of iOS and iPadOS for other data on the device; synced data is handled by iCloud under Apple's terms.

No method of transmission or storage can be guaranteed to be completely secure, especially toward third-party websites and servers.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version should be made available at the public privacy policy URL used in App Store Connect.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
