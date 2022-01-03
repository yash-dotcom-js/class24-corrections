
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
	ground=new Ground(400,685,800,20)
	dustbin=new Dustbin(635,670,130,40)
	holder1=new Dustbin(575,640,20,100)
	holder2=new Dustbin(705,640,20,100)
	paper=new Paper(100,100,20,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  dustbin.display()
  holder1.display()
  holder2.display()
  paper.display()
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}




