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
const player = {
  coordinateX : 50,
  speedX : 30,
  coordinateY : 40,
  speedY : 5,
  symbol :'H'
};

//enemy
const enemy = {
 enemy_coordinateX : 150,
 enemy_speedX : 10,
 enemy_coordinateY : 340,
 enemy_speedY : 15,
 enemy_symbol : 'E'
};

function updatePlayer() {
 //player
 player.coordinateX += player.speedX;
 player.coordinateY += player.speedY;
 box.fillText(player.symbol, player.coordinateX, player.coordinateY)
 if ( player.oordinateX < 0 || player.coordinateX > WIDTH ) {
   console.log(message);
   player.speedX = -player.speedX;
 } else if ( player.coordinateY < 0 ||player.coordinateY > HEIGHT ) {
   console.log(message);
   player.speedY = -player.speedY;
 } 
}

function updateEnemy() {
 //enemy
 enemy.enemy_coordinateX += enemy.enemy_speedX;
 enemy.enemy_coordinateY += enemy.enemy_speedY;
 box.fillText(enemy.enemy_symbol, enemy.enemy_coordinateX, enemy.enemy_coordinateY)
 if ( enemy.enemy_coordinateX < 0 || enemy.enemy_coordinateX > WIDTH ) {
   console.log(message);
   enemy.enemy_speedX = -enemy.enemy_speedX;
 } else if ( enemy.enemy_coordinateY < 0 || enemy.enemy_coordinateY > HEIGHT ) {
   console.log(message);
   enemy.enemy_speedY = -enemy.enemy_speedY;
 } 
}

function update() {
  updatePlayer();
  updateEnemy();
 
}

setInterval(update, 40); // 40 ms equals 25 frames per second


