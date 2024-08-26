let box = document.getElementById("box").getContext("2d");
//Link for colors https://coolors.co/03b5aa-037971-023436-00bfb3-049a8f
box.font = '30px Arial';

let HEIGHT = 500;
let WIDTH = 500;
let message = "Bouncing"
let timeWhenGameStarted = Date.now(); // time in ms

//player
const player = {
  coordinateX : 50,
  speedX : 30,
  coordinateY : 40,
  speedY : 5,
  symbol :'O',
  energy : 10,
  width : 20,
  height : 20,
  color : '#023436'
};

let enemyList = {};

//enemy
Enemy = function (id, coordinateX, coordinateY, speedX, speedY, width, height) {
  const enemy3 = {
    coordinateX : coordinateX,
    speedX : speedX,
    coordinateY : coordinateY,
    speedY : speedY,
    symbol :'✈',
    id : id,
    width: width,
    height: height,
    color: '#037971'
  };
  enemyList[id] = enemy3;
}

//player : point (coordinateX,coordinateY);
//enemy : point (coordinateX,coordinateY);

getDistanceBetweenEntity = function (entity1, entity2) {
  let deltaX = entity1.coordinateX - entity2.coordinateX;
  let deltaY = entity1.coordinateY - entity2.coordinateY;
  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}

testCollisionEntity = function (entity1, entity2) {
  let rect1 = {
    coordinateX : entity1.coordinateX - entity1.width/2,
    coordinateY : entity1.coordinateY - entity1.height/2,
    width : entity1.width,
    height : entity1.height
  }
  let rect2 = {
    coordinateX : entity2.coordinateX - entity2.width/2,
    coordinateY : entity2.coordinateY - entity2.height/2,
    width : entity2.width,
    height : entity2.height
  }

  return testCollisionRectangles(rect1, rect2)
}

document.onmousemove = function(mouse) {
  let mouseX = mouse.clientX;
  let mouseY = mouse.clientY;
  player.coordinateX = mouseX;
  player.coordinateY = mouseY;
}

updateEntity = function (gameCharacter){
  updateEntityPosition(gameCharacter);
  drawEntity(gameCharacter);
 }

updateEntityPosition = function (gameCharacter) {
  gameCharacter.coordinateX += gameCharacter.speedX;
  gameCharacter.coordinateY += gameCharacter.speedY;
 

  if ( gameCharacter.coordinateX < 0 || gameCharacter.coordinateX > WIDTH ) {
   // console.log(message);
    gameCharacter.speedX = -gameCharacter.speedX;
  } else if ( gameCharacter.coordinateY < 0 || gameCharacter.coordinateY > HEIGHT ) {
   // console.log(message);
    gameCharacter.speedY = -gameCharacter.speedY;
  } 
 }

testCollisionRectangles = function(rect1, rect2) {
  return rect1.coordinateX <= rect2.coordinateX + rect2.width
      && rect2.coordinateX <= rect1.coordinateX + rect1.width
      && rect1.coordinateY <= rect2.coordinateY + rect2.height
      && rect2.coordinateY <= rect1.coordinateY + rect1.height
}

drawEntity = function(gameCharacter){
  box.save();
  box.fillStyle = gameCharacter.color;
  box.fillRect(gameCharacter.coordinateX - gameCharacter.width/2, gameCharacter.coordinateY - gameCharacter.height/2, gameCharacter.width, gameCharacter.height);
  box.restore();
 }

update = function () {
  box.clearRect(0,0,WIDTH,HEIGHT);
  
  for ( let enemy in enemyList ) {
    updateEntity(enemyList[enemy]);

    let isColliding = testCollisionEntity(player, enemyList[enemy]);
    if (isColliding) {
      //console.log('Colliding');
      player.energy -= 1;
      if ( player.energy <= 0 ) {
        let timeSurvived = Date.now() - timeWhenGameStarted;
        console.log(`game over you survived ${timeSurvived} ms`);
        timeWhenGameStarted = Date.now();
        player.energy = 10;
      }
    }

  }

  drawEntity(player);
  box.fillText(player.energy + ' energy level',0,30);

}

Enemy('E1',150, 340, 10, 15, 10, 20);
Enemy('E2',200, 100, 23, 10, 50, 30);
Enemy('E3',250, 340, 10, 7, 40, 10);

setInterval(update, 40); // 40 ms equals 25 frames per second
