---
title: "NetCalc Pro"
description: "Networking app for iPhone, iPad, and Mac: IPv4/IPv6 calculators, four advanced tools, VLSM planning, Cisco IOS with advanced switching, topology diagram, and lab linter. Free, with no ads or in-app purchases."
pubDatetime: 2026-10-13T00:00:00+02:00
draft: false
tags: ["iOS", "macOS", "networking", "privacy"]
appStore: "https://apps.apple.com/app/netcalc-pro/id6823228406"
privacyDataTypes: "the addresses and values you use in calculations, your projects with their devices and configurations, and the app's preferences"
privacyStorageNote: "Every calculation happens on your device. With iCloud sync on (the default, and it can be turned off), projects and preferences are synced across your devices through the CloudKit private database of your iCloud account — they never pass through our servers. Without iCloud, they stay on your iPhone, iPad, or Mac."
privacyUpdatedAt: "October 14, 2026"
privacyUrl: "/en/projects/netcalc/privacy/"
---

## What is NetCalc Pro?

NetCalc Pro works out network addressing plans, generates configuration commands for routers and switches, provides dedicated analysis tools for wildcards and ACLs, maps network topologies, and validates configurations before you power on your lab. It's designed for students (CCNA preparation) and engineers who configure networks every day.

## Key Features

- **IPv4 Calculator**: four input modes, interactive color-coded binary inspection with draggable boundaries, calculation history, and full step-by-step mathematical explanations (*"How it's calculated"*) with Boolean algebra (AND for network, wildcard and OR for broadcast).
- **IPv6 Calculator**: RFC 5952 canonical compression, prefix breakdown, subnetting, and EUI-64 generation from MAC addresses.
- **Advanced Network Tools**:
  - **Summary**: route summarization/supernetting with common bit visualization, extra address detection, and Cisco CLI (static route, Null0 loop guard, OSPF area range, EIGRP summary).
  - **Range to CIDR**: decomposes arbitrary IP ranges into minimal CIDR blocks with ready-to-copy ACL lines.
  - **Wildcard & ACL**: analyzes contiguous and non-contiguous wildcards with an interactive line-by-line packet simulator.
  - **Compare Networks**: "same subnet?" check to identify asymmetric pings, overlap detection, and Longest Prefix Match simulator.
- **Subnetting and VLSM**: equal-size blocks or sized from host counts with best-fit descending ordering, dynamic zooming space map, and automated interconnected router generator (chain, star, or mesh topologies with /30 or /31 transit links and OSPF).
- **Comprehensive Cisco IOS CLI**: fully annotated commands for routers and switches with IPv4/IPv6, OSPFv2, OSPFv3, Router-on-a-Stick dot1Q, HSRP, IP helper-address (DHCP relay), Spanning Tree (PVST+, Rapid-PVST, PortFast, BPDU Guard), EtherChannel (LACP/PAgP), Port Security (sticky MAC, violation modes), DHCP, ACLs, and NAT/PAT.
- **Running-Config Import & Comparison (Config Diff)**: import live configurations or run a stanza-by-stanza comparison against your project design with single-click copying of missing commands.
- **Topology Diagram**: automatic vector network diagram generated from configured IP addresses and point-to-point links, zoomable on screen and embedded as a dedicated page in PDF exports.
- **15-Rule Lab Linter**: proactive diagnostics catching overlapping subnets, duplicate IPs, unreachable next hops, OSPFv3 missing router-id, faulty sub-interfaces, HSRP mismatches, and port security on trunk ports.
- **Active Learning & Exercises**: interactive 9-type subnetting quiz across 3 difficulty tiers with step-by-step solutions, scoring, and streaks; 21-chapter networking guide and a glossary with over 100 entries.
- **Widgets and System Integration**: interactive *"Daily Quiz"* widget with on-face answer reveal, CIDR prefix table widget, Control Center controls (iOS 18 and macOS 26), and `netcalc://` links.
- **Export & Sharing**: vector PDF reports drawn with Apple CoreGraphics/CoreText (including topology schematic page), RFC 4180 CSV tables, and plain text CLI configurations.
- **Private iCloud Sync**: projects, appliances, and preferences sync seamlessly through your private CloudKit container across iPhone, iPad, and Mac, with an offline-first fallback.
- **No subscription**: free, with no ads and no in-app purchases.

Cisco and Cisco IOS are trademarks or registered trademarks of Cisco Systems, Inc. and/or its affiliates in the U.S. and other countries. NetCalc Pro generates commands in Cisco IOS syntax; it is not developed, sponsored, or endorsed by Cisco and is not affiliated with Cisco. Other trademarks are the property of their respective owners.

## Platforms

Available for **iPhone** and **iPad** with iOS/iPadOS 17 or later, and for **Mac** with macOS 14 or later: one free app for all your devices.
