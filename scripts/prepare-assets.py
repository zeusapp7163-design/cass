"""Generate brand assets from top.jpg (icon, apple icon, favicon, OG card)."""
from __future__ import annotations

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = r"C:\Users\mad71\Desktop\casinotop.app"
SRC = os.path.join(ROOT, "top.jpg")
OUT_IMG = os.path.join(ROOT, "public", "images")
OUT_APP = os.path.join(ROOT, "app")
OUT_PUB = os.path.join(ROOT, "public")

FONT_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
FONT_BLACK = r"C:\Windows\Fonts\seguibl.ttf"
FONT_SEMI = r"C:\Windows\Fonts\seguisb.ttf"
FONT_REG = r"C:\Windows\Fonts\segoeui.ttf"


def load_icon() -> Image.Image:
    """Crop the rounded icon square out of top.jpg (background is flat grey)."""
    im = Image.open(SRC).convert("RGB")
    arr = np.asarray(im).astype(int)
    bg = np.array([75, 80, 100])
    mask = np.abs(arr - bg).sum(axis=2) > 45
    ys, xs = np.where(mask)
    l, r, t, b = xs.min(), xs.max(), ys.min(), ys.max()

    # keep an exact square around the artwork
    size = min(r - l, b - t)
    cx, cy = (l + r) // 2, (t + b) // 2
    half = size // 2
    box = (cx - half, cy - half, cx + half, cy + half)
    icon = im.crop(box).convert("RGBA")

    # rounded corners (28% radius like an app icon)
    side = icon.size[0]
    m = Image.new("L", (side, side), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, side - 1, side - 1], radius=int(side * 0.28), fill=255)
    out = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    out.paste(icon, (0, 0), m)
    return out


icon = load_icon()
print("icon crop:", icon.size)

icon.resize((512, 512), Image.LANCZOS).save(os.path.join(OUT_APP, "icon.png"))
icon.resize((180, 180), Image.LANCZOS).save(os.path.join(OUT_APP, "apple-icon.png"))
icon.resize((64, 64), Image.LANCZOS).save(
    os.path.join(OUT_PUB, "favicon.ico"),
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
)
print("icons done")


# ------------------------------- OG card -----------------------------------
W, H = 1200, 630
og = Image.new("RGBA", (W, H), (6, 7, 12, 255))
glow = Image.new("RGB", (W, H), (6, 7, 12))
gd = ImageDraw.Draw(glow)
gd.ellipse([-300, 260, 520, 900], fill=(120, 45, 12))
gd.ellipse([760, -260, 1400, 300], fill=(24, 34, 110))
glow = glow.filter(ImageFilter.GaussianBlur(170))
og = Image.blend(og.convert("RGB"), glow, 0.85).convert("RGBA")

overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for x in range(0, W, 64):
    od.line([(x, 0), (x, H)], fill=(255, 255, 255, 9), width=1)
for y in range(0, H, 64):
    od.line([(0, y), (W, y)], fill=(255, 255, 255, 9), width=1)
og = Image.alpha_composite(og, overlay)

f_h1 = ImageFont.truetype(FONT_BLACK, 74)
f_sub = ImageFont.truetype(FONT_REG, 27)
f_small = ImageFont.truetype(FONT_SEMI, 21)
f_brand = ImageFont.truetype(FONT_BOLD, 26)

ic = icon.resize((300, 300), Image.LANCZOS)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(halo).ellipse([840, 130, 1160, 450], fill=(255, 90, 30, 55))
halo = halo.filter(ImageFilter.GaussianBlur(80))
og = Image.alpha_composite(og, halo)
og.paste(ic, (850, 155), ic)

d = ImageDraw.Draw(og)
d.rounded_rectangle([70, 58, 92, 80], radius=6, fill=(255, 106, 26))
d.text((104, 56), "CASINOTOP.APP", font=f_brand, fill=(255, 255, 255))
d.text((W - 118, 58), "18+", font=f_small, fill=(148, 157, 181))

d.text((70, 132), "ТОП ОНЛАЙН", font=f_h1, fill=(255, 255, 255))
d.text((70, 214), "КАЗИНО 2026", font=f_h1, fill=(255, 176, 46))

d.text((72, 322), "4 казино · бонусы до 500% · выплаты за минуты", font=f_sub, fill=(196, 203, 224))

tiles = ["1win", "jetton", "getx", "moriwin"]
x = 70
for name in tiles:
    p = os.path.join(OUT_IMG, "casinos", f"{name}.webp")
    if not os.path.exists(p):
        continue
    logo = Image.open(p).convert("RGBA")
    ratio = min(116 / logo.width, 30 / logo.height)
    logo = logo.resize((round(logo.width * ratio), round(logo.height * ratio)), Image.LANCZOS)
    tw, th = 168, 70
    tile = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle(
        [x, 430, x + tw, 430 + th], radius=16, fill=(255, 255, 255, 14), outline=(255, 255, 255, 26), width=1
    )
    og = Image.alpha_composite(og, tile)
    og.paste(logo, (x + (tw - logo.width) // 2, 430 + (th - logo.height) // 2), logo)
    x += tw + 12

d = ImageDraw.Draw(og)
d.text((70, 544), "Рейтинг · Бонусы · Промокоды", font=f_small, fill=(132, 141, 166))

og.convert("RGB").save(os.path.join(OUT_PUB, "og.png"), "PNG")
print("og done")
