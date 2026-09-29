// PATCH 003: Projection Mapping Lab — starter sketch.
// Blank on purpose. The template gets built here: corners, warp, preview.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
    fullscreen(!fullscreen());
  }
}
