
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper;
var dustbin;


function preload()
{
engine = Engine.create();
world = engine.world;


}

function setup() {
	createCanvas(800, 700);

	paper = createSprite(90,660,30,30);
	dustbin = createSprite(500,670,150,20);
    ground = createSprite(400,690,1000,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.





	paper = new Paper(90,660,30,30);
	dustbin = new DustBin(500,670,150,20);
	ground = new Ground(400,680,20,1000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();
 dustbin.display();

 paper.y = mouseY;
paper.x = mouseX;

  
  drawSprites();
 
}



