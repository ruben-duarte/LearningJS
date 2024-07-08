// nums = [1,2,3,4,5,6,7] k=3 result = [5,6,7,1,2,3,4]

nums = [1,2,3,4,5,6,7];
nums2 = [1,2,3,4,5,6,7];

//nums.pop();
//console.log(nums);

function rotateArray(array, k) {
  // iterate over array
  // start from the end and decrement k times
  let rotateArray = [];  // o(1)
  // the array lenght is changing so
  let initialArrayLength = array.length;
  for ( let index = initialArrayLength - 1; index >= initialArrayLength - k ; index--) {
    // each time pop and push in a new array
    let item = array.pop()   //O(n)
    rotateArray.push(item);
  }
  const ArrayRotated = rotateArray.concat(array);
  return ArrayRotated;
}

let test1 = rotateArray(nums, 2);
let test2 = rotateArray(nums2, 3);

console.log(test1);
console.log(test2);


