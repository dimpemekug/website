---
title: "iOS vs Android Comparison"
description: "In-depth technical and architectural comparison between DomoMeter for iOS and DomoMeter for Android."
project: "domometer"
order: 2
section: "Platforms"
---

## Two Native Implementations Compared

While DomoMeter maintains identical consumption mathematics, precision, and an interchangeable backup structure across both ecosystems, the **iOS** and **Android** editions are implemented using native platform-specific toolkits to ensure optimal integration and performance.

---

## Comparison Matrix

| Feature | DomoMeter for iOS | DomoMeter for Android |
| :--- | :--- | :--- |
| **Language & Framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design System** | Apple Human Interface Guidelines with optional retro monospace theme | Material 3, Material You Dynamic Color (Android 12+) |
| **Minimum OS** | iOS 18.0+ | Android 8.0 (API 26)+ |
| **Persistence Engine** | Structured JSON file in *Application Support* | SQLite relational database with **Room** |
| **Internet Access** | **Optional** (only used for CloudKit sync if activated) | **None** (zero `INTERNET` permission in AndroidManifest) |
| **Cloud Sync** | Apple CloudKit (`DomometerSnapshot` private database) | None (strictly offline-first) |
| **Foldables & Tablets** | iPadOS Split View & Stage Manager adaptation | Dynamic hinge avoidance (`FoldingFeature`) & Navigation Rail |
| **In-App Language** | Isolated custom bundle independent of iOS setting | Native per-app language integration via AppCompat |
| **Backup Format** | JSON `schemaVersion: 1` (`domometer-backup`) | JSON `schemaVersion: 1` (`domometer-backup`) |

---

## Platform-Specific Details

### DomoMeter for iOS
- **iCloud CloudKit Sync**: users can opt into syncing their meter records across iPhone and iPad seamlessly. The payload is stored in a private CloudKit record (`DomometerSnapshot`/`primary`). Push and pull operations resolve automatically via timestamp comparison (*last-write-wins*).
- **Dual Visual Theme**: choose between modern Apple design system aesthetics or a retro industrial monospace look resembling physical meter LCDs.
- **Dark Mode**: comprehensive support for system-wide light and dark mode across all views.

### DomoMeter for Android
- **Strict Network Sandbox**: the Android build does not request the `android.permission.INTERNET` manifest permission. It is technically impossible for the app to send data across the network.
- **Dynamic Material You Palette**: on Android 12+, interface colors are extracted algorithmically from the user's active device wallpaper.
- **Adaptive Layout Engine**:
  - Below **600dp** (portrait phones): clean bottom navigation bar.
  - Above **600dp** (landscape phones & tablets): lateral **Navigation Rail** with two-column card arrangement.
  - Above **840dp**: side-by-side list and detail panels.
  - On **foldable devices**, `FoldingFeature` detects the physical hinge and divides panels cleanly so no text or controls are obscured by the fold.

---

## Universal Backup Portability

Due to the unified backup schema, **a backup file exported from an iPhone can be restored directly on Android, and vice versa**. Readings are always serialized using universal base units (litres, kWh, Smc), ensuring that platform migrations never introduce rounding or truncation errors.
