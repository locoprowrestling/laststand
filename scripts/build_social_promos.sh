#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOC="$ROOT/webimages/social"
SRC="$SOC/source-plates"
LOGO="$ROOT/webimages/ui/logo-badge.png"
BELT="$ROOT/webimages/TITLE-BELT.png"
FONT_DISPLAY="/System/Library/Fonts/Supplemental/Impact.ttf"
FONT_LABEL="/System/Library/Fonts/Supplemental/Arial Narrow Bold.ttf"

magick -size 1080x1080 xc:'#0a0a0a' \
  \( "$SRC/last-stand-square-art-v2.png" -resize '1080x1080^' -gravity center -extent 1080x1080 \) -gravity north -geometry +0+165 -composite \
  \( "$BELT" -resize 350x233 \) -gravity northwest -geometry +92+690 -composite \
  -fill '#0a0a0a' -draw 'rectangle 0,0 1080,255' -draw 'rectangle 0,885 1080,1080' \
  -fill '#1a3d1a' -draw 'rectangle 0,0 1080,42' \
  \( "$LOGO" -resize 104x104 \) -gravity northwest -geometry +38+54 -composite \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 30 -gravity north -annotate +0+58 'LOCO PRO WRESTLING' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 30 -gravity north -annotate +0+104 'THE' \
  -font "$FONT_DISPLAY" -fill '#f5f0e8' -stroke '#0a0a0a' -strokewidth 5 -pointsize 104 -gravity north -annotate +0+132 'LAST STAND' \
  -stroke none -fill '#d4a830' -draw 'rectangle 286,235 794,294' \
  -font "$FONT_LABEL" -fill '#0a0a0a' -pointsize 38 -gravity north -annotate +0+250 'AT THE LODGE' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 42 -gravity south -annotate +0+126 'AUG 30, 2026  ★  LONGMONT, CO' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 32 -gravity south -annotate +0+78 'ELKS LODGE BALLROOM  ★  DOORS 5PM  ★  BELL 6PM' \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 30 -gravity south -annotate +0+34 'TICKETS.LOCOPRO.PW' \
  -quality 94 "$SOC/last-stand-instagram-square.jpg"

magick -size 1080x1350 xc:'#0a0a0a' \
  \( "$SRC/last-stand-instagram-portrait-art-v2.png" -resize '1080x1350^' -gravity center -extent 1080x1350 \) -gravity north -geometry +0+255 -composite \
  \( "$BELT" -resize 405x270 \) -gravity northwest -geometry +135+875 -composite \
  -fill '#0a0a0a' -draw 'rectangle 0,0 1080,315' -draw 'rectangle 0,1135 1080,1350' \
  -fill '#1a3d1a' -draw 'rectangle 0,0 1080,46' \
  \( "$LOGO" -resize 108x108 \) -gravity northwest -geometry +42+58 -composite \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 31 -gravity north -annotate +0+64 'LOCO PRO WRESTLING PRESENTS' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 34 -gravity north -annotate +0+122 'THE' \
  -font "$FONT_DISPLAY" -fill '#f5f0e8' -stroke '#0a0a0a' -strokewidth 6 -pointsize 120 -gravity north -annotate +0+160 'LAST STAND' \
  -stroke none -fill '#d4a830' -draw 'rectangle 238,287 842,358' \
  -font "$FONT_LABEL" -fill '#0a0a0a' -pointsize 45 -gravity north -annotate +0+307 'AT THE LODGE' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 46 -gravity south -annotate +0+148 'SUNDAY  ★  AUGUST 30  ★  2026' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 34 -gravity south -annotate +0+96 'ELKS LODGE BALLROOM  ·  LONGMONT, CO' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 32 -gravity south -annotate +0+56 'DOORS 5PM  ·  BELL 6PM' \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 30 -gravity south -annotate +0+20 'TICKETS.LOCOPRO.PW' \
  -quality 94 "$SOC/last-stand-instagram-portrait.jpg"

magick "$SRC/last-stand-instagram-story-art-v2.png" -resize '1080x1920^' -gravity center -extent 1080x1920 \
  \( "$BELT" -resize 390x260 \) -gravity northwest -geometry +120+1165 -composite \
  -fill '#0a0a0a' -draw 'rectangle 0,0 1080,520' -draw 'rectangle 0,1510 1080,1920' \
  -fill '#1a3d1a' -draw 'rectangle 0,0 1080,58' \
  \( "$LOGO" -resize 148x148 \) -gravity northwest -geometry +48+76 -composite \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 40 -gravity north -annotate +0+88 'LOCO PRO WRESTLING' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 44 -gravity north -annotate +0+190 'THE' \
  -font "$FONT_DISPLAY" -fill '#f5f0e8' -stroke '#0a0a0a' -strokewidth 7 -pointsize 156 -gravity north -annotate +0+242 'LAST STAND' \
  -stroke none -fill '#d4a830' -draw 'rectangle 180,425 900,512' \
  -font "$FONT_LABEL" -fill '#0a0a0a' -pointsize 55 -gravity north -annotate +0+448 'AT THE LODGE' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 54 -gravity south -annotate +0+306 'SUNDAY, AUGUST 30' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 40 -gravity south -annotate +0+240 'ELKS LODGE BALLROOM' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 34 -gravity south -annotate +0+188 '306 COFFMAN ST  ·  LONGMONT, CO' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 38 -gravity south -annotate +0+132 'DOORS 5PM  ★  BELL 6PM' \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 40 -gravity south -annotate +0+66 'TICKETS.LOCOPRO.PW' \
  -quality 94 "$SOC/last-stand-instagram-story.jpg"

magick "$SRC/last-stand-tiktok-art-v2.png" -resize '1080x1920^' -gravity center -extent 1080x1920 \
  \( "$BELT" -resize 340x227 \) -gravity northwest -geometry +235+1025 -composite \
  -fill '#0a0a0a' -draw 'rectangle 0,0 1080,335' -draw 'rectangle 0,1490 1080,1920' \
  -fill '#1a3d1a' -draw 'rectangle 0,0 1080,56' \
  \( "$LOGO" -resize 132x132 \) -gravity northwest -geometry +48+76 -composite \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 38 -gravity north -annotate +0+82 'LOCO PRO WRESTLING' \
  -font "$FONT_DISPLAY" -fill '#f5f0e8' -stroke '#0a0a0a' -strokewidth 6 -pointsize 112 -gravity north -annotate +0+150 'LIVE IN LONGMONT' \
  -stroke none -fill '#d4a830' -draw 'rectangle 170,305 910,382' \
  -font "$FONT_LABEL" -fill '#0a0a0a' -pointsize 48 -gravity north -annotate +0+324 'LAST STAND AT THE LODGE' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 58 -gravity south -annotate +0+312 'AUGUST 30, 2026' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 42 -gravity south -annotate +0+246 'ELKS LODGE BALLROOM' \
  -font "$FONT_LABEL" -fill '#f5f0e8' -pointsize 36 -gravity south -annotate +0+192 'DOORS 5PM  ★  BELL 6PM' \
  -font "$FONT_LABEL" -fill '#6dbf2d' -pointsize 42 -gravity south -annotate +0+108 'GET TICKETS NOW' \
  -font "$FONT_LABEL" -fill '#d4a830' -pointsize 34 -gravity south -annotate +0+54 'TICKETS.LOCOPRO.PW' \
  -quality 94 "$SOC/last-stand-tiktok-cover.jpg"

magick \
  \( "$SOC/last-stand-instagram-square.jpg" -resize 360x360 -background '#111111' -gravity center -extent 400x500 \) \
  \( "$SOC/last-stand-instagram-portrait.jpg" -resize 360x450 -background '#111111' -gravity center -extent 400x500 \) \
  +append "$SOC/contact-row-1.jpg"
magick \
  \( "$SOC/last-stand-instagram-story.jpg" -resize 360x640 -background '#111111' -gravity center -extent 400x700 \) \
  \( "$SOC/last-stand-tiktok-cover.jpg" -resize 360x640 -background '#111111' -gravity center -extent 400x700 \) \
  +append "$SOC/contact-row-2.jpg"
magick "$SOC/contact-row-1.jpg" "$SOC/contact-row-2.jpg" -append "$SOC/contact-sheet.jpg"
rm -f "$SOC/contact-row-1.jpg" "$SOC/contact-row-2.jpg"
