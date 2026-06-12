# Prompt: JT Staten Character Portrait
**Asset**: `jt-staten-portrait.png`  
**Dimensions**: 600×900 (use `1024x1792`, export as PNG)  
**Section**: Wrestler profile card / About section

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED:
- Image 1: `webimages/TAS-JT-Staten.png` is the sole identity, pose, body, and clothing
  reference for JT Staten.
- Image 2: `webimages/TITLE-BELT.png` is the sole championship belt design reference.

Preserve JT's exact face, hair, skin tone, build, proportions, confident expression,
arms-crossed pose, white rolled-sleeve shirt, dark vest, dark pants, boots, watch, and
distinguishing features from Image 1. Do not invent, average, beautify, replace, or turn
him into a different wrestler.

Create a simple flat-color comic book portrait of JT Staten based directly on the
reference. Use large solid color shapes, a uniform bold black outline, minimal facial
linework, and at most one hard-edged shadow shape per form. The result should look
screen printed or inked and filled, not digitally painted.

Clothing: Preserve the white shirt, dark vest, dark pants, boots, watch, and overall
presentation from Image 1.

BELT DESIGN AND PLACEMENT:
- Add the exact City of Lights championship belt from Image 2 around JT's waist
- Preserve its wide saturated purple leather strap and purple central field
- Preserve its large angular gold center plate with stepped shield-like silhouette
- Preserve the central mountain-and-vertical-light motif
- Preserve the prominent words "CITY OF LIGHTS" with smaller "CHAMPIONSHIP" beneath
- Preserve the lime-green circular LoCo Pro medallions on both side plates
- Preserve the gold trim, white stone border details, red corner accents, and strap studs
- Keep the belt front-facing, centered, correctly curved around his waist, and fully
  visible below his crossed arms
- Do not recolor it black, simplify it into an oval generic belt, replace its plate
  silhouette, omit the purple strap, or create a different championship

Pose: Preserve the arms-crossed pose and confident expression from Image 1.

Background: Two or three flat charcoal, black, and muted green shapes with one solid gold
spotlight shape. No gradients, glow, soft lighting, or rendered atmosphere.

JT Staten is the sole championship belt holder in every asset. The belt must be visible
and clearly attached to him. Upper body to mid-thigh framing.
No added text or logos outside the authentic lettering and LoCo Pro marks already
present on the referenced title belt.
```

## Negative Prompt

```
invented face, altered identity, generic wrestler, generic championship belt, black belt
strap, oval center plate, missing purple strap, missing green side medallions, changed
belt logo, multiple belts, belt held in hands, belt over shoulder, photorealistic,
digital painting,
gradients, blended shading, soft shadows, glow, rim light, detailed skin texture, blur,
heroic pose, friendly expression, incorrect anatomy, extra limbs, deformed hands,
watercolor, pastels, warm/orange background, unrelated text, unrelated logos, watermark
```

## Settings

```
model: gpt-image-1
size: 1024x1792
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/jt-staten-portrait.png`
- **Identity reference**: `webimages/TAS-JT-Staten.png`
- **Belt reference**: `webimages/TITLE-BELT.png`
- Export as PNG and pair with the mystery challenger portrait
- Preserve the purple strap, angular center plate, City of Lights lettering, and green
  LoCo Pro side medallions
- "Cold satisfaction" is the key expression note — he's not angry, he's winning
- Preserve the supplied TAS character design
