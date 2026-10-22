---
title: "Introduction to CodeVault"
description: "Overview of CodeVault: a library for code snippets and notes on iPhone, iPad and Mac, built with SwiftData, with iCloud sync and biometric lock."
project: "codevault"
order: 1
section: "Getting Started"
---

## What is CodeVault

**CodeVault** is a native app for **iOS/iPadOS 18+** and **macOS 15 Sequoia+** designed for developers, sysadmins and students who want to keep their code snippets and technical notes in one place and find them in seconds.

It is written in **Swift 6** with **SwiftUI** and **SwiftData** (MVVM architecture) and ships as a single universal app: one purchase covers iPhone, iPad and Mac, and your data syncs through your iCloud account.

---

## Principles and Architecture

### 1. Privacy First
- **No developer servers**: your snippets and notes never pass through intermediate servers or third-party databases.
- **Your own iCloud**: sync uses the private CloudKit database of your Apple ID (container `iCloud.com.dimpemekug.codevault`), which the developer cannot access.
- **No account, no telemetry**: no sign-up, analytics, third-party SDKs or ads.

### 2. SwiftData with a Versioned Schema
Persistence relies on **SwiftData** with a versioned schema (`SnippetSchemaV1`–`SnippetSchemaV9`) and an explicit migration plan (`SnippetMigrationPlan`). Every app update carries your snippets, notes, categories and tags forward without losses.

### 3. One Interface per Device
- **On Mac**: a sidebar with the sections, multiple columns, menu bar commands with keyboard shortcuts and a dedicated Settings window (<kbd>⌘</kbd> <kbd>,</kbd>).
- **On iPad**: sidebar and multiple columns, with hardware keyboard support.
- **On iPhone**: compact navigation with a bottom tab bar or a toolbar menu (from iOS 26), haptic feedback and biometric unlock.

### 4. Three Visual Styles
In Settings you can pick one of three styles; they change only the look, never the features:
- **Terminal** (default): dark and monospaced, with an amber accent.
- **Typographic**: light and minimal, with large titles and card-free lists.
- **Glass**: system surfaces and rounded cards, in line with Liquid Glass.

The interface is available in Italian, English, German, Spanish, French, Portuguese and Russian; you can switch language in Settings without changing the system language.

---

## Quick Workflow

1. **Create a snippet**: press <kbd>⌘</kbd> <kbd>N</kbd> (Mac, or iPad with a keyboard) or tap `+`. For a note, use <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>N</kbd>.
2. **Pick the language**: choose one of the 20 supported languages; for a new snippet CodeVault tries to detect it from the code you type or paste.
3. **Organize**: assign a category and one or more tags, and pin the items you use most.
4. **Search**: full-text search looks at titles, descriptions, code, language, categories and tags.
5. **Copy, share or export**: copy code with one tap, share it as Markdown or export the whole library to JSON or Markdown.
