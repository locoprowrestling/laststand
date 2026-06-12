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

Centered in the badge is a large gold question mark over an empty flat-black circular
field. Do not depict, silhouette, imply, or invent a wrestler. The mystery is represented
only by the question mark and negative space.

Below the question mark, small text reads "CITY OF LIGHTS" in wide-tracked gold capital letters.
Below that: "AUG 30 · 2026" in smaller gold text.

Use simple flat colors only: solid black field, solid gold border, solid green accent
shapes. No radial glow, gradient, metallic rendering, or dimensional lighting.

Simple flat-color comic book badge, uniform bold black outlines, screen-printed look,
deep green and gold limited palette, high contrast, circular design with transparent
background. Do not include a championship belt.
```

## Negative Prompt

```
wrestler, person, human silhouette, championship belt, photorealistic, digital painting,
gradient, glow, metallic rendering, soft shadow, blurry, square badge shape, text errors,
incorrect spelling, silver, blue, pink, low quality, watermark
```

## Settings

```
model: gpt-image-1
size: 1024x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/mystery-challenger-badge.png`
- Export as PNG with transparent background
- Used in `.badge-inner` — currently a 220px circle with CSS gold border
- If ImageGen includes the circular shape in the illustration itself, the CSS border can be removed
- The "?" text in the prompt may render as an actual "?" glyph — that is the desired behavior
