var bg;
var bgSound;
var playerImg;
var enemyImg ;
function loadImages(){
	bg = loadGif("assets/images/bg.gif");
	playerImg = loadGif("assets/images/mario.gif");
	enemyImg = loadGif("assets/images/enemy.gif");
	
}
function loadSounds(){
	bgSound = loadSound("assets/sounds/background.mp3");
}