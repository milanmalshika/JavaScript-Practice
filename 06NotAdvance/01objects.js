var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function () {                 // User kiyna object ekta atha tynnewath natuwa apita puluwn a object
    console.log(`First name is ${this.firstName}`);         // ekta adaala method ekk kisi aulk natuwa hdnna.
}

var u1 = new User("Milan", 2);
u1.getCourseCount();
// console.log(u1);

if (u1.hasOwnProperty("firstName")) {               // me hasOwnProperty eken krnne firstName kiyla ekk object eka athule tyenwd kiyla
    u1.getFirstName();                              // check krganna eka
}

var u2 = new User("Kamal", 3);
u2.getCourseCount();
// console.log(u2);

console.log(u1.firstName);