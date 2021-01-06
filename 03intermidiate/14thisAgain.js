var user = {
    firstName : "Milan",
    lastName : "M",
    courseCount : 4,
    getCourseCount : function () {
        console.log(this);                      // this eka wada krnne mekedi witrai.. regular function wala wada krnne naa..
        // function sayHello() {                // object ekk through yana methods walta witrai this valid wenne
        //     console.log("Hello", this);
        // }
        // sayHello();
    }
}

user.getCourseCount();