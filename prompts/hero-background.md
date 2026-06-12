# Prompt: Hero Background
**Asset**: `hero-background.jpg`  
**Dimensions**: 1920×1080 (use `1792x1024` in ImageGen, then scale up)  
**Section**: Hero full-bleed background image

---

## ImageGen Prompt

```
INPUT IMAGE REQUIRED: Use `webimages/Elks-Lodge-Ballroom.jpeg` as the architectural
reference and composition guide. Preserve the room's real proportions and recognizable
features. Do not replace it with a generic grand ballroom, theater, lodge hall, or arena.

Transform the actual Elks Lodge Ballroom shown in the reference into an intimate
professional wrestling venue at night.

ACCURATE ROOM FEATURES:
- A long rectangular ballroom with a tall, approximately two-story-height flat ceiling;
  the room has substantial vertical volume but is not vaulted
- Cream-colored patterned ceiling tiles divided by large exposed dark-brown wood beams
  running across the width of the room
- Multiple simple dark ceiling fans mounted between the beams
- Rows of hanging cylindrical metal-and-glass pendant lights suspended on long cords
- Tall, narrow windows grouped in sets of three, with rounded arched tops, dark wood
  frames, and deep wood radiator covers or wall boxes beneath them
- Pale cream and muted yellow wall panels divided by simple dark wood trim
- A polished dark parquet or wood-block dance floor with broad reflected light shapes
- Framed vintage ballroom dance murals on the walls
- A round Elks emblem mounted on the far wall
- A small low rectangular platform or riser against the right wall
- No mounted animal heads, antlers, ornate wood paneling, grand chandeliers, balcony,
  theater stage, vaulted ceiling, exposed roof trusses, or decorative molding

Add a regulation professional wrestling ring on the open dance floor, centered or
slightly left of center. The ring must fit naturally beneath the cross beams without
changing the room's architecture. Use white ropes, dark corner posts, and a warm-white
canvas. Add only a few compact rows of empty folding chairs around the ring so the
ballroom still feels intimate and its windows, murals, beams, pendant lights, and floor
remain visible.

Show the room at night. The windows are dark. Existing pendant fixtures provide small
warm-gold light shapes while simple temporary wrestling spotlights illuminate the ring.
Keep the center dark enough for white website headline text. The atmosphere should feel
historic, modest, close-quarters, and charged with anticipation rather than grand,
luxurious, cavernous, or theatrical.

Simple flat-color comic book illustration with large solid shapes, uniform bold black
outlines, and at most one hard-edged shadow shape per object. Screen-printed poster look,
not digital painting. Represent spotlights, smoke, and depth as clean flat graphic shapes.
Use the reference image's wide corner view and strong receding ceiling beams as the
composition foundation, adjusted to a cinematic 16:9 crop at approximately eye level.
Deep green, dark brown, cream, muted yellow, black, and gold limited palette.
No people. No text. No logos.
```

## Negative Prompt

```
generic grand ballroom, ornate ballroom, theater, opera house, rustic hunting lodge,
mounted elk, antlers, animal trophies, ornate wood paneling, brass chandelier, crystal
chandelier, vaulted ceiling, cathedral ceiling, exposed roof trusses, balcony, grand stage,
luxury interior, cavernous arena, modern gymnasium, modern LED walls, oversized crowd,
photorealistic photography, digital painting, gradients, blended shading, soft shadows,
glow, rim lighting, detailed textures, blur, stock photo, people, wrestlers, text,
watermark, logos, pastel colors, blue, purple, low quality
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/hero-background.jpg`
- **Reference image**: `webimages/Elks-Lodge-Ballroom.jpeg`
- Preserve the real two-story-height flat ceiling, cross beams, grouped arched windows,
  pendant lights, wall murals, parquet floor, Elks emblem, and right-side platform
- Used as the `background-image` in `.hero-bg` — will be overlaid with dark gradient
- Keep the center of the image relatively dark so white text is legible
- The ring should be centered or slightly left-of-center
- After generating, apply a CSS overlay: `linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 60%)`
