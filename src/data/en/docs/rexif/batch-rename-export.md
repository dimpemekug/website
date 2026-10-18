---
title: "Batch Renaming and CSV Export"
description: "Pattern-based file renaming with dynamic tokens, metadata export to CSV spreadsheets, and batch re-import."
project: "rexif"
order: 6
section: "User Guides"
---

## Streamlining Media Organization

Default filenames produced by digital cameras (such as `_DSC0421.JPG` or `IMG_9104.CR3`) offer minimal contextual value and complicate long-term archiving across different storage volumes.

rExif includes a rule-based batch renaming engine that leverages metadata tokens, alongside a bidirectional CSV export and import pipeline for tabular spreadsheet workflows.

## Pattern-Based Batch Renaming

Through the **Batch Rename** tool, you can construct naming schemas combining literal characters and dynamic tokens evaluated against each file's metadata:

### Available Dynamic Tokens

| Token | Description | Example Output |
| :--- | :--- | :--- |
| `{date}` | Capture date in compact `YYYYMMDD` format | `20261014` |
| `{date_iso}` | ISO standard capture date `YYYY-MM-DD` | `2026-10-14` |
| `{time}` | Capture time `HHMMSS` | `143015` |
| `{year}` | Four-digit capture year | `2026` |
| `{month}` | Two-digit capture month | `10` |
| `{camera}` | Camera body model string | `Sony_A7IV` |
| `{city}` | Geotagged city name | `Florence` |
| `{original_name}` | Previous filename without extension | `_DSC0421` |
| `{nnn}` | Zero-padded sequential counter | `001`, `002`, `003` |

### Common Renaming Patterns

- **Chronological sequence**: `{date}_{time}_{nnn}` $\rightarrow$ `20261014_143015_001.jpg`
- **Location and date**: `{date_iso}_{city}_{nnn}` $\rightarrow$ `2026-10-14_Florence_001.heic`
- **Camera gear and source**: `{camera}_{date}_{original_name}` $\rightarrow$ `Sony_A7IV_20261014__DSC0421.arw`

> [!NOTE]
> rExif checks for potential naming collisions in the target directory in real time. If a rule would generate conflicting filenames, safety suffixes are automatically suggested before executing changes.

## Metadata Export to CSV

For archival documentation, museum indexing, or client deliverables, export full metadata sets to **CSV (Comma-Separated Values)** spreadsheets:

1. Select the relevant files in the main table.
2. Go to **File** > **Export Metadata to CSV...**.
3. Choose the columns to include (Dates, GPS coordinates, Camera make, Lens, Shutter speed, Aperture, Copyright, Keywords).
4. The generated CSV can be inspected and curated in **Apple Numbers**, **Microsoft Excel**, or imported into SQL databases.

## Re-Importing Changes from CSV

The CSV re-import capability unlocks powerful automated curation pipelines:

1. Edit titles, descriptions, dates, or copyright credits within a spreadsheet application utilizing custom formulas or scripts.
2. Export the spreadsheet as a CSV while retaining the original file path/name identifier column.
3. In rExif, select **File** > **Import Changes from CSV...**.
4. The app matches spreadsheet rows against open files and stages every change in orange preview for verification prior to writing.
