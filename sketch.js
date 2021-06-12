
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var grnd;
var box1;
var box2;
var pig1;
var stick1;
var stick2;
var stick3;
var stick4;
var box3;
var box4;
var box5;
var bird1;
function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  /*var grounds={
      isStatic: true 

  }
  var bounce={
    restitution:0.7
  }
  ground = Bodies.rectangle(200,390,400,30,grounds);
 ball=Bodies.circle(100,200,20,bounce);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);*/


  grnd = new Ground(600,385,1200,30);
  box1 = new boxes(700,320,70,70);
  box2 = new boxes(920,320,70,70);
  box3= new boxes(700,240,70,70);
  box4= new boxes(920,240,70,70);
  box5=new boxes(810,150,70,70);
  pig1=new pig(810,350);
  pig2=new pig(810,250);
  stick1=new stick(810,260,300,PI/2);
  stick2=new stick(810,170,300,PI/2);
  stick3=new stick(775,120,150,PI/7);
  stick4=new stick(850,120,150,-PI/7);
  bird1=new bird(150,150);
}

function draw() {
  background(0);
  Engine.update(engine);
  /*rectMode(CENTER);  
  fill("green");
  rect(ground.position.x,ground.position.y,400,30);  
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);*/
    


  grnd.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  bird1.display();
 // drawSprites();
}