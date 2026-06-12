# Prompt: Wrestlers Confrontation
**Asset**: `wrestlers-confrontation.png`  
**Dimensions**: 1200×800 (use `1792x1024`, export as PNG)  
**Section**: Feature image / About section or Hero accent

---

## ImageGen Prompt

```
Two pro wrestlers facing off in dramatic confrontation, comic book illustration style.

Left figure (the villain, JT Staten): A powerfully built man in his 30s with a shaved head 
and trimmed beard, wearing dark ring gear with "THE FOUNDATION" lettering on his trunks. 
He stands with arms crossed and a cold, contemptuous smirk — he's the champion, he knows it. 
He wears a large ornate championship belt around his waist. Black and dark grey color scheme 
with gold trim. Positioned slightly forward and dominant.

Right figure (the hero, Adam Starling): A lean, athletic man in his mid-30s with medium-length 
dark hair, intense determined expression, wearing dark trunks with star motifs. He points 
directly at Staten, jaw set, eyes burning — this is his building and he knows it. Slightly 
lower position, reaching upward toward his opponent.

Background: The interior of the Elks Lodge Ballroom — ornate wood paneling, mounted elk 
antler trophies, brass chandelier, amber spotlight from above, thin smoke haze at floor 
level. Deep forest green shadows, dramatic gold-amber lighting.

Both figures have bold black outlines, cel-shaded comic book coloring, hard-edged highlights, 
dramatic low-angle perspective. Full-body from roughly the knee up. High contrast. Pro 
wrestling event poster art. The space between them is charged with tension.

No text. No logos. Transparent background preferred on figures.
```

## Negative Prompt

```
photorealistic, blurry, stock wrestling photo, identical figures, goofy expressions, 
cartoonish humor, pastel colors, blue/purple tones, text, watermark, logos, 
identical outfits, both figures same size/position, low quality
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- Can be used as a wide feature image between sections
- Alternatively crop to portrait for individual wrestler cards
- The venue background reinforces the setting without needing text
- If background renders opaque, can be masked in CSS with `mix-blend-mode: multiply`
