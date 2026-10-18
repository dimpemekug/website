---
title: "Synchronization and Backups"
description: "CloudKit multi-device sync, iCloud Key-Value Store preferences, and JSON or Markdown export in CodeVault."
project: "codevault"
order: 4
section: "Data & Sync"
---

## CloudKit Synchronization

CodeVault syncs seamlessly across your Mac, iPhone, and iPad using Apple's private **CloudKit** infrastructure:

- **Private Database**: data lives solely in your personal Apple CloudKit container. No third-party servers or external services can read your data.
- **Offline-First Resilience**: if network connectivity is absent or iCloud is disabled, `PersistenceController` automatically functions in local-only mode without intrusive popups.
- **Conflict Resolution**: changes made on different devices are resolved cleanly using last-write-wins timestamps.
- **Settings Sync**: user preferences (themes, syntax colors, sort order) sync separately via `NSUbiquitousKeyValueStore` so your workspace feels familiar on any device.

---

## Exports and Data Portability

CodeVault ensures your data remains open and accessible at all times:

### JSON Backup
Create an exact JSON archive of your entire workspace containing:
- All snippets with source code, language, timestamps, and descriptions.
- All technical notes with full Markdown text.
- Folder hierarchies and tag assignments.

The JSON backup can be restored anytime on any device running CodeVault.

### Markdown Export
Export your snippets and notes as plain `.md` files with fenced code blocks and YAML frontmatter, making them immediately usable in Obsidian, VS Code, or Git repositories.
