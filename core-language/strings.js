// creating strings

const myString = new String('hello world');
const myString2 = "Hello world";
const myString3 = 'Hello world';
const myStrting4 = `Hello
world! ${myString}....`;

console.log`Hello world`;
console.log`Hello ${myString} how are ${"you"}`;

function test (string, name, country) {
  console.log(string, name, country);
}

const name = 'Miyagi';
const country = 'Japan';

test`hello to ${name} from ${country}`; 

// string length

const StringSize = myString2.length;

// accessing characters
console.log(myString[2]);
console.log(myString.charAt(3));

// looping

for ( let i = 0; i < myString.length; i++ ) {
  console.log(myString[i]);
}

// modifying strings -- inmutable
myString[3] = "o"; // error inmutable object

console.log(myString.replace("l", "k")); // it's a new string
console.log(myString);
console.log(myString.replaceAll("l", "p")); // it's a new string
console.log(myString);



