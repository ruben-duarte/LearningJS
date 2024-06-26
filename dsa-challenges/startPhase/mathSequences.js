function isArithmetic(array){
    let difference = array[1] - array[0];
    let count = 0;
    for(let i=0; i < array.length - 1; i++){
        if (array[i+1] - array[i] === difference){
            count++;
            continue;
        }else {
            break;
        }
    }
    if (count === array.length - 1){
        return true;
    }
    
}

function isGeometric(array){
    let difference = array[1] / array[0];
    let count = 0;
    for(let i=0; i < array.length - 1; i++){
        if (array[i+1] / array[i] === difference){
            count++;
            continue;
        }else {
            break;
        }
    }
    if (count === array.length - 1){
        return true;
    }
}

function mathSequences(arr){
    if (isArithmetic(arr)){
        return `Arithmetic`;
    }
    else if (isGeometric(arr)){
        return `Geometric`;
    }
    else {
        return -1;
    }
}

let result1 = mathSequences([2,4,6,8])
let result2 = mathSequences([3,9,27])
let result3 = mathSequences([3,9,5])

console.log(result1);
console.log(result2);
console.log(result3);
