var x = 10;	
var y = 100;	
var speed = 1;
var ySpeed = 1;	
var song;
var amp;
var balls=[];
var mic;
function prepareBalls(){
	//var ball = new Ball();
	//balls.push(ball);
	for(var i = 1 ;i<=50; i++){
	balls.push(new Ball());
	}
}
var antImage ;
var bgImage;
function loadImages(){
	antImage = loadGif("assets/images/antwalk.gif");
	bgImage = loadGif("assets/images/bg.gif");
}

function setup(){
	loadImages();
	//mic = new p5.AudioIn();
	prepareBalls();
	//mic.start();
	//amp= new p5.Amplitude();
	//amp.setInput(mic);
	song = loadSound("assets/sounds/E.mp3",done);
	createCanvas(500,500);
	
	//console.log("Setup I Will Call Only Once....")
}
function done(){
	song.play();
	amp = new p5.Amplitude();
}

function drawManyBalls(){
	
	for(var i = 0; i<balls.length ; i++){
		fill('green');
		balls[i].drawBall(amp,antImage);
		balls[i].movement();
	}
}

function drawing(){
	//background('white');
	background(bgImage);
	if(amp){
		fill('yellow');
		ellipse(x,y,150,150);
//		ellipse(x,y,350*amp.getLevel(),350*amp.getLevel());
		//console.log("Amp Level is ",amp.getLevel());
	}
	else{
		fill('red');
	ellipse(x,y,50,50);
	}
}	
function draw(){
	
	drawing();
	movement();
	drawManyBalls();
	console.log(frameCount);
	//rect(x,100,50,50);
	
	//ellipse(200,200,50,50);
	//console.log("Draw I Will Call Again and Again ")
}
	
function movement(){
	if(x>=width){
	speed = - 1;
	}
	else
	if(x<=0){
		speed = 1;
	}
	if(y>=height){
		ySpeed = -1;
	}
	if(y<=0){
		ySpeed = 1;
	}
	x = x + speed;
	y = y + ySpeed;
}
	