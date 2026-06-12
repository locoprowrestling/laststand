# Prompt: Social Media Wide (Facebook / X / OG Image)
**Asset**: `social-wide.jpg`  
**Dimensions**: 1200×630 (use `1792x1024`, export as JPG)  
**Section**: Facebook post, X/Twitter card, Open Graph meta image

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED FOR PEOPLE: Use `webimages/TAS-JT-Staten.png` and
`webimages/TAS-Silhouette.png` as the only character sources. Preserve JT exactly,
keep the silhouette fully anonymous, and do not invent wrestlers. JT is the only
championship belt holder.

Wide horizontal pro wrestling event announcement graphic, 1.91:1 aspect ratio.
Simple flat-color comic book style with large solid shapes, uniform bold black outlines,
minimal linework, and at most one hard-edged shadow shape per form. Screen-printed look.

LAYOUT (left to right):

Left third — Title Block:
- "LOCO PRO WRESTLING" in small lime green wide-tracked capitals at top
- "THE" in small gold text
- "LAST STAND" in massive stacked white block letters (Bebas Neue style), 
  filling the left third width, slight gold drop shadow
- "★ AT THE LODGE ★" in a gold horizontal ribbon banner beneath

Center third — Main Illustration:
- Left: JT Staten matched exactly to his supplied portrait, with the sole belt
- Right: The supplied mystery silhouette, featureless and anonymous, with no belt
- Behind them: The ornate interior of the Elks Lodge ballroom — antler mounts 
  visible on wood-paneled walls, brass chandelier, dramatic spotlights, 
  thin smoke haze at ankle level

Right third — Event Info Block:
- Gold panel or dark panel with gold text
- "SUNDAY" in wide-tracked caps
- "AUG 30" in very large bold numbers
- "2026" beneath
- Divider line with stars
- "ELKS LODGE" bold
- "LONGMONT, CO" smaller
- "DOORS 5PM · BELL 6PM" in small caps
- "@LOCOPROWRESTLING" in lime green at bottom

Flat forest green and black background shape fields behind everything.
High contrast, readable at small sizes, punchy and dramatic.

Simple flat-color comic book event banner, screen-printed, wide format,
deep green and gold limited palette. No gradients or rendered lighting.
```

## Negative Prompt

```
invented faces, altered JT identity, revealed mystery challenger, extra belts,
photorealistic, digital painting, gradients, blended shading, glow, rim lighting,
detailed skin rendering, blur, pastel, blue/purple, text errors, vertical format,
stock photography, generic sports banner, corporate design, low contrast,
watermark, low quality
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/social-wide.jpg`
- This is the primary `og:image` for link unfurls on Facebook, X, and iMessage
- Update `index.html` og:image path to `webimages/ui/social-wide.jpg` once generated
- Also add: `<meta name="twitter:card" content="summary_large_image">`
- Generate wrestler versions only from verified `tas-portrait` inputs; a venue-only
  version may be generated without portrait inputs
- The right-side info block can be swapped for a QR code pointing to tickets
