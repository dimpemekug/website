---
title: "Photos with the wrong date: how to fix the capture date on a Mac"
seoTitle: "Photos with the wrong date: fix the capture date on Mac"
description: WhatsApp photos land on the day you saved them, scans on the day you scanned them, camera shots an hour ahead. Why it happens and how to put the dates back in order, one photo or a thousand at once.
seoDescription: "Why WhatsApp photos, scans and cameras end up with the wrong date, and how to fix the capture date on a Mac and an iPhone, even in bulk."
pubDatetime: 2026-11-18T10:00:00Z
related:
  - togliere-posizione-gps-foto-iphone-mac
  - convertire-heic-jpeg-mac-iphone
  - rinominare-file-in-blocco-mac
relatedProjects:
  - rexif
tags:
  - macos
  - photography
  - productivity
draft: false
---

You open your library and the 2019 holiday photos show up among yesterday's, the scans of the family album all seem to have been taken on the same afternoon, and New Year's Eve dinner apparently started at 11 pm on 30 December. The cause is almost always the same: the file doesn't contain the right capture date, and the app showing it falls back on another one. The fix is to write the correct date in the right place, and to do it in bulk when there are many photos.

<figure>
  <img
    src="https://images.unsplash.com/photo-1528569937393-ee892b976859?w=1200&q=80"
    alt="Hands leafing through an old album of black-and-white photographs of people, horses and vintage cars"
  />
  <figcaption class="text-center">
    Printed photos have a date handwritten on the back; their scans almost always carry the day you digitised them.
  </figcaption>
</figure>

## Which date counts

A photo file can have four different dates, and apps don't always use the same one.

1. **The capture date.** The camera writes it into the EXIF metadata when you take the picture. It's the one Photos, Lightroom and most apps use to sort the library.
2. **The digitisation date.** For a scan, it's the day the image became a file.
3. **The file creation date.** The operating system records it when the file appears on disk, and it often changes when you copy or download it.
4. **The modification date.** The last time the file was touched.

When the capture date is missing, apps fall back on the others: that's why an old photo can end up among today's.

## Why dates go wrong

1. **Photos received in a chat.** WhatsApp recompresses a regular photo, and the metadata is usually lost. The file name, however, keeps the date it was sent, in the form `IMG-20230514-WA0001`.
2. **Scans.** The scanner writes the scan date, not the date the original photo was taken, which often nobody knows exactly.
3. **The camera clock.** A camera doesn't switch to daylight saving time or a new time zone by itself: after a trip, or at the end of October, every photo is a few hours ahead or behind.
4. **No time zone.** For years the EXIF standard had no field for the time zone next to the capture date. If the photo has no location, apps guess it, usually using the time zone of the Mac or phone importing it.
5. **Exports and cloud services.** Some services, such as Google Takeout, put the real date in a separate `.json` file next to the photo, and if you import only the image you lose it.

## With the Photos app, on Mac and iPhone

1. **On a Mac.** Select the photos and choose **Image › Adjust Date and Time**. Enter the right date for the first photo: the others shift by the same amount and stay in the same order. In the same window you can change the time zone by choosing a nearby city.
2. **On iPhone and iPad.** Open the photo, swipe up to see its information and tap **Adjust** next to the date.

There's one limit to know about: the correction stays in the Photos library and the original file doesn't change. As long as your photos live in Photos that's fine, but if you export them to archive elsewhere or open them in another app, you may find the old date again.

## Fixing the files, even a thousand at once

When the photos sit in folders rather than in the library, or when there are hundreds of them with different problems, you need an app that writes the date straight into the metadata. [rExif](/en/projects/rexif/), free on the Mac App Store, covers the most common cases:

1. **Wrong camera clock.** If a photo shows a clock or a phone screen, enter the real time of that shot: rExif works out the offset to the second and applies it to every photo from the same camera.
2. **WhatsApp photos and screenshots.** It reads the date from the file name, from `IMG-20230514-WA0001` to `Screenshot 2023-05-14 at 12.34.56`, or from the folder name, such as `2019-07-04 Seaside`.
3. **Google Takeout.** It reads the real date from the `.json` that comes with each photo.
4. **Scans with no date.** Set a starting date and a fixed interval, or let it work out the missing ones from the neighbouring photos in the series.
5. **File dates aligned.** It sets the file's creation and modification dates to the capture date, so the Finder sorts them correctly too.

Every change shows up in a preview, photo by photo, before it's written; JPEG and HEIC files are updated without recompressing the image. All the modes are described in the guide to [date management](/en/projects/rexif/docs/date-management/).

> **Tip:** before a trip, take a picture of your phone's clock with the camera you'll be using. When you get back, that photo will tell you how far off the camera clock was, and you can fix the whole trip in one go.

## What to keep in mind

A correct date is what keeps a photo archive in order over the years: searching by period, automatic memories, the sequence of a trip. Corrections made inside a single app stay there, while those written into the metadata travel with the file to any program or service. If your photos need to outlast the app you use today, it's worth having the right date inside the file.
