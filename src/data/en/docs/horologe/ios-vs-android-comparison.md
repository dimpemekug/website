---
title: "iOS vs Android Comparison"
description: "Architecture, database persistence, design system, and technical distinctions between Horologe for iOS and Horologe for Android."
project: "horologe"
order: 2
section: "Platforms"
---

## Two Native Implementations Compared

Horologe shares the same relational database schema (schema v11), the same relative image storage rules, the identical ZIP backup archive layout, and uniform timing math across **iOS** and **Android**. However, each build utilizes the optimal native paradigms of its platform.

---

## Comparison Matrix

| Feature | Horologe for iOS | Horologe for Android |
| :--- | :--- | :--- |
| **Language & UI** | Swift 6, SwiftUI + `@Observable` | Kotlin 2.4, Jetpack Compose |
| **Design System** | Apple HIG, adaptive layout on iPhone & iPad | Material 3 (Black & Gold `#FFE600` brand palette, Material You) |
| **Database Library** | **GRDB.swift** on SQLite (schema v11) | Native direct SQLite (`WatchDatabase.kt`, schema v11) |
| **Photos & Attachments** | `Documents/watch_images/` with fallback logic | Relative paths in `app_flutter/watch_images/` |
| **Cloud Sync** | Apple CloudKit (multi-record, SHA-256 deduplication) | None (strictly offline-first) |
| **App Lock** | Biometric unlock via Face ID / Touch ID | Biometric unlock via Android BiometricPrompt |
| **PDF Sheet Export** | Native Core Graphics / SwiftUI rendering | Native Android `PdfDocument` with system typography |
| **Service Alarms** | Local notifications via `UserNotifications` | `AlarmManager` with `MY_PACKAGE_REPLACED` boot receiver |
| **Backup Format** | Compressed ZIP (`manifest.json` v3 + photos folder) | Compressed ZIP (`manifest.json` v3 + photos folder) |

---

## Platform-Specific Details

### Horologe for iOS
- **Smart CloudKit Sync**:
  - The `primary-v2` record syncs the lightweight JSON manifest (watches, services, wrist time, accuracy).
  - Images upload independently as `file-<sha256>` records. If an image is already backed up, it is not re-uploaded (*content-addressable storage*).
  - **Anti-Throttling (HTTP 429)**: large collections with hundreds of high-res photos pass through `withServerRetry`, honoring `CKErrorRetryAfterKey` to prevent server rate limits.
- **iPad Experience**: large-screen navigation featuring adaptive sidebar controls (`.sidebarAdaptable`) and multi-column grid views.

### Horologe for Android
- **Brand Palette & Material You**:
  - Signature dark theme with pure blacks and gold/yellow `#FFE600`.
  - Custom Style: dynamic extraction from wallpaper (Android 12+) or 8 harmonized presets calculated via `material-color-utilities`.
- **Zero Internet Permissions**: the Android app requests zero network access: all photos and databases remain completely sandboxed on-device.
- **Alarm Resilience**: service reminders survive app updates via the `MY_PACKAGE_REPLACED` broadcast receiver.

---

## Interchangeable ZIP Backups

The `.zip` archive exported by Horologe contains:
1. `manifest.json`: version 3 JSON database dump.
2. `watch_images/`: high-resolution watch photos named systematically (`watch_1_cover.jpg`, etc.).

**You can export your watch collection from an iPhone and restore it instantly on an Android device, or vice versa, with zero data loss.**
