const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(300,655,1800,10);
	paper=new Paper(178,361);
	dustbin1=new Dustbin(980,650,150,20);
	dustbin2=new Dustbin(910,610,20,110);
	dustbin3=new Dustbin(1045,610,20,110);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,50,50);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-44});
	}
}


