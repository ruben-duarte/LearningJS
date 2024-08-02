// Data Structures
// allow manage data

// Arrays Objects Maps Sets

// Diferent tasks require different dataStructures

// Ordered List of Data - duplicates allowed
// ==============ArrAYS
console.log('==arrays')
let myArray = [ 1, 5, 7, 9];
myArray[3]; 
// insertion order is kept, access via index, iterable
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

// ========Objects
// Key value pairs of Data - Unordered allowed
// unOrdered key value pair, element access via key, not iterable only with for in
// keys are unique, values are not
// Keys have to be strings or symbols, construct data+methods
console.log('==objects')

let myObject = {
  name : 'Miyagi',
  age : 20
};

let user = {
  name: 'Akira',
  age: 22,
  greet() {
    console.log("Hi, I'm" + this.name);
  }
};

let person = { 
  firstName: 'John',
  age: 33,
  hobbies: ['reading', 'tenis'],
  greet() {
    console.log('Hi I am ' + this.firstName + ' ' + this.lastName);
  }

};

console.log(person['firstName']);
console.log(person.age);
person.lastName = 'Suarez';
console.log(person);
delete person.hobbies;
console.log(person);
person.greet();


// Key value pairs of Data - Ordered  and iterable allowed
let myMap = new Map();
myMap.set('hello', 'world');
// key value pairs ordered , acces via key, iterable
// Keys are unique values are not, keys can by anything
//pure data storage, optimized for data access

const resultData = new Map();
resultData.set('Math', 5.0);
resultData.set('German', null);
                //key    value
const germany = { name: 'Germany', population:500 };
resultData.set(germany, 0.90);
console.log('======> Map')

for (const el of resultData) {
  console.log(el);
}

console.log("===== array set object map")
console.log(myArray, mySet, myObject, myMap)

//WeakSet weakMap
//values and keys are only weakly referenced, garbage collection can delete values and keys if not used anywhere

// Custom dataStructures are build by the user
// linked List

//every element knows about the next element, efficient resizing and insertion

console.log('=======LinkedList')

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if ( this.tail ) {
      this.tail.next = newNode; //newNode is stored in the next propierty of the previous last node
    }
    this.tail = newNode;
  }
}