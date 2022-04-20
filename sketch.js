
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1;

	

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   

	//Create the Bodies Here.
	paper1= new Paper(200,500,5);
	World.add(world,paper1);
	dustbin1=new Dustbin(600,450,20,100)
	World.add(world,dustbin1);
	Engine.run(engine);
  
}


function draw() {
	background("black");

}
function keyPressed(){
	if (keyCode ===32){
		
	}
}



