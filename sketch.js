var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;

function preload(){
 bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gum12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");
bath = loadAnimation("bath1.png","bath2.png")
}


function setup() {
  createCanvas(600,500);
  

  astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255); 
  drawSprites();

text("up_Arrow=brushing",20,55);
edges=createEdgeSprites();
astronaut.bounceOff(edges);

text("right_Arrow=bath",20,55);
edges=createEdgeSprites();
astronaut.bounceOff(edges);

text("left_Arrow=drink",20,55);
edges=createEdgeSprites();
astronaut.bounceOff(edges);

text("down_Arrow=eat",20,55);
edges=createEdgeSprites();
astronaut.bounceOff(edges);


if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gamming",gym);
  astronaut.changeAnimation("gamming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("LEFT_ARROW")) {
 astronaut.addAnimation("bathibg",bath);
 // astronaut.changeAnimation("bathing");
  astronaut.x = 150;
  astronaut.y = 350;
  astronaut.velocityX = 0.5;
  astronaut.velocityY = 0.5;
}

if (keyDown("RIGHT_ARROW")) {
 astronaut.addAnimation("eating",eat);
 astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("m")) {
 astronaut.addAnimation("moving",move);
 astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;

}
}