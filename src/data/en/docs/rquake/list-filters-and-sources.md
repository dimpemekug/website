---
title: "List, filters and sources"
description: "rQuake's Earthquakes tab: latest event, summary, filters by area, magnitude and period, search, sorting, refreshing and the choice of source for the rest of the world."
project: "rquake"
order: 2
section: "User Guides"
---

## The Earthquakes tab

At the top is the **Latest event**, with magnitude, place, time and depth. Below it, three tiles sum up the period:

- **Events**: how many earthquakes are in the list;
- **Strongest**: the earthquake with the highest magnitude, which opens with a tap;
- **Last 24 hours**: the events of the last day, compared with the 24 hours before ("Same as yesterday", "3 more than yesterday"…).

Next come the **Ongoing sequences** (up to three, see [Seismic sequences and archive](/en/projects/rquake/docs/seismic-sequences-and-archive)) and the list of events grouped by day. The colour of each shock shows its magnitude class:

| Class | Magnitude |
| :--- | :--- |
| Micro | below 2 |
| Minor | 2 to 3 |
| Light | 3 to 4 |
| Moderate | 4 to 5 |
| Strong | 5 to 6 |
| Major | 6 or more |

The full legend is in **Settings › Colour scale**.

## Filters

The filters are menus below the title and are also in **Settings › List and map**. They apply to the list, the map and the statistics.

- **Area**: **Italy**, **World**, **Near me** or one of your [saved places](/en/projects/rquake/docs/places-and-alerts).
- **Minimum magnitude**: All, M ≥ 1, 2, 2.5, 3, 4 or 5.
- **Period**: Last 24 hours, Last 3, 7, 14 or 30 days.
- **Radius**: with **Near me**, 25, 50, 100, 200 or 500 km (100 km by default). A saved place uses its own radius.

The **Italy** area is the rectangle INGV uses for its Italian list (latitude 35°–48° N, longitude 6°–19° E), so it also includes nearby areas such as Slovenia, coastal Croatia and Malta.

With **Near me** the app asks for location permission. If you deny it, the list says so and offers an **Open Settings** button.

## Search and sorting

- The magnifying glass (**Search**) opens the **Search places** field, which filters the list by place name.
- The **Sort** button orders events by **Most recent**, **Magnitude** or **Distance**. Sorting by distance appears only when the app knows your location.
- **Show distance from me**, in Settings, adds the distance from your location to every event.

## Refreshing

While the app is open the list reloads on its own every two minutes; you can also pull down. The exception is USGS over long periods: its public month list is rebuilt every 15 minutes, and rQuake reloads it at the same pace. Below the title you can see when the last update happened.

The latest downloaded data stays in a cache on the device: at launch, even offline, the list appears at once.

## Source for the rest of the world

In **Settings › Source for the rest of the world** you choose the catalogue for everything outside Italy:

| Source | Characteristics |
| :--- | :--- |
| **USGS** | The whole world, very detailed in the United States |
| **EMSC** | Fast, detailed in Europe and the Mediterranean |
| **GFZ GEOFON** | The whole world, mostly medium and strong events |

The choice applies to the **World** area, to **Near me** and to places outside Italy, to alerts and to the archive. For Italy rQuake always uses INGV. Widgets have their own choice, in their options.

With USGS the app usually downloads the ready-made public lists and filters on the device; it uses the service's search only for the archive and for searches around a point below M 2.5. An archive search shows at most 2000 events, the most recent ones.
