
const CRYSTAL_SIZE = 300;
const SIDES = 6;
let PALETTE = [];



function setup() {

  createCanvas(windowWidth, windowHeight, SVG);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  PALETTE = [
    color(255, 200, 200),
    color(4, 0, 125),
    'limegreen'
  ]

}

function draw() {
//  testLines();
  outlineShape();
}

function outlineShape() {

  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;

  stroke(strokeColor);
  strokeWeight(weight);
  push();
  translate(width/2,height/2);
  rotate(0);
  ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
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
     line(0,0,CRYSTAL_SIZE/2,0);
     rotate(angle);
   }
  pop();
}


function randomSelectTwo() {
  const rando = random(1) > 0.5 ? true : false;
  console.log(rando);
  return(rando);

}


function getRandomFromPalette() {
   const rando2 = floor(random(0, PALETTE.length));
   console.log(rando2);
   return PALETTE[rando2];
}
