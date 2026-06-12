# Prompt: Event Poster (Web Version)
**Asset**: `event-poster-web.jpg`  
**Dimensions**: 800×1200 (use `1024x1792`, export as JPG)  
**Section**: General promotional use, homepage feature, print-ready poster

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED: Use `webimages/TAS-JT-Staten.png` and
`webimages/TAS-Silhouette.png` as the only character sources. Preserve JT's exact
official design and the silhouette's complete anonymity. Do not depict Adam Starling,
the authority figure, or any other person without an official supplied portrait.

Professional wrestling event poster for "THE LAST STAND AT THE LODGE" — a LoCo Pro
Wrestling event. Simple flat-color comic book illustration with large solid shapes,
uniform bold black outlines, minimal interior linework, and at most one hard-edged
shadow shape per form. Screen-printed poster look, not digital painting.

LAYOUT (top to bottom):

TOP SECTION — Deep forest green background (#1a3d1a), 25% of poster height:
- Top-left corner: Small round badge/seal reading "LOCO PRO" in bright lime green and 
  black, outlined in gold
- Center top: "THE" in small wide-tracked white capitals
- Large center: "LAST STAND" in massive Bebas Neue-style white block letters with 
  thick gold drop shadow — this is the dominant typographic element
- Below that: "★ AT THE LODGE ★" in a gold banner/ribbon with dark text

MIDDLE SECTION — The main illustration, 45% of poster height:
- Left side: JT Staten matched exactly to `TAS-JT-Staten.png`, including his clothing
  and arms-crossed pose, with the only championship belt in the poster
- Center background: Interior of the Elks Lodge Ballroom — ornate woodwork, mounted 
  elk antler trophy visible on wall, brass chandelier, dramatic spotlights, 
  "ELKS LODGE · LONGMONT, CO" visible as a sign
- Right side: The supplied `TAS-Silhouette.png`, preserved as a featureless anonymous
  challenger with a large gold question mark nearby and no championship belt

BOTTOM SECTION — Flat info bar, 30% of poster height, gold and black blocks:
- Left block (gold background, black text): Large "SUNDAY" above "AUGUST 30" in 
  massive bold numbers
- Center block (white background, black text): "ELKS LODGE BALLROOM ★ 306 Coffman St 
  Longmont, CO 80501"  
- Right block (gold background, black text): "DOORS 5:00PM" and "BELL TIME 6:00PM"
- Very bottom strip: "LIVE PRO WRESTLING IN LONGMONT!" in small black text on gold

No other person may appear. Flat forest green, black, warm white, and gold palette only.
No gradients, glow, rendered lighting, painterly texture, or photoreal detail.
```

## Negative Prompt

```
invented wrestler identity, altered JT face or clothing, revealed challenger, extra
championship belts, photorealistic, digital painting, gradients,
blended shading, glow, rim lighting, detailed skin rendering, blur, stock photos,
text spelling errors, clipart, corporate design, pastel colors, blue/purple,
modern minimalist, incomplete layout, missing text elements, watermark
```

## Settings

```
model: gpt-image-1
size: 1024x1792
quality: high
```

## Usage Notes

- **Save to**: `webimages/ui/event-poster-web.jpg`
- This is the full poster — the most complex prompt, may require iteration
- If text renders incorrectly, generate the poster WITHOUT text and overlay text in CSS/design tool
- The bottom info bar design directly mirrors the reference poster provided by the client
- Key character positions: Staten left versus the mystery silhouette right
