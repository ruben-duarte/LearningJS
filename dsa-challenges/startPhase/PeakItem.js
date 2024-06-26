/*Find a peak element which is not smaller than its neighbours
Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

Note: If the array is increasing then just print the last element will be the maximum value.

Example:

Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

Input: array[] = {10, 20, 15, 2, 23, 90, 67}
Output: 20 or 90
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

links: 
https://flexiple.com/javascript/get-last-array-element-javascript
https://github.com/PacktPublishing/70-JavaScript-Challenges---Data-Structures-and-Algorithms/tree/main/01-basic-challenges-1/01-hello-world

https://www.educative.io/blog/data-structures-arrays-javascript-tutorial

https://techscriptlab.com/javascript-array-coding-challenges/

https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/

https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

https://flexiple.com/javascript/get-last-array-element-javascript
*/

// función peak element
function peakElement(array){
// if es el primer elemento es mayor que el siguiente
  if(array[0] > array[1]){
    return array[0];
  }
// return element
// recorrer array comparar si el elemento en la mitad es mayor que los vecinos 
  for (let i = 0; i < array.length - 1; i++){
    if(array[i+1] > array[i] && array[i+1] > array[i+2]){
    return array[i+1];
    }    
  }
// hasta penultimo elemento

// if es el ultimo elemento check es mayor que el anterior
  if(array[array.length - 1] > array[array.length - 2]){
    return array[array.length - 1];
  }  
// return element
}

let test = peakElement([10, 20, 15, 2, 23, 90, 67]);
console.log(test);
