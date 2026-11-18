---
title: "AI agents on the Mac: what macOS 27.3 changes for access to your data"
seoTitle: "AI agents on the Mac: macOS 27.3 and Full Disk Access"
description: Since 16 November 2026 the second beta of macOS 27.3 changes how Full Disk Access and control of other apps are granted, with AI agents in mind. What changes, what stays the same and what to check in your Mac's settings today.
seoDescription: "What macOS 27.3 changes for AI agents that ask for Full Disk Access, and which Mac permissions to check today to keep your data safe."
pubDatetime: 2026-11-18T15:00:00Z
related:
  - prompt-injection-sicurezza-agenti-ai-2026
  - agenti-ai-colleghi-digitali-2026
  - macos-27-golden-gate-fine-intel-2026
tags:
  - macos
  - ai-agents
  - privacy
  - cybersecurity
draft: false
---

An AI assistant working on your Mac on your behalf needs to see files, read mail, open apps and click where it's needed. To do so it asks for permissions designed for other kinds of programs, and the most powerful one, Full Disk Access, opens practically everything. Apple has decided to make that choice more explicit: the changes are in the second beta of macOS 27.3, announced on 16 November 2026, and don't have a release date yet. In the meantime, the permissions you've already granted stay where they are, which makes this a good moment to review them.

<figure>
  <img
    src="https://images.unsplash.com/photo-1654588831833-6658f38580dc?w=1200&q=80"
    alt="Open copper padlock resting on a laptop keyboard against a dark background"
  />
  <figcaption class="text-center">
    Full Disk Access opens almost every door on a Mac: with AI agents, Apple wants whoever grants it to notice.
  </figcaption>
</figure>

## The problem: a permission designed for backups

macOS protects your personal folders, mail, messages, photos and browser history with separate permissions: an app has to ask, and you can say no. Full Disk Access skips almost all of these checks. It exists for a practical reason: a backup program needs to be able to copy everything.

On 2 October 2026 Apple told developers that some of them use it in ways that put users at risk, and that the risk grows as AI agents become more capable and autonomous. For communication apps, it added, that permission also affects the privacy of the people you talk to. In September an Inc. columnist reported that an AI assistant's Mac app could read their messages even though they believed they had denied it permission; the company replied that access had been granted.

## What changes in the macOS 27.3 beta

1. **An explicit warning for Full Disk Access.** Before you grant it, a message says your Mac will no longer be able to protect your data from that app, and lists what it will be able to do: read, change, delete and export all your data, view hidden and recently deleted photos, view browser history and activity. You have to read and approve each item.
2. **Controlling other apps becomes a category of its own.** The category that until now combined device control and data access is split in two: Accessibility on one side, and on the other a new entry, *System & App Protection Override*, where you choose which apps another app may control, asking first or at any time.
3. **A menu bar indicator.** When one app is controlling another, an indicator shows it, as already happens for the camera and microphone.
4. **Permissions already granted stay valid.** Apps that already have Full Disk Access keep it; backup programs and assistive technologies can ask Apple to keep working as before.

Apple is also asking developers to make their apps work with access to only a few folders or apps. Until the final release, some details may still change.

## What doesn't change

The new rules don't stop you from giving an agent all the access you want: they just make it more visible. And they don't solve the main problem with agents, [prompt injection](/en/posts/prompt-injection-sicurezza-agenti-ai-2026/): an email, a web page or a document with hidden instructions can persuade the agent to do something you didn't ask for, using the very permissions you gave it. The broader the permissions, the bigger the possible damage.

## What to check today

There's no need to wait for macOS 27.3. In System Settings › Privacy & Security:

1. **Full Disk Access.** Look at the list and remove any app that isn't a backup program, an antivirus or a tool you know exactly why it needs it.
2. **Accessibility.** It allows an app to read the screen and drive the Mac with clicks and keystrokes: it's what agents working inside apps use. Leave it only to those that must have it.
3. **Automation.** It shows which apps can control others, such as Mail or the Finder. Remove any pairs you don't recognise.
4. **Screen & System Audio Recording.** An agent that sees your screen also sees the passwords and messages that appear on it.

When an agent asks for access to files, give it a working folder rather than the whole disk, and keep sensitive documents elsewhere.

> **Tip:** to try out a new AI agent, create a separate user account on your Mac, without your mail, messages and passwords. If the agent does something unexpected, it does it in an empty room.

## What to keep in mind

AI agents are useful precisely because they act, and to act they need access: the point isn't to deny it, but to grant it knowing what you're granting. The changes in macOS 27.3 go in that direction, with clear warnings and a visible indicator, but they leave the decision to you. Reviewing your Mac's permissions today, and giving each agent the bare minimum, protects your data better than any future warning.
