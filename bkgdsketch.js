// References: p5.js sketch "elliptical orbit" by tht-jxny https://editor.p5js.org/tht-jxny/sketches/H1r4Vho-N
// and p5.js example on Scale https://p5js.org/examples/transform-scale.html

var canvas;

var centre;
var border;
var time = 0;
var vel;

var a = 0.0;
var s = 0.0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  centre = createVector(0,0);
  border = createVector(150,0);
	vel = createVector(0,-20);
}

function draw() {
	var acc = centre.copy();
  acc.sub(border);
  acc.setMag(0.15);
	vel.add(acc);
  border.add(vel);
  // background(51, 21, 39, 5);

    //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
  a = a + 0.02;
  s = cos(a) * 1.5;

  translate(width / 2, height / 2);
  scale(s);
  fill(0,0,0,15);
  ellipse(0, 0, 200, 200);

  translate(windowWidth/1.5,windowHeight/1.5);
  noFill();
  // stroke(255);
  stroke(78, 77, 120);
  strokeWeight(1);
  ellipse(centre.x,centre.y,100);
  ellipse(border.x,border.y,2.5);
  // stroke(255, 50);
  stroke(78, 77, 120);
  strokeWeight(.25);
  rect(border.x*2,border.y, 7);
  // rect(border.x,border.y*2, 5/border.x);
  time++;
}
