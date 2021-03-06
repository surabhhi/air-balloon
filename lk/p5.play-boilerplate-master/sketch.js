var balloon;
var background;

function prelode () {

  backgroundImg=loadImage("images/Bg.png");
  balloonImage=loadAnimation("images/Hot Air Ballon-02.png","images/Hot Air Ballon-03.png","images/Hot Air Ballon-04.png");

}

function setup() {

 
 

database = firebase.database();
console.log(database);
createCanvas(800,400);

balloon= createSprite(100, 400, 20, 20);
balloon=addAnimation("balloon",balloonImage);
balloon.scale=0.5;


  


}

function draw() {

  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x- 10;
  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x + 10;
    }

  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y - 10;
     }

     else if(keyDown(DOWN_ARROW)){
      balloon.y=balloon.y + 10;
       }

   
  drawSprites();
}