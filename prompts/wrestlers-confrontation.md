# Prompt: Wrestlers Confrontation
**Asset**: `wrestlers-confrontation.png`  
**Dimensions**: 1200×800 (use `1792x1024`, export as PNG)  
**Section**: Feature image / About section or Hero accent

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED: Use `webimages/TAS-JT-Staten.png` and
`webimages/TAS-Silhouette.png` as the only character sources and edit starting points.
Preserve JT's exact official design and preserve the silhouette's complete anonymity.
Do not invent another wrestler or reveal the silhouette.

Two pro wrestlers facing off in dramatic confrontation in a simple flat-color comic
book style. Use large solid color shapes, uniform bold black outlines, minimal interior
linework, and at most one hard-edged shadow shape per form. No digital painting.

Left figure (JT Staten): Match his supplied reference exactly, including arms-crossed
pose and clothing. Add the single championship belt in the image around his waist.
Position him slightly forward and dominant.

Right figure (mystery challenger): Use the supplied silhouette exactly. Keep it as a
featureless black figure with no face, skin, hair, clothing details, or belt.

Background: The Elks Lodge Ballroom reduced to clean flat shapes: wood paneling, mounted
elk antlers, chandelier, solid amber spotlight shapes, forest green shadow shapes, and
one flat smoke shape at floor level.

Full-body from roughly the knee up. High contrast. The space between them is charged
with tension.

No text. No logos. Transparent background preferred on figures.
```

## Negative Prompt

```
invented faces, altered JT identity, revealed challenger, extra championship belts,
photorealistic, digital painting, gradients, blended shading, soft shadows, glow,
rim light, detailed skin texture, blur, identical figures, goofy expressions,
cartoonish humor, pastel colors, blue/purple tones, text, watermark, logos
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/wrestlers-confrontation.png`
- Can be used as a wide feature image between sections
- Alternatively crop to portrait for individual wrestler cards
- The venue background reinforces the setting without needing text
- If background renders opaque, can be masked in CSS with `mix-blend-mode: multiply`
