---
title: "Connection log"
description: "Excubia's log: list and by-app views, the reasons for each decision, rules from the context menu, keeping it for up to 30 days, CSV export and data usage."
project: "excubia"
order: 9
section: "Network"
---

The **Connections** page shows every connection checked by the filter, newest first, with the reason it was allowed or blocked.

## List and by-app views

- **Filter**: **All**, **Allowed**, **Blocked**.
- **List** or **By app**: your last choice is remembered.
- **Search**: by app, host or address.

In the list, each row shows the app, the reason, destination and port with the protocol, the outcome and the time. Incoming connections have an icon. The latest 400 are shown: search to find older ones.

In the **By app** view, each row shows how many destinations the app reached, when it last did, the data received and sent, and how many connections were allowed and blocked. Opening a row shows the destinations.

## Reasons

| Reason | Meaning |
|---|---|
| **Rule** | one of your rules decided |
| **Your choice** | you answered an alert |
| **Apple software**, **macOS**, **App Store**, **Signed app** | software the profile treats as trusted |
| **Silent mode** | Allow or Block silently |
| **Block everything** | Block everything mode |
| **Blocklist** (or the list's name) | the domain is on a list |
| **Encrypted DNS** | an app's encrypted DNS |
| **Learning** | learning mode |
| **No answer** | the alert timed out |
| **App not running** | Excubia was closed and the connection went through without an alert |
| **Excubia** | Excubia's own connections |

## Rules from the log

Right-click a connection: **Always allow …** or **Always block …** for the app, **Allow … to reach …** or **Block … from reaching …** for the app and that destination, **Copy host** and **Show in Finder**. Rules created here are permanent; in the Standard profile they apply to the whole app.

## Keeping the log

At first the log lives in memory only: the filter keeps the latest 1,000 connections and clears them on restart. In **Settings › Alerts**, **Keep connection log** can save it on your Mac for **1 day**, **7 days** or **30 days**; older connections are deleted automatically. Choosing **Until restart** again deletes the saved log. When the log is kept, the **Period** menu shows **Recent**, **Last 24 hours**, **Last 7 days** or **Last 30 days**.

## Exporting and clearing

- **Export…** saves as CSV (`Excubia Connections.csv`) every connection in the period that passes the filter and search, not just the ones shown. Columns: `date, app, path, pid, direction, protocol, host, address, port, action, reason, blocklist_entry, team_id, signing_id`.
- **Clear log** deletes the log, including the saved one, and resets the counters and data usage.

## Data usage

Excubia counts the bytes each app receives and sends over allowed connections, without reading their content; DNS requests aren't counted. The **Overview** shows the apps that use the most, with helper processes added to their app.
