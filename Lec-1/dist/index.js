"use strict";
// how to give type to an object
Object.defineProperty(exports, "__esModule", { value: true });
// OBJECT :
// let user = {
//     name : "Yuvika",
//     age : 20,
//     city : "Zrk"
// }
// 1. using object literal
// but if we have to make another obj of same types, then it leads to redundancy
let user = {
    name: "Yuvika",
    age: 20,
    city: "Zrk"
};
let user2 = {
    name: "Diya",
    age: 15,
    city: "Zrk"
};
let user3 = {
    name: "newww",
    age: 20,
    city: "Zrk"
};
let p1 = {
    name: "pppppp",
    age: 1
};
// array type
// let numArr = [1,"23", true, "hi"]
let numArr = [1, 15, 20]; // array size cannot be given
let allUsers = [{ name: "gh", age: 10 }, { name: "jk", age: 41 }, { name: "ui", age: 4 }];
// function to print all users name
function printAllUserName(users) {
    users.forEach((u) => {
        console.log(u.name);
    });
}
printAllUserName(allUsers);
// diff in interface n type
//# sourceMappingURL=index.js.map