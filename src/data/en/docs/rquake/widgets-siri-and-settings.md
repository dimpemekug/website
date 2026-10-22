---
title: "Widgets, Siri and settings"
description: "rQuake's Home Screen and Lock Screen widgets with their options, the Siri and Shortcuts commands, and the appearance, language and About settings."
project: "rquake"
order: 7
section: "Reference"
---

## Widgets

The **Recent earthquakes** widget comes in six sizes:

- Home Screen: **small** (the latest event), **medium** (the latest event with the previous ones beside it) and **large** (the latest events in a list);
- Lock Screen: **circular**, **rectangular** and **inline**.

Touching and holding the widget and choosing to edit it lets you set:

| Option | Choices | Automatic |
| :--- | :--- | :--- |
| **Area** | Automatic, Italy, World | Italy or World based on the region |
| **Minimum magnitude** | Automatic, All, M ≥ 2, M ≥ 3, M ≥ 4 | M ≥ 2 in Italy, M ≥ 4 worldwide |
| **Source for the world** | Automatic, USGS, EMSC, GFZ GEOFON | Based on the region |

Widgets show the last 7 days, refresh about every 15 minutes (iOS decides the exact moment) and don't use your location. Tapping an event opens its details in the app. They follow the system language, not the one chosen in the app.

## Siri and Shortcuts

rQuake adds two commands, available with Siri, in Spotlight and in the Shortcuts app with no setup:

- **Latest earthquake**: "Latest earthquake on rQuake". Siri reads the magnitude, place and how long ago it happened, with the same filters as the list.
- **Earthquakes near me**: "Earthquakes near me on rQuake". Siri says how many earthquakes, of any magnitude, there were in the last 24 hours within the radius set in Settings from your last known location, and which was the strongest.

If the earthquake was likely felt by you or at one of your places, Siri adds the estimated intensity. If rQuake doesn't know your location yet, it asks you to open the app once with location on.

## Appearance and language

In **Settings › Appearance and language**:

- **Theme**: System, Light or Dark;
- **Language**: System, Italiano or English. The change applies at once, without restarting the app.

The app supports VoiceOver and Dynamic Type.

## About

**Settings › About** contains:

- the **Data sources** and their licenses (INGV under CC BY 4.0, USGS in the public domain, EMSC, GFZ GEOFON);
- the sources of **Faults and plates** (GEM Global Active Faults, CC BY-SA; PB2002);
- INGV's **Did you feel it? (HSIT)** questionnaire, to report the effects of an earthquake you felt;
- the **Disclaimer**, the **Privacy** summary and the **Support** contact.
