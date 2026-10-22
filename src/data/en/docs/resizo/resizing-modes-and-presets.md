---
title: "Resizing, Presets and Quality"
description: "Pixel and percentage resizing modes, built-in and custom presets, output formats and JPEG quality in Resizo."
project: "resizo"
order: 2
section: "Features"
---

## Resizing Modes

Resizo offers two ways to set the final size of your images.

### 1. In Pixels
With **Fit while keeping proportions** turned on (the default):
- **Width only**: set the width (e.g. 1200 px) and leave the height empty; it will be calculated proportionally.
- **Height only**: set the height (e.g. 800 px); the width adjusts proportionally.
- **Width and height**: enter a bounding box (e.g. 1920×1080 px). The image is resized to fit inside it, without being stretched or cropped.

With proportions turned off, Resizo uses the exact dimensions you enter, even if that distorts the image.

### 2. As a Percentage
Scales the image **from 5% to 300%** of its original resolution: handy for halving or quartering a whole set of photos without working out pixel sizes.

The **New size** column in the table shows each image's final resolution in advance. As a safeguard, the long side of an output image never exceeds 16,384 pixels.

---

## Built-in and Custom Presets

For recurring jobs, Resizo offers four presets on first launch, shown in the sidebar:
- **Web (1920 px wide)**: for websites, blogs and presentations on high-resolution screens.
- **Social (1080 px wide)**: for social media posts.
- **Email (800 px wide)**: lightweight images for email attachments.
- **Icon (512×512 px)**: a square format for avatars and profile pictures.

### Creating and Managing Presets
With **Manage Presets…** (in the sidebar or in Settings) you can create new presets with a name, width, height and proportions option, hide the ones you don't use and delete them, built-in ones included.

---

## Output Format and JPEG Quality

- **Original**: changes only the dimensions and keeps the source format.
- **JPEG**: compresses the image with a quality slider from 10% to 100% (85% by default). A value between 80% and 85% cuts file size a lot with no visible loss.
- **PNG**: lossless compression that keeps transparency, suited to logos, graphics and screenshots.
