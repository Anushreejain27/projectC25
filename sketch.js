
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustI=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  var ballo={
  restitution:0.3,
  friction:1.2,
  isStatic:true,
  density:1.2




  }




   dustbin=createSprite(640,540)
  dustbin.addImage(dustI)
     


  
ball1=new ball(30,670,100,100)
  

ground=new line(400,690,800,20)
 line1=new line(520,550,20,200)
 line2=new line(750,550,20,200)
 line3=new line(640,680,230,20)



   
	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:400,y:-6700});

	}
}








function draw() {
  
  background("pink");

//ellipseMode(RADIUS)
//fill("red")
//ellipse(ball1.position.x,ball1.position.y,15,15)
push()
text(mouseX+","+mouseY,mouseX,mouseY);
textSize(30)
fill("yellow")
text("press the up arrow key to throw the ball in the dustbin",25,100);
pop()




ground.display()
line1.display()
line2.display()  
line3.display()
ball1.display()
keyPressed()
  drawSprites();
 
}








