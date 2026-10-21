---
title: "VLSM Best-Fit Planning"
description: "Best-fit descending algorithm in NetCalc Pro: variable-length subnet planning, address allocation, waste calculations, dynamic zooming map, and automatic interconnected router topology builder."
project: "netcalc"
order: 3
section: "Calculation & Planning"
---

## The Flaw of Traditional Fixed Subnetting

In classical fixed-size subnetting, every network receives an identical mask. This generates massive address waste: allocating a `/24` subnet (254 hosts) to a point-to-point serial link between two routers (which only needs 2 addresses) wastes 252 IP addresses—or 99.2% of the block.

**VLSM** (_Variable Length Subnet Masking_) eliminates this inefficiency by allowing network engineers to tailor the subnet mask of each segment to its specific host requirements.

---

## NetCalc Pro's Best-Fit Descending Algorithm

To prevent overlaps and address space fragmentation, the golden rule of networking is: **always allocate the largest subnets first**.

NetCalc Pro automates this entire procedure:

1. **Root Block Specification**: enter your starting base network (e.g., `172.16.0.0/20` or `192.168.10.0/24`).
2. **Define Requirements**: add your subnets with custom names and host requirements:
   - _Research Lab_: 120 hosts
   - _Admin Offices_: 50 hosts
   - _Server Farm_: 26 hosts
   - _Executive Suite_: 10 hosts
   - _WAN Link Router1 ↔ Router2_: 2 hosts
3. **Reactive Re-computation**:
   - The planner calculates in real time as you type.
   - The algorithm sorts all requests in descending order.
   - For each request, it evaluates the smallest power of two satisfying $2^n - 2 \ge \text{required hosts}$.
   - It assigns the corresponding prefix ($32 - n$) and advances the base pointer without leaving unallocated gaps.
   - Shows remaining unallocated space for future expansions.

---

## Proportional Space Map with Dynamic Zoom

NetCalc Pro features a proportional address space visualizer (`AddressSpaceMapView`):

```text
┌────────────────────────────────────── 192.168.10.0/24 ──────────────────────────────────────┐
│  Research (120)     │   Admin (50)    │  Server (26)  │ Exec(10) │ WAN │    Free Space      │
│        /25          │       /26       │      /27      │   /28    │ /30 │        /28         │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Smart Zoom**: when your plan consumes less than a quarter ($< 25\%$) of the root block, the map dynamically zooms into the active portion, ensuring segment labels, prefixes, and narrow point-to-point slices remain clearly legible.
- **Visual Breakdown**: displays allocation density, assigned blocks, overhead reserved addresses, and unallocated capacity.

---

## Efficiency Metrics and Diagnostics

For every generated VLSM plan, NetCalc Pro evaluates:

- **Overall Efficiency**: percentage of assigned addresses relative to the root block size.
- **Overhead and Reserved Count**: exact count of network and broadcast addresses across all segments.
- **Capacity Verification**: if host requests exceed the capacity of the root network, the app immediately flags an `Insufficient Space` error, quantifying exactly how many addresses are needed.

---

## From VLSM Plan to Interconnected Topology (`PlanDeviceBuilder`)

Once planning is complete, you never have to manually transcribe IP addresses into your lab equipment.

Click **"Create devices from plan"** in the toolbar:

1. **Topology Selection**:
   - **Chain Topology**: connects routers in a linear sequence $R1 \leftrightarrow R2 \leftrightarrow R3$.
   - **Star Topology**: central core/aggregation router connecting all peripheral branch routers.
   - **Mesh Topology**: fully redundant interconnections between all routers for maximum fault tolerance.
2. **Transit Network Allocation**:
   - Choose your point-to-point prefix: standard `/30` subnets (4 IPs, 2 usable) or modern `/31` subnets (RFC 3021, 2 IPs for point-to-point links).
   - Generates matching interface IP addresses across all connected router pairs.
3. **Automated OSPF Routing**:
   - Automatically injects `router ospf` processes and precise `network` statements with inverse wildcard masks covering both LANs and point-to-point transit links.
4. **LAN Default Gateways**:
   - User-facing interfaces automatically receive the first usable IP (`.1`) as the default gateway, complete with description and enabled state.
