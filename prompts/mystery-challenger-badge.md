# Prompt: Mystery Challenger Badge
**Asset**: `mystery-challenger-badge.png`  
**Dimensions**: 600×600 (use `1024x1024`, export as PNG)  
**Section**: About section — circular badge, right-hand column

---

## ImageGen Prompt

```
A circular pro wrestling championship badge design, ornate and prestigious. The outer ring 
is thick, metallic gold with intricate rope-twist border detail and small five-pointed stars 
spaced evenly around the circumference. Inside the gold border is a deep black background.

Centered in the badge is a dramatic silhouette of a wrestler — a muscular figure standing 
tall with arms slightly raised, rendered entirely as a flat black shadow with a hard gold 
backlight rim. The silhouette has a large "?" overlaid in bold Bebas Neue-style display font, 
gold-colored, centered over the chest of the silhouette.

Below the silhouette, small text reads "CITY OF LIGHTS" in wide-tracked gold capital letters.
Below that: "AUG 30 · 2026" in smaller gold text.

The badge has a subtle radial gold glow emanating from the center, fading to black at the 
edges. The overall feel is championship prestige meets mysterious suspense — who defends 
the title?

Comic book illustration style, cel-shaded metallic gold, bold black outlines, pro wrestling 
championship belt art aesthetic, deep green and gold color palette, high contrast, circular 
badge design with transparent background.
```

## Negative Prompt

```
photorealistic, blurry, square crop, rectangular shape, text errors, 
incorrect spelling, modern minimalist, flat design without detail, 
silver colors, blue tones, pink, low quality, watermark
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- Export as PNG with transparent background
- Used in `.badge-inner` — currently a 220px circle with CSS gold border
- If ImageGen includes the circular shape in the illustration itself, the CSS border can be removed
- The "?" text in the prompt may render as an actual "?" glyph — that is the desired behavior
