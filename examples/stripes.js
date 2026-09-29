// Stripes that slide across the surface. Good for showing off the edges of your object.

function drawArt(g) {
  g.background(0);
  g.noStroke();
  const stripe = 40;                   // Width of each stripe, in pixels
  const shift = (frameCount * 3) % (stripe * 2); // How far the stripes have slid this frame
  for (let x = -stripe * 2; x < g.width; x += stripe * 2) {
    g.fill(2, 141, 255);               // Sky blue
    g.rect(x + shift, 0, stripe, g.height);
  }
}
