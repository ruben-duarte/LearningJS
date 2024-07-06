array = [12,43,54,34,20];
//array = [12,12,34,20];
//array = [5];

function secondLargestNumber(array) {
  let largestNumber = Number.NEGATIVE_INFINITY;
  let secondLargestNum = Number.NEGATIVE_INFINITY;
  
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > largestNumber ) { 
      secondLargestNum = largestNumber;
      largestNumber  =  array[i];
    } else if ( array[i] > secondLargestNum && array[i] !== largestNumber ){
       secondLargestNum = array[i];
    }  
  }
  return secondLargestNum;

};

let test = secondLargestNumber(array);
console.log(test);