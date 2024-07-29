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
let coordinateX = 50;
let speedX = 30;
let coordinateY = 40;
let speedY = 5;

function update() {
  coordinateX += speedX;
  coordinateY += speedY;
  box.fillText('H', coordinateX, coordinateY)
  if (coordinateX > 500) {
    coordinateX = 50;
    coordinateY = 50;
  }
}

setInterval(update, 500);


