var speedValue = 1;
function Ball(x,y){
	this.x = random(500) // to define member variable 
	this.y = random(500);
	this.h  = this.w = 50;
	this.speed = this.ySpeed = 1;
	 
	this.drawBall=function(amp,antImage){
		if(amp){
		image(antImage,this.x, this.y,this.w, this.h);
			//image(antImage,this.x, this.y,350*amp.getLevel(), 350*amp.getLevel());	//fill(random(100),random(150),random(100));	
		//ellipse(this.x , this.y ,350*amp.getLevel(), 350*amp.getLevel());	
		}else{
			image(antImage,this.x, this.y,this.w, this.h);
		//ellipse(this.x , this.y , this.w, this.h);
		}
	}
	this.movement=function(){
	if(this.x>=width){
	this.speed = random(-speedValue);
	}
	else
	if(this.x<=0){
		this.speed = random(speedValue);
	}
	if(this.y>=height){
		this.ySpeed = random(-speedValue);
	}
	if(this.y<=0){
		this.ySpeed = random(speedValue);
	}
	this.x = this.x + this.speed;
	this.y = this.y + this.ySpeed;
}
	
}