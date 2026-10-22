---
title: "Saved places and alerts"
description: "How to add places in rQuake, each with its own radius and alerts, and how notifications for new earthquakes work: magnitude, area, quiet hours, summaries and the limits of background checks."
project: "rquake"
order: 6
section: "Features"
---

## Saved places

Places are points to follow besides your location: home, work, family. They are managed in **Settings › Places**.

**Add a place** opens **New place**:

- type a city, address or place in the search field (it uses Apple Maps search) and tap the result;
- or tap **Use current location**: the place is saved with the name "Home", which you can change.

Tapping a place lets you change:

- **Name**;
- **Radius**: 25, 50, 100, 200 or 500 km (100 km by default), shown on a small map;
- **Notifications for this place**, on to begin with, with their **Minimum magnitude** (M ≥ 3 by default);
- **Delete place**. You can also delete by swiping the row to the left.

A place can be:

- the **list's area**, chosen in the Area filter: the events within its radius appear;
- the area of a search in the [archive](/en/projects/rquake/docs/seismic-sequences-and-archive);
- a point for the [estimated intensity](/en/projects/rquake/docs/event-details-and-intensity), in the details of every event within 1000 km and in alerts.

Names and coordinates stay on the device. When a place is the centre of a search, the source only receives its coordinates rounded to about 1 km, never its name.

## Alerts for new earthquakes

In **Settings › Notifications** turn on **Alerts for new earthquakes** and grant permission. Then choose:

- **Minimum magnitude**: from M ≥ 2 to M ≥ 6 (M ≥ 3.5 in Italy, M ≥ 5 elsewhere to begin with);
- **Area**: Italy, World or Near me (with the **"Near me" radius**);
- **Quiet hours**, with a start time (**From**, 23:00 by default) and an end time (**To**, 7:00 by default).

Places with notifications on are added to the chosen area, each with its own minimum magnitude. They work only while alerts for new earthquakes are on.

### What a notification contains

- the title **Earthquake M** with the magnitude, and the place;
- time and depth;
- if the earthquake was likely felt by you or at one of your places, a line such as "23 km from Home: Weak (III)".

If a check finds more than three new events, rQuake sends **a single summary** ("5 new earthquakes") naming the strongest. Tapping a notification opens the event.

During **quiet hours** notifications arrive without sound, except when the earthquake was likely felt at degree IV (light) or more by you or at one of your places.

### Limits

rQuake has no server: it checks for new events in the background when iOS allows it, usually every **15–30 minutes**, and creates the notifications on the device. So an alert may arrive some tens of minutes late. Each check also looks 30 minutes back, for events published late, without repeating those already notified. Turning alerts on doesn't send notifications for earthquakes that already happened.

It is not a warning system: in an emergency, follow the guidance of your civil protection authorities.
