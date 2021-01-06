var User = {
    name : "",
    getUserName : function () {
        console.log(`User name is ${this.name}`);
    },
};

var u1 = Object.create(User);

console.log(u1);

u1.name = "Milan Malshika";

u1.getUserName();