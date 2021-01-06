class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return {name: this.name, email: this.email}
    }

    courseList = [];

    enrolCourse(name) {
        this.courseList.push(name);
    }

    getCourseList() {
        return this.courseList;
    }

    login() {
        console.log("You are successfully logged in..");
    }
}

class SubAdmin extends User {           // Mehema tamai inheritance krnne.. me "SubAdmin"ta Userge tyena ona deyk access krnn puluwn..
    constructor(name, email) {
        super(name, email);
    } 
 
    getAdminInfo() {
        return "I am sub admin.";
    }
}

module.exports = User;          // apita me class eke objects hdla wena page ekaka wada krnna onanm menna me widiyta class eka
                                // export kala yuthuya..

// subadminge object ekk hadana widiya

const tom = new SubAdmin("Tom", "tom@gmail.com");

console.log(tom.getAdminInfo());
tom.login();
console.log(tom.getInfo());