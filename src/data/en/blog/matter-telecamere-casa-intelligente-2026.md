---
title: "Matter and cameras: the smart home's last silo is finally cracking"
description: With Matter 1.5, cameras and video doorbells finally join the common standard for connected homes. What that means if you already own bulbs and thermostats from different brands, why video is the hardest piece, and what to check before you buy.
pubDatetime: 2026-09-17T08:00:00Z
tags:
  - smart-home
  - iot
  - privacy
draft: false
---

Anyone who has built a connected home one piece at a time knows the problem: bulbs from one brand, a thermostat from another, plugs from a third, and three different apps to turn them on. Matter was created in 2022 for exactly this, and over the years it has absorbed lights, plugs, sensors, locks, and appliances. One piece stayed outside, though, and it was the most delicate one: cameras.

<figure>
  <img
    src="https://images.unsplash.com/photo-1752262167753-37a0ec83f614?w=1200&q=80"
    alt="A white smart home hub on a small wooden table next to a remote control and a plant"
  />
  <figcaption class="text-center">
    The hub is where the standards meet: if they speak the same language, the apps collapse into one.
  </figcaption>
</figure>

## What Matter 1.5 adds

Version 1.5 of the standard, published by the Connectivity Standards Alliance in November 2025, introduces the **camera** device type: video doorbells, security cameras, baby monitors. Not just an on/off command, but the video stream itself, motion events, pan-tilt-zoom controls, and snapshots.

Video does not travel over Thread, which is built for small messages and low power draw: it goes over Wi-Fi or Ethernet using WebRTC, the same mechanism behind video calls in a browser. The 1.5.1 update, released on March 31, refined exactly this part, improving how multiple audio and video streams are handled together.

The same release also brought in **closures** — blinds, shutters, gates — and richer energy management, including the ability to describe tariffs and time bands to the devices that consume the most.

## Why cameras were the hard part

A light bulb has three things to say: on, off, how bright. A camera has a continuous stream, a latency budget, an encoding to negotiate, recordings to store somewhere and, above all, a level of privacy no other device in the house comes close to.

It is also the category where the business model pushes hardest against the standard: many inexpensive cameras are subsidised by a cloud subscription, and a common format makes switching providers easier. No surprise, then, that adoption is slower here than elsewhere: as of June 2026, SmartThings was the only major platform with Matter camera support actually switched on, while Apple, Google, and Amazon had committed to it without enabling it yet.

## What you need to actually use it

- **An up-to-date hub.** Support does not depend on the camera alone but on the controller: your HomePod, Echo, Nest Hub, or SmartThings has to handle version 1.5.
- **A network that holds up.** Local video does not eat internet bandwidth, but it does eat Wi-Fi bandwidth. A 2K camera on a saturated network is noticeable immediately.
- **Careful with the wording.** "Works with Matter" on a box can mean a great many things. What counts is the version, and which device type is certified.

## The open problems

1. **The standard covers common functions, not all of them.** Face recognition, detection zones, and smart recording often stay in the manufacturer's app: with Matter you get the stream, not necessarily everything else.
2. **Where the recordings end up.** An open protocol says nothing about where video is stored. The manufacturer's cloud is still the default on many models, with everything that implies.
3. **The past does not update.** Cameras already in the house rarely become Matter devices through a firmware update: it takes new hardware, or a software bridge that adds another moving part.
4. **Certification comes before implementation.** A published standard is not a working standard until the platforms turn it on, and they set the timeline.

> **Tip:** before buying a "Matter-compatible" camera, look for two things on the spec sheet: which Matter version is certified, and whether the device works **without a cloud account**. The second answer tells you far more than the first about what happens to your video.

## What to expect next

The path is the one already walked with lighting: first the standard, then two years of partial implementations, then the moment you stop wondering whether a device will work with what you already own. For cameras, that moment arrives when the three biggest platforms enable support and manufacturers stop treating subscriptions as the only way to recoup their costs.

In the meantime, it is worth noting what a common standard means for privacy at home: a protocol that works locally makes it possible to run a connected home that never sends a single frame outside your walls. Possible, not automatic — but before, it wasn't even possible in theory.
