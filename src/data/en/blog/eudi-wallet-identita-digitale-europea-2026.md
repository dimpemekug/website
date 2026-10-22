---
title: "EUDI Wallet: Europe's identity wallet reaches its deadline in scattered order"
description: "By December 24, 2026, every EU country must offer a digital wallet for identity and documents. Italy's IT-Wallet is among the furthest ahead, while many others will be late. What it does, what it guarantees, and what changes for developers."
pubDatetime: 2026-10-22T08:00:00Z
tags:
  - digital-identity
  - privacy
  - compliance
  - mobile
draft: false
---

Two months to go until the date the European digital identity regulation set long ago: by December 24, 2026, every member state must make at least one **European Digital Identity Wallet**, the EUDI Wallet, available to its citizens. It is a phone app that holds identity documents, driving licences, diplomas, and certificates, and lets you prove who you are — online and in person — while showing only what is needed. On paper it is one of the EU's most ambitious digital projects. In practice, the deadline is arriving with countries in very scattered order.

<figure>
  <img
    src="https://images.unsplash.com/photo-1614260938313-a7fc1a7ad0d2?w=1200&q=80"
    alt="Two hands opening an empty brown leather wallet, with a smartphone tucked into one of its pockets"
  />
  <figcaption class="text-center">
    Documents are moving out of the leather wallet and into the phone: the bet is doing it without losing control of your own data.
  </figcaption>
</figure>

## What the regulation requires

The obligation comes from Regulation (EU) 2024/1183, the revision of the eIDAS regulation that entered into force in May 2024. The 24-month countdown started on December 24, 2024, when the first implementing acts with the wallet's technical specifications took effect.

A few principles are written into the text and apply to every country:

- **It is free.** Issuing, using, and revoking the wallet costs individuals nothing.
- **It is voluntary.** Nobody has to use it, and people who choose not to cannot be put at a disadvantage when accessing services: other ways of identifying yourself must remain available.
- **You show only what is necessary.** Proving you are over 18 should not mean sharing your date of birth, let alone your address: the wallet is designed for **selective disclosure** of individual attributes.
- **It signs, too.** Beyond identification, the wallet lets you create legally binding electronic signatures.

## Where countries stand

A few weeks before the deadline, the picture is uneven. According to Euronews in September, the vast majority of member states had yet to make a wallet available to citizens and are expected to miss the December date. Germany has set the launch of its wallet, d-you, for January 2, 2027; the Netherlands has pushed its debut to late 2027; other countries are still drafting the national legislation they need to issue one.

Italy is in the leading group. **IT-Wallet**, built into the IO app, had passed 10 million activations by February 2026, with 17.3 million documents loaded: driving licences, health insurance cards, and the European Disability Card, all available offline as well. This year brought the implementing decrees that make the system fully operational in legal terms, and more public-administration documents are due to arrive gradually, starting with the electoral card. IT-Wallet is not yet a fully certified EUDI Wallet, though: getting there means aligning with the European specifications and passing certification, which no country has so far completed for a wallet in production.

## The privacy questions still open

1. **Linking one use to the next.** The regulation requires that whoever verifies an identity cannot piece together a profile of the person by combining multiple verifications. Digital rights groups such as EDRi and epicenter.works argue that some safeguards have been weakened in the implementing acts: certain revocation mechanisms, for example, now only have to "hinder" linkability rather than prevent it.
2. **The face photo.** A facial image has been added to the minimum identification data. In June, member states agreed that national authorities may make it optional, but nothing requires them to.
3. **Who asks for what.** Every service that wants to read data from the wallet must register and declare which attributes it intends to request. That is an important safeguard, but it only works if the wallet clearly tells users when a request goes beyond what was declared.
4. **Fragmentation.** If every country arrives on a different schedule with a different implementation, the project's main value — using the same wallet across the whole EU — slips by years.

> **Tip:** if you already use IT-Wallet, open the documents section and check what you have loaded and when each item expires. And when a service asks you to identify yourself with the wallet, read the consent screen before confirming: it says exactly which data you are about to share, and that is where you can see whether you are being asked for more than necessary.

## What changes for developers

The December deadline applies to governments, but the real countdown for businesses is a different one. From **December 24, 2027**, private organisations that must use strong authentication by law or by contract — banks, financial services, transport, energy, healthcare, telecoms — will have to accept the wallet when a user asks to use it, with micro and small enterprises exempt. Very large online platforms under the Digital Services Act that require a login are covered as well. Even earlier, from July 2027, the new anti-money-laundering rules will allow digital identity to be used for customer verification.

For anyone building apps and services, that means preparing for three things: registering as a *relying party* in the country where you are established, integrating the credential presentation protocols defined by the European specifications, and above all rethinking what you actually ask users for. A service that today collects a scan of an entire ID document just to check someone's age will have an alternative that returns nothing more than a yes or a no.

## What to expect next

December will not be the day every European has a digital identity in their pocket, and 2027 probably won't be either. The Commission's stated goal is for 80% of citizens to be using a digital identity solution by 2030. The road there runs through countries that, like Italy, already have millions of users, and through the EU age-verification app, which is designed to fold into the national wallets.

The real contest, though, is about trust. A wallet holding all our documents is only useful if we are confident it will not become a way to follow us from one service to the next. The technical choices of the coming months — how a credential is revoked, which data is mandatory, what the verifier gets to see — will matter more than the launch date.
