"""Remove light gray background from Fireline logo, save transparent PNG."""

from pathlib import Path

import numpy as np
from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"
SOURCE = PUBLIC / "fireline-logo-source.png"
OUTPUT = PUBLIC / "fireline-logo.png"
DARK_OUTPUT = PUBLIC / "fireline-logo-dark-bg.png"
DARK_BG = (11, 15, 20, 255)  # matches site slate-950


def remove_background(src: Path, dest: Path, tolerance: float = 18.0) -> Image.Image:
    img = Image.open(src).convert("RGBA")
    pixels = np.array(img, dtype=np.float64)

    # Sample background from corners
    corners = [
        pixels[0, 0, :3],
        pixels[0, -1, :3],
        pixels[-1, 0, :3],
        pixels[-1, -1, :3],
    ]
    bg = np.mean(corners, axis=0)

    rgb = pixels[:, :, :3]
    distance = np.linalg.norm(rgb - bg, axis=2)
    is_background = distance <= tolerance

    pixels[:, :, 3] = np.where(is_background, 0, 255)

    result = Image.fromarray(pixels.astype(np.uint8), "RGBA")
    result.save(dest, "PNG", optimize=True)
    return result


def add_dark_background(transparent: Image.Image, dest: Path) -> None:
    canvas = Image.new("RGBA", transparent.size, DARK_BG)
    canvas.alpha_composite(transparent)
    canvas.save(dest, "PNG", optimize=True)


if __name__ == "__main__":
    result = remove_background(SOURCE, OUTPUT)
    add_dark_background(result, DARK_OUTPUT)
    print(f"Saved transparent logo: {OUTPUT}")
    print(f"Saved dark-bg logo: {DARK_OUTPUT}")
