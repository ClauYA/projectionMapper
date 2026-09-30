// An 8-bit subway pillar: green riveted steel with a black station sign, like the columns on a
// New York platform. Map it onto a real column or box. The trick: draw everything tiny, then blow
// it up big so each pixel turns into a block.

const STOP = 'Times Square';           // Your stop name. Long names wrap onto a second line
const PLAQUE = 'UPTOWN &\nBRONX LCL';  // The small plaque under the sign. \n starts a new line
const PILLAR_COLOR = [45, 115, 65];    // Subway green. Try [230, 120, 20] for orange steel
const PILLAR_WIDTH = 72;               // How wide the pillar is, in blocks. The whole area is 160
const PIXEL = 5;                       // How big each blocky pixel is. Raise it to look more 8-bit

// The wheelchair badge, drawn one pixel at a time. # is white, . is blue
const BADGE = [
  '..##....',
  '..##....',
  '...#....',
  '..####..',
  '.#.#....',
  '#..####.',
  '#....#..',
  '.####...',
];

let tiny;  // A small drawing area. It gets stretched up to fill g

function setupArt(g) {
  tiny = createGraphics(g.width / PIXEL, g.height / PIXEL); // 160 x 120 when PIXEL is 5
  tiny.pixelDensity(1); // One real pixel per pixel, even on sharp screens, so the blocks stay even
}

function drawArt(g) {
  const pw = PILLAR_WIDTH;
  const h = tiny.height;
  const left = (tiny.width - pw) / 2; // Where the pillar starts, so it sits in the middle
  const [r, gr, b] = PILLAR_COLOR;

  tiny.background(0); // Black around the pillar. Black means no light on the wall
  tiny.noStroke();
  tiny.push();
  tiny.translate(left, 0); // From here on, x = 0 is the left edge of the pillar

  // Steel. A darker line and a lighter line near each edge make the flanges of the beam
  tiny.fill(r, gr, b);
  tiny.rect(0, 0, pw, h);
  tiny.fill(r * 0.6, gr * 0.6, b * 0.6);
  tiny.rect(7, 0, 2, h);
  tiny.rect(pw - 9, 0, 2, h);
  tiny.fill(r * 1.3, gr * 1.3, b * 1.3);
  tiny.rect(9, 0, 1, h);
  tiny.rect(pw - 7, 0, 1, h);

  // Rivets run down both flanges
  for (let y = 4; y < h; y += 9) {
    tiny.fill(r * 0.5, gr * 0.5, b * 0.5); // Shadow
    tiny.rect(3, y + 1, 2, 2);
    tiny.rect(pw - 4, y + 1, 2, 2);
    tiny.fill(r * 1.4, gr * 1.4, b * 1.4); // Shine
    tiny.rect(2, y, 2, 2);
    tiny.rect(pw - 5, y, 2, 2);
  }

  // A patch of fresh paint over old scratches
  tiny.fill(r * 0.8, gr * 0.85, b * 0.8);
  tiny.rect(38, 104, 14, 10);
  tiny.rect(42, 100, 8, 18);

  // The sign: black, with a thin white line across the top
  const signW = pw - 22;
  tiny.fill(10);
  tiny.rect(11, 12, signW, 58);
  tiny.fill(255);
  tiny.rect(13, 15, signW - 4, 1);
  tiny.textFont('Helvetica');
  tiny.textStyle(BOLD);
  tiny.textWrap(WORD);         // Break between words, never in the middle of one
  tiny.textAlign(LEFT, TOP);

  // Start big, then shrink until the longest word fits across the sign
  const room = signW - 6;
  const longest = STOP.split(' ').reduce((a, c) => (c.length > a.length ? c : a));
  let size = 16;
  tiny.textSize(size);
  while (size > 6 && tiny.textWidth(longest) > room) tiny.textSize(--size);
  tiny.textLeading(size);      // Space between the lines. Lower it to squeeze them together
  tiny.text(STOP, 14, 18, room + 2, 36); // Text in a box: x, y, width, height. Words that do not fit wrap

  // The wheelchair badge
  tiny.fill(20, 100, 220);
  tiny.rect(14, 55, 12, 12);
  tiny.fill(255);
  for (let row = 0; row < BADGE.length; row++) {
    for (let col = 0; col < BADGE[row].length; col++) {
      if (BADGE[row][col] === '#') tiny.rect(16 + col, 57 + row, 1, 1);
    }
  }

  // The small plaque under the sign
  tiny.fill(25);
  tiny.rect(11, 76, signW, 22);
  tiny.fill(180);
  tiny.textFont('Courier New');
  tiny.textSize(8);
  tiny.textLeading(8);
  tiny.text(PLAQUE, 14, 79);

  // Every few seconds a train rushes past, and its window lights flash across the pillar
  const t = frameCount % 420;            // Counts 0 to 419, then starts over
  if (t < 90) {                          // The train takes 90 frames to pass
    tiny.fill(255, 240, 200, 45);
    for (let x = ((t * 7) % 30) - 30; x < pw; x += 30) {
      const from = max(x, 0);              // Clip each flash so it stays on the pillar
      const to = min(x + 14, pw);
      if (to > from) tiny.rect(from, 0, to - from, h);
    }
  }
  tiny.pop();

  g.noSmooth(); // Keep the blocks sharp when they get stretched. Try removing this line
  g.image(tiny, 0, 0, g.width, g.height);
}
