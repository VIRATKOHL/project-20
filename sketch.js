var fixedRect;
var movingRect;
var fixedRect1;

function setup() {
  
  createCanvas(1200,800); 
  fixedRect = createSprite(600, 400, 50, 80);
   fixedRect.shapeColor = "green";
    fixedRect.debug = true;
     
    movingRect = createSprite(400,200,80,30);
      movingRect.shapeColor = "green"; 
    movingRect.debug = true;

    fixedRect1 = createSprite(900,600,50,50);
 fixedRect1.shapeColor="green";    
fixedRect1.debug = true;


}

function draw() {
  background("black");  
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 
 if(collide(movingRect,fixedRect)){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";
  }
  else if(collide(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
  }
  else{
  movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor="green";
}
 
 
  drawSprites();
 



}

