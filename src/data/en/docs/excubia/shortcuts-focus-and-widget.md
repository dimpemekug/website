---
title: "Shortcuts, Focus and widget"
description: "Excubia's actions in Shortcuts and Siri, the Focus filter that changes mode and rule set, the widget, excubia:// links and notifications for blocked connections."
project: "excubia"
order: 11
section: "Mac"
---

You can control Excubia without opening the window: with Shortcuts and Siri, with Focus, and from the widget.

## Shortcuts and Siri

| Action | What it does |
|---|---|
| **Set Excubia Mode** | switches to one of the four modes |
| **Block Everything for a While** | blocks everything for a number of minutes, from 1 to 1440 (30 at first), then the previous mode returns |
| **Activate Rule Set** | activates a set, or none, and turns automatic switching off |
| **Switch Rule Sets Automatically** | returns to automatic rule set switching |
| **Get Excubia Status** | returns the mode and the active rule set |

You can say to Siri, or type in Spotlight, for example "Block everything with Excubia", "Cut off the internet with Excubia", "Change Excubia mode" or "Excubia status". If the filter isn't running, the action returns an error asking you to open Excubia and turn on protection.

## Focus

In **System Settings › Focus**, pick a Focus and add the **Set Excubia Mode and Rule Set** filter: mode and rule set are both optional. While that Focus is on, Excubia uses the mode and rule set you chose; when it ends, the previous ones come back.

## Widget

The **Excubia** widget, small or medium, shows the mode (or **Protection off**), timed blocking, the active rule set or learning, and the number of blocked connections. The medium size adds the four apps that use the most data.

The **Block all for 30 min** button starts timed blocking; during the block it becomes **End block**. The widget reads its data again every 15 minutes.

## excubia:// links

The widget uses these links, which you can use too, for example in a shortcut:

| Link | What it does |
|---|---|
| `excubia://open` | opens the window |
| `excubia://block?minutes=30` | blocks everything for the given minutes (1 to 1440) |
| `excubia://unblock` | ends timed blocking |

No link turns protection off or allows everything.

## Notifications

With **Notify blocked connections** (Settings › Alerts) you get a notification when a rule, a list or the mode blocks an app, at most one a minute per app. You don't get them for blocks you decided yourself by answering an alert.
