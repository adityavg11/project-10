var ship_sailing;
var sea;

var ship 


//to load the animation and image at first
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");
}

function setup(){
 //to create sea sprite 
  sea=createSprite(100,200,20,20);

  //to add the animation on the sea   
  sea.addAnimation("image",sea_image);

  //to give size to sea
  sea.scale=0.3;

  //to move it
sea.velocityX=10;


//to craete ship sprite
  ship=createSprite(200,200,20,20);

  //to add animatiom on ship
 ship.addAnimation("running",ship_running);


 //to give size to the ship
 ship.scale=0.2;

 //give position to ship
ship.x=100;

}

function draw() {
//to make sea infinite
if (sea.x > 400){
sea.x=0;

}


//draw all sprites
drawSprites();
}