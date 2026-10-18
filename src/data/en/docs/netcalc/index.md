---
title: "Introduction to NetCalc Pro"
description: "Overview of NetCalc Pro for Mac, iPad, and iPhone: IPv4/IPv6 calculation, subnetting & VLSM planner, Cisco IOS configuration generator, and network linter for CCNA labs."
project: "netcalc"
order: 1
section: "Getting Started"
---

## What is NetCalc Pro?

**NetCalc Pro** is a professional networking utility natively built in Swift, SwiftUI, and SwiftData for **macOS 14+ (Sonoma, Sequoia, Tahoe)**, **iPadOS 17+**, and **iOS 17+**.

Designed specifically for networking students (school and university courses or **Cisco CCNA** exam preparation), instructors, system administrators, and network engineers, NetCalc Pro bridges the gap between theoretical calculations on paper and practical device configuration in simulators like **Cisco Packet Tracer**, **GNS3**, **EVE-NG**, or physical lab benches.

The application allows you to:

- **Calculate and Inspect IPv4 & IPv6 Addresses**: subnet masks, CIDR prefixes, wildcard masks, usable host ranges, and a 32-bit interactive color-coded binary view dynamically separating network and host bits.
- **Plan Subnets with Equal Blocks and VLSM**: partition networks into equal-sized subnets or variable-length blocks using a descending best-fit algorithm (_sorted largest first_), complete with a proportional address space occupancy map.
- **Generate Complete Cisco IOS Configurations**: ready-to-paste CLI scripts for routers and switches (physical interfaces, 802.1Q dot1Q sub-interfaces, static routes, OSPF, RIPv2, EIGRP, DHCP servers with dedicated pools, standard and extended ACLs, NAT/PAT overload, and system hardening).
- **Import Real Running-Configs**: parse pasted or saved outputs from `show running-config` to automatically reconstruct devices and interfaces inside your project.
- **Verify Lab Topologies (Network Linter)**: proactively diagnose configuration errors before powering on devices (overlapping subnets, duplicate IPs, unreachable next-hops, unadvertised OSPF networks, and misconfigured DHCP default-routers).
- **Export and Share**: generate pixel-perfect vector PDF reports rendered via CoreGraphics/CoreText, structured CSV spreadsheets, and clean plain-text CLI files.

---

## Architecture & Design Principles

NetCalc Pro is engineered according to Apple's modern software development best practices:

### 1. Pure Domain Model

The core domain model (`IPv4Address`, `IPv6Address`, `SubnetMask`, `SubnetPlan`, `CiscoDevice`, `NetworkLinter`) is built with pure Swift structs and enums, completely decoupled from SwiftUI and persistence frameworks. All calculations and parsing routines are 100% deterministic, side-effect free, and backed by comprehensive unit test suites.

### 2. Absolute Privacy & Local-First Philosophy

- **Zero Tracking**: the app contains no third-party SDKs, analytics frameworks, tracking pixels, or advertising libraries.
- **Complete Offline Operation**: all calculations, CLI generations, and diagnostic scans run entirely on the device's local CPU.
- **Private iCloud Synchronization**: projects, devices, and preferences optionally synchronize across your devices using Apple's private CloudKit database container (`iCloud.com.dimpemekug.netcalc`). Your data remains encrypted in your personal iCloud account and is never accessible to outside servers.

### 3. Adaptive Universal Interface

- **macOS and Regular Width iPad**: three-column layout via `NavigationSplitView` featuring a sidebar (Tools and Projects), a primary workspace, and an optional collapsible contextual inspector.
- **iPhone and Compact Split**: optimized `TabView` with dedicated segmented pickers for calculation modes, modal bottom sheets, and numeric keypads tailored for IP input.

---

## Documentation Roadmap

Explore the dedicated guides to master all aspects of NetCalc Pro:

- [IPv4, IPv6 Calculator & Subnetting](/en/projects/netcalc/docs/ip-calculator-and-subnetting): Input modes, binary inspection, and fixed-size subnetting.
- [VLSM Best-Fit Planner](/en/projects/netcalc/docs/vlsm-best-fit-planner): Variable-length subnet allocation, waste metrics, and automated device provisioning.
- [Cisco IOS Configuration Generator](/en/projects/netcalc/docs/cisco-ios-configurations): Routers, switches, VLANs, trunks, OSPF/EIGRP/RIP routing, DHCP, ACLs, and NAT.
- [Importing Running-Configs](/en/projects/netcalc/docs/import-running-config): Parsing existing Cisco CLI configurations into project topologies.
- [Lab Verification (Network Linter)](/en/projects/netcalc/docs/lab-linter-and-verification): Automated pre-flight detection of IP conflicts and routing issues.
- [Projects, Exporting & iCloud](/en/projects/netcalc/docs/projects-export-and-icloud): Lab management, CoreGraphics PDF reports, CSV export, and private CloudKit sync.
- [Shortcuts, Learning & Reference](/en/projects/netcalc/docs/shortcuts-and-learning): 21-chapter networking curriculum, searchable glossary, Beginner vs Expert modes, and macOS keyboard shortcuts.
