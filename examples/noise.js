// A slow, living color field. noise() gives smooth random values, so neighbors look alike.

function drawArt(g) {
  g.noStroke();
  const cell = 20;                     // Size of each square. Smaller looks smoother but runs slower
  const t = frameCount * 0.01;         // Time. Raise 0.01 to make it move faster
  for (let x = 0; x < g.width; x += cell) {
    for (let y = 0; y < g.height; y += cell) {
      const n = noise(x * 0.005, y * 0.005, t); // A value from 0 to 1
      g.fill(n * 255, 60, 255 - n * 255);
      g.rect(x, y, cell, cell);
    }
  }
}
