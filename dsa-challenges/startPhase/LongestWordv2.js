function longestWord(phrase){
    let maxLength = 0;
    for (let word of phrase){
        if (word.length > maxLength){
            maxLength = word.length;
        }
    }
    return maxLength;
}

let test = longestWord('Hola mundo mango mandarina')
console.log(test);