---
layout: ../../../../layouts/LegalLayout.astro
title: "Time Tracker Privacy Policy"
description: "Full privacy policy for the Time Tracker app: what data is processed, where it stays, and how optional iCloud sync on iOS and Android backup work."
---

Last updated: October 13, 2026

This Privacy Policy describes how **Time Tracker** handles data, on iOS and on Android.

## Summary

- No account is required
- No analytics tools are used
- No advertising or tracking SDKs are used
- No user tracking takes place
- The developer runs no servers and receives no data
- Projects and entries stay on the device; on iOS also in the user's private iCloud account, only if they turn on sync; on Android also in the user's Android backup, if turned on
- On Android the app does not connect to the Internet

## Data the app handles

Time Tracker only handles the content the user enters:

- projects: name, color, notes, start and end dates, archive state, optional hourly rate and VAT percentage
- time entries: title, project, start and end date and time or daily total, duration, notes
- the Pomodoro timer: chosen task and project, duration and state of the current session
- app preferences: language, theme, colors, interface and timer settings, iCloud sync (on iOS), onboarding state
- sample data, only if the user chooses to load it

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with servers belonging to the developer or to third parties; on Android it does not even have permission to access the Internet.

## iCloud sync (iOS only)

iCloud sync stays off until the user turns it on in the app's settings.

When it is on, projects and entries are synced across the user's iPhone and iPad through the **CloudKit private database** of their iCloud account. This data is managed by Apple under its own privacy policy and is not accessible to the developer.

## Android backup (Android only)

Android may include the app's database in the device backup the user has turned on (for example Google backup) and restore it on a new device. The backup is handled by Android and the service the user chose, under their terms, and is not accessible to the developer. It can be turned off in the system settings.

## Notifications

During a Pomodoro session the app shows a local notification with the timer's state; on iOS also a Live Activity, on the Lock Screen and in the Dynamic Island. They are generated on the device: no push notification service is used. The operating system asks for permission to send notifications, which can be revoked in the system settings.

## Export and import

Backups (JSON) and dashboard reports (PDF or CSV) are created only when the user asks, and saved or shared to the destination the user chooses. Import reads only the backup file the user selects.

## Device permissions

Time Tracker may ask for permission to send notifications, for the Pomodoro timer.

The app does not access location, camera, microphone, photos, contacts, or calendars; on Android not even the Internet.

## Data sharing

Time Tracker does not share user data with the developer or with third parties, for any purpose: analytics, advertising, profiling, or tracking.

The only exception is when the user explicitly exports, saves, or shares a backup or a report: the file goes only to the destination the user chooses.

## Data storage

The app stores on the device, in its own storage:

- the database (SQLite) with projects and entries
- preferences and the timer state

On iOS, when iCloud sync is on, projects and entries are also kept in the user's CloudKit private database.

## Retention and deletion

- Projects and entries are edited or deleted in the app; importing a backup replaces the existing data.
- Uninstalling the app, or on Android clearing its data in the system settings, removes local data.
- On iOS, data synced to iCloud can be deleted in Settings › [your name] › iCloud › Manage Storage.
- Exported backups and reports stay where the user saved them until they are deleted.

Because the developer receives and stores no data, they cannot access, correct, or delete user data on the user's behalf.

## Children

Time Tracker is not specifically directed at children and does not collect personal data from any user, including children.

## Security

The app relies on the operating system's security mechanisms, which keep each app's data separate; on iOS, synced data is handled by iCloud under Apple's terms.

No method of on-device storage can be guaranteed to be completely secure, especially after the user exports or shares a backup or a report outside the app.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version is always available at this address, the same one listed in App Store Connect and in the Play Console.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
