---
title: "Adding a download"
description: "How to add a download in OmniPeer: magnet and ed2k links, .torrent files, the clipboard, the browser and drag and drop, with the file name and destination folder."
project: "omnipeer"
order: 2
section: "Getting started"
---

OmniPeer accepts three kinds of source and detects the network on its own:

| Source | Example | Network |
|---|---|---|
| Magnet link | `magnet:?xt=urn:btih:…` | BitTorrent |
| ed2k link | `ed2k://\|file\|name\|size\|hash\|/` | eD2k and Kad |
| `.torrent` file | a file on your Mac | BitTorrent |

In magnet links the hash can be hexadecimal (40 characters) or Base32 (32 characters). In ed2k links the MD4 hash must be 32 hexadecimal characters; if the link also contains the AICH hash (`h=…`) or sources (`sources,IP:port`), OmniPeer uses them.

## The Add panel

Open it with **File › Add Link or Torrent…** (<kbd>⌘</kbd> <kbd>N</kbd>) or the **Add** button in the toolbar.

1. Paste the link into the **Link or URI** field, or use **Paste from Clipboard**. If there's already a magnet or ed2k link on the clipboard, the field is filled in when the panel opens.
2. When the link is valid, **Link Recognized!** appears with the name, the size (for magnets without a size: "From swarm metadata") and the start of the hash. If the link isn't valid, the reason appears under the field.
3. In **File Name** you can change the suggested name.
4. **Save to** shows the download folder from Settings; **Choose...** picks another one for this file only.
5. **Add Download** (<kbd>↩</kbd>) starts the transfer; **Cancel** (<kbd>esc</kbd>) closes the panel.

For a `.torrent` file, use **Browse .torrent File...** in the same panel.

A link that's already in the list isn't added twice: OmniPeer selects the existing transfer.

## Other ways

- **From the browser**: OmniPeer registers for `magnet:` and `ed2k://` links. Clicking one of these links on a web page opens OmniPeer and adds the download.
- **Paste into the list**: with the transfer list active, <kbd>⌘</kbd> <kbd>V</kbd> adds the link on the clipboard without opening the panel, to the default download folder.
- **Drag**: drop a `.torrent` file on the transfer list.
- **Empty list**: while there are no transfers, the window shows the **Paste link** and **Choose .torrent file…** buttons; if there's a link on the clipboard, a box appears with its name and an **Add** button.
- **From search**: see [Search and anti-spam filter](/en/projects/omnipeer/docs/search-and-anti-spam-filter).

## After adding

The transfer appears at the top of the list. Until peers send the metadata (which happens with magnet links), the size and pieces aren't known and the row says "Waiting for metadata…". See [Transfers and the block bar](/en/projects/omnipeer/docs/transfers-and-the-block-bar).
