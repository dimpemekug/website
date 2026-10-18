---
title: "Introduction to CodeVault"
description: "Overview of CodeVault: modern snippet and notes manager for iOS and macOS built with SwiftData, CloudKit synchronization, and biometric security."
project: "codevault"
order: 1
section: "Getting Started"
---

## What is CodeVault

**CodeVault** is a native application for **iOS 18+** and **macOS 15+** designed for developers, systems engineers, and students who want to organize their library of code snippets and technical notes in a fast, elegant, and secure environment.

Engineered entirely in **Swift 6** using a modern **MVVM + SwiftData** architecture, CodeVault provides a first-class Apple platform experience: from an adaptive layout across iPhone, iPad, and Mac to automatic private iCloud synchronization via CloudKit.

---

## Core Principles and Architecture

### 1. Absolute Privacy and Zero-Knowledge Design
- **No proprietary servers**: your snippets and notes never transit through middleman servers or third-party databases.
- **Personal iCloud**: sync is powered directly by your personal CloudKit private container (`iCloud.com.dimpemekug.codevault`).
- **No telemetry or tracking**: the app contains zero analytics, external crash loggers, or ads.

### 2. Modern Persistence: Versioned SwiftData Schema
Local storage is powered by **SwiftData**, with a versioned schema (`SnippetSchemaV1`–`SnippetSchemaV9`) migrated through an explicit migration plan (`SnippetMigrationPlan`). This ensures strict data integrity and backward compatibility across app updates.

### 3. Seamless Multi-Platform Experience
- **macOS**: three-column split view (collections sidebar, snippet list, central editor), native system keyboard shortcuts, `NSPasteboard` integration, and contextual menus.
- **iPadOS**: full support for Split View, Stage Manager, and hardware keyboards.
- **iOS**: fluid single-column navigation with haptic feedback, quick copy gestures, and instant biometric authentication.

---

## Quick Workflow

1. **Create an item**: press <kbd>⌘</kbd> <kbd>N</kbd> (Mac/iPad) or tap `+` to add a new snippet or technical note.
2. **Choose programming language**: select from over 20 supported languages for syntax highlighting and formatted code presentation.
3. **Organize with folders and tags**: group related snippets into folders or assign rapid tags to categorize across projects.
4. **Instant search**: type in the search bar to filter across titles, code content, descriptions, and tags in real time.
5. **Copy or export**: copy code with one click or export your library as a JSON backup or Markdown collection.
