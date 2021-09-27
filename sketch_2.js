function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}

function draw() {
  background(0);

  //while loop test

    length = mouseY/5;
    i = 0;
    while (i < length) {
    rectPosY = windowWidth/8;
    i++;
    point(windowWidth/2 + i, mouseY);
    rect(windowWidth/8, 60, mouseX - rectPosY, 40);
  }






}
