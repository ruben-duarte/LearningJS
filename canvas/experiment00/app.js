let myCanva = document.getElementById("myCanvas").getContext("2d");

// modify settings
myCanva.font = '40px Arial';
myCanva.fillStyle = '#0FFF';
myCanva.globalAlpha = 0.5;

let x = 50;
let speedInX = 30;
let y = 40;
let speedInY = 28;

myCanva.fillText('hola', x,y);
myCanva.fillRect(x,x,100,100);
myCanva.clearRect(x + 25,x + 25,100,100);

function update(){
  x += speedInX;
  y += speedInY;
  myCanva.fillText('mundo',x,y)
  if ( y > 400 ) {
    console.log("out of bounds");
    x = 50;
    y -= 300;
    myCanva.fillText('mundo',x,y)
  }
}

setInterval(update, 500);

