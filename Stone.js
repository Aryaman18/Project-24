class Stone{
	constructor(x,y){
	var options={
		'restitution':0.8,
		'friction':9,
		'density':12
	}
	
	// assign options to the rubber ball
		this.body=Bodies.rectangle(x ,y, 45, 45, options);
		this.width=this.width;
		this.height=this.height;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos = this.body.position;
			var angle = this.body.angle;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("yellow");
			rect(0,0,45,45)
			pop();
	}

}