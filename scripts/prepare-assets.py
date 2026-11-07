"""Generate brand assets from top.jpg (icon, apple icon, favicon, OG) and normalise casino logos."""
from __future__ import annotations

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = r"C:\Users\mad71\Desktop\casinotop.app"
SRC = os.path.join(ROOT, "top.jpg")
DEMO = r"C:\Users\mad71\Desktop\demo.online"
OUT_IMG = os.path.join(ROOT, "public", "images")
OUT_APP = os.path.join(ROOT, "app")
OUT_PUB = os.path.join(ROOT, "public")

FONT_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
FONT_BLACK = r"C:\Windows\Fonts\seguibl.ttf"
FONT_REG = r"C:\Windows\Fonts\segoeui.ttf"
FONT_SEMI = r"C:\Windows\Fonts\seguisb.ttf"


def load_icon() -> Image.Image:
    """Crop the rounded icon square out of top.jpg (flat light background)."""
    im = Image.open(SRC).convert("RGB")
    arr = np.asarray(im).astype(int)
    # background is near-white here — keep everything that deviates from it
    corner = arr[0, 0]
    mask = np.abs(arr - corner).sum(axis=2) > 40
    ys, xs = np.where(mask)
    l, r, t, b = xs.min(), xs.max(), ys.min(), ys.max()

    size = min(r - l, b - t)
    cx, cy = (l + r) // 2, (t + b) // 2
    half = size // 2
    icon = im.crop((cx - half, cy - half, cx + half, cy + half)).convert("RGBA")

    side = icon.size[0]
    m = Image.new("L", (side, side), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, side - 1, side - 1], radius=int(side * 0.235), fill=255)
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


# ------------------------- normalised casino logos -------------------------
def trim(im: Image.Image, pad: int = 1) -> Image.Image:
    im = im.convert("RGBA")
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    return im.crop((max(0, l - pad), max(0, t - pad), min(im.width, r + pad), min(im.height, b + pad)))


CANVAS_W, CANVAS_H = 400, 100
ART_H = 64
ART_MAX_W = 386

sources = {
    "1win": os.path.join(DEMO, "public", "images", "affiliates", "1win.png"),
    "jetton": os.path.join(DEMO, "public", "images", "affiliates", "jetton.png"),
    "getx": os.path.join(DEMO, "tmp", "fixed-getx.png"),
    "moriwin": os.path.join(DEMO, "moriwin.png"),
}

for name, path in sources.items():
    art = trim(Image.open(path))
    scale = min(ART_H / art.height, ART_MAX_W / art.width)
    art = art.resize((max(1, round(art.width * scale)), max(1, round(art.height * scale))), Image.LANCZOS)
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    canvas.paste(art, ((CANVAS_W - art.width) // 2, (CANVAS_H - art.height) // 2), art)
    canvas.save(os.path.join(OUT_IMG, "casinos", f"{name}.webp"), "WEBP", quality=92, method=6)
    print(f"logo {name}: art {art.width}x{art.height} on {CANVAS_W}x{CANVAS_H}")


# ------------------------------- OG card -----------------------------------
W, H = 1200, 630
og = Image.new("RGBA", (W, H), (7, 7, 9, 255))
glow = Image.new("RGB", (W, H), (7, 7, 9))
gd = ImageDraw.Draw(glow)
gd.ellipse([-200, -260, 620, 420], fill=(120, 44, 8))
gd.ellipse([760, 200, 1500, 900], fill=(70, 26, 4))
gd.ellipse([900, -260, 1400, 220], fill=(30, 22, 60))
glow = glow.filter(ImageFilter.GaussianBlur(170))
og = Image.blend(og.convert("RGB"), glow, 0.8).convert("RGBA")

overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for x in range(0, W, 64):
    od.line([(x, 0), (x, H)], fill=(255, 255, 255, 8), width=1)
for y in range(0, H, 64):
    od.line([(0, y), (W, y)], fill=(255, 255, 255, 8), width=1)
og = Image.alpha_composite(og, overlay)

f_h1 = ImageFont.truetype(FONT_BLACK, 76)
f_sub = ImageFont.truetype(FONT_REG, 27)
f_small = ImageFont.truetype(FONT_SEMI, 21)
f_brand = ImageFont.truetype(FONT_BOLD, 26)

ic = icon.resize((300, 300), Image.LANCZOS)
halo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(halo).ellipse([830, 130, 1170, 470], fill=(255, 122, 24, 70))
halo = halo.filter(ImageFilter.GaussianBlur(70))
og = Image.alpha_composite(og, halo)
og.paste(ic, (850, 165), ic)

d = ImageDraw.Draw(og)
d.rounded_rectangle([70, 58, 92, 80], radius=6, fill=(255, 122, 24))
d.text((104, 56), "CASINOTOP.APP", font=f_brand, fill=(255, 255, 255))
d.text((W - 118, 58), "18+", font=f_small, fill=(150, 155, 168))

d.text((70, 132), "ТОП ОНЛАЙН", font=f_h1, fill=(255, 255, 255))
d.text((70, 214), "КАЗИНО 2027", font=f_h1, fill=(255, 176, 46))
d.text((72, 322), "4 казино · бонусы до 500% · выплаты за минуты", font=f_sub, fill=(196, 201, 212))

tiles = ["1win", "jetton", "getx", "moriwin"]
x = 70
for name in tiles:
    p = os.path.join(OUT_IMG, "casinos", f"{name}.webp")
    if not os.path.exists(p):
        continue
    logo = Image.open(p).convert("RGBA")
    ratio = 0.42  # canvas 400x100 -> tile artwork height
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
d.text((70, 544), "Рейтинг · Бонусы · Промокоды", font=f_small, fill=(136, 141, 152))

og.convert("RGB").save(os.path.join(OUT_PUB, "og.png"), "PNG")
print("og done")
