class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
        this.x = x
        this.y = y
        this.r = r
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}