class Tree{
	constructor(x,y){

		this.x = x;
		this.y = y;
		
		this.image= loadImage("Images/Tree.png");
		this.body = Bodies.rectangle(this.x, this.y, 450, 10, {isStatic:true});
		World.add(world, this.body);

	}
	
	display(){
		var pos=this.body.position;
		push();
		translate(pos.x, pos.y+10);
		imageMode(CENTER);
		image(this.image, 0,-300,600, 600);
		pop();
			
	}

}