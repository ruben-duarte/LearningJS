let box = document.getElementById("box").getContext("2d");
//Link for colors https://coolors.co/03b5aa-037971-023436-00bfb3-049a8f
box.font = '30px Arial';

let HEIGHT = 500;
let WIDTH = 500;
let message = "Bouncing"
let timeWhenGameStarted = Date.now(); // time in ms

let frameCount = 0;
let score = 0;

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
  color : '#023436',
  attackSpeed : 10,
};

let enemyList = {};
let upgradeList = {};
let bulletList = {};

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
    color: '#AAAE7F'
  };
  enemyList[id] = enemy3;
}

Upgrade = function (id, coordinateX, coordinateY, speedX, speedY, width, height, category,color) {
  const upgradeEntity = {
    coordinateX : coordinateX,
    speedX : speedX,
    coordinateY : coordinateY,
    speedY : speedY,
    symbol :'✈',
    id : id,
    width: width,
    height: height,
    color: color,
    category: category,
  };
  upgradeList[id] = upgradeEntity;
}

randomGenerateUpgrade = function() {
  let x = Math.random()*WIDTH;
  let y = Math.random()*HEIGHT;
  let height = 12;
  let width = 12;
  let id = Math.random();
  let speedx = 0;
  let speedy = 0;

  if (Math.random() < 0.5){
     category = 'score';
     color = 'orange'
  } else {
     category = 'attackSpeed';
     color = '#52D1DC'
  }

  Upgrade(id,x,y,speedx,speedy,width,height, category, color);
}

Bullet = function (id, coordinateX, coordinateY, speedX, speedY, width, height) {
  const bulletEntity = {
    coordinateX : coordinateX,
    speedX : speedX,
    coordinateY : coordinateY,
    speedY : speedY,
    symbol :'✈',
    id : id,
    width: width,
    height: height,
    color: 'white',
    timer: 0,
  };
  bulletList[id] = bulletEntity;
}

randomGenerateBullet = function() {
  let x = player.coordinateX;
  let y = player.coordinateY;
  let height = 4;
  let width = 4;
  let id = Math.random();

  let angle = Math.random()*360;
  let speedx = Math.cos(angle/180*Math.PI)*5;
  let speedy = Math.sin(angle/180*Math.PI)*5;

  Bullet(id,x,y,speedx,speedy,width,height);
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
  let mouseX = mouse.clientX - document.getElementById('box').getBoundingClientRect().left;
  let mouseY = mouse.clientY - document.getElementById('box').getBoundingClientRect().top;

  if(mouseX < player.width/2)
    mouseX = player.width/2;
  if(mouseX > WIDTH - player.width/2)
    mouseX = WIDTH - player.width/2;
  if(mouseY < player.height/2)
    mouseY = player.height/2;
  if(mouseY > HEIGHT - player.height/2)
    mouseY = HEIGHT - player.width/2;

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
  frameCount++;
  score++;

  if(frameCount % 100 === 0 ) //after 4 sec
    randomGenerateEnemy();
 
  if(frameCount % 75 === 0 ) //after 3 sec
    randomGenerateUpgrade();

  if(frameCount % Math.round(225/player.attackSpeed) === 0 ) //after 1 sec
    randomGenerateBullet();

  for (let key in bulletList) {
    updateEntity(bulletList[key]);

    let toRemove = false;
    bulletList[key].timer++;
    if (bulletList[key].timer>80){
      toRemove = true;
    }

    for (let key2 in enemyList) {
      let isColliding = testCollisionEntity(bulletList[key], enemyList[key2]);
      if ( isColliding ) {
        delete bulletList[key];
        delete enemyList[key2];
        break;
      }
    }
    if (toRemove) {
      delete bulletList[key];
    }
  }

  for ( let key in upgradeList) {
    updateEntity(upgradeList[key]);
    let isColliding = testCollisionEntity(player, upgradeList[key]);
    if (isColliding) {
     if(upgradeList[key].category === 'score')
      score += 1000;
     if(upgradeList[key].category === 'attackSpeed')
      player.attackSpeed += 3;
     delete upgradeList[key];
    }
  }

  for ( let enemy in enemyList ) {
    updateEntity(enemyList[enemy]);

    let isColliding = testCollisionEntity(player, enemyList[enemy]);
    if (isColliding) {
      //console.log('Colliding');
      player.energy -= 1;
     
    }

  }

  if ( player.energy <= 0 ) {
    let timeSurvived = Date.now() - timeWhenGameStarted;
    console.log(`game over you survived ${timeSurvived} ms`);
    
    startNewGame();
  }
  drawEntity(player);
  box.fillText(player.energy + ' energy',0,30);
  box.fillText('Score > ' + score,200,30);
}

startNewGame = function(){
  player.energy = 10;
  timeWhenGameStarted = Date.now();
  frameCount = 0;
  score = 0;
  enemyList = {};
  upgradeList = {};
  bulletList = {};
  randomGenerateEnemy();
  randomGenerateEnemy();
  randomGenerateEnemy();
  
  }

//Enemy('E1',150, 340, 10, 15, 10, 20);
//Enemy('E2',200, 100, 23, 10, 50, 30);
//Enemy('E3',250, 340, 10, 7, 40, 10);

randomGenerateEnemy = function() {
  let x = Math.random()*WIDTH;
  let y = Math.random()*HEIGHT;
  let height = 12 + Math.random()*20; //12 to 32
  let width = 12 + Math.random()*20;
  let id = Math.random();
  let speedx = 7 + Math.random()*8;
  let speedy = 7 + Math.random()*8;

  Enemy(id,x,y,speedx,speedy,width,height);
}

startNewGame();

setInterval(update, 40); // 40 ms equals 25 frames per second
