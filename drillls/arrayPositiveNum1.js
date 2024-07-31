//input: array  output: only positive integers
function positiveNum(array) {
  let positiveNumbers = [];
  for ( const number of array ){
    if( number > 0 ) {
      positiveNumbers.push(number);
    }
  }
  return positiveNumbers;
}

let example = [1,3,4,-5,7,-8];
console.log(positiveNum(example));