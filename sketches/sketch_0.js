let checkbox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  checkbox = createCheckbox('draw mode', false);
  strokeWeight(4);
//  background(0);
}

function draw() {
/*
  checkbox.changed(tick);
  box = 0;

  function tick() {
    box = 255;
  }
*/
  background(0, 0, 0);



  //while loop test

/*  length = mouseY/5;
    i = 0;
    while (i < length) {
    rectPosY = windowWidth/8;
    i++;
    point(windowWidth/2 + i, mouseY);
    rect(windowWidth/8, 60, mouseX - rectPosY, 40);
  } */

  //for loop test

/*  length = mouseY/5;
    for (var i = 0; i < length; i++) {
    rectPosY = windowWidth/8;
    point(windowWidth/2 + i, mouseY);
    rect(windowWidth/8, 60, mouseX - rectPosY, 40)
  }*/

/*
  //circle grid
  diam = mouseY/5 + 50;
  for (y = 0; y < height + diam; y += diam) {
    for (x = 0; x < width + diam; x += diam) {
      fill(255, 140, 36);
      ellipse(x, y, diam, diam);
    }
  } */

  border = 100;
  spacing = 200;
  diam = 5;
  colourR = 255 - (((mouseY/windowWidth)) * 255);
  colourG = 255 - (((mouseX/windowHeight)) * 255);
  colourB = 255 - (((colourG + colourR)) / 2);
  fill(255);
  strokeWeight(1);
  stroke(colourR, colourG, colourB);
  for (x = border; x < width - border; x += spacing) {
    for (y = border; y < height - border; y += spacing) {
      if (mouseIsPressed) {
          line(x, y, mouseX, mouseY);
//          ellipse(x, y, diam, diam);
    }
//      ellipse(x, y, diam, diam);
  }

}

for (x = border; x < width - border; x += spacing) {
  for (y = border; y < height - border; y += spacing) {
    ellipse(x, y, diam, diam);
}

}

/*
function draw() {
  clear();
  let display = touches.length + ' touches';
  text(display, 5, 10);
}

*/

}
