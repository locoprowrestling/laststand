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
- Image 3: `webimages/Last-Stand-Poster.png` is the mandatory rendering and art-direction
  reference. Match its character linework, anatomy, facial planes, cel shading, texture,
  and dramatic poster finish.

Preserve JT's exact face, hair, skin tone, build, proportions, confident expression,
arms-crossed pose, white rolled-sleeve shirt, dark vest, dark pants, boots, watch, and
distinguishing features from Image 1. Do not invent, average, beautify, replace, or turn
him into a different wrestler.

Redraw JT in the exact character-art language of Image 3 without changing his identity:
- Heavy variable-width black ink contours
- Angular jaw, brow, cheek, nose, neck, hand, and clothing shadow shapes
- Two or three hard-edged cel-shading bands, never smooth shading
- Warm saturated skin base with deeper amber-brown shadow planes
- Sparse short ink hatches, scratches, and stipple specks matching the poster
- Strong black clothing masses with sharp charcoal highlight shapes
- More anatomical definition and dramatic weight than the clean TAS mascot source
- Crisp high-contrast finish that looks printed and inked, not vector-flat

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

Pose: Preserve the arms-crossed pose and confident expression from Image 1, but frame
him with the same imposing close fight-poster energy as Image 3: broad shoulders, strong
three-quarter angle, tight crop, and a slight upward perspective. He remains composed,
cold, and in control rather than shouting or throwing a punch.

Background: Transparent outside the figure. If a backing shape is required during
generation, use a removable flat chroma key only.

JT Staten is the sole championship belt holder in every asset. The belt must be visible
and clearly attached to him. Upper body to mid-thigh framing.
No added text or logos outside the authentic lettering and LoCo Pro marks already
present on the referenced title belt.
```

## Negative Prompt

```
clean mascot style, simple corporate vector art, uniform outline weight, minimal cartoon
face, chibi proportions, smooth plastic skin, invented face, altered identity, generic
wrestler, generic championship belt, black belt
strap, oval center plate, missing purple strap, missing green side medallions, changed
belt logo, multiple belts, belt held in hands, belt over shoulder, photorealistic,
digital painting, gradients, blended shading, soft shadows, glow, photorealistic pores, blur,
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
- **Style reference**: `webimages/Last-Stand-Poster.png`
- Export as PNG and pair with the mystery challenger portrait
- Preserve the purple strap, angular center plate, City of Lights lettering, and green
  LoCo Pro side medallions
- "Cold satisfaction" is the key expression note — he's not angry, he's winning
- Preserve the supplied TAS character design
