class Dustbin{
    constructor(x,y) {
        
      this.x=x; 
      this.y=y;
      this.dustbinWidth=200;
      this.dustbinHeight=100;
      this.wallThickness=20;
      this.angle=0;


        this.body = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight);
        World.add(world, this.body);
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