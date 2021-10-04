var background
var astronaut
var edges
function preload(){
  bathAnimation= loadAnimation("images/bath1.png" ,"images/bath2.png")
  brushImage=loadImage("images/brush.png")
  drinkAnimation=loadAnimation("images/drink1.png","images/drink2.png")
  eatingAnimation=loadAnimation("images/eat1.png","images/eat2.png")
  gymAnimation1=loadAnimation("images/gym1.png","images/gym2.png")
  gymAnimation2=loadAnimation("images/gym11.png","images/gym12.png")
  backgroundImage=loadImage("images/iss.png")
  movingAnimation=loadAnimation("images/bath1.png","images/bath2.png")
  sleepImage=loadImage("images/sleep.png")
  
}
function setup() {
  createCanvas(1000, 1080);
background=createSprite(010,30)
background.addImage("Xyz",backgroundImage)
background.scale=0.4
astronaut=createSprite(690,470)
astronaut.addImage("xyz",sleepImage)
astronaut.scale=0.1
edges=createEdgeSprites()
}

function draw() {
  
if(keyDown("Space")){
  astronaut.addAnimation("Brushing",brushImage)
  astronaut.changeAnimation("Brushing")
  astronaut.y=350
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("Enter")){
  astronaut.addAnimation("ABCD",gymAnimation1)
  astronaut.changeAnimation("ABCD")
  astronaut.y=370
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("Shift")){
  astronaut.addAnimation("ABCDEF",gymAnimation2)
  astronaut.changeAnimation("ABCDEF")
 astronaut.scale=0.2
  astronaut.y=380
  astronaut.x=200
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("W")){
  astronaut.addAnimation("ABCdef",eatingAnimation)
 astronaut.changeAnimation("ABCdef")
  astronaut.y=350
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("R")){
  astronaut.addAnimation("ABCdefg",bathAnimation)
  astronaut.changeAnimation("ABCdefg")
  astronaut.y=350
astronaut.velocityX=0
astronaut.velocityY=0
}
if(keyDown("M")){
  astronaut.addAnimation("abcdefgh",movingAnimation)
  astronaut.changeAnimation("abcdefgh")
astronaut.velocityX=3
astronaut.velocityY=3
astronaut.collide(edges)
}

drawSprites();
textSize(35)
text("Instructions:",30,30)
textSize(20)
text("Space:BRUSHING",30,60)
textSize(20)
text("Enter:GYMING,PRESS Shift FOR GYMING 2",30,80)
textSize(20)
text("W:EATING",30,120)
textSize(20)
text("R:BATHING",30,150)
textSize(20)
text("M :MOVING",30,190)
}