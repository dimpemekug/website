---
title: "Entering Readings and Time Bands"
description: "How to record meter readings in DomoMeter: quick reading, notes, meter replacement, F1/F2/F3 time bands and usage split across two months."
project: "domometer"
order: 3
section: "Features"
---

## Recording a reading

Every reading in DomoMeter is the cumulative value you see on the meter.

### How to enter it
1. Tap the **+** button, or open a utility's readings and choose **New reading**.
2. Choose the reading **date**: it defaults to today, but you can enter past readings too.
3. Type the value shown on the meter; the form shows the previous reading for reference.
4. If you like, add a **note** (e.g. "changed supplier", "away for two weeks").
5. Save: the app calculates usage against the previous reading and updates charts and forecasts.

### Quick reading
On the home screen, **touch and hold a utility's row** and choose **New reading**: the form opens already set to that utility. On iPhone you can also **swipe the row to the right**.

### Meter replacement
If you enter a value lower than the previous reading, DomoMeter asks what happened:
- **New meter**: the meter was replaced and starts again from a lower value. The reading becomes the base of the new meter and the drop is not counted as usage. The history shows a "New meter" badge.
- **Save anyway**: records the value as it is.
- **Correct the value**: takes you back to the field to fix a typo.

### Overdue readings
Each utility shows how many days ago you took the last reading. If you have turned on a reminder for a utility (see [Statistics, Costs and Reminders](/en/projects/domometer/docs/statistics-limits-and-reports)) and the reminder day has passed without a reading, the utility flags it with **reading overdue**.

---

## Time bands

In Italy electricity can be priced differently depending on the time of day:
- **F1 (peak hours)**: Monday to Friday, 8:00 to 19:00.
- **F2 (mid-peak hours)**: Monday to Friday 7:00 to 8:00 and 19:00 to 23:00; Saturday 7:00 to 23:00.
- **F3 (off-peak hours)**: Monday to Saturday 23:00 to 7:00; Sundays and public holidays all day.

### Single reading or by band
For each utility you can:
- record a **single reading** (flat-rate tariff);
- turn on **F1/F2/F3 time bands** in the utility editor and record the three values in the same reading. DomoMeter then calculates the usage of each band and the total for the period, and the tariff can have a price per band.

---

## Custom utilities

Besides electricity, gas and water you can create other utilities, up to ten per home, from **Settings › New Utility**. In the editor you choose:
- **name** and **icon**;
- **unit**: kWh, Smc, litres, cubic metres, kilograms or a count. After the first reading the unit can only switch between litres and cubic metres, which measure the same thing;
- **time bands**, **period on Home** (monthly, two-monthly, six-monthly or yearly), **yearly limit** and **tariff**.

Each utility has its own colour, used in icons, bars and charts. Electricity, gas and water can be edited the same way, and **Restore defaults** brings them back to their initial values without touching readings and tariffs.

---

## Usage spanning two months

Readings are almost never taken at midnight on the last day of the month. If, for example, you enter a reading on 20 March and the next one on 10 April:

- 21 days pass between the two readings (11 in March and 10 in April);
- DomoMeter assigns 11/21 of the usage to March and 10/21 to April.

Thanks to this proportional split, monthly totals and daily averages show no odd spikes or empty months and stay comparable with each other.
