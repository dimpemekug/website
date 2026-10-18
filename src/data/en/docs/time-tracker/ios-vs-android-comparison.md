---
title: "iOS vs Android Comparison"
description: "Architectural differences, background timer services, Live Activities vs Foreground Services, and design paradigms in Time Tracker."
project: "time-tracker"
order: 2
section: "Platforms"
---

## Two Native Implementations Compared

Time Tracker shares the exact same relational database schema (schema v18), the same financial aggregations, and identical mathematical color derivation algorithms across **iOS** and **Android**. However, each version implements platform-specific system capabilities.

---

## Technical Comparison Matrix

| Capability | Time Tracker for iOS | Time Tracker for Android |
| :--- | :--- | :--- |
| **Language & Framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design Language** | Apple Human Interface Guidelines | Material 3, Material You Dynamic Color |
| **Background Pomodoro Timer** | **Live Activity** & **Dynamic Island** (WidgetKit) | **Foreground Service** with persistent ongoing notification |
| **Quick Action Controls** | Interactive Dynamic Island & Lock Screen controls | Notification action buttons: Pause, Resume, Stop |
| **View Architecture** | Standard modal sheets & tab navigation | **Zero Modals**: full-page flows or side-by-side panels |
| **Storage Engine** | Native SQLite via local documents folder | Native relational SQLite (`time_tracker.db` schema v18) |
| **Cloud Synchronization** | Apple CloudKit (automatic sync across Apple devices) | None (strictly offline-first, no internet permissions) |
| **Tablet Adaptation** | Collapsible sidebar `.sidebarAdaptable` on iPad | Lateral **Navigation Rail** and adaptive dual-column layout |
| **Backup Format** | Unified JSON | Unified JSON |

---

## Platform-Specific Details

### Time Tracker for iOS
- **Live Activity & Dynamic Island**:
  - Launching a Pomodoro session creates a persistent Live Activity hosted by `TimeTrackerWidgets`.
  - Remaining time, project badge, and circular progress rings render live on iPhone Dynamic Island and Lock Screen without taxing the device battery.
- **iCloud CloudKit Sync**: projects, entries, and billing rates sync across iPhone and iPad via the user's private CloudKit database.

### Time Tracker for Android
- **Persistent Foreground Service**:
  - Android ensures uninterrupted background timing using an explicit Foreground Service, preventing background OS memory termination.
  - The persistent notification features instant Pause, Resume, and Stop controls.
- **Material 3 & CIELAB Tonal Palettes**:
  - Zero hardcoded colors: dynamic Material You extraction from wallpaper (Android 12+) or 6 harmonized palettes calculated in polar CIELAB color space with contrast ratios exceeding 6:1 (surpassing WCAG AA guidelines).
- **"No Modals" Philosophy**:
  - Activity and project editors are full-bleed screens or split panels on wide displays, ensuring steady and calm interactions.
- **Strictly Offline**: the Android application contains zero network permissions.

---

## Universal Cross-Platform JSON Backups

Backups generated via **Settings › Backup & Restore** share an identical JSON structure on iOS and Android. You can export records from iPhone and import them immediately into Android, preserving every logged hour, billing rate, and project color.
