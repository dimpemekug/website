---
title: "Resizing Modes and Presets"
description: "Pixel and percentage resizing, built-in presets, custom sizes, and JPEG quality tuning in Resizo."
project: "resizo"
order: 2
section: "Features"
---

## Resizing Modes

Resizo provides flexible controls for tailoring output resolution:

### 1. Pixel Dimensions
- **Fixed Width**: specify width (e.g. 1200 px); height scales automatically preserving the aspect ratio.
- **Fixed Height**: specify height (e.g. 800 px); width scales proportionally.
- **Bounding Box (Both Dimensions)**: specify maximum width and height bounds (e.g. 1920×1080 px). Resizo scales images to fit neatly inside the boundary without distortion or cropping.
- **Ignore Aspect Ratio**: optionally force arbitrary dimensions when needed.

### 2. Percentage Scaling
Scale from **5%** up to **300%** relative to the original resolution, ideal for halving or downsizing large image sets without calculating individual pixel targets.

---

## Ready-to-Use & Custom Presets

Resizo ships with four pre-configured profiles:
- **Web (1920 px)**: optimized for desktop monitors, blog articles, and web presentation.
- **Social (1080 px)**: standard dimensions for Instagram, LinkedIn, and social media feeds.
- **Email (800 px)**: lightweight resolutions for rapid email transmission.
- **Icon (512×512 px)**: square format for avatars, logos, and application assets.

### Custom Presets
Via **Manage Presets**, save your preferred width, height, format, and quality parameters under custom labels (e.g. *E-commerce Catalog*, *Thumbnail Grid*).

---

## Formats and Quality Tuning

- **Keep Original Format**: updates dimensions while retaining the native container format.
- **Convert to JPEG**: tune compression via the quality slider (50% to 100%). A setting between 80% and 85% delivers substantial size reduction with pristine visual clarity.
- **Convert to PNG**: preserves original alpha transparency for logos, vector graphics, and screenshots.
