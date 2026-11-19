---
title: "iOS vs Android Comparison"
description: "Differences between the iOS and Android versions of DomoMeter: technologies, features, data storage, permissions and interface."
project: "domometer"
order: 2
section: "Platforms"
---

## Two native versions

DomoMeter uses the same calculation model and the same backup format on both platforms, but each version is built with its system's native tools to follow its guidelines. The features are almost all the same: the differences are in sync, appearance and a few details, listed in the table.

---

## Comparison table

| Feature | DomoMeter for iOS | DomoMeter for Android |
| :--- | :--- | :--- |
| **Language and framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Apple guidelines, choice of accent colour | Material 3, Modern or Retro style, dynamic colours (Material You) on Android 12+ |
| **Minimum requirements** | iOS/iPadOS 18.0 or later | Android 8.0 (API 26) or later |
| **Storage** | JSON document in *Application Support* | SQLite database with **Room** |
| **Internet connection** | Only for iCloud, if turned on | **None** (no Internet permission in the manifest) |
| **Permissions** | Notifications, for reminders only | Notifications, for reminders only |
| **Sync** | iCloud (CloudKit, private database) | None, file backups only |
| **Readings, F1/F2/F3 bands, profiles, yearly limits** | Yes | Yes |
| **Custom utilities, up to 10** | Yes | Yes |
| **Notes and meter replacement** | Yes | Yes |
| **Tariffs with history, bill, budget, currency, CO₂** | Yes | Yes |
| **Reading reminders** | Yes | Yes |
| **Tappable calendar and forecast with yearly comparison** | Yes | Yes |
| **Quick reading from a utility's row** | Touch and hold or, on iPhone, swipe right | Touch and hold |
| **CSV export** | Through the share sheet | To a file you choose |
| **Deleting a utility** | With **Undo** right after | With a confirmation first |
| **Large screens** | iPad | Tablets, landscape and foldables |
| **App language** | Chosen in the app, independent of the system | Chosen in the app, independent of the system |
| **Backup format** | JSON `domometer-backup`, `schemaVersion: 1` | JSON `domometer-backup`, `schemaVersion: 1` |

Both versions are available in seven languages (Italian, English, Spanish, Portuguese, French, German and Russian) and have a light, dark or automatic theme.

---

## Platform details

### DomoMeter for iOS
- **iCloud sync**: you can turn on sync between iPhone and iPad. The whole archive is saved as a single record in your private CloudKit database; on each sync the most recent version wins. A dedicated page shows the account status, the last sync and any errors, and lets you sync right away.
- **Navigation**: bottom bar or menu, six accent colours.
- **Spending chart**: months without a tariff are marked as unpriced instead of showing as zero spending.
- **Accessibility**: VoiceOver and Dynamic Type support.

### DomoMeter for Android
- **No network access**: the app has no Internet permission. Data cannot leave the phone except through backups you export yourself. The only permissions are notifications, asked for only when you turn on a reminder, and the one that puts reminders back on schedule after a restart.
- **Style and colours**: in Settings, choose the Modern or Retro visual style; on Android 12 or later the interface can take its colours from the device wallpaper (Material You).
- **Adaptive layout**:
  - below **600 dp** (phones): bottom navigation bar and a single column;
  - from **600 dp** up, or with the phone in landscape: side bar (*navigation rail*) and two columns of cards;
  - from **840 dp** up: list and detail side by side;
  - on **foldables** opened like a book, the split between the two panes falls on the hinge (`FoldingFeature`), so no content ends up on the fold.

---

## Compatible backups

Thanks to the shared format, **a backup created on iPhone imports unchanged on Android, and vice versa**, with all the data: readings, custom utilities, tariffs, budgets and settings. Values are saved in base units (litres for water, kWh for electricity, Smc for gas). Reminders are not part of the backup on either platform. Details in [Backup, CSV and Migration](/en/projects/domometer/docs/backup-and-migration).
