---
title: "Lab Verification (Network Linter)"
description: "Proactive diagnostics for CCNA labs: detects IP conflicts, overlapping subnets, unreachable next hops, OSPFv3 issues, HSRP inconsistencies, sub-interfaces, and DHCP flaws."
project: "netcalc"
order: 7
section: "Diagnostics & Verification"
---

## Why a Network Linter?

In networking simulators like **Cisco Packet Tracer**, **GNS3**, or on physical equipment, the most frustrating problem presents as silent packet drops: `ping` requests time out, yet the Cisco CLI offers no explanation as to why packets are being discarded.

Typical root causes are subtle:

- Two interfaces on different routers received the same IP by accident.
- A `/24` subnet and a `/26` subnet partially overlap.
- A static route points to a next hop that does not belong to any directly connected network.
- An OSPF `network` statement uses an invalid wildcard (or accidentally specifies the subnet mask).
- An OSPFv3 process fails to run because no 32-bit `router-id` is configured.
- An 802.1Q sub-interface lacks encapsulation or runs on a shut physical port.
- An HSRP virtual IP sits outside the interface's subnet.
- Port security is activated on an 802.1Q trunk port (a combination forbidden by Cisco IOS).

NetCalc Pro's **Network Linter** (`NetworkLinter.analyze(devices:)`) is a pure functional diagnostic engine that scans your entire lab topology before powering on devices, highlighting every misconfiguration with educational explanations and actionable fixes.

---

## Severity Levels

Diagnostics are categorized into three severity tiers:

|              Icon               | Severity    | Description                                                                                                   |
| :-----------------------------: | :---------- | :------------------------------------------------------------------------------------------------------------ |
|      `xmark.octagon.fill`       | **Error**   | Prevents network operation. Involves routing ambiguities, IP collisions, or undeliverable packets.            |
| `exclamationmark.triangle.fill` | **Warning** | The network will initialize, but behavior will be defective (e.g., missing OSPF announcements, shut ports).    |
|       `info.circle.fill`        | **Note**    | Informational reminders and completeness checks (e.g., empty devices without interfaces).                    |

---

## The 15 Diagnostic Rules

### 1. Invalid Addresses or Prefixes
- **Severity**: Error
- **Check**: Validates that all IP octets fall within `0`–`255` and prefixes span `/0` to `/32`.

### 2. Duplicate IP Addresses
- **Severity**: Error
- **Check**: Scans every interface across all routers, switches, and hosts to ensure no IP address is assigned to more than one port.

### 3. Partially Overlapping Subnets
- **Severity**: Error
- **Check**: Flags ambiguous routing trees where subnets of differing prefix lengths overlap (e.g., `192.168.1.0/24` and `192.168.1.0/26`).

### 4. Invalid Host Address in Subnet
- **Severity**: Error
- **Check**: Ensures host interfaces do not use network IDs or broadcast addresses on standard `/1` to `/30` subnets. _(Special `/31` point-to-point and `/32` host routes are exempt)._

### 5. OSPFv2 Consistency and Coverage
- **Severity**: Error / Warning
- **Check**:
  - Invalid syntax in `network <net> <wildcard>` statements.
  - Wildcard mask fails to match any active local interface (usually caused by entering a subnet mask instead of a wildcard).
  - Valid interface IP unannounced in any local OSPF directive.

### 6. Static Route Next-Hop Reachability
- **Severity**: Error
- **Check**: Validates that next-hop addresses belong to a subnet directly connected to one of the local router's active interfaces.

### 7. Configured Interfaces in Shutdown State
- **Severity**: Warning
- **Check**: Flags interfaces with configured IP parameters that remain administratively disabled (`shutdown`).

### 8. DHCP Server Subnet Alignment
- **Severity**: Error
- **Check**:
  - Validates pool network and mask contiguity.
  - Ensures the specified `default-router` strictly belongs to the pool's network segment.

### 9. References to Non-Existent Interfaces (NAT & ACLs)
- **Severity**: Warning
- **Check**: Detects misspelled or missing interface names referenced by NAT statements or `ip access-group` bindings.

### 10. Unconfigured / Empty Devices
- **Severity**: Note
- **Check**: Identifies project devices with zero interfaces or addressing configured.

### 11. Invalid or Duplicate IPv6 Addresses
- **Severity**: Error
- **Check**: Validates RFC IPv6 syntax (hextet length, single `::` compression, `/0` to `/128` prefix) and checks for duplicate Global Unicast and Link-Local assignments.

### 12. OSPFv3 Missing Router-ID
- **Severity**: Error
- **Check**: In OSPFv3, a 32-bit dotted decimal router ID (`router-id <A.B.C.D>`) is strictly required. Without configured IPv4 interfaces, the engine cannot auto-select an ID and OSPFv3 fails to start.
- **Fix**: Add `router-id 1.1.1.1` under the OSPFv3 process stanza.

### 13. Sub-interfaces Missing Encapsulation or on Shut Ports
- **Severity**: Error / Warning
- **Check**:
  - Virtual sub-interfaces lacking `encapsulation dot1Q <vlan>` cannot tag frames for Inter-VLAN routing.
  - Parent physical port in `shutdown` state disables all child virtual sub-interfaces.

### 14. HSRP Virtual Gateway Inconsistencies
- **Severity**: Error
- **Check**: The virtual standby IP configured via `standby <group> ip <virtual_ip>` must reside inside the physical/virtual interface's local subnet.

### 15. Port Security on 802.1Q Trunk Ports
- **Severity**: Error
- **Check**: Cisco IOS forbids enabling `switchport port-security` on switchports configured in trunk mode (`switchport mode trunk`). Port security is only supported on access ports.
- **Fix**: Disable port security on trunk ports or change switchport mode to `access`.

---

## User Interface Integration

In the project view, the **Lab Verification** button features a dynamic badge displaying active error and warning counts. Clicking any item instantly selects and highlights the faulty device or interface in the context inspector.
