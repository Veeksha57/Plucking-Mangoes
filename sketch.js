
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chance = 0;
var stone,elastic,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,
mango7,mango8,mangoObj;
var treeImg,boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
  treeImg = loadImage("tree.png");
  //grassImg = loadImage("Grass3.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,536,1000,20);
	stone = new Stone(180,376,20);
	mango1 = new Mango(725,200,30);
	mango2 = new Mango(775,145,30);
  mango3 = new Mango(825,255,30);
	mango4 = new Mango(945,245,30);
  mango5 = new Mango(850,175,30);
  mango6 = new Mango(685,130,30);
  mango7 = new Mango(590,225,30);
  mango8 = new Mango(660,250,30);
 elastic= new Elastic(stone.body,{x:150,y:370});

 Engine.run(engine);
}


function draw() {
  background(102, 0, 120);

  textFont("Cursive");
  fill(179, 119, 249);
  stroke(179, 119, 249);
  textSize(40);
  text("Press Space To Get A Second Chance To PLAY!!",60,50);
  //image(boyImg,200,360,200,300);
  //Engine.update(engine);
  //drawSprites();
  //push();
  imageMode(CENTER);
  image(boyImage,225,450,250,350);
  image(treeImg,750,310,500,500);
  pop();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  elastic.display();
  Collision(stone,mango1);
  Collision(stone,mango2);
  Collision(stone,mango3);
  Collision(stone,mango4);
  Collision(stone,mango5);
  Collision(stone,mango6);
  Collision(stone,mango7);
  Collision(stone,mango8);
 
 // text("Chances Taken - " + chance,60,200)
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  elastic.fly();
 // chance = chance + 1;
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:180, y:376});
    elastic.attach(stone.body);
  }
}
function Collision(object1,object2){
  var distance = dist(mango1.body.position.x,mango1.body.position.y,
    stone.body.position.x,stone.body.position.y)
    if(distance <= mango1.radius+stone.r){
      Matter.Body.setStatic(mango1.body,false);
      
    }
}

