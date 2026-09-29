// Dots that drift and wrap around the edges. This example uses setupArt(),
// which runs once at the start. Use it for anything you need to create only one time.

let dots = [];

function setupArt(g) {
  for (let i = 0; i < 150; i++) {
    dots.push({
      x: random(g.width),
      y: random(g.height),
      dx: random(-2, 2),     // Speed left or right
      dy: random(-2, 2),     // Speed up or down
      size: random(4, 14),
    });
  }
}

function drawArt(g) {
  g.background(0, 40);       // A see-through background leaves short trails behind each dot
  g.noStroke();
  g.fill(255);
  for (const d of dots) {
    d.x = (d.x + d.dx + g.width) % g.width;   // % wraps a dot back to the other side
    d.y = (d.y + d.dy + g.height) % g.height;
    g.circle(d.x, d.y, d.size);
  }
}
