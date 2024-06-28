//arrays declaration

let carCounter = {
    numberOfCars: 3,
    maxCars: 200
}

let parkingCar = ["Renault", "Toyota","Volkswagen", carCounter];

parkingCar[2];
parkingCar[3].maxCars;
parkingCar.length;

// add and remove elements from array

parkingCar.push("Tesla");
parkingCar.pop();

parkingCar.unshift("Hyuandai");
parkingCar.shift();

// loop through array

for ( let i=0; i < parkingCar.length; i++ ) {
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

