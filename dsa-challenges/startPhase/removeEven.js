// Given an array of integers, arr, remove all the even integers from the array.

function removeEven(arr) {
  let size = arr.length;
  let oddNum = [];
  for ( let i = 0; i < size; i++ ){
      if ( arr[i] % 2 !== 0 ) {
          oddNum.push(arr[i]);
      }
  }
  return oddNum;
}

array1 =  [2,4,6,8,10,13,15];
let test1 = removeEven(array1);
console.log(test1);