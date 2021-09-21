function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(8);
}

function draw() {
  background(200);
  length = mouseY/5;
  n = 0;
  while (n < length) {
    n++;
    point(windowWidth/2 + n, mouseY);
    rect(windowWidth/8, 60, mouseX, 40);
  }
}
