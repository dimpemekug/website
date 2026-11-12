---
title: "Modes and profiles"
description: "Excubia's four modes (Ask, Allow silently, Block silently, Block everything), timed blocking, and the difference between the Standard and Expert profiles."
project: "excubia"
order: 4
section: "Features"
---

The **mode** decides what happens to connections without a rule; the **profile** decides how often Excubia asks and how many options it shows.

## Modes

| Mode | What it does |
|---|---|
| **Ask** | asks what to do when an app without a rule tries to connect (default) |
| **Allow silently** | allows connections without a rule; block rules still apply |
| **Block silently** | blocks connections without a rule; allow rules still apply |
| **Block everything** | cuts your Mac off the internet: every connection is blocked, rules included |

You choose the mode in the **Overview**, in **Settings › Protection**, from the mode menu in the menu bar panel and with [Shortcuts](/en/projects/excubia/docs/shortcuts-focus-and-widget). In **Block everything** the shield in the menu bar is crossed out.

## Timed blocking

In the menu bar panel, next to **Block everything**, the **Block everything for a while** menu offers 15 minutes, 30 minutes, 1 hour or 2 hours. Until the end time Block everything applies, then the previous mode returns; the filter ends it on time even with the app closed. **End now** stops it early. The widget and Shortcuts can also start timed blocking.

## Profiles

You choose the profile in **Settings › Profile**.

- **Standard** (default): asks only about third-party apps, once per app. macOS, Apple software and Mac App Store apps connect without asking. A rule on an app also covers its helper processes; incoming connections aren't checked.
- **Expert**: alerts per host and per helper process, and five switches in **Settings › Protection**:

| Option | At first |
|---|---|
| **Allow Apple software** | on |
| **Allow signed apps** (signed with Developer ID) | off |
| **Check incoming connections** | off |
| **Allow macOS components** (programs in `/System`, `/usr`, `/bin`, `/sbin`, excluding `/usr/local`) | off |
| **Allow Mac App Store apps** | off |

These allowances apply in Ask mode; in Allow or Block silently the mode decides first. Rules, in any case, always come first: see [Rules](/en/projects/excubia/docs/rules).
