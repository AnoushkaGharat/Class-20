var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 200, 50, 50);
  fixedRect.shapeColor= "lightBlue";
  fixedRect.debug = true;

  movingRect = createSprite(500, 200, 50, 50);
  movingRect.shapeColor= "lightBlue";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX; 
movingRect.y = World.mouseY;
if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2
  && movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor = "hotPink";
  movingRect.shapeColor = "hotPink";
}
else{
  fixedRect.shapeColor = "lightBlue";
  movingRect.shapeColor = "lightBlue";
}
  drawSprites();
}