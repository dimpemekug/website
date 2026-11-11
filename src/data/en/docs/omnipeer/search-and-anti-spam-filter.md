---
title: "Search and anti-spam filter"
description: "Searching for files on eD2k servers, Kad and BitTorrent with OmniPeer: networks, filters for type, sources and size, the anti-spam filter and its risk labels."
project: "omnipeer"
order: 4
section: "Search"
---

Open **Search files** in the sidebar, type in the toolbar search field and press <kbd>↩</kbd> or **Search**.

## Where it searches

Above the results, choose the networks: **All Networks**, **eD2k + Kad** or **BitTorrent**.

- **eD2k + Kad**: the search goes to the eD2k server you're connected to and to nodes of the Kad network. With no server connected, only Kad nodes answer. Each result says where it came from (eD2k server, Kad or both).
- **BitTorrent**: the BitTorrent network has no search of its own; OmniPeer queries the external service **apibay.org** over HTTPS. If the service doesn't answer, a notice appears and the eD2k results remain.

What you search for reaches these servers and services: see the [privacy policy](/en/projects/omnipeer/privacy/).

## Results

The columns are the rating icon, **Name** (with the source and the reason for the rating below it), **Size**, **Sources** and **Network**. Below the table:

- **Download** adds the selected file to the transfers, in the default download folder, and opens the **Downloading** section;
- **Security details** opens the file's rating sheet.

A result's context menu has **Download this file**, **Copy P2P Link** (the magnet or ed2k link), **Security Details & Analysis** and **Report as Spam / Fake**.

## Filters

The **Filters** button opens a box with:

| Filter | Values |
|---|---|
| Type | All, Video, Audio, Archives, Documents, Software |
| Sources | All, At least 5, At least 15, At least 50 |
| Size | Any, At least 100 MB, At least 500 MB, At least 1 GB |
| Protection | see below |

Active filters appear as labels under the bar (for example "At least 15 sources"): click the × to remove one. The number of active filters is written on the button, and the protection mode in use is always shown under the bar.

## Anti-spam filter

P2P networks hold many fake files: videos that are programs, password-protected archives, "codecs" to install. OmniPeer rates each result with a few rules about the name, size and number of sources and gives it a label: **Trusted**, **Normal**, **Suspected Fake** or **Malware Risk**, with a score from 0 to 100.

Among the signals it looks at:

- an executable hidden behind another extension (`movie.avi.exe`);
- words typical of spam in the name (such as `codec_installer` or `password_protected`);
- a program (`.exe`, `.scr`, `.bat`…) with a video or audio name, or a very small one;
- a video under 15 MB, or too small for the HD or 4K resolution it claims;
- an unusually small disk image (`.iso`, `.dmg`);
- a single source on eD2k, typical of decoy files;
- on the other hand, many sources or a BitTorrent swarm with many seeds make a file more trustworthy.

The **Protection** filter decides what to show:

- **Protection On (Hide Spam & Malware)**, the initial choice: hides files with Malware Risk;
- **Verified Files Only (High Reliability)**: shows only Trusted files;
- **Show All (With Risk Labels)**: shows everything, with its label.

Below the results OmniPeer says how many it has hidden; **Show** switches to "Show All". **Report as Spam / Fake** hides a result from the list of the current search.

The filter is an estimate based on names and numbers, not an antivirus: it doesn't open files and doesn't check them after download.
