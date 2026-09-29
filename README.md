# PATCH 003: Projection Mapping Lab

The starter template for PATCH 003, a PhilaCon Valley lab at Pennovation Works on
Wednesday, September 30, 2026. You build a p5.js sketch on your laptop. Then you map it onto a
real object with a projector.

**Status:** in progress. Waskar and Jay are building the template before the lab.

## Run it on your machine

No build step. p5.js is in `lib/`, so it works with no Wi-Fi.

```bash
git clone https://github.com/philaconvalley/patch-003-projection-mapping.git
cd patch-003-projection-mapping
open index.html
```

| Key | Action |
|---|---|
| F | Full screen |

## What the template does

The floor is three features. The template ships with all three, or the lab uses a smaller
version.

1. **Corners.** Drag the four corners of your sketch onto the corners of the object.
2. **Warp.** The sketch stretches to fit those four corners.
3. **Preview.** You see the result on your laptop before you get projector time.

**Calibration mode** comes after those three. If time runs out, it gets cut.

## Files

- `index.html`: loads p5.js and the sketch.
- `sketch.js`: the sketch. This is where the template gets built.
- `lib/p5.min.js`: p5.js 1.11.13, saved in the repo for offline use.

## License

The code uses the MIT license. See `LICENSE`. p5.js uses the LGPL 2.1 license.

## PhilaCon Valley

A Philadelphia tech community, by us, for us. Come build with us:
[Discord](https://discord.gg/fxUfeSbFZM).
