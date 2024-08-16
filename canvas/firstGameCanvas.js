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
  symbol :'S'
};

let enemyList = {};

//enemy
function Enemy(id, coordinateX, coordinateY, speedX, speedY) {
  const enemy3 = {
    coordinateX : coordinateX,
    speedX : speedX,
    coordinateY : coordinateY,
    speedY : speedY,
    symbol :'*',
    id : id

  };
  enemyList[id] = enemy3;
}

Enemy('E1',150, 340, 10, 15)
Enemy('E2',230, 10, 23, 10)
Enemy('E3',250, 340, 10, 7)

//player : point (coordinateX,coordinateY);
//enemy : point (coordinateX,coordinateY);

function getDistanceBetweenEntity(entity1, entity2) {
  let deltaX = entity1.coordinateX - entity2.coordinateX;
  let deltaY = entity1.coordinateY - entity2.coordinateY;
  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

function testCollisionEntity(entity1, entity2) {
  let distance = getDistanceBetweenEntity(entity1, entity2);
  return distance < 30;
}

setInterval(update, 40); // 40 ms equals 25 frames per second

function updateEntity(gameCharacter){
  gameCharacter.coordinateX += gameCharacter.speedX;
  gameCharacter.coordinateY += gameCharacter.speedY;
  box.fillText(gameCharacter.symbol, gameCharacter.coordinateX, gameCharacter.coordinateY)

  if ( gameCharacter.coordinateX < 0 || gameCharacter.coordinateX > WIDTH ) {
   // console.log(message);
    gameCharacter.speedX = -gameCharacter.speedX;
  } else if ( gameCharacter.coordinateY < 0 || gameCharacter.coordinateY > HEIGHT ) {
   // console.log(message);
    gameCharacter.speedY = -gameCharacter.speedY;
  } 
 }

function update() {
  box.clearRect(0,0,WIDTH,HEIGHT);
  
  for ( let enemy in enemyList ) {
    updateEntity(enemyList[enemy]);

    let isColliding = testCollisionEntity(player, enemyList[enemy]);
    if (isColliding) {
      console.log('Colliding');
    }

  }

  updateEntity(player);
 
}




