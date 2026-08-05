# The Last Stand at the Lodge

Single-page event landing site for the LoCo Pro Wrestling show **"The Last Stand
at the Lodge"** — August 30, 2026, 6:00 PM MT, at the Elks Lodge Ballroom. Hero
with a live countdown, venue and about sections with scroll-reveal animations,
and a tickets section. Static HTML/CSS/JS, no build step.

Live at [laststand.locopro.pw](https://laststand.locopro.pw).

## Structure

```text
index.html      The landing page
thank-you.html  Post-purchase confirmation page
styles.css      All styling
script.js       Countdown timer + scroll-reveal + smooth-scroll anchors
webimages/      Optimized event graphics used by the page
source-assets/  Original artwork
prompts/        Image-generation prompts
scripts/
  build_event_graphics.py   Regenerates/optimizes the event graphics
  build_social_promos.sh    Builds TikTok/Instagram promo images from clean
                            source plates with deterministic text and belt overlays
CNAME           laststand.locopro.pw
```

## Social Preview

The page uses a poster-derived top crop for social previews:

```text
webimages/ui/poster-top-social.jpg
```

Use this crop when the desired unfurl should show the top of the event poster. Do not replace it
with the alternate wide promotional card unless the preview is intentionally being redesigned.

Verify metadata and the image response after changing preview art:

```sh
curl -s https://laststand.locopro.pw | rg 'og:image|twitter:image'
curl -I https://laststand.locopro.pw/webimages/ui/poster-top-social.jpg
```

## TikTok / Instagram Promo Images

Promotional post images live in:

```text
webimages/social/
```

Use `scripts/build_social_promos.sh` to rebuild the platform finals from source
plates. The script adds crisp text and composites the approved
`webimages/TITLE-BELT.png`; do not ask ImageGen to invent the City of Lights
belt. Source plates should be clean current-style artwork with no generated
text, no generated belt, no gritty/grungy/splatter texture, and an unobstructed
JT waist for belt placement.

For the full operating note and the 2026-07-06 friction log, see:

```text
../../.knowledgebase/projects/laststand/social-promo-image-workflow.md
```

## Running locally

It's a static site — open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

The countdown in `script.js` targets `2026-08-30T18:00:00-06:00`; update that
date if the event moves.

## Deploy

`.github/workflows/deploy-pages.yml` builds the publish artifact via
`scripts/build-pages.sh` (which excludes `scripts/`, `prompts/`,
`source-assets/`, `archive/`, and other repo-only paths) and deploys it
through GitHub Actions on every push to the default branch. `CNAME` points
the site at `laststand.locopro.pw`.
