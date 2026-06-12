# Prompt: Mystery Challenger Portrait
**Asset**: `mystery-challenger-portrait.png`
**Dimensions**: 600×900 (use `1024x1792`, export as PNG)
**Section**: Wrestler profile card / About section

---

## ImageGen Prompt

```
INPUT IMAGE REQUIRED: Use `webimages/TAS-Silhouette.png` as the sole wrestler source
and edit starting point. Preserve its exact pose, proportions, outline, and anonymity.
Do not reveal, invent, or imply a face, hair, skin tone, gear details, or identity.

Create a simple flat-color comic book portrait of the mystery challenger based directly
on the supplied silhouette. Use large solid black and deep-green shapes, a uniform bold
black outline, and one optional solid gold edge shape. The result should look screen
printed or inked and filled, not digitally painted.

Pose: Preserve the supplied silhouette pose. Do not redraw it into a new person.

Background: Two or three simple flat shapes suggesting a deep forest green historic
ballroom and a solid gold spotlight shape. No blur, gradient, haze rendering, or glow.

Full figure or upper-body crop from the supplied silhouette. No championship belt.
JT Staten is the only belt holder. No text. No logos.
```

## Negative Prompt

```
revealed face, invented identity, facial features, skin rendering, gear details,
championship belt, photorealistic, digital painting, gradients, blended shading,
soft shadows, glow, rim light, blur, altered pose, extra limbs, watercolor, pastel
colors, blue/purple background, text, watermark
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
