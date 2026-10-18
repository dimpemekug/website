---
title: "IPv4, IPv6 Calculator & Subnetting"
description: "Master IPv4 and IPv6 addressing in NetCalc Pro: four input modes, interactive 32-bit binary inspection, EUI-64 generator, and equal-size subnetting."
project: "netcalc"
order: 2
section: "Calculation & Planning"
---

## Comprehensive Addressing Calculator

The calculator in NetCalc Pro is engineered to provide instant clarity on any network address, combining mathematical accuracy with interactive visual feedback.

---

## IPv4: Four Flexible Input Modes

Networks can be expressed in various notations across exam questions, documentation, and vendor specifications. NetCalc Pro supports four distinct input modes:

1. **CIDR Prefix (e.g., `192.168.1.10 /24`)**:
   Specify the base IP address and the prefix length `/n` (from `/0` to `/32`) using a dedicated stepper or slider.
2. **Dotted Decimal Subnet Mask (e.g., `255.255.255.192`)**:
   Enter standard subnet masks. NetCalc Pro automatically verifies that the mask consists of contiguous high-order bits (`1`s followed by `0`s), preventing invalid mask errors.
3. **Cisco Wildcard Mask (e.g., `0.0.0.63`)**:
   Directly enter inverted wildcard masks used in Cisco IOS OSPF and Access Control Lists. The calculator instantly derives the corresponding CIDR prefix and standard subnet mask.
4. **Required Usable Hosts (e.g., `50 hosts`)**:
   Specify how many client devices need an IP address. NetCalc Pro determines the tightest CIDR prefix that can accommodate the requested capacity (for 50 hosts, it computes `2^(32-26) - 2 = 62` usable hosts on a `/26` block).

---

## Interactive 32-Bit Binary Inspection (`BitBoundaryView`)

Understanding subnetting requires visualizing how bits are partitioned. NetCalc Pro features an interactive binary inspector that represents all 32 bits across the four octets:

- **Visual Separation**: network bits are highlighted in the active accent color, while host bits are displayed with subtle neutral contrast.
- **Dynamic Boundary**: adjust the prefix length dynamically and watch the dividing line shift across octet boundaries in real time.
- **Bit Values**: see binary positional values (`128, 64, 32, 16, 8, 4, 2, 1`) to easily understand how decimal numbers are composed.

---

## Comprehensive Calculated Output

For any IPv4 input, NetCalc Pro provides a complete breakdown:

| Parameter             | Description                                                                                                                                                                                                    |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Network Address**   | The very first address of the block; identifies the subnet and cannot be assigned to a host device.                                                                                                            |
| **Subnet Mask**       | Dotted decimal representation of fixed network bits (e.g., `255.255.255.0`).                                                                                                                                   |
| **Wildcard Mask**     | Inverted bitmask calculated as `255.255.255.255 - Mask` (e.g., `0.0.0.255`).                                                                                                                                   |
| **Broadcast Address** | The last address of the block; used for sending broadcast frames to all local nodes.                                                                                                                           |
| **Usable Host Range** | The range spanning from `firstHost` (`Network + 1`) to `lastHost` (`Broadcast - 1`).                                                                                                                           |
| **Host Capacity**     | Total addresses (`2^(32 - CIDR)`) and usable hosts (`2^(32 - CIDR) - 2`, with special handling for `/31` point-to-point and `/32` loopback).                                                                   |
| **Historical Class**  | Class A, B, C, D (Multicast), or E (Experimental) based on high-order bits.                                                                                                                                    |
| **Address Scope**     | Flags whether the address is Public Internet routable, Private RFC 1918 (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), Loopback RFC 1122 (`127.0.0.0/8`), or APIPA link-local RFC 3927 (`169.254.0.0/16`). |

---

## IPv6 Calculator & EUI-64

NetCalc Pro includes complete native support for IPv6 addressing:

- **RFC 5952 Canonical Compression**: automatically condenses the longest run of consecutive 16-bit zero hextets into `::` and removes leading zeros.
- **Full Expansion**: uncompresses any IPv6 address into its full 8-hextet, 32-hexadecimal-digit format (`2001:0db8:0000:0000:0000:0000:0000:0001`).
- **Standard Prefixes**: calculate subnet blocks using standard global prefixes (`/48` site, `/64` standard interface subnet).
- **EUI-64 MAC Address Converter**: paste a 48-bit hardware MAC address (e.g., `00:1A:2B:3C:4D:5E`) to generate the modified EUI-64 interface identifier by inverting the Universal/Local bit (bit 7) and inserting `FF:FE` in the middle (`021A:2BFF:FE3C:4D5E`).

---

## Equal-Size Subnetting (FLSM)

When partitioning a parent network into equal-sized child subnets (Fixed-Length Subnet Masking):

1. Enter your parent network (e.g., `192.168.0.0/24`).
2. Select whether to divide by **Number of Subnets** (e.g., 4 subnets of `/26`) or **Hosts per Subnet** (e.g., 30 hosts).
3. The app instantly renders an interactive table detailing each child block:
   - Subnet index and network address
   - Subnet mask and prefix
   - Usable host range
   - Broadcast address
4. Click on any generated subnet to open it directly in the calculator or transfer it into a project.
