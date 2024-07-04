// sum of numbers from 1 to 10

let sum = 0;
for ( let number = 0; number <= 10; number++ ) {
  sum += number;
  console.log( number );
}

console.log( "=======" );
console.log( sum );
console.log( "=======" );

// Example of a custom iterator function
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let rangedArray = [...range(1, 5)];
console.log(rangedArray); // Outputs: [1, 2, 3, 4, 5]

const numbers = [...range(1,10)];
console.log(numbers); 

let sum1 = numbers.reduce( (sum1, i) => sum1 + i, 0);
console.log(sum1);