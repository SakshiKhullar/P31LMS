class Umbrella{
    constructor(x,y) {
        var options = {
            isStatic: true,
            friction : 0.01
          }
        
      this.body = Bodies.circle(x,y,70,options);
      this.radius = 70;
      this.image= loadImage("Walking Frame/walking_1.png")
        this.x = x;
        this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      //ellipseMode(CENTER);
     // fill("blue");
      //ellipse(pos.x, pos.y, this.radius, this.radius);
        //imageMode(CENTER);
        image(this.image, 50,400, 250,400)
    }

    
    
}