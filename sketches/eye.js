function setup() {
  xwidth = 400;
  ywidth = 400;
  createCanvas(xwidth, ywidth);
}

function draw() {
  background(204, 20, 50);
  noStroke();

  //make the eyeball
  push();
  translate(xwidth / 4, ywidth / 4);
  fill(255, 255, 255);
  circle(0, 0, 400);
  pop();


  push();
  translate(xwidth / 4, ywidth / 4);
  rotate(radians(-mouseX / 8) + radians(45));
  //rotates the eyris with an offset
    push();
    translate(-xwidth / 4, -ywidth / 4);
    translate(xwidth / 2, ywidth / 2);
    rotate(radians(-45));
    fill(50, 180, 130);
    pupD = xwidth/2;
    ellipse(0, 0, pupD, pupD/2);
  fill(0);
  ellipse(0, 0, 75, 40);
  pop();
  pop();
  //circle(xwidth/(6/5), ywidth/(6/5), 100);
}
