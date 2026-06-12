# Prompt: Social Media Square (Instagram)
**Asset**: `social-square.jpg`  
**Dimensions**: 1080×1080 (use `1024x1024`, export as JPG)  
**Section**: Instagram post, square social share

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED FOR PEOPLE: Use `webimages/TAS-JT-Staten.png` and
`webimages/TITLE-BELT.png`, `webimages/TAS-Silhouette.png`, and
`webimages/Last-Stand-Poster.png`. Preserve JT exactly, keep the silhouette fully
anonymous, and match the poster's character rendering. JT is the only belt holder.

Square pro wrestling event announcement graphic using the poster's heavy variable ink
lines, angular anatomy, hard cel-shading bands, warm skin shadows, selective hatch and
stipple texture, dynamic fight-poster crops, and saturated green/purple/gold palette.

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

High-impact inked wrestling comic social graphic matching the supplied poster,
square format, saturated green, purple, gold, cream, and black.
```

## Negative Prompt

```
clean mascot vector style, uniform outlines, simplified faces, invented faces, altered
JT identity, revealed mystery challenger,
extra belts, photorealistic, digital painting, gradients, blended shading, glow,
rim lighting, detailed skin rendering, blur, pastel, blue-dominant palette, text errors,
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
