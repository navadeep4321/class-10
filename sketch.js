var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(25,190,13,13);
sam.setAnimation("sam");

sam.height=25
sam.width=15
        
  
  car1 = createSprite(100,130,10,10);
car1.setAnimation("car");
car1.width=15
car1.height=25

car2 = createSprite(215,130,10,10);
  car2.setAnimation("car");
car2.width=15
car2.height=25

  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car");
car3.width=15
car3.height=25

  
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car");
car4.width=15
car4.height=30


  
 
//add the velocity to make the car move.
car1.velocityY=4
car2.velocityY=4
car3.velocityY=4
car4.velocityY=4

function draw() {
   background("white");




      
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
car1.bounceOff(boundary2);
car1.bounceOff(boundary1);

car2.bounceOff(boundary2);
car2.bounceOff(boundary1);

car3.bounceOff(boundary2);
car3.bounceOff(boundary1);

car4.bounceOff(boundary2);
car4.bounceOff(boundary1);

//Add the condition to make the sam move left and right
if (keyDown(RIGHT_ARROW)) {
 sam.x=sam.x+2
  }
  if (keyDown(LEFT_ARROW)) {
 sam.x=sam.x-2
  }
  
  

//Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
sam.x=20
sam.y=190
life=life+1
}


  
 drawSprites();
}