const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//var maxDrops = 100;
var drops = [];
function preload(){
    
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
  
    umbrella = new Umbrella(150,500)
    
}

function draw(){
    background(0);  
    Engine.update(engine);
    
   
     drops.push(new Drops(random(0,400), random(0,10)));
     

    
    for (var i = 0; i < drops.length; i++) {
          drops[i].display();
    }
    umbrella.display();
}   

