---
title: "Menu bar"
description: "OmniPeer's menu bar icon: speeds, active downloads, pause and resume all transfers, quick speed limits and the state of the networks."
project: "omnipeer"
order: 7
section: "Mac"
---

OmniPeer puts an icon in the macOS menu bar. When downloads are active, the total download speed appears next to the icon.

Clicking the icon opens a panel with:

- the state of the networks: "All networks active", "No active networks", the list of active ones, or "P2P engine not connected" if the engine doesn't respond;
- the total **Download** and **Upload** speed;
- active transfers, each with name, percentage, estimated time and progress bar (or "Seeding" for files already complete); with no active downloads, "No active downloads";
- **Pause All** and **Resume All**;
- **Open OmniPeer**, which reopens the main window;
- **Limit speed**: a menu with a few ready-made limits for download and upload, or **No limit**. The item becomes "Limit speed · on" when a limit is set. The limits chosen here are the same as in [Settings](/en/projects/omnipeer/docs/settings) and take effect right away;
- **Settings…** and **Quit OmniPeer**.

## Window closed, app running

Closing the main window doesn't quit OmniPeer: transfers keep going and the icon stays in the menu bar. To stop everything, use **Quit OmniPeer** in the panel or **OmniPeer › Quit** (<kbd>⌘</kbd> <kbd>Q</kbd>). Quitting also stops the `omnipeerd` engine; on the next launch the transfers resume.
