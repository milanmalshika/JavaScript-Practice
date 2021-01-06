var user = {
    firstName : "Milan",
    lastName : "Malshika",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    getCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    message : function () {
        return `${this.firstName} enrolled in total of ${this.courseList.length} courses.`;
    }
}

console.log(user.message());

user.getCourse("React JS Course");
user.getCourse("Angular course");
console.log(user.message());

console.table(user.courseList);