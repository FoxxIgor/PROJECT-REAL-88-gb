var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballWidth = 100;
var ballHeight = 90;
var backgroundImage ="aa.jpg";
var ballImg = "golfee.png";
var wallImg = "Wall_Teleporter.webp";
var ballX = 400;
var ballY = 300;

function load(){
    background = new Image();
    background.onload=uploadBackground;
    background.src=backgroundImage;
    
    ball = new Image();
    ball.onload=uploadAll;
    ball.src=ballImg;
   
    console.log(ballX, ballY);
    wall = new Image();
    wall.onload=uploadAll;
    wall.src=wallImg;
}


function uploadBackground(){
    ctx.drawImage(background, 0, 0, canvas.width,  canvas.height);
    
}
function uploadAll(){
    ctx.drawImage(wall, 700, 170, 100, 60);
    ctx.drawImage(ball, ballX, ballY, ballWidth, ballHeight);
    console.log(ballX, ballY);
    
}


window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress==38){
        up();
    };
    if(keypress==40){
        down();
    };
    if(keypress==39){
        right();
    };
    if(keypress==37){
        left();
    };
}

function up(){
    if(ballY>=20){
        ballY=ballY-10;
        uploadBackground();
        uploadAll();
        verify()
    };
}
function down(){
    if(ballY<=400){
        ballY=ballY+10;
        uploadBackground();
        uploadAll();
        verify()
    }
}
function right(){
    if(ballX<=700){
        ballX=ballX+10;
        uploadBackground();
        uploadAll();
        verify();
    };
}
function left(){
    if(ballX>=20){
        ballX=ballX-10;
        uploadBackground();
        uploadAll();
        verify();
        
    }
}

function verify(){
    if(ballY>80 && ballY<230 && ballX>=600){
        console.log("Congratulations!");
        document.getElementById("congratulations").innerHTML="You found it!";
    }
}



