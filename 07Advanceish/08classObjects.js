// import User from "./07class"             // klin page eken import kla class eka meken export kireemata mema krmaya bhawitha
                                            // kala haka..

const User = require("./07class.js");           // but wadipura mema syntax eken import krganiima wadath hodai.

const Milan = new User("Milan", "milan@gmail.com");     // object ekk create krgena constructor eka nisa name and email parameters
                                                        // lesa pass kla yuthuya.
console.log(Milan.getInfo());

Milan.enrolCourse("React bootcamp");
Milan.enrolCourse("Angular bootcamp");

// console.log(Milan.getCourseList());

let courses = Milan.getCourseList();

courses.forEach( c => console.log(c) );
console.log("hello");
console.log(Milan.courseList);      // meka apita access krnna puluwn wela tynne meka private nathi nisa.. eka private klanm apita
                                    // getCourseList() kiyna method eka haraha witrai courses tika display krganna puluwn wenne..


        /* JS wala private variales hadana kramayak tyenwa --->>> "#courseList" <<<--- mehema.. */