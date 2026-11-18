---
title: "Which Mac apps connect to the internet, and how to block them"
seoTitle: "Which Mac apps connect to the internet and how to block them"
description: Every installed app can talk to a server, even when you don't notice. How to find out who connects and how much they exchange, why the macOS firewall isn't enough and how to decide, app by app, who gets through.
seoDescription: "How to find out which Mac apps connect to the internet, why the macOS firewall doesn't stop them and how to block outgoing connections app by app."
pubDatetime: 2026-11-18T13:00:00Z
related:
  - torrent-sicuri-mac-2026
  - agenti-ai-mac-accesso-completo-disco-macos-27-3
  - aprire-rar-protetto-mac
relatedProjects:
  - excubia
tags:
  - macos
  - cybersecurity
  - networking
  - privacy
draft: false
---

A text editor checking for updates, a utility sending usage statistics, a program verifying its licence every time you open it, a component installed years ago whose name you no longer remember. On a Mac many apps connect to the internet without showing it, and most do so for harmless reasons. The point is a different one: you usually don't know, and you have no way to decide. Seeing it is easy; choosing who gets through takes one more tool.

<figure>
  <img
    src="https://images.unsplash.com/photo-1516044734145-07ca8eef8731?w=1200&q=80"
    alt="Green status lights on a router with two antennas, with a blurred Christmas decoration in the foreground"
  />
  <figcaption class="text-center">
    The router lights blink even when you aren't doing anything: some app is talking to a server.
  </figcaption>
</figure>

## Seeing who connects

The Mac already has two tools to give you an idea.

1. **Activity Monitor.** The **Network** tab lists processes with the data each one has sent and received. Sorting by bytes received or sent shows straight away who exchanges the most; an unfamiliar name is easy to look up.
2. **Terminal.** The `nettop` command shows active connections process by process, updated in real time, with the destination address.

Both, however, show what's happening without letting you stop it, and they say nothing about yesterday's connections or those that lasted a second.

## Why the macOS firewall isn't enough

System Settings › Network › Firewall holds a real firewall, but it looks in one direction only: it blocks **incoming** connections, that is, other computers trying to connect to your Mac. It matters mostly on public networks and should stay on.

**Outgoing** connections, the ones your apps open towards the internet, it doesn't check. For those you need an application firewall: a program that sits in the middle, sees every new connection and, if the app has no rule yet, asks what to do. On macOS these programs use a system network extension, and the first time they run macOS asks for permission to install it and filter traffic.

## What's normal and what isn't

Not every connection is suspicious, and blocking everything makes the Mac unusable. A few criteria help.

1. **Normal.** Updates, cloud sync, licence checks, maps, weather and everything an app does in order to work. Apple's services are part of the system.
2. **Worth a look.** Usage statistics, crash reports and telemetry: often useful to the developer, almost always safe to block.
3. **Worth blocking.** An app that shouldn't need the network, such as a converter or an offline editor, connecting constantly; destinations linked to advertising or tracking; a process you can't identify, with no recognisable signature.

A good application firewall shows, next to the alert, who signed the program and which domain it wants to reach: two pieces of information that are enough to decide in most cases.

## The tools

There are several application firewalls for the Mac. Objective-See's LuLu is free and open source; Little Snitch is the long-standing paid option with advanced features. [Excubia](/en/projects/excubia/), free and coming to the Mac App Store, stops every app without a rule on its first attempt and asks whether to let it through, with a scope (just that domain, or everything) and a duration (once, an hour, forever).

1. **Two profiles.** The Standard profile only asks about third-party apps, once per app, and lets the system and Mac App Store apps through; the Expert profile alerts you for every destination.
2. **Signature checks.** A rule applies only to code signed by the same developer: if an app's signature changes, Excubia flags it.
3. **Blocklists.** Advertising, tracking and malware stopped in every app, with lists updated daily.
4. **Log and data exchanged.** Every decision with its reason, and how much each app has sent and received.

Excubia runs on Macs with Apple silicon and macOS 15 or later. The guide to [answering alerts](/en/projects/excubia/docs/answering-alerts/) explains what to choose in the most common cases.

> **Tip:** the first few days with an application firewall bring lots of alerts, because every app asks the first time. If the tool has a learning mode, use it: for a few days apps get through without asking, then you review all the rules at once, calmly.

## What to keep in mind

Knowing which apps connect to the internet is the first step to understanding what's happening on your Mac, and it's often enough to uncover a forgotten program or pointless telemetry. The system firewall protects you from the outside; for apps reaching out you need a tool that asks and remembers your choices. The result isn't a cut-off Mac, but one where every connection has a reason you know.
