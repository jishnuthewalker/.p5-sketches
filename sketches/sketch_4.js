
const CRYSTAL_SIZE = 30;
const SIDES = 6;
let PALETTE = [];
let touchTest = 1;



function setup() {

  var button = createButton("change");
  button.mousePressed(resetSketch)
  createCanvas(windowWidth, windowHeight, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  textSize(32);
  text('TAP/refresh TO CHANGE', 10, 30);

  PALETTE = [
    color(255, 200, 200),
    color(4, 0, 125),
    'limegreen'
  ]
  }

function resetSketch() {
  background(255)
  draw()
}

function mouseClicked() {
  background(255)
  draw()
  touchTest = 0;
}

function touchStarted() {
  if (touchTest === 1) {
  background(255)
  draw()
  }
  else {
    return("no touch")
  }
}

function draw() {
  noFill();
  // testLines();


  // hexagon(width/2, height/2, CRYSTAL_SIZE/2);
  outlineShape();
  simpleLines();

}

function outlineShape() {

  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  const hexTrue = randomSelectTwo();

  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width/2, height/2);
  if (hexTrue) {
    hexagon(0, 0, CRYSTAL_SIZE/2);
  }
  else {
    ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
  }
  pop();
}



function testLines() {

  let numShapes = randomSelectTwo() ? SIDES : SIDES*2 ;

  background(255);
  fill('teal');
  noFill();
  push();
   stroke(PALETTE[1]);
   translate(width/2, height/2);
   ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

   stroke(getRandomFromPalette());
   const angle = 360 / numShapes;
   for (i = 0; i < numShapes; i++) {
     line(0, 0, CRYSTAL_SIZE/2, 0);
     rotate(angle);
   }
  pop();
}


function simpleLines() {
  const stepOut = 8;
  steps = randomSelectTwo() ? stepOut : int(stepOut*1.25);
  const stepSize = (CRYSTAL_SIZE / 2) / steps;
  const start = floor(random(0, steps));
  const stop = floor(random(start, steps + 1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  const angle = 360 / numShapes;


  stroke(strokeColor);
  strokeWeight(weight);
  push();
    translate(width/2, height/2);
    for (let i = 0; i < numShapes; i++) {
      line(start * steps, 0, stop * steps, 0);
      rotate(angle);
    }
  pop();
}
