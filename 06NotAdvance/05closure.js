// function init() {
//     var firstName = "Milan";
//     console.log("This is the init.");

//     function sayHello() {
//         console.log(firstName);
//     }

//     return sayHello;
// }

// var val = init();

// val();

function doAddition(x) {
    return (y) => {
        return x+y;
    }
}

// var add5 = doAddition(10);       // me widiyta function call krla apita addition eka krgnna puluwn
// console.log(add5(5));

console.log(doAddition(10)(5));     // keti krmayak bhavitha krla mehema call krganime hakiyawakda pawathinwa