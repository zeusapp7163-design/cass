"""Prepare brand assets for casinotop.app (logos, favicon, OG card)."""
from __future__ import annotations

import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = r"C:\Users\mad71\Desktop\demo.online"
OUT_IMG = r"C:\Users\mad71\Desktop\casinotop.app\public\images"
OUT_APP = r"C:\Users\mad71\Desktop\casinotop.app\app"
OUT_PUB = r"C:\Users\mad71\Desktop\casinotop.app\public"

os.makedirs(os.path.join(OUT_IMG, "casinos"), exist_ok=True)
os.makedirs(os.path.join(OUT_IMG, "slots"), exist_ok=True)

FONT_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
FONT_SEMI = r"C:\Windows\Fonts\seguisb.ttf"
FONT_REG = r"C:\Windows\Fonts\segoeui.ttf"


def trim(im: Image.Image, pad: int = 2) -> Image.Image:
    im = im.convert("RGBA")
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(im.width, r + pad)
    b = min(im.height, b + pad)
    return im.crop((l, t, r, b))


def save_logo(src: str, name: str, target_h: int = 160) -> None:
    im = trim(Image.open(src))
    ratio = target_h / im.height
    im = im.resize((max(1, round(im.width * ratio)), target_h), Image.LANCZOS)
    out = os.path.join(OUT_IMG, "casinos", f"{name}.webp")
    im.save(out, "WEBP", quality=92, method=6)
    print(f"logo {name}: {im.width}x{im.height} -> {out}")


save_logo(os.path.join(SRC, "public", "images", "affiliates", "1win.png"), "1win")
save_logo(os.path.join(SRC, "public", "images", "affiliates", "jetton.png"), "jetton")
save_logo(os.path.join(SRC, "tmp", "fixed-getx.png"), "getx")
save_logo(os.path.join(SRC, "moriwin.png"), "moriwin")

# --- slot tiles for the "popular slots" strip -------------------------------
SLOT_NAMES = [
    ("gates-of-olympus.webp", "gates-of-olympus"),
    ("sweet-bonanza.webp", "sweet-bonanza"),
    ("mental.webp", "mental"),
    ("sugar-rush.webp", "sugar-rush"),
    ("big-bass-bonanza.webp", "big-bass-bonanza"),
    ("wanted-dead-or-a-wild.webp", "wanted-dead-or-a-wild"),
]
for fname, slug in SLOT_NAMES:
    src = os.path.join(SRC, "public", "images", "slots", fname)
    if not os.path.exists(src):
        print(f"skip missing slot {src}")
        continue
    im = Image.open(src).convert("RGB")
    im = im.resize((360, round(360 * im.height / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT_IMG, "slots", f"{slug}.webp"), "WEBP", quality=88, method=6)
    print(f"slot {slug}: {im.width}x{im.height}")


# --- favicon / app icon ----------------------------------------------------
def lerp(a: int, b: int, t: float) -> int:
    return round(a + (b - a) * t)


def gradient(size: int, c1=(139, 92, 246), c2=(34, 211, 238)) -> Image.Image:
    big = int(size * 1.5)
    im = Image.new("RGBA", (big, big))
    d = ImageDraw.Draw(im)
    for i in range(big):
        t = i / max(1, big - 1)
        d.line([(0, i), (big, i)], fill=(lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t), 255))
    im = im.rotate(-45, resample=Image.BICUBIC, expand=False)
    off = (big - size) // 2
    return im.crop((off, off, off + size, off + size))


def make_icon(size: int) -> Image.Image:
    ss = size * 4
    base = gradient(ss)
    mask = Image.new("L", (ss, ss), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, ss - 1, ss - 1], radius=int(ss * 0.26), fill=255)
    icon = Image.new("RGBA", (ss, ss), (0, 0, 0, 0))
    icon.paste(base, (0, 0), mask)

    # subtle inner highlight
    hi = Image.new("RGBA", (ss, ss), (0, 0, 0, 0))
    ImageDraw.Draw(hi).ellipse(
        [-int(ss * 0.25), -int(ss * 0.6), int(ss * 1.25), int(ss * 0.45)],
        fill=(255, 255, 255, 40),
    )
    hi = hi.filter(ImageFilter.GaussianBlur(ss // 12))
    icon = Image.alpha_composite(icon, Image.composite(hi, Image.new("RGBA", (ss, ss), (0, 0, 0, 0)), mask))

    # spade mark
    d = ImageDraw.Draw(icon)
    cx, cy = ss / 2, ss / 2 - ss * 0.06
    w = ss * 0.30
    h = ss * 0.40
    spade = [
        (cx, cy - h),
        (cx + w * 0.52, cy - h * 0.36),
        (cx + w, cy + h * 0.06),
        (cx + w * 0.52, cy + h * 0.34),
        (cx + w * 0.22, cy + h * 0.20),
        (cx + w * 0.40, cy + h * 0.62),
        (cx - w * 0.40, cy + h * 0.62),
        (cx - w * 0.22, cy + h * 0.20),
        (cx - w * 0.52, cy + h * 0.34),
        (cx - w, cy + h * 0.06),
        (cx - w * 0.52, cy - h * 0.36),
    ]
    d.polygon(spade, fill=(255, 255, 255, 246))
    return icon.resize((size, size), Image.LANCZOS)


icon512 = make_icon(512)
icon512.save(os.path.join(OUT_APP, "icon.png"))
icon512.resize((180, 180), Image.LANCZOS).save(os.path.join(OUT_APP, "apple-icon.png"))
icon512.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT_PUB, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
print("icons done")


# --- OG image --------------------------------------------------------------
W, H = 1200, 630
og = Image.new("RGBA", (W, H), (6, 7, 13, 255))

# glows
glow = Image.new("RGB", (W, H), (6, 7, 13))
gd = ImageDraw.Draw(glow)
gd.ellipse([-260, -320, 620, 320], fill=(70, 40, 140))
gd.ellipse([760, -220, 1420, 320], fill=(20, 90, 120))
gd.ellipse([300, 380, 900, 900], fill=(50, 30, 100))
glow = glow.filter(ImageFilter.GaussianBlur(140))
og = Image.blend(og.convert("RGB"), glow, 0.85).convert("RGBA")

overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(overlay)

# grid
for x in range(0, W, 60):
    d.line([(x, 0), (x, H)], fill=(255, 255, 255, 10), width=1)
for y in range(0, H, 60):
    d.line([(0, y), (W, y)], fill=(255, 255, 255, 10), width=1)
og = Image.alpha_composite(og, overlay)
d = ImageDraw.Draw(og)

f_brand = ImageFont.truetype(FONT_BOLD, 30)
f_h1 = ImageFont.truetype(FONT_BOLD, 78)
f_sub = ImageFont.truetype(FONT_REG, 30)
f_small = ImageFont.truetype(FONT_SEMI, 22)

# brand line
d.rounded_rectangle([70, 58, 92, 80], radius=6, fill=(139, 92, 246))
d.text((106, 56), "CASINOTOP.APP", font=f_brand, fill=(255, 255, 255))
d.text((W - 70 - d.textlength("18+", font=f_small), 58), "18+", font=f_small, fill=(154, 163, 184))

d.text((70, 128), "ТОП ОНЛАЙН", font=f_h1, fill=(255, 255, 255))
d.text((70, 212), "КАЗИНО 2026", font=f_h1, fill=(247, 179, 43))
d.text((70, 320), "4 проверенных казино · бонусы до 500% · выплаты за минуты", font=f_sub, fill=(200, 206, 222))

# logo tiles
tiles = ["1win", "jetton", "getx", "moriwin"]
x = 70
for name in tiles:
    p = os.path.join(OUT_IMG, "casinos", f"{name}.webp")
    logo = Image.open(p).convert("RGBA")
    target_w = 160
    ratio = min(target_w / logo.width, 50 / logo.height)
    logo = logo.resize((round(logo.width * ratio), round(logo.height * ratio)), Image.LANCZOS)
    tw, th = 230, 96
    tile = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle(
        [x, 430, x + tw, 430 + th], radius=20, fill=(255, 255, 255, 16), outline=(255, 255, 255, 30), width=1
    )
    og = Image.alpha_composite(og, tile)
    og.paste(logo, (x + (tw - logo.width) // 2, 430 + (th - logo.height) // 2), logo)
    x += tw + 14

d = ImageDraw.Draw(og)
d.text((70, 560), "Рейтинг · Бонусы · Промокоды", font=f_small, fill=(140, 148, 168))

og.convert("RGB").save(os.path.join(OUT_PUB, "og.png"), "PNG")
print("og done")
