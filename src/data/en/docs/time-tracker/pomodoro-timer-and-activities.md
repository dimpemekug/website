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

On Android there's also a **quick add** at the top of the summary, with just title and project.

---

## Title Suggestions

Typing the same titles every day (*Daily standup*, *Code review*, *Documentation*) wastes time. As you type, Time Tracker suggests titles you've already used:
- the ranking weighs how often and how recently you've used each title;
- tapping a suggestion fills in the field instantly.
