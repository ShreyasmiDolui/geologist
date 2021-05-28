class Hammer {
    constructor(x, y) {
      var options = {
        'density':4.0,
        'friction': 1.0,
        'restitution':0.0
      };
      this.body = Bodies.rectangle(x, y, 15, 55, options);
      this.width = 15;
      this.height = 55;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('gray')
      fill('gray')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };