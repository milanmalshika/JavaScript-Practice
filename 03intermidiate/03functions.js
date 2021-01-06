tipper(85);

function tipper(a) {
    var bill = parseInt(a);     //strings, float int bawata harawaii
    console.log(bill+5);
}

var bigTipper = function (a) {
    var bill = parseInt(a);     //strings, float int bawata harawaii
    console.log(bill + 5);
}

tipper(5.5);
tipper("5");
tipper("a");
tipper(true);

bigTipper(220);