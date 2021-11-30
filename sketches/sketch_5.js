function setup() {
    pg = createGraphics(windowWidth, windowHeight, P2D);
    createCanvas(windowWidth, windowHeight, P2D);
  }

  function preload() {
    myFont = loadFont("assets/Roboto-Regular.ttf");
  }
  
  function draw() {
    background(0);
    pg.background(0);
    pg.fill(255);
    pg.textSize(800);
    pg.push();
    pg.translate(width/2, height/2-215);
    pg.textAlign(CENTER, CENTER);
    pg.text("a", 0, 0);
    pg.pop();

    image(pg,0,0);

  }