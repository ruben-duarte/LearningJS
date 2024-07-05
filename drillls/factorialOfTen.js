// factorial
let factorial = 1;

for ( let number = 1; number < 11; number++ ) {
  factorial *= number;
}

console.log( `factorial of ten : ${factorial}`)
console.log( `====|======` );

function factorial1(n) {
  if ( n < 0 ) return;
  if ( n < 2 ) return 1;
  return n * factorial1( n - 1 );
};

let factorialOf = factorial1(10);
console.log( factorialOf );
