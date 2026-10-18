---
title: "Backup, Restore, and Migration"
description: "Universal JSON backup format, cross-platform transfer between iOS and Android, and legacy database migration in DomoMeter."
project: "domometer"
order: 5
section: "Data & Sync"
---

## Universal Backup Format

DomoMeter employs a clean, transparent JSON format (`format: domometer-backup`, `schemaVersion: 1`):

- **Complete Portability**: files exported on iOS import directly into Android without modification, and vice versa.
- **Base Units Canonicalization**: backup files serialize usage using standard base units (litres for water, kWh for power, Smc for gas). Changing the UI unit preference (e.g. from litres to cubic meters) never alters raw database figures.

---

## Creating a Manual Backup

1. Open **Settings** inside DomoMeter.
2. Navigate to **Backup & Restore**.
3. Tap **Export Backup**: the app writes a `.json` archive containing your housing profiles and readings history.
4. Save the file to your device, iCloud, Google Drive, or send it securely.

---

## Restoring a Backup

1. In **Settings › Backup & Restore**, tap **Import Backup**.
2. Select your `.json` file exported from any version of DomoMeter.
3. Confirm the import: all readings are merged and stats recalculate immediately.

---

## Seamless Migration from Legacy Versions

Upgrading from the earlier Flutter edition of DomoMeter happens automatically without manual intervention:

- **iOS**: on first launch, the app detects the historical `domometer.db` file and migrates records to the modern JSON store in *Application Support*.
- **Android**: `LegacySembastMigrator` reads `filesDir/domometer.db`, migrates all records into SQLite Room, and safely archives the legacy file as `domometer.db.flutter-migrated`.
