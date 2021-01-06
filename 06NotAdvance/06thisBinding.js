var Milan = {
    firstName : "Milan",
    lastName : "Malshika",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            Role is ${this.role}
            and Course count is ${this.courseCount}
        `);
    }
}

var Kamal = {
    firstName : "Kamal",
    lastName : "Perera",
    role : "Sub-Admin",
    courseCount : 4
}

Milan.getInfo.bind(Kamal)();        // Kamalge getInfo method eka na.. but Milange getInfo method eka tyenwa.. apita eth kamalta  
                                    // get info method eka call krnna onaa.. evita Milan through "bind" method eka haraha call kala haka.

                                    // bind witrk newei godak methods tyenwa a wage

Milan.getInfo.call(Kamal);          // call method eka hrhada ese call kla haka..
                                    
Milan.getInfo();