var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "brown";

  speed= random(223,321);
  weight= random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;

}

function draw() {

  background("black"); 
  
  if(hasCollided(bullet,wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
        if(damage > 10){
          wall.shapeColor = "red";
          textSize(24);
          fill("red");
          text("Lethal",800,200)
        }
        if(damage < 10){
        wall.shapeColor = "lightgreen";
        textSize(24);
        fill("green");
        text("Good",800,200)
        }
    }



  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}