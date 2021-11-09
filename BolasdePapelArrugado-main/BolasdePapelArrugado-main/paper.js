class paper{
    constructor(x,y,r){
        var options ={
            restitution:0.3,
            friction:0.1,
            density:1.1,
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("paper.png")
        this.body=Bodies.rectangle(this.x, this.y, this.r, this.r, options)
        World.add(world,this.body)
    }
    display(){
        var Pposition = this.body.position
        push();
        translate(Pposition.x, Pposition.y);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}