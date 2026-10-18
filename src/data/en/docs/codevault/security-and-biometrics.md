---
title: "Security, Biometrics, and Trash"
description: "Biometric locking with Face ID and Touch ID, app privacy obscuring, and 30-day soft-delete trash in CodeVault."
project: "codevault"
order: 3
section: "Security"
---

## Biometric Protection (Face ID & Touch ID)

Technical notes and snippets often contain configuration templates, API scripts, or sensitive commands. CodeVault incorporates biometric defense powered by `LocalAuthentication`:

- **iOS & iPadOS**: secure unlock using Face ID or Touch ID upon launch or after a customizable inactivity timeout.
- **macOS**: native support for Touch ID and Apple Watch authentication.
- **Privacy Obscuring**: when switching apps or moving to the background, screen content is immediately obscured in the system App Switcher to prevent unintended exposure.

---

## Soft-Delete Trash and Restoration

Starting in schema V9, CodeVault implements an intelligent soft-delete system:

- **No Accidental Data Loss**: deleting an item marks its `deletedAt` timestamp instead of erasing it immediately from disk.
- **Dedicated Trash View**: inspect, preview, and restore deleted snippets back to their original collection.
- **Automated 30-Day Purge**: items remaining in the trash for longer than 30 days are permanently purged on app launch.
- **Manual Empty**: you can empty the trash at any time to instantly remove deleted items permanently.
