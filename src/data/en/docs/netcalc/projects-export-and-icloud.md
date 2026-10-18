---
title: "Projects, Exporting & iCloud"
description: "Manage lab projects in NetCalc Pro, context-aware Undo/Redo, vector PDF/CSV/TXT export, and private CloudKit synchronization."
project: "netcalc"
order: 7
section: "Management & Sharing"
---

## Lab Project Management

In NetCalc Pro, network topology planning is not limited to isolated scratchpad calculations. Entire multi-device labs can be saved, structured, and maintained in persistent **Projects**.

Each project organizes a complete set of network equipment (`CiscoDevice`):

- **Routers and Switches**: with physical interfaces (`GigabitEthernet`, `FastEthernet`, `Serial`) and logical ports (802.1Q sub-interfaces and VLAN SVIs).
- **Routing Engines**: static route entries and dynamic routing protocols (OSPF, RIPv2, EIGRP).
- **Services & Security**: dedicated LAN DHCP pools, NAT/PAT address translation rules, Access Control Lists, and system hardening parameters.
- **Lab Notes**: freeform text documentation to record assignment requirements, topology constraints, or exam criteria.

---

## Local-First Architecture & Full Undo/Redo

NetCalc Pro implements a strictly **Local-First** persistence model built on **SwiftData**:

### 1. Dedicated Local SQLite Store

All project records reside in an application-specific directory (`~/Library/Application Support/NetCalc Pro/NetCalc.store`). The app requires zero network connectivity to launch, query, or edit projects, ensuring instant responsiveness in classrooms or offline test labs.

### 2. Multi-Level Undo and Redo (`UndoManager`)

All destructive or structural changes (creating or deleting projects, adding devices, modifying interfaces, or removing static routes) register with an `UndoManager` bound directly to the SwiftData `ModelContext`.

- On **macOS**: use standard system shortcuts <kbd>⌘</kbd> <kbd>Z</kbd> (Undo) and <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> (Redo), or the _Edit_ menu.
- On **iPad/iPhone**: standard three-finger gestures and navigation bar undo buttons provide full history traversal.

---

## Comprehensive Export Options

NetCalc Pro offers three export workflows designed for documentation, evaluation, and physical deployment:

### 1. Vector PDF Reports (CoreGraphics & CoreText)

PDF export (`ProjectPDFExporter`) is rendered directly using Apple's low-level graphics frameworks (**CoreGraphics** and **CoreText**), avoiding WebKit/HTML overhead or third-party dependencies:

- **Flawless Typography**: standardized _US Letter_ pagination, clean headings, and monospaced data grids.
- **Detailed Summary**: prints hostname, device type, configured interfaces, IP addresses, subnet masks, calculated network IDs, and broadcast addresses for each apparatus.
- **VLSM Plan PDFs**: subnet allocation tables can also be exported to matching vector PDFs.

### 2. CSV Spreadsheets for Network Inventories

Generates RFC 4180-compliant spreadsheets suitable for import into Excel, Apple Numbers, or Google Sheets:

```csv
IP,MASK,GATEWAY,DEVICE,INTERFACE
192.168.1.1,255.255.255.0,192.168.1.1,R1,GigabitEthernet0/0/0
192.168.2.1,255.255.255.0,192.168.2.1,R1,GigabitEthernet0/0/1
```

Includes automatic quote escaping for interface descriptions containing commas or special characters.

### 3. Plain Text (TXT) Cisco IOS Master Scripts

Generates a consolidated text file containing all CLI configuration blocks for every device in the project, alphabetically sorted by hostname and partitioned with formatted comment banners:

```text
! ============================================================
! Project: CCNA Module 3 Capstone Lab
! Exported on Oct 18, 2026, 6:45 PM
! ============================================================

! --- Router R1 ---
hostname R1
...
```

Can be saved to disk or dispatched immediately via system share sheets (AirDrop, Mail, Messages).

---

## Private iCloud Synchronization (CloudKit)

Your projects synchronize seamlessly across Mac, iPad, and iPhone signed in with the same Apple ID, without requiring user accounts or third-party servers.

### 1. Private User Database

Sync is managed by **NSPersistentCloudKitContainer** inside the private container `iCloud.com.dimpemekug.netcalc`.

- Data travels exclusively through Apple's end-to-end encrypted CloudKit infrastructure.
- The developer has zero access to user projects or network topologies.

### 2. Preferences Synchronization

Application settings (interface language, light/dark mode, accent palette, terminal theme, and Beginner/Expert mode) synchronize automatically via `NSUbiquitousKeyValueStore` (`PreferencesCloudSync`). Settings sync can be disabled independently if you prefer different visual themes on Mac and mobile.

### 3. Real-Time Diagnostics (`CloudSyncMonitor`)

Under **Settings → Sync**, NetCalc Pro provides real-time CloudKit telemetry:

- **Account Status**: checks whether iCloud is available, restricted, or temporarily offline.
- **Server Record Inventory**: queries CloudKit directly to confirm the exact count of project records (`CD_Project`) and device records (`CD_ProjectDevice`) safely stored in the cloud.
- **Transient Error Handling**: differentiates temporary network dropouts from permanent conflicts, ensuring local offline changes are safely queued until reconnection.
