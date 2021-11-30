function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  noLoop();
}

function draw() {
  background(255);
  fill('teal');
  noStroke()
  square(width/2, height/2, 100);
}
