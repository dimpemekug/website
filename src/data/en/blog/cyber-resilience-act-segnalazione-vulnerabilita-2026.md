---
title: "Cyber Resilience Act: exploited vulnerabilities must now be reported within 24 hours"
description: As of September 11, 2026, the first obligations of the EU regulation on the cybersecurity of digital products kick in. Anyone selling software or connected devices in the Union must report exploited vulnerabilities and severe incidents on a strict timeline. What changes and how to get ready.
pubDatetime: 2026-09-11T08:00:00Z
tags:
  - cybersecurity
  - compliance
  - open-source
featured: true
draft: false
---

For years, the security of an app or a connected device was mostly a matter of goodwill: conscientious vendors published patches and advisories, the others could stay quiet and hope nobody noticed. With the Cyber Resilience Act (EU Regulation 2024/2847), that choice is gone. The regulation has been in force since December 2024 but applies in stages: most obligations arrive in December 2027, while today, September 11, 2026, the first piece goes live. Arguably the most concrete one: the duty to report.

<figure>
  <img
    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
    alt="An illuminated electronic circuit on a dark surface"
  />
  <figcaption class="text-center">
    The Cyber Resilience Act treats software and connected devices alike: products that must stay secure for their whole lifetime.
  </figcaption>
</figure>

## What starts today

From today, manufacturers of "products with digital elements" — software, apps, connected devices, components — made available on the European market must notify two things: **actively exploited vulnerabilities** and **severe incidents** affecting the security of the product. Notifications go through a single platform run by ENISA and reach the national CSIRT of the country where the manufacturer has its main establishment.

The detail many overlook: the obligation isn't limited to new products. It also covers those already on the market, including ones released before the regulation came into force.

## The deadlines to remember

- **24 hours: the early warning.** From the moment the manufacturer learns a vulnerability is being exploited, it has one day for a first report. You don't need a fix yet; you need to say the problem exists.
- **72 hours: the actual notification.** A fuller description of the issue, its severity, and any corrective measures or mitigations already available.
- **The final report.** Within 14 days of a fix becoming available, for vulnerabilities; within one month of the notification, for severe incidents.
- **Informing users.** Beyond the authorities, the manufacturer must tell the people using the product and explain what they can do to protect themselves.

## Who's affected (and who isn't)

The regulation doesn't look at company size: the indie developer selling an app and the small maker of smart devices are in scope too. Products already covered by sector rules, such as medical devices and cars, are out, as are pure cloud services, which fall under a different directive, NIS2.

For open source, the line is commercial activity: a project developed and distributed on a non-profit basis is excluded, while foundations and organizations that steadily support projects used in commercial products — "stewards," in the regulation's wording — get a lighter regime, but not an empty one.

## The problems still unsolved

1. **Noticing you're under attack.** The 24 hours start when you become aware of the exploited vulnerability. Without logs, monitoring, and a channel for outside reports, the risk isn't missing the deadline: it's never knowing the clock started.
2. **Dependencies.** Often the flaw isn't in code you wrote but in a third-party library. The regulation expects you to know what's inside your product and, if you find a problem in an open source component, to report it to its maintainers as well.
3. **Who's on call.** In small teams nobody is reachable on a Saturday night. A one-day deadline forces you to decide in advance who assesses a report and who sends it.
4. **Where "commercial" begins.** Donations, sponsorships, paid editions of a free project: working out when an open source project becomes commercial is still open to interpretation, and the Commission's guidelines will matter a lot.

> **Tip:** write a single page today with three answers: where security reports land (a dedicated address or a `security.txt` file on your site), who decides whether a vulnerability is actually exploited, and who holds the credentials to submit the notification. It's an hour of work that saves you from improvising when time is short.

## What to expect from here

Reporting is just the beginning. From December 2027 the essential requirements arrive: security by design, security updates guaranteed for the whole declared support period, technical documentation listing components, and CE marking. Those who use these fifteen months to build a vulnerability-handling process will reach the deadline with half the work done. Those who wait will find the hard part isn't the paperwork, but knowing at any moment what's actually running inside their products.
