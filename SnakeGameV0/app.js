// Htrml elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('score-board');
const startButton = document.getElementById('start');
const gameOver = document.getElementById('game-over');

// Game config settings
const boardSize = 10;
const gameSpeed = 80;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2
};
const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1
};

// Game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const drawSnake = () => {
  snake.forEach( square => drawSquare(square, 'snakeSquare'));
};


// square indicates position 
const drawSquare = (square, type) => {
  const [row, column] = square.split('');
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
  squareElement.setAttribute('class', `square ${type}`);

  if ( type === 'emptySquare') {
    emptySquares.push(square);
  } else {
    if ( emptySquares.indexOf(square) !== -1 ) {
      emptySquares.splice(emptySquares.indexOf(square), 1);
    }
  }
};

const createBoard = () => {
  boardSquares.forEach( ( row, rowIndex ) => {
    row.forEach( ( column, columnIndex)  => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement('div');
      squareElement.setAttribute('class', 'square emptySquare');
      squareElement.setAttribute('id', squareValue);
      board.appendChild(squareElement);
      emptySquares.push(squareValue);
    });
  });
};

const setGame = () => {
  snake = ['00', '01', '02', '03'];
  score = snake.length;
  direction = 'ArrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
  console.log(boardSquares);
  //console.log(Array.from(Array(10))); test
  board.innerHTML = '';
  emptySquares = [];
  createBoard();
};

const startGame = () => {
  setGame();
  gameOver.style.display = 'none';
  startButton.disabled = true;
  drawSnake();

};

startButton.addEventListener('click', startGame);