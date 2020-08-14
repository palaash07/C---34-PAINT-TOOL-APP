var bgColor;
var ballDrawing = false;
var eraser;
var brushColor;
var brush;
var areWeStamping = false;
var stamp;
var stampedImage;

function preload() {
  eraser = loadImage('eraser.jpg');
  brush = loadImage('brush.jpg');
  stamp = loadImage('stamp.jpg');
  stampedImage = loadImage('stamped.png');
}

function setup() {
  createCanvas(400, 400);

  bgColor = color(255);
  brushColor = color(75);
}

function draw() {
  drawMyButtons();
  drawOnSketchpad();
  checkIfIChangeMyBrushColor();
  checkIfErased();
  checkIfStamp();
}

function drawOnSketchpad() {
  noStroke();

  if (mouseX > 50) {
    if (mouseIsPressed == true) {
      //if we are on the right side of page, let us draw
      fill(brushColor);
      ellipse(mouseX, mouseY, 10, 10);
      if (areWeStamping == true) {
        imageMode(CENTER, CENTER);
        image(stampedImage, mouseX, mouseY, 50, 50);
        imageMode(CORNER);
      }
    }
  }
}

function checkIfIChangeMyBrushColor() {
  if ((mouseX > 0) && (mouseX < 50) && (mouseY > 50) && (mouseY < 100)) {
    if (mouseIsPressed == true) {

      //change brushColor
      brushColor = color(random(255), random(255), random(255));
    }
  }
}

function drawMyButtons() {
  stroke(1);
  //erase button
  image(eraser, 0, 0, 50, 50);
  //draw brush button
  image(brush, 0, 50, 50, 50);
  noStroke();
  fill(brushColor);
  rect(19,50,12,18);
  stroke(1);
  
  //draw stamp
  image(stamp, 0, 100, 50, 50);
  fill(0);
  if (areWeStamping == false){ //if stamping is off, say OFF
    text("OFF",25,150);
  } 
}

function checkIfErased() {
  if ((mouseX > 0) && (mouseX < 50) && (mouseY > 0) && (mouseY < 50)) {
    if (mouseIsPressed == true) {
      fill(255);
      rect(50, 0, width, height);
    }
  }
}

function checkIfStamp() {
  if ((mouseX > 0) && (mouseX < 50) && (mouseY > 100) && (mouseY < 150)) {
    if (mouseIsPressed == true) {
      if (areWeStamping == true) {
        areWeStamping = false;
      } else {
        areWeStamping = true;
      }
    }
  }
}