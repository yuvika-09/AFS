function isAllowedtoVote(age) {
    if (age < 18) {
        return false;
    }
    return true;
}

let result = isAllowedtoVote();  // age -> undefined so it returns true
console.log(result); 

let user = {
    name : "Yuvika"
}
console.log(user.age); // age is not defined in user, so it will print undefined
console.log(isAllowedtoVote(user.age))  // return true because age is undefined