---
layout: ../../../../layouts/LegalLayout.astro
title: "OmniPeer Privacy Policy"
description: "Privacy policy for OmniPeer for Mac: no account and no data sent to the developer, what the eD2k, Kad and BitTorrent networks can see, and what stays on your Mac."
---

Last updated: November 11, 2026

This policy describes how **OmniPeer**, an eD2k, Kad, and BitTorrent client for macOS, handles data.

## Summary

- No account required
- No analytics, advertising SDKs, or tracking
- The developer receives no data from the app
- To work, OmniPeer connects to peer-to-peer networks: your IP address is visible to other participants, as with any P2P client

## Data that stays on your Mac

- the app's preferences (download folder, ports, speed limits, enabled networks, theme, language)
- the list of transfers and their progress, and the list of eD2k servers, in `~/Library/Application Support/OmniPeer`
- downloaded files, in the folder you choose (default: Downloads)

Download-complete notifications are generated on your Mac and do not go through any server.

## Data that leaves your Mac

OmniPeer uses decentralized networks run by third parties, which the developer does not control:

- **P2P networks (eD2k, Kad, BitTorrent, DHT, trackers)**: your IP address, the ports in use, and the identifiers (hashes) of the files you download or share are visible to eD2k servers, Kad and DHT nodes, trackers, and other peers. The parts of files you have already downloaded are shared with other peers while the transfer stays in the list.
- **Search**: what you search for is sent to the connected eD2k servers, to nodes of the Kad network and, for BitTorrent search, to the external service apibay.org.
- **Server and node lists**: when you update them, OmniPeer downloads `server.met` and `nodes.dat` from the addresses shown in the app (default: upd.emule-security.org).
- **Updates**: with automatic checks on, OmniPeer downloads the list of published versions from GitHub (raw.githubusercontent.com) once a day; with "Check for Updates…" it does so when you ask. If you install a new version, the app file comes from GitHub. GitHub sees your IP address and the OmniPeer version; no other data about your Mac is sent. Automatic checks can be turned off in Settings › General › Updates.
- **PCP, NAT-PMP, and UPnP**: when enabled, the app asks your local router to open the ports set in Settings and to report its external address, which stays on your Mac.

These parties handle data under their own rules. The app and its internal engine talk to each other only on your Mac (address 127.0.0.1).

## Data collection by the developer

The developer does not collect, receive, sell, or share any user data.

## Responsible use

You are responsible for what you download and share: use OmniPeer only for files you have the right to download and distribute.

## Deleting your data

To delete all app data: remove the transfers from the list, quit OmniPeer, and delete the `~/Library/Application Support/OmniPeer` folder and the `com.dimpemekug.omnipeer` preferences. Downloaded files stay in their folder until you delete them.

## Changes

Any changes to this policy will be published on this page with a new date.

## Contact

Developer / Publisher: `dimpemekug`

Support email: `dimpemekug.app@gmail.com`
