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
CNAME           laststand.locopro.pw
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

GitHub Pages serves the repo root; `CNAME` points the site at
`laststand.locopro.pw`. Push to the default branch to publish.
