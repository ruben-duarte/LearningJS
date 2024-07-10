// inver a list
let initial = "=";
let middle = "+";
let final = "/";

let wallInitial = Array.from({ length:3 }, () => initial);
console.log(wallInitial);

const newArray = Array.from({ length: 3 }, () => initial)
                  .concat(Array.from({ length: 3 }, () => middle))
                  .concat(Array.from({ length: 3 }, () => final));

console.log(newArray);
let result = newArray.join('');

const inversedArray = newArray.reverse();
console.log(inversedArray);
let result2 = inversedArray.join('');
console.log(result);
console.log(result2);