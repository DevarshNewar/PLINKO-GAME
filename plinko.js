class Plinko {

     constructor(x, y, radius) {

          var options = {

               isStatic: true


          }

          this.body = Bodies.circle(x, y, radius, options);
          this.radius = 17;
          World.add(world, this.body);

     }


     display() {

          var pos = this.body.position;
          var angle = this.body.angle;
     
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          ellipseMode(CENTER);
          fill(255);
          ellipse(pos.x, pos.y, this.radius);
          pop();

     }


}