---
title: "Introduction to NetCalc Pro"
description: "Overview of NetCalc Pro for Mac, iPad, and iPhone: IPv4/IPv6 calculation, subnetting and VLSM, four network tools, Cisco IOS generator, topology diagram, and linter."
project: "netcalc"
order: 1
section: "Getting Started"
---

## What is NetCalc Pro?

**NetCalc Pro** is a professional networking utility built natively in Swift, SwiftUI, and SwiftData for **macOS 14+ (Sonoma, Sequoia, Tahoe)**, **iPadOS 17+**, and **iOS 17+**.

Designed specifically for networking students (computer science coursework and **Cisco CCNA** certification studies), educators, systems administrators, and telecommunications enthusiasts, NetCalc Pro bridges the gap between theoretical pencil-and-paper subnetting and practical appliance configuration in environments such as **Cisco Packet Tracer**, **GNS3**, **EVE-NG**, or physical hardware racks.

The app allows you to:

- **Calculate and Explore IPv4 & IPv6 Addresses**: subnet masks, CIDR prefixes, wildcard masks, host ranges, 32-bit binary breakdown with interactive boundary adjustment, and step-by-step arithmetic explanations ("How it's calculated").
- **Plan Subnet Partitioning**: fixed-size subnetting and advanced **VLSM** (_Variable Length Subnet Masking_) ordered by descending host capacity (_best-fit descending_) with a dynamic, zoomable address space map.
- **Access Advanced Network Tools**: route summarization/supernetting with ready-made Cisco IOS commands and Null0 routes, arbitrary IP range decomposition to minimal CIDR blocks with ACL lines, wildcard mask & ACL line-by-line packet simulator, and network comparison with asymmetric ping detection and Longest Prefix Match simulation.
- **Generate Cisco IOS Configurations**: comprehensive, annotated CLI syntax for routers and switches (interfaces, 802.1Q dot1Q sub-interfaces, IPv6 and OSPFv3, HSRP redundancy, `ip helper-address` DHCP relay, Spanning Tree, EtherChannel, Port Security, DHCP, ACLs, NAT/PAT, and device hardening).
- **Import and Compare Live Configurations (Config Diff)**: instant parsing of `show running-config` output and stanza-by-stanza bidirectional comparison between physical hardware and your project plan, with single-click copying of missing commands.
- **Visualize Network Topologies**: interactive, vector topology diagram automatically derived from configured IP addresses and point-to-point links, printable as a dedicated high-resolution page in PDF reports.
- **Verify Topology Integrity (15-Rule Network Linter)**: proactive detection of misconfigurations before powering on equipment (overlapping subnets, duplicate IPs, unreachable next hops, OSPFv3 missing router-id, faulty HSRP virtual IPs, port security on trunks).
- **Practice with Interactive Quizzes & Widgets**: 9 subnetting exercise question types across 3 difficulty tiers with full step-by-step explanations, streak tracking, and high scores; interactive "Daily Quiz" widget with on-face answer reveal, plus Control Center controls.
- **Export and Share**: professional vector PDF reports drawn with Apple CoreGraphics/CoreText, structured CSV tables, and plain text CLI configurations.

---

## Architecture and Design Principles

NetCalc Pro follows Apple's highest software engineering standards:

### 1. Pure Domain Model

The domain model layer (`IPv4Address`, `IPv6Address`, `SubnetMask`, `SubnetPlan`, `CiscoDevice`, `NetworkLinter`, `RouteSummary`, `TopologyBuilder`, `SubnetQuiz`) is implemented using pure Swift structs and enums, decoupled from both SwiftUI and persistence frameworks. Every calculation algorithm and Cisco CLI parser is strictly deterministic, free of side effects, and covered by more than 260 unit tests.

### 2. Absolute Privacy & Local-First Design

- **Zero Tracking**: the app contains no analytics SDKs, ad trackers, or third-party profiling libraries.
- **100% Offline Operation**: all calculations, CLI generation, and diagnostic evaluations execute entirely on the local device CPU.
- **Private iCloud Synchronization**: projects, devices, and preferences synchronize optionally through the user's **private** Apple CloudKit database container (`iCloud.com.dimpemekug.netcalc`). Data remains encrypted within your personal Apple account and never transits through third-party servers.

### 3. Adaptive Universal Interface

- **macOS and Regular Width iPad**: two-panel navigation using `NavigationSplitView` with sidebar (Tools and Projects), main work area, integrated syntax-colored terminal, and collapsible contextual inspector. Standalone calculator window available via <kbd>⌥</kbd><kbd>⌘</kbd><kbd>C</kbd>.
- **iPhone and Compact Widths**: tabbed interface (`TabView`) optimized with calculation mode selectors and native modal sheets with specialized numeric keyboards and monospaced controls.

---

## Documentation Directory

To master every aspect of the application, explore the dedicated documentation guides:

- [IPv4, IPv6 Calculator and Subnetting](/en/projects/netcalc/docs/ip-calculator-and-subnetting): Input modes, binary inspection, step-by-step calculation breakdown, and recent history.
- [VLSM Best-Fit Planning](/en/projects/netcalc/docs/vlsm-best-fit-planner): Hierarchical subnet planning, capacity waste evaluation, zoomable space map, and interconnected router generator.
- [Advanced Network Tools](/en/projects/netcalc/docs/network-tools): Route summary with Cisco commands, Range to CIDR with ACLs, Wildcard & ACL simulator, and Longest Prefix Match.
- [Cisco IOS Configurations Generation](/en/projects/netcalc/docs/cisco-ios-configurations): Routers, switches, IPv6/OSPFv3, Router-on-a-Stick, HSRP, Spanning Tree, EtherChannel, and Port Security.
- [Running-Config Import & Comparison](/en/projects/netcalc/docs/import-running-config): Existing Cisco configuration parsing, project integration, and stanza Config Diff with copyable missing commands.
- [Lab Verification (Network Linter)](/en/projects/netcalc/docs/lab-linter-and-verification): Proactive 15-rule diagnostics for anomalies, IP collisions, OSPFv3 flaws, and routing inconsistencies.
- [Projects, Topology and Exporting](/en/projects/netcalc/docs/projects-export-and-icloud): Lab project organization, automatic topology diagram, CoreGraphics PDF reports, and CloudKit synchronization.
- [Learning, Exercises and Widgets](/en/projects/netcalc/docs/shortcuts-and-learning): 9-type interactive quiz with streak/records, 21-chapter textbook, glossary with over 100 entries, widgets and controls.
