let box = document.getElementById("box").getContext("2d");
//box.fillText('Hello',50,50);

// modify settings
//box.font = '60px Arial';
//box.fillStyle = 'blue';
//box.globalAlpha = 0.5;

// Draw
//box.fillText('Hola',80,60);
//box.fillRect(60,60,100,100);
//box.clearRect(75,75,100,100);

box.font = '30px Arial';

let HEIGHT = 500;
let WIDTH = 500;
let message = "Bouncing"

//player
let coordinateX = 50;
let speedX = 30;
let coordinateY = 40;
let speedY = 5;
let symbol = 'H';

//enemy
let enemy_coordinateX = 150;
let enemy_speedX = 10;
let enemy_coordinateY = 340;
let enemy_speedY = 15;
let enemy_symbol = 'E';


function update() {
  //player
  coordinateX += speedX;
  coordinateY += speedY;
  box.fillText(symbol, coordinateX, coordinateY)
  if ( coordinateX < 0 || coordinateX > WIDTH ) {
    console.log(message);
    speedX = -speedX;
  } else if ( coordinateY < 0 || coordinateY > HEIGHT ) {
    console.log(message);
    speedY = -speedY;
  } 

  //enemy
  enemy_coordinateX += enemy_speedX;
  enemy_coordinateY += enemy_speedY;
  box.fillText(enemy_symbol, enemy_coordinateX, enemy_coordinateY)
  if ( enemy_coordinateX < 0 || enemy_coordinateX > WIDTH ) {
    console.log(message);
    enemy_speedX = -enemy_speedX;
  } else if ( enemy_coordinateY < 0 || enemy_coordinateY > HEIGHT ) {
    console.log(message);
    enemy_speedY = -enemy_speedY;
  } 
}

setInterval(update, 40); // 40 ms equals 25 frames per second


