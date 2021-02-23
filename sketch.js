const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var Score = 0;
var GameState = "Start";

function preload(){
	bow = loadImage("Images/Bow.png");
  Background = loadImage("Images/Background.jpg");
 }

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

	apple1 = new Apple(1100,80,30);
	apple2 = new Apple(1000,220,30);
	apple3 = new Apple(1160,275,30);
	apple4 = new Apple(1200,200,30);
	apple5 = new Apple(1000,85,30);
	apple6 = new Apple(900,200,30);
	apple7 = new Apple(1100,220,30);
	apple8 = new Apple(950,275,30);
	apple9 = new Apple(1040,150,30);
	apple10 = new Apple(1150,150,30);

	arrow = new Arrow(275,460,30);

	slingshot = new SlingShot(arrow.body,{x:275,y:460})	

	tree = new Tree(1050,600);
	ground = new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(Background);
  textSize(18);
  fill("black");
  text("Press Space To Play Again!",150,100);
  text("Score: " + Score,10,45);
  image(bow ,150,370,225,225);
  

  tree.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();

  arrow.display();
  ground.display();

  detectCollision(apple1,arrow);
  detectCollision(apple2,arrow);
  detectCollision(apple3,arrow);
  detectCollision(apple4,arrow);
  detectCollision(apple5,arrow);
  detectCollision(apple6,arrow);
  detectCollision(apple7,arrow);
  detectCollision(apple8,arrow);
  detectCollision(apple9,arrow);
  detectCollision(apple10,arrow);
  
}

function mouseDragged(){
  if(GameState === "Start"){
    Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  GameState = "Play";
}

function detectCollision(apple,arrow){
  applePos = apple.body.position;
  arrowPos = arrow.body.position;

  var distance = dist(arrowPos.x,arrowPos.y,applePos.x,applePos.y);
  if(distance<=apple.r+arrow.r){
    Body.setStatic(apple.body,false);
    Score = Score+1;
  }
}


function keyPressed(){
  if(keyCode === 32 ){
    Body.setPosition(arrow.body,{x:275,y:460});
    slingshot.attach(arrow.body);
    GameState = "Start";
  }

}