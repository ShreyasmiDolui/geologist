const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammmer, rubber, box;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(0,height,1200,20)

    hammer = new Hammer(200, 65)
    box = new Box(150,48,50,50)
    rubber = new Rubber(100,67)
   
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    
    ground.display();
    hammer.display();
    box.display();
    rubber.display();
    
   
}