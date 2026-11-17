---
title: "Resizing, Presets and Quality"
description: "Pixel and percentage sizes, enlargement warnings, built-in and custom presets, output formats, JPEG quality, and estimated file size in Resizo."
project: "resizo"
order: 2
section: "Features"
---

## Resizing modes

In the **Size** section of the options panel, choose between **Pixels** and **Percentage**. Below the title, a sentence sums up what will happen, for example "Width fixed at 1920 px, proportional height."

### 1. In pixels
Between the **Width** and **Height** fields there is a padlock. With the padlock closed (**Proportions locked**, the default):
- **Width only**: set the width (e.g. 1200 px) and leave the height empty; it follows the proportions.
- **Height only**: set the height (e.g. 800 px); the width follows the proportions.
- **Width and height**: set a bounding box (e.g. 1920×1080 px). Each image fits inside the box without being distorted or cropped.

With the padlock open (**Proportions free**), each image becomes exactly the size you enter, even if that distorts it.

In the fields, the <kbd>↑</kbd> and <kbd>↓</kbd> arrows change the size by 1 pixel, or by 10 while holding <kbd>⇧</kbd>. The **Swap width and height** button swaps the two values.

### 2. By percentage
Scales each image **from 5% to 300%** of its resolution. The **25%**, **50%**, **75%**, and **100%** buttons set the most common values; the slider and the field next to it accept any value in the range.

### New size and enlargements
The **New size** column of the list shows each image's final resolution in advance, and how much it changes as a percentage. Images that would come out **larger than the original** are shown in orange, and the panel tells you how many there are: when enlarged, an image can lose sharpness. For safety, the long side of the output never exceeds 16,384 pixels.

---

## Built-in and custom presets

On first launch the sidebar offers four presets; one click applies the sizes, and the preset in use is highlighted:
- **Web**: 1920 px wide, for websites, blogs, and presentations.
- **Social**: 1080 px wide, for social media posts.
- **Icon**: 512×512 px, square, for avatars and profile pictures.
- **Email**: 800 px wide, light images to attach.

### Creating and managing presets
- **From the options**: the **Save these dimensions as a preset** button, next to the Size section title, creates a preset with the current sizes.
- **Manage Presets…** (at the bottom of the sidebar, or in Settings › Presets): checked presets appear in the sidebar, in the order of the list. You can drag them to reorder, create new ones with **New Preset…** (name, width, height, and **Fit while keeping proportions**), rename them, and delete them.
- **Restore Default Presets…** brings back Web, Social, Icon, and Email; the presets you created are deleted.

---

## Output format and JPEG quality

In the **Format and Quality** section:
- **Original**: changes only the size and keeps the original format (JPEGs use the chosen quality).
- **PNG**: lossless compression that keeps transparency, suited to logos, graphics, and screenshots.
- **JPEG**: compression with a **Quality** slider from 10% to 100% (85% by default; double-click the slider to go back to it). A value between 80% and 85% cuts file size a lot with no obvious difference.

---

## Estimated size

At the bottom of the options panel, **Estimated size** shows how much the output files will weigh in total and how much smaller they are than the originals. Resizo works it out by actually resizing a few sample images per format in memory and projecting the result onto the others: it is an estimate, not the exact size. It updates when you change sizes, format, or quality.
