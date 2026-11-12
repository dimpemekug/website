---
title: "Learning mode"
description: "Excubia's learning mode: for a few days apps without a rule connect without alerts, then a review creates one rule for each app."
project: "excubia"
order: 7
section: "Rules"
---

The first days with a firewall bring a lot of alerts. Learning mode holds them back: for a while, apps without a rule connect without asking, Excubia remembers them, and at the end you decide for all of them in one go.

## Starting it

In the **Overview**, in the **Learning mode** box, choose the duration and press **Start**:

- **1 day**
- **3 days** (default)
- **7 days**
- **Until I stop it**

Learning works only in **Ask** mode: in other modes the box says so and collects no apps. While it runs, the box and the menu bar panel show how long it lasts and how many apps it has seen. Your existing rules still apply.

## Reviewing

At the end, **Learning finished** appears, with **Review…** and **Discard**; you can also stop it early with **Stop and review…**. In the review, for each app choose **Allow**, **Skip** or **Block**. It starts at Allow, or at Skip for apps that already have rules (tag **Has rules**). **Allow all** and **Skip all** change every row; **Create N rules** confirms.

Each app gets a rule to any destination, one per direction seen. In the log, connections let through during learning have the reason **Learning**.
