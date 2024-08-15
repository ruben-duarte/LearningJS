let box = document.getElementById("box").getContext("2d");

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
 coordinateX : 150,
 speedX : 10,
 coordinateY : 340,
 speedY : 15,
 symbol : 'E'
};

const player2 = {
  coordinateX : 230,
  speedX : 20,
  coordinateY : 10,
  speedY : 5,
  symbol :'F'
};

setInterval(update, 40); // 40 ms equals 25 frames per second

function updateEntity(gameCharacter){
  gameCharacter.coordinateX += gameCharacter.speedX;
  gameCharacter.coordinateY += gameCharacter.speedY;
  box.fillText(gameCharacter.symbol, gameCharacter.coordinateX, gameCharacter.coordinateY)

  if ( gameCharacter.coordinateX < 0 || gameCharacter.coordinateX > WIDTH ) {
    console.log(message);
    gameCharacter.speedX = -gameCharacter.speedX;
  } else if ( gameCharacter.coordinateY < 0 || gameCharacter.coordinateY > HEIGHT ) {
    console.log(message);
    gameCharacter.speedY = -gameCharacter.speedY;
  } 
 }

function update() {
  updateEntity(player);
  updateEntity(enemy);
  updateEntity(player2);
 
}




