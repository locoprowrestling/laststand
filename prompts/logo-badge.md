# Prompt: LoCo Pro Wrestling Logo Badge
**Asset**: `logo-badge.png`  
**Dimensions**: 400×400 (use `1024x1024`, export as PNG)  
**Section**: Navigation, favicon source, watermark on all graphics

---

## ImageGen Prompt

```
Circular badge / seal logo for "LOCO PRO WRESTLING" — a professional wrestling 
promotion based in Longmont, Colorado.

DESIGN:
- Shape: Perfect circle with thick outer border
- Outer ring: Bright lime green (#6dbf2d) with thin gold inner and outer strokes
- Outer ring text (following the curve, top): "LOCO PRO WRESTLING" in bold 
  wide-tracked white capitals
- Outer ring text (following the curve, bottom): "LONGMONT · COLORADO" in 
  smaller white capitals with star separators
- Inner circle background: Deep black or very dark forest green
- Center graphic: A stylized wrestling ring viewed from slightly above at an angle, 
  rendered in lime green outline/linework on black, with ropes clearly visible, 
  bold comic book illustration style
- Beneath the ring graphic: "EST. 2017" in small gold wide-tracked text

COLOR PALETTE:
- Background (inner): #0a0a0a (near-black)
- Ring outline: #6dbf2d (lime green)
- Text: White and gold (#f5c518)
- Border: Lime green inner, gold outer trim

STYLE: Simple flat-color badge/seal design with large solid shapes, uniform bold black
outlines, no gradients, no shading, no glow, no metallic rendering, and minimal linework.
Screen-printed, high contrast, professional, and authoritative.

Transparent background outside the circular badge.
No photorealism. No clipart. Bold, clean, iconic.
```

## Negative Prompt

```
photorealistic, digital painting, gradient, blended shading, glow, metallic rendering,
blurry, complex illustration with many small details that won't read small, blue/purple,
red as primary color, generic sports logo, shield shape, rectangular, text errors,
incorrect spelling, watermark, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/logo-badge.png`
- Export as PNG with transparent background
- Primary use: navigation bar brand mark, replacing current text-only "LoCo Pro Wrestling"
- Resize to 40px height for nav, 200px for footer, 32px for favicon
- Also use as a watermark overlay (at ~15% opacity) on all generated graphics
- The wrestling ring in the center is the key distinguishing element — ensure it's clear
