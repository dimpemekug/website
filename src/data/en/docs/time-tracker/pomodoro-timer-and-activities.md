---
title: "Pomodoro Timer and Activity Log"
description: "The focus timer anchored to the system clock, the Live Activity and ongoing notification, logging activities and title suggestions in Time Tracker."
project: "time-tracker"
order: 4
section: "Productivity"
---

## The Focus Timer

Time Tracker's **Pomodoro** panel is a stopwatch for focused work sessions:

- **Activity and project**: choose the activity (activities are chips you can add and remove, e.g. *Focus*, *Code review*, *Study*) and the project the time goes to.
- **Start, pause and stop**: start the stopwatch, pause it when needed and stop it when the session ends.
- **Anchored to the system clock**: elapsed time doesn't depend on an in-memory count but on the saved start time, so it stays correct even if the app is suspended or closed.
- **Saved as an activity**: when you stop the timer, the session is logged as an activity on the chosen project, with the activity name as its title. Sessions shorter than a minute aren't saved.
- **Cycle ring** (iOS): a ring in the project's color fills up toward the end of each 25-minute cycle, and below the time you see the current cycle and how long is left (e.g. *Pomodoro 1 · 06:31 left*). The timer is still a stopwatch: it logs all the elapsed time, and the cycles are only a goal to aim for.
- **Undo** (iOS): after you stop, the panel shows *Saved to* and the project name, with an **Undo** button that deletes the activity that was just saved.

---

## Always Visible

While a session is running:
- **inside the app**, a compact bar above the navigation, on every tab, shows the activity, project and time, with a quick pause; tapping it reopens the panel;
- **on iOS**, a **Live Activity** in the Dynamic Island and on the Lock Screen, and a notification with quick pause and stop actions;
- **on Android**, an **ongoing notification** with *Pause*, *Resume* and *Stop* buttons.

Timer notifications can be turned off in Settings.

---

## Logging an Activity by Hand

For hours logged after the fact, open the activity editor and enter:
- **title**, **project** and **notes**;
- the **date** and the **start and end time**, or turn on **daily total** and type the duration directly.

On iOS a new activity starts on the project of the last activity you logged, if it's still active; otherwise on the first active project.

On Android there's also a **quick add** at the top of the summary, with just title and project.

---

## Resuming and Duplicating an Activity (iOS)

In the **Time Entries** list:
- swiping a row to the right shows **Resume** and **Edit**; a full swipe triggers **Resume**, which starts the timer with the activity's title and project and opens the Pomodoro panel. If a timer is already running, Resume isn't offered;
- touching and holding a row opens a menu with **Edit**, **Resume**, **Duplicate to Today** and **Delete**. *Duplicate to Today* creates a copy with the same time of day and duration on today's date;
- swiping to the left shows **Delete**.

---

## Search and Activity Calendar (iOS)

- **Search**: the *Search entries* field looks for the text in the title, notes and project name. While you search, the app suggests active projects as filters: picking one or more shows only their activities.
- **Activity calendar**: at the top of the list, a year of work in a grid with one square per day, darker when there are more hours. Tapping a day shows the date, the hours and the number of activities; **Show** keeps only that day in the list, and **Show all days** removes the filter.

---

## Title Suggestions

Typing the same titles every day (*Daily standup*, *Code review*, *Documentation*) wastes time. As you type, Time Tracker suggests titles you've already used:
- the ranking weighs how often and how recently you've used each title;
- tapping a suggestion fills in the field instantly.
