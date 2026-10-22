---
title: "Batch Renaming and CSV Export"
description: "Renaming files with templates and placeholders, and exporting and re-importing metadata through CSV spreadsheets in rExif."
project: "rexif"
order: 6
section: "User Guides"
---

## Renaming Files with a Template

Photos from cameras and smartphones often have generic, hard-to-read names (e.g. `_DSC8921.JPG` or `IMG_2024.CR3`).

In the **Bulk Edit** window (`⇧⌘D`), the **Rename** tab builds the new name from free text and the same placeholders as the text fields. The most useful ones:

| Placeholder | Description | Example |
| :--- | :--- | :--- |
| `{date}` | Date taken (YYYY-MM-DD) | `2026-10-14` |
| `{year}`, `{month}`, `{day}` | Year, month and day taken | `2026`, `10`, `14` |
| `{time}` | Time taken (HH.MM) | `18.30` |
| `{seconds}` | Seconds of the time taken | `12` |
| `{camera}` | Make and model | `SONY ILCE-7M4` |
| `{name}` | Current file name, without extension | `_DSC8921` |
| `{folder}` | Folder name | `Holidays` |
| `{n}` / `{nnn}` | Sequential number (1, 2… / 001, 002…) | `001` |

### Example
With the template `{date}_{time}_{nnn}`:
- `_DSC8921.JPG` → `2026-10-14_18.30_001.JPG`
- `_DSC8922.JPG` → `2026-10-14_18.30_002.JPG`

The extension stays the file's own. Characters not allowed in file names (`/` and `:`) are replaced with a dash and, if a name is already taken in the same folder, a suffix is added (`-2`, `-3`…). The new name shows in orange in the table; the file is renamed only when you press **Save** (`⌘S`).

## Exporting Metadata as CSV

From **File** › **Export Metadata as CSV…** you save the items' metadata to a **CSV** file with these columns:
- file name and path;
- date taken, date digitized and file creation and modification dates;
- latitude, longitude and altitude;
- make, model, lens, description, author, copyright, city, state and country;
- keywords and rating.

The file opens in **Numbers**, **Excel** or any script.

## Re-importing Changes from CSV

If you'd rather work in a spreadsheet:
1. open the exported CSV in Numbers or Excel;
2. edit descriptions, dates, coordinates or copyright in the cells, leaving the path and file name columns alone;
3. save the document as `.csv` again;
4. in rExif choose **File** › **Import Metadata from CSV…**;
5. rExif matches items by path (or by name, if only one item in the list has that name) and loads the differences as orange changes, to review before saving.
