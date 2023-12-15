var frog
var frogImg
var rocks
var rocksGroup
var rocksImg
var mice
var miceGroup
var miceImg
var score = 0
var background
var backgroundImg
var invisibleGround


function preload(){
backgroundImg = loadImage("Jungle.jpg")
rocksImg = loadImage("Rock.png")
frogImg = loadImage("Frog.png")
miceImg = loadImage("Mice.png")
}

function setup(){
createCanvas(2000,800)
rocksGroup = new Group()
miceGroup = new Group()
frog=createSprite(200,650,30,30)
frog.addImage(frogImg)
frog.scale=0.5
invisibleGround = createSprite(100,700,4500,5)
frog.setCollider("circle",0,0,30);
}

function draw(){
background(backgroundImg);
spawnRocks()
spawnMice()
if (keyIsDown(UP_ARROW)){
frog.velocityY=frog.velocityY-5
}
frog.velocityY=frog.velocityY+0.8
if (frog.x>2000){
  frog.x=200
}
if (frog.y<400){
  frog.y=700
}
if (frog.isTouching(miceGroup)){
  mice.visible=false
  score=score+1
  
  
}
if (keyIsDown(RIGHT_ARROW)){
  frog.x=frog.x+5
}
if (keyIsDown(LEFT_ARROW)){
  frog.x=frog.x-5
}
invisibleGround.visible=false
frog.collide(invisibleGround)
drawSprites()
textSize(50)
text("Score:"+score,500,100)
}

function spawnRocks(){
  if (frameCount % 60 == 0) {
    rocks = createSprite(50,700,30,30);
    rocks.x = Math.round(random(1000,2000));
    rocks.addImage(rocksImg);
    rocks.scale = 0.5;

    rocks.lifetime = 200;
    rocksGroup.add(rocks);
  }
    }

    function spawnMice(){
      if (frameCount % 60 == 0) {
        mice = createSprite(200,700,30,30);
        mice.x = Math.round(random(200,1500));
        mice.addImage(miceImg);
        mice.scale = 0.75;
        mice.lifetime=400
        frog.depth=mice.depth
        frog.depth=frog.depth+1
        miceGroup.add(mice);
    }
  }