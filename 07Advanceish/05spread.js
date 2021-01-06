// var returnedValue = Math.max(2, 12, 4, 6, 9, 7, 4);

// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3}, {z:4, y:5, x:6});

// console.log(myObj);

function sumOne(a, b) {
    return a+b;
}

var myArr = [1,2];      //apita "sumOne" function ekta "myArr" eka pass krnna ba normally widiyta sumOne(myArr) kiyla.. ehema unot errors 
                        // enwa.. ema nisa eka call krnna nm spread operation ek ona wenne.. array eke elements dekta wada
                        // tibbath mul deka errors natuwa run wenwa..
// console.log(sumOne(...myArr));          // meka tamai spread operation eka 


function sumTwo(...args) {          // apita menna me spread operation eka function eka implement krna thanath use kla haka.
    let sum = 0;                    // a magin apita a function ekta parameters lesa array ekk menma parameters lesa uprima                                    
    for (const arg of args) {       // variables gananak uwada pass kla haka. "sumTwo(1,2,3,4,5,6....)"
      sum += arg;
    }
    return sum;
}

var myArrTwo = [1,2,3,4,5];

console.log(sumTwo(...myArrTwo));       // ema nisa methnda array eka passkra yuththe spread(...) operation eka pawichchi krimeni.