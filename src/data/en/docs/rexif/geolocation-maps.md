---
title: "Geolocation and Apple Maps"
description: "Assigning GPS coordinates, tracking with GPX files (Garmin, Strava), place search, and reverse geocoding."
project: "rexif"
order: 4
section: "User Guides"
---

## The Value of Geolocation Metadata

Geolocation metadata stores exact latitude, longitude, and altitude values within standard EXIF GPS tags. This data enables Apple Photos, macOS Finder, and professional photography suites such as Adobe Lightroom to place your captures onto interactive world maps and group them by trips and cities.

Many dedicated DSLRs and mirrorless bodies lack built-in GPS hardware. rExif bridges this gap by enabling rapid geotagging for individual captures or entire multi-day shoots.

## Manual Tagging via Interactive Maps

rExif features an integrated vector map sidebar powered by native **Apple Maps**:

1. Select one or more images from the main table.
2. Pan and zoom on the map to your intended location (Standard, Satellite, and Hybrid view modes supported).
3. Drag the selected photos directly onto the map or right-click the exact point and select **Assign Coordinates Here**.
4. `GPSLatitude`, `GPSLongitude`, and `GPSAltitude` are populated instantly with orange change highlights.

### Address and Landmark Search

If you know the specific monument, landmark, or venue where the pictures were captured:

- Enter the location in the search bar (e.g. *"Colosseum, Rome"* or *"Eiffel Tower, Paris"*).
- Pick the matching result from Apple Maps auto-complete.
- The map centers immediately on the target coordinates, ready to apply to your selection.

## Synchronizing with GPX Tracks (Garmin, Strava, Apple Watch)

If you tracked your movement during a hike, city tour, or sporting event using a fitness watch (Apple Watch, Garmin), bike computer, or tracking app (Strava, Komoot), you possess a `.gpx` track log.

A GPX file contains a continuous sequence of georeferenced coordinates with timestamps.

### Automatic Time-Matching Workflow

1. Load your photos into rExif.
2. Click **Import GPX Track** and select your `.gpx` file from Finder.
3. rExif compares each photo's capture timestamp against the GPS track points.
4. Using linear interpolation, the algorithm computes your exact position at the precise second the shutter opened.
5. In case of clock drift between your camera and the GPS time source, you can specify an offset adjustment directly in the preview window.

## Automatic Reverse Geocoding

In addition to raw numerical coordinates (e.g. `41.8902° N, 12.4922° E`), human-readable location names are essential for text searches and archiving.

When assigning GPS coordinates, rExif can perform optional **Reverse Geocoding**:
- Resolves the **City**, **State/Region**, and **Country** names in real time.
- Fills in standard IPTC location fields:
  - `IPTC:City`
  - `IPTC:Province-State`
  - `IPTC:Country-PrimaryLocationName`
- These tags are immediately searchable in macOS Spotlight and respected across desktop photography suites.
