---
title: "Digital sovereignty: what moving your data to Europe actually means"
description: European cloud, models trained in-house, data residency requirements. Behind a word that has become a slogan sit concrete technical choices — and trade-offs worth understanding before adopting them.
pubDatetime: 2026-07-31T08:00:00Z
tags:
  - digital-sovereignty
  - cloud-computing
  - privacy
draft: false
---

"Digital sovereignty" is one of those phrases that turns up everywhere and means something different depending on who says it. For a public body it's a procurement requirement; for a company it's a line in a compliance questionnaire; for whoever builds the software it is, far more concretely, the question of where your servers actually run, who can read the data passing through them, and what happens if that provider changes its terms one day. In 2026 the conversation has left the legal department and landed on architecture decisions.

<figure>
  <img
    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
    alt="A data center aisle lined with server racks and network cables"
  />
  <figcaption class="text-center">
    Data sovereignty isn't settled in a contract: it's settled by which rack the data actually lands in.
  </figcaption>
</figure>

## The three questions that matter

The term covers at least three distinct requirements, which routinely get conflated:

- **Where the data lives.** The simplest layer: picking a European region with your cloud provider. It answers the geographic question, not the legal one — the provider is still the same company.
- **Who has jurisdiction over the provider.** A company subject to non-European law can receive access requests for the data it holds, regardless of which country the disks physically sit in. This is where data residency alone stops being enough.
- **Who can technically read the data.** Encryption at rest and in transit is table stakes by now, but the follow-up question is who holds the keys. If the provider holds them, the protection is contractual before it is technical.

These are three independent layers: you can satisfy the first and neither of the other two, and that is exactly what happens in most migrations presented as "sovereign."

## What's changing on the technical side

The interest in open AI models that can run on your own infrastructure largely comes from here. Sending internal documents to an external service to have them summarized is convenient, but it moves a stream of sensitive data outside the organization's perimeter every day, indefinitely. A smaller model running on your own hardware is often less capable — and for many tasks capable enough anyway, with the benefit that the data never leaves.

On the infrastructure side, the path most actually taken isn't wholesale replacement but separation by criticality: ordinary workloads stay where they are, while the ones touching personal data or intellectual property get isolated onto controlled infrastructure. Less dramatic than a full migration, and far more realistic.

## The trade-offs to account for

1. **Managed services that disappear.** Much of a large cloud's value sits in its high-level services: queues, managed databases, authentication, observability. Rebuilding them elsewhere means reintroducing operational work you had stopped doing.
2. **Costs that move rather than vanish.** Savings on licensing are often eaten by the time of the people who now have to patch, monitor, and secure what used to arrive ready-made.
3. **Security you have to demonstrate, not assume.** Self-managed infrastructure is more sovereign but not automatically safer: patching, verified backups, and access management become internal responsibilities, and that's where real incidents concentrate.
4. **Lock-in isn't only a vendor thing.** Building an internal platform creates a dependency on the handful of people who understand it — a less visible risk, but just as real.

> **Tip:** before talking about migration, do the most tedious and most useful exercise: list which data leaves your infrastructure today, toward which service, and for what purpose. In most projects the list is shorter than feared and contains one or two entries nobody expected — and those are the ones worth starting from.

## What to expect from here

The direction is clear and doesn't depend on fashion: more contractual requirements on data residency, more attention to who holds the keys, more locally runnable models that are good enough. But useful digital sovereignty isn't a label to display: it's the ability to answer precisely where the data is, who can read it, and what it would take to move it elsewhere. Anyone who can answer those three questions is already more sovereign than someone who merely switched their cloud region.
