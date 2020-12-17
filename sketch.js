
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,480,400,400)
	ground = new Ground(400,680,800,20)
	boy = new Boy(250,640,100,100)
	stone = new Stone(220,620,20,20)

	mango1 = new Mango(280,450,30,30)
	mango2 = new Mango(340,420,30,30)
	mango3 = new Mango(380,460,30,30)
	mango4 = new Mango(400,350,30,30)
	mango5 = new Mango(420,410,30,30)
	slingShot = new SlingShot(stone.body,{x:200, y:620})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  

 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }