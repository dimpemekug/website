---
title: "Introduction to Excubia"
description: "What Excubia, the app firewall for your Mac, is: how the network filter works, how the window is laid out and what happens at first launch."
project: "excubia"
order: 1
section: "Getting Started"
---

Excubia is an app firewall for your Mac. For every new connection it sees which app opens it and where it's going, and decides whether to let it through: following your rules or, if the app doesn't have one yet, asking you with an alert. The work is done by a macOS **network filter**, installed as a system extension, which only decides whether to allow or block: it doesn't read the content of connections.

## The parts of the app

- **The filter** decides on every connection, holds the rules and blocklists, and keeps working when you close the window or quit the app.
- **The app** shows alerts, the log and settings. It lives in the menu bar: the Dock icon appears only while the window is open.
- **The widget**, **Shortcuts** and the **Focus filter** let you change mode without opening the window.

## The window

The sidebar has two sections:

- **Firewall**: **Overview** (status, counters, data usage, mode), **Connections** (the log), **Rules** (with the number of rules next to it) and **Blocklists** (with the number of active lists).
- **App**: **Guide**, **Settings** and **About**.

The open page is remembered between launches.

## At first launch

A five-page tour explains what Excubia is, the two permissions macOS asks for, the mode to start with (Ask, recommended, Allow silently or Block silently) and how to answer an alert. The last page installs the filter: see [Installing the filter](/en/projects/excubia/docs/installing-the-filter). You can reopen the tour from **Guide › Show again** or the **Help › Show Welcome Tour** menu.

## What's in this guide

- [Installing the filter](/en/projects/excubia/docs/installing-the-filter): macOS permissions, filter states, uninstalling and quitting the app
- [Answering alerts](/en/projects/excubia/docs/answering-alerts): what an alert shows, scope, duration and timeout
- [Modes and profiles](/en/projects/excubia/docs/modes-and-profiles): Ask, Allow and Block silently, Block everything; Standard and Expert
- [Rules](/en/projects/excubia/docs/rules), [Rule sets](/en/projects/excubia/docs/rule-sets) and [Learning mode](/en/projects/excubia/docs/learning-mode)
- [Blocklists and encrypted DNS](/en/projects/excubia/docs/blocklists-and-encrypted-dns) and [Connection log](/en/projects/excubia/docs/connection-log)
- [Menu bar and Keep Awake](/en/projects/excubia/docs/menu-bar-and-keep-awake) and [Shortcuts, Focus and widget](/en/projects/excubia/docs/shortcuts-focus-and-widget)
- [Settings](/en/projects/excubia/docs/settings) and [Keyboard shortcuts](/en/projects/excubia/docs/keyboard-shortcuts)

## Requirements

A Mac with Apple silicon and macOS 15 Sequoia or later. The app must be in the **Applications** folder: macOS only loads the filter from there. Excubia is free, with no ads or in-app purchases, needs no account and sends no data to the developer: see the [privacy policy](/en/projects/excubia/privacy/). The interface is in English and Italian.
