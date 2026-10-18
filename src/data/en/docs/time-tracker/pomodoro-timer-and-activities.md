---
title: "Pomodoro Timer and Activity Logs"
description: "Pomodoro focus technique, system-clock timing, intelligent activity suggestion chips, and logging in Time Tracker."
project: "time-tracker"
order: 4
section: "Productivity"
---

## Integrated Pomodoro Timer

The Pomodoro technique organizes work into dedicated focus sprints separated by intentional rest intervals:

- **Custom Durations**: work sprints (default 25 minutes), short breaks (5 minutes), and long breaks (15 minutes).
- **System-Clock Anchored**: rather than relying on unreliable software interval loops that drift when an OS throttles background apps, Time Tracker calculates elapsed time from an explicit target system timestamp.
- **Immediate Project Binding**: each sprint is attached to a specific project and task label.

---

## Live Activities and Foreground Notifications

During an active focus sprint:
- **iOS**: rendered via **Live Activities** and **Dynamic Island** with progress indicators and countdown timers.
- **Android**: handled by a dedicated **Foreground Service** with ongoing notification buttons (*Pause*, *Resume*, *Stop*).
- **Completion Alert**: a notification buzzes and chimes when time expires, prompting you to log hours and start your break.

---

## Fast Logging via Intelligent Suggestion Chips

Typing identical activity labels daily (e.g. *Client Sync*, *PR Review*, *Design System Polish*) wastes time.

Time Tracker provides **smart suggestion chips**:
- Suggestion rankings weigh recent usage recency and historical frequency for the active project.
- Tapping a chip auto-fills the title, allowing you to log completed tasks in under two seconds.
