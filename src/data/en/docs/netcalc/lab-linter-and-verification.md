---
title: "Lab Verification (Network Linter)"
description: "Proactive topology diagnostics for CCNA labs: detect duplicate IPs, overlapping subnets, unreachable next hops, OSPF wildcard errors, and DHCP mismatches."
project: "netcalc"
order: 6
section: "Diagnostics & Verification"
---

## Why a Network Linter?

In network simulators such as **Cisco Packet Tracer**, **GNS3**, or hands-on equipment racks, the most frustrating troubleshooting scenario is a silent failure: the `ping` command times out, but Cisco IOS provides no explanation as to why packets are being dropped.

The root causes are frequently subtle configuration mistakes:

- Two interfaces on different routers were assigned the same IP address by mistake.
- A `/24` subnet partially overlaps with an existing `/26` subnet.
- A static route points to a next-hop IP that does not belong to any directly connected network.
- An OSPF `network` statement uses an incorrect wildcard mask (or accidentally uses a subnet mask).
- An interface is assigned the subnet's network or broadcast address.
- A DHCP pool distributes a default-router IP belonging to a completely different subnet.

NetCalc Pro's **Network Linter** is a pure functional diagnostic engine (`NetworkLinter.analyze(devices:)`) that audits your entire topology before you even turn on device power, providing educational explanations and actionable remediation steps.

---

## Severity Levels

Diagnostic findings are prioritized and categorized into three severity levels:

|              Icon               | Severity    | Impact                                                                                                                                                |
| :-----------------------------: | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `xmark.octagon.fill`       | **Error**   | Breaks network communication. Causes routing loops, address collisions, or undeliverable packets.                                                     |
| `exclamationmark.triangle.fill` | **Warning** | The network will boot, but behavior will be defective or incomplete (e.g., missing dynamic routing advertisements, interfaces administratively down). |
|       `info.circle.fill`        | **Note**    | Reminders and completeness suggestions (e.g., devices with no configured interfaces).                                                                 |

---

## The 10 Diagnostic Checks

### 1. Invalid IP Addresses or Prefixes

- **Severity**: Error
- **Inspection**: Verifies that every addressed interface uses valid octets (`0` to `255`) and prefix lengths within `/0` to `/32`.
- **Remediation**: Correct formatting errors in the IP address or subnet mask.

### 2. Duplicate IP Addresses

- **Severity**: Error
- **Inspection**: Scans all interfaces across all routers, switches, and PCs to ensure that no single IP address is assigned more than once.
- **Remediation**: Assign a unique address to each conflicting interface.

### 3. Partially Overlapping Subnets

- **Severity**: Error
- **Inspection**: Identical subnets on shared links are valid (e.g., two routers on the same point-to-point link). However, when two subnets have different prefix lengths and one strictly contains the other (e.g., `192.168.1.0/24` and `192.168.1.0/26`), routing ambiguity causes unpredictable packet loss.
- **Remediation**: Reallocate conflicting subnets into disjoint address spaces (ideally using the VLSM planner).

### 4. Unusable Host Address (Network or Broadcast)

- **Severity**: Error
- **Inspection**: On standard IPv4 subnets (prefixes `/1` to `/30`), the first address is the **network address** and the last is the **broadcast address**. Neither may be assigned to an interface. _(Special RFC 3021 `/31` point-to-point links and `/32` host routes are exempt)._
- **Remediation**: Change the interface IP to a usable host within the valid range between `firstHost` and `lastHost`.

### 5. OSPF Consistency & Coverage

- **Severity**: Error / Warning
- **Inspection**:
  - Flags invalid syntax in `network <ip> <wildcard>` statements as an **Error**.
  - Flags statements whose wildcard mask does not match any local interface on the device as a **Warning** (often indicating that a standard subnet mask was pasted instead of an inverted wildcard).
  - Flags active interfaces whose subnets are not covered by any OSPF network statement as a **Warning** (neighbor routers will never learn routes to that LAN).
- **Remediation**: Use the "Generate Wildcard from Interface" feature or correct the wildcard mask.

### 6. Unreachable Static Route Next-Hops

- **Severity**: Error
- **Inspection**: In Cisco IOS, a static route's next-hop address (`ip route ... <next_hop>`) must belong to a subnet directly connected to one of the router's local interfaces.
- **Remediation**: Set the next-hop to the neighbor router's IP address on the shared point-to-point link.

### 7. Disabled Interfaces Configured with IPs (`shutdown`)

- **Severity**: Warning
- **Inspection**: Flags interfaces configured with an IP address that are marked as disabled (`isEnabled == false`). Cisco router ports boot administratively down by default.
- **Remediation**: Enable the interface in NetCalc Pro's inspector to append `no shutdown` to the generated CLI script.

### 8. DHCP Pool Subnet & Gateway Consistency

- **Severity**: Error
- **Inspection**:
  - Verifies that the pool's network and subnet mask are valid and contiguous.
  - Ensures that the `default-router` address strictly resides within the pool's assigned subnet block.
- **Remediation**: Set the default-router to the router interface IP that faces the respective local LAN segment.

### 9. Non-Existent Interface References (NAT & ACL)

- **Severity**: Warning
- **Inspection**: Detects NAT statements (`ip nat inside/outside`, overload interface) or Access Lists bound via `ip access-group` that reference interface names not present on the device.
- **Remediation**: Correct typos in interface names (e.g., `GigabitEthernet0/0/0` vs `GigabitEthernet0/0`).

### 10. Empty Devices

- **Severity**: Note
- **Inspection**: Identifies routers or switches in the project that have no configured interfaces.
- **Remediation**: Configure at least one interface so the device can participate in the network topology.

---

## User Interface Integration

The project view features a **Lab Verification** status pill displaying the live count of errors and warnings. Clicking on any finding navigates directly to the affected device and interface in the inspector, allowing you to fix issues with a single click.
