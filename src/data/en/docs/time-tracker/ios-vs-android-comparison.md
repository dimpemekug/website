---
title: "iOS vs Android Comparison"
description: "Differences between Time Tracker for iOS and for Android: the timer outside the app, project colors, storage, sync and interface."
project: "time-tracker"
order: 2
section: "Platforms"
---

## Two Native Versions

Both versions of Time Tracker have the same features, the same hours, rate and VAT calculations and the same backup format. Each, however, closely follows its own platform's conventions.

---

## Comparison Table

| Feature | Time Tracker for iOS | Time Tracker for Android |
| :--- | :--- | :--- |
| **Language and UI** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Apple guidelines, choice of accent color | Material 3, dynamic color (Material You) or six accents |
| **Minimum requirements** | iOS/iPadOS 18.0 or later | Android 7.0 (API 24) or later |
| **Timer outside the app** | **Live Activity** in the Dynamic Island and on the Lock Screen | **Ongoing notification** with Pause, Resume and Stop |
| **Project color** | Picked from a grid of system colors | Worked out automatically from the name |
| **Editors** | Modal sheets | **No modals**: full pages or side-by-side panes |
| **Database** | SQLite (`Documents/time_tracker.db`, schema v9) | SQLite (`app_flutter/time_tracker.db`, schema v18) |
| **Sync** | iCloud (CloudKit, private database) | None, file backups only |
| **Large screens** | Collapsible sidebar on iPad (`.sidebarAdaptable`) | Navigation rail and side-by-side panes |
| **Backup format** | Shared JSON | Shared JSON |

---

## Platform Details

### Time Tracker for iOS
- **Live Activity and Dynamic Island**: when you start the timer, the `TimeTrackerWidgets` extension shows the activity, project and elapsed time in the Dynamic Island and on the Lock Screen. The time ticks on its own and the app only updates the Live Activity when something changes (pause, resume, activity or project), without draining the battery.
- **iCloud sync**: projects and activities sync between iPhone and iPad through your private CloudKit database. A page in Settings shows the sync status and the last error.
- **iPad**: a sidebar that can collapse into a floating bar at the top; dashboard cards spread across several columns.

### Time Tracker for Android
- **Ongoing notification**: while the timer runs, a system notification shows the session with *Pause*, *Resume* and *Stop* buttons, without opening the app.
- **Color from the project name**: there's no palette to choose from; the color is worked out from the name (see [Projects and Colors](/en/projects/time-tracker/docs/projects-and-automatic-colors)).
- **Material 3**: with the "System" accent on Android 12+, colors come from your wallpaper; otherwise there are six accents, with palettes built in the CIELAB color space and contrast above 6:1, beyond the 4.5:1 WCAG AA requires.
- **No modals**: the activity and project editors are full pages (or panes next to the list on wide screens); date and time are picked inside the row, and deletions are undone from a snackbar instead of asking for confirmation.
- **Quick add** at the top of the summary: title, project, done.
- **Notifications only**: the only permission requested is notifications; the app doesn't access the Internet.

---

## Compatible Backups

The JSON file created by **Export backup** in Settings uses the same fields and types on iOS and Android (and in the old Flutter version). You can export your data from an iPhone and import it on Android, and vice versa, keeping hours, rates and project colors intact.
