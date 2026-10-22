---
title: "iOS vs Android Comparison"
description: "Differences between the iOS and Android versions of DomoMeter: technologies, available features, data storage and interface."
project: "domometer"
order: 2
section: "Platforms"
---

## Two Native Versions

DomoMeter uses the same calculation model and the same backup format on both platforms, but each version is built with its system's native tools to follow its guidelines faithfully. The iOS version has a few extra features, listed in the table.

---

## Comparison Table

| Feature | DomoMeter for iOS | DomoMeter for Android |
| :--- | :--- | :--- |
| **Language and framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Apple guidelines, choice of accent color | Material 3, Modern or Retro style, dynamic color (Material You) on Android 12+ |
| **Minimum requirements** | iOS/iPadOS 18.0 or later | Android 8.0 (API 26) or later |
| **Storage** | JSON document in *Application Support* | SQLite database with **Room** |
| **Internet connection** | Only for iCloud, if enabled | **None** (no permissions in the manifest) |
| **Sync** | iCloud (CloudKit, private database) | None, file backups only |
| **Readings, F1/F2/F3 bands, profiles, yearly limits** | Yes | Yes |
| **Notes and meter replacement** | Yes | No |
| **Tariffs and bill estimate** | Yes, with tariff history and budget | No |
| **Reading reminders** | Yes | No |
| **CSV import and export** | Yes | No |
| **Custom utilities and CO₂ estimate** | Yes | No |
| **Large screens** | iPad | Tablets, landscape and foldables |
| **App language** | Chosen in the app, independent of the system | Per-app language (AppCompat) |
| **Backup format** | JSON `domometer-backup`, `schemaVersion: 1` | JSON `domometer-backup`, `schemaVersion: 1` |

Both versions are available in seven languages (Italian, English, Spanish, Portuguese, French, German and Russian) and offer a light, dark or automatic theme.

---

## Platform Details

### DomoMeter for iOS
- **iCloud sync**: you can turn on sync between iPhone and iPad. The whole archive is saved as a single record in your private CloudKit database; on each sync the most recent version wins. A dedicated page shows the account status, the last sync and any errors, and lets you sync right away.
- **Costs and budget**: a tariff for each utility (unit price and monthly standing charge), monthly, bimonthly or six-monthly billing, tariff history and a spending budget.
- **Reminders**: one notification per utility on the day and time you choose, every month, every few months or once a year.
- **Navigation**: bottom bar or menu, six accent colors.
- **Accessibility**: full VoiceOver and Dynamic Type support.

### DomoMeter for Android
- **No network access**: the app declares no permissions at all, not even Internet. Data cannot leave the phone except through the backups you export.
- **Style and colors**: in Settings you choose a Modern or Retro visual style; on Android 12 or later the interface can take its colors from your wallpaper (Material You).
- **Adaptive layout**:
  - below **600 dp** (phones): bottom navigation bar and a single column;
  - from **600 dp** up, or with the phone in landscape: side navigation rail and two columns of cards;
  - from **840 dp** up: list and detail side by side;
  - on **book-style foldables**, the split between the two panes falls on the hinge (`FoldingFeature`), so no content lands on the fold.

---

## Compatible Backups

Thanks to the shared format, **a backup created on iPhone imports unchanged on Android, and vice versa**. The file contains profiles, readings and settings, with values stored in base units (liters for water, kWh for electricity, Smc for gas). Data that exists only on iOS, such as tariffs, is ignored by the Android version.
