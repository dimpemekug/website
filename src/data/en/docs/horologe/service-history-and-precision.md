---
title: "Services, Wrist Time and Accuracy"
description: "Service history and reminders, Worn today and the Wear diary, the two-reading accuracy measuring assistant and its chart in Horologe."
project: "horologe"
order: 4
section: "Features"
---

## Service history

Every watch has its own service history, on the watch page:

- **Service details**: date, type (e.g. full service, battery replacement, regulation, water resistance test), cost with currency and notes. A new service starts from the watch's currency.
- **Next service**: the recommended date, worked out from the last service, or else the purchase date, or else the day you added the watch.
- **Deleting** a service asks for confirmation.

### Reminders
Turn on **Service reminders** in Settings and set the interval (1 to 10 years) in the watch's record. Horologe schedules a local notification at 10:00 on the recommended day, or the next day if that date has passed. Sold and wishlist watches get no reminders.

The notification is in the app's language (on iOS from the update after 1.3.0; before that it was always in Italian). On Android reminders are rescheduled after the phone restarts or the app is updated.

---

## Days on the wrist

- **Worn today**: from the watch page, or with a long press on its card in the Collection, mark that you're wearing it today. Tapping again removes the mark.
- The watch's **Calendar**: the days you wore it, which you can also fix after the fact.
- **Wear diary**: a month-by-month calendar with the watches worn on each day. Open it from Statistics.
- **Recently worn**: at the top of the Collection, up to ten watches with the day you wore them.

In Statistics you'll also find a map of your days on the wrist over recent weeks, the ranking of the most worn and the **cost per wear** (purchase price divided by the number of times you wore it).

---

## Measuring accuracy

Horologe measures your watch's rate deviation without a timegrapher, on iOS and Android. On the watch page, tap **Measure with the assistant**.

### Measuring assistant
1. **First reading**: tap **Now** at the exact instant the seconds hand crosses 12, then confirm the hour and minute the watch shows.
2. **Wear the watch as usual**, winding it if needed, without setting it. You can close the app: the first reading stays saved on the device.
3. **Second reading**, at least 24 hours later: open the assistant again and repeat the same gesture. The longer you wait, the more precise the result; the assistant accepts as little as an hour but recommends a day.
4. **Result**: how many seconds a day the watch gains (+) or loses (−), compared with the COSC chronometer tolerance (−4/+6 s/d), and saved with the measurements.

The reference time is the phone's, synced with official time: a tap a few tenths of a second late matters little if at least a day passes between the two readings.

### Manual entry
If you measured the deviation another way, add the date and the value in seconds per day by hand.

### Chart and alerts
- **iOS**: a chart over time with a green area for the COSC tolerance (−4/+6 s/d).
- **Android**: a chart of the last 12 measurements, with the **last** measurement and the **average**.

On both, Horologe warns you when accuracy is getting worse. Deleting a measurement asks for confirmation.
