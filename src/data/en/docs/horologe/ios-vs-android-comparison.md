---
title: "iOS vs Android Comparison"
description: "What Horologe for iOS and for Android share and where they differ: data, sync, camera, appearance, app lock, export and backup."
project: "horologe"
order: 2
section: "Platforms"
---

## Two native versions, the same features

Horologe for **iOS** (1.3.0) and for **Android** (2.2.0) have nearly the same features: watch record, gallery, attachments, services with reminders, accuracy assistant, wear diary, statistics, ten sort orders, insurance PDF, CSV and ZIP backup. They use the same SQLite database (schema version 11), the same image folder and the same backup format, so a collection moves from one system to the other without losing anything.

The differences are few and mostly come from what each system offers.

---

## Comparison table

| Feature | Horologe for iOS | Horologe for Android |
| :--- | :--- | :--- |
| **Devices and requirements** | iPhone and iPad with iOS/iPadOS 17 or later | Phones, tablets and foldables with Android 7.0 (API 24) or later |
| **Language and UI** | Swift 6, SwiftUI | Kotlin, Jetpack Compose (Material 3) |
| **Database** | GRDB on SQLite (`Documents/horologe.db`) | SQLite (`app_flutter/horologe.db`) |
| **Sync** | iCloud (CloudKit, private database), optional | None; data may be included in Android backup, if on |
| **Internet access** | Only through iCloud, if you turn on sync | None: the app has no network permission |
| **Photos** | Photos library or **camera** | Android photo picker |
| **Appearance** | System, Light or Dark theme | **Horologe** style (black and yellow `#FFE600`) or **Custom**: System, Light or Dark theme and an accent color |
| **App lock** | Face ID, Touch ID or device passcode | Device fingerprint, face or PIN |
| **Accuracy chart** | With the green COSC tolerance band (−4/+6 s/d) | The last 12 measurements, with **Last** and **Average** |
| **Service reminders** | Local notifications | `AlarmManager`, rescheduled after a reboot or an update |
| **Export** | Share | Share, or save to a folder you choose |
| **Import** | ZIP backup | ZIP backup and older JSON backups |
| **Backup format** | ZIP with `manifest.json` (version 3) and photos | Same |

---

## Platform details

### iOS only
- **iCloud sync** between iPhone and iPad: see [Backup, Sync and Export](/en/projects/horologe/docs/backup-and-synchronization).
- **Camera** for the cover photo and gallery.
- **iPad**: sidebar, grid view always on, watch page and statistics in two columns.
- On iOS 26, the Liquid Glass look; a zoom transition from the collection to the watch page; Reduce Motion respected.

### Android only
- **Graphic style**: the **Horologe** style is always dark, black with yellow `#FFE600`. With **Custom** you pick the theme and one of eight accent colors (yellow, blue, purple, teal, green, orange, red, pink) or, from Android 12, your wallpaper colors.
- **No Internet access**: data and photos stay in the app's private storage.
- **Save to file**: backups, CSV files and PDFs can be shared or saved to a folder.
- **Tablets and foldables**: side navigation, adaptive grid and a two-column watch page on wide screens.

### Coming to iOS
A few features that started on Android 2.2.0 reach iOS with the update after 1.3.0: currencies typed in with **Other…**, zoom in the full-screen gallery, and the reminder notification in the app's language.

---

## Interchangeable backups

Horologe's `.zip` archive contains `manifest.json` (the whole collection, version 3) and the photos and attachments with predictable names (`watch_1_cover.jpg`, `watch_1_gallery_1.jpg`, `watch_1_att_1.pdf`…).

**You can export the collection from an iPhone and import it on Android, or the other way round, with photos, services, wear days and measurements.**
