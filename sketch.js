var movingRect, fixedRect;
var b1, b2;
var go1,go2,go3,go4;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,50,50);
  fixedRect = createSprite(400,200,50,80);
  movingRect.shapeColor="crimson"
  fixedRect.shapeColor = "crimson"

  go1 = createSprite(100,100,50,50);
  go2 = createSprite(200,100,50,50);
  go3 = createSprite(300, 100,50,50);
  go4 = createSprite(400,100,50,50);
  go1.shapeColor = "yellow"
  go2.shapeColor = "yellow"
  go3.shapeColor = "yellow"
  go4.shapeColor = "yellow"

  b1 = createSprite(0,100,50,50);
  b2 = createSprite(800, 100,55,55)
  b1.shapeColor = "yellow"
b2.shapeColor = "aqua";
b1.velocityX = 5;
b2.velocityX = -5;
}

function draw() {
  background(0);

  console.log(movingRect.x - fixedRect.x);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

if(isTouching(movingRect, fixedRect)){
  go1.shapeColor = "lightblue"
  go2.shapeColor = "lightblue"
}else{
  go1.shapeColor="crimson"
  go2.shapeColor = "crimson"
}
  
  BounceOff();

  drawSprites();
}   

