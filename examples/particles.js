// Dots that drift and wrap around the edges. This example uses setupArt(),
// which runs once at the start. Use it for anything you need to create only one time.

let dots = [];

function setupArt(g) {
  for (let i = 0; i < 300; i++) {
    dots.push({
      x: random(g.width),
      y: random(g.height),
      dx: random(-5, 5),     // Speed left or right
      dy: random(-4, 4),     // Speed up or down
      size: random(4, 40),
    });
  }
}

function drawArt(g) {
  g.background(0, 80);       // A see-through background leaves short trails behind each dot
  g.noStroke();
  g.fill(255);
  for (const d of dots) {
    d.x = (d.x + d.dx + g.width) % g.width;   // % wraps a dot back to the other side
    d.y = (d.y + d.dy + g.height) % g.height;
    g.circle(d.x, d.y, d.size);
  }
}
