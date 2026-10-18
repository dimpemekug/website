---
title: "Date Management and Repair"
description: "Repairing EXIF timestamps, batch timezone shifts, filename date extraction, and Google Takeout JSON synchronization."
project: "rexif"
order: 3
section: "User Guides"
---

## Addressing Timestamp Discrepancies

Incorrect metadata timestamps are among the most persistent issues in photo library curation:
- Digital cameras with internal clocks left unadjusted for daylight saving time or travel across timezones.
- Media shared through messaging platforms (WhatsApp, Telegram) where original EXIF dates were stripped and replaced with the download timestamp.
- Cloud exports from **Google Takeout**, where true capture dates are stored in separate accompanying `.json` files rather than embedded in the media files.

rExif provides an exhaustive set of tools to resolve each of these challenges.

## Batch Time Shifts

When a camera clock was off by a known delta across hundreds of photos:

1. Select the relevant images in the main table.
2. Navigate to **Edit Date** > **Shift Interval**.
3. Specify the time offset in days, hours, minutes, or seconds (e.g. `+ 02:00:00` or `- 01:00:00`).
4. All relative timestamps update instantly in orange preview, preserving the exact interval between consecutive shutter releases.

### Reference Photo Alignment

If you do not recall the exact clock discrepancy but have one reference picture (such as an iPhone capture or a photo of a clock tower) with an authoritative timestamp:

1. Select the reference photo and set its date to the correct value.
2. Choose **Align Other Photos to This Reference**.
3. rExif computes the proportional delta and shifts all selected images accordingly.

## Extracting Dates from Filenames

Many camera systems and smartphones generate filenames encoding the precise capture timestamp, such as:
- `IMG_20230514_153022.jpg`
- `WhatsApp Image 2024-08-12 at 18.45.10.jpeg`
- `Screenshot 2026-03-01 at 09.15.00.png`
- `PXL_20251104_120145890.jpg`

With the **Derive Date from Filename** feature:
1. Select items lacking original EXIF tags.
2. rExif parses the date and time patterns embedded in the filename or parent folder structure.
3. In a single click, extracted values are written to `DateTimeOriginal`, `CreateDate`, and `ModifyDate`.

## Google Takeout JSON Integration

When downloading full backups from Google Photos via Google Takeout, images and videos are typically paired with metadata sidecar files ending in `.json` (e.g. `photo.jpg.json`).

> [!TIP]
> Drag the entire Google Takeout folder directly into rExif: the app pairs each `.json` file with its matching photo or video, extracts the authentic `photoTakenTime` and original GPS coordinates, and writes them straight into the media file's metadata blocks.

## Aligning Filesystem Timestamps

Operating systems such as macOS and Windows display the filesystem "Date Created" attribute in Finder/Explorer, which often differs from the true EXIF capture date (for instance after moving files between external drives).

rExif's **Align File Dates to EXIF Date**:
- Reads the authentic EXIF capture date stored in the image header.
- Updates the filesystem timestamps on macOS (`kMDItemContentCreationDate` and `kMDItemFSContentChangeDate`).
- Finder displays the actual moment the photograph was taken as the file creation date.
