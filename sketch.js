var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var engine, world;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(100,550,20);
ground = new Ground(400,650,800,20)
d1 = new Ground(650,640,250,20)
d2 = new Ground(520,600,20,100)
d3 = new Ground(770,600,20,100);
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

	ball.display();
	ground.display();
	d1.display();
	d2.display();
	d3.display();
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:60,y:-60});
	}
}



