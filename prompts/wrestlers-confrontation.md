# Prompt: Wrestlers Confrontation
**Asset**: `wrestlers-confrontation.png`  
**Dimensions**: 1200×800 (use `1792x1024`, export as PNG)  
**Section**: Feature image / About section or Hero accent

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED: Use `webimages/TAS-JT-Staten.png`,
`webimages/TITLE-BELT.png`, `webimages/TAS-Silhouette.png`, and
`webimages/Last-Stand-Poster.png`.
Preserve JT's exact official design and preserve the silhouette's complete anonymity.
The Last Stand poster controls the rendering style, line weight, shading, texture,
character scale, and fight-poster composition. Do not invent another wrestler or reveal
the silhouette.

Render the figures with the poster's heavy variable black ink, angular anatomy, sharp
facial planes, two or three hard cel-shading bands, sparse hatch/stipple texture, and
aggressive cropped composition. Avoid the cleaner mascot/vector appearance of the raw
TAS source.

Left figure (JT Staten): Match his supplied reference exactly, including arms-crossed
pose and clothing. Add the single championship belt in the image around his waist.
Position him slightly forward and dominant.

Right figure (mystery challenger): Use the supplied silhouette exactly. Keep it as a
featureless black figure with no face, skin, hair, clothing details, or belt.

Background: Use `webimages/Elks-Lodge-Ballroom.jpeg` for the real architecture, reduced
to the same inked comic treatment as the poster.

Full-body from roughly the knee up. High contrast. The space between them is charged
with tension.

No text. No logos. Transparent background preferred on figures.
```

## Negative Prompt

```
mascot vector style, uniform thin outlines, smooth plastic shading, invented faces,
altered JT identity, revealed challenger, extra championship belts,
photorealistic, digital painting, gradients, blended shading, soft shadows, glow,
rim light, detailed skin texture, blur, identical figures, goofy expressions,
cartoonish humor, pastel colors, blue-dominant palette, text, watermark, logos
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
