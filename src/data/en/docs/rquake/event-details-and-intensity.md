---
title: "Event details and estimated intensity"
description: "What an earthquake's details show in rQuake: event data, estimated intensity on the Mercalli scale, comparison with other sources, nearby events and links."
project: "rquake"
order: 3
section: "User Guides"
---

## Event data

Tapping an earthquake opens its details. At the top are a map of the area, the magnitude class, the place and how long ago it happened. Then a grid with:

- **Date and time** (local) and **UTC time**;
- **Depth**;
- **Magnitude**, with the type used by the agency (for example `ML` or `Mw`);
- **Coordinates**;
- **Distance from you**, if distances are on, otherwise the **Source** that computed the event;
- **Event ID** and **Class**.

At the bottom is the data source, with a note that the latest data may be revised.

## Estimated intensity

The **Estimated intensity** section tells how strongly the earthquake was likely felt at your location (if distances are on) and at your [saved places](/en/projects/rquake/docs/places-and-alerts) within 1000 km. For each point it shows the degree on the **Modified Mercalli scale** in Roman numerals, a word and the distance, with a sentence on the effects for the highest value.

| Degree | Felt | Typical effects |
| :--- | :--- | :--- |
| I | Not felt | Probably nobody felt it |
| II–III | Weak | By a few people at rest, then indoors like a passing truck |
| IV | Light | By many indoors; windows and dishes rattle |
| V | Moderate | By nearly everyone; unstable objects may fall |
| VI | Strong | By everyone, fright; slight damage possible |
| VII | Very strong | Moderate damage to weaker buildings |
| VIII | Severe | Considerable damage to ordinary buildings |
| IX–X | Violent, Extreme | Heavy, widespread damage |

The estimate uses only magnitude, depth and distance, with the Allen, Wald and Worden (2012) equation, the one USGS uses in ShakeMap for a point source. It doesn't know the local ground or the fault's direction, so a real value can differ by about one degree. The same estimate appears in alerts and in Siri's answers.

## Other sources

The **Other sources** section asks the other agencies for the same earthquake: from each one it takes the closest event within 90 seconds and 100 km. INGV is asked only for events in the Italian area. With different stations and methods, magnitude and location may differ slightly; agencies that don't know the event are left out.

## Nearby events

**Other events within 50 km** lists the earthquakes of the loaded period around the open one, with their distance from it.

## Links and sharing

In the top bar:

- **Open INGV event page** (or USGS, EMSC, GEOFON): the event's official page on the agency's site;
- **Open in Maps**: the epicentre in Apple Maps;
- **Share**: the link to the agency's page, with magnitude and place in the message.

INGV's macroseismic questionnaire, **Did you feel it? (HSIT)**, opens from **Settings › About**.
