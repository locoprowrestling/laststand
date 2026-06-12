# Prompt: Social Media Square (Instagram)
**Asset**: `social-square.jpg`  
**Dimensions**: 1080×1080 (use `1024x1024`, export as JPG)  
**Section**: Instagram post, square social share

---

## ImageGen Prompt

```
Square format pro wrestling event announcement graphic. Comic book illustration style, 
cel-shaded, bold black outlines. Deep forest green and gold color palette.

LAYOUT:

Background: Deep forest green gradient fading to near-black at the bottom. Subtle 
angular halftone dot pattern texture in the upper background. Bright gold radial 
glow in the upper-center area suggesting a spotlight.

Upper area (top 40%): 
- Small "LOCO PRO WRESTLING" text in lime green above the main title
- "THE" in small wide-tracked gold text
- "LAST STAND" in massive white Bebas Neue-style block letters, filling the width, 
  with a thick gold drop shadow
- "AT THE LODGE" in a gold ribbon banner beneath the title

Center area (middle 35%):
- Two dramatic illustrated wrestling figures in silhouette/comic style facing each 
  other from opposite sides, separated by a large gold "VS" or a championship belt 
  floating between them
- Deep black comic book shadow beneath the figures
- Subtle Elks Lodge interior elements visible as background detail

Bottom area (bottom 25%):
- Dark bar with star separators: "★ AUG 30, 2026 ★ LONGMONT, CO ★"
- Smaller: "ELKS LODGE BALLROOM · DOORS 5PM · BELL 6PM"
- Very bottom: "@LOCOPROWRESTLING" social handle in lime green

The overall feel is punchy and shareable — high energy, reads clearly as a small 
thumbnail. Every element has strong contrast. No soft colors. Bold and loud.

Comic book illustration, cel-shaded, pro wrestling social media graphic, 
square format, deep green and gold.
```

## Negative Prompt

```
photorealistic, blurry, pastel, blue/purple tones, soft gradients, text errors, 
incorrect spelling, landscape format, rectangular, generic sports graphic, 
stock photography, low contrast, watermark, low quality
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- Also usable as the OpenGraph `og:image` fallback (with minor text adjustments)
- Generate 2–3 variants: one with two wrestler silhouettes, one with venue focus, 
  one pure typographic/title-card style
- Ensure `@LOCOPROWRESTLING` handle is present for all social shares
- The thumbnail readability test: squish to 150px — can you still read "LAST STAND"?
