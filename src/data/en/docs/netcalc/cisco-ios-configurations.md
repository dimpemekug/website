---
title: "Cisco IOS Configurations Generation"
description: "Cisco IOS CLI generation engine in NetCalc Pro: IPv4/IPv6 interfaces, OSPFv3, Router-on-a-Stick, HSRP, Spanning Tree, EtherChannel, Port Security, DHCP, ACLs, and NAT."
project: "netcalc"
order: 5
section: "Cisco IOS Integration"
---

## From Logical Design to Real CLI

In networking labs such as **Cisco Packet Tracer**, **GNS3**, **EVE-NG**, or physical hardware testbeds, hand-crafting hundreds of configuration lines frequently introduces typos, wildcard mask errors, or critical omissions (such as forgetting `no shutdown` or the global `ipv6 unicast-routing` command).

**NetCalc Pro 1.1** features an advanced **Cisco IOS** syntax generation engine adhering strictly to Cisco and CCNA best practices, organized according to the operating system's dependency model:

1. Global parameters (`hostname`, `ipv6 unicast-routing`, security) appear first.
2. VLAN databases are initialized before assignment to access/trunk switchports.
3. Physical interfaces and 802.1Q sub-interfaces are configured and un-shut before referenced by routing protocols or network services.
4. Redundancy protocols (HSRP), link aggregation (EtherChannel), and spanning tree directives are systematically applied.
5. Application services (DHCP Server, IP Helper, ACLs, NAT/PAT) conclude the configuration script.

---

## Supported Configuration Modules

### 1. Physical Interfaces, Sub-interfaces & In-place Editing

- **Port Families**: native support for `GigabitEthernet`, `FastEthernet`, `Ethernet`, and `Serial` ports.
- **Automatic Port Activation**: automatically injects the `no shutdown` command on enabled ports.
- **In-place Interface Editing**: in NetCalc Pro 1.1, you can edit any existing interface (double-click on Mac, context menu, or tap on iPhone/iPad) to update IP, mask, descriptions, or advanced settings without recreating the port.

### 2. Router-on-a-Stick Builder (Inter-VLAN Routing)

NetCalc Pro features a dedicated builder for single-router inter-VLAN routing connected to an 802.1Q trunk switch:

- **Automatic VLAN Discovery**: discovers all VLANs configured across the project's switches and suggests corresponding virtual sub-interfaces (e.g., `GigabitEthernet0/0/0.10`, `GigabitEthernet0/0/0.20`).
- **IEEE 802.1Q Encapsulation**: injects `encapsulation dot1Q <vlan_id>` before assigning the default gateway IP address.
- **DHCP Flexibility**: option to pair each sub-interface with a local DHCP pool or an `ip helper-address` forwarding to a centralized server.

### 3. Full IPv6 on Devices and OSPFv3

NetCalc Pro natively supports dual-stack IPv4/IPv6 configurations:

- **Global Unicast and Link-Local Addresses**: configure both Global Unicast (`ipv6 address 2001:db8:1::1/64`) and custom Link-Local (`ipv6 address fe80::1 link-local`) addresses per interface.
- **Automatic Routing Enablement**: automatically inserts the global `ipv6 unicast-routing` command at the top of routers with active IPv6 interfaces.
- **Dynamic OSPFv3**:
  - `ipv6 router ospf <id>` process creation.
  - Mandatory 32-bit `router-id <A.B.C.D>` generation (crucial for OSPFv3 operation in pure IPv6 environments).
  - Direct per-interface area assignment (`ipv6 ospf <id> area <area>`).
- **IPv6 Static Routes**: syntax generation for `ipv6 route <prefix/length> <next_hop>`.

### 4. Gateway Redundancy (HSRP) & IP Helper-Address

- **Hot Standby Router Protocol (HSRP)**:
  - Generates `standby <group> ip <virtual_ip>` statements to share a virtual gateway between redundant routers.
  - Priority configuration (`standby <group> priority <value>`) and preemption (`standby <group> preempt`).
- **DHCP Relay (IP Helper-Address)**:
  - Injects `ip helper-address <server_ip>` on LAN interfaces to forward client broadcast DHCP discovery packets (UDP port 67) across routers.

### 5. Advanced Switching: Spanning Tree, EtherChannel & Port Security

NetCalc Pro 1.1 provides complete Layer 2 switching support required by CCNA certification curricula:

- **Spanning Tree Protocol (STP)**:
  - Global mode configuration: `spanning-tree mode pvst`, `rapid-pvst`, or `mst`.
  - Root Bridge role assignment: `spanning-tree vlan <id> root primary/secondary`.
  - Access edge port hardening: **PortFast** (`spanning-tree portfast`) and **BPDU Guard** (`spanning-tree bpduguard enable`).
- **Link Aggregation (EtherChannel)**:
  - IEEE standard LACP (`channel-group <id> mode active/passive`).
  - Cisco proprietary PAgP (`channel-group <id> mode desirable/auto`).
  - Static forced mode (`channel-group <id> mode on`).
  - Automatic creation of the logical aggregated bundle `interface Port-channel <id>` (with trunk settings).
- **Port Security (Switchport Hardening)**:
  - Enable on access ports: `switchport port-security`.
  - MAC address limits: `switchport port-security maximum <n>`.
  - Dynamic sticky MAC learning: `switchport port-security mac-address sticky`.
  - Violation actions: `violation protect`, `violation restrict`, or `violation shutdown` with SNMP trap.

### 6. Static Routing and Dynamic IPv4 Routing

- **Static Routes & Default Gateway**: `ip route <network> <mask> <next_hop>` and default route `ip route 0.0.0.0 0.0.0.0 <gateway>`.
- **Single & Multi-Area OSPF**: `router ospf <id>`, mathematically exact inverse wildcard masks, and automated `passive-interface` directives on host-facing LANs.
- **RIPv2 & EIGRP**: `router rip` (with `version 2` and `no auto-summary`) and `router eigrp <as_number>`.

### 7. Core Services and Security Hardening

- **Built-in DHCP Server**: proactive `ip dhcp excluded-address` ranges, dedicated pools with network, mask, default-router, and dns-server.
- **Access Control Lists (ACL)**: standard (1-99) and extended (100-199) numbered access lists.
- **Network Address Translation (NAT/PAT Overload)**: `ip nat inside`/`outside` role definitions and WAN overload translation.
- **Device Hardening**: `enable secret`, `service password-encryption`, encrypted management via SSH (`transport input ssh`), console line protection (`line con 0`), and legal login banners (`banner motd`).

---

## Integrated Terminal with Themes and Selection Sync

On desktop layouts (macOS and iPad), the device configuration inspector sits alongside a live Cisco terminal:

- **Graphite Theme with Syntax Color-Coding**: comments in desaturated gray, interface identifiers in bright yellow, IP addresses and masks in cyan/blue, and Cisco command keywords distinctly highlighted. (Alternative retro green, amber, and monochrome themes available).
- **Selection Synchronization**: clicking an interface or routing protocol in the left panel scrolls the terminal directly to the corresponding stanza and highlights its lines.
- **Smart Copy (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd>)**: copies the entire script to the clipboard with one click, ready for immediate paste into Cisco Packet Tracer, PuTTY, or SecureCRT.
