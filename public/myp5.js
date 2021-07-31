function setup() {
  const mycanvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  mycanvas.parent("p5");
  mycanvas.addClass("rounded");
}

let diameter = 50;
let radius = diameter / 2;
let positionX = 500 / 2;
let positionY = 500 / 2;
let speedX = 10;
let speedY = 10;

function draw() {
  background(0);
  noStroke();
  strokeWeight(1);
  fill(57);
  ellipse(positionX, positionY, diameter, diameter);
  bounce();

  if (mouseX >= positionX - radius && mouseX <= positionX + radius) {
    if (mouseY >= positionY - radius && mouseY <= positionY + radius) {
      speedX = -speedX;
      speedY = -speedY;
    }
  }

  positionX = positionX + speedX;
  positionY = positionY + speedY;
}

function bounce() {
  if (positionX < radius || positionX > width - radius) {
    speedX = -speedX;
  }
  if (positionY < radius || positionY > height - radius) {
    speedY = -speedY;
  }
}
