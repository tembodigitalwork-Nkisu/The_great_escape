// Extract the "GREAT ESCAPE" logo from the no-venue-fee promo poster.
// The poster is 720x1284 (portrait phone graphic). Logo + tagline sit
// roughly in the lower-middle, on a white background with sparse
// multi-coloured dots scattered across the canvas.
//
// Strategy:
//   1. Crop the logo region (centred, lower-middle).
//   2. Convert to RGBA and threshold near-white pixels to alpha=0.
//   3. Trim transparent edges so the output is tight to the artwork.
//   4. Write public/logo.png.

const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "images", "no-venue-fee.jpg");
const DST = path.join(__dirname, "..", "public", "logo.png");

const CROP = { left: 80, top: 875, width: 560, height: 270 };

const WHITE_LO = 200; // anything brighter than this on R, G, and B becomes transparent
const WHITE_HI = 235;

(async () => {
  const cropped = await sharp(SRC)
    .extract(CROP)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = cropped;
  const { width, height, channels } = info;
  if (channels !== 4) throw new Error(`Expected 4 channels, got ${channels}`);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const minRGB = Math.min(r, g, b);
    if (minRGB >= WHITE_HI) {
      data[i + 3] = 0; // fully transparent
    } else if (minRGB >= WHITE_LO) {
      // Smooth transition for sub-pixel-antialiased edges
      const t = (minRGB - WHITE_LO) / (WHITE_HI - WHITE_LO);
      data[i + 3] = Math.round((1 - t) * 255);
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(DST);

  const out = await sharp(DST).metadata();
  console.log(`Wrote ${path.relative(process.cwd(), DST)} — ${out.width}x${out.height}, alpha:${out.hasAlpha}`);
})();
