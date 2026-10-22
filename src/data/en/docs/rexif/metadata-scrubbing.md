---
title: "Clean-Up and Copies Without Personal Data"
description: "Removing GPS location and personal data, and exporting copies to share in rExif."
project: "rexif"
order: 7
section: "Privacy & Security"
---

## Why Clean Up Your Photos

Digital photos contain data that can reveal personal information:
- the precise GPS coordinates of your home, school or places you visit;
- the serial number of your camera and lens, which links different photos to the same gear;
- the name of the photographer or camera owner.

rExif lets you both remove single fields from the original files and export already-cleaned copies to share.

## Removing Fields from Originals

To clean up your files directly:
- **Location**: select the photos and choose **Remove Location** from the context menu (or use the button next to the coordinates in the inspector). Latitude, longitude and altitude are cleared.
- **Author and copyright**: select the items and clear the fields in the inspector or with the Text tab of Bulk Edit.
- **No surprises**: removals show in orange like any other change and take effect only when you press **Save** (`⌘S`).

## Export Copies Without Personal Data

To share photos and videos without touching your originals, use **File** › **Export Copies Without Personal Data…**:

1. select the photos or videos to share;
2. choose **Export Copies Without Personal Data…**;
3. in the window that opens, choose what to keep:
   - **Date and time taken** (on by default);
   - **Author and copyright** (on by default);
   - **Description**;
   - **Camera and Lens**;
4. choose the destination folder.

The copies are created:
- **without GPS location**;
- **without serial numbers, MakerNotes, software and edit history**;
- with only the fields you chose to keep, including unsaved changes;
- **without recompression**: pixels and frames stay identical;
- **leaving your originals intact** on your Mac.

> [!IMPORTANT]
> Everything happens on your Mac, inside the sandbox: no file is uploaded to external servers, unlike online services that ask you to upload your photos.
