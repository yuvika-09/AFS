"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstVal(arg) {
    return arg[0];
}
let val = firstVal(["A", "BB", "CCC"]);
// val.toLowerCase();   //gives error cz this function donot exist for numOrStr type
// using genrics -> to preserve type
function firstVal2(arg) {
    return arg[0];
}
let val2 = firstVal2(["A", "BB", "CCC"]);
val2?.toLowerCase(); // if val comes undefined so it cant run that function thats why use ? mark to make it optional
let val3 = firstVal2([1, 2, 3]);
val3?.toString();
let u1 = {
    name: "yuvika",
    age: 20,
    // phone : 862 
};
console.log(u1.phone);
//# sourceMappingURL=index.js.map