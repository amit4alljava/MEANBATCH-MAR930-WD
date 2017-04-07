
function preload(){
	loadImages();
	loadSounds();
}
var playerObject ;
var enemyObject;
function setup(){
	console.log("Width ",gameConstants.WIDTH);
	console.log("HEIGHT ",gameConstants.HEIGHT);
	createCanvas(gameConstants.WIDTH, gameConstants.HEIGHT);
	bgSound.loop();
	playerObject = new Player();
	enemyObject = new Enemy();
	
}

function isCollide(){
	var xDistance = Math.abs(playerObject.x - enemyObject.x);
	var yDistance = Math.abs(playerObject.y - enemyObject.y);
	
	return xDistance<=(playerObject.w-50) && yDistance<=(playerObject.h-50);
}

function keyPressed(){
	if(keyCode ==gameConstants.SPACE_KEY){
		playerObject.jump();
	}
	//console.log("Key code ",keyCode);
}
function gameStatus(){
	if(isCollide())
	{
		gameOver();
	}
}
function gameOver(){
	fill("black");
	textSize(40);
	text("Game Over",200,200);
	noLoop();
}
function draw(){
	background(bg);
	playerObject.drawPlayer();
	playerObject.fall();
	enemyObject.drawEnemy();
	enemyObject.move();
	gameStatus();
}