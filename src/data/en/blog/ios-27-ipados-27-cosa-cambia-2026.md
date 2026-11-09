---
title: "iOS 27 and iPadOS 27: what changes in Europe and for developers"
seoTitle: "iOS 27 and iPadOS 27: what changes in Europe"
description: iOS 27 and iPadOS 27 shipped on September 14, 2026, but their headline feature, Siri AI, is missing in Europe. What actually reaches iPhones and iPads in the EU, and what developers need to check before building with the new SDK.
seoDescription: "iOS 27 shipped on September 14, 2026 without Siri AI in the EU: what reaches European iPhones and iPads, and what developers need to check."
pubDatetime: 2026-11-09T08:00:00Z
related:
  - macos-27-golden-gate-fine-intel-2026
  - prompt-injection-sicurezza-agenti-ai-2026
  - modelli-ai-on-device-2026
tags:
  - operating-systems
  - mobile
  - software-development
  - ai
draft: false
---

On September 14, 2026 Apple released iOS 27 and iPadOS 27, alongside [macOS 27 Golden Gate](/en/posts/macos-27-golden-gate-fine-intel-2026/). The feature Apple built its whole presentation around is Siri AI, an assistant rewritten from scratch that can hold a conversation. If you are reading from Europe, though, start with one detail: on iPhones and iPads sold in the European Union Siri AI is not available, and Apple has not given a date. The rest of the update is there, and it is more useful than the silence on the European side suggests.

<figure>
  <img
    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80"
    alt="An iPhone in a brown leather case with its lock screen on, lying on a wooden table next to a pair of AirPods Pro"
  />
  <figcaption class="text-center">
    An iPhone 11 is enough to install iOS 27; Siri AI needs at least an iPhone 15 Pro, and a country outside the EU.
  </figcaption>
</figure>

## Which iPhones and iPads get it

iOS 27 requires an A13 Bionic chip or later: in practice every iPhone that ran iOS 26, from the iPhone 11 and the second-generation iPhone SE onward. No model loses support this year.

For iPadOS 27 the list starts with the ninth-generation iPad, the sixth-generation iPad mini, the fourth-generation iPad Air, and the second-generation 11-inch and fourth-generation 12.9-inch iPad Pro.

The real dividing line is elsewhere, in the Apple Intelligence features:

1. **Siri AI on iPhone** requires an iPhone 15 Pro or 15 Pro Max, or any iPhone 16 or later.
2. **Siri AI on iPad** requires an iPad with an M1 chip or later, or the iPad mini with A17 Pro.
3. **Expressive voices and improved dictation on iPad** require an M4 chip or later with at least 12 GB of memory.
4. **The heaviest features**, such as image generation, have daily limits that Apple does not publish, higher for paying iCloud+ subscribers.

## Siri AI and Europe

Apple announced the European delay on June 8, 2026, the same day as the keynote, and blamed the Digital Markets Act. According to Apple, European regulators read the law as requiring any AI system to get broad access to the device and the ability to act on its own, without the user seeing or controlling what happens. Apple argues this is a security and privacy risk, citing research on agents that can be hijacked to steal data: the same problem as [prompt injection](/en/posts/prompt-injection-sicurezza-agenti-ai-2026/). Apple's alternative proposals, including a system-level intermediary and a gradual rollout over 18 months, were not accepted.

The practical result, checked at the release of iOS 27.2 on October 26:

1. **On iPhone, iPad and Apple Watch** there is no Siri AI: no Siri app to pick up past conversations, no Siri mode in the Camera, no writing tools built into Siri. Apple Watch is excluded because it depends on the paired iPhone.
2. **On Mac and Apple Vision Pro** Siri AI works in Europe too, as long as the device is set to a supported language.
3. **Italian, German and other EU languages are not there yet.** Siri AI launched in English only, as a beta with a waitlist; version 27.2 added French, Japanese, Korean, Portuguese and Spanish.
4. **European developers** cannot test or use the new Siri AI features in their apps on iOS, iPadOS and watchOS.

## What still reaches iPhone and iPad

Take Siri AI away and iOS 27 is still an update with plenty of concrete changes:

1. **Adjustable Liquid Glass.** Settings has a slider that takes the system look from clear to fully tinted: Apple's answer to the complaints about readability in iOS 26.
2. **Performance.** Apple claims faster app launches, quicker loading of freshly taken photos and faster AirDrop transfers.
3. **Parental controls.** With Ask to Browse a child has to ask permission for new websites; there are also app schedules and daily limits by category.
4. **Separate volumes** for alarms and timers, and a custom equalizer for AirPods.
5. **Safari** groups tabs by topic and can tell you when a page changes, for example when a price drops.
6. **On iPad**, iPhone apps can be resized like any other window, and transfers to and from an external drive are faster.

## What changes for developers

Xcode 27 brings Swift 6.4 and the iOS 27 SDK. Rebuilding an app with the new SDK is not painless, for two reasons Apple announced a year in advance:

1. **The scene life cycle is mandatory.** Technote TN3187 is explicit: from the major release after iOS 26, an app built with the latest SDK that does not adopt `UIScene` will not launch. If everything still lives in `UIApplicationDelegate`, you need to add a `UIWindowSceneDelegate` and move window setup and active/background handling there. Supporting multiple windows is not required: adopting scenes is.
2. **Liquid Glass can no longer be postponed.** The `UIDesignRequiresCompatibility` key in `Info.plist`, which let apps keep the old look on iOS 26, is ignored when you build for iOS 27 or later. An app that relied on it changes appearance on its first Xcode 27 build, even if nothing in the code changed.
3. **Screens no longer have a fixed shape.** Resizable iPhone apps on iPad and the iPhone Duo, the first foldable iPhone, on sale since October 23 with a 7.6-inch inner screen and a 5.4-inch outer one, reward adaptive layouts and punish those designed for a single size. The iPhone Duo uses Touch ID: any text that says "use Face ID" is wrong there.

> **Tip:** to find out whether an app is at risk without installing Xcode 27, run it on iOS 26 and watch the console: if you see "UIScene lifecycle will soon be required", it will not launch with the new SDK. Then search the project's `Info.plist` files, extensions included, for `UIDesignRequiresCompatibility`.

Apple has not yet announced a date after which App Store Connect will only accept apps built with the iOS 27 SDK: the requirement in force since April 28, 2026 is still Xcode 26. In past years the bar has gone up in April, but until Apple announces it that is a guess. The right time to migrate is still now, calmly, rather than right before the deadline.

## What to expect next

iOS 27.3 has been in beta since November 3 and Apple keeps adding languages to Siri AI, but the European sticking point is not technical: it depends on an agreement with the Commission that has no deadline today. Even once Italian or German joins the language list, iPhones sold in the EU will still need that agreement.

In the meantime, for people using iPhones and iPads in Europe, iOS 27 is mostly a refinement update: more readable, faster, with parental controls that are finally serious. For developers it is the year two convenient postponements, the old life cycle and the old look, stop working: better to find out on a test build than from the reviews.
