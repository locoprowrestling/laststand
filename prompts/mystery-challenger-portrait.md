# Prompt: Mystery Challenger Portrait
**Asset**: `mystery-challenger-portrait.png`
**Dimensions**: 600×900 (use `1024x1792`, export as PNG)
**Section**: Wrestler profile card / About section

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED:
- Image 1: `webimages/TAS-Silhouette.png` is the sole figure source. Preserve its pose,
  proportions, outline, and anonymity.
- Image 2: `webimages/Last-Stand-Poster.png` is the mandatory rendering and composition
  reference for the silhouette treatment.

Do not reveal, invent, or imply a face, hair, skin tone, gear details, or identity.

Match the poster's foreground mystery figure: a dense near-black silhouette with a thick,
slightly irregular warm-white outer contour, subtle hard-edged charcoal-black interior
separation only where necessary for readability, and a large warm-white question mark
centered on the torso. Use the poster's bold cropped foreground scale and heavy inked
presence. Do not add visible anatomy, facial features, clothing, or identity clues.

Pose: Preserve the supplied silhouette pose. Do not redraw it into a new person.

Background: Transparent outside the silhouette.

Use the same waist-up or three-quarter foreground crop as the poster when appropriate.
No championship belt. JT Staten is the only belt holder. The question mark is the only
allowed text-like symbol.
```

## Negative Prompt

```
gold outline, green edge highlight, clean mascot silhouette, revealed face, invented
identity, facial features, skin rendering, gear details,
championship belt, photorealistic, digital painting, gradients, blended shading,
soft shadows, glow, rim light, blur, altered pose, extra limbs, watercolor, pastel
colors, blue background, unrelated text, watermark
```

## Settings

```
model: gpt-image-1
size: 1024x1792
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/mystery-challenger-portrait.png`
- Export as PNG with transparent or near-transparent background
- Pair with `jt-staten-portrait.png`
- Can be used at ~300px width in a two-column about section layout
- The identity must remain completely hidden
- Match the white-outlined mystery figure in `webimages/Last-Stand-Poster.png`
