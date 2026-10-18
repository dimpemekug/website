---
title: "Projects and Automatic Colors"
description: "Project management, billing rates, tax tiers, and the deterministic mathematical FNV-1a color derivation algorithm in Time Tracker."
project: "time-tracker"
order: 3
section: "Projects"
---

## Managing Client Projects

The **Projects** tab organizes your operational domains:

- **Title & Description**: clear labeling (e.g. *Mobile App Redesign*, *Cloud Infrastructure Audit*, *Master Thesis*).
- **Hourly Billing Rate**: set your contracted hourly rate (e.g. $75.00/h). Non-billable internal projects can be set to zero or toggled off.
- **VAT / Tax Tier**: specify local sales tax or VAT percentages (e.g. 20%) for automated tax estimation.
- **Archiving**: when milestones conclude, archive the project to remove it from quick logging selectors while preserving full historical analytics.

---

## The Color Engine: Zero Manual Color Picking

Selecting colors from endless palette grids is tedious and frequently results in poor contrast or duplicate hues.

In Time Tracker, **project colors are derived algorithmically from their name**:

### How the Algorithm Works
1. **Deterministic FNV-1a Hashing**: the project title passes through a custom FNV-1a hash function (avoiding platform-dependent `hashCode()`), guaranteeing the same title outputs the exact same color on iOS, Android, and across backups.
2. **Fixed CIELAB Perceptual Lightness & Chroma**: perceptual lightness is anchored to $L^* = 62$ and chroma to $C^* = 78$. No project color ever appears too washed out or overly intense in comparison to its neighbors.
3. **Golden Angle Spacing ($137.5^\circ$)**: if two projects generate hues with an angular distance of less than $40^\circ$, the algorithm rotates by the golden section angle until it lands on the widest unallocated color space. This prevents visual collisions between projects.
4. **Frozen on First Save**: as you type a title, the color badge previews the calculated hue in real time; once saved, the color is locked to the record so fixing a typo later does not alter historical charts.
