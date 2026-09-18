---
title: "Local-first: apps that work offline and sync later"
description: Data on the device, the server as a copy rather than an owner. After years of prototypes, 2026 finds local-first with mature libraries, sync engines in production, and its own track at FOSDEM. What it means, what you gain, and where it still hurts.
pubDatetime: 2026-09-14T08:00:00Z
tags:
  - software-development
  - developer-tools
  - privacy
draft: false
---

When the train enters a tunnel, most of the apps you use stop being apps and turn into error screens. That is an architectural choice, not a law of nature: for fifteen years the normal way to build software has been to put the data on a server and give the device a window to look at it through. The *local-first* movement proposes flipping that relationship, and in 2026 it stopped being a conference topic.

<figure>
  <img
    src="https://images.unsplash.com/photo-1777913308049-a2c79af7380a?w=1200&q=80"
    alt="An open laptop on a wooden table under a thatched roof, looking out over a valley at sunset"
  />
  <figcaption class="text-center">
    The real test of a local-first app is mundane: does it work where the network doesn't reach?
  </figcaption>
</figure>

## What it means in practice

The idea comes from a 2019 essay by the Ink & Switch lab and fits in one sentence: **data lives on the user's device, and the network exists to sync it, not to own it**. From there follow a handful of properties which, lined up, describe rather well the software people miss:

- the app opens immediately, because it is not waiting for an answer;
- it works offline entirely, not in a "limited mode";
- collaboration still works, with changes merging once the network comes back;
- the data stays readable even if the service shuts down;
- privacy becomes a consequence of the architecture rather than a promise on a page.

## How everything merges when the network returns

The technical piece that made the idea workable is **CRDTs** (Conflict-free Replicated Data Types): data structures designed so that two separately edited copies can be merged without an arbiter, reaching the same result whatever order the changes arrive in.

The libraries are mature. **Yjs** is the most widely deployed and sits behind collaborative editing in several well-known products; **Automerge**, which reached version 3 at the end of 2025, rewrote its storage format and cut document sizes by up to half — historically its weak spot.

Alongside CRDTs, **sync engines** have grown up, solving the problem one level higher: ElectricSQL syncs Postgres with SQLite on the client, PowerSync does something similar for existing stacks, while Zero and Triplit aim to handle the whole chain — local storage, sync, conflicts, real-time updates — for projects starting from scratch.

Two signals this year show the field has left the experimental phase: FOSDEM 2026 ran a dedicated track on local-first, sync engines, and CRDTs, and in August Electric joined Databricks.

## The open problems

1. **Schema migrations.** When the data sits on a thousand devices, changing the shape of a document is not an `ALTER TABLE`: it is a negotiation with old versions that might come back online in six months.
2. **Permissions.** CRDTs resolve conflicts, not authorisation. Deciding who can read and write what still needs a server acting as gatekeeper, and designing one is less fun than the offline part.
3. **The weight of history.** A document that keeps every change grows. Compaction, pruning, and snapshots are real work, not a detail.
4. **Betting on young projects.** The ecosystem moves fast, projects get acquired, APIs change. Adopting today means being able to swap a piece out tomorrow.

> **Tip:** you do not have to rewrite everything to get half the benefit. Try moving the app's state into a local database — SQLite, or even a plain file — and turning the server into a synchroniser that runs in the background. The app becomes faster and sturdier before you even get to call it local-first.

## What to expect next

The direction of travel is to make syncing a service of the development environment, the way authentication or notifications are today: something you configure rather than something you write. When that happens, "does it work offline?" will stop being a feature to tick and go back to being a baseline expectation.

There is a less technical reason to pay attention, too. An app that keeps data on the device does not need to explain what it does with your data on its server, because it does not have it there. It is a form of respect visible in the code before it is visible in a privacy policy — and for anyone writing software, the reassuring part is that it is also the architecture that makes apps faster.
