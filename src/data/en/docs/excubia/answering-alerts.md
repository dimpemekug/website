---
title: "Answering alerts"
description: "Excubia's alerts: app, destination, port and signature, choosing scope and duration, grouped alerts, the timeout and a changed signature."
project: "excubia"
order: 3
section: "Features"
---

In **Ask** mode, when an app without a rule tries to connect, Excubia holds the connection and shows an alert in front of everything, with a short sound. Alerts come one at a time.

## What it shows

- **The app**, with its icon; for a helper process, also the app it belongs to ("via …").
- **The destination**: "wants to connect to" followed by the host name or, for an incoming connection, "wants to accept a connection from". The **Incoming** tag marks the latter.
- **Destination**: host name and address.
- **Port** (or **Local port** for incoming), with the protocol: TCP, UDP or IP.
- **Signature**: **Apple**, **App Store**, **Signed** with the developer's Team ID, or **Unsigned**.
- **More details** adds the **Process** (path and pid) and the **Identifier**.

## Allowing or blocking

**Block** (<kbd>⌘</kbd> <kbd>B</kbd>) and **Allow** (<kbd>⌘</kbd> <kbd>A</kbd>) create the rule. What it covers depends on the profile:

- **Standard**: your choice applies to the whole app, from now on. **Options…** lets you change it for that alert.
- **Expert**: the menus are always visible and remember your last choice.

| Menu | Values |
|---|---|
| **Apply to** | **This host**, **This host and port**, **Any connection** and, if the same app is waiting on other destinations, **These destinations** |
| **Duration** | **Once**, **Until the app quits**, **For one hour**, **Forever** |

- **Once** creates no rule: it applies to that connection and to the same process's other waiting connections to the same destinations.
- **Until the app quits** creates a rule that disappears when the process ends.
- **These destinations** creates one rule for each waiting destination (up to 50).

## Grouped alerts

If the same app is waiting for an answer on several destinations, the alert shows **+N waiting** and, in the **Also waiting** row, the first few destinations. **Apply to › These destinations** answers for all of them at once.

## If you don't answer

In **Settings › Alerts**, **Close unanswered alerts** can close the alert after 30 seconds, or 1, 2 or 5 minutes (it starts at **Never**). **Then** decides whether the connection is blocked (the default) or allowed. It applies to that connection only, without creating a rule, and the log marks it **No answer**. While time runs, the alert shows a countdown.

## The signature has changed

A rule created from an alert applies only to code signed by the same developer (the same Team ID). If an app has rules created with a different signature, or none, the alert says **This app's signature has changed**: the old rules no longer apply. The app may have been replaced or modified: allow it only if you installed this version yourself.
