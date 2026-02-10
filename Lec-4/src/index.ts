// enum -> set of constant values

// 1. use type
type Role = "admin" | "user"

function addBlog(role:Role):string {
    if(role == "user") {
        return "not authorized"
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
enum Role2 {
    user = "user",
    admin = "admin"
}
console.log(Role2.user) // user
console.log(Role2.admin) // admin


function addBlog2(role:Role2):string {
    if(role == "user") {
        return "not authorized"
    }
    // blog add
    return "blog added";
}
addBlog2(Role2.admin);
addBlog2(Role2.user);


// type any
let a:any; // any -> treat this like js (donot check type) , donot use this as this is risky
a:"fdhdj";
a:10;

let b; //give any type implicitly if we donot give any type manually
// to prevent this, write "noImplicitAny": true, in tsconfig.json file under Style Options



// ts utility types