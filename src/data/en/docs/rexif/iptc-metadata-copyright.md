---
title: "IPTC Metadata, Author and Copyright"
description: "Configuring author credits, copyright templates with dynamic tokens, keywords, star ratings, and Adobe Lightroom compatibility."
project: "rexif"
order: 5
section: "User Guides"
---

## IPTC Standards and Legal Attribution

The **IPTC (International Press Telecommunications Council)** standard defines universally recognized fields for attributing photographer credits, copyright ownership notices, descriptions, and descriptive keywords inside digital media files.

rExif allows you to configure these attributes on individual captures or apply structured templates across thousands of catalog images in seconds.

## Author and Copyright Properties

In rExif's metadata panel, the following standard fields are available:

- **Author / Photographer**: `By-line` or `Artist` field, mirrored across both EXIF and IPTC structures.
- **Copyright Notice**: Official legal declaration of intellectual property (e.g. `© 2026 John Doe. All rights reserved.`).
- **Rights Usage Terms**: Contractual licensing terms, editorial limitations, or Creative Commons clauses.
- **Caption and Description**: `Caption-Abstract` or `ImageDescription` to provide context for the scene or subject.

### Dynamic Tokens in Copyright Templates

To avoid retyping publication years or photographer names repeatedly, rExif supports **dynamic placeholder tokens** evaluated against each individual picture:

- `{year}`: Capture year derived from the authentic EXIF timestamp (e.g. `2026`).
- `{month}` / `{day}`: Two-digit capture month and day.
- `{camera}`: Camera model name identified in EXIF tags.
- `{city}`: City name derived from reverse geocoding.

**Example copyright template:**
```text
© {year} John Doe Photography. All rights reserved. Location: {city}.
```

## Keywords and Hierarchical Tagging

Keywords facilitate rapid search and classification across cataloging applications.

In rExif:
- Add or remove keywords across multiple selections without overwriting existing tags on individual items.
- Support for hierarchical taxonomy formatting using `Landscape|Mountains|Alps`.
- Synchronized across both legacy IPTC (`IPTC:Keywords`) and modern XMP containers (`dc:subject`), ensuring seamless interoperability with **Apple Photos**, **Adobe Lightroom**, **Capture One**, and **Adobe Bridge**.

## Star Ratings and Color Labels

rExif reads and writes standard asset curation tags:
- **Star Rating (1 - 5)**: Stored in the standardized `xmp:Rating` property.
- **Color Labels**: Red, Yellow, Green, Blue, Purple (`xmp:Label`).

Curation ratings set in rExif appear instantly when opening the folder in Adobe Lightroom or Capture One, streamlining initial culling workflows.

## Batch Find and Replace

If a photographer name, venue, or copyright statement requires bulk correction:

1. Press `⌘ + F` and toggle to **Find and Replace** mode.
2. Enter the target search string and the desired replacement text.
3. Choose the target fields (e.g. Author only, Description only, or all text properties).
4. rExif displays orange preview diffs for all proposed substitutions before writing them to disk.
