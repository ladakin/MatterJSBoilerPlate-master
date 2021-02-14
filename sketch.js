
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,10);
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(400,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  dustbin1.display();
  
  paper.display();

  ground.display();

  drawSprites();
 
}
function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85 ,y:-85})
	}
}


