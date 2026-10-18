---
title: "Meter Readings and Time Bands"
description: "How to log meter entries, manage F1/F2/F3 electricity time bands, and calculate prorated consumption in DomoMeter."
project: "domometer"
order: 3
section: "Features"
---

## Logging Meter Readings

Every entry recorded in DomoMeter represents the cumulative absolute figure displayed on your physical meter counter.

### Step-by-Step Entry
1. Select the relevant utility tab (**Electricity**, **Gas**, or **Water**).
2. Tap the **Add Reading** (`+`) button.
3. Verify the **timestamp** (defaults to the current date and time).
4. Enter the cumulative numerical counter value.
5. Save: the engine calculates consumption relative to the prior reading and updates charts immediately.

---

## Electricity Time Bands (F1, F2, F3)

In many electricity markets, rates vary depending on peak and off-peak demand windows:
- **F1 (Peak Hours)**: Monday to Friday, 08:00 – 19:00.
- **F2 (Mid-Peak Hours)**: Monday to Friday 07:00 – 08:00 and 19:00 – 23:00; Saturdays 07:00 – 23:00.
- **F3 (Off-Peak Hours)**: Monday to Saturday 23:00 – 07:00; Sundays and holidays all day.

### Flat Rate vs Multi-Band Mode
Inside Electricity utility settings, you can toggle between:
- **Single Flat Reading**: one cumulative kWh counter.
- **Three Separate Bands (F1, F2, F3)**: input individual counters for each band. DomoMeter monitors individual band deltas and aggregates them into a comprehensive total.

---

## Prorated Calculations Across Months

In practice, meter readings are rarely taken precisely at midnight on the last day of each month. For instance, if you log a reading on March 20th and the next on April 10th:

- 21 total days elapsed (11 days in March, 10 days in April).
- DomoMeter allocates 11/21 of the total usage delta to March and 10/21 to April.
- This proportional time-proration avoids synthetic spikes and empty months, delivering realistic and consistent month-over-month comparisons.
