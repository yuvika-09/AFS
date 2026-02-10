// how to give type to an object

// OBJECT :
// let user = {
//     name : "Yuvika",
//     age : 20,
//     city : "Zrk"
// }


// 1. using object literal
// but if we have to make another obj of same types, then it leads to redundancy -> violates DRY principle
let user:{name:string, age:number, city:string} = {
    name : "Yuvika",
    age : 20,
    city : "Zrk"
}

let user2:{name:string, age:number, city:string} = {
    name : "Diya",
    age : 15,
    city : "Zrk"
}


// 2. using interface
interface User {
    name : string, 
    age : number,
    city : string
}

let user3:User = {
    name : "newww",
    age : 20,
    city : "Zrk"
}


// 3. *using type
type Person = {
    name : string,
    age : number
}

let p1:Person = {
    name : "pppppp",
    age : 1
}



// array type
// let numArr = [1,"23", true, "hi"]
let numArr:number[] = [1,15,20]  // array size cannot be given
let allUsers:Person[] = [{name:"gh" , age:10} , {name:"jk" , age:41} , {name:"ui" , age:4}]


// function to print all users name
function printAllUserName (users:Person[]):void {
    users.forEach((u:Person):void => {
        console.log(u.name);
    });
}
printAllUserName(allUsers)

// diff in interface n type