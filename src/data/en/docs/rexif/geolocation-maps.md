---
title: "Geolocation and Apple Maps"
description: "GPS location from the map, from pasted coordinates, from a GPX track or from the nearest photo in time, and city and country from coordinates in rExif."
project: "rexif"
order: 4
section: "User Guides"
---

## Assigning a Location

rExif uses **Apple Maps** both in the side panel (inspector) and in the **As Map** view (`⌃⌘2`).

You can assign a location in several ways:
- **Drag and drop**: select one or more photos and drop them on the right spot on the map.
- **⌥-click**: click the map while holding `⌥` to assign that point's coordinates.
- **Pasted coordinates**: copy coordinates from Google Maps or Apple Maps (e.g. `45.4642, 9.1900`) and paste them into the location field in the inspector.
- **Search by name**: type the name of a place or an address (`MKLocalSearch`) to center the map and assign the coordinates with a click.

## Bulk Location (`⇧⌘D`)

In the **Bulk Edit** window, the *Location* tab works out each item's location from one of these sources.

### From the Nearest Photo in Time
If on a trip you shot with a camera without GPS alongside a smartphone that records location:
- rExif compares the time of the photos without a location with those that have one;
- each one gets the location of the photo taken at the closest moment.

### From a GPX Track
If you have a `.gpx` track recorded with a sports watch, fitness app or navigator:
1. choose the GPX file in the tab;
2. rExif interpolates between the track points to find the location matching each photo's capture time.

### From Google Takeout JSON
If the location is in the `.json` files exported from Google Photos, rExif reads the coordinates (`geoData`: latitude, longitude, altitude) and writes them into the metadata.

## City and Country from Coordinates

From the **Metadata** › **City and Country from Coordinates** menu:
- rExif uses Apple's reverse geocoding (`CLGeocoder`);
- it fills in **city**, **state or province** and **country** in the IPTC (`City`, `Province-State`, `Country`) and XMP (`photoshop:City`, `photoshop:State`, `photoshop:Country`) fields;
- only the coordinates are sent to Apple's servers, never the images.

## Removing the Location

To delete the location (for example before publishing a photo):
- use the remove button next to the coordinates in the inspector or **Remove Location** in the context menu;
- the coordinates are cleared from every GPS tag and the change shows in orange until you save.
