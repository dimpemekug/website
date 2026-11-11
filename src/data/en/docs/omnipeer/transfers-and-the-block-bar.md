---
title: "Transfers and the block bar"
description: "OmniPeer's transfer list: sections and filters, columns and statuses, the block bar, the details panel with pieces and peers, pausing and deleting."
project: "omnipeer"
order: 3
section: "Transfers"
---

## Sections and filters

The **Transfers** section of the sidebar splits the list by status: **All**, **Downloading**, **Seeding**, **Completed**, **Paused**. The toolbar filter (**All networks**, **BitTorrent**, **eD2k**) combines with the chosen section, and the search field filters by name.

## The list

The columns are **Name**, **Speed**, **Sources** (active sources out of those found, such as "3 of 12"), **Status**, **Size**, **Network** and **Added**; click a header to sort the list. Next to the name is the network label; below it, a progress bar and a line with the bytes downloaded, size and percentage, or for seeding files the share ratio (for example "shared 1.4×").

The possible statuses are Downloading, Seeding, Paused, Completed, Queued, Checking... and Error. A finished download keeps seeding: its parts are sent to other peers as long as the transfer is in the list.

## The block bar

The block bar is in the **Pieces** tab of the [details panel](#the-details-panel). It splits the file into its pieces and colors them by state:

- **Downloaded and verified**: solid, in the network's color (eD2k or BitTorrent);
- **Downloading**: lighter, with the part of the piece already received;
- **Missing**: empty;
- **No sources** (eD2k only): none of the known sources has that piece.

## Actions

| Action | How |
|---|---|
| Pause or resume | <kbd>Space</kbd>, <kbd>⌘</kbd> <kbd>P</kbd>, the **Transfers** menu or the context menu |
| Pause all | <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd> or the toolbar button |
| Resume all | <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>R</kbd> |
| Copy the link | context menu › **Copy link (eD2k)** or **Copy link (BitTorrent)** |
| Show in Finder | context menu › **Show in Finder** |
| Delete | <kbd>⌫</kbd> or context menu › **Delete…**, with confirmation |

**Delete** removes the transfer from the list; files already downloaded stay in the folder.

## The details panel

<kbd>⌘</kbd> <kbd>I</kbd>, the **Details** button or **Transfers › Show Details** open a panel under the list for the selected transfer, with buttons to pause, delete and close. It has three tabs:

- **Pieces**: **Piece progress** (how many pieces out of how many, and the percentage), the large block bar, the **Piece size** and the count of downloaded, incoming and missing pieces, with a color legend. Below is the **Piece grid**: one square per piece; hover over it to read the piece number and its state.
- **Details**: **Transfer Statistics** (total size, bytes downloaded, download and upload speed, time left) and **Integrity & Network**. For BitTorrent: infohash (BTIH), connected seeds and total peers. For eD2k: MD4 hash, AICH hash if there is one, sources found and active, queue position. Hashes can be copied with the button next to them; the download folder opens in the Finder.
- **Peers**: the table of connected peers, with **Client Software**, **IP Address:Port**, **Status**, **Speed ↓**, **Speed ↑** and **Peer Progress**. The number of peers is in the tab's name.

## When a download finishes

If the option is on in [Settings](/en/projects/omnipeer/docs/settings), macOS shows a notification, even with OmniPeer in front. While downloads are active, OmniPeer keeps the Mac from sleeping (on at first).

Closing the window doesn't quit OmniPeer: transfers keep going and the app stays in the [menu bar](/en/projects/omnipeer/docs/menu-bar). To quit, use **OmniPeer › Quit** or **Quit OmniPeer** in the menu bar panel.
