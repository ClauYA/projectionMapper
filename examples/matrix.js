// Green letters raining down, like The Matrix. Each column has a bright letter at the front
// and a trail behind it that fades out toward the top.

const LETTERS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789'.split(''); // Swap in any letters you like
const SIZE = 20;   // Letter size, and the width of each column, in pixels
const TRAIL = 18;  // How many letters long each trail is

let drops = [];

function setupArt(g) {
  for (let x = 0; x < g.width; x += SIZE) {
    drops.push({
      x: x + SIZE / 2,
      row: random(-30, 0),       // Start above the top so the columns do not all arrive together
      speed: random(0.15, 0.5),  // Rows per frame. Raise these to make the rain fall faster
      letters: Array.from({ length: TRAIL }, () => random(LETTERS)),
    });
  }
}

function drawArt(g) {
  g.background(0);
  g.noStroke();
  g.textFont('Courier New');     // Every letter is the same width, so the columns stay straight
  g.textSize(SIZE);
  g.textAlign(CENTER, TOP);
  const rows = g.height / SIZE;
  for (const d of drops) {
    d.row += d.speed;
    if (d.row - TRAIL > rows) d.row = random(-10, 0); // The whole trail left the bottom. Start again at the top
    if (random() < 0.05) d.letters[floor(random(TRAIL))] = random(LETTERS); // Now and then, swap a letter
    const head = floor(d.row);
    for (let i = 0; i < TRAIL; i++) {
      const row = head - i;
      if (row < 0) continue;     // This part of the trail is still above the top
      if (i === 0) g.fill(200, 255, 200);               // The front letter is almost white
      else g.fill(0, 255, 70, 255 * (1 - i / TRAIL));   // The rest fade out toward the top
      g.text(d.letters[row % TRAIL], d.x, row * SIZE);  // Letters stay in place. Only the brightness moves
    }
  }
}
