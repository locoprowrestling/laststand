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
- Blue, purple, or pink
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
**Simple flat-color comic book wrestling poster** — clean shapes, limited colors, and bold black outlines inspired by screen-printed wrestling posters.

### Mandatory Flat-Color Rules

- Use large, unmodulated color shapes.
- Use one flat base color and, only when needed, one hard-edged shadow shape per form.
- Use a consistent bold black outline.
- Do not use gradients, airbrushing, painterly blending, soft shadows, glow effects, rim-light effects, specular rendering, or realistic skin rendering.
- Do not add halftone, paper grain, distressed texture, or noise unless a specific non-character background prompt explicitly requests it.
- Faces must remain graphic and recognizable at thumbnail size, with minimal interior linework.
- The result should look screen printed or inked and filled, not digitally painted.

### Character Illustration Rules

- **Source identity**: JT Staten must start from `webimages/TAS-JT-Staten.png`. The
  mystery challenger must start from `webimages/TAS-Silhouette.png` and remain
  featureless. Adam Starling is not depicted because no official portrait is supplied.
  Never invent or infer a person's appearance from prose.
- **Outlines**: Uniform 2–4px bold black outline on character silhouettes and major features
- **Shading**: Flat-color fills with at most one hard-edged shadow shape
- **Highlights**: No rendered highlights, glow, or rim lighting
- **Pose**: Dynamic, low-angle hero shots; characters should feel imposing and large
- **Expression**: Intense, dramatic — scowling, confident, or menacing
- **Color**: Rich saturated flat fills — dark skin tones stay warm and saturated, not grey
- **Championship continuity**: JT Staten is the only person shown with a championship
  belt. Never put a belt on the mystery challenger or any other figure.

### Background Treatment

- **Setting**: Elks Lodge Ballroom (built 1925) — ornate woodwork, mounted elk heads/antlers, brass chandeliers with amber light, dark exposed timber ceiling
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
simple flat-color comic book illustration, screen-printed look, large solid color shapes,
uniform bold black outlines, at most one hard-edged shadow shape, pro wrestling event poster art,
deep green and gold limited palette, high contrast, professional wrestling,
Longmont Colorado, Elks Lodge, 2026
```

### Universal Negative Keywords

Add to every prompt where supported:
```
photorealistic, digital painting, painterly rendering, gradients, airbrush, soft shadows,
glow, rim lighting, specular highlights, detailed skin rendering, blurry, watermark,
text errors, stock photo, corporate clipart, pastel colors, blue tones, purple,
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
