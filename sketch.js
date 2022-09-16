
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rope,ground
var button
var balloon
var bg_img

function preload()
{
    bg_img = loadImage('Demolishing Building.bgi.jpg')
  }
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200,canH,600,20);

  ball = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,ball);


  button = createImg('hook 444.png');
  button.position(20,30);
  button.size(50,50);

  rope = new Rope(8,{x:40,y:30});
  fruit_con = new Link(rope,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  rope.show();
}

