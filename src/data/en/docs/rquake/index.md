---
title: "Introduction to rQuake"
description: "What rQuake is, where its data comes from, how its screens are organised and what it is not: an early-warning system."
project: "rquake"
order: 1
section: "Getting Started"
---

## What is rQuake?

**rQuake** is an app for **iPhone** and **iPad** (iOS/iPadOS 26 or later) that shows the latest earthquakes in Italy and worldwide, taken from the official catalogues of seismological agencies. It is free, with no ads or in-app purchases, and needs no account. The app is in Italian and English.

## Where the data comes from

| Area | Source |
| :--- | :--- |
| **Italy** | Always **INGV** (the Italian National Institute of Geophysics and Volcanology), `webservices.ingv.it` service, CC BY 4.0 license |
| **Rest of the world** | The source chosen in **Settings › Source for the rest of the world**: **USGS** (U.S. Geological Survey), **EMSC** (European-Mediterranean Seismological Centre) or **GFZ GEOFON** (Potsdam) |

On first launch the world source is EMSC if the region set in iOS is in Europe, the Mediterranean or the Middle East, and USGS otherwise. The region also sets the list's starting values:

- **in Italy** (and San Marino and Vatican City): **Italy** area, all magnitudes, alerts from M 3.5;
- **elsewhere**: **World** area, magnitude M ≥ 4, alerts from M 5.

They are only starting values: they change as soon as you pick something else. The region is read on the device and needs no location permission.

## The screens

The app has four tabs:

1. **Earthquakes**: the latest event at the top, the ongoing sequences and the list day by day. See [List, filters and sources](/en/projects/rquake/docs/list-filters-and-sources).
2. **Map**: epicentres, faults and plates. See [Map, faults and statistics](/en/projects/rquake/docs/map-faults-and-statistics).
3. **Statistics**: figures and charts for the chosen period.
4. **Settings**: filters, places, alerts, appearance, language and data source.

On iPad the tabs become a sidebar, and the list and the event details sit side by side.

## What rQuake is not

rQuake **is not an early-warning system** and is not an official app of any of these agencies. It shows an earthquake only after it has been located and published, usually a few minutes later, and the latest data may be revised by analysts. In an emergency, follow the guidance of your civil protection authorities.

## Privacy in brief

Location is optional and stays on your device; when nearby events have to be found, the source only receives the centre of the search rounded to about 1 km. No accounts, analytics or ads. The details are in the [privacy policy](/en/projects/rquake/privacy/).
