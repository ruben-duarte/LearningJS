// Data Structures
// allow manage data

// Arrays Objects Maps Sets

// Diferent tasks require different dataStructures

// Ordered List of Data - duplicates allowed
// ==============ArrAYS
console.log('==arrays')
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

names.splice(2,1);
console.log(names);

// ========Sets
// Unordered List of Data - no duplicates allowed
let mySet = new Set();
mySet.add('item1');
// Insertion order is not stored, element access and extraction via method
// iterable, size dinamyc, duplicates value not allowed
// Deletion and finding elements fast

const ids = new Set();

ids.add('hi');
ids.add(2);
ids.add('hola');
ids.add(7);

console.log('==sets')
for (const item of ids) {
  console.log(item);
}

ids.has('hola');
ids.delete(2);
console.log(ids);


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

