var movingRect, fixedRect
function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.debug = true
  movingRect.shapeColor = "blue"
  fixedRect = createSprite(400,100,50,80)
  fixedRect.shapeColor = "red"
  fixedRect.debug = true

  fixedRect.velocityY = 2
  movingRect.velocityY = -2
}

function draw() {
  background(0);
  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY  

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * (-1)
    movingRect.velocityX = movingRect.velocityX * (-1)
    }
    
    if ( movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
      fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
        fixedRect.velocityY = fixedRect.velocityY * (-1)
        movingRect.velocityY = movingRect.velocityY * (-1)
    }
  drawSprites();
}