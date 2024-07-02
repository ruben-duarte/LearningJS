//array = [12,43,54,34,20];
array = [12,12,34,20];
//array = [5];

function secondLargest(array) {
  const uniqueValues = new Set(array);
  uniqueValuesArray = [...uniqueValues];
  //sort array ascending
  uniqueValuesArray.sort((a,b) => a - b);
  // return element in index 1
  if (uniqueValuesArray.length > 1) {
    return uniqueValuesArray[uniqueValuesArray.length-2];
  } else {
    return -1;
  }
 }


 function secondLargestV2(array) {
  const uniqueValues = Array.from(new Set(array));
  uniqueValues.sort( (a, b) => {
  return b-a;
 });
  if (uniqueValues.length >= 2){
    return uniqueValues[1];
  } else {
    return -1;
  }
 }

test = secondLargest(array);
console.log(test);
test1 = secondLargestV2(array);
console.log(test1);
