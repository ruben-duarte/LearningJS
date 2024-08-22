//input: array  output: only positive integers
function postiveNumbers(numbers) {
  const positiveNum = numbers.filter(number => number >= 0);
  return positiveNum
}         

let numbers = [-3,-7,3,4,5];
let test = postiveNumbers(numbers);
console.log(test);