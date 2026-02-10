// primitive data type --> number, string, boolean, undefined, null

let a : number;
// console.log(a) //gives error cz it is undefined nd it cannot be stored in number
a = 10;
// a = "hello" //error string in number not allowed
console.log(a);


function isAllowedtoVote(age:number):boolean {
    if (age < 18) {
        return false;
    }
    return true;
}

let result:boolean = isAllowedtoVote(24); 


// function return type
// if no return type given, ts will automatically infer which return type to give acc to the return value
function print():void{
    console.log("hello world")
}
print();