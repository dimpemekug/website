---
title: "Backup, CSV and Migration"
description: "JSON backups, CSV export and import, iCloud sync, migration from the old Flutter version and moving data between iOS and Android in DomoMeter."
project: "domometer"
order: 5
section: "Data & Sync"
---

## Where to find them

Backups and CSV live in the **Data** section of Settings:
- on iOS, in **Settings › Data › Backup and Import**; the same section also has **Sync**, for iCloud;
- on Android, in **Settings › Data › Export data**.

---

## A shared backup format

DomoMeter uses an open JSON backup format (`format: domometer-backup`, `schemaVersion: 1`):

- **Cross-platform**: a backup exported from iOS imports on Android and vice versa, with all the data: custom utilities, notes, meter replacements, tariffs, budgets, CO₂ factors and currency. You can move from iPhone to Android (and back) without losing anything.
- **Base units**: values in the backup are always saved in base units (litres for water, kWh for electricity, Smc for gas). Changing the displayed unit, for example from litres to cubic metres, neither alters nor rounds the saved data.
- **Not in the backup**: reminders stay on the device and need turning on again after a restore.

---

## Exporting a backup

1. Open the backup page (see above).
2. Tap **Export backup**: a `.json` file is created with profiles, readings and settings. On Android there is also **Share backup**, to send it to another app.
3. Save it to the device's files, share it or keep it wherever you like.

---

## Restoring a backup

1. On the same page, tap **Import backup**.
2. Choose a JSON file created by any version of DomoMeter, including the old app.
3. Confirm: **importing completely replaces** the current data, profiles and settings with those in the backup.

From the same page you can also **reset the database**, deleting all local data, or load sample data.

---

## Exporting and importing CSV

- **Export CSV** creates a spreadsheet file with every reading from every profile, newest first: profile, home, utility, series, date, value in the displayed unit, unit and note. Where the language writes decimals with a comma, columns are separated by semicolons. On iOS the file goes to the share sheet; on Android you save it to a folder you choose.
- **Import CSV** adds readings to a utility from an external file. Choose the utility (and the band, if bands are on), then the file: one row per reading, with date and value separated by a comma or semicolon and, if you like, a third column with a note. Separator, decimals, date format and header row are recognised automatically.

Before importing, a summary shows the **readings ready** and the **rows skipped**, with the reason (unreadable row, a reading already on that day, value lower than the previous one). Nothing is saved until you confirm, and the import adds readings without replacing existing ones.

---

## iCloud sync (iOS)

On iOS you can turn on iCloud sync from **Settings › Data › Sync**: the archive is saved to your private CloudKit database and compared across devices, keeping the most recent version. The page shows the account status and the last sync, and **Sync now** forces one. iCloud copies use the same format as backups.

---

## Migrating from the previous version

If you had the old version of DomoMeter built in Flutter, the move to the native versions happens by itself on first launch:

- **On iOS**: the app finds the old `domometer.db` archive and imports it into the new JSON document in *Application Support*.
- **On Android**: `LegacySembastMigrator` reads the old `filesDir/domometer.db` archive, copies every record into the Room database keeping the same keys, and renames the old file to `domometer.db.flutter-migrated` without deleting it. When it finishes, a message confirms the migration.

No data is deleted or lost.
