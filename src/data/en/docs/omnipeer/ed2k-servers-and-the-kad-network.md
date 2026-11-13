---
title: "eD2k servers and the Kad network"
description: "The eD2k network in OmniPeer: server list, server.met updates, connecting, and the Kad network with status, nodes and bootstrap from nodes.dat."
project: "omnipeer"
order: 5
section: "Networks"
---

The eD2k network has two parts that OmniPeer uses together: **servers**, which you connect to one at a time to search for files and find sources, and **Kad**, a serverless network where every client is a node. An eD2k download finds sources from both.

## eD2k servers

Open **eD2k Servers** in the sidebar. Under the item's name is the status: "Connected · server name", "Connecting…" or "Not connected".

The server table has the columns **Status**, **Server Name**, **IP Address:Port**, **Ping**, **Online Users**, **Indexed Files** and **Description**. The toolbar search field filters the list.

- **Connect**: select a server and press **Connect to Selected**, or use **Connect to this server** in the context menu. You're connected to one server at a time. If the server doesn't answer within 20 seconds, the attempt is dropped.
- **Disconnect**: **Disconnect**.
- **Remove a server**: context menu › **Remove from list**.
- **Add a server by hand**: **Add Server**, then name, IP address or hostname and TCP port.

### Updating the list

The **server.met URL** field holds the default address `https://upd.emule-security.org/server.met`. **Update server.met** downloads the file and adds the servers to the list. You can enter another http(s) address of a `server.met` file or an `ed2k://|serverlist|…|/` link. If the update fails, an alert says why.

On first launch, with an empty list, OmniPeer downloads the default `server.met` on its own.

## Kad network

Open **Kad Network** in the sidebar. At the top, the **Connect to Kad** (or **Disconnect**) button turns Kad on and off: the choice is the same as **Enable Kademlia Network** in [Settings](/en/projects/omnipeer/docs/settings) and restarts the engine.

The page shows:

- **Connection Status**: Disconnected, Connecting..., Connected (Firewalled / LowID) when the port is closed, Connected (Open / HighID) when it's open;
- **Active Nodes**: how many Kad nodes OmniPeer knows;
- **Kad UDP Port**: the port in use;
- **Public IP Address**: known only with an eD2k server connected and the port open.

With the port closed Kad still works, but some sources can't reach you. To open it see [Ports and router](/en/projects/omnipeer/docs/ports-and-router); the **Ports on the router** box is at the bottom of this page.

### Bootstrap

To join Kad you need some initial nodes. OmniPeer saves the ones it knows and reuses them after a restart; if there are few, it loads a `nodes.dat` file. In the **Initializing (Kad Bootstrap)** box you can also do it by hand:

- **Bootstrap from known node**: enter the IP and UDP port of a Kad client and press **Bootstrap**. Contacts arrive over the next few seconds.
- **Update nodes from URL (nodes.dat)**: the default address is `https://upd.emule-security.org/nodes.dat`; **Download** loads the contacts and says how many it found.

## BitTorrent DHT

The **BitTorrent DHT** item in the sidebar doesn't open a page: it shows how many DHT nodes OmniPeer knows, or "Off" if DHT is turned off in Settings. DHT lets you download from magnet links without trackers; peer exchange (PEX) learns about other peers from the peers already connected.
