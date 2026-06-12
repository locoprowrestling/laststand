from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
UI = ROOT / "webimages" / "ui"
TMP = ROOT / "tmp" / "imagegen"
WEBIMAGES = ROOT / "webimages"

BLACK = "#0a0a0a"
DARK = "#111111"
GREEN = "#1a3d1a"
LIME = "#6dbf2d"
GOLD = "#d4a830"
BRIGHT_GOLD = "#f5c518"
WHITE = "#f5f0e8"

DISPLAY_FONT = "/System/Library/Fonts/Supplemental/Impact.ttf"
LABEL_FONT = "/System/Library/Fonts/Supplemental/Arial Narrow Bold.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def fit_text(draw, text, max_width, start_size, path=DISPLAY_FONT):
    size = start_size
    while size > 12:
        candidate = font(path, size)
        if draw.textbbox((0, 0), text, font=candidate, stroke_width=1)[2] <= max_width:
            return candidate
        size -= 2
    return font(path, size)


def centered(draw, xy, text, text_font, fill, stroke=0, stroke_fill=BLACK):
    draw.text(
        xy,
        text,
        font=text_font,
        fill=fill,
        anchor="mm",
        align="center",
        stroke_width=stroke,
        stroke_fill=stroke_fill,
    )


def crop_alpha(image):
    image = image.convert("RGBA")
    bbox = image.getchannel("A").getbbox()
    return image.crop(bbox) if bbox else image


def contain_alpha(image, size):
    image = crop_alpha(image)
    image.thumbnail(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", size)
    canvas.alpha_composite(
        image, ((size[0] - image.width) // 2, (size[1] - image.height) // 2)
    )
    return canvas


def outline_mystery(image):
    image = crop_alpha(image)
    alpha = image.getchannel("A")
    expanded = alpha.filter(ImageFilter.MaxFilter(31))
    outline = Image.new("RGBA", image.size, BRIGHT_GOLD)
    outline.putalpha(expanded)
    silhouette = Image.new("RGBA", image.size, BLACK)
    silhouette.putalpha(alpha)
    outline.alpha_composite(silhouette)
    return outline


def cover(image, size):
    return ImageOps.fit(image.convert("RGB"), size, Image.Resampling.LANCZOS)


def darken(image, opacity=90):
    overlay = Image.new("RGBA", image.size, (10, 10, 10, opacity))
    result = image.convert("RGBA")
    result.alpha_composite(overlay)
    return result


def save_jpg(image, path):
    image.convert("RGB").save(path, quality=94, subsampling=0)


def build_portraits(jt, mystery):
    contain_alpha(jt, (600, 900)).save(UI / "jt-staten-portrait.png")
    contain_alpha(mystery, (600, 900)).save(UI / "mystery-challenger-portrait.png")


def build_confrontation(hero, jt, mystery):
    canvas = darken(cover(hero, (1200, 800)), 55)
    jt_layer = contain_alpha(jt, (510, 720))
    mystery_layer = contain_alpha(mystery, (430, 660))
    canvas.alpha_composite(jt_layer, (60, 70))
    canvas.alpha_composite(mystery_layer, (720, 115))
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((566, 110, 634, 690), fill=GOLD)
    centered(draw, (600, 400), "VS", font(DISPLAY_FONT, 58), BLACK)
    canvas.save(UI / "wrestlers-confrontation.png")


def draw_title(draw, center_x, top, max_width, scale=1.0):
    centered(draw, (center_x, top), "THE", font(LABEL_FONT, int(28 * scale)), GOLD)
    title_font = fit_text(draw, "LAST STAND", max_width, int(106 * scale))
    centered(
        draw,
        (center_x, top + int(72 * scale)),
        "LAST STAND",
        title_font,
        WHITE,
        stroke=max(2, int(4 * scale)),
        stroke_fill=BLACK,
    )
    banner_y = top + int(142 * scale)
    draw.rectangle(
        (
            center_x - max_width // 2,
            banner_y,
            center_x + max_width // 2,
            banner_y + int(48 * scale),
        ),
        fill=GOLD,
    )
    centered(
        draw,
        (center_x, banner_y + int(24 * scale)),
        "AT THE LODGE",
        font(LABEL_FONT, int(26 * scale)),
        BLACK,
    )


def build_poster(hero, jt, mystery):
    canvas = darken(cover(hero, (800, 1200)), 75)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 800, 250), fill=GREEN)
    draw_title(draw, 400, 35, 690, 1.0)

    jt_layer = contain_alpha(jt, (390, 650))
    mystery_layer = contain_alpha(mystery, (320, 570))
    canvas.alpha_composite(jt_layer, (20, 245))
    canvas.alpha_composite(mystery_layer, (465, 315))

    draw = ImageDraw.Draw(canvas)
    centered(draw, (615, 570), "?", font(DISPLAY_FONT, 150), BRIGHT_GOLD, 4)
    draw.rectangle((0, 900, 800, 1200), fill=BLACK)
    draw.rectangle((0, 900, 235, 1200), fill=GOLD)
    draw.rectangle((565, 900, 800, 1200), fill=GOLD)
    centered(draw, (117, 955), "SUNDAY", font(LABEL_FONT, 30), BLACK)
    centered(draw, (117, 1035), "AUG 30", font(DISPLAY_FONT, 66), BLACK)
    centered(draw, (117, 1100), "2026", font(LABEL_FONT, 30), BLACK)
    centered(draw, (400, 975), "ELKS LODGE BALLROOM", font(LABEL_FONT, 31), WHITE)
    centered(draw, (400, 1035), "306 COFFMAN ST", font(LABEL_FONT, 24), GOLD)
    centered(draw, (400, 1080), "LONGMONT, CO", font(LABEL_FONT, 24), WHITE)
    centered(draw, (682, 975), "DOORS", font(LABEL_FONT, 25), BLACK)
    centered(draw, (682, 1025), "5:00 PM", font(DISPLAY_FONT, 39), BLACK)
    centered(draw, (682, 1080), "BELL 6:00 PM", font(LABEL_FONT, 23), BLACK)
    draw.rectangle((0, 1140, 800, 1200), fill=BLACK)
    centered(draw, (400, 1170), "LIVE PRO WRESTLING IN LONGMONT!", font(LABEL_FONT, 25), GOLD)
    save_jpg(canvas, UI / "event-poster-web.jpg")


def build_social_square(hero, jt, mystery):
    canvas = darken(cover(hero, (1080, 1080)), 90)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 1080, 315), fill=GREEN)
    centered(draw, (540, 38), "LOCO PRO WRESTLING", font(LABEL_FONT, 28), LIME)
    draw_title(draw, 540, 80, 900, 1.1)
    canvas.alpha_composite(contain_alpha(jt, (500, 650)), (35, 325))
    canvas.alpha_composite(contain_alpha(mystery, (420, 600)), (625, 370))
    draw = ImageDraw.Draw(canvas)
    centered(draw, (540, 625), "VS", font(DISPLAY_FONT, 75), BRIGHT_GOLD, 4)
    draw.rectangle((0, 930, 1080, 1080), fill=BLACK)
    centered(
        draw,
        (540, 970),
        "AUG 30, 2026  ·  LONGMONT, CO",
        font(LABEL_FONT, 31),
        GOLD,
    )
    centered(
        draw,
        (540, 1020),
        "ELKS LODGE BALLROOM · DOORS 5PM · BELL 6PM",
        font(LABEL_FONT, 25),
        WHITE,
    )
    centered(draw, (540, 1055), "@LOCOPROWRESTLING", font(LABEL_FONT, 22), LIME)
    save_jpg(canvas, UI / "social-square.jpg")


def build_social_wide(hero, jt, mystery):
    canvas = darken(cover(hero, (1200, 630)), 85)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 390, 630), fill=GREEN)
    centered(draw, (195, 55), "LOCO PRO WRESTLING", font(LABEL_FONT, 22), LIME)
    centered(draw, (195, 105), "THE", font(LABEL_FONT, 24), GOLD)
    centered(draw, (195, 235), "LAST\nSTAND", font(DISPLAY_FONT, 92), WHITE, 4)
    draw.rectangle((30, 365, 360, 420), fill=GOLD)
    centered(draw, (195, 393), "AT THE LODGE", font(LABEL_FONT, 25), BLACK)

    canvas.alpha_composite(contain_alpha(jt, (300, 520)), (385, 95))
    canvas.alpha_composite(contain_alpha(mystery, (250, 450)), (665, 135))

    draw = ImageDraw.Draw(canvas)
    draw.rectangle((915, 0, 1200, 630), fill=BLACK)
    centered(draw, (1057, 75), "SUNDAY", font(LABEL_FONT, 27), GOLD)
    centered(draw, (1057, 170), "AUG 30", font(DISPLAY_FONT, 67), WHITE)
    centered(draw, (1057, 230), "2026", font(LABEL_FONT, 28), GOLD)
    draw.line((955, 270, 1160, 270), fill=GOLD, width=3)
    centered(draw, (1057, 325), "ELKS LODGE", font(LABEL_FONT, 30), WHITE)
    centered(draw, (1057, 370), "LONGMONT, CO", font(LABEL_FONT, 24), GOLD)
    centered(draw, (1057, 435), "DOORS 5PM", font(LABEL_FONT, 24), WHITE)
    centered(draw, (1057, 475), "BELL 6PM", font(LABEL_FONT, 24), WHITE)
    centered(draw, (1057, 570), "@LOCOPROWRESTLING", font(LABEL_FONT, 19), LIME)
    save_jpg(canvas, UI / "social-wide.jpg")


def main():
    UI.mkdir(parents=True, exist_ok=True)
    hero = Image.open(UI / "hero-background.jpg")
    jt = Image.open(UI / "jt-staten-portrait.png").convert("RGBA")
    mystery = outline_mystery(
        Image.open(WEBIMAGES / "TAS-Silhouette.png").convert("RGBA")
    )
    build_portraits(jt, mystery)
    build_confrontation(hero, jt, mystery)
    build_poster(hero, jt, mystery)
    build_social_square(hero, jt, mystery)
    build_social_wide(hero, jt, mystery)


if __name__ == "__main__":
    main()
