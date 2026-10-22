---
title: "iOS vs Android Comparison"
description: "Technologies, data storage, sync, appearance and differences between Horologe for iOS and Horologe for Android."
project: "horologe"
order: 2
section: "Platforms"
---

## Two Native Versions

On **iOS** and **Android**, Horologe uses the same SQLite database (schema version 11), the same image folder and the same ZIP backup format. Each version, however, follows its own platform's technologies and conventions.

---

## Comparison Table

| Feature | Horologe for iOS | Horologe for Android |
| :--- | :--- | :--- |
| **Language and UI** | Swift 6, SwiftUI with `@Observable` | Kotlin 2.4, Jetpack Compose |
| **Design** | Apple guidelines, adaptive layout for iPhone and iPad | Material 3: black and `#FFE600` yellow theme, dynamic color or a color of your choice |
| **Minimum requirements** | iOS/iPadOS 17.0 or later | Android 7.0 (API 24) or later |
| **Database** | **GRDB.swift** on SQLite (`Documents/horologe.db`) | Native SQLite (`WatchDatabase.kt`, `app_flutter/horologe.db`) |
| **Photos and attachments** | `Documents/watch_images/` | `app_flutter/watch_images/` |
| **Sync** | iCloud (CloudKit, private database) | None, file backups only |
| **App lock** | Face ID / Touch ID | Fingerprint, face or PIN (BiometricPrompt) |
| **PDF** | Single-watch sheet and collection inventory for insurance | Single-watch sheet |
| **Accuracy measurement** | Guided two-reading assistant or manual entry | Manual entry of the deviation |
| **Service reminders** | Local notifications (`UserNotifications`) | `AlarmManager`, rescheduled after reboots and every update |
| **Backup format** | ZIP with `manifest.json` (version 3) and photos | ZIP with `manifest.json` (version 3) and photos |

---

## Platform Details

### Horologe for iOS
- **iCloud sync**:
  - the `primary-v2` record holds a compact JSON manifest with watches, services, wrist days and measurements;
  - photos and attachments travel as separate `file-<sha256>` records, identified by their content: a file already in iCloud isn't uploaded again, and one already on the device isn't downloaded again;
  - with very large collections CloudKit may throttle requests (HTTP 429): Horologe honors the wait times the server asks for (`CKErrorRetryAfterKey`) and pauses between batches of files, so the first upload gets all the way through.
- **iPad**: adaptive sidebar and a wider grid.
- **Wear diary** with a monthly calendar.

### Horologe for Android
- **Colors**: the default theme is black with `#FFE600` yellow; alternatively, dynamic colors taken from your wallpaper (Android 12+) or one of eight base colors from which Material 3 builds the whole palette.
- **No Internet access**: the app doesn't request network permission; data and photos stay in the app's private storage.
- **Reliable reminders**: after a phone reboot or an app update (`MY_PACKAGE_REPLACED`), a dedicated receiver reschedules every service reminder.
- **Large screens**: layouts for tablets and foldables.

---

## Interchangeable Backups

A Horologe `.zip` archive contains:
1. `manifest.json`: the whole collection in JSON (version 3), with services, wrist days and accuracy measurements;
2. photos and attachments, with predictable names (`watch_1_cover.jpg`, `watch_1_gallery_1.jpg`, `watch_1_att_1.pdf`…).

**You can export your collection from an iPhone and import it on Android, or vice versa, without losing any data, dates, photos or service history.**
