// given an integer array nums, return true if any value appears at least twice in the array and false if every element is distinct

let nums = [1,3,2,4,3,3];

function containDuplicates(array){
  let uniqueValues = new Set(array);
  let uniqueArray = Array.from(uniqueValues);
  let count = 0;
  if ( uniqueArray.length !== array.length ) {
    return false
  } else {
    for ( let index = 0; index < array.length; index++) {
      if( uniqueArray.includes(array[index] )) {
        count += 1;
      }
    }
  }
  return !(array.length === count)
}

console.log(containDuplicates(nums));