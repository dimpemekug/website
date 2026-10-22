---
title: "Projects and Colors"
description: "Managing projects, hourly rates, VAT, archiving and the automatic project colors on Android in Time Tracker."
project: "time-tracker"
order: 3
section: "Projects"
---

## Creating and Setting Up a Project

The **Projects** section is the organizational core of Time Tracker:

- **Name and notes**: a clear title (e.g. *E-commerce redesign*, *Cloud consulting*, *Master's thesis*) and optional notes.
- **Period**: optional start and end dates.
- **Billing**: turn it on to set the **hourly rate** (e.g. €65 per hour) and the **VAT rate** (e.g. 22%). For a personal or unpaid project, leave it off: its hours won't count toward the billable share.
- **Archiving**: a finished project can be archived; it no longer appears among the projects offered for new activities, but its history remains for statistics and exports.
- **Deleting**: deleting a project also deletes its hours.

---

## A Project's Color

The color lets you recognize a project at a glance in lists and charts.

- **On iOS** you pick it from a grid of system colors in the project editor.
- **On Android** there's nothing to pick: **the color is worked out from the name**.

### How It Works on Android
1. **FNV-1a hash**: the name goes through a purpose-written FNV-1a function (not `hashCode()`), so the same name always gives the same hue.
2. **Fixed lightness and chroma in CIELAB**: perceptual lightness is fixed at L\* 62 and chroma at 78, so no project looks paler or brighter than its neighbors in the charts.
3. **Golden angle (137.5°)**: if the hue suggested by the name is less than 40° from one already in use, it's rotated by the golden angle until it finds a free spot. With many projects the threshold shrinks on its own as far as the color wheel allows.
4. **Color fixed on first save**: while you type the name, the dot next to the field changes color letter by letter; once saved, the color stays. Fixing a typo in the name won't change how past charts look.

Existing projects, including those imported from a backup, keep the color they have.
