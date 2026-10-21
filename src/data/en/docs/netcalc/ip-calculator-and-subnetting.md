---
title: "IPv4, IPv6 Calculator and Subnetting"
description: "Guide to NetCalc Pro's IP calculation tools: four input modes, 32-bit binary inspection, step-by-step calculation breakdown, recent history, and IPv6."
project: "netcalc"
order: 2
section: "Calculation & Planning"
---

## Redesigned IPv4 Calculator

The IPv4 calculator in **NetCalc Pro** delivers a seamless and intuitive experience for analyzing any combination of IP address and subnet mask, combining algebraic accuracy with maximum visual clarity.

On macOS and iPad, all essential values and controls fit on a single screen without scrolling; on iPhone, the interface dynamically optimizes for full address visibility, continuous prefix sliders, and quick contextual menus.

### 4 Flexible Input Modes

The app adapts to how you prefer to enter network data:

1. **Address / CIDR Prefix** (e.g., `192.168.1.100/26`): the fastest notation, featuring quick increment/decrement `−` and `+` buttons (or a continuous slider on iPhone).
2. **Dotted Decimal** (e.g., IP `172.16.50.14`, Mask `255.255.240.0`): ideal for pasting configuration parameters from OS network settings or exam sheets.
3. **Inverse Wildcard Mask** (e.g., IP `10.1.0.50`, Wildcard `0.0.3.255`): essential for verifying and composing rules for Access Control Lists (ACLs) and `network` statements in OSPF and EIGRP.
4. **Host Capacity Sizing**: enter the starting address and required host count (e.g., 500 hosts); NetCalc Pro instantly computes the minimal efficient mask (e.g., `/23`), minimizing unused addresses.

---

## Interactive Binary Inspection (`BitBoundaryView`)

At the core of the IPv4 calculator is the **32-bit binary breakdown**:

```text
Octet 1            Octet 2            Octet 3            Octet 4
11000000 (192)  .  10101000 (168)  .  00000001 (1)    .  01 | 100100 (100)
▲─────────────────────────── Network (/26) ─────────────────────────▲ ▲── Host ──▲
```

- **High-Contrast Color Coding**: network bits and host bits are highlighted in distinct, accessible colors.
- **Interactive Boundary Dragging**: on Mac and iPad, click any bit or drag the divider to shift the prefix length (from `/1` to `/32`), observing live updates to the mask, wildcard, network address, and broadcast address.
- **Hexadecimal Representation**: instant 8-character hex conversion for low-level packet analysis and IP header inspection.

---

## "How It's Calculated": Step-by-Step Breakdown

Directly beneath the primary results, the **"How it's calculated"** panel details the exact Boolean algebra performed on the entered values:

```text
IP Address:      192.168.1.100    -> 11000000.10101000.00000001.01100100
Subnet Mask:     255.255.255.192  -> 11111111.11111111.11111111.11000000
-------------------------------------------------------------------------
Bitwise AND:     192.168.1.64     -> 11000000.10101000.00000001.01000000 (Network)

Wildcard Mask:   0.0.0.63         -> 00000000.00000000.00000000.00111111
Bitwise OR:      192.168.1.127    -> 11000000.10101000.00000001.01111111 (Broadcast)

Host Formula:    2^(32 - 26) - 2  =  2^6 - 2 = 64 - 2 = 62 usable hosts
```

1. **Bitwise AND for Network Address**: compares every bit of the IP address with the subnet mask. Since $1 \text{ AND } 1 = 1$ and any bit with $0$ evaluates to $0$, all host bits are zeroed out, isolating the subnet ID.
2. **Wildcard Mask Inversion**: inverts mask bits (`1`s become `0`s and vice versa).
3. **Bitwise OR for Broadcast Address**: performs an OR operation between network address and wildcard mask, forcing all host bits to `1`.
4. **Host Capacity**: evaluates total address count ($2^H$) and subtracts the two reserved addresses (network and broadcast).

---

## History and "Recents" Menu

NetCalc Pro automatically preserves your **last 15 calculations**:

- History saves in the background whenever you pause on a valid calculation result.
- Opening the **Recents** menu in the calculator toolbar lets you recall any past calculation with one click, immediately restoring the address and prefix.

---

## Computed Properties and Metrics

For every entered configuration, NetCalc Pro outputs a comprehensive property sheet with single-tap copyable values:

| Parameter                       | Description                                                                                             | Example (`192.168.1.100/26`)     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Network Address**             | Subnet identifier address (host bits set to `0`)                                                        | `192.168.1.64`                   |
| **Broadcast Address**           | Subnet broadcast address (host bits set to `1`)                                                         | `192.168.1.127`                  |
| **Usable Host Range**           | First and last assignable host addresses                                                                | `192.168.1.65` — `192.168.1.126` |
| **Total / Usable Hosts**        | Total block addresses ($2^{32 - \text{prefix}}$) and usable capacity (excluding network and broadcast) | 64 total / **62 usable**         |
| **Dotted Decimal Subnet Mask**  | Four-octet subnet mask                                                                                  | `255.255.255.192`                |
| **Wildcard Mask**               | Inverted mask for ACLs and OSPF                                                                         | `0.0.0.63`                       |
| **Class and Scope**             | Historical class classification (A, B, C, D, E) and RFC scope                                           | Class C · Private (RFC 1918)     |
| **Special Addresses**           | Automatic detection of Link-Local APIPA (`169.254.0.0/16`), Loopback (`127.0.0.0/8`), Multicast, etc.  | —                                |

---

## IPv6 Calculator

NetCalc Pro features a dedicated 128-bit IPv6 module:

- **RFC 5952 Canonical Compression**: enter any IPv6 address in compressed or uncompressed form; the app displays both canonical format with `::` and full 32-hex expansion.
- **Prefix Inspection**: breaks down Global Routing Prefix, Provider ID (/48), Subnet ID (/64), and 64-bit Interface Identifier.
- **EUI-64 Calculation from MAC**: enter a 48-bit Ethernet MAC (e.g., `00:1A:2B:3C:4D:5E`); NetCalc Pro flips the 7th bit (Universal/Local) and inserts `FF:FE` to produce SLAAC / Link-Local addresses (`fe80::021a:2bff:fe3c:4d5e`).
- **Address Classification**: immediate scope detection across Global Unicast (`2000::/3`), Link-Local (`fe80::/10`), Unique Local ULA (`fc00::/7`), Multicast (`ff00::/8`), and Loopback (`::1/128`).
- **Cisco CLI Generation**: one-click output for `ipv6 address` and `ipv6 address ... eui-64` statements.

---

## Fixed-Size Subnetting

When dividing an organization's block into equal-sized subnets:

1. Enter the base root block (e.g., `10.10.0.0/16`).
2. Select partitioning criteria:
   - **By required subnet count** (e.g., 8 equal departments).
   - **By target prefix** (e.g., transform `/16` into `/20` subnets).
3. The app generates the complete allocation table including subnet indices, network IDs, gateway and host ranges, broadcast addresses, and host counts.
4. Click **"Create devices from plan"** to immediately convert the table into configured routers and switches inside your lab project.
