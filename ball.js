class ball{
constructor (x,y,r){
var ball_opt={
    isStatic:false,
    restitution:0.5,
    friction:0.3,
    density:60
  }


this.body=Bodies.circle(x,y,r,ball_opt)
this.body.position.x=x;
this.body.position.y=y;
this.radius=r
this.image= loadImage("paper.png")
World.add(world,this.body)

}



display(){
    var ballpos=(this.body.position) 
    push()
    translate(ballpos.x,ballpos.y)
    
    image(this.image,0,0,this.radius,this.radius)
   pop()

    }
    
    
}













