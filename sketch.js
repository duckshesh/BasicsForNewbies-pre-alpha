const pi = 3.141592653;
var mou;

function preload(){
  openTextImg = loadImage("opentext.png");
}



function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  
  //opening text vars
  openText = createSprite(x,y,width/5, 40);
  openText.addImage(openTextImg);
  openText.lifetime = 300;

  //subject selection
  maths = createSprite(width/2, height/2, 500, 500);
  maths.shapeColor = 0;
  maths.visible = false;

  algebra = createSprite(width/6, height/2, 225, 150);
  geometry = createSprite(algebra.position.x + 300, height/2, 225, 150);
  calculus = createSprite(geometry.position.x + 300, height/2, 225, 150);
  statistics = createSprite(calculus.position.x + 300, height/2, 225, 150);

  algebra.visible = false;
  geometry.visible = false;
  calculus.visible = false; 
  statistics.visible = false;

  //mouse
  noCursor();
  mou = createSprite(x, y, 25, 25);
}



function draw(){
  background(18,18,18);
  frameRate(60);

  opening();

  //calling other functions after opening
  if(openText.lifetime == 0){ 
    subjects();


  }

   //mouse stuff
   mou.draw = function() { 
    push();
    fill(235);
    ellipse(0,0, mou.width, mou.height)
    pop();
    } 
    mou.position.x = mouseX;
    mou.position.y = mouseY;
    mou.shapeColor = 235;

  mou.debug = true;
  drawSprites();
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}