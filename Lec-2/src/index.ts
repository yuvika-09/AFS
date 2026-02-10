// UNION type -> combine multiple types to create single type using OR
// let a = 10;
// a = "18";

type numberorstring = number | string;
let a : numberorstring;
a = 10;
a = "18";


// object structure can be defined through any of the keywords (interface and type)
interface Employee {
    name : string,
    empID : string,
    age : number,
    dept : string,
    salary : number,
    phoneNo : number
}

interface TeamLead {
    name : string,
    empID : string,
    age : number,
    dept : string,
    salary : number,
    projectID : number,
    projectName : string,
    isActive : boolean
}

// union of employee nd teamlead (can be employee or teamlead or both)
type EmpOrTeam = Employee | TeamLead;

let emp1 : EmpOrTeam = {
    name : "Yuvika",
    empID : "CSE27",
    age : 20,
    dept : "CSE",
    salary : 25,
    phoneNo : 123,
    projectID : 123,
    projectName : "typescript",
    isActive : true
}


// INTERSECTION  -> &  (properties of both)
type EmpAndTeam = Employee & TeamLead;

let emp2 : EmpAndTeam = {
    name : "Yuvika",
    empID : "CSE27",
    age : 20,
    dept : "CSE",
    salary : 25,
    phoneNo : 123,
    projectID : 123,
    projectName : "typescript",
    isActive : true
}
console.log(emp1.age);


// 1. can i create union or intersection type using interface -> NO (only using type)
// interface EmpOrTeam2 = Employee | TeamLead

// 2. interface is expandable but not type
// interface can be expanded(combined if declared multiple times)
// interface Employee {
//     bloodGrp : string
// }
let emp3:Employee = {
    name : "Yuvii",
    empID : "CSE87",
    age : 20,
    dept : "CSE",
    salary : 10,
    phoneNo : 25,
    // bloodGrp : "AB-"
} 
// type cant be expanded
// type TeamLead = {   //gives error
// } 

