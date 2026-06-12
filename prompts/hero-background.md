# Prompt: Hero Background
**Asset**: `hero-background.jpg`  
**Dimensions**: 1920×1080 (use `1792x1024` in ImageGen, then scale up)  
**Section**: Hero full-bleed background image

---

## ImageGen Prompt

```
Interior of a historic 1920s ballroom at night transformed into a professional wrestling arena. 
Ornate wood-paneled walls with mounted elk antler trophies, brass chandeliers casting amber 
light, exposed dark timber ceiling with decorative molding. Center of the frame has a 
professional wrestling ring with white ropes and canvas, lit from above by intense spotlights 
that cut through thin smoke machine haze drifting at floor level. 

Deep forest green atmosphere fills the shadows, gold-amber pools of spotlight on the ring. 
Empty crowd seating visible in blurred bokeh background. The venue feels historic, intimate, 
and charged with electric anticipation — like a championship bout is minutes away.

Comic book illustration style with cel-shaded rendering, bold artistic treatment, deep 
green and gold color palette, dramatic low-angle perspective looking toward the ring, 
cinematic wide shot. Pro wrestling event poster art aesthetic. Dark and atmospheric.
No people. No text. No logos.
```

## Negative Prompt

```
photorealistic photography, blurry, stock photo, people, wrestlers, text, watermark, 
logos, pastel colors, blue, purple, bright white walls, modern LED lighting, 
gymnasium aesthetic, low quality
```

## Settings

```
model: gpt-image-1
size: 1792x1024
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/hero-background.jpg`
- Used as the `background-image` in `.hero-bg` — will be overlaid with dark gradient
- Keep the center of the image relatively dark so white text is legible
- The ring should be centered or slightly left-of-center
- After generating, apply a CSS overlay: `linear-gradient(0deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 60%)`
