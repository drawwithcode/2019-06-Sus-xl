var canvas;
var sliderSz;
var sliderX;
var sliderY;
var sliderR;
var sliderG;
var sliderB;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);
  strokeC = color(0);
  background(color(20,20,20));

  //size control
 createP('Size');
  sliderSz = createSlider(10, 300, 50, 10);
  // sliderSz.position(50, windowHeight / 2 - 125);

  //position control
   createP('Left & Right');
  sliderX = createSlider(windowWidth / 2 - 250, windowWidth / 2 + 250, windowWidth / 2, 10);
  // sliderX.position(50, windowHeight / 2 - 75);
  createP('Up & Down');
  sliderY = createSlider(windowHeight / 2 - 250, windowHeight / 2 + 250, windowHeight / 2, 10);
  // sliderY.position(50, windowHeight / 2 - 25);
  //rgb color control

  createP('Colour');
  sliderR = createSlider(0, 255, 125);
  // sliderR.position(50, windowHeight / 2 + 75);
  createP();
  sliderG = createSlider(0, 255, 125);
  // sliderG.position(50, windowHeight / 2 + 125);
  createP();
  sliderB = createSlider(0, 255, 125);
  // sliderB.position(50, windowHeight / 2 + 175);


}


function draw() {

  //ellipses
  fill(color(sliderR.value(), sliderG.value(), sliderB.value()));
  // stroke(strokeC);
  noStroke();
  ellipse(mouseX, mouseY);
  ellipse(sliderX.value(), sliderY.value(), sliderSz.value(), sliderSz.value());
}


// function mousePressed() {
//   clear();
// }
