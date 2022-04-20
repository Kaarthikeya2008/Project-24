class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restituion:0,
            friction:1,
            density:1
        }
    this.x=x
    this.y=y
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body)
}
display(){
    dustbinPosition=this.body.position;
    

    push ()
    translate (dustbinPosition.x,dustbinPosition.y);
    rectMode(CENTER)
    strokeWeight(3)
    fill (0,0,0);
    pop ()
}
}