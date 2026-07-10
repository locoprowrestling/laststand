# LoCo Pro Wrestling — The Last Stand at the Lodge
## Graphics Style Guide

---

## Overview

All graphics for "The Last Stand at the Lodge" should feel like panels torn from a prestige wrestling poster — bold comic-book illustration combined with the gravitas of a championship bout. Think classic pro wrestling event art: dramatic character illustrations, theatrical lighting, explosive typography, and a color palette rooted in LoCo Pro's brand identity.

---

## Color Palette

### Primary Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--green` | `#6dbf2d` | LoCo Pro brand green — logos, borders, key accents |
| `--green-dark` | `#1a3d1a` | Deep forest green — background fills, atmospheric shadows |
| `--gold` | `#d4a830` | Event prestige — title text, championship elements, dividers |
| `--gold-bright` | `#f5c518` | Hero headlines, foil effects, high-contrast accents |
| `--black` | `#0a0a0a` | Primary background, outlines |
| `--white` | `#f5f0e8` | Body text, light fill on dark backgrounds |

### Background Atmospherics

| Use | Color |
|---|---|
| Hero/poster background fill | `#0d1a0d` (near-black forest green) |
| Mid-section fills | `#111111` to `#1a1a1a` |
| Card/panel backgrounds | `#1e1e1e` to `#242424` |
| Spotlight shapes | `#d4a830` (solid gold shape) |
| Green shadow shapes | `#1a3d1a` (solid forest green shape) |

### Forbidden Colors

Do NOT use:
- Pastels or desaturated mid-tones
- Blue or pink as dominant colors
- Purple outside the saturated deep-purple treatment established by
  `webimages/Last-Stand-Poster.png` and `webimages/TITLE-BELT.png`
- Bright orange (reserved for warnings, not brand)
- Gradients of any kind inside generated artwork

---

## Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| Event title / display | Bebas Neue | 400 | All-caps, tight tracking |
| Section headings | Oswald | 700 | All-caps, uppercase |
| Supporting labels | Oswald | 300–400 | Wide tracking (0.2–0.4em) |
| Body copy | Open Sans | 300–400 | Sentence case |

### Text Hierarchy in Graphics

1. **THE / AT THE** — small, wide-tracked Oswald 300, white or gold
2. **LAST STAND** — massive Bebas Neue, white or off-white, slight drop shadow
3. **LODGE** — large Bebas Neue, gold
4. Supporting info — Oswald 600, small, wide tracking, gold or white

### Typography Rules

- All headline text is ALL-CAPS
- Use thick drop shadows or outer strokes on headline text overlaid on images
- Star separators `★` between info items (e.g., `★ AUG 30 ★ LONGMONT, CO ★`)
- Avoid mixing more than 2 weights in a single graphic

---

## Illustration Style

### Core Aesthetic
**High-impact inked wrestling comic art matching `webimages/Last-Stand-Poster.png`** —
bold variable black linework, angular anatomy, hard cel shading, saturated color fields,
and controlled print texture. The poster is the mandatory style reference for every
character illustration.

### Mandatory Comic Rendering Rules

- Match the linework and rendering in `webimages/Last-Stand-Poster.png`.
- Use heavy, variable-width black contour lines: thick around the silhouette and major
  overlaps, thinner around facial features, fingers, clothing folds, and belt details.
- Use a flat base color plus two or three hard-edged cel-shading bands. No smooth tonal
  transitions.
- Build faces from sharp graphic planes: strong brow, nose, cheek, jaw, and neck shadows.
- Use selective short black hatch marks, ink scratches, and sparse stipple specks on skin,
  hair, and clothing. Keep texture controlled rather than noisy.
- Do not turn controlled comic texture into grit, grunge, splatter, dirty scratches,
  distressed paint, or noisy print distress. These are not part of the Last Stand style.
- Use small, hard warm highlights only where the poster style uses them.
- Preserve clean separation between shapes and strong readability at thumbnail size.
- Do not use gradients, airbrushing, painterly blending, soft shadows, photographic skin,
  glossy 3D rendering, or mascot/vector simplification.

### Character Illustration Rules

- **Source identity**: JT Staten must start from `webimages/TAS-JT-Staten.png`. The
  mystery challenger must start from `webimages/TAS-Silhouette.png` and remain
  featureless. Adam Starling is not depicted because no official portrait is supplied.
  Never invent or infer a person's appearance from prose.
- **Style reference**: `webimages/Last-Stand-Poster.png` controls line weight, anatomy,
  facial construction, shading density, texture, pose energy, and overall finish.
- **Identity vs. style**: TAS images control who the character is; the poster controls
  how the character is drawn. Never copy another poster character's face onto JT.
- **Outlines**: Variable heavy black ink outlines, not uniform vector strokes
- **Shading**: Two or three hard-edged cel-shading bands with angular shadow shapes
- **Texture**: Sparse ink hatch, scratch, and stipple marks matching the poster
- **Pose**: Tight, dynamic fight-poster crops with large shoulders, foreshortened fists,
  strong diagonals, and overlapping frame edges when appropriate
- **Expression**: Intense and specific; JT remains cold and confident rather than generic
- **Color**: Warm saturated skin, deep black clothing shadows, cream highlights, and
  poster-matched green, purple, gold, and black accents
- **Championship continuity**: JT Staten is the only person shown with a championship
  belt. Never put a belt on the mystery challenger or any other figure.
- **Belt accuracy**: For social promo composites, do not ask ImageGen to invent the
  City of Lights championship belt. Generate JT with an unobstructed waist and no belt,
  then composite the approved `webimages/TITLE-BELT.png` in the build step.

### Background Treatment

- **Setting**: Use `webimages/Elks-Lodge-Ballroom.jpeg` for the real room architecture
- **Atmosphere**: Smoke and spotlights are represented as simple solid graphic shapes
- **Color treatment**: Deep forest green shadow shapes, flat gold-amber light shapes, and black negative space
- **No photography** — all backgrounds should feel illustrated or heavily stylized

### Poster Composition Pattern

Follow this Z-pattern layout (used by the reference poster):
1. **Top-left**: LoCo Pro brand mark / logo badge
2. **Top-center**: Event title block
3. **Mid-frame**: Character illustrations flanking center (antagonist left, protagonist right) with venue visible through the center
4. **Bottom bar**: Date | Venue Name | Time — in alternating gold/black blocks with star separators

---

## Graphic Assets Needed

All generated images should be saved in **`webimages/ui/`**.

| File | Dimensions | Format | Purpose |
|---|---|---|---|
| `webimages/ui/hero-background.jpg` | 1920×1080 | JPG | Hero section full-bleed bg |
| `webimages/ui/wrestlers-confrontation.png` | 1200×800 | PNG (transparent bg) | About section / feature image |
| `webimages/ui/mystery-challenger-badge.png` | 600×600 | PNG | Circular badge, about section |
| `webimages/ui/mystery-challenger-portrait.png` | 600×900 | PNG | Character card |
| `webimages/ui/jt-staten-portrait.png` | 600×900 | PNG | Character card |
| `webimages/ui/event-poster-web.jpg` | 800×1200 | JPG | Full poster for web |
| `webimages/ui/social-square.jpg` | 1080×1080 | JPG | Instagram |
| `webimages/ui/social-wide.jpg` | 1200×630 | JPG | Facebook / X / OG image |
| `webimages/ui/logo-badge.png` | 400×400 | PNG | Nav / favicon source |
| `webimages/ui/ticket-design-bg.jpg` | 900×400 | JPG | Ticket card texture |

---

## OpenAI ImageGen Settings

### Recommended Parameters

```
model: gpt-image-1
size: 1024x1024 (square) | 1792x1024 (wide) | 1024x1792 (tall)
quality: high
```

### Universal Positive Keywords

Include these in every prompt:
```
inked wrestling comic art matching webimages/Last-Stand-Poster.png, variable heavy black
linework, angular anatomy, two or three hard cel-shading bands, sparse ink hatch and
stipple texture, saturated green purple gold and black palette, high contrast,
professional wrestling event poster art,
Longmont Colorado, Elks Lodge, 2026
```

### Universal Negative Keywords

Add to every prompt where supported:
```
photorealistic, digital painting, painterly rendering, gradients, airbrush, soft shadows,
glossy 3D rendering, smooth vector mascot art, uniform thin outlines, chibi proportions,
blurry, watermark, text errors, stock photo, corporate clipart, pastel colors, blue tones,
AI artifact faces, invented wrestler identity, low quality, pixelated
```

---

## Brand Voice in Graphics

- **Tone**: Dramatic. Cinematic. Historic. This isn't a backyard show — it's The Last Stand.
- **Stakes**: The Elks Lodge is sacred ground for Starling. Every image should feel like something real is on the line.
- **Avoid**: Cartoonishly comedic, overly playful, or bright/bubbly aesthetics. Keep it dark and electric.
- **Tagline energy**: "Adam Starling has the venue. JT Staten has everything else."

---

## Reference Colors in Hex (for Figma / Photoshop)

```
LoCo Pro Green:     #6DBF2D
Deep Forest:        #1A3D1A
Prestige Gold:      #D4A830
Bright Gold:        #F5C518
Event Black:        #0A0A0A
Warm White:         #F5F0E8
Smoke White:        rgba(245,240,232,0.75)
```
