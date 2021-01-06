var role = "testprep";

switch (role) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("You get access to create or delete courses.");
    break;
  case "testprep":
    console.log("You get access to create or delete tests.");
    break;
  case "user":
    console.log("You get access to consume content.");
    break;
  default:
    console.log("Invalid character.");
    break;
}