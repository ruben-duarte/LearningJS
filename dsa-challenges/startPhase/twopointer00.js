// remove duplicates

// Remove duplicates from sorted array ascending, in place

// Input: [1,1,2]  output: [1,2]

// variable to count numbers, iterate over array 
//   if next is equal prev delete next and check in the same position again
      // return array and count


function removeDuplicates(array) {
  let count = 1;
  let j = 1;
  for ( let index = 0; index < array.length - 1; index++ ) {
    if ( array[index] !== array[j] ) {
      count++ ;
    } 
    j++;
  }
  return count;
}

let example1 = [0,1,2];
let example2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(example1));