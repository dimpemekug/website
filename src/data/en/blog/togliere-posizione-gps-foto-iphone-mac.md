---
title: "How to remove GPS location from photos before you share them"
seoTitle: "Remove GPS location from photos on iPhone and Mac"
description: Every photo taken with a phone can carry the coordinates of the place where it was shot. Where they end up, which apps strip them for you and how to share photos without location from an iPhone or a Mac.
seoDescription: "How to remove the GPS location from photos on iPhone and Mac before sending them, which apps strip it for you and when it stays in the file."
pubDatetime: 2026-11-18T08:00:00Z
related:
  - aprire-rar-protetto-mac
  - local-first-app-offline-sincronizzazione-2026
  - deepfake-verifica-identita-digitale-2026
relatedProjects:
  - rexif
  - resizo
tags:
  - privacy
  - macos
  - mobile
draft: false
---

You send a photo of the cat on the sofa, the kids in the garden or something you're selling, and along with the picture goes a piece of information nobody can see: the coordinates of the spot where you took it, precise enough to point at the building. It doesn't always happen, it depends on how you share and which app you use, and that's exactly the problem: it's hard to know when the location stays in the file. Fortunately removing it is easy, on an iPhone and on a Mac.

<figure>
  <img
    src="https://images.unsplash.com/photo-1665054546585-11413bcdfb52?w=1200&q=80"
    alt="Person seen from behind photographing a city street with yellow taxis on a smartphone"
  />
  <figcaption class="text-center">
    A photo taken with a phone can also hold the coordinates of the place, invisible in the picture itself.
  </figcaption>
</figure>

## What's inside a photo

Besides the pixels, a photo contains EXIF metadata: a set of fields the camera writes when the picture is taken. Some are harmless, others say a lot about you.

1. **GPS location.** Latitude, longitude and often altitude. Paste them into a map and you can see where you've been; a series of photos taken at home shows where you live.
2. **Date and time.** Together with the location they reveal your habits: where you are in the evening, where you spend your holidays.
3. **The device.** Make, model, lens and, on cameras, sometimes the serial number, which links photos posted in different places.
4. **Author and copyright.** The name you set in the camera or in a photo editor.

Videos recorded on a phone can contain the location too. On iPhone and iPad it's recorded by the Camera app when it's allowed to use Location Services.

## When the location travels with the photo

There's no official list of what each service does, and published tests don't always agree. Broadly:

1. **Social networks.** Instagram and Facebook strip the coordinates from the copies they show to others. The original file still reaches their servers, though.
2. **Messaging apps.** WhatsApp recompresses a regular photo, and the metadata is usually lost along the way. Send it as a document and the file arrives untouched, location included.
3. **Email, AirDrop, cloud storage and USB sticks.** The file travels as it is: whoever receives it gets all the metadata.

The only way to be sure is to remove the location before you share, rather than relying on what the app on the other end will do.

## On iPhone and iPad

1. **Remove the location from a single share.** In the Photos app select the photos, tap the share button and then **Options** at the top. Turn off **Location** and tap Done: a note above Options says the location isn't included. It only applies to that share; the photo in your library keeps it.
2. **Check what a photo contains.** Open it in Photos and swipe up: if there's a map with a place, the location is in the file.
3. **Stop recording it.** In Settings › Privacy & Security › Location Services › Camera, choose **Never**: new photos won't have coordinates any more. You lose the map of your memories in Photos, though, so many people prefer to leave it on and remove it when sharing.

The option in the share sheet only works when you start from the Photos or Camera app. If you pick the photo from inside another app, for instance while writing a post, it isn't there.

## On a Mac

1. **Export without location from Photos.** Select the photos, choose **File › Export** and in the export window untick the location information option. The exported copies no longer have coordinates; the originals in the library don't change.
2. **Hide the location in the library.** In Photos, **Image › Location › Hide Location** removes it from the selected photos. You can always revert to the original location from the same menu.
3. **Remove it from a single file with Preview.** Open the photo, choose **Tools › Show Inspector**, then the info tab and the **GPS** tab: at the bottom there's a button to remove the location. Save the file before closing it. If there's no GPS tab, the photo has no coordinates.

Preview and Photos only deal with the location. Date, device model, serial number and author stay in the file.

## Cleaning up many photos at once

When there are lots of photos, or you also want to remove the other personal data, an app that works in bulk is the better choice. [rExif](/en/projects/rexif/), free on the Mac App Store, has an **Export Copies Without Personal Data** feature: it creates copies without GPS, serial numbers or edit history, keeps only the fields you choose (date and author, for example) and doesn't recompress the image. The originals stay untouched; the details are in the guide to [metadata clean-up](/en/projects/rexif/docs/metadata-scrubbing/).

If you also need to shrink the photos or convert them from HEIC to JPEG for a website or an online form, [Resizo](/en/projects/resizo/) removes the metadata, location included, by default. Both work on the Mac without uploading your photos anywhere, unlike the websites that offer to clean them online and need to receive them to do it.

> **Tip:** before listing something for sale or posting a photo of a room, also look at what the picture shows. A house number, a doorbell, the view from the window or a document on the desk give away the place even when the metadata is clean.

## What to keep in mind

The location in your photos is useful as long as it stays yours: you find memories on a map and sort trips by place. The risk starts when the photo leaves your phone, because from then on you no longer decide who reads it. Messaging apps and social networks already strip a lot, but not everything and not always; a few seconds' habit before sharing, like turning the location off or exporting a clean copy, saves you from hoping someone else did it for you.
