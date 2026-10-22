---
layout: ../../../../layouts/LegalLayout.astro
title: "rQuake Privacy Policy"
description: "Full privacy policy for the rQuake app: what it sends to the seismological sources, why your location and saved places stay on your device, and what is never collected."
---

Last updated: 20 October 2026

This Privacy Policy describes how **rQuake** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs are used
- No user tracking takes place
- The developer does not collect personal data through the app
- The app downloads earthquake data from the public services of INGV (Italy) and, for the rest of the
  world, USGS, EMSC or GFZ GEOFON, as chosen by the user

## Earthquake data

For Italy, `rQuake` shows the earthquakes published by the Italian National Institute of Geophysics
and Volcanology (INGV) through its public web service `webservices.ingv.it`. To get them, the app
sends INGV the filters chosen by the user (area, minimum magnitude, period, and in the archive the
dates of the search).

For the rest of the world, the user chooses one of these sources in the settings:

- **U.S. Geological Survey (USGS)**, `earthquake.usgs.gov`: usually the app downloads the
  public lists of recent earthquakes and applies the filters on the device, so neither the filters
  nor the location are sent to USGS. The exceptions are archive searches and searches around a point
  ("Near me" or a saved place) with a minimum magnitude below 2.5: for these the app sends the filters
  and the centre of the search, as it does with INGV
- **European-Mediterranean Seismological Centre (EMSC)**, `www.seismicportal.eu`, and **GFZ GEOFON**,
  `geofon.gfz.de`: the app sends the chosen filters, as it does with INGV

Initially the source is EMSC if the device's region, set in iOS, is in Europe or the Mediterranean,
and USGS otherwise; the region also sets the starting area (Italy or World). The region is read on
the device and is not sent to anyone. Widgets have their own choice, in their options.

As with any request on the Internet, the server of the source in use receives the device's IP
address; each agency's processing is governed by its own privacy policy.

The data received is kept in a local cache on the device, so it can be shown immediately the next
time the app opens.

`rQuake` is not an official app of any of these agencies. INGV data is published under the CC BY 4.0
license and USGS data is in the public domain; the source of each event is shown on its page.

## Location

Location access is optional and is only requested if the user turns on "Show distance from me", the
"Near me" area or alerts for nearby earthquakes.

- Location is used on the device to compute the distance from earthquakes and the estimated intensity
  with which an earthquake was likely felt
- With the "Near me" area, with alerts for nearby earthquakes and with the Siri command "Earthquakes
  near me", the coordinates, rounded to about 1 km, are sent as the centre of the search, together
  with the chosen radius: to INGV if the location is in Italy, otherwise to the source chosen for the
  rest of the world (to USGS only in the cases described above)
- The last known location is stored on the device for background alerts and for Siri
- Location is never sent to the developer or to anyone else

Permission can be revoked at any time in the system settings.

## Saved places

The user can save places (for example home or work) with a name, a radius and their own alerts.

- The names and coordinates of places stay on the device; the name is never sent
- When a place is the list's area, has alerts on or is the area of an archive search, its
  coordinates, rounded to about 1 km, are sent as the centre of the search, with the same criteria as
  the location
- The estimated intensity at each place is computed on the device
- To find a new place the app uses Apple Maps search (MapKit): the text typed is sent to Apple, under
  Apple's privacy policy. Alternatively the current location can be used, with no search

## Notifications

Alerts for new earthquakes are local notifications: the app periodically checks INGV or the source
chosen for the rest of the world in the background, for the alert area and for the saved places with
alerts on, when iOS allows it, and creates the notification on the device. There is no developer
server and no notification token is registered. Notifications require the user's
permission, which can be revoked in the system settings.

## Siri and Shortcuts

The "Latest earthquake" and "Earthquakes near me" commands work with Siri, Spotlight and the Shortcuts
app. Voice requests are handled by Apple under its privacy policy; to answer, `rQuake` downloads the
data with the same criteria as the app.

## Fault and plate map

Plate boundaries (PB2002) and active faults (GEM Global Active Faults) are bundled with the app:
showing them on the map needs no connection.

## Widgets

Widgets download data from INGV or the source chosen in their options, with the same criteria as
the app, and do not use location.

## Data stored on the device

- user preferences (area, magnitude, period, radius, alerts, quiet hours)
- saved places (name, coordinates, radius, alerts)
- last known location, if the user granted access
- cache of the latest downloaded earthquakes
- identifiers of the earthquakes already notified in the last two days, so alerts aren't repeated

This data stays on the device and is deleted when the app is uninstalled.

## Data sharing

`rQuake` does not share user data with the developer or with third parties for analytics,
advertising, profiling or tracking. When the user shares an earthquake with the share button, the
link is sent only to the destination the user chooses.

## Children

The app is not specifically directed at children and does not collect personal data from any user.

## Changes

Any changes to this policy will be published on this page, with the date of the update.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
