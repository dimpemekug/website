---
title: "Projects, Topology and Exporting"
description: "Lab project management in NetCalc Pro, automatic topology diagram, CoreGraphics PDF reports, CSV/TXT export, and private CloudKit synchronization."
project: "netcalc"
order: 8
section: "Management & Sharing"
---

## Lab Project Management

In NetCalc Pro, designing a network topology is not confined to isolated calculations: configurations are organized into persistent, structured **Projects**.

Each project hosts a complete ecosystem of network appliances (`CiscoDevice`):

- **Routers and Switches**: with physical interfaces (`GigabitEthernet`, `FastEthernet`, `Serial`) and logical ports (802.1Q sub-interfaces and VLAN SVIs).
- **Routing Tables**: static routes and dynamic routing engines (OSPF, RIPv2, EIGRP).
- **Network Services**: dedicated LAN DHCP servers, NAT/PAT translation rules (with overload), Access Control Lists, and OS hardening parameters.
- **Lab Notes**: textual documentation for lab tasks, exam constraints, or topology requirements.

---

## Network Schematic & Topology Diagram (`TopologyView`)

**NetCalc Pro 1.1** introduces an automated topology visualizer (`TopologyBuilder`), displayed directly in the project summary:

- **Automatic Interconnection Detection**: by analyzing the IP addresses and subnet masks across all interfaces, the algorithm automatically identifies:
  - **Point-to-Point Links**: interconnected router pairs on `/30` or `/31` subnets or matching subnets.
  - **Multi-Access LAN Segments**: switches and routers converging on common broadcast domains.
- **Interactive, Zoomable Canvas**: the interactive map highlights device roles, interface identifiers, subnet labels, and default gateways, allowing you to visually review the entire architecture before deployment.
- **Vector PDF Integration**: rendered in high-resolution vector graphics as a dedicated page in printable PDF project reports.

---

## Local-First Architecture and Full Undo/Redo

NetCalc Pro implements a strictly **Local-First** design powered by **SwiftData**:

### 1. Dedicated Local Store

Project data resides in a local application container (`~/Library/Application Support/NetCalc Pro/NetCalc.store`). The app requires zero network access to launch, read, or modify projects, ensuring instant responsiveness in offline environments and classrooms.

### 2. Context-Level Undo/Redo (`UndoManager`)

All destructive or mutative actions (creating/deleting projects, adding devices, modifying interfaces, or editing routing tables) register with the `UndoManager` bound directly to SwiftData's `ModelContext`.

- On **macOS**: use standard system shortcuts <kbd>⌘</kbd><kbd>Z</kbd> (Undo) and <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd> (Redo), or the _Edit_ menu.
- On **iPad/iPhone**: support for three-finger gestures and navigation undo buttons.

---

## Export Options

NetCalc Pro offers three export formats tailored for academic and enterprise workflows:

### 1. Vector PDF Documents (CoreGraphics & CoreText)

PDF export (`ProjectPDFExporter`) is implemented by drawing directly with Apple's low-level **CoreGraphics** and **CoreText** engines, avoiding WebKit HTML conversions or external dependencies:

- **Flawless Typography**: standard _US Letter_ format, high-contrast headers, and pixel-aligned monospaced data tables.
- **Dedicated Topology Graphic Page**: renders the visual network diagram and interconnecting links.
- **Comprehensive Device Specs**: lists hostnames, device types, interfaces, IPv4/IPv6 addresses, subnet masks, network IDs, and broadcast addresses.
- **VLSM Plan Exporting**: subnetting plans export with the same aesthetic polish, including ordered subnets and capacity metrics.

### 2. CSV Inventory Table

Generates RFC 4180-compliant CSV files for spreadsheet applications (Microsoft Excel, Apple Numbers, Google Sheets):

```csv
IP,MASK,GATEWAY,DEVICE,INTERFACE
192.168.1.1,255.255.255.0,192.168.1.1,R1,GigabitEthernet0/0/0
192.168.2.1,255.255.255.0,192.168.2.1,R1,GigabitEthernet0/0/1
```

Properly handles quotes and comma escaping for complex descriptions.

### 3. Full Cisco IOS TXT Script

Produces a consolidated text file containing all project device configurations, sorted alphabetically by hostname and separated by structured comment banners:

```text
! ============================================================
! Project: CCNA Lab Module 3
! Exported on Oct 21, 2026, 11:30
! ============================================================

! --- Router R1 ---
hostname R1
...
```

Ready to save to disk or share via system channels (Mail, AirDrop, Messages).

---

## Private iCloud Synchronization (CloudKit)

Projects synchronize across all devices signed into your Apple ID without requiring user accounts or third-party servers.

### 1. User Private Database

Sync runs via **NSPersistentCloudKitContainer** targeting the private container `iCloud.com.dimpemekug.netcalc`. Data travels exclusively through Apple's end-to-end encrypted infrastructure, maintaining complete privacy.

### 2. Preferences Cloud Synchronization

App preferences (language, light/dark theme, accent color, terminal styling, and Beginner mode) sync in real time across Mac, iPad, and iPhone via `NSUbiquitousKeyValueStore` (`PreferencesCloudSync`).

### 3. Real-Time Sync Diagnostics (`CloudSyncMonitor`)

Under **Settings → Synchronization**, NetCalc Pro provides a diagnostic monitor showing sync status, last update timestamp, remote/local record counts, and network troubleshooting guidance.
