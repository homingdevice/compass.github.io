//introduce global variables
var mirrorText;
var mirrorSplit;


function setup() {
  // put setup code here
  mirrorText = "channel surfing through heartbreak eternally televised on horror tamagachi take-away"
  //split the text into units
  mirrorSplit = mirrorText.split("eternally");
  //build a canvas
  createCanvas (windowWidth, windowHeight);
  background (0);
  //use a font
  textFont("Courier", 10);
  //give index an initial value
  index = 0
  //frameRate (20)
  //give an initial valuero drawCount
  drawCount = 0;
}

function draw() {
  // put drawing code here: runs 60 x per second
  //we need a color for the text
  fill(random(225),random(225),random(225));
  //center the text
  translate(windowWidth/2, windowHeight/2);
textAlign(CENTER);

  text(mirrorSplit[0], 0,random(-20,20));

  drawCount = drawCount + 1;


//modulua (if drawCount divided by some number has a zero remainder)
  if (drawCount % 10 == 0) {


  		index = index + 1;

 		if (index >= mirrorSplit.length) {
  		index = 0;
 		 }
 } 
}