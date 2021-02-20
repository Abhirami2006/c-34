class Ball{
    constructor(x,y,r)
    {
        var options = {
            friction:1,
            restitution:0.4,
            density:1,
            isStatic :false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
    }
