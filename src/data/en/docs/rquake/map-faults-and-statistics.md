---
title: "Map, faults and statistics"
description: "rQuake's map of epicentres, with clusters, recent events, hybrid style, active faults and plate boundaries, and the Statistics tab with its charts."
project: "rquake"
order: 4
section: "User Guides"
---

## The map

The **Map** tab shows the events of the list, with the same filters. Each epicentre is a circle coloured and sized by magnitude; events from the last hour pulse. Circles too close together on screen merge into a cluster with the number of events: tapping it zooms into the area.

Tapping an event opens its details in a panel, at half or full height, while the map stays usable.

The buttons at the top:

- **Recenter**: goes back to the view of the chosen area (Italy, world, location or place);
- **Map style**: switches between the standard map and the hybrid satellite map;
- **Faults and plates**: shows or hides the tectonic data;
- on the right, MapKit's location button.

At the bottom is the colour legend by magnitude.

## Faults and plates

With **Faults and plates** on, the map draws:

- **plate boundaries** from the PB2002 model (Bird, 2003), with subduction zones dashed;
- **active faults** from the GEM Global Active Faults catalogue, coloured by type: **Normal**, **Reverse**, **Strike-slip**.

Faults appear only when zoomed in: while the map is too wide, the legend says **Zoom in for faults**. The data is built into the app, simplified for the map, and needs no connection. It shows where known faults are, not where an earthquake will happen.

## Statistics

The **Statistics** tab sums up the area and period chosen in the list:

- tiles with **Total events**, **Max magnitude**, **Mean magnitude**, **Mean depth**, **Events M ≥ 3** and **Per day (average)**;
- **Events per day**, a bar chart;
- **Magnitude over time**, a point chart;
- **Distribution by magnitude**, the number of events per class;
- **Strongest in this period**, which open with a tap.

If the period has no events, the tab says so and stays empty.
