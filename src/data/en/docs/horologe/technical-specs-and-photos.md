---
title: "Technical Sheet and Photo Gallery"
description: "How to fill in a watch's record in Horologe: fields, currencies, status, custom fields, a photo gallery with zoom and attached documents."
project: "horologe"
order: 3
section: "Features"
---

## Creating a watch record

Add a watch with the **+** button in the Collection. Only **Brand** and **Model** are required; as you type the brand, Horologe suggests up to eight brands already in your collection, so each one is always spelled the same way.

The fields are the same on iOS and Android, in this order.

### Cover photo
The image that represents the watch in the collection. Pick it from your library or, on iOS, take it with the camera.

### Information
- **Brand** and **Model**: e.g. *Omega Speedmaster Professional*, *Seiko SKX007*.
- **Reference** and **Serial number**: the manufacturer's codes.

### Details
- **Movement**: free text (e.g. automatic, manual wind, quartz).
- **Diameter**: e.g. *39 mm*.
- **Case material**: e.g. steel, titanium, gold, bronze, ceramic.
- **Caliber**: e.g. *3861*, *7S26*.
- **Year** of production and **Purchase date**.

### Price and currency
The purchase price with its currency: €, $, £, CHF, ¥ or **Other…**, to type any currency up to 5 characters (letter codes become uppercase: `hkd` → `HKD`; symbols such as `R$` stay as you type them). Each watch can have a different currency. **Other…** is on Android from 2.2.0 and on iOS from the update after 1.3.0.

### Status
**Owned**, **In repair**, **Sold** or **Wishlist**. A sold watch adds **Sale date** and **Sale price**, from which the statistics work out the gain or loss.

### Service reminder
A switch and the interval between services, from 1 to 10 years (2 by default). See [Services, Wrist Time and Accuracy](/en/projects/horologe/docs/service-history-and-precision).

### Documentation, box and notes
Say whether you have the original papers and box (together they make a *full set* piece) and add free notes.

### More details
A collapsible section with **Gallery**, **Attachments** and **Custom fields**. Anything without its own field (crystal, water resistance, power reserve, lug width, straps…) goes in a custom field, with a name and a value of your choice.

If you close the form with unsaved changes, Horologe asks whether to discard them.

---

## Photos and documents

1. **Gallery**: more photos for dial, bezel, caseback, movement or accessories. Full screen, you swipe through them with an *n/N* counter; zoom up to 5× with two fingers or 2.5× with a double tap (on iOS zoom comes with the update after 1.3.0).
2. **Attachments**: warranties, certificates, invoices and receipts, as PDFs or images, each with a name.

Horologe asks for confirmation before deleting an attachment from the watch page.

### Where files are kept
Photos and attachments are copied into the app's private storage, in the `watch_images` folder. Horologe finds them by name even if the app folder's path changes after a system update.
