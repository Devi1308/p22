const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var fairy,fairyImg;
var star,starImg;
var ground, groundImg;
    
function preload()
{
  fairyImg=loadAnimation("images/fairy.png");
  starImg=loadAnimation("images/star.png");
  groundImg=loadAnimation("images/night.jpg");
   //preload the images here
}

function setup() {
	var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    fairy = Bodies.rectangle(50,300,200,20);
    fairy.addAnimation(fairyImg);
    World.add(world,fairy);

    star=Bodies.circle(370,30,10);
    star.addAnimation(starImg);
    World.add(world,star);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(0,0,400,400,ground_options);
    ground.addAnimation(groundImg);
    World.add(world,ground);
}


function draw() {
  background("white");

}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
       fairy.velocityX=-2;
      }
  
    if(keyCode===RIGHT_ARROW){
       fairy.velocityX=2;
      }
         
    if(keyCode===UP_ARROW){
       fairy.velocityY=-2;
      }
  
    if(keyCode===DOWN_ARROW){
       fairy.velocityY=2;
      }
  }

/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    //circle(ball.position.x, ball.position.y, 20);
}*/

