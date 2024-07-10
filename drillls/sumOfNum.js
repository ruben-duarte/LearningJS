// sum of odd numbers greater than 10 less or equal than 30

let sum = 0;
for ( let number = 11 ; number <= 30 ; number += 2) {
  sum += number;
  console.log( number );
}

console.log( `sum: ${sum}` );