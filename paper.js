class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.x=x
        this.y=y
        this.r=r
        this.image= loadImage("crumpled paper.jpg");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
   imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
    }
}