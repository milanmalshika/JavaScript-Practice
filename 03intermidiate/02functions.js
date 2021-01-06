// function getUserRole(name, role) {
//     switch (role) {
//       case "admin":
//         return "You are the admin.";
//         break;
//       case "sub-admin":
//         return "You are the sub admin";
//         break;
//       case "testprep":
//         return "You are the test prep.";
//         break;
//       case "user":
//         return "You are the user.";
//         break;
//       default:
//         return "Wrong role.";
//         break;
//     }
// }

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} You are the admin.`;
      break;
    case "sub-admin":
      return `${name} You are the sub admin`;
      break;
    case "testprep":
      return `${name} You are the test prep.`;
      break;
    case "user":
      return `${name} You are the user.`;
      break;
    default:
      return `${name} Wrong role.`;
      break;
  }
}

console.log(getUserRole("Milan", "admin"));