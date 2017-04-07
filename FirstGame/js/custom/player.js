function Player(){
	this.x = 30;
	this.y = gameConstants.FLOOR;
	this.h=this.w = 100;
	this.img = playerImg;
	this.gravity=0.5;
	this.force = 0;
	this.isJumpStart = false;
	this.drawPlayer= function(){
		image(this.img,this.x, this.y,this.w, this.h);
	}
	this.jump=function(){
		if(!this.isJumpStart){
		this.force = -14;
		this.y = this.y + this.force;
		this.isJumpStart = true;
		}
	}
	this.fall=function(){
		if(this.y<gameConstants.FLOOR){
			this.force = this.force + this.gravity;
			this.y = this.y + this.force;
		}
		if(this.y>=gameConstants.FLOOR){
			this.isJumpStart = false;
		}
	}
	
}