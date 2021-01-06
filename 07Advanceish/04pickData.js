// const user = ["Milan", 3, "admin"];

// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;           // me widiyta apita array eke data vlta keys denna puluwn                                                                                                                                                                                                                                                                                                                                                                                                                                      

// console.log(name);

const User = {
    name : "Milan",
    courseCount : 3,
    role : "Admin"
}

console.log(User.courseCount);

const { name, courseCount, role } = User;       // api methanadi krnne name ekk nathi object ekakata "User" kiyna object eka
                                                // copy krgnna eka
// const { name, myCourseCount, role } = User;  // habai apita ekta me widiyta keyswalta "User" object eke tyena key walata wada
                                                // wenas key  use krnna baa.. error ekk enwa
console.log(courseCount);