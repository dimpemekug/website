---
title: "Rules"
description: "Excubia's rules by app, domain, wildcard, address, CIDR range, local network and port: which rule wins, signatures, temporary rules and export."
project: "excubia"
order: 5
section: "Rules"
---

A rule says whether an app may reach a destination. It comes from an alert, from a connection's menu in the log, or from **New rule** on the **Rules** page.

## The Rules page

Rules are grouped by app, in alphabetical order. At the top you can filter them (**All**, **Allow**, **Block**, **Temporary**) and search by app or host. Each row has the **Enabled** switch, **Edit** and the trash button; the group menu has **Show in Finder** and **Delete these rules**.

## What a rule can say

- **App**: an app (the `.app` bundle also covers the processes inside it), a command-line tool picked with **Choose…**, or **Any process**.
- **Action**: Allow or Block.
- **Direction**: **Outgoing** or **Incoming**.
- **Destination**:
  - **Any host**;
  - a host name or domain, which includes its subdomains (`example.com` also covers `www.example.com`);
  - a name with `*`, which stands for any characters (`*.cdn.example.com`);
  - an IP address or a range in CIDR notation (`10.0.0.0/8`), IPv4 or IPv6;
  - **Local network**: private, link-local and multicast addresses.
- **Port**: 1 to 65535, or any port. For incoming connections it's the local port.
- **Duration**: **Forever** or **For one hour**.
- **Rule set**: **Always** or one of the [rule sets](/en/projects/excubia/docs/rule-sets).

## Which rule wins

If several rules apply to the same connection, the most specific one wins:

1. app + destination + port
2. app + destination
3. app + port
4. app only
5. any process + destination + port
6. any process + destination
7. any process + port
8. any process

On a tie, blocking wins. A domain, a name with `*`, an address range and the local network all count the same: there's no hierarchy between them. Disabled or expired rules, and rules in an inactive set, don't count.

Rules come before everything else except **Block everything**: before blocklists, the mode and software treated as trusted. The full order is on the app's **Guide** page, under "How a connection is decided".

## Developer signature

A rule created from an alert or the log carries the developer's Team ID and applies only to code signed by the same team: if the signature changes, Excubia asks again. A rule created by picking the app with **Choose…** carries no signature and applies to any version.

## Temporary rules

**For one hour** and **Until the app quits** rules remove themselves and show a label with their expiry. Rules until the app quits aren't saved to disk and aren't exported.

## Rule usage

Each row shows how many times the rule has applied and when it last did, or **Not used yet**. If some rules haven't applied in 90 days, a banner says so and lets you review and delete them together.

## Backups, export and import

From the **⋯** menu:

- **Export rules…** saves a JSON file (`Excubia Rules.json`).
- **Import rules…** adds a file's rules to the ones you have, skipping those already there.
- **Restore from backup…**: Excubia saves a copy of your rules and rule sets when they change, at most once an hour, and keeps the latest 20. Restoring replaces the current rules, after saving a copy of them.
- **Delete all rules…**

Export and import are also in **Settings › Data**.
