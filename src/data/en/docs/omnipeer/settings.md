---
title: "Settings"
description: "All of OmniPeer's settings: theme and language, download folder, sleep and notifications, ports, automatic opening, speed limits and P2P networks."
project: "omnipeer"
order: 8
section: "Reference"
---

Open Settings with **OmniPeer › Settings…** (<kbd>⌘</kbd> <kbd>,</kbd>) or from the [menu bar](/en/projects/omnipeer/docs/menu-bar) panel. There are four tabs.

## General

| Setting | Initial value | Notes |
|---|---|---|
| Theme | System | System, Light or Dark |
| Language | System | English or Italian; takes effect when the app reopens, with **Reopen Now** |
| Download Folder | Downloads | **Choose...** opens the Finder |
| Prevent the Mac from sleeping during active downloads | on | the Mac doesn't sleep while a download is running |
| Show a system notification when a file completes | on | the notification is generated on your Mac |

## Connection & Ports

| Setting | Initial value |
|---|---|
| eD2k TCP Port | 4662 |
| Kad UDP Port | 4672 |
| BitTorrent Port | 6881 |
| Use UPnP, NAT-PMP or PCP to open ports on the router automatically | on |

See [Ports and router](/en/projects/omnipeer/docs/ports-and-router).

## Bandwidth

**Maximum Download Speed** and **Maximum Upload Speed**, in KB/s; 0 means no limit (the initial value). The download limit applies only to BitTorrent: the eD2k network has none. The upload limit applies to both. Limits take effect right away.

## P2P Networks

| Setting | Initial value |
|---|---|
| Enable Kademlia Network (Kad DHT) | on |
| Enable BitTorrent DHT (trackerless network) | on |
| Enable Peer Exchange (PEX) | on |
| Prefer encrypted connections (ISP anti-throttling) | on |

Encrypted connections use the BitTorrent protocol's encryption (MSE/PE): they make it harder for your provider to recognize and slow down the traffic, but they don't hide your IP address from other peers.

## Restarting the engine

Download folder, ports, automatic opening and networks apply from when the `omnipeerd` engine starts. When you change one, a bar appears at the bottom of the window, "Some changes take effect when the P2P engine restarts", with the **Restart Engine** button. Transfers resume on their own after the restart. Speed limits, theme and notifications don't need a restart.

## Where the data is

- Preferences: in the `com.dimpemekug.omnipeer` macOS preferences domain.
- Transfers, servers and Kad state: in the `~/Library/Application Support/OmniPeer` folder.
- Downloaded files: in the download folder you chose.

To delete everything, remove the transfers from the list, quit OmniPeer and delete the folder and the preferences. Downloaded files stay where they are.
