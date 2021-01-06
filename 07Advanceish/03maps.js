var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");            // Map eka kohethma object ekta samaana wenne na.. map kiynne wenama seen ekk
myMap.set(3, "Tres");           // Map eketh key ekai value ekai onima type ekakin tyenna puluwn
myMap.set(4, "Cuatro");

console.log(myMap);

for( let key of myMap.keys() ) {            // apita keyes witrk gnna onanm me widiyta ynna puluwn 
    console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {         // apita values witrk gnna onanm me widiyta krnn puluwn
  console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) {                           // apita keys values kiyna dekama eka paara gnna onanm me vidiyta gnn puluwn
  console.log(`Key is ${key} and Value is ${value}`);
}

myMap.forEach( (key) => console.log(`${key}`) );            // apit for each eka use krnnth puluwn... mekedi key gttata print wenne eeta
                                                            // adala values

myMap.forEach( (v, k) => console.log(`${k} value is ${v}`) );                                                            

myMap.delete(2);            // apita dena lada parameter eka tyena valu eka delete krnn puluwn

console.log(myMap);