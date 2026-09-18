---
title: "macOS Golden Gate: the first Mac without Intel"
description: With version 27, released on September 14, macOS runs on Apple silicon only. Intel Macs stay on Tahoe, Rosetta 2 is on its last stretch, and anyone shipping an app has a check to run today. What changes, both for people using a Mac and for people building on it.
pubDatetime: 2026-09-16T08:00:00Z
tags:
  - macos
  - operating-systems
  - software-development
featured: true
draft: false
---

On September 14 Apple released macOS 27, Golden Gate, and with it closed a transition that started in June 2020. It is the first version of macOS that runs exclusively on Macs with Apple silicon: no Intel Mac can install it, not even the 2019 Mac Pro. Six years flat from the announcement, which for an architecture change is remarkably fast.

<figure>
  <img
    src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&q=80"
    alt="A silver iMac with its screen off on a white desk, keyboard and trackpad in front of it"
  />
  <figcaption class="text-center">
    Intel Macs are not going away: they stay on Tahoe, which will keep receiving security updates.
  </figcaption>
</figure>

## What changes if you have an Intel Mac

Nothing, today. The Mac keeps working exactly as before: it stays on macOS 26 Tahoe, the last version to support the Intel architecture, and — following Apple's usual practice of covering the two previous releases — it will keep getting security updates for another couple of years.

What changes is the future: no new system features, and above all a gap that widens with apps. Developers raise the minimum requirement once most of their users have moved, and from today those users have one more reason to move. Within a year or two, new versions of many apps will say "requires macOS 27".

## What changes if you build apps

Here the interesting part is Rosetta 2, the translator that let Intel apps run on Apple silicon. Golden Gate is **the last version with full Rosetta 2**: from macOS 28, expected in 2027, only a reduced form will remain, meant for older games that depend on Intel frameworks. Apple has been saying so for a while, and macOS 26.4, back in February, already started warning about installed apps that will stop working.

The check takes two minutes. On a binary, or inside a bundle:

```sh file=check-architecture.sh
file /Applications/SomeApp.app/Contents/MacOS/SomeApp
lipo -archs /Applications/SomeApp.app/Contents/MacOS/SomeApp
```

If the answer contains only `x86_64`, that app lives on Rosetta and has an expiry date. If it contains `arm64`, alone or together with `x86_64` (a universal binary), it is fine.

If you ship software, it is worth checking what sits *inside* the app too, which is the part people forget: command-line helpers, third-party frameworks, plugins, precompiled libraries. A native app that loads an Intel-only dylib is not a native app.

## The open problems

1. **Precompiled dependencies.** Libraries that arrive as ready-made binaries are where the transition stalls: if the upstream project never publishes an arm64 build, the problem is not yours but you are the one stuck with it.
2. **Software nobody maintains any more.** Professional utilities, audio plugins, internal company tools: plenty of working software has no one left to update it. For that code, macOS 28 is the end.
3. **x86 virtual machines.** With Boot Camp gone and Rosetta no longer complete, anyone who needs to run x86 Windows or Linux will have to go through emulation, with the performance that entails.
4. **Fleets in the workplace.** A 2020 Intel Mac is five years old: in many fleets it is still perfectly serviceable, and replacement planning now has a date attached.

> **Tip:** open Activity Monitor, add the "Kind" column, and sort by it. You will see at a glance which running apps are still Intel. It is the fastest way to find out what is ahead of you, and the list is usually shorter than you feared.

## What to expect next

The Intel-to-Apple-silicon transition will truly end with macOS 28, when Rosetta 2 shrinks to a remnant for games. From there the Mac becomes a single-architecture platform, with benefits that are already visible: smaller binaries, fewer cases to test, predictable performance.

For anyone writing Mac apps the practical consequence is simple and almost liberating: you can stop building universal binaries and stop reasoning about two architectures. It is worth doing thoughtfully, though, because the moment you raise the minimum requirement is also the moment you decide which users you leave behind — and on a Mac that still works beautifully, that choice carries some weight.
