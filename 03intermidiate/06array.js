var countries = ["Sri Lanka", "Australia", "England", "Japan"];

var cities = new Array("Galle", "Colombo", "Kandy", "Gampaha");

// console.log(countries);

// console.log(cities);

// console.log(countries[0]);

// console.log(countries.length);       // array eke length eka blagnna puluwn

countries[1] = "France";

// console.log(countries);

// countries.pop();                       // array eke last element eka ain krnna puluwn

// console.log(countries);

// countries.unshift("HELLO");            // array eke mulata data insert krnna puluwn

// console.log(countries);

// countries.shift();                     // array eke mulata tiyena data eka memagin remove weema siduwe

console.log(countries);

console.log(countries.indexOf("England"));  // data ekk array eke tyenwd kiyla danagnn puluwn wagema eyage index eka blagnnth puluwn

console.log(countries.indexOf("Hello"));    // array eke nathi data ekk dunnoth -1 return weema siduwe

console.log(Array.from("Milan"));        // memagin apit string ekk array ekakata convert krgnna puluwn