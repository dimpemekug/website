---
title: "VLSM Best-Fit Planner"
description: "Design hierarchical IP addressing plans with Variable Length Subnet Masking (VLSM), descending allocation, waste metrics, and one-click device generation."
project: "netcalc"
order: 3
section: "Calculation & Planning"
---

## Overcoming Fixed-Size Address Waste

In classical Fixed-Length Subnet Masking (FLSM), every subnet receives identical block sizes regardless of whether it serves 120 desktop clients in a sales office or just 2 router interfaces on a point-to-point WAN link. Assigning a `/24` or `/26` to a serial link wastes dozens or hundreds of valid IPv4 addresses.

**VLSM (Variable Length Subnet Masking)** solves this inefficiency by tailoring individual subnet masks to the exact host requirements of each segment.

---

## The Descending Best-Fit Algorithm

A critical rule taught in Cisco networking courses is that **VLSM subnets must always be allocated starting from the largest requirement to the smallest**.

NetCalc Pro enforces this standard with its mathematical **Best-Fit Descending** algorithm:

### 1. Automatic Requirement Sorting

When you input required host counts for each department or link (e.g., _Headquarters: 100 hosts_, _Branch Office: 50 hosts_, _Server Farm: 25 hosts_, _WAN Link: 2 hosts_), NetCalc Pro automatically sorts the requirements in descending order before computing addresses.

### 2. Preventing Address Space Fragmentation

Because CIDR blocks must align on binary power-of-two boundaries:

- Allocating a smaller subnet first (e.g., a `/30` at `192.168.1.0/30`) locks out the aligned boundary for a subsequent `/25` block, forcing unused gaps (_fragmentation_).
- By allocating larger blocks first (`/25`, then `/26`, then `/27`, and finally `/30`), blocks tile contiguously with zero fragmentation.

### 3. Exact Bit Formula

For each requested host count $H$, NetCalc Pro determines the minimum host bits $k$ such that:
$$2^k - 2 \ge H$$
The resulting prefix is $\text{CIDR} = 32 - k$. The next subnet starts at the exact address boundary following the broadcast address of the preceding block.

---

## Address Space Occupancy Map

To visualize your allocation, NetCalc Pro includes a proportional address map (`AddressSpaceMapView`):

- **Proportional Representation**: a `/25` occupies exactly half (50%) of a `/24` parent bar, a `/26` takes 25%, and point-to-point links take narrow slivers.
- **Color Differentiation**: each subnet receives an identifiable colored segment tagged with department name, network address, and CIDR prefix.
- **Remaining Capacity**: unassigned space is clearly indicated as free buffer, showing you how much capacity remains for future company expansion.

---

## Efficiency and Waste Metrics

For every planned subnet and across the entire project, NetCalc Pro calculates:

- **Allocated Hosts**: total usable address space provided by the block.
- **Needed Hosts**: the exact quantity requested.
- **Address Overhead / Waste**: unused addresses within the block.
- **Overall Allocation Efficiency**: percentage ratio of requested addresses to total assigned block space.

---

## One-Click Device Generation (`PlanDeviceBuilder`)

Transforming a theoretical subnetting table into a working network laboratory is often tedious and error-prone.

In NetCalc Pro, the **Create Devices from Plan** button bridges this gap instantly:

1. The app analyzes each subnet in your VLSM table.
2. It generates corresponding router interfaces or switch VLANs with correctly assigned IP addresses and subnet masks.
3. Point-to-point `/30` and `/31` subnets automatically create paired interfaces on adjacent routers.
4. The generated topology is immediately ready for Cisco IOS CLI export or pre-flight verification in the Network Linter.
