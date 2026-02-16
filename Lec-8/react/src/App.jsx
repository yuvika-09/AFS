import React, { useState } from 'react'

const App = () => {
  // donot change prev state directly, always create a newState value
  // let [state, setState] = useState(0);
  let [user, setUser] = useState([{name:"Yuvika",age:20}]);

  function increaseByOne() {
    // useState(state++) // cannot do this
    // state = state + 1; //can do this
    let newState = state + 1;
    setState(newState)
  }

  // [{name:"Yuvika",age:20}] --> "Yuvi",21 --> [{name:"Yuvika",age:20},{name:"Yuvi",age:21}]
  function addUser(name, age) {
    // user.push(name,age) // [{name:"Yuvika",age:20},"Yuvi", 21]

    // user.push({name:name , age:age})
    // setUser(user);
    // cannot do the above cz we should not change the prev state. it should remain immutable

    // let newUser = [];
    // user.forEach((u) => newUser.push(u))
    // newUser.push({name:name, age:age});
    // setUser(newUser)

    // [1,2,3] = ... ==> 1,2,3    ;    [{},{},{}] = ... ==> {},{},{}  
    let newUser = [...user,{name:name , age:age}] // using spread operator
    setUser(newUser);
  }

  return (
    <div>
      {user.map((u) => {
        // return (<div>
        //   <h2>Name : {u.name}</h2>
        //   <h4>Age : {u.age}</h4>
        // </div>)
        return <UserComponent name={u.name} age={u.age}></UserComponent>
      })}
      <button onClick={()=>addUser("yuvi",21)}>Add User</button> // addUser func passed as a callback function 
    </div>
  )
}

function UserComponent (props) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h4>Age : {props.age}</h4>
    </div>
  )
}

export default App
