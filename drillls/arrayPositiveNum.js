// function that receives an array and returns an array of positive integers

let numbers = [1, 2, 3, 4, 5, -3, -30,-10];

function positiveInteger(array) {
  let positiveNums = [];
  for ( let i = 0; i < array.length; i++) {
    if ( array[i] >= 0 ) {
      positiveNums.push(array[i]);
    }
  }
  return positiveNums;
};

let test = positiveInteger(numbers);
console.log(test);