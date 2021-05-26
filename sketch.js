var bg;
var thief1, thief2;
var ground1, ground2;
var dog;
function preload() {
  bg = loadImage("1.jpg")
  thief1Image = loadImage("2-.png")
  thief2Image = loadImage("3-.png")
  dogImage = loadImage("4-.png")
}
function setup() {
  createCanvas(1600, 750)

  thief1 = createSprite(200, 275, 40, 40)
  thief1.addImage(thief1Image)
  thief1.scale = 0.5

  thief2 = createSprite(200, 625, 40, 40)
  thief2.addImage(thief2Image)
  thief2.scale = 0.7

  ground1 = createSprite(800, 375, 1800, 20)
  ground1.visible = true
  ground1.veloctiyX = -5

  ground2 = createSprite(800, 725, 5000, 20)
  ground2.visible = true
  ground2.velocityX = -5
}
function draw() {
  background(bg)
  if (ground1.x < 0) {
    ground1.x = ground1.width / 2

  }
  if (ground2.x < 0) {
    ground2.x = ground2.width / 2

  }
  if (keyDown("Space")&& thief1.y>=275) {
    thief1.velocityY = -15
  }
  thief1.velocityY = thief1.velocityY + 0.5
  if (keyDown("ctrl")&& thief2.y>= 624) {
    thief2.velocityY = -10
  }
  thief2.velocityY = thief2.velocityY + 0.5
  thief1.collide(ground1)
  thief2.collide(ground2)
  console.log(thief1.y)
  console.log(thief2.y)
  spawnDog1();
  drawSprites();
  
}

function spawnDog1(){
  if(frameCount% 75=== 0){
    dog = createSprite(1600,275,20,20)
    dog.addImage(dogImage)
    dog.velocityX = -10
    dog.scale = 0.3
  }
}