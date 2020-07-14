var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var crumpledPaper,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	 
}


function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	 
	//Create a Ground
	ground = new Ground(600, 650, 1200, 20);
	box1=new dustbin(1000,550);
	//paper=new paper(200,620);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  //paper.display();
  box1.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150})
	}
}
 


