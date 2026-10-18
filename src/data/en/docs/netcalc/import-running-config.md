---
title: "Importing Running-Configs"
description: "How to import, parse, and analyze real Cisco IOS running-config outputs from hardware or Packet Tracer in NetCalc Pro."
project: "netcalc"
order: 5
section: "Cisco IOS Integration"
---

## Closing the Lab Workflow Loop

In standard network engineering workflows:

1. **You design** the addressing plan in NetCalc Pro.
2. **You generate** Cisco IOS commands and paste them into your devices or **Cisco Packet Tracer**.
3. **You make adjustments** directly on the CLI during hands-on troubleshooting (adding interfaces, adjusting static routes, tweaking NAT or ACLs).
4. **Connectivity issues arise**: "ping fails", but Packet Tracer does not explain why.

To avoid tedious manual re-entry of changes made in the simulator, NetCalc Pro includes the **RunningConfigParser** module. This component parses raw text from a `show running-config` command and reconstructs a complete device model directly inside your project.

Once imported, the device can immediately be inspected by NetCalc Pro's **Network Linter** to identify the root cause of connectivity failures.

---

## How to Import a Configuration

1. In your router or switch CLI (in Packet Tracer or physical terminal), execute:
   ```text
   enable
   show running-config
   ```
2. Select and copy the entire output text (including comments, exclamation marks `!`, and interface blocks).
3. In NetCalc Pro, select your project in the sidebar.
4. Click **Import Running-Config** (or choose it from the project's action menu).
5. Paste the text into the import sheet and confirm.
6. The app automatically creates a new `CiscoDevice` populated with the extracted hostname, interfaces, routing tables, and security settings.

---

## Parser Architecture: Fault Tolerance & Transparency

Real-world production or lab configurations often contain hundreds of lines irrelevant to layer 2/3 topology planning (e.g., `spanning-tree mode pvst`, `crypto pki trustpoint`, `line con 0` details, logging parameters).

NetCalc Pro's parser is designed around two engineering principles:

### 1. Graceful Fault Tolerance

The parser **never throws a fatal error** when encountering unfamiliar commands or hardware-specific syntax. Blocks are recognized by standard contextual keywords (`interface`, `router ospf`, `ip dhcp pool`, `vlan`) and terminated cleanly by standard delimiters (`!` or `exit`/`end`).

### 2. Complete Transparency (`unrecognizedLines`)

Unrecognized commands are not discarded silently. They are collected in the `unrecognizedLines` array and displayed in a dedicated review sheet. You always know exactly which lines became active model objects and which lines were auxiliary commands.

---

## Recognized Syntax Elements

The parser supports all configuration directives produced by NetCalc Pro's CLI generator:

| Feature                           | Parsed Commands and Blocks                                                                                                                                |
| :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Device Identity**               | `hostname <name>`                                                                                                                                         |
| **Physical & Virtual Interfaces** | `interface <name>`, `description <text>`, `ip address <ip> <mask>`, `shutdown` / `no shutdown`                                                            |
| **Sub-interfaces & Trunking**     | `encapsulation dot1Q <vlan_id>`, `switchport mode access`, `switchport mode trunk`, `switchport access vlan <id>`, `switchport trunk allowed vlan <list>` |
| **VLAN Database**                 | `vlan <id>`, `name <name>`                                                                                                                                |
| **Static Routing**                | `ip route <dest_network> <mask> <next_hop>`                                                                                                               |
| **OSPF**                          | `router ospf <process_id>`, `network <ip> <wildcard> area <area_id>`                                                                                      |
| **RIPv2**                         | `router rip`, `version 2`, `no auto-summary`, `network <ip>`, `passive-interface <name>`                                                                  |
| **EIGRP**                         | `router eigrp <as_number>`, `no auto-summary`, `network <ip> [wildcard]`                                                                                  |
| **DHCP Server**                   | `ip dhcp pool <name>`, `network <ip> <mask>`, `default-router <ip>`, `dns-server <ip>`, automatically linking preceding `ip dhcp excluded-address` ranges |
| **NAT / PAT**                     | `ip nat inside source list <acl> interface <wan> overload`, `ip nat inside source static` entries, interface tags `ip nat inside` and `ip nat outside`    |
| **Access Control Lists**          | `access-list <id> permit/deny <protocol> ...`, interface directives `ip access-group <id> in/out`                                                         |
| **Device Hardening**              | `enable secret <pass>`, `service password-encryption`, `banner motd #<text>#`, `ip domain-name <domain>`                                                  |

---

## Instant Pre-Flight Diagnostics

As soon as a device is imported, it participates in project-wide analysis. Clicking **Lab Verification** instantly highlights whether the imported running-config introduced duplicate IPs, overlapping subnets, or missing OSPF network statements.
