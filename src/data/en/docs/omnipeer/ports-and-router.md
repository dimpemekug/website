---
title: "Ports and router"
description: "OmniPeer's ports for eD2k, Kad and BitTorrent, automatic opening with PCP, NAT-PMP and UPnP, and what a closed port, double NAT and CGNAT mean."
project: "omnipeer"
order: 6
section: "Networks"
---

P2P networks work better when other clients can connect to you. For that, the router has to forward to your Mac the ports OmniPeer uses.

## The ports

| Port | Initial value | Used for |
|---|---|---|
| eD2k TCP port | 4662 | connections with eD2k servers and clients |
| Kad UDP port | 4672 | the Kad network |
| BitTorrent port | 6881 | BitTorrent and DHT connections |

Change them in **Settings › Connection & Ports**. New ports take effect after **Restart Engine**: see [Settings](/en/projects/omnipeer/docs/settings).

## Automatic opening

With **Use UPnP, NAT-PMP or PCP to open ports on the router automatically** on (it is at first), OmniPeer asks the router to open the ports. It tries PCP, NAT-PMP and UPnP and uses the first one the router accepts.

The result is in the **Ports on the router** box, at the bottom of the **Kad Network** page. Each port has a state:

- **Open with PCP / NAT-PMP / UPnP**;
- **Opening…**;
- **Already used on the router by another device**: another computer on the network uses the same port; choose another one in Settings;
- **Not open**, with the reason when the router gives one.

Below it also appears the router's external address, when the router reports it. It stays on your Mac.

If automatic opening is off, the box says so: the ports have to be opened by hand on the router.

## When the ports don't open

The box shows a warning in the most common cases:

- **The router doesn't answer PCP, NAT-PMP or UPnP**: turn on UPnP in the router's settings, or forward the ports to your Mac by hand. OmniPeer keeps retrying on its own.
- **Double NAT**: the router is connected to another router (for example your provider's). The ports have to be opened on that one too, or it has to be put in bridge mode.
- **CGNAT**: your provider shares the same public address among several customers. Opening ports on the router isn't enough: ask your provider for a public IP.

Even with closed ports OmniPeer downloads: on eD2k and Kad you'll be "LowID" and some sources won't be able to reach you; on BitTorrent you'll connect only to peers that accept connections.

## macOS firewall

On first launch macOS may ask whether to let OmniPeer accept incoming connections. If you declined, you can change it in **System Settings › Network › Firewall › Options**.
