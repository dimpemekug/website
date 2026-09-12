---
layout: ../../../../layouts/LegalLayout.astro
title: "CodeVault Privacy Policy"
description: "Full privacy policy for the CodeVault app: what data is processed, how iCloud sync works, and why the developer receives no data."
---

Last updated: September 12, 2026

This Privacy Policy describes how **CodeVault** handles data.

## Summary

- No account required
- No analytics
- No advertising or tracking SDKs
- No user tracking
- The developer runs no servers and receives no data
- Snippets and notes stay on the user's devices and, when sync is on, in their private iCloud account

## Data handled by the app

CodeVault only handles content the user creates or imports:

- code snippets (title, description, code, language, category, tags)
- notes (title, description, content, format, category, tags)
- items in the trash, kept for 30 days and then permanently deleted
- app preferences: theme, accent color, language, editor settings, biometric lock, iCloud sync

## Data collection

The developer does not collect, receive, sell or share any user data.

## iCloud sync

iCloud sync is on by default and can be turned off in Settings › Backup and Import.

When it is on, snippets and notes are synced across the user's devices through the **CloudKit private database** of their iCloud account, and preferences through iCloud key-value storage. This data is managed by Apple under its own privacy policy and is not accessible to the developer.

If iCloud is unavailable, the app works in local-only mode.

## Biometric lock

The Face ID or Touch ID lock is optional. Authentication is handled entirely by the operating system: CodeVault only receives the result (success or failure) and never has access to biometric data.

## Clipboard

When "Suggest Paste from Clipboard" is on, CodeVault may read the clipboard when a new snippet is created, to offer pasting the copied code. Clipboard content stays on the device. The option can be turned off in the editor settings.

## Export and import

JSON backups and Markdown and PDF exports are created only when the user asks, and saved where the user chooses. Import reads only the file the user selects.

## Third-party services

CodeVault contains no analytics, advertising, crash reporting or tracking SDKs. The only external service used is Apple's iCloud, for the sync described above.

## Deleting data

- Deleted items go to the trash and are permanently removed after 30 days, or immediately with "Empty Trash".
- Deleting the app removes local data.
- Data synced to iCloud can be deleted in Settings › [your name] › iCloud › Manage Storage › CodeVault (iPhone/iPad) or System Settings › [your name] › iCloud (Mac).

## Children

CodeVault does not collect data from any user, including children.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
