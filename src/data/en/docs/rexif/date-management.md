---
title: "Date Management and Repair"
description: "Shifting by intervals, camera clock correction, dates from file names or Google Takeout and aligning file system dates in rExif."
project: "rexif"
order: 3
section: "User Guides"
---

## The Dates of Each File

rExif handles four dates separately for every file:
1. **Date taken** (`DateTimeOriginal` / `QuickTime:CreateDate`): when the photo was taken or the video recorded.
2. **Date digitized** (`CreateDate`): when the image was turned into a digital file (for example by scanning).
3. **File creation date**: the one recorded by the macOS file system.
4. **File modification date**: the last time the file changed on disk.

> [!NOTE]
> When you save metadata changes, rExif keeps the file's creation and modification dates, unless you changed them explicitly.

## Bulk Date Editing (`⇧⌘D`)

In the **Bulk Edit** window (`⇧⌘D` or the *Metadata* menu), the dates tab offers several modes. Each item gets a value calculated from its own data, with a row-by-row preview.

### 1. Shift by an Interval
Useful when the camera clock was wrong or never switched to daylight saving time. Enter a change in days, hours, minutes and seconds, positive or negative: each item keeps its distance from the others.

### 2. Set the Same Date for All
Assigns the same date and time to every selected item.

### 3. From Per-Item Sources
rExif takes each item's date from the first available source among:
- **another date field** of the same file;
- **the file name**: it recognizes formats such as `IMG_20230514_123456`, `VID_20230514_123456`, `PXL_20230514_123456789` (Google Pixel), `2023-05-14 12.34.56`, `Screenshot 2023-05-14 at 12.34.56`, and WhatsApp's `IMG-20230514-WA0001` (date only);
- **the folder name**: for files inside folders like `2019-07-04 Beach`;
- **the Google Takeout JSON**: if the `.json` exported from Google Photos sits next to the file, the real capture date (`photoTakenTime`) is read.

### 4. Sequence
Gives the first item a start date and increases each following one by a fixed interval (e.g. +5 seconds), in table order.

### 5. Fill from Neighbors
If some photos in a series have no date (for example after scanning or converting), rExif works it out by linear interpolation from the items before and after them in the table.

### 6. Time Zone
To change the time zone you can choose between:
- *keeping the displayed time*: changes the zone without touching the clock digits (e.g. 15:30 UTC+1 → 15:30 UTC+2);
- *keeping the instant*: changes the local time so it matches the same moment in UTC.

With **Only if the field is empty**, the change only affects items that don't have that date yet.

## Align All Dates to Date Taken (`⇧⌘L`)

With `⇧⌘L` or from the *Metadata* menu, rExif reads the date taken and copies it in one pass to the date digitized and the file creation and modification dates.

## Correct Camera Clock

If you have a photo whose exact time you know (for example a shot of a synced clock or a smartphone screen):
1. select the reference photo in the table;
2. choose **Metadata** › **Correct Camera Clock…**;
3. enter the correct time of that shot: rExif works out the offset to the second and applies it to the photos taken with the same camera (or, if you prefer, to all of them).
