---
title: "Text Metadata, IPTC and Copyright"
description: "Author, copyright with placeholders, find and replace, keywords and star ratings in rExif."
project: "rexif"
order: 5
section: "User Guides"
---

## Text and Gear Fields

rExif lets you read and fill in the main descriptive and attribution fields:

- **Camera and lens**: make (`Make`), model (`Model`) and lens (`LensModel`).
- **Description**: `ImageDescription` / `Caption-Abstract`; it can also be imported from Google Takeout JSON files.
- **Author**: `Artist` (EXIF) and `By-line` (IPTC).
- **Copyright**: the copyright notice (`CopyrightNotice`).
- **Place**: city, state or province and country.

Lens and place are written to images and `.xmp` files, not to videos; on MP4 and M4V make and model can't be edited either (see [Formats and XMP Sidecars](/en/projects/rexif/docs/formats-and-sidecars)).

## Templates with Placeholders (`⇧⌘D`)

In the **Bulk Edit** › **Text** window you can fill a field with a template containing placeholders, replaced with each item's own data:

| Placeholder | Value |
| :--- | :--- |
| `{name}` / `{file}` | File name without / with extension |
| `{folder}` | Folder name |
| `{year}`, `{month}`, `{day}` | Year, month (01–12) and day (01–31) taken |
| `{date}` | Date taken (YYYY-MM-DD) |
| `{time}`, `{seconds}` | Time (HH.MM) and seconds (00–59) taken |
| `{camera}` | Make and model |
| `{make}`, `{model}`, `{lens}` | Make, model and lens |
| `{author}` | Author |
| `{city}`, `{country}` | City and country |
| `{n}`, `{nnn}` | Sequential number in table order (1, 2… or 001, 002…) |

**Examples:**
```text
Author:      Jane Smith
Copyright:   © {year} Jane Smith. All rights reserved.
Description: Shot with {camera} in {city} (#{n})
```

With **Only if the field is empty** the template only applies to items that don't have a value yet.

## Find and Replace

In the same tab you can find and replace text in a chosen field (e.g. only Description or only Copyright) across hundreds of photos, case-sensitive or not. Results show in orange before you save.

## Keywords

In the inspector's keyword field:
- type one or more keywords separated by commas and press `Return` to add them;
- click the `x` on a tag to remove it;
- with several photos selected you see every keyword present; those not in every item show a count (e.g. `3/5`). New keywords are added to the existing ones, never replacing them.

Keywords are written to IPTC (`Keywords`) and XMP (`dc:subject`), compatible with Apple Photos, Adobe Lightroom, Bridge and Capture One.

## Star Ratings (`⌘1`–`⌘5`)

To pick your best shots quickly:
- `⌘1` … `⌘5`: from 1 to 5 stars;
- `⌘0`: no rating.

The rating is written to the standard `xmp:Rating` tag, supported in images, MOV videos and `.xmp` files next to RAW files, and read by Lightroom and the main photo apps.
