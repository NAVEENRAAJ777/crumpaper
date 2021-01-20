
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
	ground1=new ground(500,height-20,1020,20);
	bin1=new bomb(640,570,20,190)
	bin2=new bomb(521,570,20,190)
	bin3=new bomb(581,620,120,90)
		
	
	paper1=new crumpledpaper(130,605)
 

	Engine.run(engine);
	
  
}


function draw() {
 Engine.update(engine)
  rectMode(CENTER);
  background("white");
  paper1.display();
  ground1.display();

  bin1.display();
  bin2.display();
 bin3.display();
 
  
  
 
 
  

}

function keyPressed(){
	if(keyCode===DOWN_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:325,y:-325})
	}
}



  