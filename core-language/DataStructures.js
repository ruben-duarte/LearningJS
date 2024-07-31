// Data Structures
// allow manage data

// Arrays Objects Maps Sets

// Diferent tasks require different dataStructures

// Ordered List of Data - duplicates allowed
let myArray = [ 1, 5, 7, 9];
myArray[3]; // insertion order is kept, access via index
//size dinamically adjust, duplicates allowed, mix types ok
//deletion - finding / search extra work
const names = ['volkswagen', 'toyota'];
names[1];
names.length;

for (const element of names) {
  console.log(element);
}

names.push('mitsubishi');
const toyotaIndex = names.findIndex(element => element === 'toyota');
console.log(names, ` Toyota index ${toyotaIndex}`)


// Unordered List of Data - no duplicates allowed
let mySet = new Set();
mySet.add('item1');

// Key value pairs of Data - Unordered allowed
let myObject = {
  name : 'Miyagi',
  age : 20
};

// Key value pairs of Data - Ordered  and iterable allowed
let myMap = new Map();
myMap.set('hello', 'world');

console.log(myArray, mySet, myObject, myMap)

// Custom dataStructures are build by the user

