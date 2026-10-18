---
title: "Service History, Wrist Time, and Timing"
description: "Tracking watch maintenance intervals, timing accuracy deviations, and wear frequency in Horologe."
project: "horologe"
order: 4
section: "Features"
---

## Service and Overhaul Logs

Mechanical watches rely on fine synthetic oils, fresh gaskets, and periodic regulation. Horologe equips each piece with a dedicated maintenance ledger:

- **Service Metadata**: service date, procedure type (routine cleaning, full overhaul, battery change, case polish, waterproof pressure test).
- **Service Center & Cost**: authorized boutique or independent watchmaker and total expenditure.
- **Warranty Tracking**: service warranty duration and notes regarding replaced original parts.
- **Interval Alerts**: configure notification reminders (e.g. 5-year cycle) to flag when a piece is due for preventive servicing.

---

## Wrist Time & Collection Rotation

Keep tabs on which watches spend time on your wrist and which remain in the watch box:
- **Instant Logging**: one tap on the watch card or "Worn Today" widget logs a day of wear.
- **Wear Rotation Analytics**: view monthly and annual leaderboards of your most-worn pieces.
- **Cost per Wear**: evaluate purchase price divided by accumulated wear days to assess practical value over time.

---

## Measuring Timing Accuracy

Horologe includes a built-in chronometric deviation tracker that functions without requiring external physical timing machines:

1. **Initial Timestamp**: log the exact time indicated by your watch against an atomic clock NTP baseline.
2. **Follow-up Reading**: after 24 to 48 hours, check and log the displayed time again.
3. **Deviation Calculation**: Horologe calculates the daily rate in **seconds per day** (+3 s/d, -2 s/d, etc.) and highlights compliance with chronometer benchmarks (such as COSC -4/+6 s/d).
