---
title: "Blocklists and encrypted DNS"
description: "Excubia's blocklists: supported formats, suggested lists, daily updates, how to unblock a domain from the log, and blocking apps' encrypted DNS."
project: "excubia"
order: 8
section: "Network"
---

Blocklists stop ads, tracking and malware in every app, without a rule for each one. A domain on a list also blocks its subdomains. Lists apply only to outgoing connections, and your own rules always win over a list.

## Adding a list

On the **Blocklists** page, press **Add list**. The **Add a blocklist** sheet has three options:

- **Suggested lists**:
  - **StevenBlack Unified**: ads and malware, merged from several well-known sources;
  - **HaGeZi Multi Normal**: ads, tracking, metrics and malware, with few false positives;
  - **Peter Lowe's Ad Servers**: a small, conservative list of ad and tracking servers.
- **From an address**: an `http` or `https` address.
- **Import file…**: a file on your Mac.

Hosts files, plain lists of domains and simple AdBlock rules (`||example.com^`) are supported. AdBlock lines with a path or options are skipped, as are comments, local names and IP addresses. A list can hold up to 2,000,000 domains.

## Updates

Lists from an address are downloaded again once a day, while Excubia is running. **Update** does it right away; for a list imported from a file, it reads the file again from its location. Each list has a switch to turn it off without removing it, and shows how many domains it holds and when it was updated.

## Unblocking a domain

If a site stops working, look in **Connections**: a connection blocked by a list has the list's name as its reason and, in the tooltip, the entry that blocked it. Right-click it and **Don't block … in any app** creates a rule that allows that domain, subdomains included, for any process. A more specific block rule for a single app still applies.

## Encrypted DNS

Some apps resolve names with their own encrypted DNS (DNS over HTTPS or over TLS) instead of the system DNS. In that case Excubia may not see the host names they reach, and blocklists work less well. The log marks these connections with **Encrypted DNS**: it recognises them by port 853 or by well-known resolvers on port 443 (Google, Cloudflare, Quad9, OpenDNS, NextDNS, AdGuard, Mullvad and others).

The **Block apps' encrypted DNS** option, in **Settings › Alerts**, blocks them so apps fall back to the system DNS. It's off at first. It doesn't affect macOS and Apple software, and an app with a rule allowing its DNS keeps it.
