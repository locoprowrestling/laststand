# Prompt: Social Media Wide (Facebook / X / OG Image)
**Asset**: `social-wide.jpg`  
**Dimensions**: 1200×630 (use `1792x1024`, export as JPG)  
**Section**: Facebook post, X/Twitter card, Open Graph meta image

---

## ImageGen Prompt

```
Wide horizontal format pro wrestling event announcement graphic, 1.91:1 aspect ratio. 
Comic book illustration style, cel-shaded, bold black outlines.

LAYOUT (left to right):

Left third — Title Block:
- "LOCO PRO WRESTLING" in small lime green wide-tracked capitals at top
- "THE" in small gold text
- "LAST STAND" in massive stacked white block letters (Bebas Neue style), 
  filling the left third width, slight gold drop shadow
- "★ AT THE LODGE ★" in a gold horizontal ribbon banner beneath

Center third — Main Illustration:
- Two dramatic wrestling figures facing each other from opposite sides of the 
  frame, illustrated in comic book style with bold outlines and cel-shaded color
- Left figure: dark-clad villain (JT Staten) with championship belt, cold expression
- Right figure: athletic hero (Adam Starling), pointing forward, determined
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

Full bleed forest green to black gradient background behind everything.
High contrast, readable at small sizes, punchy and dramatic.

Comic book illustration, cel-shaded, pro wrestling event banner, wide format, 
deep green and gold color palette.
```

## Negative Prompt

```
photorealistic, blurry, pastel, blue/purple tones, text errors, vertical/portrait format, 
stock photography, generic sports banner, corporate design, soft gradients, 
low contrast, watermark, low quality
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- This is the primary `og:image` for link unfurls on Facebook, X, and iMessage
- Add to `index.html`: `<meta property="og:image" content="images/social-wide.jpg">`
- Also add: `<meta name="twitter:card" content="summary_large_image">`
- Generate with and without wrestler illustrations for flexibility
- The right-side info block can be swapped for a QR code pointing to tickets
