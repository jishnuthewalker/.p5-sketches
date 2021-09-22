function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(8);
}

function draw() {
  background(200);

  //while loop test

/*  length = mouseY/5;
    i = 0;
    while (i < length) {
    rectPosY = windowWidth/8;
    i++;
    point(windowWidth/2 + i, mouseY);
    rect(windowWidth/8, 60, mouseX - rectPosY, 40);
  } */

/*  length = mouseY/5;
    for (var i = 0; i < length; i++) {
    rectPosY = windowWidth/8;
    point(windowWidth/2 + i, mouseY);
    rect(windowWidth/8, 60, mouseX - rectPosY, 40)
  }
  */

//  diam = 100;
  diam = mouseY/5 + 50;
  for (y = 0; y < height + diam; y += diam) {
    for (x = 0; x < width + diam; x += diam) {
      fill(255, 140, 36);
      ellipse(x, y, diam, diam);
    }
  }
}
