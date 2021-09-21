function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(8);
}

function draw() {
  background(200);
  length = 300;
  //rect(180, 60, 220, 40);
  n = 0;
  while (n < length) {
    n++;
    point(width/2 + n, mouseY);
    rect(180, 60, mouseX, 40);
  }
}
