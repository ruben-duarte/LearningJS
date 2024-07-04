/* https://medium.com/techie-delight/500-data-structures-and-algorithms-practice-problems-35afe8a1e222 */

/*
https://www.techiedelight.com/find-pair-with-given-sum-array/

Find a pair with the given sum in an array
Given an unsorted integer array, find a pair with the given sum in it.

Input: nums = [8, 7, 2, 5, 3, 1]
target = 10 
Output: Pair found (8, 2) or Pair found (7, 3)  
Input: nums = [5, 2, 6, 8, 1, 9]
target = 12 
Output: Pair not found
*/

// Brute force

//Empty array to save pairs
const numberPairs = [];
const nums = [8, 7, 2, 6, 4, 5, 3, 1]
let target = 10;
debugger
//Add one number with the rest of the numbers and repeat until ends array
for ( let i = 1; i < nums.length - 1; i++ ) {
  for ( let j = 0; j < nums.length && j != i; j++) {
    let sum = nums[i] + nums[j]; 
    if (sum === target){
      numberPairs.push(nums[i]);
      numberPairs.push(nums[j]);
    }
  }
}

console.log(numberPairs);
// if empty array not empty then print pairs else print not found