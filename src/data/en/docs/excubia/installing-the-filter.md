---
title: "Installing the filter"
description: "How to install Excubia's network filter: the two macOS permissions, the filter states, what happens when you quit the app and how to uninstall the filter."
project: "excubia"
order: 2
section: "Getting Started"
---

Excubia checks connections with a network filter that macOS installs as a system extension. It takes three steps, and two permissions.

## The three steps

1. **Install the network filter**: from the last page of the first-launch tour (**Install filter**) or from the **Overview**.
2. **Allow it in System Settings**: in **General › Login Items & Extensions › Network Extensions**, turn on Excubia. The **Open System Settings** button takes you straight there.
3. **Allow content filtering**: macOS asks whether Excubia may filter network content; choose **Allow**.

For macOS to load the filter, the app must be in the **Applications** folder.

## Filter states

The Overview, Settings and the menu bar panel show the state:

| State | Meaning |
|---|---|
| **Checking…** | Excubia is asking macOS for the state |
| **Not installed** | the filter hasn't been installed yet |
| **Installing…** | installation is in progress |
| **Waiting for approval** | the permission in System Settings is missing |
| **Protection off** | the filter is installed but off: every app connects freely |
| **Protection on** | every connection is checked |
| **Error** | installation or activation didn't succeed |

The **Protection** switch in the Overview and the panel turns the filter on and off. When the app is updated, macOS turns the filter off: if you had it on, Excubia turns it back on by itself.

## Window, quitting and opening at login

- **Closing the window** doesn't quit Excubia, which stays in the menu bar. <kbd>⌘</kbd> <kbd>Q</kbd> also closes only the window.
- **To really quit**, use **Quit** in the menu bar panel. Rules and blocklists stay active in the filter. In Ask mode, though, new connections go through without an alert until you reopen the app, and the log marks them as **App not running**.
- With **Open at login** (Settings › General), Excubia starts at login in the menu bar only. Alerts appear only while the app is running.

## Uninstalling the filter

**Settings › Network filter** has **Reinstall**, **Open System Settings** and **Uninstall…**. After uninstalling, connections are no longer checked, but your rules stay saved for when you reinstall the filter.
