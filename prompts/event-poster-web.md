# Prompt: Event Poster (Web Version)
**Asset**: `event-poster-web.jpg`  
**Dimensions**: 800×1200 (use `1024x1792`, export as JPG)  
**Section**: General promotional use, homepage feature, print-ready poster

---

## ImageGen Prompt

```
INPUT IMAGES REQUIRED:
- Use `webimages/Last-Stand-Poster.png` as the mandatory overall poster and character
  style reference.
- Use `webimages/TAS-JT-Staten.png` for JT's identity.
- Use `webimages/TITLE-BELT.png` for JT's belt.
- Use `webimages/TAS-Silhouette.png` for the mystery figure.
- Use `webimages/Elks-Lodge-Ballroom.jpeg` for venue architecture.

Preserve JT's exact identity and the silhouette's complete anonymity. Do not depict
another person without an official supplied portrait.

Professional wrestling event poster for "THE LAST STAND AT THE LODGE" — a LoCo Pro
Wrestling event. Match the supplied poster's dense inked comic art: variable heavy black
contours, angular anatomy, two or three hard cel-shading bands, warm skin shadows,
selective hatch/stipple texture, dramatic cropped figures, saturated green and purple
radial comic fields, and high-contrast print finish.

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
- Center background: The real Elks Lodge Ballroom architecture from its reference image
- Right side: The supplied `TAS-Silhouette.png`, preserved as a featureless anonymous
  challenger with a large gold question mark nearby and no championship belt

BOTTOM SECTION — Flat info bar, 30% of poster height, gold and black blocks:
- Left block (gold background, black text): Large "SUNDAY" above "AUGUST 30" in 
  massive bold numbers
- Center block (white background, black text): "ELKS LODGE BALLROOM ★ 306 Coffman St 
  Longmont, CO 80501"  
- Right block (gold background, black text): "DOORS 5:00PM" and "BELL TIME 6:00PM"
- Very bottom strip: "LIVE PRO WRESTLING IN LONGMONT!" in small black text on gold

No other person may appear. Preserve the poster's green, purple, gold, cream, black, and
warm skin palette. No smooth gradients, painterly rendering, or photoreal detail.
```

## Negative Prompt

```
clean mascot vector style, uniform outlines, simplified cartoon faces, invented wrestler
identity, altered JT face or clothing, revealed challenger, extra
championship belts, photorealistic, digital painting, gradients,
blended shading, glow, rim lighting, detailed skin rendering, blur, stock photos,
text spelling errors, clipart, corporate design, pastel colors, blue-dominant palette,
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
