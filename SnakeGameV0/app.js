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

const setGame = () => {
  snake = ['00', '01', '02', '03'];
  score = snake.length;
  direction = 'ArrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
};

const startGame = () => {
  setGame();
};

startButton.addEventListener('click', startGame);