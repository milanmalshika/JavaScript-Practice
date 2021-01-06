function isEven(element) {
    return element%2===0;
}

// isEven = (element) => {
//   return element % 2 === 0;
// }

// console.log(isEven(384293));

// var result = [2, 4, 6, 8].every(isEven);        // meken wenne isEven function ekata array eke siyaluma elements pass krla is evenda kiyla check krnwa

// var result = [2, 4, 6, 8].every((e) => {        // me () => {} mehema ptn gnna.. hbi retun krnwanm witrai {} danne
//     return e %2 === 0;
// })

var result = [2, 4, 6, 8].every((e) => (e%2===0));      // meke return key word eka nathi nisa () => {} danne naa, () => () mehema danne eka nisa

console.log(result);