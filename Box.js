class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.4,
          'friction':0.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
    }

    score(){
      if (this.body.speed > 3){
        score++;
      }
    }

    display() {
      if(this.body.speed < 3) {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();      }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
        }
    }
}