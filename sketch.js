
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodgroup, obstaclegroup;
var score;
var invisibleground,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,200);
background(220);
  
monkey=createSprite(50,180,20,50);
monkey.addAnimation("monkeyrunning",monkey_running); monkey.scale=0.1;



invisibleground=createSprite(0,200,900,20); 
invisibleground.visible = false;

  
ground=createSprite(0,190,900,10); 
ground.velocityX=-3;
ground.x = ground.width /2;
  
foodgroup=createGroup();
obstaclegroup=new Group();
 
}


function draw() {
background(180);
  
monkey.collide(invisibleground);
  
if(keyDown("space") && monkey.y>=100){
 monkey.velocityY=-3; 
}

monkey.velocityY=monkey.velocityY+0.1;
  
if(ground.x<0){
  ground.x = ground.width/2;
}

spawnfood();
spawnobstacle();
  
drawSprites();
}

function spawnfood(){
if(frameCount%40===0){
  banana=createSprite(20,20,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(30,170))
  banana.velocity=-3;
  
  banana.lifetime = 134;
    
    
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  
  foodgroup.add(banana);
}
}

function spawnobstacle(){
if(frameCount%60===0){
  obstacle=createSprite(20,20,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.y=180;
  obstacle.velocity=-3;
  
  obstacle.lifetime = 134;
    
    
  obstacle.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
    
  obstaclegroup.add(obstacle);
}
}





