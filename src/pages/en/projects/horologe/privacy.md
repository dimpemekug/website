---
layout: ../../../../layouts/LegalLayout.astro
title: "Horologe Privacy Policy"
description: "Full privacy policy for the Horologe app: what data is processed, where it stays, and how optional iCloud sync on iOS and Android backup work."
---

Last updated: October 13, 2026

This Privacy Policy describes how **Horologe** handles data, on iOS and on Android.

## Summary

- No account is required
- No analytics tools are used
- No advertising or tracking SDKs are used
- No user tracking takes place
- The developer runs no servers and receives no data
- The collection stays on the device; on iOS also in the user's private iCloud account, only if they turn on sync; on Android also in the user's Android backup, if turned on
- On Android the app does not connect to the Internet

## Data the app handles

Horologe only handles the content the user enters:

- watch details: brand, model, reference, serial number, year, movement, caliber, diameter, case material, box and papers, custom fields, notes, status (in the collection, wishlist, or sold), purchase price and date, sale price and date
- service history (date, type of service, cost, notes) and the interval between services
- the wear log (the days a watch was worn) and the accuracy log (measured deviation in seconds per day)
- watch photos and attachments chosen by the user (PDFs; on iOS also images)
- app preferences: theme, style and visual effects, language, service reminders, app lock, iCloud sync (on iOS), onboarding state

## Data collection

The developer does not collect, receive, transmit, sell, or share user data. The app does not communicate with servers belonging to the developer or to third parties; on Android it does not even have permission to access the Internet.

## iCloud sync (iOS only)

iCloud sync stays off until the user turns it on in the app's settings.

When it is on, the collection (details, photos, and attachments) is synced across the user's devices through the **CloudKit private database** of their iCloud account. This data is managed by Apple under its own privacy policy and is not accessible to the developer.

## Android backup (Android only)

Android may include the app's data in the device backup the user has turned on (for example Google backup) and restore it on a new device. The backup is handled by Android and the service the user chose, under their terms, and is not accessible to the developer. It can be turned off in the system settings.

## Photos and attachments

- **iOS**: the camera is used only when the user chooses to take a photo of a watch. The Photos library is opened only to choose images for a watch: the app receives only the selected images.
- **Android**: photos are chosen with the Android photo picker: the app receives only the selected images, not access to the gallery.

Photos and attachments are copied into the app's storage on the device.

## App lock

The app lock is optional: Face ID, Touch ID, or device passcode on iOS; fingerprint, face, or device PIN on Android. Authentication is handled entirely by the operating system: Horologe only receives the result (success or failure) and never has access to biometric data.

## Notifications

If the user turns on service reminders, Horologe schedules local notifications on the device (on Android it reschedules them after a restart). The operating system asks for permission to send notifications, which can be revoked in the system settings. No push notification service is used.

## Export and import

Backups (ZIP) and watch PDF sheets are created only when the user asks, and saved or shared to the destination the user chooses. Import reads only the file the user selects and replaces the collection: on Android it asks for confirmation first; on iOS the app keeps a safety copy of the previous collection on the device, so the operation can be undone.

## Device permissions

Horologe may ask for:

- permission to send notifications, for service reminders
- use of biometrics or the device passcode, for the optional lock
- on iOS, access to the camera and the Photos library, for watch photos

On Android it also uses the device boot permission, only to reschedule reminders.

The app does not use the user's location for any feature and does not access contacts, calendars, or the microphone; on Android not even the Internet or the camera.

## Data sharing

Horologe does not share user data with the developer or with third parties, for any purpose: analytics, advertising, profiling, or tracking.

The only exception is when the user explicitly exports, saves, or shares a backup or a PDF: the file goes only to the destination the user chooses.

## Data storage

The app stores on the device, in its own storage:

- the database (SQLite) with watches, services, wear log, and accuracy log
- photos and attachments
- preferences
- on iOS, the safety copy made before the last import

On iOS, when iCloud sync is on, the collection is also kept in the user's CloudKit private database.

## Retention and deletion

- Watches, services, photos, and attachments are edited or deleted in the app.
- Importing a backup replaces the collection's data; on iOS the safety copy makes it possible to go back.
- Uninstalling the app, or on Android clearing its data in the system settings, removes local data.
- On iOS, data synced to iCloud can be deleted in Settings › [your name] › iCloud › Manage Storage.
- Exported backups and PDFs stay where the user saved them until they are deleted.

Because the developer receives and stores no data, they cannot access, correct, or delete user data on the user's behalf.

## Children

Horologe is not specifically directed at children and does not collect personal data from any user, including children.

## Security

The app relies on the operating system's security mechanisms, which keep each app's data separate. The optional lock protects access to the app; on iOS, synced data is handled by iCloud under Apple's terms.

No method of on-device storage can be guaranteed to be completely secure, especially after the user exports or shares a backup or a PDF outside the app.

## Changes to this policy

This Privacy Policy may be updated in future versions of the app. The latest version is always available at this address, the same one listed in App Store Connect and in the Play Console.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
