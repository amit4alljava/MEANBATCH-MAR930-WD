function Enemy(){
	this.x = width;
	this.y = gameConstants.FLOOR;
	this.w = this.h = 100;
	this.img = enemyImg;
	this.speed = -4;
	this.drawEnemy=function(){
		image(this.img, this.x, this.y,this.w,this.h);
	}
	this.move = function(){
		this.x +=this.speed;
		if(this.x<=0){
			this.x = width;
		}
	}
}