---
title: "Entering Readings and Time Bands"
description: "How to record meter readings, handle the F1/F2/F3 electricity bands and how DomoMeter splits usage that spans two months."
project: "domometer"
order: 3
section: "Features"
---

## Recording a Reading

Every reading in DomoMeter is the running total you see on the meter.

### How to Enter It
1. Open the utility (**Electricity**, **Gas** or **Water**) or use the new reading button.
2. Pick the reading **date**: it defaults to today, but you can also enter past readings.
3. Type the value shown on the meter.
4. On iOS you can add a **note** (e.g. "changed supplier", "two weeks away").
5. Save: the app works out the usage since the previous reading and updates the charts.

### Meter Replacement (iOS)
If your meter is replaced and starts again from zero, mark the reading as a **new meter**: DomoMeter won't count the drop as usage.

---

## Electricity Time Bands

In Italy electricity can be priced differently depending on the time of day:
- **F1 (peak hours)**: Monday to Friday, 8:00 to 19:00.
- **F2 (mid-peak hours)**: Monday to Friday 7:00 to 8:00 and 19:00 to 23:00; Saturday 7:00 to 23:00.
- **F3 (off-peak hours)**: Monday to Saturday 23:00 to 7:00; Sundays and public holidays all day.

### Single Reading or Bands
For electricity you can:
- record a **single reading** (flat tariff);
- record the **three F1, F2 and F3 values** in the same reading. DomoMeter then works out the usage for each band and the total for the period.

---

## Usage Spanning Two Months

Readings are almost never taken at midnight on the last day of the month. If, for example, you enter a reading on March 20 and the next one on April 10:

- 21 days pass between the two readings (11 in March and 10 in April);
- DomoMeter assigns 11/21 of the usage to March and 10/21 to April.

Thanks to this proportional split, monthly totals and daily averages show no odd spikes or empty months and stay comparable with each other.
