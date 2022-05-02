
const CRYSTAL_SIZE = 300;
const SIDES = 6;
let PALETTE = [];



function setup() {
  createCanvas(windowWidth, windowHeight, SVG);

  PALETTE = [
    color(255, 200, 200),
    color(4, 0, 125),
    'limegreen'
  ]

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);


}

function draw() {
  testLines();
}

function testLines() {

  const rando = random(1);
  let numShapes
  if (rando > 0.5) {
    numShapes = SIDES;
  }
  else {
    numShapes = SIDES * 2;
  }
console.log(rando)

const rando2 = floor(random(0, PALETTE.length));
console.log(rando2);
const colPick = PALETTE[rando2];


  background(255);
  fill('teal');
  noFill();
  push();
   stroke(PALETTE[1]);
   translate(width/2, height/2);
   ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  stroke(colPick);
  const angle = 360 / numShapes;
   for (i = 0; i < numShapes; i++) {
     line(0,0,CRYSTAL_SIZE/2,0);
     rotate(angle);
   }
  pop();
}
