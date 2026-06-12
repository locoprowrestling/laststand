# Prompt: Social Media Wide (Facebook / X / OG Image)
**Asset**: `social-wide.jpg`  
**Dimensions**: 1200×630 (use `1792x1024`, export as JPG)  
**Section**: Facebook post, X/Twitter card, Open Graph meta image

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED FOR PEOPLE: Use `webimages/TAS-JT-Staten.png`,
`webimages/TITLE-BELT.png`, `webimages/TAS-Silhouette.png`, and
`webimages/Last-Stand-Poster.png`. Preserve JT exactly, keep the silhouette fully
anonymous, and match the poster's character rendering. JT is the only belt holder.

Wide horizontal pro wrestling event announcement graphic, 1.91:1 aspect ratio.
Use the poster's heavy variable black ink lines, angular anatomy, two or three hard
cel-shading bands, selective hatch/stipple texture, dramatic cropped figures, and
saturated green/purple/gold print palette.

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
- Behind them: The real ballroom architecture from `webimages/Elks-Lodge-Ballroom.jpeg`

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

High-impact inked wrestling comic event banner matching the supplied poster, wide
format, saturated green, purple, gold, cream, and black. No smooth gradients.
```

## Negative Prompt

```
clean mascot vector style, uniform outlines, simplified faces, invented faces, altered
JT identity, revealed mystery challenger, extra belts,
photorealistic, digital painting, gradients, blended shading, glow, rim lighting,
detailed skin rendering, blur, pastel, blue-dominant palette, text errors, vertical format,
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
