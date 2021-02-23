class Arrow{
    constructor(x,y,r){
      var Arrow_Options={
        isStatic:false,
        restitution :0,
        friction :1,
        density: 1.2
      } 
       this.body = Bodies.circle(x,y,r,Arrow_Options);
       this.r = r;
       this.image = loadImage("Images/Arrow.png");
       World.add(world,this.body);
    }
    display(){
        var Pos=this.body.position;	
		push();
		translate(Pos.x, Pos.y);
		rotate(95);
		imageMode(CENTER);
		image(this.image, 0,0,150,150);
		pop();
    }
}