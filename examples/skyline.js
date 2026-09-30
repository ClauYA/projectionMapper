// A city skyline at night. It is quiet on purpose, so it works as a background.
// Windows turn on and off, and stars twinkle.

let buildings = [];
let stars = [];

function setupArt(g) {
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: random(g.width),
      y: random(g.height * 0.6),   // Only in the top part of the sky
      size: random(1, 3),
      phase: random(TWO_PI),       // So the stars do not all twinkle together
    });
  }

  // Line buildings up from left to right until they reach the right edge
  let x = 0;
  while (x < g.width) {
    const w = floor(random(5, 12)) * 10; // Width, in steps of 10 so the windows line up
    const h = random(150, 420);          // Height. Raise 420 for taller towers
    const windows = [];
    for (let wx = x + 8; wx < x + w - 8; wx += 12) {
      for (let wy = g.height - h + 12; wy < g.height - 10; wy += 18) {
        windows.push({ x: wx, y: wy, lit: random() < 0.35 }); // About 1 in 3 windows start lit
      }
    }
    buildings.push({ x, w, h, windows });
    x += w;
  }
}

function drawArt(g) {
  // Sky: deep blue at the top to purple at the bottom, one line at a time
  const top = color(5, 5, 25);
  const bottom = color(50, 20, 70);
  for (let y = 0; y < g.height; y++) {
    g.stroke(lerpColor(top, bottom, y / g.height));
    g.line(0, y, g.width, y);
  }

  g.noStroke();
  for (const s of stars) {
    g.fill(255, 150 + 100 * sin(frameCount * 0.03 + s.phase)); // See-through amount swings, so it twinkles
    g.circle(s.x, s.y, s.size);
  }

  for (const b of buildings) {
    g.fill(12, 10, 22);
    g.rect(b.x, g.height - b.h, b.w, b.h);
    if (random() < 0.02) {       // Now and then, someone flips a light switch
      const win = random(b.windows);
      if (win) win.lit = !win.lit; // A very thin building may have no windows
    }
    for (const win of b.windows) {
      if (win.lit) g.fill(255, 200, 110);
      else g.fill(30, 28, 45);
      g.rect(win.x, win.y, 6, 9);
    }
  }
}
