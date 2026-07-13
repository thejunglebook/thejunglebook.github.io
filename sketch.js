// var a = 0;
// // let c1,c2;
// let bg;

// function preload(){
//   bg =loadImage("images/artjungle bkgd color only.svg");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // c1 = color("indigo");
//   // c2 = color("black");
  
//   // for(let y=0; y<height; y++){
//   //   n = map(y,0,height,0,1);
//   //   let newc = lerpColor(c1,c2,n);
//   //   stroke(newc);
//   //   line(0,y,width, y);
//   // }

//   // angleMode(DEGREES);
// }

// // function draw() {

// //   background("indigo");
// //   stroke(255,255,255,50);
// //   fill(0,0,0,50);
// //   setCenter (-250,250);
// //     // polarEllipses (8,100,100,250);
// //   // polarEllipses (8,100,100,200);
// //     // polarEllipses (8,75,75,100);
// //       // polarEllipses (8,75,75,75);
// //     translate(width/4, height/4);
// //     rotate(a);
// //         polarEllipses (4,width/6,height/6,500);

// //     a = a + 2
// //   // polarLines (16,10,100)

// // }

// function draw() { 
//     setCenter(width/2, height/2);
//     // background("black");
//     // image(img1,0,0);

//  background(bg); 
        
//     polarEllipses(15, 0, 0, 100, function(...args) {
           
//       stroke(250, 250, 250, 25);

//         fill(args[0]*40, args[0]*40, args[0]*40, 10);

//         args[2] = args[0]*6;

//         args[3] = args[0]*6;
//         //translate(width/2, height/2);

//         rotate(a);
//         a = a + 0.0001;

//         return args;    

//     });
// }
let angle;
let minAngle = 40;
let maxAngle = 50;

function setup() {
  createCanvas(710, 400);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // Calculate the angle based on the mouse position, maximum 90 degrees
  angle = (mouseX / width) * 90;
  angle = min(angle, 90);

  // Start the tree from the bottom of the screen
  translate(width / 2, height);

  // Draw a line 120 pixels
  stroke(0, 255, 255);
  line(0, 0, 0, -120);

  // Move to the end of that line
  translate(0, -120);

  if(angle < minAngle){
    angle = minAngle;
  }
  else if(angle > maxAngle){
    angle = maxAngle;
  }
  // Start the recursive branching
  branch(120, 0);

  describe(
    'A tree drawn by recursively drawing branches, with angle determined by the user mouse position.'
  );
  console.log(angle);
}

function branch(h, level) {
  // Set the hue based on the recursion level
  stroke(level * 25, 255, 255);

  // Each branch will be 2/3 the size of the previous one
  h *= 0.75;

  // Draw if our branch length > 2, otherwise stop the recursion
  if (h > 2) {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }
}