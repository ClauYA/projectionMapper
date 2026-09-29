// A word that pulses. Change WORD to your own name or idea.

const WORD = 'PHILLY';

function drawArt(g) {
  g.background(0);
  const pulse = sin(frameCount * 0.05);   // Swings between -1 and 1 over time
  g.textAlign(CENTER, CENTER);
  g.textStyle(BOLD);
  g.textSize(140 + pulse * 30);           // Grows and shrinks
  g.fill(255, 80 + pulse * 80, 200);
  g.text(WORD, g.width / 2, g.height / 2);
}
