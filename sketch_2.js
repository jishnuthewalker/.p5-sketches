function setup() {
  slidX = createSlider(0, 500, 100);
  slidX.position(10, 10);
  slidY = createSlider(0, 500, 100);
  slidY.position(10, 40);
  slidZ = createSlider(0, 500, 100);
  slidZ.position(10, 70);
  createCanvas(windowWidth, windowHeight, WEBGL);
  graphics = createGraphics(200,200);
  graphics.background(255);


//  slider.style('width', '80px');

}

function draw() {
  background(255);
  valX = slidX.value();
  valY = slidY.value();
  valZ = slidZ.value();
  square(200, 200, 200);
  rotateX(0.5);
  rotateY(0.5);
  rotateZ(1.3);
  box(valX, valY, valZ);









}
