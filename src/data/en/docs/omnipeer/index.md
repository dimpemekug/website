---
title: "Introduction to OmniPeer"
description: "What OmniPeer, the eD2k, Kad and BitTorrent client for Mac, is: how the window is laid out, what happens on first launch and where to find the rest of the guide."
project: "omnipeer"
order: 1
section: "Getting started"
---

OmniPeer is a peer-to-peer client for Mac that uses two networks in the same window: **eD2k** (with its servers and the Kad network) and **BitTorrent** (with trackers, DHT and peer exchange). The app has two parts: the interface, written in SwiftUI, and an engine, `omnipeerd`, that connects to the networks. The engine is bundled with the app, starts and quits with it, and talks to the interface only on your Mac, at `127.0.0.1`.

## The window

- **Sidebar**: the **Transfers** section (All, Downloading, Seeding, Completed, Paused), with the number of items next to each; the **Networks** section, with **eD2k Servers**, **Kad Network** and **BitTorrent DHT** and their status written under the name; the **Tools** section with **Search files**.
- **Toolbar**: the network filter (All networks, BitTorrent, eD2k), the **Add** button, pause or resume all transfers, and the **Details** button. The search field filters the list in the open section; in **Search files** it starts a search on the networks.
- **Status bar**, at the bottom: total download and upload speed, the state of eD2k, Kad and DHT, and any speed limits.

## On first launch

- macOS asks whether to allow incoming connections (firewall) and notifications. Without incoming connections OmniPeer still downloads, but fewer sources can reach you.
- If the eD2k server list is empty, OmniPeer downloads the `server.met` file from `upd.emule-security.org` on its own. Which server to connect to is up to you: see [eD2k servers and the Kad network](/en/projects/omnipeer/docs/ed2k-servers-and-the-kad-network).
- Kad starts on its own: it reuses the saved contacts and, if there are few, loads `nodes.dat`.
- If automatic port opening is on (it is at first), OmniPeer asks the router to open the ports. You can see the result on the **Kad Network** page: see [Ports and router](/en/projects/omnipeer/docs/ports-and-router).

## What's in this guide

- [Adding a download](/en/projects/omnipeer/docs/adding-a-download): magnet and ed2k links, `.torrent` files, clipboard and browser
- [Transfers and the block bar](/en/projects/omnipeer/docs/transfers-and-the-block-bar): list, statuses, pieces, details and peers
- [Search and anti-spam filter](/en/projects/omnipeer/docs/search-and-anti-spam-filter): searching eD2k, Kad and BitTorrent
- [eD2k servers and the Kad network](/en/projects/omnipeer/docs/ed2k-servers-and-the-kad-network): server list, `server.met`, Kad and `nodes.dat`
- [Ports and router](/en/projects/omnipeer/docs/ports-and-router): PCP, NAT-PMP, UPnP, closed port, double NAT and CGNAT
- [Menu bar](/en/projects/omnipeer/docs/menu-bar), [Settings](/en/projects/omnipeer/docs/settings) and [Keyboard shortcuts](/en/projects/omnipeer/docs/keyboard-shortcuts)

## Requirements

A Mac with Apple silicon and macOS 14 Sonoma or later. OmniPeer is not on the Mac App Store: download it as a disk image (DMG) signed with Developer ID and notarized by Apple from the [releases page on GitHub](https://github.com/dimpemekug/OmniPeer-releases/releases/latest). It is free, with no ads or in-app purchases, and needs no account. The interface is in English and Italian.

Like every P2P client, OmniPeer shares the parts of the files you download with other peers and makes your IP address visible: use it only for content you have the right to download and share. Details in the [privacy policy](/en/projects/omnipeer/privacy/).
