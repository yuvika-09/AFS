// create a function which accept 1 parameter --> either number[] or string[]
type numOrStr = number | string;
function firstVal (arg: numOrStr[]) {
    return arg[0];
}
let val = firstVal(["A","BB","CCC"]);
// val.toLowerCase();   //gives error cz this function donot exist for numOrStr type

// using genrics -> to preserve type
function firstVal2<T>(arg:T[]){
    return arg[0];
}
let val2 = firstVal2<string>(["A","BB","CCC"]);
val2?.toLowerCase();   // if val comes undefined so it cant run that function thats why use ? mark to make it optional
let val3 = firstVal2<number>([1,2,3]);
val3?.toString();


// what does ? mark mean here - val3?.toString();   -> to make it optional
interface User {
    name : string,
    age : number,
    phone ?: number  // make phone optional for any user
}
let u1:User = {
    name : "yuvika",
    age : 20,
    // phone : 862 
}
console.log(u1.phone)