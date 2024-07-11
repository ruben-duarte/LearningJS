//'hola mundo' retorna mundo

// ['hola', 'mundo'] 

// 1.variable asigna el mayor y revisa condicion cual es mayor
// 2.other idea: ordenar array de menor a mayor en longitud
// 3.pointers
// 4.recursion

//  4        5        regresa el mayor en long


// edge cases - vacio, igual longitud, numeros

// idea 1

function longestWord(phrase) {
    let words = phrase.split(" "); //O(1)
    let maxLength = 0; //O(1)

    for (let i = 0; i < words.length - 1 ; i++) {  
        if (words[i].length > words[i+1].length) {  //O(n)
            maxLength = words[i].length 
        } else {
            maxLength = words[i+1]
        }
    }  

    return maxLength // O(1)

}

let test = longestWord('Hola mundo mango mandarina')
console.log(test);