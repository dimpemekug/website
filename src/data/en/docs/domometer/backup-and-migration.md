---
title: "Backup, Restore and Migration"
description: "JSON backup format, restore, iCloud sync, migration from the old Flutter version and moving data between iOS and Android in DomoMeter."
project: "domometer"
order: 5
section: "Data & Sync"
---

## A Shared Backup Format

DomoMeter uses an open JSON backup format (`format: domometer-backup`, `schemaVersion: 1`):

- **Cross-platform**: a backup exported from iOS imports on Android and vice versa. You can move from iPhone to Android (and back) without losing any readings.
- **Base units**: values in the backup are always stored in base units (liters for water, kWh for electricity, Smc for gas). Changing the displayed unit, for example from liters to cubic meters, never alters or rounds the stored data.

---

## Exporting a Backup

1. Open the app's **Settings**.
2. Go to **Backup and import**.
3. Tap **Export backup**: a `.json` file is created with profiles, readings and settings.
4. Save it to your device's files, share it or keep it wherever you like.

---

## Restoring a Backup

1. In **Settings › Backup and import**, tap **Import backup**.
2. Pick a JSON file created by any version of DomoMeter, including the old app.
3. Confirm: **importing completely replaces** your current data, profiles and settings with those in the backup.

From the same section you can also **reset the database**, deleting all local data, or load sample data.

---

## iCloud Sync (iOS)

On iOS you can turn on iCloud sync: the archive is saved to your private CloudKit database and compared across devices, keeping the most recent version. iCloud copies use the same format as backups.

---

## Migrating from the Previous Version

If you had the old Flutter version of DomoMeter installed, the move to the native versions happens on its own at first launch:

- **On iOS**: the app finds the old `domometer.db` store and imports it into the new JSON document in *Application Support*.
- **On Android**: `LegacySembastMigrator` reads the old `filesDir/domometer.db` store, copies every record into the Room database keeping the same keys, and renames the old file to `domometer.db.flutter-migrated` without deleting it. A message confirms the migration when it's done.

No data is deleted or lost.
