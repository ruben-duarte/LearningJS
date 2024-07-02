//arrays declaration
let arr = new Array();

let carCounter = {
    numberOfCars: 3,
    maxCars: 200
};

let parkingCar = ["Renault", "Toyota","Volkswagen", carCounter];

parkingCar[2];
parkingCar[3].maxCars;
parkingCar.length;

// add and remove elements from array

parkingCar.push("Tesla");
parkingCar.pop();

// add to the top
parkingCar.unshift("Hyuandai");
parkingCar.shift();

// loop through array

for ( let i = 0; i < parkingCar.length; i++ ) {
console.log(parkingCar[i]);
}

let i = parkingCar.length;
while ( i > 0 ) {
    console.log(parkingCar[i-1]);
    i--;
}

// built in loops

const numbers = [1,2,3,4];
const newNumbers = numbers.map((item,index,array) => {
    return item * 2;
});

//console.log(newNumbers);

const smallNumbers = newNumbers.filter((item,index,array) => {
	return item < 5;
});

console.log(smallNumbers);

const sum = numbers.reduce((prev, item, index, array) => {
	return prev + item;
},0)

const result = numbers.some((item, index, array) => {
	return item < 10;
}); // returns true or false

const result2 = numbers.every((item, index, array) => {
	return item < 10;
}); // returns true or false if every item follows the condition

const restult3 = numbers.find((item, index, array) =>{
	return item < 10;
}); // returns the first element that is true or undefined if none

// spread and rest operators

const nums1 = [1,2,3];
const nums2 = [4,5,6,7];

const finalNums = [...nums1,...nums2];
console.log(finalNums);

// Spread
function sum2(...numbers){
    return numbers;
}

console.log(sum2(nums1,nums2, 7));

// more array methods
// concat

const newArray = nums1.concat(nums2); // new array
const newArray2 = nums1.concat(nums2,nums1); // new array

// slice (start end)

const somePart = nums1.slice(0,2);
const lastPart = nums1.slice(-1);

// splice  removes and adds if necessary (start index, how many deletions)

let fruits = ["cherry", "badea"];
fruits.unshift("borojó");
fruits.push("papaya");
console.log(fruits);

fruits.splice(0,1,"naranja");
console.log(fruits);

// fill
let temperature = [1,2,4,3,4,5];
temperature.fill(0,3);
console.log(temperature);

// find index
const index = temperature.findIndex((item) => item === 2);
console.log(index);

// flat
const numbersArray = [1,23,[34,44],[4,56,[44]]];
// flat one leve of depth
const flatNumbers = numbersArray.flat();
console.log(flatNumbers);
const flatNumbers2 = numbersArray.flat(2);

// reverse
temperature.reverse();

// sort
temperature.sort((a, b) => a - b); //ascending
temperature.sort((a, b) => b - a); //descending









