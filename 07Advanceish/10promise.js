const uno = () => {
    return "I am One";
}

// const dos = () => {
//     setTimeout( () => {
//         return "I am Two";
//     }, 3000 )
// }

const dos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("I am Two");
        }, 3000 )
    } )
}

const tres = () => {
    return "I am Three";
}

const callMe = async () => {
    var valOne = uno();
    console.log(valOne);

    var valTwo = await dos();
    console.log(valTwo);

    var valThree = tres();
    console.log(valThree);
}

callMe();