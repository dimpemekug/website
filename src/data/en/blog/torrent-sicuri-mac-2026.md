---
title: "Safe torrenting on a Mac in 2026: fake files, malware and the real risks"
seoTitle: "Safe torrenting on a Mac: fake files, malware and privacy"
seoDescription: "How to use BitTorrent on a Mac without nasty surprises: who sees your IP, what Italian law says and how to spot fake files and cracked apps."
description: BitTorrent is a legitimate tool, but Mac users run into three concrete risks. What other peers can see, what Italian law says, and how to spot fake files and cracked apps before you open them.
pubDatetime: 2026-11-12T08:00:00Z
related:
  - passkey-addio-password-2026
  - aprire-rar-protetto-mac
  - wifi-8-router-affidabilita-2026
relatedProjects:
  - omnipeer
tags:
  - cybersecurity
  - privacy
  - macos
  - networking
draft: false
---

BitTorrent is not a synonym for piracy: Linux distributions use it to hand out installation images, the Internet Archive uses it for its collections, and plenty of people use it to move large files without a server. The protocol does have rules worth knowing before you open your first magnet link, though. Your IP address is visible to everyone, you share while you download, and some of the files out there are not what they claim to be. On a Mac, the biggest danger has a specific name: cracked apps.

<figure>
  <img
    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
    alt="Network patch panel with numbered ports and blue and grey Ethernet cables plugged in"
  />
  <figcaption class="text-center">
    On a peer-to-peer network every computer is a reachable node, and therefore a visible one.
  </figcaption>
</figure>

## What others see while you download

A torrent doesn't come from a server: it arrives in pieces from other computers, the *swarm*, and the pieces you already have are sent on to whoever needs them. To connect to you, other peers need your IP address, which they find through trackers, the DHT or peer exchange (PEX). Anyone who joins the same swarm can see the addresses of every participant, including the systems monitoring firms use to collect the IPs of people sharing copyrighted works.

Protocol encryption, which many clients offer, makes the traffic harder for your provider to recognise, but it doesn't hide your address from other peers: to exchange data, two computers still need to know where to find each other.

## What the law says in Italy

Downloading a copyrighted film, album or program without the right to do so is an administrative offence in Italy: article 174-ter of the copyright law (633/1941), amended by law 93 of 14 July 2023, sets a fine of €154, rising to €5,000 for repeat offences or serious cases involving many works or copies. It isn't just on paper: in February 2026 the Guardia di Finanza fined about 120 users of pirate subscriptions across Italy.

BitTorrent adds one more element. While you download, you make the file's pieces available to others, and making a protected work available to the public over a network falls under article 171 of the same law, which is a criminal offence punished with a fine of €51 to €2,065. This isn't legal advice, but the practical conclusion is simple: with a P2P client, only download content you have the right to download **and** to share. Other countries have their own rules, often stricter on sharing.

There's no shortage of legitimate content: Linux distributions such as Debian, which publish official torrents for their installation images, the Internet Archive's collections, public-domain works and Creative Commons material, and files their creators chose to distribute this way.

## How to spot a fake file

Even when you start from legitimate content, P2P searches turn up counterfeit copies: same name, different contents. The warning signs to check before downloading are few and recurring.

1. **An extension hidden behind another.** `movie.mp4.exe` or `document.pdf.app` are programs in disguise. On a Mac, turn on **Finder › Settings › Advanced › Show all filename extensions**.
2. **The wrong type for the content.** A video or an album doesn't need a disk image (`.dmg`), an installer package (`.pkg`) or an app to be watched or played.
3. **Sizes that don't add up.** A 20 MB high-definition film, or a system image much smaller than usual, isn't what it promises.
4. **Password-protected archives or "codecs" to install.** A password you have to "get from a website" and a special player to download are the oldest tricks for getting you to install something else.
5. **A swarm that doesn't feel right.** Very few sources for a file that should be everywhere is a warning sign; many sources aren't a guarantee, just one less red flag.

## The biggest risk on a Mac: cracked apps

Fake files can be spotted; cracked apps are more insidious because the victim installs them on purpose. A Gen Digital analysis published on 31 March 2026 reports that in just 48 hours of watching a single wave of cracked apps, its systems blocked about 108,000 launch attempts on Macs. Inside were cryptocurrency miners, programs that steal passwords, cookies and wallets (*infostealers*, such as AMOS and MacSync, documented by other researchers in 2026) and backdoors that come back after every restart.

The trick is almost always the same: the bundled instructions ask you to get around macOS's defences. Since macOS 15 Sequoia, Control-clicking is no longer enough to open an unverified app: you have to go through **System Settings › Privacy & Security › Open Anyway**. If a guide asks you to do that, to paste a command into Terminal or to turn off System Integrity Protection (SIP), the problem isn't your Mac being difficult: it's the guide.

If you've already installed something like this, change your important passwords right away, starting with email, and consider moving to [passkeys](/en/posts/passkey-addio-password-2026/), which an infostealer can't copy the way it copies a saved password.

## How to download with less risk

The useful precautions are few and apply to any client.

1. **Start from the official source.** Get the magnet link or `.torrent` file from the publisher's own website, not from a torrent search engine.
2. **Check name, type and size before downloading.** They're the signs from the list above, and they already show in search results.
3. **Keep macOS's protections on.** Gatekeeper and SIP stop much of what slips past everything else.
4. **Check the file's fingerprint.** Many projects publish a SHA-256 checksum next to the download: if it matches, you have exactly the original file.

On a Mac, [OmniPeer](/en/projects/omnipeer/) helps with the second point in particular. In search results it gives each file a label (Trusted, Normal, Suspected Fake or Malware Risk) based on signs such as double extensions, executables with video names and inconsistent sizes, and by default it hides the ones flagged as a malware risk; the criteria are explained in the guide to [search and the anti-spam filter](/en/projects/omnipeer/docs/search-and-anti-spam-filter/). It's an estimate based on names and numbers, not an antivirus: it doesn't open the files. The app is free, with no ads or in-app purchases, and needs a Mac with Apple silicon and macOS 14 or later.

> **Tip:** to check a downloaded file's fingerprint, open Terminal and type `shasum -a 256 ` followed by the file's path (you can drag the file into the window). Compare the result with the one the project publishes: a single different character tells you the file isn't the original.

## What to keep in mind

BitTorrent is still one of the most efficient ways to distribute large files, and for many open projects it's the main channel. The real risks aren't in the protocol but in what travels through it: content you don't have the right to share, disguised files, and cracked apps that ask you to switch off the system's defences. Start from official sources and look at what you download before opening it, and you avoid nearly all of them.
