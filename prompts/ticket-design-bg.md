# Prompt: Ticket Design Background Texture
**Asset**: `ticket-design-bg.jpg`  
**Dimensions**: 900×400 (use `1792x1024`, export as JPG)  
**Section**: Ticket card background texture

---

## ImageGen Prompt

```
Horizontal ticket stub background texture for a professional wrestling event. 
Vintage ticket art style with modern comic book illustration influence.

DESIGN ELEMENTS:
- Overall shape suggestion: Wide horizontal rectangle with serrated/perforated 
  edge pattern on the left side (the tear-off stub edge), suggesting a 
  real event ticket
- Background base: Very dark charcoal (#1e1e1e) to near-black gradient
- Decorative elements scattered across the surface at low opacity (15–25%):
  * Five-pointed stars in varying sizes
  * Classic halftone dot pattern in one corner
  * Thin diagonal line pattern in another corner
  * Faint wrestling ring outline as background watermark
  * Ornate corner flourishes in gold-tinted line art
- Left stub section: Slightly lighter background, suggests tear-off portion
- Main ticket area: The primary darker section
- Subtle gold rule lines (1px) running horizontally dividing sections
- Very faint "ADMIT ONE" text watermarked diagonally across the main section
  at approximately 5% opacity

COLOR:
- Background: #1a1a1a to #0d0d0d gradient
- Decorative elements: Gold (#d4a830) at very low opacity
- Stub edge: Slightly lighter at #242424
- No bright colors — this is a texture, not a foreground element

STYLE: Vintage concert/event ticket aesthetic, comic book texture influences, 
classic pro wrestling memorabilia aesthetic. Subtle enough to sit behind text. 
No visible people, no readable text, no logos.
```

## Negative Prompt

```
bright colors, photorealistic, people, clear readable text, logos, 
highly detailed illustration, blue/purple, stock ticket design, 
low quality, blurry, modern minimalist, completely flat/no texture
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/ticket-design-bg.jpg`
- Used as `background-image` on `.ticket-card` elements
- Apply in CSS with: `background-image: url('webimages/ui/ticket-design-bg.jpg'); background-size: cover;`
- Keep the CSS `background` color as a fallback for when image hasn't loaded
- The texture should be subtle — existing ticket text/pricing must remain readable
- Apply a dark overlay on top: `background-color: rgba(10,10,10,0.6)` before the text layers
