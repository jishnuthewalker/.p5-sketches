function setup() {
  // put setup code here
  canScale=4;
  createCanvas(480*canScale,120*canScale);
}

function draw() {
  // put drawing code here
  //background(204);
  if (mouseIsPressed) {
    fill(0);
    }  else {
       fill(255);
    }
  ellipse(mouseX,mouseY,80,80);
}
