// YOUR ART. This is the only file you need to change.
//
// drawArt(g) runs about 60 times a second. Each run draws one frame of your art.
// Draw into g, not onto the screen: write g.circle(...), not circle(...).
// Your drawing area is g.width wide (800) and g.height tall (600).
// Everything you draw here gets stretched onto the surface you set up with the pink corners.
//
// Want a starting point? Open a file in examples/ and copy its drawArt() over this one.

function drawArt(g) {
  g.background(20); // Clear the frame. Try removing this line and see what happens

  g.noStroke();
  for (let i = 0; i < 8; i++) {
    // frameCount goes up by 1 every frame, so the colors shift over time
    g.fill((frameCount * 2 + i * 32) % 255, 90, 200);
    g.circle(g.width / 2, g.height / 2, g.width - i * 90);
  }
}

// Things to try:
// - Change 8 to 20. Change 90 to 40.
// - Change g.circle to g.square.
// - Replace frameCount * 2 with frameCount * 10.
