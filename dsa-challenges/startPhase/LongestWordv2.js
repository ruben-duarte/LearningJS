function longestWord(phrase){
    let words = phrase.split(" ");
    let maxLength = ""; // O(1)
    for (let word of words){
        if (word.length > maxLength.length){ // O(n)
            maxLength = word;
        }
    }
    return maxLength; // O(1)
}

let test = longestWord('Hola mundo mango mandarina')
console.log(test);