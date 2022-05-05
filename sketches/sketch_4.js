
const CRYSTAL_SIZE = 300;
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
    'teal'
  ]
  }

function draw() {
  noFill();
  // testLines();

  let picker = random(1);
  if (picker > 0.3) {
    outlineShape();
  }

  picker = random(1);
  if (picker > 0.4) {
    outlineShape();
  }

  picker = random(1);
  if (picker > 0.5) {
    simpleLines();
  }

  picker = random(1);
  if (picker > 0.3) {
    drawCircle();
  }


  // hexagon(width/2, height/2, CRYSTAL_SIZE/2);
  // outlineShape();
  // simpleLines();
  // drawCircle();

}

function drawCircle() {
  const select = randomSelectTwo();
  const shapeSize = select ? ((CRYSTAL_SIZE / 2) + 0.93) : (CRYSTAL_SIZE/6);
  let tempPos = select ? ((CRYSTAL_SIZE / 2) - (shapeSize / 2)) : (CRYSTAL_SIZE/4);
  const position = randomSelectTwo() ? (-1) * tempPos : tempPos;
  const numShapes = randomSelectTwo() ? (SIDES) : (SIDES/2);
  const angle = 360 / numShapes;
  const strokeColor = getRandomFromPalette();
  // console.log(position)
  push();
  stroke(strokeColor);
  strokeWeight(1);
  translate(width/2, height/2);
  for (let i = 0; i < numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle);
  }
  pop();
}


function outlineShape() {

  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  const hexTrue = randomSelectTwo();
  const choiceOne = randomSelectTwo() ? CRYSTAL_SIZE : (CRYSTAL_SIZE/2);
  const choiceTwo = randomSelectTwo() ? (CRYSTAL_SIZE/3) : (CRYSTAL_SIZE/4);
  const shapeSize = randomSelectTwo() ? choiceOne : choiceTwo;

  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width/2, height/2);
  if (hexTrue) {
    hexagon(0, 0, shapeSize/2);
  }
  else {
    ellipse(0,0,shapeSize,shapeSize);
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
