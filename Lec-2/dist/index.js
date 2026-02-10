"use strict";
// UNION type -> combine multiple types to create single type using OR
// let a = 10;
// a = "18";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
a = "18";
let emp1 = {
    name: "Yuvika",
    empID: "CSE27",
    age: 20,
    dept: "CSE",
    salary: 25,
    phoneNo: 123,
    projectID: 123,
    projectName: "typescript",
    isActive: true
};
let emp2 = {
    name: "Yuvika",
    empID: "CSE27",
    age: 20,
    dept: "CSE",
    salary: 25,
    phoneNo: 123,
    projectID: 123,
    projectName: "typescript",
    isActive: true
};
console.log(emp1.age);
// 1. can i create union or intersection type using interface -> NO (only using type)
// interface EmpOrTeam2 = Employee | TeamLead
// 2. interface is expandable but not type
// interface can be expanded(combined if declared multiple times)
// interface Employee {
//     bloodGrp : string
// }
let emp3 = {
    name: "Yuvii",
    empID: "CSE87",
    age: 20,
    dept: "CSE",
    salary: 10,
    phoneNo: 25,
    // bloodGrp : "AB-"
};
// type cant be expanded
// type TeamLead = {   //gives error
// } 
//# sourceMappingURL=index.js.map