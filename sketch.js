var flappyBird;
var flappyImg, flappyImgUp;
var ground;


function preload(){

  flappyImg = loadImage("images/flappy.png");
  flappyImgUp = loadImage("images/flappyUp.png")

}
 
function setup() {
  createCanvas(600,600);
  
    
  flappyBird = createSprite(100,300,30,30);
  flappyBird.shapeColor = "blue";
  flappyBird.addImage("flappy",flappyImg);
  flappyBird.addImage("flappyUp", flappyImgUp);
  flappyBird.debug = true;
  flappyBird.setCollider("circle",0,0,50)

  ground = createSprite(300,height - 20,1200,10);
  ground.shapeColor = "blue";
  
  
}

function draw() {
  background("grey");  

 
  //flappyBird.velocityX = 3;

  if(keyDown("space") || keyDown("up_arrow")){

      flappyBird.velocityY = -5;
      flappyBird.changeImage("flappyUp");
      flappyBird.scale = 0.3;
  }else{

    flappyBird.velocityY = 5;
    flappyBird.changeImage("flappy");
    flappyBird.scale = 0.65;
  }

  if(flappyBird.collide(ground)){
    flappyBird.velocityY = 0;
  }

  ground.velocityX = -10;
  if(ground.x < 0){

    ground.x = ground.width/2;
  }
  
  drawSprites();
  }