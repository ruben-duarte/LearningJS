// find the largest element in an array

// define the first element as max
//iterate over array and compare
  // if element is greater than the max
      // element is the new max

function largestElement(array) {
  let max = array[0];
  for ( let i = 1; i < array.length - 1; i++ ) {
    if ( array[i] > max ) {
      max = array[i];
    } 
  }
  return max;
}

let example1 = [1,3,5,675,80,5,67];
test = largestElement(example1);
console.log(test);