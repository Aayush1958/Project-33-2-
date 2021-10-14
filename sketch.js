const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowball = [];
var maxBalls = 100;


var bg;
var boyImg;
function preload(){
  bg = loadImage("snow2.jpg");
  boyImg = loadImage("boy.png")
}
function setup() {
  engine = Engine.create();
    world = engine.world;
  
  createCanvas(800,400);
  var boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImg);

  if(frameCount % 150 === 0){

    for(var i=0; i<maxBalls; i++){
        snowball.push(new createSnow(random(0,800), random(0,400)));
    }

}
}

function draw() {
  background(bg); 
  
  for(var i = 0; i<maxBalls; i++){
    snowball[i].showSnowball();
    snowball[i].updateY()

  drawSprites();
}
}