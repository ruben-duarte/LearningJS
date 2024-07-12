// Remove duplicates from sorted array, in place

// Input: [1,1,2]  output: [1,2]

// variable to count numbers, iterate over array 
//   if next is equal prev delete next and check in the same position again
      // return array and count

function removeDuplicates(array) {
  let count = 0;
  for ( let index = 0; index < array.length - 1; index ++ ) {
    if ( array[index + 1] === array[index] ) {
      array.splice( index + 1, 1 ); // check again in the same position
      if ( index === 0 ) index = 0;
      index = index - 1;
      count++;
  }
  }
  return `${count}, [${array}]`;
}

let example1 = [1,1,2];
let example2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(example2));
