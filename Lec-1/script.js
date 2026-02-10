"use strict";
// primitive data type --> number, string, boolean, undefined, null
Object.defineProperty(exports, "__esModule", { value: true });
let a;
// console.log(a) //gives error cz it is undefined nd it cannot be stored in number
a = 10;
// a = "hello" //error string in number not allowed
console.log(a);
function isAllowedtoVote(age) {
    if (age < 18) {
        return false;
    }
    return true;
}
let result = isAllowedtoVote(24);
// function return type
// if no return type given, ts will automatically infer which return type to give acc to the return value
function print() {
    console.log("hello world");
}
print();
//# sourceMappingURL=script.js.map