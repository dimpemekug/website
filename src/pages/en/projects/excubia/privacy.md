---
layout: ../../../../layouts/LegalLayout.astro
title: "Excubia Privacy Policy"
description: "Full privacy policy for the Excubia app: what connection data the filter handles, why it stays on your Mac and when the app goes online."
---

Last updated: November 7, 2026

This Privacy Policy describes how **Excubia** handles data.

## Summary

- No account is required
- No analytics tools are used
- No advertising SDKs or third-party SDKs are used
- No user tracking takes place
- The developer receives no data: the app does not communicate with any developer server
- Rules, settings, blocklists and the connection log stay on the Mac; unless you choose otherwise, the log is kept in memory only

## What the app does

Excubia is an application firewall for the Mac. It includes a system extension (a macOS
network content filter) that, for every new connection, sees which app opens it and to which
destination, and decides whether to let it through or block it, following the user's rules
or by asking the user with an alert.

## Data processed by the app

To work, Excubia processes on the Mac:

- **connection data**: the app opening the connection (path, name, code identifier and
  signature), the destination address and port, the protocol, the direction, the time and
  the outcome (allowed or blocked);
- **host names**: to show the destination's name rather than just its address, the filter
  reads the DNS responses passing through the Mac, without changing them;
- **rules and settings** created by the user;
- **blocklists** added by the user (lists of domains).

The filter only decides whether to allow or block a connection: **it does not read, store or
transmit the content of any connection** (pages, messages, files or other traffic).

## Where the data stays

- Rules, settings and blocklists are saved in the extension's protected container, on the Mac.
- The connection log is kept in memory only (at most the latest few thousand connections) and
  is cleared when the filter or the app restarts, or with "Clear log".
  If you choose to keep it in Settings (1, 7 or 30 days), it is also saved in a database in
  the extension's protected container, on the Mac: the app, destination, port, outcome and
  time of each connection, never its content. Connections older than the chosen period are
  deleted automatically; "Clear log" or "Until restart" delete the file. You can export it
  yourself as a CSV file; Excubia never sends it anywhere.
  The same goes for the data each app exchanges: Excubia counts bytes only and never reads
  the content of connections.
- App preferences (appearance, language, open page, notifications) are saved in the app's
  local preferences.

The developer does not collect, receive, sell or share any of this data.

## The app's own internet connections

The app connects to the internet only to download the blocklists the user chooses to add,
from addresses entered by the user or from the suggested ones (for example GitHub). Remote
lists are updated once a day. No user data is sent in these requests; as with any internet
request, the server hosting the list receives the Mac's IP address, under its own privacy
practices.

## Notifications

If the user turns them on, the app shows local notifications for blocked connections.
Notifications are generated on the Mac and do not go through any developer server.

## Exporting rules

The user can export rules to a JSON file and import them from a file. Files are written and
read only at the location the user chooses.

## Third-party services

Excubia does not integrate third-party services. The only third parties involved are the
servers hosting the blocklists chosen by the user.

## Children

The app does not collect personal data and is not specifically directed at children.

## Changes to this policy

Any changes will be published on this page, with the date of the update.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
