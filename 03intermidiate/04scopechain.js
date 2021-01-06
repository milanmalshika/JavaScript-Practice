var name = "Milan";

console.log("line number 3", name);

function sayName() {
    var name = "kamal";
    console.log("line number 6", name);

    function sayNameTwo() {
        console.log("line number 7", name);
    }
    sayNameTwo();
}

sayName();