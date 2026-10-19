---
title: "Manga and Webtoon Reader"
description: "Reading directions for Japanese and Western comics, continuous vertical Webtoon scroll, Core ML neural upscaling, and Apple Live Text in rManga."
project: "rmanga"
order: 3
section: "Comics"
---

## Reading Directions and Pagination

The visual comic reader in rManga adapts to any publishing layout:

### 1. Right-to-Left (Manga)
Authentic layout for Japanese manga: tapping the left side of the display or swiping right advances to the next page, respecting the artist's original narrative flow.

### 2. Left-to-Right (Western Comics)
Standard Western page flow for European graphic novels, American comic books, and picture books.

### 3. Continuous Vertical Scroll (Webtoon / Manhwa)
Optimized specifically for digital vertical comics:
- **Zero Interruption**: panels cascade smoothly without artificial gutters or borders.
- **Recycled View Architecture**: powered by a high-performance `UIScrollView` that recycles off-screen views, maintaining 120Hz responsiveness across chapters containing dozens of megapixel strips.
- **Infinite Run**: reaching the bottom of a chapter seamlessly stitches the subsequent chapter into the scroll run.

---

## Advanced Reader Features

### Two-Page Spreads and Split Scans
- **Two-Page Spread on iPad**: in landscape orientation, rManga pairs facing pages side-by-side like an open book, keeping the cover page centered alone.
- **Automatic Split for Wide Scans**: when a single image contains two scanned pages side-by-side, rManga divides it into two individual sequential pages in the correct reading order.

### Core ML Neural Upscaling
Import custom Core ML neural network models (`.mlmodel` or `.mlpackage`) to enhance low-resolution scans on-the-fly. Processing delegates directly to the Apple Neural Engine to sharpen screentones and linework with minimal battery overhead.

### Apple Live Text Integration
With iOS Live Text support, tap and hold on any speech bubble or sound effect to:
- Copy text directly to clipboard.
- Translate foreign dialogue (Japanese, French, German) on the spot.
- Look up definitions or search references via Safari.

### Touch Zones and Gestures
- **Custom Touch Zones**: choose between classic left/right zones, Kindle-style margins, or L-shaped layouts.
- **Quick Dismiss**: pull down on an unzoomed page to dismiss the reader. In webtoon mode, swipe from the left edge to slide the reader away with one hand.
