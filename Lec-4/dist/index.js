"use strict";
// enum -> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
function addBlog(role) {
    if (role == "user") {
        return "not authorized";
    }
    // blog add
    return "blog added";
}
addBlog("admin");
addBlog("user");
// addBlog("vjfb"); // gives error
// 2. use enum
// enum Role2 {
//     user,
//     admin 
// }
// console.log(Role2.user) // 0
// console.log(Role2.admin) // 1
// but this 0 or 1 can be very confusing, so we assign value 
// enum Role2 {
//     user = 1,
//     admin = 20
// }
// console.log(Role2.user) // 1
// console.log(Role2.admin) // 20
// we can also assign string to it
var Role2;
(function (Role2) {
    Role2["user"] = "user";
    Role2["admin"] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); // user
console.log(Role2.admin); // admin
function addBlog2(role) {
    if (role == "user") {
        return "not authorized";
    }
    // blog add
    return "blog added";
}
addBlog2(Role2.admin);
addBlog2(Role2.user);
//# sourceMappingURL=index.js.map