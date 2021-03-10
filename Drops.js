class Drops{
    constructor(x,y) {
        var options = {
            isStatic: false,
            friction : 0.1
          }
        
      this.body = Bodies.circle(x,y,5,options);
      this.radius = 5;
     // this.color = color(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)))
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
     /*if(pos.y>900){
       Matter.Body.setPosition(this.body,{x:random(0,400), y: random(0,10)})
     }*/
    }

    
    
}