

window.onload = function() {
  function interval(){
    setInterval(updateCanvas,100);
  }

//call interval start function
  document.getElementById("start-button").onclick = function(){
    interval();
    startGame();
  };

  function startGame() {
    createGameBoard();
    drawCar();
  }
  var theCanvas = document.getElementById("game-board");
    var ctx = theCanvas.getContext("2d");

  function createGameBoard(){
    // console.log("Creating game")
  

    //Grass
    ctx.fillStyle = "green";
    //has four parameters 
    ctx.fillRect(0,0,500, 600);
    
    //Street
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 0, 400, 600);

    //Street lines
    ctx.fillStyle= "white";
    ctx.fillRect(60, 0, 10, 600);
//

    ctx.fillRect(430, 0,10,600);


    //dashed middle line
    ctx.lineWidth = "10";
    //        height of the line
    //

  ctx.setLineDash([40, 20]);
  ctx.strokeStyle = "white";
  //
  //
  //

ctx.moveTo(245, 600);
ctx.lineTo(245, 0);
ctx.stroke();

// score

ctx.font = "50px Helvetica";
ctx.fillStyle ="pink";

//                  score  x, y
ctx.fillText("Score: "+ 0, 0, 50);
 }

var carImage = new Image();
carImage.src = "images/car.png";

var car = {
  width: 50,
  height: 120,
// middle of canvas 220 = (245-(50/2))
  x: 220,
  //canvas 600 px car 80 = 520
  y: 520,
  moveLeft: function(){
// console.log("x before: ", this.x)
if(this.x > 60){
this.x -=10;
}

},

moveRight: function(){
  if(this.x < 400){
    this.x +=10;
  }
}

};

function drawCar(){
ctx.drawImage(carImage, car.x, car.y, car.width, car.width);
}

var myObstacles = [];
var board = {
  score: 0,
  frames: 0
};


this.document.onkeydown = function (e){
  if(e.keyCode ===37){
    car.moveLeft();
  }else if(e.keyCode ===39){
    car.moveRight();
  }else{
    console.log("nothing");
  }
  createGameBoard();
    drawCar();
  };
for (var i = 0; i< obstacle.length; i++){
myObstacle[i].createObstacle();
myObstacle[i].y =+10;

}

function Obstacle(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.createObstacle = function(){
ctx.fillStyle = "yellow";
ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
  this.left = function(){
    return this.x;
  }
  this.right = function(){
    return this.x + this.width;
  }
  this.top = function(){
    return this.y;
  }
  this.bottom = function (){
    return this.y + this.height;
  }
}

function updateCanvas(){
ctx.clearRect(0,0,500,600);
createGameBoard();
drawCar();
board.frames ++;

if (board.frames % 60 ===1){
obstacleX =60 + Math.floor(Math.random()*300);
obstacleY = 0;
obstacleWidth = 100;
obstacleHeight = 20;
myObstacles.push(new Obstacle(obstacleX,obstacleY, obstacleWidth, obstacleHeight));
}
for (var i =0; i < myObstacles.length; i++){
  console.log(myObstacles);
  myObstacles[i].createObstacle();
  myObstacles[i].y += 10;

  if(myObstacles[i].checkCollision(myObstacles[i]) ===true){

if (myObstacles[i].y >= 600) {
myObstacles.splice(i, 1);
board.score++;

       }
    }
  }