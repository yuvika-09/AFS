// 3. you can implement class using interface which cant be done using type

interface Emp {
    name : String,
    empId : string,
    salary : number,
    getSalary:() => number
}
class SD implements Emp{
    name : String;
    empId : string;
    salary : number;
    constructor(name:string, empId:string, salary:number) {
        this.name = name,
        this.empId = empId,
        this.salary = salary
    }
    getSalary() : number {
        return this.salary;
    }
    pushCode(code:string):void {

    }
}

// class Manager implements Emp {

// }