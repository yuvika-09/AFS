// typeNarrowing
// used while runtime value dependency
function upperCase(arg:number|string) {
    if(typeof(arg) == "string")
        return arg.toUpperCase();
    else 
        return arg;
}
upperCase("abbb");



interface User {
    name : string,
    age : number,
    phone ?: number  
}
let u1:User = {
    name : "yuvika",
    age : 20,
    // phone : 862 
}
function gettPhoneNo(arg:User):number {
    if("phone" in arg)
        return arg.phone;
    else return 0;
}
let result:number = gettPhoneNo(u1)


interface Person {
    role : string,
    permission ?: string[]
}
let user:Person = {
    role : "user"
}
let admin:Person = {
    role : "admin",
    permission : ["write" , "delete" , "update"]
}
function writeBlog(user:Person):string {
    if("permission" in user){
        let permission = user.permission;
        if(permission.includes("write")) {
            // do task
            return "blog is written";
        }
    }
        return "not authorized";
}
writeBlog({role:"user"});


// type move = "up" | "down" | "right" | "left"  //define type directly using value
type success = {
    status : "200",
    data : []
}
type error = {
    status : "404",
    message : ""
}
type APIresponse = success | error;
function sendResponse(response:APIresponse) {
    if(response.status === "200") {
        return response.data;
    }
    return response.message;
}