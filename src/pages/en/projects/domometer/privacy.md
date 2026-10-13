---
layout: ../../../../layouts/LegalLayout.astro
title: "DomoMeter Privacy Policy"
description: "Full privacy policy for the DomoMeter app: what data is processed, where it stays, and how optional iCloud sync on iOS and Android backup work."
---

Last updated: October 13, 2026

This Privacy Policy describes how **DomoMeter** handles data, on iOS and on Android.

## Summary

- No account is required
- No analytics tools are used
- No advertising or tracking SDKs are used
- No user tracking takes place
- The developer runs no servers and receives no data
- Readings stay on the device; on iOS also in the user's private iCloud account, only if they turn on sync; on Android also in the user's Android backup, if turned on
- On Android the app does not connect to the Internet and asks for no permissions

## Data the app handles

DomoMeter only handles the content the user enters:

- electricity (including F1, F2, and F3 time bands), gas, and water meter readings, with their date and optional notes
- home profiles and the consumption limits for each utility
- on iOS, also tariffs and spending budgets entered by the user, and the reading reminder settings
- app preferences: language, theme, colors, measurement units, and interface settings

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with servers belonging to the developer or to third parties; on Android it does not even have permission to access the Internet.

## iCloud sync (iOS only)

The app offers an **optional** iCloud sync, off by default and enabled by the user in Settings.

When it is enabled:

- app data (readings, profiles, tariffs, limits, and preferences) is stored as a snapshot in the **private iCloud database of the user's own account**, through Apple's CloudKit service
- the data stays in the user's iCloud account: the developer has no access to it, does not receive it, and does not store it
- Apple's processing is governed by Apple's own privacy policy
- turning sync off stops the app from sending and receiving updates; data already in iCloud can be removed by the user from the device's iCloud settings

If sync is left off, no app data leaves the device.

## Android backup (Android only)

Android may include the app's data in the device backup the user has turned on (for example Google backup) and restore it on a new device. The backup is handled by Android and the service the user chose, under their terms, and is not accessible to the developer. It can be turned off in the system settings.

## Notifications (iOS only)

The reading reminder uses the operating system's local notifications, scheduled on the device. It sends no data to remote servers and requires the user's permission, which can be revoked at any time in the system settings.

## Backup and export

Backups (JSON) and, on iOS, CSV files are created only when the user asks, and saved or shared to the destination the user chooses. Import reads only the file the user selects.

## Device permissions

- **iOS**: DomoMeter may ask for permission to send notifications, for the reading reminder.
- **Android**: DomoMeter asks for no permissions: it does not access the Internet, notifications, location, camera, microphone, photos, contacts, or calendars.

## Data sharing

DomoMeter does not share user data with the developer or with third parties, for any purpose: analytics, advertising, profiling, or tracking.

The only exception is when the user explicitly exports, saves, or shares a backup or a CSV file: the file goes only to the destination the user chooses.

## Data storage

The app stores on the device, in its own storage:

- the database with readings, profiles, and limits
- preferences

On iOS, when iCloud sync is on, the data is also kept in the user's private iCloud database.

## Retention and deletion

- Readings and profiles are edited or deleted in the app; importing a backup replaces the existing data.
- Uninstalling the app, or on Android clearing its data in the system settings, removes local data.
- On iOS, synced data can be deleted from the device's iCloud settings.
- Exported backups and files stay where the user saved them until they are deleted.

Because the developer receives and stores no data, they cannot access, correct, or delete user data on the user's behalf.

## Children

DomoMeter is not specifically directed at children and does not collect personal data from any user, including children.

## Security

The app relies on the operating system's security mechanisms, which keep each app's data separate, and, for sync on iOS, on Apple's iCloud infrastructure.

No method of on-device storage can be guaranteed to be completely secure, especially after the user exports or shares a file outside the app.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version is always available at this address, the same one listed in App Store Connect and in the Play Console.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
