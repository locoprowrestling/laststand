# Prompt: Social Media Square (Instagram)
**Asset**: `social-square.jpg`  
**Dimensions**: 1080×1080 (use `1024x1024`, export as JPG)  
**Section**: Instagram post, square social share

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED FOR PEOPLE: Use `webimages/TAS-JT-Staten.png` and
`webimages/TAS-Silhouette.png` as the only character sources. Preserve JT exactly
and keep the silhouette fully anonymous. JT Staten is the only belt holder.

Square pro wrestling event announcement graphic in a simple flat-color comic book
style. Use large solid shapes, uniform bold black outlines, minimal linework, and at
most one hard-edged shadow shape. Screen-printed look. Deep forest green and gold palette.

LAYOUT:

Background: Separate flat deep-green and near-black shape fields. One solid gold
spotlight shape in the upper center. No gradient, glow, or halftone texture.

Upper area (top 40%): 
- Small "LOCO PRO WRESTLING" text in lime green above the main title
- "THE" in small wide-tracked gold text
- "LAST STAND" in massive white Bebas Neue-style block letters, filling the width, 
  with a thick gold drop shadow
- "AT THE LODGE" in a gold ribbon banner beneath the title

Center area (middle 35%):
- JT Staten matched exactly to his supplied portrait, opposite the supplied mystery
  silhouette. JT wears the sole championship belt. The silhouette wears no belt.
- Deep black comic book shadow beneath the figures
- Subtle Elks Lodge interior elements visible as background detail

Bottom area (bottom 25%):
- Dark bar with star separators: "★ AUG 30, 2026 ★ LONGMONT, CO ★"
- Smaller: "ELKS LODGE BALLROOM · DOORS 5PM · BELL 6PM"
- Very bottom: "@LOCOPROWRESTLING" social handle in lime green

The overall feel is punchy and shareable — high energy, reads clearly as a small 
thumbnail. Every element has strong contrast. No soft colors. Bold and loud.

Simple flat-color comic book social graphic, screen-printed, square format,
deep green and gold.
```

## Negative Prompt

```
invented faces, altered JT identity, revealed mystery challenger,
extra belts, photorealistic, digital painting, gradients, blended shading, glow,
rim lighting, detailed skin rendering, blur, pastel, blue/purple, text errors,
incorrect spelling, landscape format, generic sports graphic, stock photography,
low contrast, watermark, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/social-square.jpg`
- Also usable as the OpenGraph `og:image` fallback (with minor text adjustments)
- Generate variants only when requested: one reference-based wrestler composition,
  one venue-only composition, and one pure typographic/title-card composition
- Ensure `@LOCOPROWRESTLING` handle is present for all social shares
- The thumbnail readability test: squish to 150px — can you still read "LAST STAND"?
